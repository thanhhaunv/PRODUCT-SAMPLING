/**
 * EventTypes.ts - Event Type Definitions
 * 
 * SRS Reference: Part06.1.2 Event Bus - Domain Events
 * Architecture: Event-Driven Architecture Type System
 * 
 * Purpose: Type definitions for all domain and integration events
 * Usage: Import for type-safe event handling across microservices
 */

import { BaseEvent } from './CommonTypes';

// ========================
// EVENT CATEGORIES
// ========================

export type EventCategory = 
  | 'DOMAIN'
  | 'INTEGRATION'
  | 'SYSTEM'
  | 'AUDIT'
  | 'NOTIFICATION'
  | 'SECURITY';

// ========================
// EVENT PRIORITIES
// ========================

export type EventPriority = 'LOW' | 'NORMAL' | 'HIGH' | 'CRITICAL';

// ========================
// EVENT PROCESSING STATUS
// ========================

export type EventProcessingStatus = 
  | 'PENDING'
  | 'PROCESSING'
  | 'PROCESSED'
  | 'FAILED'
  | 'RETRYING'
  | 'DEAD_LETTER';

// ========================
// DOMAIN EVENT TYPES
// ========================

export const DomainEventTypes = {
  // User Events
  USER_CREATED: 'UserCreated',
  USER_UPDATED: 'UserUpdated',
  USER_DELETED: 'UserDeleted',
  USER_ACTIVATED: 'UserActivated',
  USER_DEACTIVATED: 'UserDeactivated',
  USER_SUSPENDED: 'UserSuspended',
  USER_PASSWORD_CHANGED: 'UserPasswordChanged',
  USER_EMAIL_VERIFIED: 'UserEmailVerified',
  USER_PHONE_VERIFIED: 'UserPhoneVerified',
  USER_PROFILE_UPDATED: 'UserProfileUpdated',

  // Authentication Events
  USER_LOGGED_IN: 'UserLoggedIn',
  USER_LOGGED_OUT: 'UserLoggedOut',
  USER_LOGIN_FAILED: 'UserLoginFailed',
  USER_SESSION_CREATED: 'UserSessionCreated',
  USER_SESSION_EXPIRED: 'UserSessionExpired',
  USER_SESSION_TERMINATED: 'UserSessionTerminated',
  PASSWORD_RESET_REQUESTED: 'PasswordResetRequested',
  PASSWORD_RESET_COMPLETED: 'PasswordResetCompleted',

  // Role & Permission Events
  ROLE_CREATED: 'RoleCreated',
  ROLE_UPDATED: 'RoleUpdated',
  ROLE_DELETED: 'RoleDeleted',
  ROLE_ASSIGNED: 'RoleAssigned',
  ROLE_UNASSIGNED: 'RoleUnassigned',
  PERMISSION_CREATED: 'PermissionCreated',
  PERMISSION_UPDATED: 'PermissionUpdated',
  PERMISSION_DELETED: 'PermissionDeleted',
  PERMISSION_GRANTED: 'PermissionGranted',
  PERMISSION_REVOKED: 'PermissionRevoked',

  // OTP Events
  OTP_GENERATED: 'OTPGenerated',
  OTP_VERIFIED: 'OTPVerified',
  OTP_EXPIRED: 'OTPExpired',
  OTP_VERIFICATION_FAILED: 'OTPVerificationFailed',

  // Security Events
  SECURITY_BREACH_DETECTED: 'SecurityBreachDetected',
  SUSPICIOUS_ACTIVITY_DETECTED: 'SuspiciousActivityDetected',
  ACCOUNT_LOCKED: 'AccountLocked',
  ACCOUNT_UNLOCKED: 'AccountUnlocked',
  MULTIPLE_LOGIN_ATTEMPTS: 'MultipleLoginAttempts'
} as const;

export type DomainEventType = typeof DomainEventTypes[keyof typeof DomainEventTypes];

// ========================
// INTEGRATION EVENT TYPES
// ========================

export const IntegrationEventTypes = {
  // External System Sync
  USER_SYNCED_TO_CRM: 'UserSyncedToCRM',
  USER_SYNC_TO_CRM_FAILED: 'UserSyncToCRMFailed',
  PROFILE_SYNCED_TO_EXTERNAL: 'ProfileSyncedToExternal',
  
  // Notification Events
  EMAIL_NOTIFICATION_SENT: 'EmailNotificationSent',
  SMS_NOTIFICATION_SENT: 'SMSNotificationSent',
  PUSH_NOTIFICATION_SENT: 'PushNotificationSent',
  NOTIFICATION_DELIVERY_FAILED: 'NotificationDeliveryFailed',
  
  // Webhook Events
  WEBHOOK_TRIGGERED: 'WebhookTriggered',
  WEBHOOK_DELIVERY_SUCCESS: 'WebhookDeliverySuccess',
  WEBHOOK_DELIVERY_FAILED: 'WebhookDeliveryFailed'
} as const;

export type IntegrationEventType = typeof IntegrationEventTypes[keyof typeof IntegrationEventTypes];

// ========================
// SYSTEM EVENT TYPES
// ========================

export const SystemEventTypes = {
  // Service Lifecycle
  SERVICE_STARTED: 'ServiceStarted',
  SERVICE_STOPPED: 'ServiceStopped',
  SERVICE_HEALTH_CHECK: 'ServiceHealthCheck',
  
  // Database Events
  DATABASE_CONNECTION_ESTABLISHED: 'DatabaseConnectionEstablished',
  DATABASE_CONNECTION_LOST: 'DatabaseConnectionLost',
  DATABASE_MIGRATION_COMPLETED: 'DatabaseMigrationCompleted',
  
  // Cache Events
  CACHE_HIT: 'CacheHit',
  CACHE_MISS: 'CacheMiss',
  CACHE_INVALIDATED: 'CacheInvalidated',
  
  // Configuration Events
  CONFIGURATION_UPDATED: 'ConfigurationUpdated',
  FEATURE_FLAG_TOGGLED: 'FeatureFlagToggled'
} as const;

export type SystemEventType = typeof SystemEventTypes[keyof typeof SystemEventTypes];

// ========================
// AUDIT EVENT TYPES
// ========================

export const AuditEventTypes = {
  // Data Access
  DATA_ACCESSED: 'DataAccessed',
  DATA_CREATED: 'DataCreated',
  DATA_UPDATED: 'DataUpdated',
  DATA_DELETED: 'DataDeleted',
  DATA_EXPORTED: 'DataExported',
  
  // Administrative Actions
  ADMIN_ACTION_PERFORMED: 'AdminActionPerformed',
  CONFIGURATION_CHANGED: 'ConfigurationChanged',
  PERMISSION_CHANGED: 'PermissionChanged',
  
  // Compliance Events
  GDPR_DATA_REQUEST: 'GDPRDataRequest',
  DATA_RETENTION_POLICY_APPLIED: 'DataRetentionPolicyApplied'
} as const;

export type AuditEventType = typeof AuditEventTypes[keyof typeof AuditEventTypes];

// ========================
// ALL EVENT TYPES UNION
// ========================

export type EventType = DomainEventType | IntegrationEventType | SystemEventType | AuditEventType;

// ========================
// EVENT PAYLOAD INTERFACES
// ========================

export interface UserEventPayload {
  userId: string;
  email: string;
  username?: string;
  roles?: string[];
  previousValues?: Record<string, any>;
  changedFields?: string[];
}

export interface AuthenticationEventPayload {
  userId: string;
  sessionId: string;
  ipAddress?: string;
  userAgent?: string;
  location?: string;
  attemptCount?: number;
  success: boolean;
  reason?: string;
}

export interface RoleEventPayload {
  roleId: string;
  roleName: string;
  userId?: string;
  permissions?: string[];
  previousPermissions?: string[];
}

export interface PermissionEventPayload {
  permissionId: string;
  permissionName: string;
  resourceType: string;
  action: string;
  userId?: string;
  roleId?: string;
}

export interface OTPEventPayload {
  userId: string;
  otpId: string;
  type: 'EMAIL' | 'SMS';
  purpose: 'VERIFICATION' | 'RESET_PASSWORD' | 'TWO_FACTOR';
  expiresAt?: Date;
  attempts?: number;
  verified: boolean;
}

export interface SecurityEventPayload {
  userId?: string;
  sessionId?: string;
  ipAddress?: string;
  threatLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  threatType: string;
  detectionMethod: string;
  details?: Record<string, any>;
}

export interface NotificationEventPayload {
  recipientId: string;
  type: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP';
  template: string;
  subject?: string;
  content: string;
  success: boolean;
  deliveryId?: string;
  errorMessage?: string;
}

export interface AuditEventPayload {
  actorId: string;
  actorType: 'USER' | 'SYSTEM' | 'SERVICE';
  resourceType: string;
  resourceId: string;
  action: string;
  previousValues?: Record<string, any>;
  newValues?: Record<string, any>;
  reason?: string;
}

// ========================
// TYPED EVENT INTERFACES
// ========================

export interface DomainEvent<T = any> extends BaseEvent {
  eventType: DomainEventType;
  category: 'DOMAIN';
  payload: T;
  aggregateType: string;
  aggregateVersion: number;
}

export interface IntegrationEvent<T = any> extends BaseEvent {
  eventType: IntegrationEventType;
  category: 'INTEGRATION';
  payload: T;
  sourceService: string;
  targetService?: string;
  retryCount?: number;
  maxRetries?: number;
}

export interface SystemEvent<T = any> extends BaseEvent {
  eventType: SystemEventType;
  category: 'SYSTEM';
  payload: T;
  serviceId: string;
  environment: string;
  version: string;
}

export interface AuditEvent<T = AuditEventPayload> extends BaseEvent {
  eventType: AuditEventType;
  category: 'AUDIT';
  payload: T;
  complianceRequired: boolean;
  retentionPeriod: string;
}

// ========================
// EVENT METADATA
// ========================

export interface EventMetadata {
  eventId: string;
  correlationId?: string;
  causationId?: string;
  position?: number;
  stream?: string;
  expectedVersion?: number;
  timestamp: Date;
  source: string;
  specVersion: string;
  dataContentType: string;
}

// ========================
// EVENT PROCESSING
// ========================

export interface EventProcessingResult {
  eventId: string;
  handlerName: string;
  status: EventProcessingStatus;
  processingTime: number;
  error?: string;
  retryCount: number;
  processedAt: Date;
}

export interface EventSubscription {
  subscriptionId: string;
  eventTypes: EventType[];
  handlerEndpoint: string;
  filterCriteria?: Record<string, any>;
  retryPolicy: RetryPolicy;
  deadLetterConfig?: DeadLetterConfig;
  isActive: boolean;
  createdAt: Date;
}

export interface RetryPolicy {
  maxAttempts: number;
  backoffStrategy: 'FIXED' | 'LINEAR' | 'EXPONENTIAL';
  initialDelay: number;
  maxDelay: number;
  multiplier?: number;
}

export interface DeadLetterConfig {
  enabled: boolean;
  maxRetentionDays: number;
  notificationEmail?: string;
}

// ========================
// EVENT STORE TYPES
// ========================

export interface StoredEvent {
  eventId: string;
  streamId: string;
  eventType: EventType;
  eventData: string; // JSON serialized payload
  eventMetadata: string; // JSON serialized metadata
  position: number;
  timestamp: Date;
  version: string;
}

export interface EventStream {
  streamId: string;
  streamType: string;
  version: number;
  createdAt: Date;
  lastModified: Date;
  eventCount: number;
  isActive: boolean;
}

// ========================
// TYPE GUARDS
// ========================

export const EventTypeGuards = {
  isDomainEvent: (event: BaseEvent): event is DomainEvent => 
    Object.values(DomainEventTypes).includes(event.eventType as DomainEventType),
  
  isIntegrationEvent: (event: BaseEvent): event is IntegrationEvent => 
    Object.values(IntegrationEventTypes).includes(event.eventType as IntegrationEventType),
  
  isSystemEvent: (event: BaseEvent): event is SystemEvent => 
    Object.values(SystemEventTypes).includes(event.eventType as SystemEventType),
  
  isAuditEvent: (event: BaseEvent): event is AuditEvent => 
    Object.values(AuditEventTypes).includes(event.eventType as AuditEventType),
  
  isUserEvent: (event: DomainEvent): boolean => 
    event.eventType.startsWith('User'),
  
  isAuthEvent: (event: DomainEvent): boolean => 
    event.eventType.includes('Login') || event.eventType.includes('Session') || event.eventType.includes('Password'),
  
  isSecurityEvent: (event: DomainEvent): boolean => 
    event.eventType.includes('Security') || event.eventType.includes('Breach') || event.eventType.includes('Suspicious')
};
