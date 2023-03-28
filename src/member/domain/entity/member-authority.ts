import { EMemberAuthority } from '../enum/member.authority';
import { Member } from './member';

export class MemberAuthority {
  id: number;

  authority: EMemberAuthority;

  member: Member;
}
