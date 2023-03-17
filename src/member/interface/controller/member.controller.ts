import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { SignupMemberRequestDto } from '../dto/signup-member.request.dto';
import { MemberResponseDto } from '../dto/member.response.dto';
import { BaseResponse } from '../../../global/common/dto/base.response';
import { MemberService } from '../../application/service/member.service';

import { SearchMemberRequestDto } from '../dto/search-member.request.dto';
import { IReadMemberRepository } from '../../domain/repository/read/read-member.repository';

@Controller()
export class MemberController {
  constructor(
    private readonly memberService: MemberService,
    @Inject('IReadMemberRepository')
    private readonly readMemberRepository: IReadMemberRepository,
  ) {}

  @Post('/sign-up')
  async signUp(@Body() request: SignupMemberRequestDto): Promise<BaseResponse<MemberResponseDto>> {
    const result = await this.memberService.signUp(request.toServiceDto());
    return BaseResponse.successBaseResponse(MemberResponseDto.fromServiceDto(result));
  }

  @Get('/members')
  async getMembers(@Query() param: SearchMemberRequestDto): Promise<BaseResponse<MemberResponseDto[]>> {
    return BaseResponse.successBaseResponse(await this.readMemberRepository.getMembers(param));
  }
}
