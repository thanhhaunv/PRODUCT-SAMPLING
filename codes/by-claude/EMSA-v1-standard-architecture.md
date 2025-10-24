# 🏗️ ENTERPRISE MICROSERVICE STANDARD ARCHITECTURE (EMSA-v1.0)

## 📋 **ĐỊNH NGHĨA CHUẨN**

**EMSA-v1.0** là chuẩn kiến trúc cố định cho Enterprise Microservices. Khi nhắc đến **"EMSA-v1.0"**, AI/Developer phải implement CHÍNH XÁC theo specification dưới đây.

---

## ⚡ **TECHNOLOGY STACK FOUNDATION**

```yaml
Backend:
  Language: TypeScript
  Runtime: Node.js 18+
  Framework: NestJS 10+
  Database: PostgreSQL 15+ + Prisma ORM
  Cache: Redis 7+
  Testing: Jest + Supertest
  Validation: class-validator + class-transformer

Frontend:
  Language: TypeScript  
  Framework: React 18+ + Vite
  State: Redux Toolkit + RTK Query
  Styling: Tailwind CSS 3+
  Routing: React Router Dom 6+
  Forms: React Hook Form + Zod
  Testing: React Testing Library + Cypress

Infrastructure:
  Containerization: Docker
  Orchestration: Kubernetes
  Package Manager: npm
```

---

## 📁 **EMSA-v1.0 FOLDER STRUCTURE STANDARD**

### **Backend Service Structure:**
```
service-name/
├── backend/
│   ├── src/
│   │   ├── domain/                    # Domain Layer (Pure Business Logic)
│   │   │   ├── entities/              # Business Entities with Rules
│   │   │   ├── value-objects/         # Immutable Value Objects  
│   │   │   ├── repositories/          # Repository Interfaces (Ports)
│   │   │   └── services/              # Domain Services (Complex Logic)
│   │   ├── application/               # Application Layer (Orchestration)
│   │   │   ├── use-cases/             # Use Cases (Application Workflows)
│   │   │   ├── dto/                   # Data Transfer Objects
│   │   │   └── ports/                 # External Service Interfaces
│   │   ├── infrastructure/            # Infrastructure Layer (External Concerns)
│   │   │   ├── persistence/           # Database Implementation
│   │   │   │   ├── repositories/      # Repository Implementations
│   │   │   │   ├── models/            # ORM Models (Prisma/TypeORM)
│   │   │   │   └── migrations/        # Database Migrations
│   │   │   ├── external-services/     # Third-party Service Adapters
│   │   │   └── config/                # Configuration Management
│   │   ├── presentation/              # Presentation Layer (API Interface)
│   │   │   ├── controllers/           # REST Controllers
│   │   │   ├── middleware/            # Express/NestJS Middleware
│   │   │   ├── routes/                # Route Definitions
│   │   │   └── validators/            # Input Validation
│   │   └── shared/                    # Shared Utilities
│   │       ├── constants/             # Application Constants
│   │       ├── exceptions/            # Custom Exceptions
│   │       ├── types/                 # TypeScript Type Definitions
│   │       └── utils/                 # Utility Functions
│   ├── tests/                         # Testing Structure
│   │   ├── unit/                      # Unit Tests (Domain/Application)
│   │   ├── integration/               # Integration Tests (Infrastructure)
│   │   └── e2e/                       # End-to-End Tests
│   ├── package.json                   # Dependencies + Scripts
│   ├── tsconfig.json                  # TypeScript Configuration
│   ├── jest.config.js                 # Testing Configuration
│   ├── eslint.config.js               # Code Quality Rules
│   └── prisma/schema.prisma           # Database Schema
```

### **Frontend Application Structure:**
```
frontend/
├── src/
│   ├── components/                    # React Components
│   │   ├── layout/                    # Layout Components (Header, Sidebar)
│   │   ├── ui/                        # Base UI Components (Button, Input)
│   │   ├── [feature-name]/            # Feature-specific Components
│   │   └── shared/                    # Shared Components
│   ├── pages/                         # Page Components (Route Components)
│   ├── hooks/                         # Custom React Hooks
│   ├── store/                         # Redux Store
│   │   ├── slices/                    # Redux Slices
│   │   └── api/                       # RTK Query APIs
│   ├── utils/                         # Utility Functions
│   ├── styles/                        # Global Styles
│   └── types/                         # TypeScript Types
├── package.json                       # Dependencies + Scripts
├── tsconfig.json                      # TypeScript Configuration
├── vite.config.ts                     # Vite Configuration
├── tailwind.config.js                 # Tailwind Configuration
└── index.html                         # Entry HTML
```

---

## 🎯 **EMSA-v1.0 IMPLEMENTATION PATTERNS**

### **1. Domain Entity Pattern:**
```typescript
export class EntityName {
  constructor(
    private readonly id: EntityId,
    private property: ValueObject
  ) {}

  public businessMethod(): void {
    // Business logic here
  }

  public getId(): EntityId {
    return this.id;
  }
}
```

### **2. Use Case Pattern:**
```typescript
@Injectable()
export class OperationEntityUseCase {
  constructor(
    private readonly repository: IEntityRepository,
    private readonly service: IExternalService
  ) {}

  async execute(dto: OperationDTO): Promise<Result> {
    // Workflow orchestration
  }
}
```

### **3. Controller Pattern:**
```typescript
@Controller('entity-name')
export class EntityController {
  constructor(
    private readonly useCase: OperationEntityUseCase
  ) {}

  @Post()
  async create(@Body() dto: CreateDTO) {
    return await this.useCase.execute(dto);
  }
}
```

### **4. Repository Interface Pattern:**
```typescript
export interface IEntityRepository {
  findById(id: string): Promise<Entity | null>;
  save(entity: Entity): Promise<void>;
  delete(id: string): Promise<void>;
}
```

### **5. React Component Pattern:**
```typescript
export const ComponentName: React.FC<Props> = ({ prop1, prop2 }) => {
  const { data, loading } = useHook();

  return (
    <div className="container">
      {/* Component JSX */}
    </div>
  );
};
```

---

## 📦 **EMSA-v1.0 PACKAGE STANDARDS**

### **Backend Dependencies Template:**
```json
{
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/jwt": "^10.0.0",
    "@prisma/client": "^5.0.0",
    "bcryptjs": "^2.4.3",
    "class-validator": "^0.14.0",
    "redis": "^4.6.0"
  },
  "devDependencies": {
    "@nestjs/testing": "^10.0.0",
    "jest": "^29.0.0",
    "prisma": "^5.0.0",
    "typescript": "^5.0.0"
  }
}
```

### **Frontend Dependencies Template:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "@reduxjs/toolkit": "^1.9.0",
    "react-redux": "^8.1.0",
    "tailwindcss": "^3.3.0",
    "react-router-dom": "^6.15.0"
  },
  "devDependencies": {
    "@testing-library/react": "^13.4.0",
    "vite": "^4.4.0",
    "typescript": "^5.0.0"
  }
}
```

---

## 🗄️ **EMSA-v1.0 DATABASE STANDARDS**

### **Prisma Schema Pattern:**
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model EntityName {
  id        String   @id @default(uuid())
  field1    String
  field2    String?
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  relatedEntity RelatedEntity[]
  
  @@map("table_name")
}
```

---

## 🧪 **EMSA-v1.0 TESTING STANDARDS**

### **Unit Test Pattern:**
```typescript
describe('EntityName', () => {
  it('should perform business operation', () => {
    // Arrange
    const entity = new EntityName();
    
    // Act
    const result = entity.businessMethod();
    
    // Assert
    expect(result).toBeDefined();
  });
});
```

### **Integration Test Pattern:**
```typescript
describe('EntityController', () => {
  it('should create entity via API', async () => {
    const response = await request(app)
      .post('/entities')
      .send(validDto)
      .expect(201);
      
    expect(response.body).toHaveProperty('id');
  });
});
```

---

## 🔧 **EMSA-v1.0 CONFIGURATION STANDARDS**

### **TypeScript Config:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

### **ESLint Config:**
```json
{
  "extends": ["@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

---

## 🚀 **EMSA-v1.0 DEPLOYMENT STANDARDS**

### **Dockerfile Pattern:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
```

### **Docker Compose Pattern:**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/dbname
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: dbname
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
  redis:
    image: redis:7-alpine
```

---

## ✅ **EMSA-v1.0 COMPLIANCE CHECKLIST**

**Để được coi là tuân thủ EMSA-v1.0, project phải:**

- [ ] **Technology Stack**: Sử dụng chính xác tech stack đã định nghĩa
- [ ] **Folder Structure**: Tuân thủ 100% cấu trúc thư mục 
- [ ] **Code Patterns**: Sử dụng đúng patterns cho Entity, Use Case, Controller
- [ ] **Dependencies**: Package.json phải match với template
- [ ] **Database Schema**: Prisma schema tuân thủ naming conventions
- [ ] **Testing**: Có đầy đủ unit, integration tests
- [ ] **Configuration**: TypeScript, ESLint configs match standards
- [ ] **Documentation**: README.md giải thích architecture

---

## 🎯 **USAGE INSTRUCTIONS**

### **Cho AI/Developer:**
```
Implement [Feature Name] following EMSA-v1.0 standards.

Reference: 
- Architecture: EMSA-v1.0 (this document)
- Business Requirements: [SRS Document Reference]
- File Mapping: [Mapping Table Reference]

Expected Output:
- Complete folder structure per EMSA-v1.0
- All code following EMSA-v1.0 patterns
- 100% compliance with checklist
```

### **Cho Project Manager:**
```
Project [Name] must be implemented using EMSA-v1.0 architecture.
All developers must reference EMSA-v1.0 standards.
Code reviews must verify EMSA-v1.0 compliance.
```

---

**📌 EMSA-v1.0 - "Enterprise Microservice Standard Architecture" - One Standard, Zero Confusion! 🚀**
