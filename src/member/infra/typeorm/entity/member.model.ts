import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeModel } from '../../../../global/common/infra/base-time.model';
import { Member } from '../../../domain/entity/member';
import { plainToClass } from 'class-transformer';
import { MemberRoleTransformer } from '../../../domain/enum/converter/member.role.transformer';
import { MemberRole } from '../../../domain/enum/member.role';

@Entity('member')
export class MemberModel extends BaseTimeModel {
  constructor(loginId: string, password: string, role: MemberRole) {
    super();
    this.loginId = loginId;
    this.password = password;
    this.role = role;
  }

  @PrimaryGeneratedColumn('increment')
  private id: number;

  @Column()
  private loginId!: string;

  @Column()
  private password!: string;

  @Column({ type: 'varchar', transformer: new MemberRoleTransformer() })
  role: MemberRole;

  public static create(member: Member): MemberModel {
    return new MemberModel(member.loginId, member.password, member.role);
  }

  public toEntity(): Member {
    return plainToClass(Member, this);
  }
}
