import { Enum } from 'ts-jenum';
import { BaseEnum } from '../../../global/common/domain/base.enum';

@Enum('_code')
export class MemberRole extends BaseEnum {
  static readonly ADMIN = new MemberRole('ADMIN', '관리자');
  static readonly MEMBER = new MemberRole('MEMBER', '일반회원');
}
