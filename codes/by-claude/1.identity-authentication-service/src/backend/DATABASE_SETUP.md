# 🗄️ Database Setup & Management Guide

## 📋 Overview

This guide covers the complete database setup for the **Identity & Authentication Portal**, including:
- PostgreSQL schema for user data, RBAC, and multi-tenancy
- Redis for session management and caching
- Database migrations and seeding
- Development and production configurations

**Reference**: SRS-Grok-V2.md - Part07.1 Data Model Overview

---

## 🏗️ Database Architecture

### PostgreSQL Tables

#### **1. Multi-Tenancy & Users**
- `tenants` - Organization/brand isolation
- `users` - Core user accounts with authentication
- `user_roles` - User-to-role assignments (junction)

#### **2. RBAC System**
- `roles` - Hierarchical role definitions
- `permissions` - Granular permission definitions
- `role_permissions` - Role-to-permission mappings (junction)

#### **3. Security & Sessions**
- `sessions` - JWT session tracking
- `otp_codes` - One-time password codes for 2FA
- `password_reset_tokens` - Password reset tokens
- `email_verification_tokens` - Email verification tokens
- `audit_logs` - Comprehensive audit trail

### Redis Data Structures

- **Sessions**: `session:{sessionId}` - User session data
- **OTP Cache**: `otp:{userId}:{type}` - OTP codes with TTL
- **Rate Limiting**: `ratelimit:{ip}:{endpoint}` - API rate limits
- **Cache**: `cache:{key}` - General purpose caching

---

## 🚀 Quick Start

### 1. Prerequisites

```bash
# Required installations
- PostgreSQL 15+
- Redis 7+
- Node.js 18+
```

### 2. Environment Configuration

Copy the environment template:

```bash
cp .env.example .env
```

Update `.env` with your database credentials:

```env
# PostgreSQL Configuration
DATABASE_URL="postgresql://user:password@localhost:5432/identity_db"
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=identity_db
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_SSL=false

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0
REDIS_KEY_PREFIX=identity:
REDIS_TLS=false
```

### 3. Database Setup

```bash
# Install dependencies
npm install

# Generate Prisma Client
npm run db:generate

# Run migrations
npm run db:migrate

# Seed initial data (optional - for development)
npm run db:seed
```

---

## 📝 Database Management Commands

### Prisma Commands

```bash
# Generate Prisma Client (after schema changes)
npm run db:generate

# Push schema to database (development only)
npm run db:push

# Open Prisma Studio (database GUI)
npm run db:studio

# Validate Prisma schema
npm run prisma:validate

# Format Prisma schema
npm run prisma:format
```

### Migration Commands

```bash
# Run pending migrations
npm run db:migrate

# Check migration status
npm run db:migrate:status

# Rollback last migration (if supported)
npm run db:migrate:down

# Reset database (drop all tables)
npm run db:migrate:reset
```

### Seeding Commands

```bash
# Seed initial data
npm run db:seed

# Complete reset (drop, migrate, seed)
npm run db:reset
```

---

## 🔄 Migration Workflow

### Creating a New Migration

1. **Modify Prisma Schema**:
   ```prisma
   // backend/prisma/schema.prisma
   model NewEntity {
     id        String   @id @default(uuid())
     name      String
     createdAt DateTime @default(now())
   }
   ```

2. **Create SQL Migration**:
   ```bash
   # Create new migration file
   touch backend/src/infrastructure/persistence/migrations/004_create_new_entity.sql
   ```

3. **Write Migration SQL**:
   ```sql
   -- 004_create_new_entity.sql
   CREATE TABLE IF NOT EXISTS new_entity (
       id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
       name VARCHAR(255) NOT NULL,
       created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Run Migration**:
   ```bash
   npm run db:migrate
   ```

5. **Generate Prisma Client**:
   ```bash
   npm run db:generate
   ```

---

## 🌱 Seed Data

The seed script (`backend/prisma/seed.ts`) populates:

### Default Tenants
- **System Tenant** - System-wide tenant
- **Demo Brand** - Example brand for testing
- **Test Company** - Another test tenant

### System Roles
| Role | Level | Description |
|------|-------|-------------|
| SUPER_ADMIN | 0 | Full system access |
| ADMIN | 1 | Tenant administrator |
| CAMPAIGN_MANAGER | 2 | Manage campaigns |
| CONTENT_CREATOR | 3 | Create content |
| ANALYST | 4 | View reports |
| VIEWER | 5 | Read-only access |

### Permissions
- **User Management**: create, read, update, delete users
- **Role Management**: create, read, update, delete, assign roles
- **Campaign Management**: create, read, update, delete campaigns
- **Reports**: read, export reports
- **Settings**: read, update tenant settings
- **Audit**: read audit logs

### Test Users

| Email | Password | Role | Tenant |
|-------|----------|------|--------|
| superadmin@system.com | Password123! | SUPER_ADMIN | System |
| admin@demo.com | Password123! | ADMIN | Demo Brand |
| manager@demo.com | Password123! | CAMPAIGN_MANAGER | Demo Brand |
| creator@demo.com | Password123! | CONTENT_CREATOR | Demo Brand |

---

## 🔒 Security Features

### Row-Level Security (RLS)

All tables implement PostgreSQL RLS for tenant isolation:

```sql
-- Example: Users can only access data from their tenant
CREATE POLICY user_tenant_isolation_policy ON users
    FOR ALL
    USING (tenant_id = current_setting('app.current_tenant_id')::UUID);
```

### Password Hashing

- Algorithm: **bcrypt**
- Rounds: **10**
- Minimum hash length: **60 characters**

### Session Security

- JWT tokens stored in Redis with TTL
- Refresh tokens for extended sessions
- Device fingerprinting for security
- Automatic session expiration

### Audit Logging

All sensitive operations are logged to `audit_logs`:
- User authentication (login, logout, failed attempts)
- Role assignments and changes
- Permission modifications
- Data access and modifications

---

## 📊 Database Schema Diagram

```mermaid
erDiagram
    TENANTS ||--o{ USERS : contains
    TENANTS ||--o{ ROLES : contains
    USERS ||--o{ USER_ROLES : has
    USERS ||--o{ SESSIONS : has
    USERS ||--o{ OTP_CODES : has
    USERS ||--o{ AUDIT_LOGS : generates
    ROLES ||--o{ USER_ROLES : assigned_to
    ROLES ||--o{ ROLE_PERMISSIONS : has
    PERMISSIONS ||--o{ ROLE_PERMISSIONS : granted_by
    
    TENANTS {
        uuid id PK
        string name
        string slug UK
        string api_key UK
        boolean is_active
        boolean consent_gdpr
    }
    
    USERS {
        uuid id PK
        string email UK
        string password_hash
        uuid tenant_id FK
        boolean is_active
        boolean is_verified
        boolean two_factor_enabled
    }
    
    ROLES {
        uuid id PK
        string name
        int level
        uuid tenant_id FK
        boolean is_system
    }
    
    PERMISSIONS {
        uuid id PK
        string resource
        string action
        string scope
    }
```

---

## 🛠️ Troubleshooting

### Common Issues

#### 1. **Connection Refused**
```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql

# Check if Redis is running
redis-cli ping
```

#### 2. **Migration Failed**
```bash
# Check migration status
npm run db:migrate:status

# Reset and retry
npm run db:reset
```

#### 3. **Prisma Client Out of Sync**
```bash
# Regenerate Prisma Client
npm run db:generate

# Rebuild project
npm run build
```

#### 4. **Seed Script Fails**
```bash
# Ensure migrations are up to date
npm run db:migrate

# Run seed with verbose logging
DEBUG=* npm run db:seed
```

---

## 🔍 Database Maintenance

### Backup Database

```bash
# Full backup
pg_dump -U postgres -d identity_db > backup.sql

# Schema only
pg_dump -U postgres -d identity_db --schema-only > schema.sql

# Data only
pg_dump -U postgres -d identity_db --data-only > data.sql
```

### Restore Database

```bash
# Restore from backup
psql -U postgres -d identity_db < backup.sql
```

### Cleanup Old Sessions

```sql
-- Clean up expired sessions (can be scheduled)
DELETE FROM sessions WHERE expires_at < NOW();

-- Clean up expired OTP codes
DELETE FROM otp_codes WHERE expires_at < NOW();

-- Clean up expired tokens
DELETE FROM password_reset_tokens WHERE expires_at < NOW();
DELETE FROM email_verification_tokens WHERE expires_at < NOW();
```

### Optimize Database

```sql
-- Analyze tables for query optimization
ANALYZE;

-- Vacuum to reclaim storage
VACUUM;

-- Reindex tables
REINDEX DATABASE identity_db;
```

---

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Redis Documentation](https://redis.io/documentation)
- SRS-Grok-V2.md - Part07 Database Design
- Access_Control_Tree_Grok.md - RBAC Structure

---

## ⚠️ Production Considerations

### Before Deploying to Production

1. **Change Default Passwords**: Update all seed user passwords
2. **Enable SSL**: Set `DATABASE_SSL=true` and `REDIS_TLS=true`
3. **Connection Pooling**: Configure appropriate pool sizes
4. **Backups**: Set up automated daily backups
5. **Monitoring**: Enable database monitoring and alerts
6. **Rate Limiting**: Configure Redis-based rate limiting
7. **Audit Logs**: Set up log rotation for `audit_logs` table
8. **Row-Level Security**: Verify RLS policies are active

### Performance Tuning

```sql
-- Add indexes for frequently queried columns
CREATE INDEX CONCURRENTLY idx_custom ON table_name(column_name);

-- Adjust PostgreSQL settings
ALTER SYSTEM SET shared_buffers = '256MB';
ALTER SYSTEM SET effective_cache_size = '1GB';
ALTER SYSTEM SET maintenance_work_mem = '64MB';
```

---

**Status**: ✅ Phase 1.4 Complete - Database Schema Setup
**Next Phase**: 1.5 Domain Layer Implementation
