import { Member } from '../../domain/entity/member.entity';

export class MemberServiceDto {
  id: number;

  loginId: string;

  password: string;

  nickname: string;

  createdAt: Date;

  updatedAt: Date;

  isActive: boolean;

  public toEntity(): Member {
    const member = new Member();
    member.loginId = this.loginId;
    member.password = this.password;
    member.nickname = this.nickname;
    member.isActive = true;
    return member;
  }

  public static fromEntity(member: Member): MemberServiceDto {
    const serviceDto = new MemberServiceDto();
    serviceDto.id = member.id;
    serviceDto.loginId = member.loginId;
    serviceDto.password = member.password;
    serviceDto.nickname = member.nickname;
    serviceDto.createdAt = member.createdAt;
    serviceDto.updatedAt = member.updatedAt;
    serviceDto.isActive = member.isActive;
    return serviceDto;
  }
}
