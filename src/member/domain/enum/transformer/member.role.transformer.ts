import { ValueTransformer } from 'typeorm';
import { EMemberRole } from '../member.role';

export class MemberRoleTransformer implements ValueTransformer {
  to(entityValue: EMemberRole): string {
    if (!entityValue) {
      return null;
    }

    return entityValue.enumName;
  }

  from(databaseValue: string): EMemberRole {
    if (!databaseValue) {
      return null;
    }

    return EMemberRole.valueByName(databaseValue);
  }
}
