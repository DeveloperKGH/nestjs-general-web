import { IsOptional } from 'class-validator';

export abstract class PageRequest {
  @IsOptional()
  page?: number;

  @IsOptional()
  size?: number;

  getOffset(): number {
    return (this.page - 1) * this.size;
  }

  getLimit(): number {
    return this.size;
  }
}
