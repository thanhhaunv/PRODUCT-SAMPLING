/**
 * Entity.ts - Domain Entity Base Class
 * 
 * SRS Reference: Part06.2.1 Layered Architecture - Domain Layer
 * Architecture: Domain-Driven Design (DDD)
 * 
 * Purpose: Base class for all domain entities with identity
 * Pattern: Entity pattern from DDD - objects with continuity and identity
 * Usage: Extended by User, Role, Session, Permission, etc.
 */

import { UniqueEntityId } from './UniqueEntityId';

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityId;
  protected props: T;

  constructor(props: T, id?: UniqueEntityId) {
    this._id = id ? id : new UniqueEntityId();
    this.props = props;
  }

  /**
   * Get the entity's unique identifier
   */
  get id(): UniqueEntityId {
    return this._id;
  }

  /**
   * Check equality based on ID
   * Two entities are equal if they have the same ID
   */
  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }

  /**
   * Get string representation for logging/debugging
   */
  public toString(): string {
    return `${this.constructor.name}(${this._id.toString()})`;
  }

  /**
   * Clone the entity with new props (immutable update pattern)
   */
  protected clone(newProps: Partial<T>): this {
    const Constructor = this.constructor as new (props: T, id?: UniqueEntityId) => this;
    return new Constructor({ ...this.props, ...newProps }, this._id);
  }

  /**
   * Validate entity state
   * Override in derived classes for specific validation rules
   */
  protected validate(): void {
    // Override in derived classes
  }

  /**
   * Get creation timestamp if available in props
   */
  get createdAt(): Date | undefined {
    const props = this.props as any;
    return props.createdAt;
  }

  /**
   * Get update timestamp if available in props
   */
  get updatedAt(): Date | undefined {
    const props = this.props as any;
    return props.updatedAt;
  }
}
