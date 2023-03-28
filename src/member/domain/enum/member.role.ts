import { Enum } from 'ts-jenum';
import { BaseEnum } from '../../../global/common/domain/base.enum';

@Enum('_code')
export class EMemberRole extends BaseEnum {
  static readonly ADMIN = new EMemberRole('ADMIN', '관리자');
  static readonly MEMBER = new EMemberRole('MEMBER', '일반회원');
}
