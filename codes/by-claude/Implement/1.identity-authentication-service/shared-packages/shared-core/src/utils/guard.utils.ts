/**
 * Guard utilities for defensive programming
 * Refs: Clean Code principles, defensive programming patterns
 */
export class Guard {
  /**
   * Guard against null or undefined values
   */
  public static againstNullOrUndefined(argument: any, argumentName: string): void {
    if (argument === null || argument === undefined) {
      throw new Error(`${argumentName} is null or undefined`);
    }
  }

  /**
   * Guard against null, undefined, or empty strings
   */
  public static againstNullOrUndefinedOrEmpty(argument: string, argumentName: string): void {
    this.againstNullOrUndefined(argument, argumentName);
    if (argument.trim() === '') {
      throw new Error(`${argumentName} is empty`);
    }
  }

  /**
   * Guard against numbers less than a minimum value
   */
  public static againstLessThan(number: number, min: number, argumentName: string): void {
    if (number < min) {
      throw new Error(`${argumentName} is less than ${min}`);
    }
  }

  /**
   * Guard against numbers greater than a maximum value
   */
  public static againstGreaterThan(number: number, max: number, argumentName: string): void {
    if (number > max) {
      throw new Error(`${argumentName} is greater than ${max}`);
    }
  }

  /**
   * Guard against numbers outside a range
   */
  public static againstRange(number: number, min: number, max: number, argumentName: string): void {
    this.againstLessThan(number, min, argumentName);
    this.againstGreaterThan(number, max, argumentName);
  }

  /**
   * Guard against empty arrays
   */
  public static againstEmptyArray<T>(argument: T[], argumentName: string): void {
    this.againstNullOrUndefined(argument, argumentName);
    if (argument.length === 0) {
      throw new Error(`${argumentName} is empty array`);
    }
  }

  /**
   * Guard against invalid email format
   */
  public static againstInvalidEmail(email: string, argumentName: string): void {
    this.againstNullOrUndefinedOrEmpty(email, argumentName);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error(`${argumentName} is not a valid email format`);
    }
  }

  /**
   * Guard against invalid URL format
   */
  public static againstInvalidUrl(url: string, argumentName: string): void {
    this.againstNullOrUndefinedOrEmpty(url, argumentName);
    try {
      new URL(url);
    } catch (error) {
      throw new Error(`${argumentName} is not a valid URL format`);
    }
  }

  /**
   * Guard against strings that don't match a pattern
   */
  public static againstInvalidPattern(value: string, pattern: RegExp, argumentName: string): void {
    this.againstNullOrUndefinedOrEmpty(value, argumentName);
    if (!pattern.test(value)) {
      throw new Error(`${argumentName} does not match the required pattern`);
    }
  }

  /**
   * Guard against boolean conditions
   */
  public static againstFalsy(condition: boolean, message: string): void {
    if (!condition) {
      throw new Error(message);
    }
  }

  /**
   * Guard against type mismatch
   */
  public static againstWrongType(argument: any, expectedType: string, argumentName: string): void {
    if (typeof argument !== expectedType) {
      throw new Error(`${argumentName} must be of type ${expectedType}, but got ${typeof argument}`);
    }
  }

  /**
   * Guard against array length constraints
   */
  public static againstArrayLength<T>(
    array: T[], 
    minLength: number, 
    maxLength: number, 
    argumentName: string
  ): void {
    this.againstNullOrUndefined(array, argumentName);
    if (array.length < minLength || array.length > maxLength) {
      throw new Error(`${argumentName} length must be between ${minLength} and ${maxLength}`);
    }
  }
}
