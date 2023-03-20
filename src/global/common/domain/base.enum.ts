import { EnumResponse } from '../dto/enum.response';
import { EnumType } from 'ts-jenum';

export abstract class BaseEnum extends EnumType<any>() {
  protected constructor(readonly _code: string, readonly _name: string) {
    super();
  }

  get code(): string {
    return this._code;
  }

  get name(): string {
    return this._name;
  }

  toCodeName(): EnumResponse {
    return new EnumResponse(this._code, this._name);
  }
}
