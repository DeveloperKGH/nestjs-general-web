import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeModel } from '../../../../global/common/infra/base-time.model';
import { Member } from '../../../domain/entity/member';
import { MemberRoleTransformer } from '../../../domain/enum/transformer/member.role.transformer';
import { EMemberRole } from '../../../domain/enum/member.role';
import { EMemberStatus } from '../../../domain/enum/member.status';
import { MemberStatusTransformer } from '../../../domain/enum/transformer/member.status.transformer';
import { MemberServiceDto } from '../../../application/dto/member.service.dto';
import { MemberAuthorityModel } from './member-authority.model';

@Entity('member')
export class MemberModel extends BaseTimeModel {
  constructor(loginId: string, password: string, role: EMemberRole, status: EMemberStatus) {
    super();
    this.loginId = loginId;
    this.password = password;
    this.role = role;
    this.status = status;
  }

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  private loginId!: string;

  @Column()
  private password!: string;

  @Column({ type: 'varchar', transformer: new MemberRoleTransformer() })
  role: EMemberRole;

  @Column({ type: 'varchar', transformer: new MemberStatusTransformer() })
  status: EMemberStatus;

  @OneToMany(() => MemberAuthorityModel, (authority) => authority.member, { cascade: true })
  authorities: MemberAuthorityModel[];

  public static create(member: Member): MemberModel {
    const memberModel = new MemberModel(member.loginId, member.password, member.role, member.status);
    memberModel.authorities = member.authorities.authorities.map((a) => MemberAuthorityModel.create(a));
    return memberModel;
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
