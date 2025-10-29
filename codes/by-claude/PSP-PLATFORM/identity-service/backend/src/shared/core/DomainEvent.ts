/**
 * DomainEvent.ts - Domain Event Base Interface
 * 
 * SRS Reference: Part06.1.2 Event Bus - Domain Events
 * Architecture: Event-Driven Architecture + Domain-Driven Design
 * 
 * Purpose: Base interface for all domain events
 * Pattern: Domain Events pattern for decoupling business logic
 * Usage: UserCreated, UserUpdated, UserDeleted, etc. events
 */

import { UniqueEntityId } from './UniqueEntityId';

export interface DomainEvent {
  /**
   * Unique identifier for the event instance
   */
  eventId: string;

  /**
   * Type/name of the domain event
   */
  eventType: string;

  /**
   * Timestamp when the event occurred
   */
  occurredOn: Date;

  /**
   * Version of the event schema (for event evolution)
   */
  eventVersion: string;

  /**
   * ID of the aggregate that generated this event
   */
  aggregateId: UniqueEntityId;

  /**
   * Additional metadata about the event
   */
  metadata?: {
    userId?: string;
    correlationId?: string;
    causationId?: string;
    [key: string]: any;
  };

  /**
   * The actual event payload/data
   */
  payload: any;
}

/**
 * Abstract base class for domain events with common functionality
 */
export abstract class BaseDomainEvent implements DomainEvent {
  public eventId: string;
  public eventType: string;
  public occurredOn: Date;
  public eventVersion: string;
  public aggregateId: UniqueEntityId;
  public metadata?: {
    userId?: string;
    correlationId?: string;
    causationId?: string;
    [key: string]: any;
  };
  public abstract payload: any;

  constructor(
    eventType: string,
    aggregateId: UniqueEntityId,
    eventVersion: string = '1.0',
    metadata?: {
      userId?: string;
      correlationId?: string;
      causationId?: string;
      [key: string]: any;
    }
  ) {
    this.eventId = `${eventType}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    this.eventType = eventType;
    this.aggregateId = aggregateId;
    this.occurredOn = new Date();
    this.eventVersion = eventVersion;
    this.metadata = metadata;

    Object.freeze(this);
  }

  /**
   * Get event as JSON for serialization
   */
  public toJSON(): object {
    return {
      eventId: this.eventId,
      eventType: this.eventType,
      occurredOn: this.occurredOn.toISOString(),
      eventVersion: this.eventVersion,
      aggregateId: this.aggregateId.toString(),
      metadata: this.metadata,
      payload: this.payload
    };
  }

  /**
   * Create domain event from JSON
   */
  public static fromJSON(json: any): DomainEvent {
    // This would be implemented by specific event classes
    throw new Error('fromJSON must be implemented by concrete event classes');
  }
}

/**
 * Event handler interface for processing domain events
 */
export interface DomainEventHandler<T extends DomainEvent> {
  /**
   * Handle the domain event
   */
  handle(event: T): Promise<void>;

  /**
   * Get the event types this handler can process
   */
  getEventTypes(): string[];
}

/**
 * Event dispatcher interface for publishing events
 */
export interface EventDispatcher {
  /**
   * Register an event handler
   */
  register(handler: DomainEventHandler<any>): void;

  /**
   * Dispatch an event to all registered handlers
   */
  dispatch(event: DomainEvent): Promise<void>;

  /**
   * Dispatch multiple events
   */
  dispatchAll(events: DomainEvent[]): Promise<void>;

  /**
   * Clear all handlers (mainly for testing)
   */
  clearHandlers(): void;
}
