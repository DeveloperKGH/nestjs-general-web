import { plainToClass } from 'class-transformer';
import { Member } from '../../domain/entity/member';

export class MemberServiceDto {
  id: number;

  loginId: string;

  password: string;

  nickname: string;

  createdAt: Date;

  updatedAt: Date;

  isActive: boolean;

  public toEntity(): Member {
    return new Member(this.loginId);
  }

  public static fromEntity(member: Member): MemberServiceDto {
    return plainToClass(MemberServiceDto, member);
  }
}
