/**
 * Result.ts - Error Handling Pattern
 * 
 * CRITICAL: This is a BLOCKING DEPENDENCY for ALL developers
 * SRS Reference: Part05.8 Error Handling
 * Architecture: Clean Architecture - Core Domain Layer
 * 
 * Pattern: Railway Oriented Programming
 * Purpose: Type-safe error handling without exceptions
 * Usage: All use cases, domain services, repositories must return Result<T>
 */

export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error?: string;
  private _value?: T;

  private constructor(isSuccess: boolean, error?: string, value?: T) {
    if (isSuccess && error) {
      throw new Error('InvalidOperation: A result cannot be successful and contain an error');
    }
    if (!isSuccess && !error) {
      throw new Error('InvalidOperation: A failing result needs to contain an error message');
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this._value = value;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error('Cannot retrieve the value from a failed result. Use getErrorValue instead.');
    }
    return this._value as T;
  }

  public getErrorValue(): string {
    return this.error as string;
  }

  /**
   * Static factory for successful results
   */
  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  /**
   * Static factory for failed results
   */
  public static fail<U>(error: string): Result<U> {
    return new Result<U>(false, error);
  }

  /**
   * Static factory for combining multiple results
   */
  public static combine(results: Result<any>[]): Result<any> {
    for (const result of results) {
      if (result.isFailure) return result;
    }
    return Result.ok();
  }

  /**
   * Transform the value if result is successful
   */
  public map<U>(fn: (value: T) => U): Result<U> {
    if (this.isFailure) {
      return Result.fail<U>(this.error!);
    }
    try {
      return Result.ok<U>(fn(this._value!));
    } catch (error) {
      return Result.fail<U>(`Mapping failed: ${error}`);
    }
  }

  /**
   * Chain operations that return Results
   */
  public bind<U>(fn: (value: T) => Result<U>): Result<U> {
    if (this.isFailure) {
      return Result.fail<U>(this.error!);
    }
    return fn(this._value!);
  }
}
