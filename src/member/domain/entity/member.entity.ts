import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTimeEntity } from '../../../global/common/domain/base-time.entity';
import EncryptionUtil from '../../../global/util/encryption.util';

@Entity()
export class Member extends BaseTimeEntity {
  constructor(loginId: string) {
    super();
    this.loginId = loginId;
  }

  @PrimaryGeneratedColumn('increment')
  private id: number;

  @Column({ name: 'login_id' })
  private loginId!: string;

  @Column({ name: 'password' })
  private password!: string;

  public async setHashedPassword(password: string) {
    this.password = await EncryptionUtil.hash(password);
  }
}
