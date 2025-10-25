// ==============================================================================
// AUTHENTICATION TYPES - IDENTITY & AUTH UNIFIED PORTAL
// Tham chiếu: SRS-Grok-V2.md - Part04.1.3 User Authentication + Part05.3 Security Requirements
// Purpose: Authentication-specific TypeScript types for enhanced type safety
// ==============================================================================

import type { UserInfo, DeviceInfo, TokenPair } from './api.types';

// ==============================================================================
// AUTHENTICATION CONTEXT TYPES
// ==============================================================================

/**
 * Authentication context state
 * Used in React context and state management
 */
export interface AuthContextState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: UserInfo | null;
  tokens: TokenPair | null;
  sessionId: string | null;
  expiresAt: string | null;
  permissions: string[];
  roles: string[];
  lastActivity: string | null;
  deviceInfo: DeviceInfo | null;
}

/**
 * Authentication actions for state management
 */
export interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<AuthResult>;
  logout: (reason?: LogoutReason) => Promise<void>;
  refreshToken: () => Promise<boolean>;
  verifyOTP: (otpCode: string) => Promise<AuthResult>;
  updateUserInfo: (userInfo: Partial<UserInfo>) => void;
  checkPermission: (permission: string) => boolean;
  checkRole: (role: string) => boolean;
  clearAuth: () => void;
}

/**
 * Complete authentication context
 */
export interface AuthContext extends AuthContextState, AuthActions {}

// ==============================================================================
// AUTHENTICATION FLOW TYPES
// ==============================================================================

/**
 * Login credentials with validation
 */
export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
  captchaToken?: string;
  deviceInfo?: DeviceInfo;
}

/**
 * Authentication result
 */
export interface AuthResult {
  success: boolean;
  user?: UserInfo;
  tokens?: TokenPair;
  sessionId?: string;
  expiresAt?: string;
  requiresOTP?: boolean;
  otpSent?: boolean;
  error?: AuthError;
  redirectTo?: string;
}

/**
 * Authentication error types
 */
export interface AuthError {
  code: AuthErrorCode;
  message: string;
  field?: string;
  details?: Record<string, unknown>;
  retryAfter?: number;
  suggestions?: string[];
}

/**
 * Authentication error codes
 * Tham chiếu: SRS-Grok-V2.md - Part05.8 Error Handling
 */
export enum AuthErrorCode {
  // Credential errors
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  INVALID_EMAIL = 'INVALID_EMAIL',
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  
  // Account status errors
  ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
  ACCOUNT_SUSPENDED = 'ACCOUNT_SUSPENDED',
  ACCOUNT_DELETED = 'ACCOUNT_DELETED',
  ACCOUNT_NOT_VERIFIED = 'ACCOUNT_NOT_VERIFIED',
  
  // Session errors
  SESSION_EXPIRED = 'SESSION_EXPIRED',
  SESSION_INVALID = 'SESSION_INVALID',
  SESSION_NOT_FOUND = 'SESSION_NOT_FOUND',
  
  // Token errors
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  TOKEN_INVALID = 'TOKEN_INVALID',
  TOKEN_MALFORMED = 'TOKEN_MALFORMED',
  TOKEN_REVOKED = 'TOKEN_REVOKED',
  REFRESH_TOKEN_EXPIRED = 'REFRESH_TOKEN_EXPIRED',
  
  // OTP errors
  OTP_REQUIRED = 'OTP_REQUIRED',
  OTP_INVALID = 'OTP_INVALID',
  OTP_EXPIRED = 'OTP_EXPIRED',
  OTP_ALREADY_USED = 'OTP_ALREADY_USED',
  OTP_MAX_ATTEMPTS = 'OTP_MAX_ATTEMPTS',
  
  // Rate limiting
  TOO_MANY_ATTEMPTS = 'TOO_MANY_ATTEMPTS',
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  
  // Permission errors
  INSUFFICIENT_PERMISSIONS = 'INSUFFICIENT_PERMISSIONS',
  ROLE_NOT_ASSIGNED = 'ROLE_NOT_ASSIGNED',
  
  // System errors
  SERVER_ERROR = 'SERVER_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  MAINTENANCE_MODE = 'MAINTENANCE_MODE',
  
  // Validation errors
  VALIDATION_FAILED = 'VALIDATION_FAILED',
  CAPTCHA_REQUIRED = 'CAPTCHA_REQUIRED',
  CAPTCHA_INVALID = 'CAPTCHA_INVALID'
}

/**
 * Logout reasons for audit logging
 */
export enum LogoutReason {
  USER_INITIATED = 'user_initiated',
  TOKEN_EXPIRED = 'token_expired',
  SESSION_TIMEOUT = 'session_timeout',
  SECURITY_VIOLATION = 'security_violation',
  ADMIN_FORCED = 'admin_forced',
  DEVICE_CHANGE = 'device_change',
  SUSPICIOUS_ACTIVITY = 'suspicious_activity',
  MAINTENANCE = 'maintenance'
}

// ==============================================================================
// PASSWORD MANAGEMENT TYPES
// ==============================================================================

/**
 * Password change request
 */
export interface PasswordChangeRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  logoutOtherSessions?: boolean;
}

/**
 * Password reset request
 */
export interface PasswordResetRequest {
  email: string;
  captchaToken?: string;
}

/**
 * Password reset confirmation
 */
export interface PasswordResetConfirmation {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

/**
 * Password validation result
 */
export interface PasswordValidation {
  isValid: boolean;
  score: number; // 0-100
  feedback: PasswordFeedback[];
  strength: PasswordStrength;
  estimatedCrackTime: string;
}

/**
 * Password feedback
 */
export interface PasswordFeedback {
  type: 'error' | 'warning' | 'suggestion';
  message: string;
  code: string;
}

/**
 * Password strength levels
 */
export enum PasswordStrength {
  VERY_WEAK = 'very_weak',
  WEAK = 'weak',
  MEDIUM = 'medium',
  STRONG = 'strong',
  VERY_STRONG = 'very_strong'
}

// ==============================================================================
// TWO-FACTOR AUTHENTICATION TYPES
// ==============================================================================

/**
 * 2FA setup request
 */
export interface TwoFactorSetupRequest {
  method: TwoFactorMethod;
  phoneNumber?: string;
  email?: string;
}

/**
 * 2FA setup response
 */
export interface TwoFactorSetupResponse {
  method: TwoFactorMethod;
  qrCode?: string; // For TOTP
  secret?: string; // For TOTP
  backupCodes: string[];
  setupToken: string;
}

/**
 * 2FA verification for setup
 */
export interface TwoFactorSetupVerification {
  setupToken: string;
  verificationCode: string;
  method: TwoFactorMethod;
}

/**
 * 2FA methods
 */
export enum TwoFactorMethod {
  SMS = 'sms',
  EMAIL = 'email',
  TOTP = 'totp', // Time-based OTP (Google Authenticator)
  BACKUP_CODE = 'backup_code'
}

/**
 * OTP configuration
 */
export interface OTPConfig {
  method: TwoFactorMethod;
  expiresIn: number; // seconds
  length: number;
  maxAttempts: number;
  lockoutDuration: number; // seconds
  issuer: string;
  algorithm: 'SHA1' | 'SHA256' | 'SHA512';
}

// ==============================================================================
// SECURITY TYPES
// ==============================================================================

/**
 * Security event for logging
 */
export interface SecurityEvent {
  type: SecurityEventType;
  userId?: string;
  sessionId?: string;
  ipAddress: string;
  userAgent: string;
  details: Record<string, unknown>;
  severity: SecuritySeverity;
  timestamp: string;
  resolved?: boolean;
  resolvedAt?: string;
  resolvedBy?: string;
}

/**
 * Security event types
 */
export enum SecurityEventType {
  LOGIN_SUCCESS = 'login_success',
  LOGIN_FAILURE = 'login_failure',
  LOGOUT = 'logout',
  PASSWORD_CHANGE = 'password_change',
  PASSWORD_RESET = 'password_reset',
  OTP_VERIFICATION = 'otp_verification',
  ACCOUNT_LOCKED = 'account_locked',
  SUSPICIOUS_ACTIVITY = 'suspicious_activity',
  PERMISSION_VIOLATION = 'permission_violation',
  DATA_EXPORT = 'data_export',
  DATA_DELETION = 'data_deletion',
  ROLE_CHANGE = 'role_change',
  SESSION_HIJACK_ATTEMPT = 'session_hijack_attempt',
  BRUTE_FORCE_ATTEMPT = 'brute_force_attempt'
}

/**
 * Security severity levels
 */
export enum SecuritySeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

/**
 * Security settings for user
 */
export interface SecuritySettings {
  twoFactorEnabled: boolean;
  twoFactorMethods: TwoFactorMethod[];
  sessionTimeout: number; // minutes
  requirePasswordChange: boolean;
  passwordExpiresAt?: string;
  allowedIpRanges?: string[];
  loginNotifications: boolean;
  suspiciousActivityAlerts: boolean;
  dataExportEnabled: boolean;
  lastSecurityReview?: string;
}

// ==============================================================================
// SESSION MANAGEMENT TYPES
// ==============================================================================

/**
 * Session configuration
 */
export interface SessionConfig {
  maxAge: number; // seconds
  refreshThreshold: number; // seconds before expiry to refresh
  maxSessions: number; // per user
  slidingExpiration: boolean;
  secureCookies: boolean;
  sameSite: 'strict' | 'lax' | 'none';
  domain?: string;
  path: string;
}

/**
 * Session activity
 */
export interface SessionActivity {
  sessionId: string;
  action: string;
  timestamp: string;
  ipAddress: string;
  userAgent: string;
  details?: Record<string, unknown>;
}

/**
 * Active session information
 */
export interface ActiveSession {
  id: string;
  deviceInfo: DeviceInfo;
  ipAddress: string;
  location?: GeoLocation;
  isCurrentSession: boolean;
  createdAt: string;
  lastActivityAt: string;
  expiresAt: string;
  activities: SessionActivity[];
}

/**
 * Geographic location for session tracking
 */
export interface GeoLocation {
  country: string;
  region: string;
  city: string;
  latitude?: number;
  longitude?: number;
  timezone: string;
}

// ==============================================================================
// GDPR COMPLIANCE TYPES
// ==============================================================================

/**
 * Data export request
 * Tham chiếu: SRS-Grok-V2.md - Part05.4 GDPR Compliance
 */
export interface DataExportRequest {
  userId: string;
  requestedBy: string;
  dataTypes: DataType[];
  format: ExportFormat;
  reason: string;
  notifyUser: boolean;
}

/**
 * Data deletion request
 */
export interface DataDeletionRequest {
  userId: string;
  requestedBy: string;
  deletionType: DeletionType;
  reason: string;
  retentionPeriod?: number; // days
  notifyUser: boolean;
}

/**
 * Data types for export/deletion
 */
export enum DataType {
  PROFILE = 'profile',
  AUTHENTICATION = 'authentication',
  SESSIONS = 'sessions',
  ACTIVITIES = 'activities',
  PERMISSIONS = 'permissions',
  PREFERENCES = 'preferences',
  METADATA = 'metadata'
}

/**
 * Export formats
 */
export enum ExportFormat {
  JSON = 'json',
  CSV = 'csv',
  XML = 'xml',
  PDF = 'pdf'
}

/**
 * Deletion types
 */
export enum DeletionType {
  SOFT_DELETE = 'soft_delete',
  HARD_DELETE = 'hard_delete',
  ANONYMIZE = 'anonymize'
}

// ==============================================================================
// AUTHENTICATION HOOKS TYPES
// ==============================================================================

/**
 * Authentication hook return type
 */
export interface UseAuthReturn extends AuthContextState {
  login: (credentials: LoginCredentials) => Promise<AuthResult>;
  logout: (reason?: LogoutReason) => Promise<void>;
  refreshToken: () => Promise<boolean>;
  verifyOTP: (otpCode: string) => Promise<AuthResult>;
  checkPermission: (permission: string) => boolean;
  checkRole: (role: string) => boolean;
  hasAnyPermission: (permissions: string[]) => boolean;
  hasAllPermissions: (permissions: string[]) => boolean;
  hasAnyRole: (roles: string[]) => boolean;
  hasAllRoles: (roles: string[]) => boolean;
  canAccess: (resource: string, action: string) => boolean;
  updateProfile: (data: Partial<UserInfo>) => Promise<void>;
  changePassword: (data: PasswordChangeRequest) => Promise<void>;
  enableTwoFactor: (method: TwoFactorMethod) => Promise<TwoFactorSetupResponse>;
  disableTwoFactor: () => Promise<void>;
  getActiveSessions: () => Promise<ActiveSession[]>;
  terminateSession: (sessionId: string) => Promise<void>;
  requestDataExport: () => Promise<void>;
  requestDataDeletion: () => Promise<void>;
}

// ==============================================================================
// EXPORT ALL AUTHENTICATION TYPES
// ==============================================================================

export type {
  // Context types
  AuthContextState,
  AuthActions,
  AuthContext,
  
  // Flow types
  LoginCredentials,
  AuthResult,
  AuthError,
  
  // Password types
  PasswordChangeRequest,
  PasswordResetRequest,
  PasswordResetConfirmation,
  PasswordValidation,
  PasswordFeedback,
  
  // 2FA types
  TwoFactorSetupRequest,
  TwoFactorSetupResponse,
  TwoFactorSetupVerification,
  OTPConfig,
  
  // Security types
  SecurityEvent,
  SecuritySettings,
  
  // Session types
  SessionConfig,
  SessionActivity,
  ActiveSession,
  GeoLocation,
  
  // GDPR types
  DataExportRequest,
  DataDeletionRequest,
  
  // Hook types
  UseAuthReturn
};

export {
  // Enums
  AuthErrorCode,
  LogoutReason,
  PasswordStrength,
  TwoFactorMethod,
  SecurityEventType,
  SecuritySeverity,
  DataType,
  ExportFormat,
  DeletionType
};
