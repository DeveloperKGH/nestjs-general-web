import { Member } from '../../domain/entity/member';
import { EMemberRole } from '../../domain/enum/member.role';
import { LocalDateTime } from '@js-joda/core';

export class MemberServiceDto {
  id: number;

  loginId: string;

  password: string;

  role: EMemberRole;

  createdAt: LocalDateTime;

  updatedAt: LocalDateTime;

  public static fromEntity(member: Member): MemberServiceDto {
    const serviceDto = new MemberServiceDto();
    serviceDto.id = member.id;
    serviceDto.loginId = member.loginId;
    serviceDto.password = member.password;
    serviceDto.role = member.role;
    serviceDto.createdAt = member.createdAt;
    serviceDto.updatedAt = member.updatedAt;
    return serviceDto;
  }
}
