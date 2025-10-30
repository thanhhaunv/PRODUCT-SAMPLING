# HƯỚNG DẪN CẤU HÌNH DATABASE CHO SHARED PROJECTS VÀ MICROSERVICES

**Artifact Note**: Tài liệu này hướng dẫn cài đặt và cấu hình database (PostgreSQL – theo SRS Part07.1, EMSA-v1.0) cho **3 shared projects** (`shared-core`, `shared-events`, `shared-database`) và **7 microservices**. DEV-INIT sẽ tạo DB foundation (e.g., schema mẫu, connection utils trong `shared-database`), sau đó DEV-0 của từng service cấu hình cụ thể.  
**Version**: 1.0  
**Date**: October 30, 2025  
**Liên kết**: SRS-Grok-V2.md (Part07.1 Data Model), 1.prod-structure-other-structure.md (DB utilities), EMSA-v1.0 (Prisma standards).

---

## GIỚI THIỆU
- **DB Type**: PostgreSQL 15+ (ACID, polyglot persistence – mỗi service có DB riêng).
- **DEV-INIT Trách nhiệm**: Tạo connection utils trong `@psp/shared-database` (e.g., `connection.ts` wrapper PrismaClient). Không tạo DB physical – chỉ schema mẫu.
- **DEV-0 (Mỗi Service)**: Cấu hình DB thực tế (env vars, migrate), dùng `@psp/shared-database`.
- **Yêu cầu**: DB phải secure (encrypted PII, backups), scalable (replication), compliant (GDPR).

---

## OPTION 1: CÀI ĐẶT TRÊN SERVER RIÊNG (ON-PREMISE)
**Phù hợp**: Dev local, test env (không scale lớn).  
**Prerequisites**: Server Ubuntu 22.04+, sudo access.

### Bước 1: Cài Đặt PostgreSQL
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Bước 2: Tạo User & DB (cho Identity Service ví dụ)
```bash
sudo -u postgres psql
CREATE USER psp_user WITH PASSWORD 'secure_password';
CREATE DATABASE identity_db;
GRANT ALL PRIVILEGES ON DATABASE identity_db TO psp_user;
\q
```

### Bước 3: Cấu Hình Prisma (trong service)
- `.env`: `DATABASE_URL=postgresql://psp_user:secure_password@localhost:5432/identity_db?schema=public`
- Chạy: `npx prisma generate` (dùng `@psp/shared-database`)
- Migrate: `npx prisma migrate dev`

### Bước 4: Backups & Security
- Backup script: `pg_dump identity_db > backup.sql`
- Firewall: `sudo ufw allow 5432/tcp`

---

## OPTION 2: DÙNG DOCKER (CONTAINERIZED)
**Phù hợp**: Local dev, CI/CD (dễ portable, theo Part14.1).

### Bước 1: Dockerfile cho DB (nếu riêng)
```dockerfile
FROM postgres:15
ENV POSTGRES_DB=identity_db
ENV POSTGRES_USER=psp_user
ENV POSTGRES_PASSWORD=secure_password
EXPOSE 5432
```

### Bước 2: docker-compose.yml (cho service)
```yaml
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: identity_db
      POSTGRES_USER: psp_user
      POSTGRES_PASSWORD: secure_password
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data
volumes:
  db_data:
```

### Bước 3: Cấu Hình Prisma
- `.env`: `DATABASE_URL=postgresql://psp_user:secure_password@db:5432/identity_db`
- Chạy: `docker-compose up -d db` → `npx prisma migrate dev`

### Bước 4: Backups & Security
- Backup: `docker exec -t db pg_dumpall > backup.sql`
- Network: Use Docker network for service isolation.

---

## OPTION 3: DÙNG CLOUD (AWS, AZURE, GOOGLE CLOUD)
**Phù hợp**: Production, scale (RDS, Azure PostgreSQL, Cloud SQL).

### AWS RDS (Ví dụ)
1. **Tạo Instance**: AWS Console > RDS > Create database (PostgreSQL 15, db.t3.micro, user/psw).
2. **Cấu Hình**: Security Group allow 5432 from service IP/EC2.
3. **Prisma**: `.env`: `DATABASE_URL=postgresql://psp_user:secure_password@rds-endpoint:5432/identity_db`
4. **Migrate**: `npx prisma migrate deploy`
5. **Backups**: Enable automated backups in RDS.

### Azure Database for PostgreSQL
1. **Tạo Server**: Azure Portal > PostgreSQL > Create (Basic tier, user/psw).
2. **Firewall**: Add rule for service IP.
3. **Prisma**: `.env`: `DATABASE_URL=postgresql://psp_user@server:secure_password@azure-endpoint:5432/identity_db`
4. **Backups**: Azure auto-backups.

### Google Cloud SQL
1. **Tạo Instance**: GCP Console > SQL > Create (PostgreSQL, Standard machine).
2. **Connections**: Allow IP or use Cloud SQL Proxy.
3. **Prisma**: `.env`: `DATABASE_URL=postgresql://psp_user:secure_password@google-endpoint:5432/identity_db`
4. **Backups**: Enable daily backups.

### Backups & Security (Cloud chung)
- Use IAM for access.
- Encrypt at rest/transit.
- Backup: Cloud auto + manual export.

---

## HƯỚNG DẪN CẤU HÌNH CHO CÁC SERVICE SỬ DỤNG
1. **Tích hợp `@psp/shared-database`**: Import `getPrismaClient()` trong repo.
2. **Env Vars**: Mỗi service có `.env` với `DATABASE_URL` (riêng DB name, e.g., `campaign_db` cho Campaign).
3. **Migrate in CI/CD**: Add to workflows: `npx prisma migrate deploy`.
4. **Test Connection**: `npx prisma studio` (local/cloud proxy).
5. **Scale**: Use connection pooler (PgBouncer) nếu >100 connections.

**Test**: `npx prisma db push` để sync schema.  
**Backup Policy**: Daily auto, weekly manual, retain 30 days (SRS Part05.6 Compliance).  
**DEV-11**: Cập nhật docs/deployment/ với hướng dẫn này.

---
# DEV-INIT, DEV-0 (cho mỗi service), và DEV-11 cần implement phần cấu hình DB.

- **DEV-INIT**: Tạo `@psp/shared-database` package (utils connection, migration helpers).
- **DEV-0**: Cấu hình Prisma schema, migrations, env cho Identity Service (tương tự DEV-0 của 6 service khác).
- **DEV-11**: Viết hướng dẫn deploy DB (on-premise, Docker, cloud) trong docs/deployment.



Dưới đây là phần cụ thể hóa chi tiết cho các phần bạn đề cập, dựa trên các tài liệu trước đó (SRS-Grok-V2.md, EMSA-v1.0, và 1.prod-structure-other-structure.md). Tôi sẽ trình bày từng phần một cách rõ ràng, với **mô tả chức năng**, **steps triển khai**, **ví dụ code/snippet**, và **lý do/lưu ý** để bạn dễ ghi nhớ và tham chiếu. Nếu quên, chỉ cần search key words như "DEV-INIT shared-database" là ra ngay. Tôi giữ ngắn gọn nhưng đầy đủ để dễ in ra hoặc lưu note.

### 1. DEV-INIT: Tạo @psp/shared-database package (utils connection, migration helpers)
**Mô tả chức năng**: Package này cung cấp các utilities chung cho DB (Prisma-based), bao gồm wrapper cho PrismaClient (connection management), helpers cho migrations (e.g., auto-migrate, seed), và config env. Nó được dùng chung cho tất cả 7 microservices, tránh duplicate code, đảm bảo consistency (e.g., connection pooling, error handling DB). Refs: SRS Part07.1 Data Model Overview (DB utilities), EMSA-v1.0 (Prisma schema pattern).

**Steps triển khai** (DEV-INIT làm trong repo riêng `psp-shared-database`):
1. Tạo repo: `mkdir psp-shared-database && cd psp-shared-database && npm init -y`.
2. Cài deps: `npm install @prisma/client` (runtime), `npm install -D prisma typescript`.
3. Tạo cấu trúc thư mục: `mkdir -p src/database`.
4. Implement files chính (connection.ts, migration.utils.ts).
5. Build & publish: `npm run build` → `npm publish --access public` (version 1.0.5).
6. Test: Tạo test repo, npm install package, verify connection.

**Ví dụ code/snippet**:
- `package.json`:
  ```json
  {
    "name": "@psp/shared-database",
    "version": "1.0.5",
    "main": "dist/index.js",
    "scripts": {
      "build": "tsc"
    },
    "dependencies": {
      "@prisma/client": "^5.0.0"
    },
    "devDependencies": {
      "prisma": "^5.0.0",
      "typescript": "^5.0.0"
    }
  }
  ```
- `src/database/connection.ts` (wrapper PrismaClient):
  ```ts
  import { PrismaClient } from '@prisma/client';

  let client: PrismaClient;

  export const getPrismaClient = () => {
    if (!client) {
      client = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],  // Logger từ shared-core
      });
    }
    return client;
  };
  ```
- `src/database/migration.utils.ts` (helpers):
  ```ts
  import { getPrismaClient } from './connection';

  export async function runMigration() {
    const prisma = getPrismaClient();
    // Logic migrate từ SRS Part07.1
    await prisma.$executeRaw`PRAGMA foreign_keys=OFF`;  // Ví dụ for SQLite, adjust for Postgres
  }
  ```

**Lý do/lưu ý**:
- **Lý do**: Shared để 7 services dùng chung (e.g., Identity gọi getPrismaClient() trong repo).
- **Lưu ý**: Không chứa schema cụ thể (service-specific), chỉ utils. Versioning strict (^1.0.5) để tránh breaking. Test with jest: coverage 80%+ (EMSA-v1.0). Nếu quên: "Shared DB utils – connection wrapper, no schema".

---

### 2. DEV-0: Cấu hình Prisma schema, migrations, env cho Identity Service (tương tự DEV-0 của 6 service khác)
**Mô tả chức năng**: DEV-0 của mỗi service (e.g., Identity) cấu hình DB specific (Prisma schema với models User/Role/Session, migrations initial, env vars như DATABASE_URL). Dùng `@psp/shared-database` để connect. Tương tự cho 6 service khác (e.g., Campaign dùng MongoDB wrapper nếu polyglot). Refs: SRS Part07.1 (schema), EMSA-v1.0 (Prisma datasource).

**Steps triển khai** (DEV-0 làm trong repo service):
1. Install package: `npm install @psp/shared-database@^1.0.5`.
2. Tạo .env.example: Thêm DATABASE_URL.
3. Tạo schema.prisma: Define models (User, Role, etc.) + datasource.
4. Generate client: `npx prisma generate`.
5. Tạo migration: `npx prisma migrate dev --name init`.
6. Seed data: Tạo seed.ts (default users/roles).
7. Test: `npx prisma studio` để check DB.

**Ví dụ code/snippet**:
- `.env.example`:
  ```bash
  DATABASE_URL=postgresql://psp_user:secure_password@localhost:5432/identity_db?schema=public
  ```
- `prisma/schema.prisma`:
  ```prisma
  generator client {
    provider = "prisma-client-js"
  }

  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }

  model User {
    id        String   @id @default(uuid())
    email     String   @unique
    phone     String?
    password  String
    roles     Role[]  
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    @@map("users")
  }

  // Add other models: Role, Permission, Session, OTPCode from SRS Part07.1
  ```
- `prisma/seed.ts`:
  ```ts
  import { getPrismaClient } from '@psp/shared-database';

  const prisma = getPrismaClient();
  async function main() {
    await prisma.user.create({
      data: { email: 'admin@example.com', password: 'hashed' },
    });
  }
  main();
  ```
- `scripts/migrate-database.sh`:
  ```bash
  #!/bin/bash
  npx prisma migrate dev --name init
  ```

**Lý do/lưu ý**:
- **Lý do**: Mỗi service có schema riêng (polyglot: Postgres for Identity, Mongo for Campaign).
- **Lưu ý**: Sử dụng shared-database cho connection (getPrismaClient()). Tương tự cho 6 service khác: DEV-0 của Campaign tạo schema Campaign-specific. Backup env vars secure (no commit .env). Nếu quên: "DEV-0 config Prisma schema per service, use shared-database wrapper".

---

### 3. DEV-11: Viết hướng dẫn deploy DB (on-premise, Docker, cloud) trong docs/deployment
**Mô tả chức năng**: DEV-11 viết docs chi tiết hướng dẫn deploy DB (on-premise, Docker, cloud như AWS RDS/Azure/GCP Cloud SQL), bao gồm steps, config, backups, security. Bao gồm shared projects (publish) và 7 services. Refs: SRS Part14.1 (Container), Part14.3 (Monitoring), Part15.2 (CI/CD).

**Steps triển khai** (DEV-11 làm trong repo Identity, copy cho 6 service khác):
1. Tạo folder `docs/deployment/`.
2. Viết 4 docs + 1 script: DEPLOY_SHARED_PACKAGES.md (publish shared), DEPLOY_IDENTITY_SERVICE.md (service-specific), DEPLOY_ALL_MICROSERVICES.md (toàn hệ thống), PRODUCTION_CHECKLIST.md (checklist), scripts/deploy-all.sh (automation).
3. Bao gồm 3 options: on-premise (server install), Docker (compose), cloud (RDS config).
4. Test docs: Run steps để verify.
5. Merge vào main.

**Ví dụ code/snippet**:
- `docs/deployment/DEPLOY_SHARED_PACKAGES.md`:
  ```markdown
  # Deploy Shared Packages
  ## Steps
  1. cd shared-core
  2. npm run build
  3. npm publish --access public
  // Lặp cho shared-events, shared-database
  ```
- `docs/deployment/DEPLOY_IDENTITY_SERVICE.md` (DB section):
  ```markdown
  # Deploy DB for Identity
  ## Option 1: On-Premise
  sudo apt install postgresql
  sudo -u postgres psql -c "CREATE DATABASE identity_db;"
  
  ## Option 2: Docker
  docker run -d -p 5432:5432 --name db -e POSTGRES_PASSWORD=secure postgres:15
  
  ## Option 3: AWS RDS
  AWS Console > RDS > Create PostgreSQL instance
  DATABASE_URL=postgresql://user:pass@rds-endpoint:5432/identity_db
  ```
- `docs/deployment/PRODUCTION_CHECKLIST.md`:
  ```markdown
  [ ] DATABASE_URL in secrets
  [ ] Auto-backups enabled
  [ ] Firewall 5432 restricted
  ```
- `scripts/deploy-all.sh`:
  ```bash
  #!/bin/bash
  # Deploy DB for all services
  for service in identity campaign; do
    docker run -d -p 5432:5432 --name ${service}_db postgres:15
  done
  ```

**Lý do/lưu ý**:
- **Lý do**: Guides giúp deploy team (non-dev) dễ dàng, bao gồm shared (publish) và services (DB config).
- **Lưu ý**: Bao gồm 3 options để flexible (local dev = Docker, prod = cloud). Copy docs cho 6 service khác, adjust DB name (e.g., campaign_db). Nếu quên: "DEV-11 viết deploy DB guides with 3 options, include shared publish".
