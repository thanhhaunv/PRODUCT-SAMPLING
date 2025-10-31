/**
 * @fileoverview Result Pattern Implementation
 * @package @psp/shared-core
 * @version 1.2.0
 * 
 * Generic Result<T> pattern for functional error handling.
 * Refs: SRS Part02.8 Technical Requirements - Error Handling
 */

export type ResultError = string;

export interface ResultSuccess<T> {
  isSuccess: true;
  isFailure: false;
  error: null;
  value: T;
}

export interface ResultFailure {
  isSuccess: false;
  isFailure: true;
  error: ResultError;
  value: null;
}

export type Result<T> = ResultSuccess<T> | ResultFailure;

export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: ResultError | null;
  private _value: T | null;

  private constructor(isSuccess: boolean, error?: ResultError, value?: T) {
    if (isSuccess && error) {
      throw new Error('InvalidOperation: A result cannot be successful and contain an error');
    }
    if (!isSuccess && !error) {
      throw new Error('InvalidOperation: A failing result needs to contain an error message');
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error || null;
    this._value = value || null;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error(`Can't get the value of an error result. Use 'errorValue' instead.`);
    }

    return this._value as T;
  }

  public getErrorValue(): ResultError {
    return this.error as ResultError;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  public static fail<U>(error: ResultError): Result<U> {
    return new Result<U>(false, error);
  }

  public static combine<U>(results: Result<U>[]): Result<U[]> {
    const values: U[] = [];
    
    for (const result of results) {
      if (result.isFailure) {
        return Result.fail<U[]>(result.getErrorValue());
      }
      values.push(result.getValue());
    }

    return Result.ok<U[]>(values);
  }

  /**
   * Transform result value if success, otherwise return failure
   */
  public map<U>(fn: (value: T) => U): Result<U> {
    if (this.isFailure) {
      return Result.fail<U>(this.getErrorValue());
    }

    try {
      const transformedValue = fn(this.getValue());
      return Result.ok<U>(transformedValue);
    } catch (error) {
      return Result.fail<U>(`Transformation failed: ${error}`);
    }
  }

  /**
   * Chain result operations (flatMap)
   */
  public flatMap<U>(fn: (value: T) => Result<U>): Result<U> {
    if (this.isFailure) {
      return Result.fail<U>(this.getErrorValue());
    }

    return fn(this.getValue());
  }
}
