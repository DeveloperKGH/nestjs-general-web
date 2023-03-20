import { EntityRepository } from 'typeorm';
import { IReadMemberRepository } from '../../../domain/repository/read/read-member.repository';
import { MemberModel } from '../entity/member.model';
import { MemberResponseDto } from '../../../interface/dto/member.response.dto';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { SearchMemberRequestDto } from '../../../interface/dto/search-member.request.dto';
import { Page } from '../../../../global/common/dto/page';

@EntityRepository(MemberModel)
export class TypeormReadMemberRepository extends BaseRepository<MemberModel> implements IReadMemberRepository {
  async getMembers(param: SearchMemberRequestDto): Promise<any | null> {
    const queryBuilder = this.createQueryBuilder('member').select([
      'member.id',
      'member.loginId',
      'member.password',
      'member.role',
      'member.status',
      'member.createdAt',
      'member.updatedAt',
    ]);

    if (param.page && param.size) {
      queryBuilder.offset(param.getOffset());
      queryBuilder.limit(param.getLimit());
      const results = await queryBuilder.disableEscaping().getManyAndCount();

      return new Page<MemberResponseDto>(
        results[1],
        results[0].length,
        param.size,
        param.page,
        results[0].map((r) => MemberResponseDto.fromServiceDto(r.toServiceDto())),
      );
    }

    const results = await queryBuilder.disableEscaping().getMany();
    return results.map((r) => MemberResponseDto.fromServiceDto(r.toServiceDto()));
  }
}
