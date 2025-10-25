// ==============================================================================
// PERMISSION CONSTANTS - IDENTITY & AUTH UNIFIED PORTAL
// Tham chiếu: Access_Control_Tree_Grok.md + SRS-Grok-V2.md - Part04.2 RBAC Implementation
// Purpose: Comprehensive permission definitions for granular access control
// ==============================================================================

// ==============================================================================
// PERMISSION STRUCTURE
// ==============================================================================

/**
 * Permission action types
 */
export const ACTIONS = {
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
  ASSIGN: 'assign',
  REVOKE: 'revoke',
  APPROVE: 'approve',
  REJECT: 'reject',
  ACTIVATE: 'activate',
  DEACTIVATE: 'deactivate',
  EXPORT: 'export',
  IMPORT: 'import',
  EXECUTE: 'execute',
  MANAGE: 'manage',
  VIEW: 'view',
  EDIT: 'edit'
} as const;

export type ActionType = typeof ACTIONS[keyof typeof ACTIONS];

/**
 * Resource types for permissions
 */
export const RESOURCES = {
  // User Management
  USERS: 'users',
  ROLES: 'roles',
  PERMISSIONS: 'permissions',
  SESSIONS: 'sessions',
  
  // Authentication
  AUTH: 'auth',
  OTP: 'otp',
  PASSWORDS: 'passwords',
  
  // Brand Management
  BRANDS: 'brands',
  BRAND_SETTINGS: 'brand_settings',
  
  // Campaign Management
  CAMPAIGNS: 'campaigns',
  PROMOTIONS: 'promotions',
  REWARDS: 'rewards',
  
  // Customer Management
  CUSTOMERS: 'customers',
  CUSTOMER_PROFILES: 'customer_profiles',
  
  // Point of Sale
  POS: 'pos',
  TRANSACTIONS: 'transactions',
  REDEMPTIONS: 'redemptions',
  
  // Analytics and Reporting
  ANALYTICS: 'analytics',
  REPORTS: 'reports',
  DASHBOARDS: 'dashboards',
  
  // System Management
  SYSTEM: 'system',
  SETTINGS: 'settings',
  LOGS: 'logs',
  NOTIFICATIONS: 'notifications',
  
  // File Management
  FILES: 'files',
  UPLOADS: 'uploads',
  
  // API Access
  API: 'api',
  WEBHOOKS: 'webhooks'
} as const;

export type ResourceType = typeof RESOURCES[keyof typeof RESOURCES];

/**
 * Permission scopes for fine-grained control
 */
export const SCOPES = {
  GLOBAL: 'global',
  BRAND: 'brand',
  LOCATION: 'location',
  DEPARTMENT: 'department',
  OWN: 'own',
  ASSIGNED: 'assigned'
} as const;

export type ScopeType = typeof SCOPES[keyof typeof SCOPES];

// ==============================================================================
// CORE PERMISSION DEFINITIONS
// ==============================================================================

/**
 * Generate permission string
 */
const createPermission = (resource: ResourceType, action: ActionType, scope?: ScopeType): string => {
  return scope ? `${resource}:${action}:${scope}` : `${resource}:${action}`;
};

// ==============================================================================
// USER MANAGEMENT PERMISSIONS
// ==============================================================================

export const USER_PERMISSIONS = {
  // User CRUD operations
  CREATE_USERS: createPermission(RESOURCES.USERS, ACTIONS.CREATE),
  READ_USERS: createPermission(RESOURCES.USERS, ACTIONS.READ),
  READ_OWN_USER: createPermission(RESOURCES.USERS, ACTIONS.READ, SCOPES.OWN),
  UPDATE_USERS: createPermission(RESOURCES.USERS, ACTIONS.UPDATE),
  UPDATE_OWN_USER: createPermission(RESOURCES.USERS, ACTIONS.UPDATE, SCOPES.OWN),
  DELETE_USERS: createPermission(RESOURCES.USERS, ACTIONS.DELETE),
  
  // User status management
  ACTIVATE_USERS: createPermission(RESOURCES.USERS, ACTIONS.ACTIVATE),
  DEACTIVATE_USERS: createPermission(RESOURCES.USERS, ACTIONS.DEACTIVATE),
  
  // User data operations
  EXPORT_USERS: createPermission(RESOURCES.USERS, ACTIONS.EXPORT),
  IMPORT_USERS: createPermission(RESOURCES.USERS, ACTIONS.IMPORT),
  
  // Role assignment
  ASSIGN_ROLES: createPermission(RESOURCES.ROLES, ACTIONS.ASSIGN),
  REVOKE_ROLES: createPermission(RESOURCES.ROLES, ACTIONS.REVOKE),
  
  // Session management
  VIEW_SESSIONS: createPermission(RESOURCES.SESSIONS, ACTIONS.VIEW),
  VIEW_OWN_SESSIONS: createPermission(RESOURCES.SESSIONS, ACTIONS.VIEW, SCOPES.OWN),
  MANAGE_SESSIONS: createPermission(RESOURCES.SESSIONS, ACTIONS.MANAGE),
  MANAGE_OWN_SESSIONS: createPermission(RESOURCES.SESSIONS, ACTIONS.MANAGE, SCOPES.OWN)
} as const;

// ==============================================================================
// ROLE AND PERMISSION MANAGEMENT
// ==============================================================================

export const ROLE_PERMISSIONS = {
  // Role CRUD operations
  CREATE_ROLES: createPermission(RESOURCES.ROLES, ACTIONS.CREATE),
  READ_ROLES: createPermission(RESOURCES.ROLES, ACTIONS.READ),
  UPDATE_ROLES: createPermission(RESOURCES.ROLES, ACTIONS.UPDATE),
  DELETE_ROLES: createPermission(RESOURCES.ROLES, ACTIONS.DELETE),
  
  // Permission management
  CREATE_PERMISSIONS: createPermission(RESOURCES.PERMISSIONS, ACTIONS.CREATE),
  READ_PERMISSIONS: createPermission(RESOURCES.PERMISSIONS, ACTIONS.READ),
  UPDATE_PERMISSIONS: createPermission(RESOURCES.PERMISSIONS, ACTIONS.UPDATE),
  DELETE_PERMISSIONS: createPermission(RESOURCES.PERMISSIONS, ACTIONS.DELETE),
  ASSIGN_PERMISSIONS: createPermission(RESOURCES.PERMISSIONS, ACTIONS.ASSIGN),
  REVOKE_PERMISSIONS: createPermission(RESOURCES.PERMISSIONS, ACTIONS.REVOKE)
} as const;

// ==============================================================================
// AUTHENTICATION PERMISSIONS
// ==============================================================================

export const AUTH_PERMISSIONS = {
  // Authentication operations
  AUTHENTICATE: createPermission(RESOURCES.AUTH, ACTIONS.EXECUTE),
  REFRESH_TOKEN: createPermission(RESOURCES.AUTH, ACTIONS.UPDATE),
  LOGOUT: createPermission(RESOURCES.AUTH, ACTIONS.DELETE),
  
  // OTP management
  GENERATE_OTP: createPermission(RESOURCES.OTP, ACTIONS.CREATE),
  VERIFY_OTP: createPermission(RESOURCES.OTP, ACTIONS.EXECUTE),
  RESEND_OTP: createPermission(RESOURCES.OTP, ACTIONS.UPDATE),
  
  // Password management
  CHANGE_PASSWORD: createPermission(RESOURCES.PASSWORDS, ACTIONS.UPDATE),
  RESET_PASSWORD: createPermission(RESOURCES.PASSWORDS, ACTIONS.CREATE),
  FORCE_PASSWORD_CHANGE: createPermission(RESOURCES.PASSWORDS, ACTIONS.EXECUTE)
} as const;

// ==============================================================================
// BRAND MANAGEMENT PERMISSIONS
// ==============================================================================

export const BRAND_PERMISSIONS = {
  // Brand CRUD operations
  CREATE_BRANDS: createPermission(RESOURCES.BRANDS, ACTIONS.CREATE),
  READ_BRANDS: createPermission(RESOURCES.BRANDS, ACTIONS.READ),
  READ_OWN_BRAND: createPermission(RESOURCES.BRANDS, ACTIONS.READ, SCOPES.OWN),
  UPDATE_BRANDS: createPermission(RESOURCES.BRANDS, ACTIONS.UPDATE),
  UPDATE_OWN_BRAND: createPermission(RESOURCES.BRANDS, ACTIONS.UPDATE, SCOPES.OWN),
  DELETE_BRANDS: createPermission(RESOURCES.BRANDS, ACTIONS.DELETE),
  
  // Brand settings
  MANAGE_BRAND_SETTINGS: createPermission(RESOURCES.BRAND_SETTINGS, ACTIONS.MANAGE),
  VIEW_BRAND_SETTINGS: createPermission(RESOURCES.BRAND_SETTINGS, ACTIONS.VIEW),
  
  // Brand status
  ACTIVATE_BRANDS: createPermission(RESOURCES.BRANDS, ACTIONS.ACTIVATE),
  DEACTIVATE_BRANDS: createPermission(RESOURCES.BRANDS, ACTIONS.DEACTIVATE)
} as const;

// ==============================================================================
// CAMPAIGN MANAGEMENT PERMISSIONS
// ==============================================================================

export const CAMPAIGN_PERMISSIONS = {
  // Campaign CRUD operations
  CREATE_CAMPAIGNS: createPermission(RESOURCES.CAMPAIGNS, ACTIONS.CREATE),
  READ_CAMPAIGNS: createPermission(RESOURCES.CAMPAIGNS, ACTIONS.READ),
  READ_BRAND_CAMPAIGNS: createPermission(RESOURCES.CAMPAIGNS, ACTIONS.READ, SCOPES.BRAND),
  UPDATE_CAMPAIGNS: createPermission(RESOURCES.CAMPAIGNS, ACTIONS.UPDATE),
  UPDATE_BRAND_CAMPAIGNS: createPermission(RESOURCES.CAMPAIGNS, ACTIONS.UPDATE, SCOPES.BRAND),
  DELETE_CAMPAIGNS: createPermission(RESOURCES.CAMPAIGNS, ACTIONS.DELETE),
  
  // Campaign status
  ACTIVATE_CAMPAIGNS: createPermission(RESOURCES.CAMPAIGNS, ACTIONS.ACTIVATE),
  DEACTIVATE_CAMPAIGNS: createPermission(RESOURCES.CAMPAIGNS, ACTIONS.DEACTIVATE),
  APPROVE_CAMPAIGNS: createPermission(RESOURCES.CAMPAIGNS, ACTIONS.APPROVE),
  REJECT_CAMPAIGNS: createPermission(RESOURCES.CAMPAIGNS, ACTIONS.REJECT),
  
  // Promotion management
  CREATE_PROMOTIONS: createPermission(RESOURCES.PROMOTIONS, ACTIONS.CREATE),
  READ_PROMOTIONS: createPermission(RESOURCES.PROMOTIONS, ACTIONS.READ),
  UPDATE_PROMOTIONS: createPermission(RESOURCES.PROMOTIONS, ACTIONS.UPDATE),
  DELETE_PROMOTIONS: createPermission(RESOURCES.PROMOTIONS, ACTIONS.DELETE),
  
  // Reward management
  CREATE_REWARDS: createPermission(RESOURCES.REWARDS, ACTIONS.CREATE),
  READ_REWARDS: createPermission(RESOURCES.REWARDS, ACTIONS.READ),
  UPDATE_REWARDS: createPermission(RESOURCES.REWARDS, ACTIONS.UPDATE),
  DELETE_REWARDS: createPermission(RESOURCES.REWARDS, ACTIONS.DELETE)
} as const;

// ==============================================================================
// CUSTOMER MANAGEMENT PERMISSIONS
// ==============================================================================

export const CUSTOMER_PERMISSIONS = {
  // Customer CRUD operations
  CREATE_CUSTOMERS: createPermission(RESOURCES.CUSTOMERS, ACTIONS.CREATE),
  READ_CUSTOMERS: createPermission(RESOURCES.CUSTOMERS, ACTIONS.READ),
  READ_BRAND_CUSTOMERS: createPermission(RESOURCES.CUSTOMERS, ACTIONS.READ, SCOPES.BRAND),
  UPDATE_CUSTOMERS: createPermission(RESOURCES.CUSTOMERS, ACTIONS.UPDATE),
  DELETE_CUSTOMERS: createPermission(RESOURCES.CUSTOMERS, ACTIONS.DELETE),
  
  // Customer profile management
  VIEW_CUSTOMER_PROFILES: createPermission(RESOURCES.CUSTOMER_PROFILES, ACTIONS.VIEW),
  VIEW_OWN_PROFILE: createPermission(RESOURCES.CUSTOMER_PROFILES, ACTIONS.VIEW, SCOPES.OWN),
  EDIT_CUSTOMER_PROFILES: createPermission(RESOURCES.CUSTOMER_PROFILES, ACTIONS.EDIT),
  EDIT_OWN_PROFILE: createPermission(RESOURCES.CUSTOMER_PROFILES, ACTIONS.EDIT, SCOPES.OWN),
  
  // Customer data operations
  EXPORT_CUSTOMER_DATA: createPermission(RESOURCES.CUSTOMERS, ACTIONS.EXPORT),
  IMPORT_CUSTOMER_DATA: createPermission(RESOURCES.CUSTOMERS, ACTIONS.IMPORT)
} as const;

// ==============================================================================
// POINT OF SALE PERMISSIONS
// ==============================================================================

export const POS_PERMISSIONS = {
  // POS operations
  ACCESS_POS: createPermission(RESOURCES.POS, ACTIONS.READ),
  OPERATE_POS: createPermission(RESOURCES.POS, ACTIONS.EXECUTE),
  MANAGE_POS: createPermission(RESOURCES.POS, ACTIONS.MANAGE),
  
  // Transaction management
  CREATE_TRANSACTIONS: createPermission(RESOURCES.TRANSACTIONS, ACTIONS.CREATE),
  READ_TRANSACTIONS: createPermission(RESOURCES.TRANSACTIONS, ACTIONS.READ),
  READ_LOCATION_TRANSACTIONS: createPermission(RESOURCES.TRANSACTIONS, ACTIONS.READ, SCOPES.LOCATION),
  UPDATE_TRANSACTIONS: createPermission(RESOURCES.TRANSACTIONS, ACTIONS.UPDATE),
  DELETE_TRANSACTIONS: createPermission(RESOURCES.TRANSACTIONS, ACTIONS.DELETE),
  
  // Redemption operations
  PROCESS_REDEMPTIONS: createPermission(RESOURCES.REDEMPTIONS, ACTIONS.EXECUTE),
  VIEW_REDEMPTIONS: createPermission(RESOURCES.REDEMPTIONS, ACTIONS.VIEW),
  APPROVE_REDEMPTIONS: createPermission(RESOURCES.REDEMPTIONS, ACTIONS.APPROVE),
  REJECT_REDEMPTIONS: createPermission(RESOURCES.REDEMPTIONS, ACTIONS.REJECT)
} as const;

// ==============================================================================
// ANALYTICS AND REPORTING PERMISSIONS
// ==============================================================================

export const ANALYTICS_PERMISSIONS = {
  // Analytics access
  VIEW_ANALYTICS: createPermission(RESOURCES.ANALYTICS, ACTIONS.VIEW),
  VIEW_BRAND_ANALYTICS: createPermission(RESOURCES.ANALYTICS, ACTIONS.VIEW, SCOPES.BRAND),
  VIEW_LOCATION_ANALYTICS: createPermission(RESOURCES.ANALYTICS, ACTIONS.VIEW, SCOPES.LOCATION),
  MANAGE_ANALYTICS: createPermission(RESOURCES.ANALYTICS, ACTIONS.MANAGE),
  
  // Report management
  CREATE_REPORTS: createPermission(RESOURCES.REPORTS, ACTIONS.CREATE),
  READ_REPORTS: createPermission(RESOURCES.REPORTS, ACTIONS.READ),
  UPDATE_REPORTS: createPermission(RESOURCES.REPORTS, ACTIONS.UPDATE),
  DELETE_REPORTS: createPermission(RESOURCES.REPORTS, ACTIONS.DELETE),
  EXPORT_REPORTS: createPermission(RESOURCES.REPORTS, ACTIONS.EXPORT),
  
  // Dashboard management
  CREATE_DASHBOARDS: createPermission(RESOURCES.DASHBOARDS, ACTIONS.CREATE),
  READ_DASHBOARDS: createPermission(RESOURCES.DASHBOARDS, ACTIONS.READ),
  UPDATE_DASHBOARDS: createPermission(RESOURCES.DASHBOARDS, ACTIONS.UPDATE),
  DELETE_DASHBOARDS: createPermission(RESOURCES.DASHBOARDS, ACTIONS.DELETE)
} as const;

// ==============================================================================
// SYSTEM ADMINISTRATION PERMISSIONS
// ==============================================================================

export const SYSTEM_PERMISSIONS = {
  // System management
  MANAGE_SYSTEM: createPermission(RESOURCES.SYSTEM, ACTIONS.MANAGE),
  VIEW_SYSTEM_INFO: createPermission(RESOURCES.SYSTEM, ACTIONS.VIEW),
  UPDATE_SYSTEM_SETTINGS: createPermission(RESOURCES.SETTINGS, ACTIONS.UPDATE),
  
  // Log management
  VIEW_LOGS: createPermission(RESOURCES.LOGS, ACTIONS.VIEW),
  EXPORT_LOGS: createPermission(RESOURCES.LOGS, ACTIONS.EXPORT),
  DELETE_LOGS: createPermission(RESOURCES.LOGS, ACTIONS.DELETE),
  
  // Notification management
  CREATE_NOTIFICATIONS: createPermission(RESOURCES.NOTIFICATIONS, ACTIONS.CREATE),
  READ_NOTIFICATIONS: createPermission(RESOURCES.NOTIFICATIONS, ACTIONS.READ),
  UPDATE_NOTIFICATIONS: createPermission(RESOURCES.NOTIFICATIONS, ACTIONS.UPDATE),
  DELETE_NOTIFICATIONS: createPermission(RESOURCES.NOTIFICATIONS, ACTIONS.DELETE),
  
  // File management
  UPLOAD_FILES: createPermission(RESOURCES.FILES, ACTIONS.CREATE),
  READ_FILES: createPermission(RESOURCES.FILES, ACTIONS.READ),
  DELETE_FILES: createPermission(RESOURCES.FILES, ACTIONS.DELETE),
  MANAGE_UPLOADS: createPermission(RESOURCES.UPLOADS, ACTIONS.MANAGE),
  
  // API access
  ACCESS_API: createPermission(RESOURCES.API, ACTIONS.READ),
  MANAGE_API: createPermission(RESOURCES.API, ACTIONS.MANAGE),
  MANAGE_WEBHOOKS: createPermission(RESOURCES.WEBHOOKS, ACTIONS.MANAGE)
} as const;

// ==============================================================================
// PERMISSION GROUPS BY ROLE
// ==============================================================================

/**
 * Platform Admin permissions (all permissions)
 */
export const PLATFORM_ADMIN_PERMISSIONS = [
  // User management
  ...Object.values(USER_PERMISSIONS),
  ...Object.values(ROLE_PERMISSIONS),
  ...Object.values(AUTH_PERMISSIONS),
  
  // Brand management
  ...Object.values(BRAND_PERMISSIONS),
  
  // Campaign management
  ...Object.values(CAMPAIGN_PERMISSIONS),
  
  // Customer management
  ...Object.values(CUSTOMER_PERMISSIONS),
  
  // POS operations
  ...Object.values(POS_PERMISSIONS),
  
  // Analytics
  ...Object.values(ANALYTICS_PERMISSIONS),
  
  // System administration
  ...Object.values(SYSTEM_PERMISSIONS)
] as const;

/**
 * Brand Admin permissions
 */
export const BRAND_ADMIN_PERMISSIONS = [
  // User management (brand scope)
  USER_PERMISSIONS.CREATE_USERS,
  USER_PERMISSIONS.READ_USERS,
  USER_PERMISSIONS.UPDATE_USERS,
  USER_PERMISSIONS.ACTIVATE_USERS,
  USER_PERMISSIONS.DEACTIVATE_USERS,
  USER_PERMISSIONS.ASSIGN_ROLES,
  USER_PERMISSIONS.REVOKE_ROLES,
  
  // Brand management (own brand)
  BRAND_PERMISSIONS.READ_OWN_BRAND,
  BRAND_PERMISSIONS.UPDATE_OWN_BRAND,
  BRAND_PERMISSIONS.MANAGE_BRAND_SETTINGS,
  
  // Campaign management (brand scope)
  ...Object.values(CAMPAIGN_PERMISSIONS),
  
  // Customer management (brand scope)
  CUSTOMER_PERMISSIONS.CREATE_CUSTOMERS,
  CUSTOMER_PERMISSIONS.READ_BRAND_CUSTOMERS,
  CUSTOMER_PERMISSIONS.UPDATE_CUSTOMERS,
  CUSTOMER_PERMISSIONS.VIEW_CUSTOMER_PROFILES,
  CUSTOMER_PERMISSIONS.EDIT_CUSTOMER_PROFILES,
  
  // POS operations
  ...Object.values(POS_PERMISSIONS),
  
  // Analytics (brand scope)
  ANALYTICS_PERMISSIONS.VIEW_BRAND_ANALYTICS,
  ANALYTICS_PERMISSIONS.CREATE_REPORTS,
  ANALYTICS_PERMISSIONS.READ_REPORTS,
  ANALYTICS_PERMISSIONS.EXPORT_REPORTS
] as const;

/**
 * Brand Staff permissions
 */
export const BRAND_STAFF_PERMISSIONS = [
  // Limited user management
  USER_PERMISSIONS.READ_OWN_USER,
  USER_PERMISSIONS.UPDATE_OWN_USER,
  USER_PERMISSIONS.VIEW_OWN_SESSIONS,
  USER_PERMISSIONS.MANAGE_OWN_SESSIONS,
  
  // Campaign operations
  CAMPAIGN_PERMISSIONS.READ_BRAND_CAMPAIGNS,
  CAMPAIGN_PERMISSIONS.UPDATE_BRAND_CAMPAIGNS,
  CAMPAIGN_PERMISSIONS.CREATE_PROMOTIONS,
  CAMPAIGN_PERMISSIONS.READ_PROMOTIONS,
  CAMPAIGN_PERMISSIONS.UPDATE_PROMOTIONS,
  
  // Customer operations
  CUSTOMER_PERMISSIONS.READ_BRAND_CUSTOMERS,
  CUSTOMER_PERMISSIONS.VIEW_CUSTOMER_PROFILES,
  
  // POS operations
  POS_PERMISSIONS.ACCESS_POS,
  POS_PERMISSIONS.OPERATE_POS,
  POS_PERMISSIONS.CREATE_TRANSACTIONS,
  POS_PERMISSIONS.READ_TRANSACTIONS,
  POS_PERMISSIONS.PROCESS_REDEMPTIONS,
  POS_PERMISSIONS.VIEW_REDEMPTIONS,
  
  // Analytics (limited)
  ANALYTICS_PERMISSIONS.VIEW_BRAND_ANALYTICS,
  ANALYTICS_PERMISSIONS.READ_REPORTS
] as const;

/**
 * POS Staff permissions
 */
export const POS_STAFF_PERMISSIONS = [
  // Self management
  USER_PERMISSIONS.READ_OWN_USER,
  USER_PERMISSIONS.UPDATE_OWN_USER,
  USER_PERMISSIONS.VIEW_OWN_SESSIONS,
  USER_PERMISSIONS.MANAGE_OWN_SESSIONS,
  
  // POS operations (location scope)
  POS_PERMISSIONS.ACCESS_POS,
  POS_PERMISSIONS.OPERATE_POS,
  POS_PERMISSIONS.CREATE_TRANSACTIONS,
  POS_PERMISSIONS.READ_LOCATION_TRANSACTIONS,
  POS_PERMISSIONS.PROCESS_REDEMPTIONS,
  POS_PERMISSIONS.VIEW_REDEMPTIONS,
  
  // Limited customer operations
  CUSTOMER_PERMISSIONS.READ_BRAND_CUSTOMERS,
  CUSTOMER_PERMISSIONS.VIEW_CUSTOMER_PROFILES,
  
  // Limited analytics
  ANALYTICS_PERMISSIONS.VIEW_LOCATION_ANALYTICS
] as const;

/**
 * Customer Account permissions
 */
export const CUSTOMER_ACCOUNT_PERMISSIONS = [
  // Self management
  USER_PERMISSIONS.READ_OWN_USER,
  USER_PERMISSIONS.UPDATE_OWN_USER,
  USER_PERMISSIONS.VIEW_OWN_SESSIONS,
  USER_PERMISSIONS.MANAGE_OWN_SESSIONS,
  
  // Profile management
  CUSTOMER_PERMISSIONS.VIEW_OWN_PROFILE,
  CUSTOMER_PERMISSIONS.EDIT_OWN_PROFILE,
  
  // Authentication
  AUTH_PERMISSIONS.AUTHENTICATE,
  AUTH_PERMISSIONS.REFRESH_TOKEN,
  AUTH_PERMISSIONS.LOGOUT,
  AUTH_PERMISSIONS.CHANGE_PASSWORD,
  AUTH_PERMISSIONS.GENERATE_OTP,
  AUTH_PERMISSIONS.VERIFY_OTP,
  
  // Basic access
  BRAND_PERMISSIONS.READ_BRANDS,
  CAMPAIGN_PERMISSIONS.READ_CAMPAIGNS,
  POS_PERMISSIONS.PROCESS_REDEMPTIONS
] as const;

/**
 * Customer Guest permissions (minimal)
 */
export const CUSTOMER_GUEST_PERMISSIONS = [
  // Basic authentication
  AUTH_PERMISSIONS.AUTHENTICATE,
  
  // Public access
  BRAND_PERMISSIONS.READ_BRANDS,
  CAMPAIGN_PERMISSIONS.READ_CAMPAIGNS
] as const;

// ==============================================================================
// PERMISSION UTILITY FUNCTIONS
// ==============================================================================

/**
 * Parse permission string
 */
export const parsePermission = (permission: string): {
  resource: string;
  action: string;
  scope?: string;
} => {
  const parts = permission.split(':');
  return {
    resource: parts[0],
    action: parts[1],
    scope: parts[2]
  };
};

/**
 * Check if permission matches pattern
 */
export const matchesPermission = (permission: string, pattern: string): boolean => {
  if (permission === pattern) return true;
  
  const permParts = parsePermission(permission);
  const patternParts = parsePermission(pattern);
  
  // Check wildcard patterns
  if (patternParts.resource === '*' || patternParts.action === '*') {
    return (patternParts.resource === '*' || permParts.resource === patternParts.resource) &&
           (patternParts.action === '*' || permParts.action === patternParts.action);
  }
  
  return false;
};

/**
 * Get all permissions for a role
 */
export const getPermissionsForRole = (role: string): readonly string[] => {
  switch (role) {
    case 'platform_admin':
      return PLATFORM_ADMIN_PERMISSIONS;
    case 'brand_admin':
      return BRAND_ADMIN_PERMISSIONS;
    case 'brand_staff':
      return BRAND_STAFF_PERMISSIONS;
    case 'pos_staff':
      return POS_STAFF_PERMISSIONS;
    case 'customer_account':
      return CUSTOMER_ACCOUNT_PERMISSIONS;
    case 'customer_guest':
      return CUSTOMER_GUEST_PERMISSIONS;
    default:
      return [];
  }
};

/**
 * Check if user has permission
 */
export const hasPermission = (userPermissions: string[], requiredPermission: string): boolean => {
  return userPermissions.some(permission => 
    permission === requiredPermission || matchesPermission(requiredPermission, permission)
  );
};

/**
 * Check if user has any of the required permissions
 */
export const hasAnyPermission = (userPermissions: string[], requiredPermissions: string[]): boolean => {
  return requiredPermissions.some(permission => hasPermission(userPermissions, permission));
};

/**
 * Check if user has all required permissions
 */
export const hasAllPermissions = (userPermissions: string[], requiredPermissions: string[]): boolean => {
  return requiredPermissions.every(permission => hasPermission(userPermissions, permission));
};

/**
 * Get permissions by resource
 */
export const getPermissionsByResource = (resource: ResourceType): string[] => {
  const allPermissions = [
    ...Object.values(USER_PERMISSIONS),
    ...Object.values(ROLE_PERMISSIONS),
    ...Object.values(AUTH_PERMISSIONS),
    ...Object.values(BRAND_PERMISSIONS),
    ...Object.values(CAMPAIGN_PERMISSIONS),
    ...Object.values(CUSTOMER_PERMISSIONS),
    ...Object.values(POS_PERMISSIONS),
    ...Object.values(ANALYTICS_PERMISSIONS),
    ...Object.values(SYSTEM_PERMISSIONS)
  ];
  
  return allPermissions.filter(permission => {
    const parsed = parsePermission(permission);
    return parsed.resource === resource;
  });
};

// ==============================================================================
// EXPORT ALL PERMISSION CONSTANTS
// ==============================================================================

export {
  // Core constants
  ACTIONS,
  RESOURCES,
  SCOPES,
  
  // Permission groups
  USER_PERMISSIONS,
  ROLE_PERMISSIONS,
  AUTH_PERMISSIONS,
  BRAND_PERMISSIONS,
  CAMPAIGN_PERMISSIONS,
  CUSTOMER_PERMISSIONS,
  POS_PERMISSIONS,
  ANALYTICS_PERMISSIONS,
  SYSTEM_PERMISSIONS,
  
  // Role-based permissions
  PLATFORM_ADMIN_PERMISSIONS,
  BRAND_ADMIN_PERMISSIONS,
  BRAND_STAFF_PERMISSIONS,
  POS_STAFF_PERMISSIONS,
  CUSTOMER_ACCOUNT_PERMISSIONS,
  CUSTOMER_GUEST_PERMISSIONS,
  
  // Utility functions
  parsePermission,
  matchesPermission,
  getPermissionsForRole,
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
  getPermissionsByResource
};

// Export types
export type {
  ActionType,
  ResourceType,
  ScopeType
};
