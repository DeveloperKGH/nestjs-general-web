import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { MemberServiceDto } from '../dto/member.service.dto';
import { ICommandMemberRepository } from '../../domain/repository/command-member.repository';
import { Transactional } from 'typeorm-transactional-cls-hooked';

@Injectable()
export class MemberService {
  constructor(
    @Inject('ICommandMemberRepository')
    private memberRepository: ICommandMemberRepository,
  ) {}

  @Transactional()
  async signUp(memberServiceDto: MemberServiceDto): Promise<MemberServiceDto> {
    if (await this.checkLoginIdDuplication(memberServiceDto.loginId))
      throw new HttpException('Duplicated LoginId', HttpStatus.CONFLICT);

    const member = memberServiceDto.toEntity();
    await member.setHashedPassword(memberServiceDto.password);

    await this.memberRepository.save(member);

    return MemberServiceDto.fromEntity(member);
  }

  public async checkLoginIdDuplication(loginId: string): Promise<boolean> {
    return await this.memberRepository.existByLoginId(loginId);
  }
}
