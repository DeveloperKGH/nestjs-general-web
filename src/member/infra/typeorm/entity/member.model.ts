import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeModel } from '../../../../global/common/infra/base-time.model';
import { Member } from '../../../domain/entity/member';
import { MemberRoleTransformer } from '../../../domain/enum/transformer/member.role.transformer';
import { MemberRole } from '../../../domain/enum/member.role';
import { MemberStatus } from '../../../domain/enum/member.status';
import { MemberStatusTransformer } from '../../../domain/enum/transformer/member.status.transformer';
import { MemberServiceDto } from '../../../application/dto/member.service.dto';

@Entity('member')
export class MemberModel extends BaseTimeModel {
  constructor(loginId: string, password: string, role: MemberRole, status: MemberStatus) {
    super();
    this.loginId = loginId;
    this.password = password;
    this.role = role;
    this.status = status;
  }

  @PrimaryGeneratedColumn('increment')
  private id: number;

  @Column()
  private loginId!: string;

  @Column()
  private password!: string;

  @Column({ type: 'varchar', transformer: new MemberRoleTransformer() })
  role: MemberRole;

  @Column({ type: 'varchar', transformer: new MemberStatusTransformer() })
  status: MemberStatus;

  public static create(member: Member): MemberModel {
    return new MemberModel(member.loginId, member.password, member.role, member.status);
  }

  public toEntity(): Member {
    const entity = new Member();
    entity.id = this.id;
    entity.loginId = this.loginId;
    entity.password = this.password;
    entity.role = this.role;
    entity.status = this.status;
    entity.createdAt = this.createdAt;
    entity.updatedAt = this.updatedAt;
    return entity;
  }

  public toServiceDto(): MemberServiceDto {
    const serviceDto = new MemberServiceDto();
    serviceDto.id = this.id;
    serviceDto.loginId = this.loginId;
    serviceDto.password = this.password;
    serviceDto.role = this.role;
    serviceDto.createdAt = this.createdAt;
    serviceDto.updatedAt = this.updatedAt;
    return serviceDto;
  }
}
