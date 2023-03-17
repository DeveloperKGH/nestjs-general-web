import { Member } from '../entity/member';

export interface ICommandMemberRepository {
  save(member: Member): Promise<Member>;

  existByLoginId(loginId: string): Promise<boolean>;
}
