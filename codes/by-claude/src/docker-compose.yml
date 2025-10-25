# ==============================================================================
# IDENTITY & AUTH UNIFIED PORTAL - DOCKER COMPOSE DEVELOPMENT ENVIRONMENT
# Tham chiếu: SRS-Grok-V2.md - Part14.2 Container Architecture
# Purpose: Complete development stack với PostgreSQL, Redis, Backend, Frontend
# ==============================================================================

version: '3.8'

# ==============================================================================
# SERVICES CONFIGURATION
# ==============================================================================

services:
  # ==============================================================================
  # POSTGRESQL DATABASE SERVICE
  # ==============================================================================
  postgres:
    image: postgres:15-alpine
    container_name: identity-postgres
    restart: unless-stopped
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: identity_auth_db
      POSTGRES_USER: identity_user
      POSTGRES_PASSWORD: identity_password
      POSTGRES_INITDB_ARGS: "--encoding=UTF-8 --lc-collate=C --lc-ctype=C"
      PGDATA: /var/lib/postgresql/data/pgdata
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./backend/prisma/init.sql:/docker-entrypoint-initdb.d/init.sql:ro
    networks:
      - identity-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U identity_user -d identity_auth_db"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 10s
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  # ==============================================================================
  # REDIS CACHE SERVICE
  # ==============================================================================
  redis:
    image: redis:7-alpine
    container_name: identity-redis
    restart: unless-stopped
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes --requirepass ""
    volumes:
      - redis_data:/data
      - ./deployment/redis/redis.conf:/usr/local/etc/redis/redis.conf:ro
    networks:
      - identity-network
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 5
      start_period: 5s
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  # ==============================================================================
  # BACKEND SERVICE (NestJS)
  # ==============================================================================
  backend:
    build:
      context: .
      dockerfile: deployment/docker/Dockerfile.backend
      target: development
    container_name: identity-backend
    restart: unless-stopped
    ports:
      - "3001:3001"
      - "9229:9229" # Debug port
    environment:
      NODE_ENV: development
      PORT: 3001
      DATABASE_URL: postgresql://identity_user:identity_password@postgres:5432/identity_auth_db
      REDIS_URL: redis://redis:6379
      JWT_SECRET: dev-jwt-secret-change-in-production
      JWT_REFRESH_SECRET: dev-refresh-secret-change-in-production
      FRONTEND_URL: http://localhost:3000
      CORS_ORIGIN: http://localhost:3000
      # Twilio configuration (development)
      TWILIO_ACCOUNT_SID: ${TWILIO_ACCOUNT_SID:-}
      TWILIO_AUTH_TOKEN: ${TWILIO_AUTH_TOKEN:-}
      TWILIO_PHONE_NUMBER: ${TWILIO_PHONE_NUMBER:-}
      # SendGrid configuration (development)
      SENDGRID_API_KEY: ${SENDGRID_API_KEY:-}
      SENDGRID_FROM_EMAIL: ${SENDGRID_FROM_EMAIL:-noreply@psp-platform.local}
      # Development specific
      LOG_LEVEL: debug
      DEVELOPMENT_MODE: true
      HOT_RELOAD: true
    volumes:
      - ./backend:/app/backend:cached
      - ./shared:/app/shared:cached
      - backend_node_modules:/app/backend/node_modules
      - /app/backend/dist # Anonymous volume for build artifacts
    working_dir: /app/backend
    command: npm run dev
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - identity-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3001/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  # ==============================================================================
  # FRONTEND SERVICE (React + Vite)
  # ==============================================================================
  frontend:
    build:
      context: .
      dockerfile: deployment/docker/Dockerfile.frontend
      target: development
    container_name: identity-frontend
    restart: unless-stopped
    ports:
      - "3000:3000"
      - "24678:24678" # Vite HMR port
    environment:
      NODE_ENV: development
      VITE_API_URL: http://localhost:3001/api
      VITE_APP_NAME: PSP Identity Portal
      VITE_APP_VERSION: 1.0.0
      VITE_ENVIRONMENT: development
      # Feature flags
      VITE_FEATURE_DARK_MODE: true
      VITE_FEATURE_REAL_TIME_UPDATES: true
      VITE_FEATURE_ADVANCED_SEARCH: true
      VITE_FEATURE_BULK_OPERATIONS: true
      # Development specific
      VITE_HMR_PORT: 24678
      VITE_HOST: 0.0.0.0
    volumes:
      - ./frontend:/app/frontend:cached
      - ./shared:/app/shared:cached
      - frontend_node_modules:/app/frontend/node_modules
      - /app/frontend/dist # Anonymous volume for build artifacts
    working_dir: /app/frontend
    command: npm run dev -- --host 0.0.0.0 --port 3000
    depends_on:
      - backend
    networks:
      - identity-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 20s
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  # ==============================================================================
  # ADMINER (Database Administration Tool)
  # ==============================================================================
  adminer:
    image: adminer:4.8.1
    container_name: identity-adminer
    restart: unless-stopped
    ports:
      - "8080:8080"
    environment:
      ADMINER_DEFAULT_SERVER: postgres
      ADMINER_DESIGN: pepa-linha
    depends_on:
      - postgres
    networks:
      - identity-network
    profiles:
      - tools # Only start when 'tools' profile is specified

  # ==============================================================================
  # REDIS COMMANDER (Redis Administration Tool)
  # ==============================================================================
  redis-commander:
    image: rediscommander/redis-commander:latest
    container_name: identity-redis-commander
    restart: unless-stopped
    ports:
      - "8081:8081"
    environment:
      REDIS_HOSTS: local:redis:6379
      HTTP_USER: admin
      HTTP_PASSWORD: admin
    depends_on:
      - redis
    networks:
      - identity-network
    profiles:
      - tools # Only start when 'tools' profile is specified

  # ==============================================================================
  # MAILHOG (Email Testing Tool)
  # ==============================================================================
  mailhog:
    image: mailhog/mailhog:latest
    container_name: identity-mailhog
    restart: unless-stopped
    ports:
      - "1025:1025" # SMTP port
      - "8025:8025" # Web UI port
    networks:
      - identity-network
    profiles:
      - tools # Only start when 'tools' profile is specified

# ==============================================================================
# NETWORKS CONFIGURATION
# ==============================================================================

networks:
  identity-network:
    driver: bridge
    name: identity-auth-network
    ipam:
      driver: default
      config:
        - subnet: 172.20.0.0/16

# ==============================================================================
# VOLUMES CONFIGURATION
# ==============================================================================

volumes:
  # Persistent data volumes
  postgres_data:
    driver: local
    name: identity_postgres_data

  redis_data:
    driver: local
    name: identity_redis_data

  # Node modules cache volumes (for faster rebuilds)
  backend_node_modules:
    driver: local
    name: identity_backend_node_modules

  frontend_node_modules:
    driver: local
    name: identity_frontend_node_modules

# ==============================================================================
# DEVELOPMENT PROFILES
# ==============================================================================

# Usage examples:
# docker-compose up                          # Start core services (postgres, redis, backend, frontend)
# docker-compose --profile tools up         # Start all services including admin tools
# docker-compose up postgres redis          # Start only database services
# docker-compose up -d                      # Start in detached mode
# docker-compose logs -f backend            # Follow backend logs
# docker-compose exec backend npm run test  # Run tests in backend container
# docker-compose exec postgres psql -U identity_user -d identity_auth_db  # Connect to database

# ==============================================================================
# HEALTH CHECK ENDPOINTS
# ==============================================================================

# Backend Health: http://localhost:3001/health
# Frontend Health: http://localhost:3000
# Database Admin: http://localhost:8080 (with tools profile)
# Redis Admin: http://localhost:8081 (with tools profile)
# Email Testing: http://localhost:8025 (with tools profile)

# ==============================================================================
# ENVIRONMENT VARIABLES
# ==============================================================================

# Required environment variables (set in .env file):
# TWILIO_ACCOUNT_SID=your_twilio_account_sid
# TWILIO_AUTH_TOKEN=your_twilio_auth_token
# TWILIO_PHONE_NUMBER=+1234567890
# SENDGRID_API_KEY=your_sendgrid_api_key
# SENDGRID_FROM_EMAIL=noreply@psp-platform.com

# ==============================================================================
# QUICK COMMANDS
# ==============================================================================

# Start development environment:
# npm run docker:up

# Stop development environment:
# npm run docker:down

# View logs:
# npm run docker:logs

# Build images:
# npm run docker:build

# Reset database:
# docker-compose down -v postgres && docker-compose up postgres

# ==============================================================================
# SECURITY NOTES
# ==============================================================================

# 1. Default passwords are for development only
# 2. Change all secrets in production
# 3. Use proper SSL certificates in production
# 4. Restrict network access in production
# 5. Enable authentication for admin tools in production
# 6. Use secure Redis configuration in production
# 7. Configure proper backup strategies for production
