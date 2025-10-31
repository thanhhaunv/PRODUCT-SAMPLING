/**
 * @fileoverview DDD Entity Base Class
 * @package @psp/shared-core
 * @version 1.2.0
 * 
 * Base class for all domain entities following DDD principles.
 * Refs: SRS Part06.2.1 Layered Architecture - Domain Layer
 */

import { UniqueEntityId } from './UniqueEntityId';

export type EntityId = UniqueEntityId;

export interface EntityProps {
  id?: UniqueEntityId;
  createdAt?: Date;
  updatedAt?: Date;
}

export abstract class Entity<T extends EntityProps> {
  protected readonly _id: UniqueEntityId;
  protected readonly _createdAt: Date;
  protected _updatedAt: Date;
  protected _props: T;

  constructor(props: T, id?: UniqueEntityId) {
    this._id = id || new UniqueEntityId();
    this._createdAt = props.createdAt || new Date();
    this._updatedAt = props.updatedAt || new Date();
    this._props = props;
  }

  get id(): UniqueEntityId {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  protected get props(): T {
    return this._props;
  }

  protected set props(props: T) {
    this._props = props;
    this._updatedAt = new Date();
  }

  /**
   * Entities are equal if their IDs are equal
   */
  public equals(entity?: Entity<T>): boolean {
    if (entity === null || entity === undefined) {
      return false;
    }

    if (this === entity) {
      return true;
    }

    if (!(entity instanceof Entity)) {
      return false;
    }

    return this._id.equals(entity._id);
  }

  /**
   * Create a copy of the entity with updated properties
   */
  protected updateProps(partialProps: Partial<T>): void {
    this._props = {
      ...this._props,
      ...partialProps,
    };
    this._updatedAt = new Date();
  }

  /**
   * Get entity as plain object for serialization
   */
  public toObject(): T & { id: string; createdAt: Date; updatedAt: Date } {
    return {
      ...this._props,
      id: this._id.toValue(),
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }

  /**
   * Get entity ID as string
   */
  public getStringId(): string {
    return this._id.toValue();
  }

  /**
   * Check if entity was created recently (within specified minutes)
   */
  public isRecentlyCreated(withinMinutes: number = 5): boolean {
    const now = new Date();
    const diffInMs = now.getTime() - this._createdAt.getTime();
    const diffInMinutes = diffInMs / (1000 * 60);
    
    return diffInMinutes <= withinMinutes;
  }

  /**
   * Check if entity was updated recently (within specified minutes)
   */
  public isRecentlyUpdated(withinMinutes: number = 5): boolean {
    const now = new Date();
    const diffInMs = now.getTime() - this._updatedAt.getTime();
    const diffInMinutes = diffInMs / (1000 * 60);
    
    return diffInMinutes <= withinMinutes;
  }
}
