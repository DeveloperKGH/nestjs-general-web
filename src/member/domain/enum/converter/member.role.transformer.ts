import { ValueTransformer } from 'typeorm';
import { MemberRole } from '../member.role';

export class MemberRoleTransformer implements ValueTransformer {
  to(entityValue: MemberRole): string {
    if (!entityValue) {
      return null;
    }

    return entityValue.enumName;
  }

  from(databaseValue: string): MemberRole {
    if (!databaseValue) {
      return null;
    }

    return MemberRole.valueByName(databaseValue);
  }
}
