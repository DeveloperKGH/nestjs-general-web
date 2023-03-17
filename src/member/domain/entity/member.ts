import EncryptionUtil from '../../../global/util/encryption.util';

export class Member {
  constructor(loginId: string) {
    this.loginId = loginId;
  }

  id: number;

  loginId!: string;

  password!: string;

  public async setHashedPassword(password: string) {
    this.password = await EncryptionUtil.hash(password);
  }
}
