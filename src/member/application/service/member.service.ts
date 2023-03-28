import { Inject, Injectable } from '@nestjs/common';
import { MemberServiceDto } from '../dto/member.service.dto';
import { ICommandMemberRepository } from '../../domain/repository/command-member.repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { Member } from '../../domain/entity/member';

@Injectable()
export class MemberService {
  constructor(
    @Inject('ICommandMemberRepository')
    private memberRepository: ICommandMemberRepository,
  ) {}

  @Transactional()
  async signUp(memberServiceDto: MemberServiceDto): Promise<MemberServiceDto> {
    const member = await Member.signUpMember(
      memberServiceDto.loginId,
      memberServiceDto.password,
      this.memberRepository,
    );
    return MemberServiceDto.fromEntity(member);
  }
}
