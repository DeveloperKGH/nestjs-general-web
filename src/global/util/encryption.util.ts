import * as bcrypt from 'bcrypt';

export default class EncryptionUtil {
  /**
   * 입력받은 평문에 bcrypt 알고리즘 적용
   *
   * @param password
   */
  static async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 8);
  }

  /**
   * 저장되어 있는 password 와 입력받은 password 를 비교
   *
   * @param password
   * @param hashedPassword
   */
  static async match(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
