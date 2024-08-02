import { defineStore } from 'pinia';

import {
  addProduct,
  deleteProduct,
  editProduct,
  fetchProducts,
} from '../../../shared/services/product.service';
import { useProducts } from '../../boutique/stores/productStore';
import type { ProductFormInterface, ProductInterface } from '@/shared/interfaces';

interface AdminProductState {
  products: ProductInterface[];
  isLoading: boolean;
  loaded: boolean;
}

export const useAdminProducts = defineStore('adminProduct', {
  state: (): AdminProductState => ({
    products: [],
    isLoading: false,
    loaded: false,
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true;
      const products = await fetchProducts();
      if (Array.isArray(products)) {
        this.products = products;
      } else {
        this.products = [products];
      }
      this.isLoading = false;
    },
    async deleteProduct(productId: string) {
      const productIndex = this.products.findIndex((p) => p._id === productId);
      if (productIndex !== -1) {
        await deleteProduct(productId);
        this.products.splice(productIndex, 1);
      }
    },
    async addProduct(productForm: ProductFormInterface) {
      const productStore = useProducts();
      const newProduct = await addProduct(productForm);
      if (newProduct) {
        productStore.needRefresh = true;
        this.products.push(newProduct);
      }
    },
    async editProduct(productId: string, productForm: ProductFormInterface) {
      const productStore = useProducts();
      const editedProduct = await editProduct(productId, productForm);
      if (editedProduct) {
        productStore.needRefresh = true;
        const stateProductIndex = this.products.findIndex(
          (p) => p._id === editedProduct._id
        );
        this.products[stateProductIndex] = editedProduct;
      }
    },
  },
});

export function initialFetchAdminProducts() {
  const adminProductStore = useAdminProducts();
  if (!adminProductStore.loaded) {
    adminProductStore.fetchProducts();
    adminProductStore.loaded = true;
  }
}