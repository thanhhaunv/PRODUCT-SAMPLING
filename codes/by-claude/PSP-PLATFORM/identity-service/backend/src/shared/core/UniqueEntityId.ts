/**
 * UniqueEntityId.ts - Entity Identifier Implementation
 * 
 * SRS Reference: Part06.2.1 Layered Architecture - Domain Layer
 * Architecture: Domain-Driven Design (DDD)
 * 
 * Purpose: Type-safe unique identifiers for domain entities
 * Pattern: Value Object for entity identification
 * Usage: Base class for all entity IDs (UserId, RoleId, SessionId, etc.)
 */

import { randomUUID } from 'crypto';

export class UniqueEntityId {
  private value: string;

  constructor(id?: string) {
    this.value = id ? id : randomUUID();
    Object.freeze(this);
  }

  /**
   * Get the string representation of the ID
   */
  public toString(): string {
    return this.value;
  }

  /**
   * Convert to JSON for serialization
   */
  public toValue(): string {
    return this.value;
  }

  /**
   * Check equality with another UniqueEntityId
   */
  public equals(id?: UniqueEntityId): boolean {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof this.constructor)) {
      return false;
    }
    return id.toValue() === this.value;
  }

  /**
   * Static factory method for creating from string
   */
  public static create(id?: string): UniqueEntityId {
    return new UniqueEntityId(id);
  }

  /**
   * Validate UUID format
   */
  public static isValidUUID(id: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
  }

  /**
   * Create from existing valid UUID string
   */
  public static fromString(id: string): UniqueEntityId {
    if (!this.isValidUUID(id)) {
      throw new Error(`Invalid UUID format: ${id}`);
    }
    return new UniqueEntityId(id);
  }
}
