import { Enum } from 'ts-jenum';
import { BaseEnum } from '../../../global/common/domain/base.enum';

@Enum('_code')
export class EMemberStatus extends BaseEnum {
  static readonly ACTIVE = new EMemberStatus('ACTIVE', '활성', true);
  static readonly INACTIVE = new EMemberStatus('INACTIVE', '비활성', false);

  private constructor(readonly _code: string, readonly _name: string, readonly isNotifiable: boolean) {
    super(_code, _name);
    this.isNotifiable = isNotifiable;
  }
}
