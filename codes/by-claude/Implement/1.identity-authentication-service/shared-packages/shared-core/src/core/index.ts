/**
 * @fileoverview Core domain building blocks export
 * @package @psp/shared-core
 * @version 1.2.0
 * 
 * Exports all core DDD (Domain Driven Design) building blocks:
 * - Result: Error handling pattern
 * - AggregateRoot: Domain aggregate root base class
 * - Entity: Domain entity base class  
 * - ValueObject: Domain value object base class
 * - UniqueEntityId: Unique identifier management
 */

// Core domain building blocks
export { Result } from './Result';
export { AggregateRoot } from './AggregateRoot';
export { Entity } from './Entity';
export { ValueObject } from './ValueObject';
export { UniqueEntityId } from './UniqueEntityId';

// Type exports for better TypeScript support
export type { 
  ResultError,
  ResultSuccess 
} from './Result';

export type {
  EntityProps,
  EntityId
} from './Entity';

export type {
  ValueObjectProps
} from './ValueObject';

export type {
  AggregateRootProps,
  DomainEvent
} from './AggregateRoot';

export type {
  UniqueEntityIdProps
} from './UniqueEntityId';
