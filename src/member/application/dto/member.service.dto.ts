import { plainToClass } from 'class-transformer';
import { Member } from '../../domain/entity/member';
import { MemberRole } from '../../domain/enum/member.role';

export class MemberServiceDto {
  id: number;

  loginId: string;

  password: string;

  role: MemberRole;

  createdAt: Date;

  updatedAt: Date;

  public static fromEntity(member: Member): MemberServiceDto {
    return plainToClass(MemberServiceDto, member);
  }
}
