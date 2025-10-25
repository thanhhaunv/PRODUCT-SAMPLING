# 🚀 Quick Start Guide - Database Setup

## 📦 What You Got

✅ **Complete PostgreSQL Schema** - 11 tables for Identity & Auth  
✅ **Redis Configuration** - Session management & caching  
✅ **3 Database Migrations** - Automated schema creation  
✅ **Seed Data** - Ready-to-use test accounts  
✅ **Migration Tools** - Easy database management  

---

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Configure Environment
```bash
# Copy environment template
cp ../.env.example .env

# Edit .env with your settings
DATABASE_URL="postgresql://postgres:password@localhost:5432/identity_db"
REDIS_HOST=localhost
REDIS_PORT=6379
```

### Step 3: Setup Database
```bash
# Generate Prisma Client
npm run db:generate

# Run migrations (creates all tables)
npm run db:migrate

# Seed initial data (optional)
npm run db:seed
```

### Step 4: Verify Setup
```bash
# Check migration status
npm run db:migrate:status

# Open Prisma Studio to view data
npm run db:studio
```

**Done! 🎉** Your database is ready.

---

## 🔑 Test Accounts (After Seeding)

```
📧 superadmin@system.com  🔐 Password123!  (Super Admin)
📧 admin@demo.com         🔐 Password123!  (Admin)
📧 manager@demo.com       🔐 Password123!  (Campaign Manager)
📧 creator@demo.com       🔐 Password123!  (Content Creator)
```

---

## 📊 What's in the Database

### 🏢 **3 Tenants**
- System Tenant (system-wide)
- Demo Brand (test brand)
- Test Company (test company)

### 👥 **6 Roles** (Hierarchical)
```
Level 0: SUPER_ADMIN ────────► Full access
Level 1: ADMIN ──────────────► Tenant admin
Level 2: CAMPAIGN_MANAGER ───► Campaign management
Level 3: CONTENT_CREATOR ────► Content creation
Level 4: ANALYST ────────────► View reports
Level 5: VIEWER ─────────────► Read-only
```

### 🔒 **25+ Permissions**
- Users: create, read, update, delete
- Roles: manage & assign
- Campaigns: full CRUD
- Reports: view & export
- Settings: manage tenant
- Audit: view logs

---

## 🛠️ Common Commands

```bash
# Database Management
npm run db:generate      # Generate Prisma Client
npm run db:migrate       # Run pending migrations
npm run db:seed          # Seed test data
npm run db:studio        # Open database GUI
npm run db:reset         # Complete reset (drop + migrate + seed)

# Migration Tools
npm run db:migrate:status  # Check what's applied
npm run db:migrate:down    # Rollback (if supported)

# Validation
npm run prisma:validate    # Check schema validity
npm run prisma:format      # Format schema file
```

---

## 📁 Key Files

```
backend/
├── prisma/
│   ├── schema.prisma           # 🗄️ Database schema (11 models)
│   └── seed.ts                 # 🌱 Initial data
│
├── src/infrastructure/
│   ├── config/
│   │   ├── database.config.ts  # 🔌 PostgreSQL config
│   │   └── redis.config.ts     # 🔴 Redis config
│   │
│   └── persistence/
│       └── migrations/
│           ├── 001_*.sql       # 👤 Users & Tenants
│           ├── 002_*.sql       # 🔐 RBAC System
│           ├── 003_*.sql       # 🔒 Security & Sessions
│           └── migrate.ts      # 🚀 Migration runner
│
├── DATABASE_SETUP.md           # 📚 Full documentation
└── package.json                # 📦 Scripts & dependencies
```

---

## 🔍 How to Use Prisma

### Basic Queries
```typescript
import { prisma } from '@/infrastructure/config/database.config';

// Find user by email
const user = await prisma.user.findUnique({
  where: { email: 'admin@demo.com' },
  include: {
    userRoles: {
      include: { role: true }
    }
  }
});

// Create new user
const newUser = await prisma.user.create({
  data: {
    email: 'new@example.com',
    passwordHash: hashedPassword,
    tenantId: tenantId,
    firstName: 'John',
    lastName: 'Doe',
  }
});

// Update user
await prisma.user.update({
  where: { id: userId },
  data: { isVerified: true }
});

// Delete user (soft delete preferred)
await softDelete('user', userId);
```

### Transactions
```typescript
import { withTransaction } from '@/infrastructure/config/database.config';

await withTransaction(async (tx) => {
  const user = await tx.user.create({ data: userData });
  await tx.userRole.create({
    data: {
      userId: user.id,
      roleId: roleId,
    }
  });
});
```

---

## 🔴 How to Use Redis

### Session Management
```typescript
import { sessionStore } from '@/infrastructure/config/redis.config';

// Create session
const sessionId = await sessionStore.createSession(userId, {
  deviceInfo: { browser: 'Chrome' },
  ipAddress: '192.168.1.1',
});

// Get session
const session = await sessionStore.getSession(sessionId);

// Update session
await sessionStore.updateSession(sessionId, { 
  lastActivityAt: new Date() 
});

// Delete session (logout)
await sessionStore.deleteSession(sessionId);
```

### Caching
```typescript
import { cacheService } from '@/infrastructure/config/redis.config';

// Set cache with TTL (1 hour)
await cacheService.set('user:123', userData, 3600);

// Get cache
const data = await cacheService.get('user:123');

// Delete cache
await cacheService.delete('user:123');
```

---

## 🚨 Troubleshooting

### ❌ "Connection refused"
```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql

# Check if Redis is running
redis-cli ping
```

### ❌ "Table already exists"
```bash
# Reset database
npm run db:reset
```

### ❌ "Prisma Client not found"
```bash
# Generate Prisma Client
npm run db:generate
```

### ❌ "Migration failed"
```bash
# Check status
npm run db:migrate:status

# Reset and retry
npm run db:reset
```

---

## 📖 Need More Help?

📚 **Full Documentation**: `backend/DATABASE_SETUP.md`  
🔍 **Prisma Docs**: https://www.prisma.io/docs  
📝 **SRS Reference**: Part07.1 Data Model Overview  

---

## ✅ Checklist for Production

Before deploying to production:

- [ ] Change all seed user passwords
- [ ] Enable SSL for PostgreSQL (`DATABASE_SSL=true`)
- [ ] Enable TLS for Redis (`REDIS_TLS=true`)
- [ ] Set up automated backups
- [ ] Configure connection pool sizes
- [ ] Enable monitoring and alerts
- [ ] Review and test RLS policies
- [ ] Set up log rotation for audit_logs
- [ ] Test failover scenarios
- [ ] Document runbooks

---

**That's it!** You now have a production-ready database setup. 🎉

**Next**: Implement Domain Layer (Phase 1.5)
