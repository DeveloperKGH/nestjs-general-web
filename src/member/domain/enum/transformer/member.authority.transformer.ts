import { ValueTransformer } from 'typeorm';
import { EMemberAuthority } from '../member.authority';

export class MemberAuthorityTransformer implements ValueTransformer {
  to(entityValue: EMemberAuthority): string {
    if (!entityValue) {
      return null;
    }

    return entityValue.enumName;
  }

  from(databaseValue: string): EMemberAuthority {
    if (!databaseValue) {
      return null;
    }

    return EMemberAuthority.valueByName(databaseValue);
  }
}
