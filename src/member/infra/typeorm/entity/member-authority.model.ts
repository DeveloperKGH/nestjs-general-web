import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EMemberAuthority } from '../../../domain/enum/member.authority';
import { MemberAuthorityTransformer } from '../../../domain/enum/transformer/member.authority.transformer';
import { MemberModel } from './member.model';
import { MemberAuthority } from '../../../domain/entity/member-authority';
import { BaseTimeModel } from '../../../../global/common/infra/base-time.model';

@Entity('member_authority')
export class MemberAuthorityModel extends BaseTimeModel {
  constructor(authority: EMemberAuthority) {
    super();
    this.authority = authority;
  }

  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', transformer: new MemberAuthorityTransformer() })
  authority: EMemberAuthority;

  @ManyToOne(() => MemberModel, (member) => member.authorities)
  member: MemberModel;

  @Column({ default: true })
  isActive: boolean;
  public static create(authority: MemberAuthority): MemberAuthorityModel {
    return new MemberAuthorityModel(authority.authority);
  }
}
