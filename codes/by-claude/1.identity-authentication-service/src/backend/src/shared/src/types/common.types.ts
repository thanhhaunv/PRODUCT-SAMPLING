// ==============================================================================
// COMMON TYPES - IDENTITY & AUTH UNIFIED PORTAL
// Tham chiếu: SRS-Grok-V2.md - Part02.8 Technical Requirements + Part05.7 Input Validation
// Purpose: Common TypeScript types used across the entire application
// ==============================================================================

// ==============================================================================
// UTILITY TYPES
// ==============================================================================

/**
 * Make specific properties optional
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make specific properties required
 */
export type Required<T, K extends keyof T> = T & Pick<Required<T>, K>;

/**
 * Deep partial type
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Non-empty array type
 */
export type NonEmptyArray<T> = [T, ...T[]];

/**
 * String literal union from array
 */
export type StringLiteral<T extends readonly string[]> = T[number];

/**
 * Key-value pair
 */
export type KeyValuePair<K = string, V = unknown> = {
  key: K;
  value: V;
};

/**
 * Constructor type
 */
export type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * Function that returns a promise
 */
export type AsyncFunction<T = void> = (...args: any[]) => Promise<T>;

/**
 * Event handler type
 */
export type EventHandler<T = Event> = (event: T) => void;

// ==============================================================================
// VALIDATION TYPES
// ==============================================================================

/**
 * Validation result
 */
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

/**
 * Validation error
 */
export interface ValidationError {
  field: string;
  code: string;
  message: string;
  value?: unknown;
  constraints?: Record<string, unknown>;
}

/**
 * Validation warning
 */
export interface ValidationWarning {
  field: string;
  code: string;
  message: string;
  value?: unknown;
}

/**
 * Validation schema for fields
 */
export interface ValidationSchema {
  [field: string]: FieldValidation;
}

/**
 * Field validation rules
 */
export interface FieldValidation {
  required?: boolean;
  type?: FieldType;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: unknown) => ValidationResult;
  sanitize?: (value: unknown) => unknown;
  transform?: (value: unknown) => unknown;
}

/**
 * Field types for validation
 */
export enum FieldType {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  EMAIL = 'email',
  URL = 'url',
  UUID = 'uuid',
  DATE = 'date',
  PHONE = 'phone',
  PASSWORD = 'password',
  ARRAY = 'array',
  OBJECT = 'object'
}

// ==============================================================================
// FORM TYPES
// ==============================================================================

/**
 * Form field state
 */
export interface FormField<T = unknown> {
  value: T;
  error?: string;
  touched: boolean;
  dirty: boolean;
  valid: boolean;
  disabled: boolean;
}

/**
 * Form state
 */
export interface FormState<T extends Record<string, unknown> = Record<string, unknown>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  dirty: boolean;
  valid: boolean;
  submitting: boolean;
  submitted: boolean;
}

/**
 * Form actions
 */
export interface FormActions<T extends Record<string, unknown> = Record<string, unknown>> {
  setValue: <K extends keyof T>(field: K, value: T[K]) => void;
  setError: <K extends keyof T>(field: K, error: string) => void;
  setTouched: <K extends keyof T>(field: K, touched: boolean) => void;
  reset: (values?: Partial<T>) => void;
  validate: () => Promise<boolean>;
  submit: () => Promise<void>;
  clear: () => void;
}

/**
 * Form configuration
 */
export interface FormConfig<T extends Record<string, unknown> = Record<string, unknown>> {
  initialValues: T;
  validationSchema?: ValidationSchema;
  onSubmit: (values: T) => Promise<void> | void;
  onValidate?: (values: T) => ValidationResult | Promise<ValidationResult>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  resetOnSubmit?: boolean;
}

// ==============================================================================
// TABLE AND LIST TYPES
// ==============================================================================

/**
 * Column definition for tables
 */
export interface ColumnDefinition<T = unknown> {
  key: string;
  title: string;
  dataIndex?: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  filterable?: boolean;
  searchable?: boolean;
  render?: (value: unknown, record: T, index: number) => React.ReactNode;
  sorter?: (a: T, b: T) => number;
  filter?: FilterConfig;
  fixed?: 'left' | 'right';
  ellipsis?: boolean;
  className?: string;
}

/**
 * Filter configuration
 */
export interface FilterConfig {
  type: FilterType;
  options?: FilterOption[];
  placeholder?: string;
  multiple?: boolean;
  searchable?: boolean;
}

/**
 * Filter option
 */
export interface FilterOption {
  label: string;
  value: unknown;
  disabled?: boolean;
}

/**
 * Filter types
 */
export enum FilterType {
  TEXT = 'text',
  SELECT = 'select',
  MULTI_SELECT = 'multi_select',
  DATE = 'date',
  DATE_RANGE = 'date_range',
  NUMBER = 'number',
  NUMBER_RANGE = 'number_range',
  BOOLEAN = 'boolean'
}

/**
 * Sort configuration
 */
export interface SortConfig {
  field: string;
  direction: SortDirection;
}

/**
 * Sort direction
 */
export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

/**
 * List item with selection
 */
export interface SelectableItem<T = unknown> {
  id: string;
  data: T;
  selected: boolean;
  disabled?: boolean;
}

// ==============================================================================
// COMPONENT TYPES
// ==============================================================================

/**
 * Component size variants
 */
export enum ComponentSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

/**
 * Component variants
 */
export enum ComponentVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info'
}

/**
 * Loading state
 */
export interface LoadingState {
  isLoading: boolean;
  loadingText?: string;
  progress?: number;
}

/**
 * Error state
 */
export interface ErrorState {
  hasError: boolean;
  error?: Error | string;
  errorCode?: string;
  retry?: () => void;
}

/**
 * Empty state
 */
export interface EmptyState {
  isEmpty: boolean;
  title?: string;
  description?: string;
  action?: {
    text: string;
    handler: () => void;
  };
}

// ==============================================================================
// NAVIGATION TYPES
// ==============================================================================

/**
 * Navigation item
 */
export interface NavigationItem {
  id: string;
  label: string;
  path?: string;
  icon?: string;
  badge?: string | number;
  children?: NavigationItem[];
  permissions?: string[];
  roles?: string[];
  external?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  metadata?: Record<string, unknown>;
}

/**
 * Breadcrumb item
 */
export interface BreadcrumbItem {
  label: string;
  path?: string;
  active?: boolean;
}

/**
 * Route configuration
 */
export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  permissions?: string[];
  roles?: string[];
  redirectTo?: string;
  metadata?: Record<string, unknown>;
}

// ==============================================================================
// THEME AND STYLING TYPES
// ==============================================================================

/**
 * Theme configuration
 */
export interface ThemeConfig {
  mode: ThemeMode;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSize: FontSize;
  borderRadius: number;
  spacing: SpacingScale;
  breakpoints: Breakpoints;
  zIndex: ZIndexScale;
}

/**
 * Theme mode
 */
export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  AUTO = 'auto'
}

/**
 * Font size scale
 */
export interface FontSize {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
}

/**
 * Spacing scale
 */
export interface SpacingScale {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
}

/**
 * Breakpoints for responsive design
 */
export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

/**
 * Z-index scale
 */
export interface ZIndexScale {
  dropdown: number;
  sticky: number;
  fixed: number;
  backdrop: number;
  modal: number;
  popover: number;
  tooltip: number;
  toast: number;
}

// ==============================================================================
// STORAGE TYPES
// ==============================================================================

/**
 * Storage interface
 */
export interface Storage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
  length: number;
  key: (index: number) => string | null;
}

/**
 * Storage options
 */
export interface StorageOptions {
  prefix?: string;
  suffix?: string;
  serializer?: {
    serialize: (value: unknown) => string;
    deserialize: (value: string) => unknown;
  };
  expires?: number; // timestamp
}

// ==============================================================================
// API CLIENT TYPES
// ==============================================================================

/**
 * HTTP methods
 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS'
}

/**
 * Request configuration
 */
export interface RequestConfig {
  url: string;
  method: HttpMethod;
  headers?: Record<string, string>;
  data?: unknown;
  params?: Record<string, unknown>;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  cache?: boolean;
  cacheTTL?: number;
}

/**
 * Response wrapper
 */
export interface Response<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: RequestConfig;
}

// ==============================================================================
// EVENT SYSTEM TYPES
// ==============================================================================

/**
 * Event emitter interface
 */
export interface EventEmitter {
  on: (event: string, listener: (...args: unknown[]) => void) => void;
  off: (event: string, listener?: (...args: unknown[]) => void) => void;
  emit: (event: string, ...args: unknown[]) => void;
  once: (event: string, listener: (...args: unknown[]) => void) => void;
  removeAllListeners: (event?: string) => void;
}

/**
 * Event payload
 */
export interface EventPayload<T = unknown> {
  type: string;
  timestamp: number;
  data: T;
  source?: string;
  metadata?: Record<string, unknown>;
}

// ==============================================================================
// LOGGER TYPES
// ==============================================================================

/**
 * Log levels
 */
export enum LogLevel {
  TRACE = 'trace',
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal'
}

/**
 * Log entry
 */
export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: number;
  context?: Record<string, unknown>;
  error?: Error;
  stack?: string;
  tags?: string[];
}

/**
 * Logger interface
 */
export interface Logger {
  trace: (message: string, context?: Record<string, unknown>) => void;
  debug: (message: string, context?: Record<string, unknown>) => void;
  info: (message: string, context?: Record<string, unknown>) => void;
  warn: (message: string, context?: Record<string, unknown>) => void;
  error: (message: string, error?: Error, context?: Record<string, unknown>) => void;
  fatal: (message: string, error?: Error, context?: Record<string, unknown>) => void;
}

// ==============================================================================
// EXPORT ALL COMMON TYPES
// ==============================================================================

export type {
  // Utility types
  Optional,
  Required,
  DeepPartial,
  NonEmptyArray,
  StringLiteral,
  KeyValuePair,
  Constructor,
  AsyncFunction,
  EventHandler,
  
  // Validation types
  ValidationResult,
  ValidationError,
  ValidationWarning,
  ValidationSchema,
  FieldValidation,
  
  // Form types
  FormField,
  FormState,
  FormActions,
  FormConfig,
  
  // Table types
  ColumnDefinition,
  FilterConfig,
  FilterOption,
  SortConfig,
  SelectableItem,
  
  // Component types
  LoadingState,
  ErrorState,
  EmptyState,
  
  // Navigation types
  NavigationItem,
  BreadcrumbItem,
  RouteConfig,
  
  // Theme types
  ThemeConfig,
  FontSize,
  SpacingScale,
  Breakpoints,
  ZIndexScale,
  
  // Storage types
  Storage,
  StorageOptions,
  
  // API types
  RequestConfig,
  Response,
  
  // Event types
  EventEmitter,
  EventPayload,
  
  // Logger types
  LogEntry,
  Logger
};

export {
  // Enums
  FieldType,
  FilterType,
  SortDirection,
  ComponentSize,
  ComponentVariant,
  ThemeMode,
  HttpMethod,
  LogLevel
};
