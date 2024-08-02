import type { Category } from './type';

export interface ProductInterface {
  _id: string;
  createdAt: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: Category;
}

export interface ProductFormInterface {
  _id?: string;
  createdAt?: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: Category;
}
