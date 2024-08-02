import type { Category } from './type';

export interface FiltersInterface {
  search: string;
  priceRange: [number, number];
  category: Category;
}

export interface FilterUpdate {
  search?: string;
  priceRange?: [number, number];
  category?: Category;
}
