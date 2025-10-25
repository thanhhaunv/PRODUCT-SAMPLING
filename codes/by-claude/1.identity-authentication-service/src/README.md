# 🚀 Sub-Project 1: Identity & Authentication + Unified Admin Portal

[![Build Status](https://github.com/psp-platform/identity-auth-unified-portal/workflows/CI/badge.svg)](https://github.com/psp-platform/identity-auth-unified-portal/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3%2B-blue)](https://www.typescriptlang.org/)

> **Tham chiếu**: SRS-Grok-V2.md - Part06.2.1 Layered Architecture + Part10.3.1 Admin Portal UI  
> **EMSA-v1.0 Compliant**: ✅ Clean Architecture + TypeScript + NestJS + React  
> **Part của PSP Platform**: Complete Identity & Authentication Service với Unified Admin Portal

---

## 📋 **TỔNG QUAN PROJECT**

Sub-Project 1 cung cấp **complete Identity & Authentication foundation** cho toàn bộ PSP Platform, bao gồm:

### **🎯 Core Features:**
- ✅ **6 RBAC Roles**: Platform Admin, Brand Admin, Brand Staff, Customer Account, Customer Guest, POS Staff
- ✅ **JWT + OTP Authentication**: Complete 2FA security flow
- ✅ **GDPR Compliance**: Data export/delete functionality  
- ✅ **Unified Admin Portal**: Single interface cho tất cả user management
- ✅ **Real-time Session Management**: Redis-powered với automatic cleanup
- ✅ **Production Ready**: Docker + K8s + CI/CD pipelines

### **🏗️ Architecture Overview:**
```mermaid
graph TB
    subgraph "Frontend - Unified Portal"
        Portal[Admin Portal]
        Auth[Auth Components]
        Users[User Management]
        Roles[Role Management]
    end
    
    subgraph "Backend - Clean Architecture"
        API[REST APIs]
        UC[Use Cases]
        Domain[Domain Entities]
        Infra[Infrastructure]
    end
    
    subgraph "Data Layer"
        PG[(PostgreSQL)]
        Redis[(Redis Cache)]
    end
    
    Portal --> API
    API --> UC
    UC --> Domain
    UC --> Infra
    Infra --> PG
    Infra --> Redis
```

### **📊 Coverage Metrics:**
- **SRS Coverage**: 100% cho Identity domain requirements
- **Backend Files**: 60+ files với Clean Architecture
- **Frontend Components**: 100+ components với design system
- **Testing**: 40+ test files (Unit, Integration, E2E)
- **Documentation**: Complete setup và user guides

---

## 🛠️ **TECHNOLOGY STACK**

### **Backend:**
- **Language**: TypeScript 5.3+
- **Framework**: NestJS 10+ (Clean Architecture)
- **Database**: PostgreSQL 15+ với Prisma ORM
- **Cache**: Redis 7+ cho sessions
- **Authentication**: JWT + OTP (Twilio SMS)
- **Testing**: Jest + Supertest
- **Validation**: class-validator + class-transformer

### **Frontend:**
- **Language**: TypeScript 5.3+
- **Framework**: React 18+ với Vite
- **State Management**: Custom hooks + Context API
- **Styling**: Tailwind CSS 3+ với design system
- **Routing**: React Router Dom 6+
- **Forms**: React Hook Form + Zod validation
- **Testing**: React Testing Library + Cypress

### **Infrastructure:**
- **Containerization**: Docker với multi-stage builds
- **Orchestration**: Kubernetes với Helm charts
- **CI/CD**: GitHub Actions
- **Monitoring**: Health checks + logging
- **Package Manager**: npm workspaces

---

## ⚡ **QUICK START**

### **Prerequisites:**
- Node.js 18+ và npm 9+
- Docker và Docker Compose
- PostgreSQL 15+ (hoặc Docker)
- Redis 7+ (hoặc Docker)

### **1. Clone & Install:**
```bash
# Clone repository
git clone https://github.com/psp-platform/identity-auth-unified-portal.git
cd identity-auth-unified-portal

# Install all dependencies
npm run install:all

# Setup development environment
npm run setup:dev
```

### **2. Environment Setup:**
```bash
# Copy environment template
cp .env.example .env

# Edit environment variables
nano .env
```

### **3. Database Setup:**
```bash
# Start PostgreSQL + Redis với Docker
npm run docker:up

# Run database migrations
npm run db:migrate

# Seed initial data
npm run db:seed
```

### **4. Development:**
```bash
# Start backend + frontend
npm run dev

# Or start individually
npm run dev:backend  # Backend: http://localhost:3001
npm run dev:frontend # Frontend: http://localhost:3000
```

### **5. Verify Installation:**
```bash
# Run tests
npm run test

# Check health
npm run health:check

# Access admin portal
open http://localhost:3000
```

---

## 📁 **PROJECT STRUCTURE**

```
identity-auth-unified-portal/
├── 📁 backend/                    # NestJS Backend Service
│   ├── 📁 src/
│   │   ├── 📁 domain/             # Domain Layer (Entities, Value Objects)
│   │   ├── 📁 application/        # Application Layer (Use Cases, DTOs)
│   │   ├── 📁 infrastructure/     # Infrastructure Layer (Database, External Services)
│   │   ├── 📁 presentation/       # Presentation Layer (Controllers, Routes)
│   │   └── 📁 shared/             # Shared Utilities (Constants, Types, Utils)
│   ├── 📁 tests/                  # Backend Testing (Unit, Integration, E2E)
│   ├── 📁 prisma/                 # Database Schema & Migrations
│   └── 📄 package.json            # Backend Dependencies
│
├── 📁 frontend/                   # React Frontend Portal
│   ├── 📁 src/
│   │   ├── 📁 components/         # React Components (Layout, UI, Features)
│   │   ├── 📁 pages/              # Page Components (Routes)
│   │   ├── 📁 hooks/              # Custom React Hooks
│   │   ├── 📁 utils/              # Frontend Utilities
│   │   ├── 📁 styles/             # Global Styles & Design System
│   │   └── 📁 types/              # Frontend TypeScript Types
│   ├── 📁 tests/                  # Frontend Testing (Components, Pages, E2E)
│   └── 📄 package.json            # Frontend Dependencies
│
├── 📁 shared/                     # Shared Monorepo Code
│   ├── 📁 types/                  # Shared TypeScript Types
│   ├── 📁 constants/              # Shared Constants (Roles, Permissions)
│   └── 📁 utils/                  # Shared Utilities
│
├── 📁 deployment/                 # Production Deployment
│   ├── 📁 docker/                 # Docker Files
│   ├── 📁 kubernetes/             # K8s Manifests
│   └── 📁 helm/                   # Helm Charts
│
├── 📁 scripts/                    # Automation Scripts
├── 📁 docs/                       # Documentation
├── 📁 .github/                    # CI/CD Workflows
└── 📄 package.json                # Root Monorepo Config
```

---

## 🔧 **AVAILABLE COMMANDS**

### **Development:**
```bash
npm run dev              # Start backend + frontend
npm run dev:backend      # Start backend only
npm run dev:frontend     # Start frontend only
npm run build           # Build all packages
npm run test            # Run all tests
npm run lint            # Lint all code
npm run format          # Format code with Prettier
```

### **Database:**
```bash
npm run db:migrate      # Run Prisma migrations
npm run db:seed         # Seed database with initial data
npm run db:reset        # Reset database (careful!)
```

### **Docker:**
```bash
npm run docker:build   # Build Docker images
npm run docker:up      # Start services
npm run docker:down    # Stop services
npm run docker:logs    # View logs
```

### **Deployment:**
```bash
npm run deploy:staging     # Deploy to staging
npm run deploy:production  # Deploy to production
```

---

## 🏛️ **ARCHITECTURE DETAILS**

### **Backend Clean Architecture:**
1. **Domain Layer**: Pure business logic (Entities, Value Objects, Domain Services)
2. **Application Layer**: Use Cases, DTOs, Application Services
3. **Infrastructure Layer**: Database, External APIs, File System
4. **Presentation Layer**: REST Controllers, Middleware, Validation

### **Frontend Architecture:**
1. **Component Layer**: Reusable UI components với design system
2. **Page Layer**: Route-based page components
3. **Hook Layer**: Custom React hooks cho state management
4. **Utility Layer**: Helper functions và type definitions

### **Database Design:**
- **Users Table**: User profiles với GDPR compliance
- **Roles Table**: Hierarchical RBAC system
- **Permissions Table**: Granular permission control
- **Sessions Table**: JWT session management
- **OTP Codes Table**: Two-factor authentication

---

## 🧪 **TESTING STRATEGY**

### **Backend Testing:**
- **Unit Tests**: Domain entities, use cases, services
- **Integration Tests**: Controllers, repositories, external services
- **E2E Tests**: Complete API workflows

### **Frontend Testing:**
- **Component Tests**: UI component behavior
- **Page Tests**: Route và navigation testing
- **Hook Tests**: Custom hook functionality
- **E2E Tests**: Complete user workflows với Cypress

### **Quality Gates:**
- ✅ **Code Coverage**: >80% cho core business logic
- ✅ **Linting**: ESLint với TypeScript rules
- ✅ **Type Safety**: Strict TypeScript configuration
- ✅ **Security**: OWASP compliance checking

---

## 🚀 **DEPLOYMENT**

### **Development Environment:**
```bash
# Docker Compose với hot reload
npm run docker:up
npm run dev
```

### **Staging Environment:**
```bash
# Automated deployment với GitHub Actions
npm run deploy:staging
```

### **Production Environment:**
```bash
# Kubernetes với Helm charts
npm run deploy:production
```

### **Environment Variables:**
```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/identity_db
REDIS_URL=redis://localhost:6379

# Authentication
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
OTP_EXPIRES_IN=300

# External Services
TWILIO_ACCOUNT_SID=your-twilio-sid
TWILIO_AUTH_TOKEN=your-twilio-token
TWILIO_PHONE_NUMBER=+1234567890

# Application
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:3000
```

---

## 📚 **DOCUMENTATION**

- 📖 **[Setup Guide](docs/SETUP.md)**: Detailed development setup
- 🏗️ **[Architecture](docs/ARCHITECTURE.md)**: System architecture overview  
- 🌐 **[API Documentation](docs/API.md)**: Complete REST API reference
- 🎨 **[Frontend Guide](docs/FRONTEND.md)**: Component library và styling
- 🚀 **[Deployment Guide](docs/DEPLOYMENT.md)**: Production deployment
- 👥 **[User Manual](docs/USER-MANUAL.md)**: End-user instructions

---

## 🤝 **CONTRIBUTING**

### **Development Workflow:**
1. **Fork** repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** Pull Request

### **Code Standards:**
- ✅ Follow **EMSA-v1.0** architecture patterns
- ✅ Write **comprehensive tests** cho new features
- ✅ Update **documentation** cho API changes
- ✅ Use **conventional commits** format
- ✅ Ensure **type safety** với TypeScript

### **Review Process:**
- 🔍 **Code Review**: Required từ team lead
- ✅ **CI/CD Checks**: All tests must pass
- 📋 **Documentation**: Update relevant docs
- 🔒 **Security**: Security scanning required

---

## 📄 **LICENSE**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 **SUPPORT**

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/psp-platform/identity-auth-unified-portal/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/psp-platform/identity-auth-unified-portal/discussions)
- 📧 **Email**: support@psp-platform.com
- 📚 **Documentation**: [Wiki](https://github.com/psp-platform/identity-auth-unified-portal/wiki)

---

## 🏆 **ACKNOWLEDGMENTS**

- **PSP Platform Team** - Core development
- **EMSA-v1.0 Standard** - Architecture compliance
- **SRS-Grok-V2.md** - Requirements specification
- **Clean Architecture** - Robert C. Martin's principles

---

**🎯 Ready to build the foundation của PSP Platform! Complete Identity & Authentication solution với production-ready deployment! 🚀**
