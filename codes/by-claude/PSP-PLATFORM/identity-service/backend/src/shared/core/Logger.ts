/**
 * Logger.ts - Logging Interface & Implementation
 * 
 * SRS Reference: Part15.3.1 Health Monitoring & Logging
 * Architecture: Clean Architecture - Infrastructure Abstraction
 * 
 * Purpose: Structured logging with multiple levels and contextual information
 * Pattern: Dependency Inversion - Interface + Implementation
 * Usage: Used across all layers for consistent logging
 */

export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  HTTP = 3,
  VERBOSE = 4,
  DEBUG = 5,
  SILLY = 6
}

export interface LogContext {
  correlationId?: string;
  userId?: string;
  sessionId?: string;
  operation?: string;
  module?: string;
  metadata?: Record<string, any>;
  error?: Error;
  duration?: number;
  statusCode?: number;
}

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: Date;
  context?: LogContext;
}

/**
 * Logger interface for dependency inversion
 */
export interface ILogger {
  error(message: string, context?: LogContext): void;
  warn(message: string, context?: LogContext): void;
  info(message: string, context?: LogContext): void;
  http(message: string, context?: LogContext): void;
  verbose(message: string, context?: LogContext): void;
  debug(message: string, context?: LogContext): void;
  silly(message: string, context?: LogContext): void;
  
  /**
   * Performance logging
   */
  performance(operation: string, duration: number, context?: LogContext): void;
  
  /**
   * Create child logger with additional context
   */
  child(context: LogContext): ILogger;
  
  /**
   * Set minimum log level
   */
  setLevel(level: LogLevel): void;
  
  /**
   * Check if level is enabled
   */
  isLevelEnabled(level: LogLevel): boolean;
}

/**
 * Log formatter interface
 */
export interface ILogFormatter {
  format(entry: LogEntry): string;
}

/**
 * JSON log formatter for structured logging
 */
export class JsonLogFormatter implements ILogFormatter {
  format(entry: LogEntry): string {
    const logObject = {
      timestamp: entry.timestamp.toISOString(),
      level: LogLevel[entry.level],
      message: entry.message,
      ...entry.context,
      // Move error to separate field for better parsing
      error: entry.context?.error ? {
        name: entry.context.error.name,
        message: entry.context.error.message,
        stack: entry.context.error.stack
      } : undefined
    };

    return JSON.stringify(logObject);
  }
}

/**
 * Human-readable log formatter for development
 */
export class HumanLogFormatter implements ILogFormatter {
  format(entry: LogEntry): string {
    const timestamp = entry.timestamp.toISOString();
    const level = LogLevel[entry.level].padEnd(7);
    const context = entry.context;
    
    let formatted = `${timestamp} [${level}] ${entry.message}`;
    
    if (context?.correlationId) {
      formatted += ` [${context.correlationId}]`;
    }
    
    if (context?.userId) {
      formatted += ` [user:${context.userId}]`;
    }
    
    if (context?.operation) {
      formatted += ` [op:${context.operation}]`;
    }
    
    if (context?.duration) {
      formatted += ` [${context.duration}ms]`;
    }
    
    if (context?.metadata && Object.keys(context.metadata).length > 0) {
      formatted += ` ${JSON.stringify(context.metadata)}`;
    }
    
    if (context?.error) {
      formatted += `\n${context.error.stack}`;
    }
    
    return formatted;
  }
}

/**
 * Console logger implementation
 */
export class ConsoleLogger implements ILogger {
  private currentLevel: LogLevel;
  private formatter: ILogFormatter;
  private context: LogContext;

  constructor(
    level: LogLevel = LogLevel.INFO,
    formatter: ILogFormatter = new HumanLogFormatter(),
    context: LogContext = {}
  ) {
    this.currentLevel = level;
    this.formatter = formatter;
    this.context = context;
  }

  private log(level: LogLevel, message: string, context?: LogContext): void {
    if (!this.isLevelEnabled(level)) {
      return;
    }

    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date(),
      context: { ...this.context, ...context }
    };

    const formatted = this.formatter.format(entry);
    
    // Use appropriate console method based on level
    switch (level) {
      case LogLevel.ERROR:
        console.error(formatted);
        break;
      case LogLevel.WARN:
        console.warn(formatted);
        break;
      case LogLevel.INFO:
      case LogLevel.HTTP:
      case LogLevel.VERBOSE:
        console.info(formatted);
        break;
      case LogLevel.DEBUG:
      case LogLevel.SILLY:
        console.debug(formatted);
        break;
      default:
        console.log(formatted);
    }
  }

  error(message: string, context?: LogContext): void {
    this.log(LogLevel.ERROR, message, context);
  }

  warn(message: string, context?: LogContext): void {
    this.log(LogLevel.WARN, message, context);
  }

  info(message: string, context?: LogContext): void {
    this.log(LogLevel.INFO, message, context);
  }

  http(message: string, context?: LogContext): void {
    this.log(LogLevel.HTTP, message, context);
  }

  verbose(message: string, context?: LogContext): void {
    this.log(LogLevel.VERBOSE, message, context);
  }

  debug(message: string, context?: LogContext): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  silly(message: string, context?: LogContext): void {
    this.log(LogLevel.SILLY, message, context);
  }

  performance(operation: string, duration: number, context?: LogContext): void {
    this.info(`Performance: ${operation}`, {
      ...context,
      operation,
      duration
    });
  }

  child(context: LogContext): ILogger {
    return new ConsoleLogger(
      this.currentLevel,
      this.formatter,
      { ...this.context, ...context }
    );
  }

  setLevel(level: LogLevel): void {
    this.currentLevel = level;
  }

  isLevelEnabled(level: LogLevel): boolean {
    return level <= this.currentLevel;
  }
}

/**
 * No-op logger for testing
 */
export class NullLogger implements ILogger {
  error(): void {}
  warn(): void {}
  info(): void {}
  http(): void {}
  verbose(): void {}
  debug(): void {}
  silly(): void {}
  performance(): void {}
  
  child(): ILogger {
    return this;
  }
  
  setLevel(): void {}
  
  isLevelEnabled(): boolean {
    return false;
  }
}

/**
 * Logger factory for creating different logger instances
 */
export class LoggerFactory {
  private static defaultLogger: ILogger | null = null;

  /**
   * Get default logger instance
   */
  static getLogger(): ILogger {
    if (!this.defaultLogger) {
      const isProduction = process.env.NODE_ENV === 'production';
      const level = this.getLogLevelFromEnv();
      const formatter = isProduction 
        ? new JsonLogFormatter() 
        : new HumanLogFormatter();
      
      this.defaultLogger = new ConsoleLogger(level, formatter);
    }
    
    return this.defaultLogger;
  }

  /**
   * Create logger with specific configuration
   */
  static createLogger(
    level: LogLevel,
    formatter: ILogFormatter,
    context?: LogContext
  ): ILogger {
    return new ConsoleLogger(level, formatter, context);
  }

  /**
   * Create child logger with additional context
   */
  static createChildLogger(context: LogContext): ILogger {
    return this.getLogger().child(context);
  }

  /**
   * Create null logger for testing
   */
  static createNullLogger(): ILogger {
    return new NullLogger();
  }

  /**
   * Set the default logger instance
   */
  static setDefaultLogger(logger: ILogger): void {
    this.defaultLogger = logger;
  }

  private static getLogLevelFromEnv(): LogLevel {
    const envLevel = process.env.LOG_LEVEL?.toUpperCase();
    
    switch (envLevel) {
      case 'ERROR': return LogLevel.ERROR;
      case 'WARN': return LogLevel.WARN;
      case 'INFO': return LogLevel.INFO;
      case 'HTTP': return LogLevel.HTTP;
      case 'VERBOSE': return LogLevel.VERBOSE;
      case 'DEBUG': return LogLevel.DEBUG;
      case 'SILLY': return LogLevel.SILLY;
      default: return LogLevel.INFO;
    }
  }
}

/**
 * Performance measurement utility
 */
export class PerformanceLogger {
  private static logger = LoggerFactory.getLogger();

  /**
   * Measure execution time of a function
   */
  static measure<T>(
    operation: string,
    fn: () => T,
    context?: LogContext
  ): T {
    const start = Date.now();
    
    try {
      const result = fn();
      const duration = Date.now() - start;
      
      this.logger.performance(operation, duration, context);
      
      return result;
    } catch (error) {
      const duration = Date.now() - start;
      
      this.logger.error(`Performance: ${operation} failed`, {
        ...context,
        operation,
        duration,
        error: error instanceof Error ? error : new Error(String(error))
      });
      
      throw error;
    }
  }

  /**
   * Measure execution time of an async function
   */
  static async measureAsync<T>(
    operation: string,
    fn: () => Promise<T>,
    context?: LogContext
  ): Promise<T> {
    const start = Date.now();
    
    try {
      const result = await fn();
      const duration = Date.now() - start;
      
      this.logger.performance(operation, duration, context);
      
      return result;
    } catch (error) {
      const duration = Date.now() - start;
      
      this.logger.error(`Performance: ${operation} failed`, {
        ...context,
        operation,
        duration,
        error: error instanceof Error ? error : new Error(String(error))
      });
      
      throw error;
    }
  }
}

// Export default logger instance
export const logger = LoggerFactory.getLogger();
