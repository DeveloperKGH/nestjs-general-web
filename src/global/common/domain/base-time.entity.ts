import { BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseTimeEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
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
