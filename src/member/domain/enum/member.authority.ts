import { Enum } from 'ts-jenum';
import { BaseEnum } from '../../../global/common/domain/base.enum';

@Enum('_code')
export class EMemberAuthority extends BaseEnum {
  static readonly BAN_MEMBER = new EMemberAuthority('BAN_MEMBER', '회원 밴');
  static readonly VIEW_MY_INFO = new EMemberAuthority('VIEW_MY_INFO', '내 정보 조회');
}
