import { MemberServiceDto } from '../../application/dto/member.service.dto';
import { EnumResponse } from '../../../global/common/dto/enum.response';

export class MemberResponseDto {
  id: number;

  loginId: string;

  role: EnumResponse;

  createdAt: Date;

  updatedAt: Date;

  public static fromServiceDto(serviceDto: MemberServiceDto): MemberResponseDto {
    const response = new MemberResponseDto();
    response.id = serviceDto.id;
    response.loginId = serviceDto.loginId;
    response.createdAt = serviceDto.createdAt;
    response.updatedAt = serviceDto.updatedAt;
    response.role = serviceDto.role.toCodeName();
    return response;
  }
}
