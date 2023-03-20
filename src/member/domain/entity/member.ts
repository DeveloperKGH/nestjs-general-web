import EncryptionUtil from '../../../global/util/encryption.util';
import { MemberRole } from '../enum/member.role';
import { ICommandMemberRepository } from '../repository/command-member.repository';
import { HttpException, HttpStatus } from '@nestjs/common';

export class Member {
  id: number;

  loginId!: string;

  password!: string;

  role: MemberRole;

  public static async signUp(loginId: string, password: string, repository: ICommandMemberRepository): Promise<Member> {
    if (await this.checkLoginIdDuplication(loginId, repository))
      throw new HttpException('Duplicated LoginId', HttpStatus.CONFLICT);

    const member = new Member();
    member.loginId = loginId;
    member.password = await EncryptionUtil.hash(password);
    member.role = MemberRole.MEMBER;

    return await repository.save(member);
  }

  public static async checkLoginIdDuplication(loginId: string, repository: ICommandMemberRepository): Promise<boolean> {
    return await repository.existByLoginId(loginId);
  }
}
