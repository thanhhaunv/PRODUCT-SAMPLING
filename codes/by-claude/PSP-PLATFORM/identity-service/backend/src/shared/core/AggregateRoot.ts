/**
 * AggregateRoot.ts - Domain Aggregate Root Base Class
 * 
 * SRS Reference: Part06.2.1 Layered Architecture - Domain Layer
 * Architecture: Domain-Driven Design (DDD) - Aggregate Pattern
 * 
 * Purpose: Base class for aggregate roots that can publish domain events
 * Pattern: Aggregate Root pattern - consistency boundary for business transactions
 * Usage: User, Role aggregates extend this class
 */

import { Entity } from './Entity';
import { DomainEvent } from './DomainEvent';
import { UniqueEntityId } from './UniqueEntityId';

export abstract class AggregateRoot<T> extends Entity<T> {
  private _domainEvents: DomainEvent[] = [];

  protected constructor(props: T, id?: UniqueEntityId) {
    super(props, id);
  }

  /**
   * Get all pending domain events
   */
  get domainEvents(): DomainEvent[] {
    return this._domainEvents.slice(); // Return copy to prevent external modification
  }

  /**
   * Add a domain event to be published
   */
  protected addDomainEvent(domainEvent: DomainEvent): void {
    // Check if event already exists to prevent duplicates
    const exists = this._domainEvents.some(event => 
      event.eventId === domainEvent.eventId
    );
    
    if (!exists) {
      this._domainEvents.push(domainEvent);
    }
  }

  /**
   * Clear all domain events (called after events are dispatched)
   */
  public clearEvents(): void {
    this._domainEvents.splice(0, this._domainEvents.length);
  }

  /**
   * Mark events as dispatched and clear them
   */
  public markEventsForDispatch(): DomainEvent[] {
    const eventsToDispatch = this.domainEvents;
    this.clearEvents();
    return eventsToDispatch;
  }

  /**
   * Check if there are pending events
   */
  public hasPendingEvents(): boolean {
    return this._domainEvents.length > 0;
  }

  /**
   * Get count of pending events
   */
  public getPendingEventCount(): number {
    return this._domainEvents.length;
  }

  /**
   * Get events of a specific type
   */
  public getEventsByType(eventType: string): DomainEvent[] {
    return this._domainEvents.filter(event => event.eventType === eventType);
  }

  /**
   * Remove a specific domain event
   */
  protected removeDomainEvent(eventId: string): void {
    const index = this._domainEvents.findIndex(event => event.eventId === eventId);
    if (index !== -1) {
      this._domainEvents.splice(index, 1);
    }
  }

  /**
   * Apply business invariants after state changes
   * Override in concrete aggregates for specific business rules
   */
  protected applyInvariants(): void {
    // Override in derived classes to enforce business rules
  }

  /**
   * Validate aggregate state
   * Override in derived classes for aggregate-specific validation
   */
  protected validate(): void {
    super.validate();
    this.applyInvariants();
  }

  /**
   * Create a snapshot of current state for debugging
   */
  protected getSnapshot(): {
    id: string;
    props: T;
    pendingEvents: string[];
    timestamp: Date;
  } {
    return {
      id: this._id.toString(),
      props: { ...this.props },
      pendingEvents: this._domainEvents.map(e => e.eventType),
      timestamp: new Date()
    };
  }
}
