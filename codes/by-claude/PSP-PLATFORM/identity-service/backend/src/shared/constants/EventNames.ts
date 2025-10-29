/**
 * EventNames.ts - Domain Event Names Constants
 * 
 * SRS Reference: Part06.1.2 Event Bus
 * Purpose: Centralized event name constants for consistency
 * Usage: Import for consistent event naming across all services
 */

// ========================
// USER DOMAIN EVENTS
// ========================

export const UserEvents = {
  // User lifecycle events
  USER_CREATED: 'user.created',
  USER_UPDATED: 'user.updated',
  USER_DELETED: 'user.deleted',
  USER_RESTORED: 'user.restored',
  
  // User status events
  USER_ACTIVATED: 'user.activated',
  USER_DEACTIVATED: 'user.deactivated',
  USER_SUSPENDED: 'user.suspended',
  USER_UNSUSPENDED: 'user.unsuspended',
  USER_LOCKED: 'user.locked',
  USER_UNLOCKED: 'user.unlocked',
  
  // User profile events
  USER_PROFILE_UPDATED: 'user.profile_updated',
  USER_AVATAR_UPDATED: 'user.avatar_updated',
  USER_PREFERENCES_UPDATED: 'user.preferences_updated',
  
  // User verification events
  USER_EMAIL_VERIFIED: 'user.email_verified',
  USER_PHONE_VERIFIED: 'user.phone_verified',
  USER_EMAIL_VERIFICATION_REQUESTED: 'user.email_verification_requested',
  USER_PHONE_VERIFICATION_REQUESTED: 'user.phone_verification_requested',
  
  // User security events
  USER_PASSWORD_CHANGED: 'user.password_changed',
  USER_PASSWORD_RESET_REQUESTED: 'user.password_reset_requested',
  USER_PASSWORD_RESET_COMPLETED: 'user.password_reset_completed',
  USER_TWO_FACTOR_ENABLED: 'user.two_factor_enabled',
  USER_TWO_FACTOR_DISABLED: 'user.two_factor_disabled',
} as const;

// ========================
// AUTHENTICATION EVENTS
// ========================

export const AuthenticationEvents = {
  // Login events
  USER_LOGIN_ATTEMPTED: 'auth.login_attempted',
  USER_LOGIN_SUCCEEDED: 'auth.login_succeeded',
  USER_LOGIN_FAILED: 'auth.login_failed',
  USER_LOGIN_BLOCKED: 'auth.login_blocked',
  
  // Logout events
  USER_LOGOUT_REQUESTED: 'auth.logout_requested',
  USER_LOGOUT_COMPLETED: 'auth.logout_completed',
  USER_FORCED_LOGOUT: 'auth.forced_logout',
  
  // Token events
  ACCESS_TOKEN_GENERATED: 'auth.access_token_generated',
  ACCESS_TOKEN_REFRESHED: 'auth.access_token_refreshed',
  ACCESS_TOKEN_EXPIRED: 'auth.access_token_expired',
  ACCESS_TOKEN_REVOKED: 'auth.access_token_revoked',
  REFRESH_TOKEN_GENERATED: 'auth.refresh_token_generated',
  REFRESH_TOKEN_USED: 'auth.refresh_token_used',
  REFRESH_TOKEN_EXPIRED: 'auth.refresh_token_expired',
  REFRESH_TOKEN_REVOKED: 'auth.refresh_token_revoked',
  
  // Multi-factor authentication
  MFA_CHALLENGE_REQUESTED: 'auth.mfa_challenge_requested',
  MFA_CHALLENGE_COMPLETED: 'auth.mfa_challenge_completed',
  MFA_CHALLENGE_FAILED: 'auth.mfa_challenge_failed',
  MFA_BACKUP_CODE_USED: 'auth.mfa_backup_code_used',
} as const;

// ========================
// SESSION MANAGEMENT EVENTS
// ========================

export const SessionEvents = {
  // Session lifecycle
  SESSION_CREATED: 'session.created',
  SESSION_UPDATED: 'session.updated',
  SESSION_RENEWED: 'session.renewed',
  SESSION_EXPIRED: 'session.expired',
  SESSION_TERMINATED: 'session.terminated',
  SESSION_INVALIDATED: 'session.invalidated',
  
  // Session activity
  SESSION_ACTIVITY_RECORDED: 'session.activity_recorded',
  SESSION_IDLE_WARNING: 'session.idle_warning',
  SESSION_IDLE_TIMEOUT: 'session.idle_timeout',
  
  // Multi-session management
  SESSION_LIMIT_REACHED: 'session.limit_reached',
  CONCURRENT_SESSION_DETECTED: 'session.concurrent_detected',
  ALL_SESSIONS_TERMINATED: 'session.all_terminated',
} as const;

// ========================
// ROLE & PERMISSION EVENTS
// ========================

export const RoleEvents = {
  // Role management
  ROLE_CREATED: 'role.created',
  ROLE_UPDATED: 'role.updated',
  ROLE_DELETED: 'role.deleted',
  ROLE_ACTIVATED: 'role.activated',
  ROLE_DEACTIVATED: 'role.deactivated',
  
  // Role assignments
  ROLE_ASSIGNED_TO_USER: 'role.assigned_to_user',
  ROLE_UNASSIGNED_FROM_USER: 'role.unassigned_from_user',
  ROLE_ASSIGNMENT_EXPIRED: 'role.assignment_expired',
  
  // Permission management
  PERMISSION_CREATED: 'permission.created',
  PERMISSION_UPDATED: 'permission.updated',
  PERMISSION_DELETED: 'permission.deleted',
  PERMISSION_GRANTED: 'permission.granted',
  PERMISSION_REVOKED: 'permission.revoked',
  
  // Permission assignments
  PERMISSION_ASSIGNED_TO_ROLE: 'permission.assigned_to_role',
  PERMISSION_UNASSIGNED_FROM_ROLE: 'permission.unassigned_from_role',
} as const;

// ========================
// OTP & VERIFICATION EVENTS
// ========================

export const OTPEvents = {
  // OTP generation
  OTP_GENERATED: 'otp.generated',
  OTP_REGENERATED: 'otp.regenerated',
  OTP_DELIVERED: 'otp.delivered',
  OTP_DELIVERY_FAILED: 'otp.delivery_failed',
  
  // OTP verification
  OTP_VERIFICATION_ATTEMPTED: 'otp.verification_attempted',
  OTP_VERIFICATION_SUCCEEDED: 'otp.verification_succeeded',
  OTP_VERIFICATION_FAILED: 'otp.verification_failed',
  OTP_VERIFICATION_EXPIRED: 'otp.verification_expired',
  
  // OTP lifecycle
  OTP_EXPIRED: 'otp.expired',
  OTP_INVALIDATED: 'otp.invalidated',
  OTP_MAX_ATTEMPTS_REACHED: 'otp.max_attempts_reached',
} as const;

// ========================
// SECURITY EVENTS
// ========================

export const SecurityEvents = {
  // Threat detection
  SECURITY_THREAT_DETECTED: 'security.threat_detected',
  SUSPICIOUS_ACTIVITY_DETECTED: 'security.suspicious_activity_detected',
  ANOMALY_DETECTED: 'security.anomaly_detected',
  BRUTE_FORCE_ATTACK_DETECTED: 'security.brute_force_detected',
  
  // Account security
  ACCOUNT_LOCKED_FOR_SECURITY: 'security.account_locked',
  ACCOUNT_UNLOCKED_BY_ADMIN: 'security.account_unlocked',
  SECURITY_QUESTION_ANSWERED: 'security.question_answered',
  SECURITY_QUESTION_FAILED: 'security.question_failed',
  
  // Device and location
  NEW_DEVICE_DETECTED: 'security.new_device_detected',
  UNUSUAL_LOCATION_DETECTED: 'security.unusual_location_detected',
  DEVICE_FINGERPRINT_CHANGED: 'security.device_fingerprint_changed',
  
  // Data security
  SENSITIVE_DATA_ACCESSED: 'security.sensitive_data_accessed',
  DATA_EXPORT_REQUESTED: 'security.data_export_requested',
  DATA_BREACH_DETECTED: 'security.data_breach_detected',
  UNAUTHORIZED_ACCESS_ATTEMPTED: 'security.unauthorized_access_attempted',
} as const;

// ========================
// AUDIT & COMPLIANCE EVENTS
// ========================

export const AuditEvents = {
  // Data operations
  DATA_CREATED: 'audit.data_created',
  DATA_READ: 'audit.data_read',
  DATA_UPDATED: 'audit.data_updated',
  DATA_DELETED: 'audit.data_deleted',
  DATA_EXPORTED: 'audit.data_exported',
  
  // Administrative actions
  ADMIN_ACTION_PERFORMED: 'audit.admin_action_performed',
  SYSTEM_CONFIGURATION_CHANGED: 'audit.system_configuration_changed',
  USER_PRIVILEGE_CHANGED: 'audit.user_privilege_changed',
  
  // Compliance events
  GDPR_DATA_REQUEST: 'audit.gdpr_data_request',
  DATA_RETENTION_APPLIED: 'audit.data_retention_applied',
  COMPLIANCE_VIOLATION: 'audit.compliance_violation',
  PRIVACY_POLICY_UPDATED: 'audit.privacy_policy_updated',
  
  // Audit trail events
  AUDIT_LOG_CREATED: 'audit.log_created',
  AUDIT_LOG_TAMPERED: 'audit.log_tampered',
  AUDIT_REPORT_GENERATED: 'audit.report_generated',
} as const;

// ========================
// NOTIFICATION EVENTS
// ========================

export const NotificationEvents = {
  // Email notifications
  EMAIL_NOTIFICATION_QUEUED: 'notification.email_queued',
  EMAIL_NOTIFICATION_SENT: 'notification.email_sent',
  EMAIL_NOTIFICATION_DELIVERED: 'notification.email_delivered',
  EMAIL_NOTIFICATION_FAILED: 'notification.email_failed',
  EMAIL_NOTIFICATION_BOUNCED: 'notification.email_bounced',
  
  // SMS notifications
  SMS_NOTIFICATION_QUEUED: 'notification.sms_queued',
  SMS_NOTIFICATION_SENT: 'notification.sms_sent',
  SMS_NOTIFICATION_DELIVERED: 'notification.sms_delivered',
  SMS_NOTIFICATION_FAILED: 'notification.sms_failed',
  
  // Push notifications
  PUSH_NOTIFICATION_QUEUED: 'notification.push_queued',
  PUSH_NOTIFICATION_SENT: 'notification.push_sent',
  PUSH_NOTIFICATION_DELIVERED: 'notification.push_delivered',
  PUSH_NOTIFICATION_FAILED: 'notification.push_failed',
  
  // In-app notifications
  IN_APP_NOTIFICATION_CREATED: 'notification.in_app_created',
  IN_APP_NOTIFICATION_READ: 'notification.in_app_read',
  IN_APP_NOTIFICATION_DISMISSED: 'notification.in_app_dismissed',
} as const;

// ========================
// SYSTEM EVENTS
// ========================

export const SystemEvents = {
  // Service lifecycle
  SERVICE_STARTED: 'system.service_started',
  SERVICE_STOPPED: 'system.service_stopped',
  SERVICE_RESTARTED: 'system.service_restarted',
  SERVICE_HEALTH_CHECK: 'system.health_check',
  
  // Database events
  DATABASE_CONNECTED: 'system.database_connected',
  DATABASE_DISCONNECTED: 'system.database_disconnected',
  DATABASE_MIGRATION_STARTED: 'system.migration_started',
  DATABASE_MIGRATION_COMPLETED: 'system.migration_completed',
  DATABASE_BACKUP_STARTED: 'system.backup_started',
  DATABASE_BACKUP_COMPLETED: 'system.backup_completed',
  
  // Cache events
  CACHE_HIT: 'system.cache_hit',
  CACHE_MISS: 'system.cache_miss',
  CACHE_EVICTED: 'system.cache_evicted',
  CACHE_CLEARED: 'system.cache_cleared',
  
  // Configuration events
  CONFIGURATION_LOADED: 'system.configuration_loaded',
  CONFIGURATION_UPDATED: 'system.configuration_updated',
  FEATURE_FLAG_TOGGLED: 'system.feature_flag_toggled',
  
  // Performance events
  PERFORMANCE_THRESHOLD_EXCEEDED: 'system.performance_threshold_exceeded',
  MEMORY_USAGE_HIGH: 'system.memory_usage_high',
  CPU_USAGE_HIGH: 'system.cpu_usage_high',
  DISK_SPACE_LOW: 'system.disk_space_low',
} as const;

// ========================
// INTEGRATION EVENTS
// ========================

export const IntegrationEvents = {
  // External system sync
  EXTERNAL_SYNC_STARTED: 'integration.sync_started',
  EXTERNAL_SYNC_COMPLETED: 'integration.sync_completed',
  EXTERNAL_SYNC_FAILED: 'integration.sync_failed',
  
  // CRM integration
  USER_SYNCED_TO_CRM: 'integration.user_synced_to_crm',
  CRM_SYNC_FAILED: 'integration.crm_sync_failed',
  
  // Webhook events
  WEBHOOK_TRIGGERED: 'integration.webhook_triggered',
  WEBHOOK_DELIVERED: 'integration.webhook_delivered',
  WEBHOOK_FAILED: 'integration.webhook_failed',
  WEBHOOK_RETRY_EXHAUSTED: 'integration.webhook_retry_exhausted',
  
  // API events
  EXTERNAL_API_CALLED: 'integration.external_api_called',
  EXTERNAL_API_RESPONSE_RECEIVED: 'integration.external_api_response_received',
  EXTERNAL_API_TIMEOUT: 'integration.external_api_timeout',
  EXTERNAL_API_ERROR: 'integration.external_api_error',
} as const;

// ========================
// ALL EVENTS UNION
// ========================

export const AllEvents = {
  ...UserEvents,
  ...AuthenticationEvents,
  ...SessionEvents,
  ...RoleEvents,
  ...OTPEvents,
  ...SecurityEvents,
  ...AuditEvents,
  ...NotificationEvents,
  ...SystemEvents,
  ...IntegrationEvents,
} as const;

// ========================
// EVENT CATEGORIES
// ========================

export const EventCategories = {
  USER: 'USER',
  AUTHENTICATION: 'AUTHENTICATION',
  SESSION: 'SESSION',
  ROLE: 'ROLE',
  OTP: 'OTP',
  SECURITY: 'SECURITY',
  AUDIT: 'AUDIT',
  NOTIFICATION: 'NOTIFICATION',
  SYSTEM: 'SYSTEM',
  INTEGRATION: 'INTEGRATION',
} as const;

// ========================
// EVENT PRIORITY LEVELS
// ========================

export const EventPriorities = {
  LOW: 'LOW',
  NORMAL: 'NORMAL',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL',
} as const;

// ========================
// EVENT ROUTING PATTERNS
// ========================

export const EventRoutingPatterns = {
  // User domain routing
  USER_DOMAIN: 'user.*',
  USER_LIFECYCLE: 'user.created|user.updated|user.deleted',
  USER_SECURITY: 'user.password_*|user.two_factor_*',
  
  // Authentication routing
  AUTH_DOMAIN: 'auth.*',
  LOGIN_EVENTS: 'auth.login_*',
  TOKEN_EVENTS: 'auth.*_token_*',
  
  // Security routing
  SECURITY_DOMAIN: 'security.*',
  SECURITY_THREATS: 'security.*_detected',
  
  // System routing
  SYSTEM_DOMAIN: 'system.*',
  SYSTEM_HEALTH: 'system.health_check|system.*_usage_*',
  
  // Notification routing
  NOTIFICATION_DOMAIN: 'notification.*',
  EMAIL_EVENTS: 'notification.email_*',
  SMS_EVENTS: 'notification.sms_*',
} as const;

// ========================
// EVENT UTILITIES
// ========================

export const EventUtils = {
  /**
   * Get event category from event name
   */
  getEventCategory: (eventName: string): string => {
    const prefix = eventName.split('.')[0];
    switch (prefix) {
      case 'user': return EventCategories.USER;
      case 'auth': return EventCategories.AUTHENTICATION;
      case 'session': return EventCategories.SESSION;
      case 'role': case 'permission': return EventCategories.ROLE;
      case 'otp': return EventCategories.OTP;
      case 'security': return EventCategories.SECURITY;
      case 'audit': return EventCategories.AUDIT;
      case 'notification': return EventCategories.NOTIFICATION;
      case 'system': return EventCategories.SYSTEM;
      case 'integration': return EventCategories.INTEGRATION;
      default: return 'UNKNOWN';
    }
  },

  /**
   * Check if event is security-related
   */
  isSecurityEvent: (eventName: string): boolean => {
    return eventName.startsWith('security.') || 
           eventName.includes('login_failed') ||
           eventName.includes('locked') ||
           eventName.includes('suspicious');
  },

  /**
   * Check if event requires immediate attention
   */
  isCriticalEvent: (eventName: string): boolean => {
    const criticalEvents = [
      SecurityEvents.SECURITY_THREAT_DETECTED,
      SecurityEvents.DATA_BREACH_DETECTED,
      SystemEvents.SERVICE_STOPPED,
      SystemEvents.DATABASE_DISCONNECTED,
    ];
    return criticalEvents.includes(eventName as any);
  },

  /**
   * Get event priority based on name
   */
  getEventPriority: (eventName: string): string => {
    if (EventUtils.isCriticalEvent(eventName)) return EventPriorities.CRITICAL;
    if (EventUtils.isSecurityEvent(eventName)) return EventPriorities.HIGH;
    if (eventName.includes('failed') || eventName.includes('error')) return EventPriorities.HIGH;
    if (eventName.includes('warning')) return EventPriorities.NORMAL;
    return EventPriorities.LOW;
  },

  /**
   * Create event name with category prefix
   */
  createEventName: (category: string, action: string): string => {
    return `${category.toLowerCase()}.${action.toLowerCase()}`;
  },
} as const;

// ========================
// TYPE DEFINITIONS
// ========================

export type UserEventName = typeof UserEvents[keyof typeof UserEvents];
export type AuthEventName = typeof AuthenticationEvents[keyof typeof AuthenticationEvents];
export type SessionEventName = typeof SessionEvents[keyof typeof SessionEvents];
export type RoleEventName = typeof RoleEvents[keyof typeof RoleEvents];
export type OTPEventName = typeof OTPEvents[keyof typeof OTPEvents];
export type SecurityEventName = typeof SecurityEvents[keyof typeof SecurityEvents];
export type AuditEventName = typeof AuditEvents[keyof typeof AuditEvents];
export type NotificationEventName = typeof NotificationEvents[keyof typeof NotificationEvents];
export type SystemEventName = typeof SystemEvents[keyof typeof SystemEvents];
export type IntegrationEventName = typeof IntegrationEvents[keyof typeof IntegrationEvents];

export type EventName = typeof AllEvents[keyof typeof AllEvents];
export type EventCategory = typeof EventCategories[keyof typeof EventCategories];
export type EventPriority = typeof EventPriorities[keyof typeof EventPriorities];

// Export all event collections for convenience
export const EventNames = {
  User: UserEvents,
  Authentication: AuthenticationEvents,
  Session: SessionEvents,
  Role: RoleEvents,
  OTP: OTPEvents,
  Security: SecurityEvents,
  Audit: AuditEvents,
  Notification: NotificationEvents,
  System: SystemEvents,
  Integration: IntegrationEvents,
  All: AllEvents,
  Categories: EventCategories,
  Priorities: EventPriorities,
  Utils: EventUtils,
} as const;
