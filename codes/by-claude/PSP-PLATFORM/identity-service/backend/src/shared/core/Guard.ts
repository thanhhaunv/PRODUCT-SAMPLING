/**
 * Guard.ts - Input Validation Utilities
 * 
 * SRS Reference: Part05.7 Input Validation
 * Architecture: Clean Architecture - Defensive Programming
 * 
 * Purpose: Centralized input validation and argument checking
 * Pattern: Guard Clauses pattern for early validation
 * Usage: Used by all domain objects, value objects, and use cases
 */

export interface IGuardResult {
  succeeded: boolean;
  message?: string;
}

export interface IGuardArgument {
  argument: any;
  argumentName: string;
}

export type GuardArgumentCollection = IGuardArgument[];

export class GuardResult implements IGuardResult {
  public succeeded: boolean;
  public message?: string;

  private constructor(succeeded: boolean, message?: string) {
    this.succeeded = succeeded;
    this.message = message;
  }

  public static ok(): GuardResult {
    return new GuardResult(true);
  }

  public static fail(message: string): GuardResult {
    return new GuardResult(false, message);
  }
}

export class Guard {
  /**
   * Check for null or undefined values
   */
  public static againstNullOrUndefined(argument: any, argumentName: string): GuardResult {
    if (argument === null || argument === undefined) {
      return GuardResult.fail(`${argumentName} is null or undefined`);
    }
    return GuardResult.ok();
  }

  /**
   * Check for null, undefined, or empty string
   */
  public static againstNullOrUndefinedOrEmpty(argument: string, argumentName: string): GuardResult {
    if (argument === null || argument === undefined || argument === '') {
      return GuardResult.fail(`${argumentName} is null, undefined, or empty`);
    }
    return GuardResult.ok();
  }

  /**
   * Check for null, undefined, empty string, or whitespace only
   */
  public static againstNullOrUndefinedOrEmptyOrWhitespace(argument: string, argumentName: string): GuardResult {
    if (argument === null || argument === undefined || argument === '' || argument.trim() === '') {
      return GuardResult.fail(`${argumentName} is null, undefined, empty, or whitespace`);
    }
    return GuardResult.ok();
  }

  /**
   * Check string length constraints
   */
  public static againstInvalidLength(argument: string, argumentName: string, minLength?: number, maxLength?: number): GuardResult {
    if (!argument) {
      return GuardResult.fail(`${argumentName} is null or undefined`);
    }

    if (minLength !== undefined && argument.length < minLength) {
      return GuardResult.fail(`${argumentName} must be at least ${minLength} characters long`);
    }

    if (maxLength !== undefined && argument.length > maxLength) {
      return GuardResult.fail(`${argumentName} must be no more than ${maxLength} characters long`);
    }

    return GuardResult.ok();
  }

  /**
   * Check numeric range constraints
   */
  public static againstInvalidRange(argument: number, argumentName: string, min?: number, max?: number): GuardResult {
    if (typeof argument !== 'number' || isNaN(argument)) {
      return GuardResult.fail(`${argumentName} must be a valid number`);
    }

    if (min !== undefined && argument < min) {
      return GuardResult.fail(`${argumentName} must be at least ${min}`);
    }

    if (max !== undefined && argument > max) {
      return GuardResult.fail(`${argumentName} must be no more than ${max}`);
    }

    return GuardResult.ok();
  }

  /**
   * Check array/collection constraints
   */
  public static againstEmptyArray(argument: any[], argumentName: string): GuardResult {
    if (!Array.isArray(argument)) {
      return GuardResult.fail(`${argumentName} must be an array`);
    }

    if (argument.length === 0) {
      return GuardResult.fail(`${argumentName} cannot be empty`);
    }

    return GuardResult.ok();
  }

  /**
   * Check for valid email format
   */
  public static againstInvalidEmail(argument: string, argumentName: string): GuardResult {
    if (!argument) {
      return GuardResult.fail(`${argumentName} is required`);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(argument)) {
      return GuardResult.fail(`${argumentName} must be a valid email address`);
    }

    return GuardResult.ok();
  }

  /**
   * Check for valid UUID format
   */
  public static againstInvalidUUID(argument: string, argumentName: string): GuardResult {
    if (!argument) {
      return GuardResult.fail(`${argumentName} is required`);
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(argument)) {
      return GuardResult.fail(`${argumentName} must be a valid UUID`);
    }

    return GuardResult.ok();
  }

  /**
   * Check for valid phone number format
   */
  public static againstInvalidPhoneNumber(argument: string, argumentName: string): GuardResult {
    if (!argument) {
      return GuardResult.fail(`${argumentName} is required`);
    }

    // Basic international phone number regex (supports +country code)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const cleanPhone = argument.replace(/[\s\-\(\)]/g, '');
    
    if (!phoneRegex.test(cleanPhone)) {
      return GuardResult.fail(`${argumentName} must be a valid phone number`);
    }

    return GuardResult.ok();
  }

  /**
   * Check for valid date
   */
  public static againstInvalidDate(argument: any, argumentName: string): GuardResult {
    const date = argument instanceof Date ? argument : new Date(argument);
    
    if (isNaN(date.getTime())) {
      return GuardResult.fail(`${argumentName} must be a valid date`);
    }

    return GuardResult.ok();
  }

  /**
   * Check future date constraint
   */
  public static againstFutureDate(argument: Date, argumentName: string): GuardResult {
    const result = this.againstInvalidDate(argument, argumentName);
    if (!result.succeeded) {
      return result;
    }

    if (argument > new Date()) {
      return GuardResult.fail(`${argumentName} cannot be in the future`);
    }

    return GuardResult.ok();
  }

  /**
   * Check past date constraint
   */
  public static againstPastDate(argument: Date, argumentName: string): GuardResult {
    const result = this.againstInvalidDate(argument, argumentName);
    if (!result.succeeded) {
      return result;
    }

    if (argument < new Date()) {
      return GuardResult.fail(`${argumentName} cannot be in the past`);
    }

    return GuardResult.ok();
  }

  /**
   * Validate multiple arguments at once
   */
  public static againstNullOrUndefinedBulk(args: GuardArgumentCollection): GuardResult {
    for (const arg of args) {
      const result = this.againstNullOrUndefined(arg.argument, arg.argumentName);
      if (!result.succeeded) {
        return result;
      }
    }
    return GuardResult.ok();
  }

  /**
   * Combine multiple guard results
   */
  public static combine(guardResults: GuardResult[]): GuardResult {
    for (const result of guardResults) {
      if (!result.succeeded) {
        return result;
      }
    }
    return GuardResult.ok();
  }

  /**
   * Assert that a condition is true, throw if false
   */
  public static assert(condition: boolean, message: string): void {
    if (!condition) {
      throw new Error(message);
    }
  }
}
