import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeModel } from '../../../../global/common/infra/base-time.model';
import { Member } from '../../../domain/entity/member';
import { plainToClass } from 'class-transformer';

@Entity('member')
export class MemberModel extends BaseTimeModel {
  constructor(loginId: string, password: string) {
    super();
    this.loginId = loginId;
    this.password = password;
  }

  @PrimaryGeneratedColumn('increment')
  private id: number;

  @Column()
  private loginId!: string;

  @Column()
  private password!: string;

  public static create(member: Member): MemberModel {
    return new MemberModel(member.loginId, member.password);
  }

  public toEntity(): Member {
    return plainToClass(Member, this);
  }
}
