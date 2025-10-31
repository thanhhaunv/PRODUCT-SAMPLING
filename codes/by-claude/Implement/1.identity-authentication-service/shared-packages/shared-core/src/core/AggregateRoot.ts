import { Entity } from './Entity';
import { UniqueEntityId } from './UniqueEntityId';

/**
 * Domain Event interface
 */
export interface IDomainEvent {
  dateTimeOccurred: Date;
  getAggregateId(): UniqueEntityId;
}

/**
 * Base Aggregate Root class for DDD
 * Refs: DDD patterns, Domain Events
 */
export abstract class AggregateRoot<T> extends Entity<T> {
  private _domainEvents: IDomainEvent[] = [];

  get id(): UniqueEntityId {
    return this._id;
  }

  get domainEvents(): IDomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(domainEvent: IDomainEvent): void {
    this._domainEvents.push(domainEvent);
  }

  public clearEvents(): void {
    this._domainEvents.splice(0, this._domainEvents.length);
  }

  protected logDomainEvent(domainEvent: IDomainEvent): void {
    console.log(`[Domain Event]: ${domainEvent.constructor.name} occurred at ${domainEvent.dateTimeOccurred}`);
  }
}
