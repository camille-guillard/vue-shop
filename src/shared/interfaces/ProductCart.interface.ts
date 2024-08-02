import type { ProductInterface } from './Product.interface';

export interface ProductCartInterface extends ProductInterface {
  quantity: number;
}
