/**
 * ValueObject.ts - Value Object Base Class
 * 
 * SRS Reference: Part06.2.1 Layered Architecture - Domain Layer
 * Architecture: Domain-Driven Design (DDD) - Value Object Pattern
 * 
 * Purpose: Base class for immutable value objects with structural equality
 * Pattern: Value Object pattern - objects without identity, compared by value
 * Usage: Email, Phone, Password, Money, Address, etc.
 */

export interface ValueObjectProps {
  [index: string]: any;
}

/**
 * Abstract base class for Value Objects
 * Value Objects are immutable and compared by their properties, not identity
 */
export abstract class ValueObject<T extends ValueObjectProps> {
  protected readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
    Object.freeze(this);
  }

  /**
   * Check equality based on properties (structural equality)
   * Two value objects are equal if all their properties are equal
   */
  public equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }

    if (vo.props === undefined) {
      return false;
    }

    return this.deepEquals(this.props, vo.props);
  }

  /**
   * Deep equality check for properties
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

    // Handle arrays
    if (Array.isArray(obj1)) {
      if (!Array.isArray(obj2) || obj1.length !== obj2.length) {
        return false;
      }
      return obj1.every((item, index) => this.deepEquals(item, obj2[index]));
    }

    if (Array.isArray(obj2)) {
      return false;
    }

    // Handle objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keys1.every(key => 
      keys2.includes(key) && this.deepEquals(obj1[key], obj2[key])
    );
  }

  /**
   * Get string representation for debugging
   */
  public toString(): string {
    return `${this.constructor.name}(${JSON.stringify(this.props)})`;
  }

  /**
   * Get JSON representation for serialization
   */
  public toJSON(): T {
    return { ...this.props };
  }

  /**
   * Get the underlying properties (read-only)
   */
  public getValue(): T {
    return this.props;
  }

  /**
   * Create a new instance with updated properties (immutable update)
   */
  protected withProps(newProps: Partial<T>): this {
    const Constructor = this.constructor as new (props: T) => this;
    return new Constructor({ ...this.props, ...newProps });
  }

  /**
   * Validate the value object's properties
   * Override in derived classes for specific validation rules
   */
  protected abstract validate(props: T): void;

  /**
   * Static factory method to create value objects with validation
   * Override this method in derived classes for custom factory logic
   */
  public static create<U extends ValueObjectProps>(props: U): ValueObject<U> {
    const instance = new this(props);
    instance.validate(props);
    return instance;
  }

  /**
   * Check if this value object is empty/null/undefined
   */
  public isEmpty(): boolean {
    if (!this.props) return true;
    
    const values = Object.values(this.props);
    return values.every(value => 
      value === null || 
      value === undefined || 
      value === '' || 
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === 'object' && Object.keys(value).length === 0)
    );
  }

  /**
   * Hash code for use in Sets/Maps
   */
  public hashCode(): string {
    return JSON.stringify(this.props);
  }
}
