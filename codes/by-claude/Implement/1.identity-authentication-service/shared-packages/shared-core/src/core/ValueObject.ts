/**
 * @fileoverview DDD Value Object Base Class
 * @package @psp/shared-core
 * @version 1.2.0
 * 
 * Base class for all domain value objects following DDD principles.
 * Value objects are immutable and equality is based on their attributes.
 * Refs: SRS Part06.2.1 Layered Architecture - Domain Layer
 */

export interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  protected readonly _props: T;

  constructor(props: T) {
    this._props = Object.freeze(props);
  }

  protected get props(): T {
    return this._props;
  }

  /**
   * Value objects are equal if their properties are equal
   */
  public equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }

    if (vo._props === undefined) {
      return false;
    }

    return this.deepEquals(this._props, vo._props);
  }

  /**
   * Deep comparison of object properties
   */
  private deepEquals(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) {
      return true;
    }

    if (obj1 == null || obj2 == null) {
      return false;
    }

    if (typeof obj1 !== typeof obj2) {
      return false;
    }

    if (typeof obj1 !== 'object') {
      return obj1 === obj2;
    }

    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
      return false;
    }

    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) {
        return false;
      }
      for (let i = 0; i < obj1.length; i++) {
        if (!this.deepEquals(obj1[i], obj2[i])) {
          return false;
        }
      }
      return true;
    }

    // Handle Date objects
    if (obj1 instanceof Date && obj2 instanceof Date) {
      return obj1.getTime() === obj2.getTime();
    }

    // Handle regular objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (!keys2.includes(key)) {
        return false;
      }

      if (!this.deepEquals(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }

  /**
   * Get value object as plain object for serialization
   */
  public toObject(): T {
    return { ...this._props };
  }

  /**
   * Get JSON representation
   */
  public toJSON(): T {
    return this.toObject();
  }

  /**
   * Get string representation
   */
  public toString(): string {
    return JSON.stringify(this._props);
  }

  /**
   * Create a copy with updated properties (immutable update)
   */
  protected copyWith(partialProps: Partial<T>): this {
    const Constructor = this.constructor as new (props: T) => this;
    return new Constructor({
      ...this._props,
      ...partialProps,
    });
  }

  /**
   * Validate value object properties
   * Override in subclasses for specific validation
   */
  protected validate(props: T): void {
    // Base validation - override in subclasses
    if (!props) {
      throw new Error('Value object props cannot be null or undefined');
    }
  }

  /**
   * Check if value object is empty (all properties are null/undefined/empty)
   */
  public isEmpty(): boolean {
    return Object.values(this._props).every(value => 
      value === null || 
      value === undefined || 
      value === '' ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === 'object' && Object.keys(value).length === 0)
    );
  }
}
