import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';
import { LocalDateTime } from '@js-joda/core';
import { LocalDateTimeTransformer } from '../../util/transformer/local-date-time.transformer';

export abstract class BaseTimeModel {
  @Column({ type: 'timestamp', transformer: new LocalDateTimeTransformer() })
  createdAt: LocalDateTime;

  @Column({ type: 'timestamp', transformer: new LocalDateTimeTransformer() })
  updatedAt: LocalDateTime;

  @BeforeInsert()
  protected beforeInsert() {
    this.createdAt = LocalDateTime.now();
    this.updatedAt = LocalDateTime.now();
  }

  @BeforeUpdate()
  protected beforeUpdate() {
    this.updatedAt = LocalDateTime.now();
  }
}
