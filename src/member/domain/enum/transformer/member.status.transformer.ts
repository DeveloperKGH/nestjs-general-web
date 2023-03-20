import { ValueTransformer } from 'typeorm';
import { MemberStatus } from '../member.status';

export class MemberStatusTransformer implements ValueTransformer {
  to(entityValue: MemberStatus): string {
    if (!entityValue) {
      return null;
    }

    return entityValue.enumName;
  }

  from(databaseValue: string): MemberStatus {
    if (!databaseValue) {
      return null;
    }

    return MemberStatus.valueByName(databaseValue);
  }
}
