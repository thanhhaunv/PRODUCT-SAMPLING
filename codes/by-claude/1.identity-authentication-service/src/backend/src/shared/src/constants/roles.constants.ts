// ==============================================================================
// ROLE CONSTANTS - IDENTITY & AUTH UNIFIED PORTAL
// Tham chiếu: Access_Control_Tree_Grok.md + SRS-Grok-V2.md - Part04.2 RBAC Implementation
// Purpose: Complete role definitions and hierarchy for the PSP Platform
// ==============================================================================

// ==============================================================================
// ROLE DEFINITIONS
// ==============================================================================

/**
 * Role identifiers (must match database)
 * Tham chiếu: Access_Control_Tree_Grok.md
 */
export const ROLES = {
  // Level 0 - Platform Administration
  PLATFORM_ADMIN: 'platform_admin',
  
  // Level 1 - Brand Administration
  BRAND_ADMIN: 'brand_admin',
  
  // Level 2 - Brand Operations
  BRAND_STAFF: 'brand_staff',
  POS_STAFF: 'pos_staff',
  
  // Level 3 - Customer Management
  CUSTOMER_ACCOUNT: 'customer_account',
  
  // Level 4 - Guest Access
  CUSTOMER_GUEST: 'customer_guest'
} as const;

/**
 * Role type from ROLES constant
 */
export type RoleType = typeof ROLES[keyof typeof ROLES];

/**
 * Role display names for UI
 */
export const ROLE_DISPLAY_NAMES: Record<RoleType, string> = {
  [ROLES.PLATFORM_ADMIN]: 'Platform Administrator',
  [ROLES.BRAND_ADMIN]: 'Brand Administrator',
  [ROLES.BRAND_STAFF]: 'Brand Staff',
  [ROLES.POS_STAFF]: 'POS Staff',
  [ROLES.CUSTOMER_ACCOUNT]: 'Customer Account',
  [ROLES.CUSTOMER_GUEST]: 'Customer Guest'
};

/**
 * Role descriptions for clarity
 */
export const ROLE_DESCRIPTIONS: Record<RoleType, string> = {
  [ROLES.PLATFORM_ADMIN]: 'Full platform access with all administrative privileges across all brands and systems',
  [ROLES.BRAND_ADMIN]: 'Complete brand management including staff, campaigns, and settings for assigned brands',
  [ROLES.BRAND_STAFF]: 'Brand-specific operations including campaign management and customer service',
  [ROLES.POS_STAFF]: 'Point-of-sale operations and basic customer interaction capabilities',
  [ROLES.CUSTOMER_ACCOUNT]: 'Registered customer with account management and redemption capabilities',
  [ROLES.CUSTOMER_GUEST]: 'Limited guest access for basic interactions and browsing'
};

/**
 * Role hierarchy levels (0 = highest, 4 = lowest)
 * Lower numbers have higher authority
 */
export const ROLE_LEVELS: Record<RoleType, number> = {
  [ROLES.PLATFORM_ADMIN]: 0,
  [ROLES.BRAND_ADMIN]: 1,
  [ROLES.BRAND_STAFF]: 2,
  [ROLES.POS_STAFF]: 2,
  [ROLES.CUSTOMER_ACCOUNT]: 3,
  [ROLES.CUSTOMER_GUEST]: 4
};

/**
 * Role categories for grouping
 */
export const ROLE_CATEGORIES = {
  ADMINISTRATIVE: 'administrative',
  OPERATIONAL: 'operational',
  CUSTOMER: 'customer'
} as const;

export type RoleCategory = typeof ROLE_CATEGORIES[keyof typeof ROLE_CATEGORIES];

/**
 * Role to category mapping
 */
export const ROLE_CATEGORY_MAP: Record<RoleType, RoleCategory> = {
  [ROLES.PLATFORM_ADMIN]: ROLE_CATEGORIES.ADMINISTRATIVE,
  [ROLES.BRAND_ADMIN]: ROLE_CATEGORIES.ADMINISTRATIVE,
  [ROLES.BRAND_STAFF]: ROLE_CATEGORIES.OPERATIONAL,
  [ROLES.POS_STAFF]: ROLE_CATEGORIES.OPERATIONAL,
  [ROLES.CUSTOMER_ACCOUNT]: ROLE_CATEGORIES.CUSTOMER,
  [ROLES.CUSTOMER_GUEST]: ROLE_CATEGORIES.CUSTOMER
};

/**
 * System roles that cannot be deleted
 */
export const SYSTEM_ROLES: ReadonlyArray<RoleType> = [
  ROLES.PLATFORM_ADMIN,
  ROLES.BRAND_ADMIN,
  ROLES.BRAND_STAFF,
  ROLES.POS_STAFF,
  ROLES.CUSTOMER_ACCOUNT,
  ROLES.CUSTOMER_GUEST
] as const;

/**
 * Default role for new users
 */
export const DEFAULT_ROLE: RoleType = ROLES.CUSTOMER_GUEST;

/**
 * Administrative roles (can manage other users)
 */
export const ADMINISTRATIVE_ROLES: ReadonlyArray<RoleType> = [
  ROLES.PLATFORM_ADMIN,
  ROLES.BRAND_ADMIN
] as const;

/**
 * Staff roles (internal users)
 */
export const STAFF_ROLES: ReadonlyArray<RoleType> = [
  ROLES.PLATFORM_ADMIN,
  ROLES.BRAND_ADMIN,
  ROLES.BRAND_STAFF,
  ROLES.POS_STAFF
] as const;

/**
 * Customer roles (external users)
 */
export const CUSTOMER_ROLES: ReadonlyArray<RoleType> = [
  ROLES.CUSTOMER_ACCOUNT,
  ROLES.CUSTOMER_GUEST
] as const;

// ==============================================================================
// ROLE INHERITANCE RULES
// ==============================================================================

/**
 * Role inheritance hierarchy
 * Higher level roles inherit permissions from lower level roles
 */
export const ROLE_INHERITANCE: Record<RoleType, ReadonlyArray<RoleType>> = {
  [ROLES.PLATFORM_ADMIN]: [
    ROLES.BRAND_ADMIN,
    ROLES.BRAND_STAFF,
    ROLES.POS_STAFF,
    ROLES.CUSTOMER_ACCOUNT,
    ROLES.CUSTOMER_GUEST
  ],
  [ROLES.BRAND_ADMIN]: [
    ROLES.BRAND_STAFF,
    ROLES.POS_STAFF,
    ROLES.CUSTOMER_ACCOUNT,
    ROLES.CUSTOMER_GUEST
  ],
  [ROLES.BRAND_STAFF]: [
    ROLES.CUSTOMER_ACCOUNT,
    ROLES.CUSTOMER_GUEST
  ],
  [ROLES.POS_STAFF]: [
    ROLES.CUSTOMER_ACCOUNT,
    ROLES.CUSTOMER_GUEST
  ],
  [ROLES.CUSTOMER_ACCOUNT]: [
    ROLES.CUSTOMER_GUEST
  ],
  [ROLES.CUSTOMER_GUEST]: []
};

/**
 * Roles that can assign/manage other roles
 */
export const ROLE_ASSIGNMENT_MATRIX: Record<RoleType, ReadonlyArray<RoleType>> = {
  [ROLES.PLATFORM_ADMIN]: [
    ROLES.PLATFORM_ADMIN,
    ROLES.BRAND_ADMIN,
    ROLES.BRAND_STAFF,
    ROLES.POS_STAFF,
    ROLES.CUSTOMER_ACCOUNT,
    ROLES.CUSTOMER_GUEST
  ],
  [ROLES.BRAND_ADMIN]: [
    ROLES.BRAND_STAFF,
    ROLES.POS_STAFF,
    ROLES.CUSTOMER_ACCOUNT,
    ROLES.CUSTOMER_GUEST
  ],
  [ROLES.BRAND_STAFF]: [],
  [ROLES.POS_STAFF]: [],
  [ROLES.CUSTOMER_ACCOUNT]: [],
  [ROLES.CUSTOMER_GUEST]: []
};

// ==============================================================================
// ROLE VALIDATION RULES
// ==============================================================================

/**
 * Maximum number of roles per user
 */
export const MAX_ROLES_PER_USER = 3;

/**
 * Incompatible role combinations
 * These roles cannot be assigned to the same user
 */
export const INCOMPATIBLE_ROLES: ReadonlyArray<readonly [RoleType, RoleType]> = [
  [ROLES.PLATFORM_ADMIN, ROLES.CUSTOMER_ACCOUNT],
  [ROLES.PLATFORM_ADMIN, ROLES.CUSTOMER_GUEST],
  [ROLES.BRAND_ADMIN, ROLES.CUSTOMER_ACCOUNT],
  [ROLES.BRAND_ADMIN, ROLES.CUSTOMER_GUEST],
  [ROLES.BRAND_STAFF, ROLES.CUSTOMER_ACCOUNT],
  [ROLES.BRAND_STAFF, ROLES.CUSTOMER_GUEST],
  [ROLES.POS_STAFF, ROLES.CUSTOMER_ACCOUNT],
  [ROLES.POS_STAFF, ROLES.CUSTOMER_GUEST]
] as const;

/**
 * Required roles for specific operations
 */
export const REQUIRED_ROLES_FOR_OPERATIONS = {
  USER_MANAGEMENT: [ROLES.PLATFORM_ADMIN, ROLES.BRAND_ADMIN],
  BRAND_MANAGEMENT: [ROLES.PLATFORM_ADMIN],
  CAMPAIGN_MANAGEMENT: [ROLES.PLATFORM_ADMIN, ROLES.BRAND_ADMIN, ROLES.BRAND_STAFF],
  POS_OPERATIONS: [ROLES.PLATFORM_ADMIN, ROLES.BRAND_ADMIN, ROLES.BRAND_STAFF, ROLES.POS_STAFF],
  REDEMPTION_OPERATIONS: [ROLES.PLATFORM_ADMIN, ROLES.BRAND_ADMIN, ROLES.BRAND_STAFF, ROLES.POS_STAFF, ROLES.CUSTOMER_ACCOUNT],
  ANALYTICS_ACCESS: [ROLES.PLATFORM_ADMIN, ROLES.BRAND_ADMIN, ROLES.BRAND_STAFF],
  SYSTEM_CONFIGURATION: [ROLES.PLATFORM_ADMIN]
} as const;

// ==============================================================================
// ROLE SCOPING AND CONTEXT
// ==============================================================================

/**
 * Role scopes define the context where roles apply
 */
export const ROLE_SCOPES = {
  GLOBAL: 'global',        // Platform-wide access
  BRAND: 'brand',          // Brand-specific access
  LOCATION: 'location',    // Location-specific access
  DEPARTMENT: 'department' // Department-specific access
} as const;

export type RoleScope = typeof ROLE_SCOPES[keyof typeof ROLE_SCOPES];

/**
 * Role scope mapping
 */
export const ROLE_SCOPE_MAP: Record<RoleType, RoleScope> = {
  [ROLES.PLATFORM_ADMIN]: ROLE_SCOPES.GLOBAL,
  [ROLES.BRAND_ADMIN]: ROLE_SCOPES.BRAND,
  [ROLES.BRAND_STAFF]: ROLE_SCOPES.BRAND,
  [ROLES.POS_STAFF]: ROLE_SCOPES.LOCATION,
  [ROLES.CUSTOMER_ACCOUNT]: ROLE_SCOPES.GLOBAL,
  [ROLES.CUSTOMER_GUEST]: ROLE_SCOPES.GLOBAL
};

/**
 * Context requirements for role assignment
 */
export const ROLE_CONTEXT_REQUIREMENTS: Record<RoleType, ReadonlyArray<string>> = {
  [ROLES.PLATFORM_ADMIN]: [],
  [ROLES.BRAND_ADMIN]: ['brandId'],
  [ROLES.BRAND_STAFF]: ['brandId'],
  [ROLES.POS_STAFF]: ['brandId', 'locationId'],
  [ROLES.CUSTOMER_ACCOUNT]: [],
  [ROLES.CUSTOMER_GUEST]: []
};

// ==============================================================================
// ROLE UTILITY FUNCTIONS
// ==============================================================================

/**
 * Check if a role is administrative
 */
export const isAdministrativeRole = (role: RoleType): boolean => {
  return ADMINISTRATIVE_ROLES.includes(role);
};

/**
 * Check if a role is a staff role
 */
export const isStaffRole = (role: RoleType): boolean => {
  return STAFF_ROLES.includes(role);
};

/**
 * Check if a role is a customer role
 */
export const isCustomerRole = (role: RoleType): boolean => {
  return CUSTOMER_ROLES.includes(role);
};

/**
 * Check if a role is a system role
 */
export const isSystemRole = (role: RoleType): boolean => {
  return SYSTEM_ROLES.includes(role);
};

/**
 * Get role hierarchy level
 */
export const getRoleLevel = (role: RoleType): number => {
  return ROLE_LEVELS[role];
};

/**
 * Check if role1 has higher authority than role2
 */
export const hasHigherAuthority = (role1: RoleType, role2: RoleType): boolean => {
  return ROLE_LEVELS[role1] < ROLE_LEVELS[role2];
};

/**
 * Check if role1 can manage role2
 */
export const canManageRole = (managerRole: RoleType, targetRole: RoleType): boolean => {
  return ROLE_ASSIGNMENT_MATRIX[managerRole]?.includes(targetRole) ?? false;
};

/**
 * Check if roles are incompatible
 */
export const areRolesIncompatible = (role1: RoleType, role2: RoleType): boolean => {
  return INCOMPATIBLE_ROLES.some(([r1, r2]) => 
    (r1 === role1 && r2 === role2) || (r1 === role2 && r2 === role1)
  );
};

/**
 * Get inherited roles for a given role
 */
export const getInheritedRoles = (role: RoleType): ReadonlyArray<RoleType> => {
  return ROLE_INHERITANCE[role] ?? [];
};

/**
 * Get all effective roles (including inherited)
 */
export const getEffectiveRoles = (roles: RoleType[]): RoleType[] => {
  const effectiveRoles = new Set(roles);
  
  roles.forEach(role => {
    getInheritedRoles(role).forEach(inheritedRole => {
      effectiveRoles.add(inheritedRole);
    });
  });
  
  return Array.from(effectiveRoles);
};

/**
 * Validate role combination
 */
export const validateRoleCombination = (roles: RoleType[]): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];
  
  // Check maximum roles
  if (roles.length > MAX_ROLES_PER_USER) {
    errors.push(`Maximum ${MAX_ROLES_PER_USER} roles allowed per user`);
  }
  
  // Check incompatible combinations
  for (let i = 0; i < roles.length; i++) {
    for (let j = i + 1; j < roles.length; j++) {
      if (areRolesIncompatible(roles[i], roles[j])) {
        errors.push(`Roles ${roles[i]} and ${roles[j]} are incompatible`);
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Get roles by category
 */
export const getRolesByCategory = (category: RoleCategory): RoleType[] => {
  return Object.entries(ROLE_CATEGORY_MAP)
    .filter(([, roleCategory]) => roleCategory === category)
    .map(([role]) => role as RoleType);
};

/**
 * Get role display information
 */
export const getRoleDisplayInfo = (role: RoleType) => {
  return {
    id: role,
    name: ROLE_DISPLAY_NAMES[role],
    description: ROLE_DESCRIPTIONS[role],
    level: ROLE_LEVELS[role],
    category: ROLE_CATEGORY_MAP[role],
    scope: ROLE_SCOPE_MAP[role],
    isSystem: isSystemRole(role),
    isAdministrative: isAdministrativeRole(role),
    isStaff: isStaffRole(role),
    isCustomer: isCustomerRole(role)
  };
};

// ==============================================================================
// ROLE VALIDATION SCHEMAS
// ==============================================================================

/**
 * Valid role values for validation
 */
export const VALID_ROLES = Object.values(ROLES);

/**
 * Role validation regex
 */
export const ROLE_VALIDATION_REGEX = /^[a-z_]+$/;

/**
 * Role name constraints
 */
export const ROLE_NAME_CONSTRAINTS = {
  MIN_LENGTH: 3,
  MAX_LENGTH: 50,
  PATTERN: ROLE_VALIDATION_REGEX
};

// ==============================================================================
// EXPORT ALL ROLE CONSTANTS
// ==============================================================================

export {
  // Main constants
  ROLES,
  ROLE_DISPLAY_NAMES,
  ROLE_DESCRIPTIONS,
  ROLE_LEVELS,
  ROLE_CATEGORIES,
  ROLE_CATEGORY_MAP,
  ROLE_SCOPES,
  ROLE_SCOPE_MAP,
  
  // Role groups
  SYSTEM_ROLES,
  ADMINISTRATIVE_ROLES,
  STAFF_ROLES,
  CUSTOMER_ROLES,
  
  // Role relationships
  ROLE_INHERITANCE,
  ROLE_ASSIGNMENT_MATRIX,
  INCOMPATIBLE_ROLES,
  REQUIRED_ROLES_FOR_OPERATIONS,
  ROLE_CONTEXT_REQUIREMENTS,
  
  // Configuration
  DEFAULT_ROLE,
  MAX_ROLES_PER_USER,
  VALID_ROLES,
  ROLE_NAME_CONSTRAINTS,
  
  // Utility functions
  isAdministrativeRole,
  isStaffRole,
  isCustomerRole,
  isSystemRole,
  getRoleLevel,
  hasHigherAuthority,
  canManageRole,
  areRolesIncompatible,
  getInheritedRoles,
  getEffectiveRoles,
  validateRoleCombination,
  getRolesByCategory,
  getRoleDisplayInfo
};

// Export types
export type {
  RoleType,
  RoleCategory,
  RoleScope
};
