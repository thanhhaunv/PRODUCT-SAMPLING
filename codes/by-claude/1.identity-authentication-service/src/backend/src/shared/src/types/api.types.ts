// ==============================================================================
// SHARED API TYPES - IDENTITY & AUTH UNIFIED PORTAL
// Tham chiếu: SRS-Grok-V2.md - Part08 API Design + Part02.8 Technical Requirements
// Purpose: Shared TypeScript types for API contracts between backend and frontend
// ==============================================================================

// ==============================================================================
// BASE API TYPES
// ==============================================================================

/**
 * Standard API response wrapper
 * Tham chiếu: SRS-Grok-V2.md - Part08.2 Response Format
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: ApiError;
  meta?: ResponseMeta;
  timestamp: string;
  requestId: string;
}

/**
 * API error structure
 * Tham chiếu: SRS-Grok-V2.md - Part05.8 Error Handling
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  field?: string;
  statusCode: number;
  timestamp: string;
  requestId: string;
  stack?: string; // Only in development
}

/**
 * Response metadata for pagination and additional info
 */
export interface ResponseMeta {
  pagination?: PaginationMeta;
  totalCount?: number;
  executionTime?: number;
  version?: string;
  deprecationWarning?: string;
}

/**
 * Pagination metadata
 * Tham chiếu: SRS-Grok-V2.md - Part08.3 Pagination
 */
export interface PaginationMeta {
  page: number;
  limit: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage?: number;
  previousPage?: number;
}

/**
 * Standard pagination request parameters
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
  filters?: Record<string, unknown>;
}

// ==============================================================================
// AUTHENTICATION API TYPES
// ==============================================================================

/**
 * Login request payload
 * Tham chiếu: SRS-Grok-V2.md - Part04.1.3 User Authentication
 */
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
  deviceInfo?: DeviceInfo;
}

/**
 * Login response data
 */
export interface LoginResponse {
  user: UserInfo;
  tokens: TokenPair;
  sessionId: string;
  expiresAt: string;
  requiresOTP: boolean;
  otpSent?: boolean;
}

/**
 * OTP verification request
 * Tham chiếu: SRS-Grok-V2.md - Part04.1.5 OTP Verification
 */
export interface OTPVerificationRequest {
  sessionId: string;
  otpCode: string;
  deviceInfo?: DeviceInfo;
}

/**
 * OTP verification response
 */
export interface OTPVerificationResponse {
  verified: boolean;
  tokens: TokenPair;
  user: UserInfo;
  sessionId: string;
  expiresAt: string;
}

/**
 * Token refresh request
 */
export interface RefreshTokenRequest {
  refreshToken: string;
  deviceInfo?: DeviceInfo;
}

/**
 * Token pair structure
 */
export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  tokenType: 'Bearer';
  expiresIn: number;
  refreshExpiresIn: number;
  scope?: string[];
}

/**
 * Device information for security tracking
 */
export interface DeviceInfo {
  userAgent: string;
  ipAddress: string;
  deviceType: 'desktop' | 'mobile' | 'tablet' | 'unknown';
  browser?: string;
  os?: string;
  fingerprint?: string;
}

// ==============================================================================
// USER MANAGEMENT API TYPES
// ==============================================================================

/**
 * User information structure
 * Tham chiếu: SRS-Grok-V2.md - Part07.1 Data Model Overview
 */
export interface UserInfo {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phone?: string;
  avatar?: string;
  status: UserStatus;
  roles: RoleInfo[];
  permissions: string[];
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  twoFactorEnabled: boolean;
  preferredLanguage: string;
  timezone: string;
  metadata?: Record<string, unknown>;
}

/**
 * User status enumeration
 */
export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  PENDING_VERIFICATION = 'pending_verification',
  LOCKED = 'locked',
  DELETED = 'deleted'
}

/**
 * Create user request
 */
export interface CreateUserRequest {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  password: string;
  roles: string[];
  sendWelcomeEmail?: boolean;
  metadata?: Record<string, unknown>;
}

/**
 * Update user request
 */
export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatar?: string;
  preferredLanguage?: string;
  timezone?: string;
  metadata?: Record<string, unknown>;
}

/**
 * User search and filter parameters
 */
export interface UserSearchParams extends PaginationParams {
  status?: UserStatus;
  roles?: string[];
  emailVerified?: boolean;
  phoneVerified?: boolean;
  twoFactorEnabled?: boolean;
  createdAfter?: string;
  createdBefore?: string;
  lastLoginAfter?: string;
  lastLoginBefore?: string;
}

/**
 * Bulk user operations
 */
export interface BulkUserOperation {
  action: 'activate' | 'deactivate' | 'suspend' | 'delete' | 'assign_role' | 'remove_role';
  userIds: string[];
  data?: Record<string, unknown>;
  reason?: string;
}

// ==============================================================================
// ROLE & PERMISSION API TYPES
// ==============================================================================

/**
 * Role information structure
 * Tham chiếu: Access_Control_Tree_Grok.md
 */
export interface RoleInfo {
  id: string;
  name: string;
  displayName: string;
  description: string;
  level: number;
  parentId?: string;
  permissions: PermissionInfo[];
  userCount?: number;
  isSystemRole: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}

/**
 * Permission information structure
 */
export interface PermissionInfo {
  id: string;
  name: string;
  displayName: string;
  description: string;
  resource: string;
  action: string;
  scope?: string;
  isSystemPermission: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Create role request
 */
export interface CreateRoleRequest {
  name: string;
  displayName: string;
  description: string;
  parentId?: string;
  permissions: string[];
  metadata?: Record<string, unknown>;
}

/**
 * Update role request
 */
export interface UpdateRoleRequest {
  displayName?: string;
  description?: string;
  permissions?: string[];
  isActive?: boolean;
  metadata?: Record<string, unknown>;
}

/**
 * Role assignment request
 */
export interface RoleAssignmentRequest {
  userId: string;
  roleIds: string[];
  reason?: string;
  expiresAt?: string;
}

// ==============================================================================
// SESSION MANAGEMENT API TYPES
// ==============================================================================

/**
 * Session information
 * Tham chiếu: SRS-Grok-V2.md - Part07.2.5 Session Management
 */
export interface SessionInfo {
  id: string;
  userId: string;
  deviceInfo: DeviceInfo;
  ipAddress: string;
  isActive: boolean;
  isCurrent: boolean;
  createdAt: string;
  lastActivityAt: string;
  expiresAt: string;
  metadata?: Record<string, unknown>;
}

/**
 * Session termination request
 */
export interface TerminateSessionRequest {
  sessionId?: string;
  allSessions?: boolean;
  reason?: string;
}

// ==============================================================================
// AUDIT & ACTIVITY API TYPES
// ==============================================================================

/**
 * Activity log entry
 * Tham chiếu: SRS-Grok-V2.md - Part15.3.2 Audit Logging
 */
export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  resource: string;
  resourceId?: string;
  details: Record<string, unknown>;
  ipAddress: string;
  userAgent: string;
  sessionId: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'success' | 'failure' | 'pending';
}

/**
 * Activity search parameters
 */
export interface ActivitySearchParams extends PaginationParams {
  userId?: string;
  action?: string;
  resource?: string;
  severity?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  ipAddress?: string;
}

// ==============================================================================
// HEALTH CHECK API TYPES
// ==============================================================================

/**
 * Health check response
 * Tham chiếu: SRS-Grok-V2.md - Part15.3.1 Health Monitoring
 */
export interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
  services: ServiceHealth[];
  system: SystemHealth;
}

/**
 * Individual service health
 */
export interface ServiceHealth {
  name: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  responseTime?: number;
  details?: Record<string, unknown>;
  lastChecked: string;
}

/**
 * System health metrics
 */
export interface SystemHealth {
  memory: {
    used: number;
    free: number;
    total: number;
    percentage: number;
  };
  cpu: {
    usage: number;
    loadAverage: number[];
  };
  disk: {
    used: number;
    free: number;
    total: number;
    percentage: number;
  };
}

// ==============================================================================
// FILE UPLOAD API TYPES
// ==============================================================================

/**
 * File upload response
 */
export interface FileUploadResponse {
  id: string;
  fileName: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  thumbnailUrl?: string;
  uploadedAt: string;
  expiresAt?: string;
  metadata?: Record<string, unknown>;
}

/**
 * File upload request
 */
export interface FileUploadRequest {
  file: File | Buffer;
  fileName?: string;
  folder?: string;
  isPublic?: boolean;
  expiresIn?: number;
  metadata?: Record<string, unknown>;
}

// ==============================================================================
// NOTIFICATION API TYPES
// ==============================================================================

/**
 * Notification structure
 */
export interface NotificationInfo {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  priority: NotificationPriority;
  isRead: boolean;
  data?: Record<string, unknown>;
  createdAt: string;
  readAt?: string;
  expiresAt?: string;
}

/**
 * Notification types
 */
export enum NotificationType {
  SYSTEM = 'system',
  SECURITY = 'security',
  USER_ACTION = 'user_action',
  REMINDER = 'reminder',
  ANNOUNCEMENT = 'announcement'
}

/**
 * Notification priorities
 */
export enum NotificationPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

// ==============================================================================
// EXPORT ALL TYPES
// ==============================================================================

export type {
  // Base types
  ApiResponse,
  ApiError,
  ResponseMeta,
  PaginationMeta,
  PaginationParams,
  
  // Authentication types
  LoginRequest,
  LoginResponse,
  OTPVerificationRequest,
  OTPVerificationResponse,
  RefreshTokenRequest,
  TokenPair,
  DeviceInfo,
  
  // User management types
  UserInfo,
  CreateUserRequest,
  UpdateUserRequest,
  UserSearchParams,
  BulkUserOperation,
  
  // Role & permission types
  RoleInfo,
  PermissionInfo,
  CreateRoleRequest,
  UpdateRoleRequest,
  RoleAssignmentRequest,
  
  // Session types
  SessionInfo,
  TerminateSessionRequest,
  
  // Activity types
  ActivityLog,
  ActivitySearchParams,
  
  // Health check types
  HealthCheckResponse,
  ServiceHealth,
  SystemHealth,
  
  // File upload types
  FileUploadResponse,
  FileUploadRequest,
  
  // Notification types
  NotificationInfo
};

export {
  // Enums
  UserStatus,
  NotificationType,
  NotificationPriority
};
