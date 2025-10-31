import { UniqueEntityId } from './UniqueEntityId';

/**
 * Base Entity class for DDD
 * Refs: DDD patterns, Clean Architecture
 */
export abstract class Entity<T> {
  protected readonly _id: UniqueEntityId;
  protected props: T;

  constructor(props: T, id?: UniqueEntityId) {
    this._id = id ? id : new UniqueEntityId();
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!(object instanceof Entity)) {
      return false;
    }

    return this._id.equals(object._id);
  }

  get id(): UniqueEntityId {
    return this._id;
  }
}
