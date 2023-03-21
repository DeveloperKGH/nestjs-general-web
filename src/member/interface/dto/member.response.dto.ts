import { MemberServiceDto } from '../../application/dto/member.service.dto';
import { EnumResponse } from '../../../global/common/dto/enum.response';
import { DateTimeUtil } from '../../../global/util/date-time.util';

export class MemberResponseDto {
  id: number;

  loginId: string;

  role: EnumResponse;

  createdAt: string;

  updatedAt: string;

  public static fromServiceDto(serviceDto: MemberServiceDto): MemberResponseDto {
    const response = new MemberResponseDto();
    response.id = serviceDto.id;
    response.loginId = serviceDto.loginId;
    response.role = serviceDto.role.toCodeName();
    response.createdAt = DateTimeUtil.toString(serviceDto.createdAt);
    response.updatedAt = DateTimeUtil.toString(serviceDto.updatedAt);
    return response;
  }
}
