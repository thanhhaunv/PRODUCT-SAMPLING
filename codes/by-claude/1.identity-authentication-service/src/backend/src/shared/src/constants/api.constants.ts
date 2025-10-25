// ==============================================================================
// API CONSTANTS - IDENTITY & AUTH UNIFIED PORTAL
// Tham chiếu: SRS-Grok-V2.md - Part08 API Design + Part08.1 Endpoint Structure
// Purpose: Centralized API endpoint definitions and configuration
// ==============================================================================

// ==============================================================================
// BASE API CONFIGURATION
// ==============================================================================

/**
 * API version information
 */
export const API_VERSION = {
  CURRENT: 'v1',
  SUPPORTED: ['v1'],
  DEPRECATED: [],
  SUNSET_DATE: null
} as const;

/**
 * API base configuration
 */
export const API_CONFIG = {
  BASE_PATH: '/api',
  VERSION_PATH: `/${API_VERSION.CURRENT}`,
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100
  }
} as const;

/**
 * Complete API base URL
 */
export const API_BASE = `${API_CONFIG.BASE_PATH}${API_CONFIG.VERSION_PATH}`;

// ==============================================================================
// AUTHENTICATION ENDPOINTS
// ==============================================================================

export const AUTH_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/auth`,
  
  // Authentication flow
  LOGIN: `${API_BASE}/auth/login`,
  LOGOUT: `${API_BASE}/auth/logout`,
  REFRESH: `${API_BASE}/auth/refresh`,
  
  // OTP operations
  VERIFY_OTP: `${API_BASE}/auth/verify-otp`,
  RESEND_OTP: `${API_BASE}/auth/resend-otp`,
  
  // Password management
  CHANGE_PASSWORD: `${API_BASE}/auth/change-password`,
  FORGOT_PASSWORD: `${API_BASE}/auth/forgot-password`,
  RESET_PASSWORD: `${API_BASE}/auth/reset-password`,
  
  // Two-factor authentication
  SETUP_2FA: `${API_BASE}/auth/2fa/setup`,
  VERIFY_2FA_SETUP: `${API_BASE}/auth/2fa/verify-setup`,
  DISABLE_2FA: `${API_BASE}/auth/2fa/disable`,
  
  // Session management
  SESSIONS: `${API_BASE}/auth/sessions`,
  TERMINATE_SESSION: (sessionId: string) => `${API_BASE}/auth/sessions/${sessionId}`,
  TERMINATE_ALL_SESSIONS: `${API_BASE}/auth/sessions/terminate-all`,
  
  // Profile verification
  VERIFY_EMAIL: `${API_BASE}/auth/verify-email`,
  VERIFY_PHONE: `${API_BASE}/auth/verify-phone`,
  RESEND_VERIFICATION: `${API_BASE}/auth/resend-verification`
} as const;

// ==============================================================================
// USER MANAGEMENT ENDPOINTS
// ==============================================================================

export const USER_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/users`,
  
  // User CRUD operations
  LIST: `${API_BASE}/users`,
  CREATE: `${API_BASE}/users`,
  GET: (userId: string) => `${API_BASE}/users/${userId}`,
  UPDATE: (userId: string) => `${API_BASE}/users/${userId}`,
  DELETE: (userId: string) => `${API_BASE}/users/${userId}`,
  
  // Current user operations
  PROFILE: `${API_BASE}/users/me`,
  UPDATE_PROFILE: `${API_BASE}/users/me`,
  DELETE_PROFILE: `${API_BASE}/users/me`,
  
  // User status management
  ACTIVATE: (userId: string) => `${API_BASE}/users/${userId}/activate`,
  DEACTIVATE: (userId: string) => `${API_BASE}/users/${userId}/deactivate`,
  SUSPEND: (userId: string) => `${API_BASE}/users/${userId}/suspend`,
  
  // Role management
  ASSIGN_ROLES: (userId: string) => `${API_BASE}/users/${userId}/roles`,
  REMOVE_ROLES: (userId: string) => `${API_BASE}/users/${userId}/roles`,
  GET_ROLES: (userId: string) => `${API_BASE}/users/${userId}/roles`,
  
  // User search and filtering
  SEARCH: `${API_BASE}/users/search`,
  FILTER: `${API_BASE}/users/filter`,
  
  // Bulk operations
  BULK_CREATE: `${API_BASE}/users/bulk`,
  BULK_UPDATE: `${API_BASE}/users/bulk`,
  BULK_DELETE: `${API_BASE}/users/bulk`,
  BULK_ACTIVATE: `${API_BASE}/users/bulk/activate`,
  BULK_DEACTIVATE: `${API_BASE}/users/bulk/deactivate`,
  
  // Data operations
  EXPORT: `${API_BASE}/users/export`,
  IMPORT: `${API_BASE}/users/import`,
  
  // User statistics
  STATS: `${API_BASE}/users/stats`,
  COUNT: `${API_BASE}/users/count`
} as const;

// ==============================================================================
// ROLE AND PERMISSION ENDPOINTS
// ==============================================================================

export const ROLE_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/roles`,
  
  // Role CRUD operations
  LIST: `${API_BASE}/roles`,
  CREATE: `${API_BASE}/roles`,
  GET: (roleId: string) => `${API_BASE}/roles/${roleId}`,
  UPDATE: (roleId: string) => `${API_BASE}/roles/${roleId}`,
  DELETE: (roleId: string) => `${API_BASE}/roles/${roleId}`,
  
  // Role permissions
  GET_PERMISSIONS: (roleId: string) => `${API_BASE}/roles/${roleId}/permissions`,
  ASSIGN_PERMISSIONS: (roleId: string) => `${API_BASE}/roles/${roleId}/permissions`,
  REMOVE_PERMISSIONS: (roleId: string) => `${API_BASE}/roles/${roleId}/permissions`,
  
  // Role hierarchy
  GET_CHILDREN: (roleId: string) => `${API_BASE}/roles/${roleId}/children`,
  GET_PARENT: (roleId: string) => `${API_BASE}/roles/${roleId}/parent`,
  
  // Role users
  GET_USERS: (roleId: string) => `${API_BASE}/roles/${roleId}/users`,
  
  // Role validation
  VALIDATE: `${API_BASE}/roles/validate`,
  CHECK_NAME: `${API_BASE}/roles/check-name`
} as const;

export const PERMISSION_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/permissions`,
  
  // Permission CRUD operations
  LIST: `${API_BASE}/permissions`,
  CREATE: `${API_BASE}/permissions`,
  GET: (permissionId: string) => `${API_BASE}/permissions/${permissionId}`,
  UPDATE: (permissionId: string) => `${API_BASE}/permissions/${permissionId}`,
  DELETE: (permissionId: string) => `${API_BASE}/permissions/${permissionId}`,
  
  // Permission grouping
  BY_RESOURCE: `${API_BASE}/permissions/by-resource`,
  BY_ACTION: `${API_BASE}/permissions/by-action`,
  BY_SCOPE: `${API_BASE}/permissions/by-scope`,
  
  // Permission validation
  CHECK: `${API_BASE}/permissions/check`,
  VALIDATE: `${API_BASE}/permissions/validate`
} as const;

// ==============================================================================
// BRAND MANAGEMENT ENDPOINTS
// ==============================================================================

export const BRAND_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/brands`,
  
  // Brand CRUD operations
  LIST: `${API_BASE}/brands`,
  CREATE: `${API_BASE}/brands`,
  GET: (brandId: string) => `${API_BASE}/brands/${brandId}`,
  UPDATE: (brandId: string) => `${API_BASE}/brands/${brandId}`,
  DELETE: (brandId: string) => `${API_BASE}/brands/${brandId}`,
  
  // Brand settings
  GET_SETTINGS: (brandId: string) => `${API_BASE}/brands/${brandId}/settings`,
  UPDATE_SETTINGS: (brandId: string) => `${API_BASE}/brands/${brandId}/settings`,
  
  // Brand status
  ACTIVATE: (brandId: string) => `${API_BASE}/brands/${brandId}/activate`,
  DEACTIVATE: (brandId: string) => `${API_BASE}/brands/${brandId}/deactivate`,
  
  // Brand users
  GET_USERS: (brandId: string) => `${API_BASE}/brands/${brandId}/users`,
  ADD_USER: (brandId: string) => `${API_BASE}/brands/${brandId}/users`,
  REMOVE_USER: (brandId: string, userId: string) => `${API_BASE}/brands/${brandId}/users/${userId}`,
  
  // Brand statistics
  STATS: (brandId: string) => `${API_BASE}/brands/${brandId}/stats`,
  ANALYTICS: (brandId: string) => `${API_BASE}/brands/${brandId}/analytics`
} as const;

// ==============================================================================
// CAMPAIGN MANAGEMENT ENDPOINTS
// ==============================================================================

export const CAMPAIGN_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/campaigns`,
  
  // Campaign CRUD operations
  LIST: `${API_BASE}/campaigns`,
  CREATE: `${API_BASE}/campaigns`,
  GET: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}`,
  UPDATE: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}`,
  DELETE: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}`,
  
  // Campaign status
  ACTIVATE: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}/activate`,
  DEACTIVATE: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}/deactivate`,
  PAUSE: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}/pause`,
  RESUME: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}/resume`,
  
  // Campaign approval
  SUBMIT_FOR_APPROVAL: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}/submit`,
  APPROVE: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}/approve`,
  REJECT: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}/reject`,
  
  // Campaign analytics
  STATS: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}/stats`,
  PERFORMANCE: (campaignId: string) => `${API_BASE}/campaigns/${campaignId}/performance`,
  
  // Campaign filtering
  BY_BRAND: (brandId: string) => `${API_BASE}/campaigns?brandId=${brandId}`,
  BY_STATUS: (status: string) => `${API_BASE}/campaigns?status=${status}`,
  ACTIVE: `${API_BASE}/campaigns/active`,
  SCHEDULED: `${API_BASE}/campaigns/scheduled`,
  EXPIRED: `${API_BASE}/campaigns/expired`
} as const;

// ==============================================================================
// CUSTOMER MANAGEMENT ENDPOINTS
// ==============================================================================

export const CUSTOMER_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/customers`,
  
  // Customer CRUD operations
  LIST: `${API_BASE}/customers`,
  CREATE: `${API_BASE}/customers`,
  GET: (customerId: string) => `${API_BASE}/customers/${customerId}`,
  UPDATE: (customerId: string) => `${API_BASE}/customers/${customerId}`,
  DELETE: (customerId: string) => `${API_BASE}/customers/${customerId}`,
  
  // Customer profile
  PROFILE: (customerId: string) => `${API_BASE}/customers/${customerId}/profile`,
  UPDATE_PROFILE: (customerId: string) => `${API_BASE}/customers/${customerId}/profile`,
  
  // Customer search
  SEARCH: `${API_BASE}/customers/search`,
  LOOKUP: `${API_BASE}/customers/lookup`,
  
  // Customer segmentation
  SEGMENTS: `${API_BASE}/customers/segments`,
  ADD_TO_SEGMENT: (customerId: string, segmentId: string) => `${API_BASE}/customers/${customerId}/segments/${segmentId}`,
  REMOVE_FROM_SEGMENT: (customerId: string, segmentId: string) => `${API_BASE}/customers/${customerId}/segments/${segmentId}`,
  
  // Customer activity
  ACTIVITY: (customerId: string) => `${API_BASE}/customers/${customerId}/activity`,
  TRANSACTIONS: (customerId: string) => `${API_BASE}/customers/${customerId}/transactions`,
  REDEMPTIONS: (customerId: string) => `${API_BASE}/customers/${customerId}/redemptions`,
  
  // Customer preferences
  PREFERENCES: (customerId: string) => `${API_BASE}/customers/${customerId}/preferences`,
  UPDATE_PREFERENCES: (customerId: string) => `${API_BASE}/customers/${customerId}/preferences`,
  
  // Data operations
  EXPORT_DATA: (customerId: string) => `${API_BASE}/customers/${customerId}/export`,
  DELETE_DATA: (customerId: string) => `${API_BASE}/customers/${customerId}/delete-data`
} as const;

// ==============================================================================
// ANALYTICS AND REPORTING ENDPOINTS
// ==============================================================================

export const ANALYTICS_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/analytics`,
  
  // Dashboard data
  DASHBOARD: `${API_BASE}/analytics/dashboard`,
  OVERVIEW: `${API_BASE}/analytics/overview`,
  
  // User analytics
  USER_STATS: `${API_BASE}/analytics/users`,
  USER_GROWTH: `${API_BASE}/analytics/users/growth`,
  USER_ACTIVITY: `${API_BASE}/analytics/users/activity`,
  
  // Brand analytics
  BRAND_STATS: `${API_BASE}/analytics/brands`,
  BRAND_PERFORMANCE: (brandId: string) => `${API_BASE}/analytics/brands/${brandId}/performance`,
  
  // Campaign analytics
  CAMPAIGN_STATS: `${API_BASE}/analytics/campaigns`,
  CAMPAIGN_PERFORMANCE: (campaignId: string) => `${API_BASE}/analytics/campaigns/${campaignId}/performance`,
  
  // Customer analytics
  CUSTOMER_STATS: `${API_BASE}/analytics/customers`,
  CUSTOMER_BEHAVIOR: `${API_BASE}/analytics/customers/behavior`,
  CUSTOMER_SEGMENTS: `${API_BASE}/analytics/customers/segments`,
  
  // Transaction analytics
  TRANSACTION_STATS: `${API_BASE}/analytics/transactions`,
  REDEMPTION_STATS: `${API_BASE}/analytics/redemptions`,
  
  // Reports
  REPORTS: `${API_BASE}/analytics/reports`,
  GENERATE_REPORT: `${API_BASE}/analytics/reports/generate`,
  SCHEDULED_REPORTS: `${API_BASE}/analytics/reports/scheduled`,
  
  // Export data
  EXPORT: `${API_BASE}/analytics/export`,
  EXPORT_DASHBOARD: `${API_BASE}/analytics/export/dashboard`,
  EXPORT_CUSTOM: `${API_BASE}/analytics/export/custom`
} as const;

// ==============================================================================
// SYSTEM MANAGEMENT ENDPOINTS
// ==============================================================================

export const SYSTEM_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/system`,
  
  // Health checks
  HEALTH: `${API_BASE}/health`,
  HEALTH_DETAILED: `${API_BASE}/health/detailed`,
  READY: `${API_BASE}/ready`,
  LIVE: `${API_BASE}/live`,
  
  // System information
  INFO: `${API_BASE}/system/info`,
  VERSION: `${API_BASE}/system/version`,
  STATUS: `${API_BASE}/system/status`,
  
  // Configuration
  CONFIG: `${API_BASE}/system/config`,
  SETTINGS: `${API_BASE}/system/settings`,
  UPDATE_SETTINGS: `${API_BASE}/system/settings`,
  
  // Logging
  LOGS: `${API_BASE}/system/logs`,
  LOG_LEVELS: `${API_BASE}/system/logs/levels`,
  
  // Monitoring
  METRICS: `${API_BASE}/system/metrics`,
  PERFORMANCE: `${API_BASE}/system/performance`,
  
  // Maintenance
  MAINTENANCE: `${API_BASE}/system/maintenance`,
  BACKUP: `${API_BASE}/system/backup`,
  RESTORE: `${API_BASE}/system/restore`,
  
  // Notifications
  NOTIFICATIONS: `${API_BASE}/notifications`,
  SEND_NOTIFICATION: `${API_BASE}/notifications/send`,
  NOTIFICATION_TEMPLATES: `${API_BASE}/notifications/templates`
} as const;

// ==============================================================================
// FILE MANAGEMENT ENDPOINTS
// ==============================================================================

export const FILE_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/files`,
  
  // File operations
  UPLOAD: `${API_BASE}/files/upload`,
  DOWNLOAD: (fileId: string) => `${API_BASE}/files/${fileId}/download`,
  DELETE: (fileId: string) => `${API_BASE}/files/${fileId}`,
  
  // File information
  INFO: (fileId: string) => `${API_BASE}/files/${fileId}`,
  LIST: `${API_BASE}/files`,
  
  // Image operations
  RESIZE: (fileId: string) => `${API_BASE}/files/${fileId}/resize`,
  THUMBNAIL: (fileId: string) => `${API_BASE}/files/${fileId}/thumbnail`,
  
  // Bulk operations
  BULK_UPLOAD: `${API_BASE}/files/bulk-upload`,
  BULK_DELETE: `${API_BASE}/files/bulk-delete`,
  
  // Storage information
  STORAGE_STATS: `${API_BASE}/files/storage/stats`,
  CLEANUP: `${API_BASE}/files/cleanup`
} as const;

// ==============================================================================
// WEBHOOK ENDPOINTS
// ==============================================================================

export const WEBHOOK_ENDPOINTS = {
  // Base path
  BASE: `${API_BASE}/webhooks`,
  
  // Webhook CRUD operations
  LIST: `${API_BASE}/webhooks`,
  CREATE: `${API_BASE}/webhooks`,
  GET: (webhookId: string) => `${API_BASE}/webhooks/${webhookId}`,
  UPDATE: (webhookId: string) => `${API_BASE}/webhooks/${webhookId}`,
  DELETE: (webhookId: string) => `${API_BASE}/webhooks/${webhookId}`,
  
  // Webhook testing
  TEST: (webhookId: string) => `${API_BASE}/webhooks/${webhookId}/test`,
  VALIDATE: `${API_BASE}/webhooks/validate`,
  
  // Webhook events
  EVENTS: `${API_BASE}/webhooks/events`,
  EVENT_TYPES: `${API_BASE}/webhooks/event-types`,
  
  // Webhook logs
  LOGS: (webhookId: string) => `${API_BASE}/webhooks/${webhookId}/logs`,
  RETRY: (webhookId: string, deliveryId: string) => `${API_BASE}/webhooks/${webhookId}/deliveries/${deliveryId}/retry`
} as const;

// ==============================================================================
// UTILITY FUNCTIONS
// ==============================================================================

/**
 * Build query string from parameters
 */
export const buildQueryString = (params: Record<string, unknown>): string => {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      if (Array.isArray(value)) {
        value.forEach(item => searchParams.append(key, String(item)));
      } else {
        searchParams.append(key, String(value));
      }
    }
  });
  
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
};

/**
 * Build full URL with base and query parameters
 */
export const buildUrl = (endpoint: string, params?: Record<string, unknown>): string => {
  const queryString = params ? buildQueryString(params) : '';
  return `${endpoint}${queryString}`;
};

/**
 * Get paginated endpoint URL
 */
export const getPaginatedUrl = (
  baseEndpoint: string,
  page: number = 1,
  limit: number = 20,
  additionalParams?: Record<string, unknown>
): string => {
  return buildUrl(baseEndpoint, {
    page,
    limit,
    ...additionalParams
  });
};

/**
 * Get filtered endpoint URL
 */
export const getFilteredUrl = (
  baseEndpoint: string,
  filters: Record<string, unknown>,
  pagination?: { page?: number; limit?: number }
): string => {
  return buildUrl(baseEndpoint, {
    ...filters,
    ...pagination
  });
};

/**
 * Validate endpoint URL
 */
export const isValidEndpoint = (endpoint: string): boolean => {
  try {
    return endpoint.startsWith(API_BASE) && new URL(endpoint, 'http://localhost').pathname.length > 0;
  } catch {
    return false;
  }
};

// ==============================================================================
// HTTP STATUS CODES
// ==============================================================================

export const HTTP_STATUS = {
  // Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  
  // Redirection
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  NOT_MODIFIED: 304,
  
  // Client errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  
  // Server errors
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
} as const;

// ==============================================================================
// EXPORT ALL API CONSTANTS
// ==============================================================================

export {
  // Configuration
  API_VERSION,
  API_CONFIG,
  API_BASE,
  
  // Endpoint groups
  AUTH_ENDPOINTS,
  USER_ENDPOINTS,
  ROLE_ENDPOINTS,
  PERMISSION_ENDPOINTS,
  BRAND_ENDPOINTS,
  CAMPAIGN_ENDPOINTS,
  CUSTOMER_ENDPOINTS,
  ANALYTICS_ENDPOINTS,
  SYSTEM_ENDPOINTS,
  FILE_ENDPOINTS,
  WEBHOOK_ENDPOINTS,
  
  // Utilities
  buildQueryString,
  buildUrl,
  getPaginatedUrl,
  getFilteredUrl,
  isValidEndpoint,
  
  // HTTP Status codes
  HTTP_STATUS
};
