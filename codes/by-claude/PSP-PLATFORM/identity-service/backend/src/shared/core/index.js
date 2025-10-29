/**
 * Shared Core Library - Index
 * 
 * CRITICAL: This is the main entry point for shared core library
 * BLOCKING DEPENDENCY for ALL developers
 * 
 * Purpose: Export all core domain patterns and utilities
 * Usage: import { Result, Entity, AggregateRoot } from '../shared/core'
 */

// Base domain patterns
export { Entity } from './Entity';
export { AggregateRoot } from './AggregateRoot';
export { ValueObject, ValueObjectProps } from './ValueObject';
export { UniqueEntityId } from './UniqueEntityId';

// Domain events
export { 
  DomainEvent, 
  BaseDomainEvent, 
  DomainEventHandler, 
  EventDispatcher 
} from './DomainEvent';

// Error handling patterns
export { Result } from './Result';
export { 
  Either, 
  Left, 
  Right, 
  either, 
  ExtractLeft, 
  ExtractRight 
} from './Either';

// Application errors
export {
  AppError,
  DomainError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  ConflictError,
  InfrastructureError,
  BusinessRuleError,
  ErrorFactory,
  ErrorUtils,
  ErrorMetadata
} from './AppError';

// Input validation
export {
  Guard,
  GuardResult,
  IGuardResult,
  IGuardArgument,
  GuardArgumentCollection
} from './Guard';

// Logging
export {
  ILogger,
  LogLevel,
  LogContext,
  LogEntry,
  ILogFormatter,
  JsonLogFormatter,
  HumanLogFormatter,
  ConsoleLogger,
  NullLogger,
  LoggerFactory,
  PerformanceLogger,
  logger
} from './Logger';

// Common type aliases for convenience
export type ID = UniqueEntityId;
export type DomainResult<T> = Result<T>;
export type DomainEither<L, R> = Either<L, R>;
