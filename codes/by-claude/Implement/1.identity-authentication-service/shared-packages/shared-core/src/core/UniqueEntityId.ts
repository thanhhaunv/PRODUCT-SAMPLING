import { v4 as uuidv4 } from 'uuid';

/**
 * Unique identifier for DDD entities
 * Refs: DDD patterns, EMSA-v1.0 Architecture Standards
 */
export class UniqueEntityId {
  private _value: string;

  constructor(value?: string) {
    this._value = value ? value : uuidv4();
  }

  public equals(id?: UniqueEntityId): boolean {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof this.constructor)) {
      return false;
    }
    return id.toValue() === this._value;
  }

  public toString(): string {
    return String(this._value);
  }

  public toValue(): string {
    return this._value;
  }
}
