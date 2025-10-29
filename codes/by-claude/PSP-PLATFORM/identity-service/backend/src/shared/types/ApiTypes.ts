/**
 * ApiTypes.ts - API Request/Response Type Definitions
 * 
 * SRS Reference: Part04 Features (API Contracts)
 * Architecture: RESTful API Type System
 * 
 * Purpose: Type definitions for all API endpoints across microservices
 * Usage: Import for type-safe API development and client integration
 */

import { PaginationRequest, PaginationResponse, BaseRequest, BaseResponse } from './CommonTypes';

// ========================
// HTTP METHOD TYPES
// ========================

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';

// ========================
// API RESPONSE STATUS
// ========================

export type ApiResponseStatus = 'SUCCESS' | 'ERROR' | 'PARTIAL';

// ========================
// CONTENT TYPES
// ========================

export type ContentType = 
  | 'application/json'
  | 'application/xml'
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'text/plain'
  | 'text/html';

// ========================
// STANDARD API RESPONSE
// ========================

export interface ApiResponse<T = any> extends BaseResponse<T> {
  status: ApiResponseStatus;
  statusCode: number;
  path: string;
  method: HttpMethod;
  timestamp: Date;
  version: string;
}

export interface ApiErrorResponse extends ApiResponse<null> {
  status: 'ERROR';
  error: {
    code: string;
    message: string;
    details?: any;
    validationErrors?: ValidationErrorResponse[];
  };
}

export interface ValidationErrorResponse {
  field: string;
  message: string;
  value?: any;
  constraint: string;
}

// ========================
// AUTHENTICATION API TYPES
// ========================

export interface LoginRequest extends BaseRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
  deviceInfo?: DeviceInfo;
}

export interface LoginResponse extends ApiResponse<{
  user: UserAuthInfo;
  tokens: TokenPair;
  session: SessionInfo;
}> {}

export interface RefreshTokenRequest extends BaseRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse extends ApiResponse<{
  tokens: TokenPair;
}> {}

export interface LogoutRequest extends BaseRequest {
  sessionId?: string;
  allSessions?: boolean;
}

export interface LogoutResponse extends ApiResponse<{
  message: string;
  sessionsClosed: number;
}> {}

export interface ForgotPasswordRequest extends BaseRequest {
  email: string;
}

export interface ForgotPasswordResponse extends ApiResponse<{
  message: string;
  resetTokenSent: boolean;
}> {}

export interface ResetPasswordRequest extends BaseRequest {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPasswordResponse extends ApiResponse<{
  message: string;
  passwordReset: boolean;
}> {}

// ========================
// USER MANAGEMENT API TYPES
// ========================

export interface CreateUserRequest extends BaseRequest {
  email: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  roles?: string[];
}

export interface CreateUserResponse extends ApiResponse<{
  user: UserInfo;
  emailVerificationSent: boolean;
}> {}

export interface UpdateUserRequest extends BaseRequest {
  userId?: string; // Optional - can be inferred from token
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  profilePicture?: string;
  preferences?: UserPreferences;
}

export interface UpdateUserResponse extends ApiResponse<{
  user: UserInfo;
  updatedFields: string[];
}> {}

export interface GetUserRequest extends BaseRequest {
  userId: string;
  includeRoles?: boolean;
  includePermissions?: boolean;
}

export interface GetUserResponse extends ApiResponse<{
  user: UserDetailedInfo;
}> {}

export interface ListUsersRequest extends BaseRequest, PaginationRequest {
  filters?: UserFilters;
  search?: string;
  includeInactive?: boolean;
}

export interface ListUsersResponse extends ApiResponse<PaginationResponse<UserInfo>> {}

export interface DeleteUserRequest extends BaseRequest {
  userId: string;
  reason?: string;
  hardDelete?: boolean;
}

export interface DeleteUserResponse extends ApiResponse<{
  message: string;
  userDeleted: boolean;
  deletionType: 'SOFT' | 'HARD';
}> {}

// ========================
// ROLE MANAGEMENT API TYPES
// ========================

export interface CreateRoleRequest extends BaseRequest {
  name: string;
  description?: string;
  permissions: string[];
  isSystem?: boolean;
}

export interface CreateRoleResponse extends ApiResponse<{
  role: RoleInfo;
}> {}

export interface UpdateRoleRequest extends BaseRequest {
  roleId: string;
  name?: string;
  description?: string;
  permissions?: string[];
}

export interface UpdateRoleResponse extends ApiResponse<{
  role: RoleInfo;
  updatedFields: string[];
}> {}

export interface AssignRoleRequest extends BaseRequest {
  userId: string;
  roleId: string;
  expiresAt?: Date;
}

export interface AssignRoleResponse extends ApiResponse<{
  message: string;
  assignment: RoleAssignment;
}> {}

export interface ListRolesRequest extends BaseRequest, PaginationRequest {
  includePermissions?: boolean;
  includeSystem?: boolean;
}

export interface ListRolesResponse extends ApiResponse<PaginationResponse<RoleInfo>> {}

// ========================
// OTP VERIFICATION API TYPES
// ========================

export interface GenerateOTPRequest extends BaseRequest {
  type: 'EMAIL' | 'SMS';
  purpose: 'VERIFICATION' | 'RESET_PASSWORD' | 'TWO_FACTOR';
  contact?: string; // email or phone
}

export interface GenerateOTPResponse extends ApiResponse<{
  otpId: string;
  expiresAt: Date;
  deliveryMethod: 'EMAIL' | 'SMS';
  maskedContact: string;
}> {}

export interface VerifyOTPRequest extends BaseRequest {
  otpId: string;
  code: string;
  purpose: 'VERIFICATION' | 'RESET_PASSWORD' | 'TWO_FACTOR';
}

export interface VerifyOTPResponse extends ApiResponse<{
  verified: boolean;
  purpose: string;
  remainingAttempts?: number;
}> {}

// ========================
// SESSION MANAGEMENT API TYPES
// ========================

export interface ListSessionsRequest extends BaseRequest {
  userId?: string; // Optional - can be inferred from token
  includeExpired?: boolean;
}

export interface ListSessionsResponse extends ApiResponse<{
  sessions: SessionInfo[];
  activeSessions: number;
}> {}

export interface TerminateSessionRequest extends BaseRequest {
  sessionId: string;
  reason?: string;
}

export interface TerminateSessionResponse extends ApiResponse<{
  message: string;
  sessionTerminated: boolean;
}> {}

// ========================
// PROFILE API TYPES
// ========================

export interface GetProfileRequest extends BaseRequest {}

export interface GetProfileResponse extends ApiResponse<{
  profile: UserProfile;
  lastLoginAt: Date;
  sessionInfo: SessionInfo;
}> {}

export interface UpdateProfileRequest extends BaseRequest {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  preferences?: UserPreferences;
  avatar?: FileUpload;
}

export interface UpdateProfileResponse extends ApiResponse<{
  profile: UserProfile;
  updatedFields: string[];
}> {}

// ========================
// HEALTH CHECK API TYPES
// ========================

export interface HealthCheckRequest extends BaseRequest {}

export interface HealthCheckResponse extends ApiResponse<{
  status: 'HEALTHY' | 'DEGRADED' | 'UNHEALTHY';
  checks: HealthCheck[];
  timestamp: Date;
  version: string;
  uptime: number;
}> {}

export interface HealthCheck {
  name: string;
  status: 'UP' | 'DOWN';
  responseTime?: number;
  details?: Record<string, any>;
}

// ========================
// SUPPORTING TYPES
// ========================

export interface DeviceInfo {
  deviceId?: string;
  platform: string;
  osVersion?: string;
  appVersion?: string;
  browserInfo?: string;
  ipAddress?: string;
  location?: GeolocationInfo;
}

export interface GeolocationInfo {
  latitude?: number;
  longitude?: number;
  city?: string;
  country?: string;
  timezone?: string;
}

export interface UserAuthInfo {
  userId: string;
  email: string;
  username: string;
  roles: string[];
  permissions: string[];
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  lastLoginAt?: Date;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  tokenType: 'Bearer';
  expiresIn: number;
  refreshExpiresIn: number;
}

export interface SessionInfo {
  sessionId: string;
  deviceInfo: DeviceInfo;
  createdAt: Date;
  lastActivityAt: Date;
  expiresAt: Date;
  isActive: boolean;
}

export interface UserInfo {
  userId: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  isActive: boolean;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  createdAt: Date;
  lastLoginAt?: Date;
}

export interface UserDetailedInfo extends UserInfo {
  roles: RoleInfo[];
  permissions: string[];
  profile: UserProfile;
  sessions: SessionInfo[];
  auditInfo: AuditInfo;
}

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  displayName?: string;
  phoneNumber?: string;
  avatar?: string;
  bio?: string;
  preferences: UserPreferences;
  socialLinks?: SocialLinks;
}

export interface UserPreferences {
  language: string;
  timezone: string;
  theme: 'LIGHT' | 'DARK' | 'AUTO';
  notifications: NotificationPreferences;
  privacy: PrivacySettings;
}

export interface NotificationPreferences {
  email: boolean;
  sms: boolean;
  push: boolean;
  inApp: boolean;
  marketing: boolean;
}

export interface PrivacySettings {
  profileVisibility: 'PUBLIC' | 'PRIVATE' | 'FRIENDS';
  showEmail: boolean;
  showPhone: boolean;
  showLastSeen: boolean;
}

export interface SocialLinks {
  website?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface RoleInfo {
  roleId: string;
  name: string;
  description?: string;
  permissions: string[];
  isSystem: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface RoleAssignment {
  userId: string;
  roleId: string;
  assignedAt: Date;
  assignedBy: string;
  expiresAt?: Date;
  isActive: boolean;
}

export interface UserFilters {
  roles?: string[];
  isActive?: boolean;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  createdAfter?: Date;
  createdBefore?: Date;
  lastLoginAfter?: Date;
  lastLoginBefore?: Date;
}

export interface FileUpload {
  filename: string;
  mimeType: string;
  size: number;
  data: string; // base64 encoded
}

export interface AuditInfo {
  createdAt: Date;
  createdBy?: string;
  updatedAt: Date;
  updatedBy?: string;
  version: number;
  lastModifiedBy?: string;
}

// ========================
// REQUEST VALIDATION TYPES
// ========================

export interface RequestValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  min?: number;
  max?: number;
  enum?: any[];
  custom?: (value: any) => boolean;
}

export interface FieldValidationRule {
  field: string;
  rules: RequestValidationRules;
  message?: string;
}

export interface ApiEndpointSchema {
  path: string;
  method: HttpMethod;
  requestSchema?: FieldValidationRule[];
  responseSchema?: any;
  requiresAuth?: boolean;
  requiredRoles?: string[];
  requiredPermissions?: string[];
  rateLimit?: RateLimitConfig;
}

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

// ========================
// TYPE GUARDS
// ========================

export const ApiTypeGuards = {
  isApiResponse: (obj: any): obj is ApiResponse => 
    obj && typeof obj.success === 'boolean' && obj.statusCode,
  
  isApiErrorResponse: (obj: any): obj is ApiErrorResponse => 
    obj && obj.status === 'ERROR' && obj.error,
  
  isValidHttpMethod: (method: string): method is HttpMethod => 
    ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'].includes(method),
  
  hasValidPagination: (req: any): req is PaginationRequest => 
    req && typeof req.page === 'number' && typeof req.limit === 'number',
  
  isAuthenticatedRequest: (req: any): req is BaseRequest => 
    req && (req.userId || req.sessionId)
};
