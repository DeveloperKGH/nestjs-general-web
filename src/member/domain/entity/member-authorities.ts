import { MemberAuthority } from './member-authority';

export class MemberAuthorities {
  authorities: MemberAuthority[] = [];

  public add(authority: MemberAuthority) {
    this.authorities.push(authority);
  }
}
