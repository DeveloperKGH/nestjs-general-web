import EncryptionUtil from '../../../global/util/encryption.util';
import { EMemberRole } from '../enum/member.role';
import { ICommandMemberRepository } from '../repository/command-member.repository';
import { HttpException, HttpStatus } from '@nestjs/common';
import { EMemberStatus } from '../enum/member.status';
import { LocalDateTime } from '@js-joda/core';
import { MemberAuthorities } from './member-authorities';
import { MemberAuthority } from './member-authority';
import { EMemberAuthority } from '../enum/member.authority';

export class Member {
  id: number;

  loginId!: string;

  password!: string;

  role: EMemberRole;

  status: EMemberStatus;

  authorities: MemberAuthorities = new MemberAuthorities();

  createdAt: LocalDateTime;

  updatedAt: LocalDateTime;

  public static async signUpMember(
    loginId: string,
    password: string,
    repository: ICommandMemberRepository,
  ): Promise<Member> {
    if (await this.checkLoginIdDuplication(loginId, repository))
      throw new HttpException('Duplicated LoginId', HttpStatus.CONFLICT);

    const member = new Member();
    member.loginId = loginId;
    member.password = await EncryptionUtil.hash(password);
    member.role = EMemberRole.MEMBER;
    member.status = EMemberStatus.ACTIVE;
    member.addAuthoritiesForMember();

    return await repository.save(member);
  }

  public static async checkLoginIdDuplication(loginId: string, repository: ICommandMemberRepository): Promise<boolean> {
    return await repository.existByLoginId(loginId);
  }

  public addAuthoritiesForMember() {
    const authority = new MemberAuthority();
    authority.authority = EMemberAuthority.VIEW_MY_INFO;
    this.authorities.add(authority);
  }
}
