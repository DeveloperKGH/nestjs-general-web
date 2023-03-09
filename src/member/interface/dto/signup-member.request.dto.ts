import { IsEmail, IsNotEmpty } from 'class-validator';
import { MemberServiceDto } from '../../application/dto/member.service.dto';

export class SignupMemberRequestDto {
  @IsEmail()
  @IsNotEmpty()
  loginId: string;

  @IsNotEmpty()
  password: string;

  public toServiceDto(): MemberServiceDto {
    const memberServiceDto = new MemberServiceDto();
    memberServiceDto.loginId = this.loginId;
    memberServiceDto.password = this.password;
    return memberServiceDto;
  }
}
