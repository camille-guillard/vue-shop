<script setup lang="ts">
import CartProduct from './CartProduct.vue';
import type { ProductCartInterface } from '@/interfaces';

const props = defineProps<{
  cart: ProductCartInterface[];
}>();

const emit = defineEmits<{
  (e: 'removeProductFromCart', productId: string): void;
}>();
</script>

<template>
  <div class="d-flex flex-column">
    <CartProduct
      v-for="product of cart"
      :product="product"
      :key="product._id"
      @remove-product-from-cart="emit('removeProductFromCart', $event)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
