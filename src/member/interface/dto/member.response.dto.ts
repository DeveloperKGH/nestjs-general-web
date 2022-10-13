import { MemberServiceDto } from '../../application/dto/member.service.dto';

export class MemberResponseDto {
  id: number;

  loginId: string;

  nickname: string;

  createdAt: Date;

  updatedAt: Date;

  public static fromServiceDto(
    serviceDto: MemberServiceDto,
  ): MemberResponseDto {
    const responseDto = new MemberResponseDto();
    responseDto.id = serviceDto.id;
    responseDto.loginId = serviceDto.loginId;
    responseDto.nickname = serviceDto.nickname;
    responseDto.createdAt = serviceDto.createdAt;
    responseDto.updatedAt = serviceDto.updatedAt;
    return responseDto;
  }
}
