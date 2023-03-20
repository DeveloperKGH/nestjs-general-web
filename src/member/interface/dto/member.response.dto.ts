import { MemberServiceDto } from '../../application/dto/member.service.dto';
import { EnumResponse } from '../../../global/common/dto/enum.response';

export class MemberResponseDto {
  id: number;

  loginId: string;

  role: EnumResponse;

  createdAt: Date;

  updatedAt: Date;

  public static fromServiceDto(serviceDto: MemberServiceDto): MemberResponseDto {
    const responseDto = new MemberResponseDto();
    responseDto.id = serviceDto.id;
    responseDto.loginId = serviceDto.loginId;
    responseDto.createdAt = serviceDto.createdAt;
    responseDto.updatedAt = serviceDto.updatedAt;
    responseDto.role = serviceDto.role.toCodeName();
    return responseDto;
  }
}
