import { MemberModel } from './entity/member.model';
import { AbstractRepository, EntityRepository } from 'typeorm';
import { ICommandMemberRepository } from '../../domain/repository/command-member.repository';
import { Member } from '../../domain/entity/member';

@EntityRepository(MemberModel)
export class TypeormCommandMemberRepository
  extends AbstractRepository<MemberModel>
  implements ICommandMemberRepository
{
  async save(member: Member): Promise<Member> {
    const model = await this.repository.save(MemberModel.create(member));
    return model.toEntity();
  }
  async existByLoginId(loginId: string): Promise<boolean> {
    return (await this.repository.count({ where: { loginId } })) > 0;
  }
}
