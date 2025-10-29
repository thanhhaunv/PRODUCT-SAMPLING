/**
 * Either.ts - Functional Error Handling
 * 
 * SRS Reference: Part05.8 Error Handling
 * Architecture: Functional Programming Pattern
 * 
 * Purpose: Type-safe error handling using Either monad
 * Pattern: Railway-oriented programming alternative to Result<T>
 * Usage: Functional composition of operations that can fail
 */

/**
 * Left represents an error/failure case
 */
export class Left<L> {
  readonly _tag: 'Left' = 'Left';
  
  constructor(readonly value: L) {}

  map<R>(_f: (value: any) => R): Either<L, R> {
    return new Left(this.value);
  }

  mapLeft<M>(f: (value: L) => M): Either<M, any> {
    return new Left(f(this.value));
  }

  bind<R>(_f: (value: any) => Either<L, R>): Either<L, R> {
    return new Left(this.value);
  }

  isLeft(): this is Left<L> {
    return true;
  }

  isRight(): this is Right<any> {
    return false;
  }

  fold<B>(onLeft: (left: L) => B, _onRight: (right: any) => B): B {
    return onLeft(this.value);
  }

  getOrElse<R>(_defaultValue: R): R {
    return _defaultValue;
  }

  toString(): string {
    return `Left(${this.value})`;
  }
}

/**
 * Right represents a success case
 */
export class Right<R> {
  readonly _tag: 'Right' = 'Right';
  
  constructor(readonly value: R) {}

  map<U>(f: (value: R) => U): Either<any, U> {
    return new Right(f(this.value));
  }

  mapLeft<M>(_f: (value: any) => M): Either<M, R> {
    return new Right(this.value);
  }

  bind<L, U>(f: (value: R) => Either<L, U>): Either<L, U> {
    return f(this.value);
  }

  isLeft(): this is Left<any> {
    return false;
  }

  isRight(): this is Right<R> {
    return true;
  }

  fold<B>(_onLeft: (left: any) => B, onRight: (right: R) => B): B {
    return onRight(this.value);
  }

  getOrElse(_defaultValue: any): R {
    return this.value;
  }

  toString(): string {
    return `Right(${this.value})`;
  }
}

/**
 * Either type - represents a value that can be either Left (error) or Right (success)
 */
export type Either<L, R> = Left<L> | Right<R>;

/**
 * Factory functions for creating Either instances
 */
export const either = {
  /**
   * Create a Left (error) instance
   */
  left<L>(value: L): Either<L, never> {
    return new Left(value);
  },

  /**
   * Create a Right (success) instance
   */
  right<R>(value: R): Either<never, R> {
    return new Right(value);
  },

  /**
   * Create Either from a value that might throw
   */
  fromTryCatch<L, R>(f: () => R, onError: (error: any) => L): Either<L, R> {
    try {
      return new Right(f());
    } catch (error) {
      return new Left(onError(error));
    }
  },

  /**
   * Create Either from a Promise
   */
  async fromPromise<L, R>(promise: Promise<R>, onError: (error: any) => L): Promise<Either<L, R>> {
    try {
      const result = await promise;
      return new Right(result);
    } catch (error) {
      return new Left(onError(error));
    }
  },

  /**
   * Create Either from nullable value
   */
  fromNullable<R>(value: R | null | undefined, errorValue: any): Either<any, R> {
    return value !== null && value !== undefined 
      ? new Right(value) 
      : new Left(errorValue);
  },

  /**
   * Combine multiple Either values - all must be Right for result to be Right
   */
  all<L, R>(eithers: Either<L, R>[]): Either<L, R[]> {
    const results: R[] = [];
    
    for (const either of eithers) {
      if (either.isLeft()) {
        return either;
      }
      results.push(either.value);
    }
    
    return new Right(results);
  },

  /**
   * Get the first Right value or the last Left if all are Left
   */
  any<L, R>(eithers: Either<L, R>[]): Either<L, R> {
    let lastLeft: Either<L, R> | null = null;
    
    for (const either of eithers) {
      if (either.isRight()) {
        return either;
      }
      lastLeft = either;
    }
    
    return lastLeft || new Left(null as any);
  },

  /**
   * Partition Either array into Left and Right arrays
   */
  partition<L, R>(eithers: Either<L, R>[]): { lefts: L[]; rights: R[] } {
    const lefts: L[] = [];
    const rights: R[] = [];
    
    eithers.forEach(either => {
      if (either.isLeft()) {
        lefts.push(either.value);
      } else {
        rights.push(either.value);
      }
    });
    
    return { lefts, rights };
  },

  /**
   * Check if Either is Left
   */
  isLeft<L, R>(either: Either<L, R>): either is Left<L> {
    return either.isLeft();
  },

  /**
   * Check if Either is Right
   */
  isRight<L, R>(either: Either<L, R>): either is Right<R> {
    return either.isRight();
  },

  /**
   * Sequence operations that return Either
   */
  chain<L, A, B>(f: (a: A) => Either<L, B>) {
    return (either: Either<L, A>): Either<L, B> => {
      return either.bind(f);
    };
  },

  /**
   * Map over Right values
   */
  map<L, A, B>(f: (a: A) => B) {
    return (either: Either<L, A>): Either<L, B> => {
      return either.map(f);
    };
  }
};

/**
 * Utility type for extracting Left type from Either
 */
export type ExtractLeft<E> = E extends Either<infer L, any> ? L : never;

/**
 * Utility type for extracting Right type from Either
 */
export type ExtractRight<E> = E extends Either<any, infer R> ? R : never;
