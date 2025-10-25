// ================================================================
// PRISMA SEED SCRIPT
// ================================================================
// Purpose: Seed initial data for development and testing
// Reference: SRS-Grok-V2.md - Access_Control_Tree_Grok.md
// Usage: npm run db:seed
// ================================================================

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// ================================================================
// SEED DATA CONSTANTS
// ================================================================

const SYSTEM_TENANT_ID = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';

const ROLE_IDS = {
  SUPER_ADMIN: '10000000-0000-0000-0000-000000000001',
  ADMIN: '10000000-0000-0000-0000-000000000002',
  CAMPAIGN_MANAGER: '10000000-0000-0000-0000-000000000003',
  CONTENT_CREATOR: '10000000-0000-0000-0000-000000000004',
  ANALYST: '10000000-0000-0000-0000-000000000005',
  VIEWER: '10000000-0000-0000-0000-000000000006',
};

// ================================================================
// SEED FUNCTIONS
// ================================================================

async function seedTenants() {
  console.log('🏢 Seeding tenants...');

  const tenants = [
    {
      id: SYSTEM_TENANT_ID,
      name: 'System Tenant',
      slug: 'system',
      apiKey: 'SYSTEM_API_KEY_PLACEHOLDER',
      consentGdpr: true,
      isActive: true,
    },
    {
      name: 'Demo Brand',
      slug: 'demo-brand',
      apiKey: 'demo-brand-api-key-123456',
      consentGdpr: true,
      isActive: true,
    },
    {
      name: 'Test Company',
      slug: 'test-company',
      apiKey: 'test-company-api-key-789012',
      consentGdpr: true,
      isActive: true,
    },
  ];

  for (const tenant of tenants) {
    await prisma.tenant.upsert({
      where: { slug: tenant.slug },
      update: {},
      create: tenant,
    });
  }

  console.log(`✅ Created ${tenants.length} tenants\n`);
}

async function seedPermissions() {
  console.log('🔐 Seeding permissions...');

  const permissions = [
    // User Management
    { resource: 'users', action: 'create', scope: 'tenant', description: 'Create users in tenant', isSystem: true },
    { resource: 'users', action: 'read', scope: 'all', description: 'Read all users', isSystem: true },
    { resource: 'users', action: 'read', scope: 'own', description: 'Read own profile', isSystem: true },
    { resource: 'users', action: 'update', scope: 'all', description: 'Update all users', isSystem: true },
    { resource: 'users', action: 'update', scope: 'own', description: 'Update own profile', isSystem: true },
    { resource: 'users', action: 'delete', scope: 'all', description: 'Delete any user', isSystem: true },

    // Role Management
    { resource: 'roles', action: 'create', scope: 'tenant', description: 'Create roles', isSystem: true },
    { resource: 'roles', action: 'read', scope: 'all', description: 'Read all roles', isSystem: true },
    { resource: 'roles', action: 'update', scope: 'all', description: 'Update roles', isSystem: true },
    { resource: 'roles', action: 'delete', scope: 'all', description: 'Delete roles', isSystem: true },
    { resource: 'roles', action: 'assign', scope: 'all', description: 'Assign roles to users', isSystem: true },

    // Campaign Management
    { resource: 'campaigns', action: 'create', scope: 'tenant', description: 'Create campaigns', isSystem: true },
    { resource: 'campaigns', action: 'read', scope: 'all', description: 'Read all campaigns', isSystem: true },
    { resource: 'campaigns', action: 'read', scope: 'own', description: 'Read own campaigns', isSystem: true },
    { resource: 'campaigns', action: 'update', scope: 'all', description: 'Update all campaigns', isSystem: true },
    { resource: 'campaigns', action: 'update', scope: 'own', description: 'Update own campaigns', isSystem: true },
    { resource: 'campaigns', action: 'delete', scope: 'all', description: 'Delete all campaigns', isSystem: true },
    { resource: 'campaigns', action: 'delete', scope: 'own', description: 'Delete own campaigns', isSystem: true },

    // Reports
    { resource: 'reports', action: 'read', scope: 'all', description: 'View all reports', isSystem: true },
    { resource: 'reports', action: 'read', scope: 'own', description: 'View own reports', isSystem: true },
    { resource: 'reports', action: 'export', scope: 'all', description: 'Export all reports', isSystem: true },

    // Settings
    { resource: 'settings', action: 'read', scope: 'tenant', description: 'Read tenant settings', isSystem: true },
    { resource: 'settings', action: 'update', scope: 'tenant', description: 'Update tenant settings', isSystem: true },

    // Audit Logs
    { resource: 'audit', action: 'read', scope: 'all', description: 'Read all audit logs', isSystem: true },
    { resource: 'audit', action: 'read', scope: 'own', description: 'Read own audit logs', isSystem: true },
  ];

  let count = 0;
  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: {
        resource_action_scope: {
          resource: permission.resource,
          action: permission.action,
          scope: permission.scope,
        },
      },
      update: {},
      create: permission,
    });
    count++;
  }

  console.log(`✅ Created ${count} permissions\n`);
}

async function seedRoles() {
  console.log('👥 Seeding roles...');

  const roles = [
    {
      id: ROLE_IDS.SUPER_ADMIN,
      name: 'SUPER_ADMIN',
      displayName: 'Super Administrator',
      description: 'Full system access across all tenants',
      level: 0,
      isSystem: true,
      isActive: true,
      tenantId: null, // System-wide role
    },
    {
      id: ROLE_IDS.ADMIN,
      name: 'ADMIN',
      displayName: 'Administrator',
      description: 'Tenant administrator with full tenant access',
      level: 1,
      isSystem: true,
      isActive: true,
      tenantId: null,
    },
    {
      id: ROLE_IDS.CAMPAIGN_MANAGER,
      name: 'CAMPAIGN_MANAGER',
      displayName: 'Campaign Manager',
      description: 'Manage campaigns and content',
      level: 2,
      isSystem: true,
      isActive: true,
      tenantId: null,
    },
    {
      id: ROLE_IDS.CONTENT_CREATOR,
      name: 'CONTENT_CREATOR',
      displayName: 'Content Creator',
      description: 'Create and edit content',
      level: 3,
      isSystem: true,
      isActive: true,
      tenantId: null,
    },
    {
      id: ROLE_IDS.ANALYST,
      name: 'ANALYST',
      displayName: 'Analyst',
      description: 'View reports and analytics',
      level: 4,
      isSystem: true,
      isActive: true,
      tenantId: null,
    },
    {
      id: ROLE_IDS.VIEWER,
      name: 'VIEWER',
      displayName: 'Viewer',
      description: 'Read-only access',
      level: 5,
      isSystem: true,
      isActive: true,
      tenantId: null,
    },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { id: role.id },
      update: {},
      create: role,
    });
  }

  console.log(`✅ Created ${roles.length} roles\n`);
}

async function seedRolePermissions() {
  console.log('🔗 Seeding role-permission mappings...');

  // Helper to get permission ID
  const getPermissionId = async (resource: string, action: string, scope: string) => {
    const permission = await prisma.permission.findUnique({
      where: { resource_action_scope: { resource, action, scope } },
    });
    return permission?.id;
  };

  // SUPER_ADMIN - All permissions
  const allPermissions = await prisma.permission.findMany();
  for (const permission of allPermissions) {
    await prisma.rolePermission.upsert({
      where: {
        roleId_permissionId: {
          roleId: ROLE_IDS.SUPER_ADMIN,
          permissionId: permission.id,
        },
      },
      update: {},
      create: {
        roleId: ROLE_IDS.SUPER_ADMIN,
        permissionId: permission.id,
      },
    });
  }

  // ADMIN - Tenant-level admin permissions
  const adminPermissions = [
    ['users', 'create', 'tenant'],
    ['users', 'read', 'all'],
    ['users', 'update', 'all'],
    ['users', 'delete', 'all'],
    ['roles', 'read', 'all'],
    ['roles', 'assign', 'all'],
    ['campaigns', 'read', 'all'],
    ['campaigns', 'update', 'all'],
    ['campaigns', 'delete', 'all'],
    ['reports', 'read', 'all'],
    ['reports', 'export', 'all'],
    ['settings', 'read', 'tenant'],
    ['settings', 'update', 'tenant'],
    ['audit', 'read', 'all'],
  ];

  for (const [resource, action, scope] of adminPermissions) {
    const permissionId = await getPermissionId(resource, action, scope);
    if (permissionId) {
      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: {
            roleId: ROLE_IDS.ADMIN,
            permissionId,
          },
        },
        update: {},
        create: { roleId: ROLE_IDS.ADMIN, permissionId },
      });
    }
  }

  // CAMPAIGN_MANAGER - Campaign management
  const campaignManagerPermissions = [
    ['users', 'read', 'own'],
    ['campaigns', 'create', 'tenant'],
    ['campaigns', 'read', 'all'],
    ['campaigns', 'update', 'all'],
    ['campaigns', 'delete', 'all'],
    ['reports', 'read', 'all'],
    ['reports', 'export', 'all'],
  ];

  for (const [resource, action, scope] of campaignManagerPermissions) {
    const permissionId = await getPermissionId(resource, action, scope);
    if (permissionId) {
      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: {
            roleId: ROLE_IDS.CAMPAIGN_MANAGER,
            permissionId,
          },
        },
        update: {},
        create: { roleId: ROLE_IDS.CAMPAIGN_MANAGER, permissionId },
      });
    }
  }

  // CONTENT_CREATOR - Content creation
  const contentCreatorPermissions = [
    ['users', 'read', 'own'],
    ['campaigns', 'read', 'own'],
    ['campaigns', 'update', 'own'],
    ['reports', 'read', 'own'],
  ];

  for (const [resource, action, scope] of contentCreatorPermissions) {
    const permissionId = await getPermissionId(resource, action, scope);
    if (permissionId) {
      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: {
            roleId: ROLE_IDS.CONTENT_CREATOR,
            permissionId,
          },
        },
        update: {},
        create: { roleId: ROLE_IDS.CONTENT_CREATOR, permissionId },
      });
    }
  }

  // ANALYST - View reports
  const analystPermissions = [
    ['users', 'read', 'own'],
    ['campaigns', 'read', 'all'],
    ['reports', 'read', 'all'],
    ['reports', 'export', 'all'],
  ];

  for (const [resource, action, scope] of analystPermissions) {
    const permissionId = await getPermissionId(resource, action, scope);
    if (permissionId) {
      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: {
            roleId: ROLE_IDS.ANALYST,
            permissionId,
          },
        },
        update: {},
        create: { roleId: ROLE_IDS.ANALYST, permissionId },
      });
    }
  }

  // VIEWER - Read-only
  const viewerPermissions = [
    ['users', 'read', 'own'],
    ['campaigns', 'read', 'own'],
    ['reports', 'read', 'own'],
  ];

  for (const [resource, action, scope] of viewerPermissions) {
    const permissionId = await getPermissionId(resource, action, scope);
    if (permissionId) {
      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: {
            roleId: ROLE_IDS.VIEWER,
            permissionId,
          },
        },
        update: {},
        create: { roleId: ROLE_IDS.VIEWER, permissionId },
      });
    }
  }

  console.log('✅ Created role-permission mappings\n');
}

async function seedUsers() {
  console.log('👤 Seeding users...');

  const systemTenant = await prisma.tenant.findUnique({
    where: { slug: 'system' },
  });

  const demoBrand = await prisma.tenant.findUnique({
    where: { slug: 'demo-brand' },
  });

  if (!systemTenant || !demoBrand) {
    throw new Error('Tenants not found');
  }

  const hashedPassword = await bcrypt.hash('Password123!', 10);

  const users = [
    {
      email: 'superadmin@system.com',
      passwordHash: hashedPassword,
      firstName: 'Super',
      lastName: 'Admin',
      tenantId: systemTenant.id,
      isActive: true,
      isVerified: true,
      consentGdpr: true,
      roleId: ROLE_IDS.SUPER_ADMIN,
    },
    {
      email: 'admin@demo.com',
      passwordHash: hashedPassword,
      firstName: 'Demo',
      lastName: 'Admin',
      tenantId: demoBrand.id,
      isActive: true,
      isVerified: true,
      consentGdpr: true,
      roleId: ROLE_IDS.ADMIN,
    },
    {
      email: 'manager@demo.com',
      passwordHash: hashedPassword,
      firstName: 'Campaign',
      lastName: 'Manager',
      tenantId: demoBrand.id,
      isActive: true,
      isVerified: true,
      consentGdpr: true,
      roleId: ROLE_IDS.CAMPAIGN_MANAGER,
    },
    {
      email: 'creator@demo.com',
      passwordHash: hashedPassword,
      firstName: 'Content',
      lastName: 'Creator',
      tenantId: demoBrand.id,
      isActive: true,
      isVerified: true,
      consentGdpr: true,
      roleId: ROLE_IDS.CONTENT_CREATOR,
    },
  ];

  for (const userData of users) {
    const { roleId, ...userDataWithoutRole } = userData;

    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userDataWithoutRole,
    });

    // Assign role to user
    await prisma.userRole.upsert({
      where: {
        userId_roleId: {
          userId: user.id,
          roleId: roleId,
        },
      },
      update: {},
      create: {
        userId: user.id,
        roleId: roleId,
      },
    });
  }

  console.log(`✅ Created ${users.length} users\n`);
  console.log('📝 Default credentials:');
  console.log('   Email: superadmin@system.com / Password: Password123!');
  console.log('   Email: admin@demo.com / Password: Password123!');
  console.log('   Email: manager@demo.com / Password: Password123!');
  console.log('   Email: creator@demo.com / Password: Password123!\n');
}

// ================================================================
// MAIN SEED FUNCTION
// ================================================================

async function main() {
  console.log('🌱 Starting database seed...\n');

  try {
    await seedTenants();
    await seedPermissions();
    await seedRoles();
    await seedRolePermissions();
    await seedUsers();

    console.log('🎉 Database seeding completed successfully!\n');
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    throw error;
  }
}

// ================================================================
// EXECUTION
// ================================================================

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
