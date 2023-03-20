export class Page<T> {
  size: number;
  totalElements: number;
  numberOfElements: number;
  page: number;
  totalPages: number;
  items: T[];

  constructor(totalElements: number, numberOfElements: number, size: number, page: number, items: T[]) {
    this.totalElements = totalElements;
    this.numberOfElements = numberOfElements;
    this.size = size;
    this.page = page;
    this.totalPages = Math.ceil(totalElements / size);
    this.items = items;
  }
}
