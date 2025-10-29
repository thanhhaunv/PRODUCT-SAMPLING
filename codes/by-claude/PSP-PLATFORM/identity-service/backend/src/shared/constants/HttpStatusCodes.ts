/**
 * HttpStatusCodes.ts - HTTP Status Codes and Descriptions
 * 
 * SRS Reference: Part04 Features (API Standards)
 * Purpose: Complete HTTP status code definitions
 * Usage: Import for consistent HTTP status code usage across APIs
 */

// ========================
// HTTP STATUS CODES
// ========================

export const HttpStatusCodes = {
  // 1xx Informational
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  EARLY_HINTS: 103,

  // 2xx Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  IM_USED: 226,

  // 3xx Redirection
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,

  // 4xx Client Error
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  IM_A_TEAPOT: 418, // RFC 2324
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,

  // 5xx Server Error
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
} as const;

// ========================
// STATUS CODE DESCRIPTIONS
// ========================

export const HttpStatusDescriptions = {
  // 1xx Informational
  [HttpStatusCodes.CONTINUE]: 'Continue',
  [HttpStatusCodes.SWITCHING_PROTOCOLS]: 'Switching Protocols',
  [HttpStatusCodes.PROCESSING]: 'Processing',
  [HttpStatusCodes.EARLY_HINTS]: 'Early Hints',

  // 2xx Success
  [HttpStatusCodes.OK]: 'OK',
  [HttpStatusCodes.CREATED]: 'Created',
  [HttpStatusCodes.ACCEPTED]: 'Accepted',
  [HttpStatusCodes.NON_AUTHORITATIVE_INFORMATION]: 'Non-Authoritative Information',
  [HttpStatusCodes.NO_CONTENT]: 'No Content',
  [HttpStatusCodes.RESET_CONTENT]: 'Reset Content',
  [HttpStatusCodes.PARTIAL_CONTENT]: 'Partial Content',
  [HttpStatusCodes.MULTI_STATUS]: 'Multi-Status',
  [HttpStatusCodes.ALREADY_REPORTED]: 'Already Reported',
  [HttpStatusCodes.IM_USED]: 'IM Used',

  // 3xx Redirection
  [HttpStatusCodes.MULTIPLE_CHOICES]: 'Multiple Choices',
  [HttpStatusCodes.MOVED_PERMANENTLY]: 'Moved Permanently',
  [HttpStatusCodes.FOUND]: 'Found',
  [HttpStatusCodes.SEE_OTHER]: 'See Other',
  [HttpStatusCodes.NOT_MODIFIED]: 'Not Modified',
  [HttpStatusCodes.USE_PROXY]: 'Use Proxy',
  [HttpStatusCodes.TEMPORARY_REDIRECT]: 'Temporary Redirect',
  [HttpStatusCodes.PERMANENT_REDIRECT]: 'Permanent Redirect',

  // 4xx Client Error
  [HttpStatusCodes.BAD_REQUEST]: 'Bad Request',
  [HttpStatusCodes.UNAUTHORIZED]: 'Unauthorized',
  [HttpStatusCodes.PAYMENT_REQUIRED]: 'Payment Required',
  [HttpStatusCodes.FORBIDDEN]: 'Forbidden',
  [HttpStatusCodes.NOT_FOUND]: 'Not Found',
  [HttpStatusCodes.METHOD_NOT_ALLOWED]: 'Method Not Allowed',
  [HttpStatusCodes.NOT_ACCEPTABLE]: 'Not Acceptable',
  [HttpStatusCodes.PROXY_AUTHENTICATION_REQUIRED]: 'Proxy Authentication Required',
  [HttpStatusCodes.REQUEST_TIMEOUT]: 'Request Timeout',
  [HttpStatusCodes.CONFLICT]: 'Conflict',
  [HttpStatusCodes.GONE]: 'Gone',
  [HttpStatusCodes.LENGTH_REQUIRED]: 'Length Required',
  [HttpStatusCodes.PRECONDITION_FAILED]: 'Precondition Failed',
  [HttpStatusCodes.PAYLOAD_TOO_LARGE]: 'Payload Too Large',
  [HttpStatusCodes.URI_TOO_LONG]: 'URI Too Long',
  [HttpStatusCodes.UNSUPPORTED_MEDIA_TYPE]: 'Unsupported Media Type',
  [HttpStatusCodes.RANGE_NOT_SATISFIABLE]: 'Range Not Satisfiable',
  [HttpStatusCodes.EXPECTATION_FAILED]: 'Expectation Failed',
  [HttpStatusCodes.IM_A_TEAPOT]: "I'm a teapot",
  [HttpStatusCodes.MISDIRECTED_REQUEST]: 'Misdirected Request',
  [HttpStatusCodes.UNPROCESSABLE_ENTITY]: 'Unprocessable Entity',
  [HttpStatusCodes.LOCKED]: 'Locked',
  [HttpStatusCodes.FAILED_DEPENDENCY]: 'Failed Dependency',
  [HttpStatusCodes.TOO_EARLY]: 'Too Early',
  [HttpStatusCodes.UPGRADE_REQUIRED]: 'Upgrade Required',
  [HttpStatusCodes.PRECONDITION_REQUIRED]: 'Precondition Required',
  [HttpStatusCodes.TOO_MANY_REQUESTS]: 'Too Many Requests',
  [HttpStatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE]: 'Request Header Fields Too Large',
  [HttpStatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS]: 'Unavailable For Legal Reasons',

  // 5xx Server Error
  [HttpStatusCodes.INTERNAL_SERVER_ERROR]: 'Internal Server Error',
  [HttpStatusCodes.NOT_IMPLEMENTED]: 'Not Implemented',
  [HttpStatusCodes.BAD_GATEWAY]: 'Bad Gateway',
  [HttpStatusCodes.SERVICE_UNAVAILABLE]: 'Service Unavailable',
  [HttpStatusCodes.GATEWAY_TIMEOUT]: 'Gateway Timeout',
  [HttpStatusCodes.HTTP_VERSION_NOT_SUPPORTED]: 'HTTP Version Not Supported',
  [HttpStatusCodes.VARIANT_ALSO_NEGOTIATES]: 'Variant Also Negotiates',
  [HttpStatusCodes.INSUFFICIENT_STORAGE]: 'Insufficient Storage',
  [HttpStatusCodes.LOOP_DETECTED]: 'Loop Detected',
  [HttpStatusCodes.NOT_EXTENDED]: 'Not Extended',
  [HttpStatusCodes.NETWORK_AUTHENTICATION_REQUIRED]: 'Network Authentication Required',
} as const;

// ========================
// STATUS CODE CATEGORIES
// ========================

export const HttpStatusCategories = {
  INFORMATIONAL: '1xx',
  SUCCESS: '2xx',
  REDIRECTION: '3xx',
  CLIENT_ERROR: '4xx',
  SERVER_ERROR: '5xx',
} as const;

// ========================
// COMMONLY USED STATUS CODES
// ========================

export const CommonStatusCodes = {
  // Success responses
  SUCCESS: HttpStatusCodes.OK,
  CREATED: HttpStatusCodes.CREATED,
  UPDATED: HttpStatusCodes.OK,
  DELETED: HttpStatusCodes.NO_CONTENT,
  
  // Client error responses
  VALIDATION_ERROR: HttpStatusCodes.UNPROCESSABLE_ENTITY,
  AUTHENTICATION_ERROR: HttpStatusCodes.UNAUTHORIZED,
  AUTHORIZATION_ERROR: HttpStatusCodes.FORBIDDEN,
  NOT_FOUND_ERROR: HttpStatusCodes.NOT_FOUND,
  CONFLICT_ERROR: HttpStatusCodes.CONFLICT,
  RATE_LIMIT_ERROR: HttpStatusCodes.TOO_MANY_REQUESTS,
  
  // Server error responses
  SERVER_ERROR: HttpStatusCodes.INTERNAL_SERVER_ERROR,
  SERVICE_ERROR: HttpStatusCodes.SERVICE_UNAVAILABLE,
} as const;

// ========================
// API RESPONSE MAPPING
// ========================

export const ApiResponseMapping = {
  // Authentication & Authorization
  INVALID_CREDENTIALS: HttpStatusCodes.UNAUTHORIZED,
  TOKEN_EXPIRED: HttpStatusCodes.UNAUTHORIZED,
  ACCESS_DENIED: HttpStatusCodes.FORBIDDEN,
  INSUFFICIENT_PERMISSIONS: HttpStatusCodes.FORBIDDEN,
  
  // Resource operations
  RESOURCE_CREATED: HttpStatusCodes.CREATED,
  RESOURCE_UPDATED: HttpStatusCodes.OK,
  RESOURCE_DELETED: HttpStatusCodes.NO_CONTENT,
  RESOURCE_NOT_FOUND: HttpStatusCodes.NOT_FOUND,
  RESOURCE_CONFLICT: HttpStatusCodes.CONFLICT,
  
  // Validation errors
  INVALID_INPUT: HttpStatusCodes.BAD_REQUEST,
  VALIDATION_FAILED: HttpStatusCodes.UNPROCESSABLE_ENTITY,
  MALFORMED_REQUEST: HttpStatusCodes.BAD_REQUEST,
  
  // Business logic errors
  BUSINESS_RULE_VIOLATION: HttpStatusCodes.UNPROCESSABLE_ENTITY,
  DUPLICATE_RESOURCE: HttpStatusCodes.CONFLICT,
  PRECONDITION_FAILED: HttpStatusCodes.PRECONDITION_FAILED,
  
  // Rate limiting
  RATE_LIMIT_EXCEEDED: HttpStatusCodes.TOO_MANY_REQUESTS,
  QUOTA_EXCEEDED: HttpStatusCodes.TOO_MANY_REQUESTS,
  
  // File upload errors
  FILE_TOO_LARGE: HttpStatusCodes.PAYLOAD_TOO_LARGE,
  UNSUPPORTED_FILE_TYPE: HttpStatusCodes.UNSUPPORTED_MEDIA_TYPE,
  
  // Server errors
  DATABASE_ERROR: HttpStatusCodes.INTERNAL_SERVER_ERROR,
  EXTERNAL_SERVICE_ERROR: HttpStatusCodes.BAD_GATEWAY,
  SERVICE_TIMEOUT: HttpStatusCodes.GATEWAY_TIMEOUT,
  MAINTENANCE_MODE: HttpStatusCodes.SERVICE_UNAVAILABLE,
} as const;

// ========================
// UTILITY FUNCTIONS
// ========================

export const HttpStatusUtils = {
  /**
   * Get description for status code
   */
  getDescription: (code: number): string => {
    return HttpStatusDescriptions[code as keyof typeof HttpStatusDescriptions] || 'Unknown Status';
  },

  /**
   * Check if status code is success (2xx)
   */
  isSuccess: (code: number): boolean => {
    return code >= 200 && code < 300;
  },

  /**
   * Check if status code is client error (4xx)
   */
  isClientError: (code: number): boolean => {
    return code >= 400 && code < 500;
  },

  /**
   * Check if status code is server error (5xx)
   */
  isServerError: (code: number): boolean => {
    return code >= 500 && code < 600;
  },

  /**
   * Check if status code is error (4xx or 5xx)
   */
  isError: (code: number): boolean => {
    return code >= 400;
  },

  /**
   * Get category for status code
   */
  getCategory: (code: number): string => {
    if (code >= 100 && code < 200) return HttpStatusCategories.INFORMATIONAL;
    if (code >= 200 && code < 300) return HttpStatusCategories.SUCCESS;
    if (code >= 300 && code < 400) return HttpStatusCategories.REDIRECTION;
    if (code >= 400 && code < 500) return HttpStatusCategories.CLIENT_ERROR;
    if (code >= 500 && code < 600) return HttpStatusCategories.SERVER_ERROR;
    return 'Unknown';
  },

  /**
   * Create response object with status code and description
   */
  createResponse: (code: number, data?: any) => ({
    statusCode: code,
    status: HttpStatusUtils.getDescription(code),
    success: HttpStatusUtils.isSuccess(code),
    data,
  }),

  /**
   * Create error response object
   */
  createErrorResponse: (code: number, message: string, details?: any) => ({
    statusCode: code,
    status: HttpStatusUtils.getDescription(code),
    success: false,
    error: {
      message,
      details,
    },
  }),
} as const;

// ========================
// CONTENT TYPE MAPPING
// ========================

export const ContentTypeMapping = {
  JSON: 'application/json',
  XML: 'application/xml',
  HTML: 'text/html',
  TEXT: 'text/plain',
  PDF: 'application/pdf',
  FORM_URLENCODED: 'application/x-www-form-urlencoded',
  FORM_DATA: 'multipart/form-data',
  OCTET_STREAM: 'application/octet-stream',
} as const;

// ========================
// TYPE DEFINITIONS
// ========================

export type HttpStatusCode = typeof HttpStatusCodes[keyof typeof HttpStatusCodes];
export type HttpStatusCategory = typeof HttpStatusCategories[keyof typeof HttpStatusCategories];
export type ContentType = typeof ContentTypeMapping[keyof typeof ContentTypeMapping];

export interface HttpResponse {
  statusCode: HttpStatusCode;
  status: string;
  success: boolean;
  data?: any;
  error?: {
    message: string;
    details?: any;
  };
}

// ========================
// EXPRESS RESPONSE HELPERS
// ========================

export const ResponseHelpers = {
  /**
   * Send success response
   */
  success: (res: any, data?: any, statusCode: number = HttpStatusCodes.OK) => {
    return res.status(statusCode).json(HttpStatusUtils.createResponse(statusCode, data));
  },

  /**
   * Send created response
   */
  created: (res: any, data?: any) => {
    return res.status(HttpStatusCodes.CREATED).json(HttpStatusUtils.createResponse(HttpStatusCodes.CREATED, data));
  },

  /**
   * Send no content response
   */
  noContent: (res: any) => {
    return res.status(HttpStatusCodes.NO_CONTENT).send();
  },

  /**
   * Send error response
   */
  error: (res: any, message: string, statusCode: number = HttpStatusCodes.INTERNAL_SERVER_ERROR, details?: any) => {
    return res.status(statusCode).json(HttpStatusUtils.createErrorResponse(statusCode, message, details));
  },

  /**
   * Send validation error response
   */
  validationError: (res: any, message: string, details?: any) => {
    return res.status(HttpStatusCodes.UNPROCESSABLE_ENTITY).json(
      HttpStatusUtils.createErrorResponse(HttpStatusCodes.UNPROCESSABLE_ENTITY, message, details)
    );
  },

  /**
   * Send not found response
   */
  notFound: (res: any, message: string = 'Resource not found') => {
    return res.status(HttpStatusCodes.NOT_FOUND).json(
      HttpStatusUtils.createErrorResponse(HttpStatusCodes.NOT_FOUND, message)
    );
  },

  /**
   * Send unauthorized response
   */
  unauthorized: (res: any, message: string = 'Unauthorized') => {
    return res.status(HttpStatusCodes.UNAUTHORIZED).json(
      HttpStatusUtils.createErrorResponse(HttpStatusCodes.UNAUTHORIZED, message)
    );
  },

  /**
   * Send forbidden response
   */
  forbidden: (res: any, message: string = 'Forbidden') => {
    return res.status(HttpStatusCodes.FORBIDDEN).json(
      HttpStatusUtils.createErrorResponse(HttpStatusCodes.FORBIDDEN, message)
    );
  },
} as const;
