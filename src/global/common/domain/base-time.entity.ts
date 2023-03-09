import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';

export abstract class BaseTimeEntity {
  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @BeforeInsert()
  protected beforeInsert() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  protected beforeUpdate() {
    this.updatedAt = new Date();
  }
}
