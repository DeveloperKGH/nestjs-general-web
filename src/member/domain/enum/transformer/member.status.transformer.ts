import { ValueTransformer } from 'typeorm';
import { EMemberStatus } from '../member.status';

export class MemberStatusTransformer implements ValueTransformer {
  to(entityValue: EMemberStatus): string {
    if (!entityValue) {
      return null;
    }

    return entityValue.enumName;
  }

  from(databaseValue: string): EMemberStatus {
    if (!databaseValue) {
      return null;
    }

    return EMemberStatus.valueByName(databaseValue);
  }
}
