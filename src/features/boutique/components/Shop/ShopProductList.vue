<script setup lang="ts">
import type { ProductInterface } from '../../../../shared/interfaces';
import ShopProduct from './ShopProduct.vue';
import { ref, watch } from 'vue';

const props = defineProps<{
  products: ProductInterface[];
  page: number;
  moreResults: boolean;
}>();

const emit = defineEmits<{
  (e: 'addProductToCart', productId: string): void;
  (e: 'incPage'): void;
}>();

const scrollablediv = ref<HTMLDivElement | null>(null);

watch(() => props.page, () => {
  if (props.page === 1) {
    scrollablediv.value?.scrollTo(0, 0);
  }
});
</script>

<template>
  <div ref="scrollablediv" class="d-flex flex-column p-20">
    <div class="grid mb-20">
      <ShopProduct
        @add-product-to-cart="emit('addProductToCart', $event)"
        v-for="product of products"
        :key="product._id"
        :product="product"
      />
    </div>
    <div
      v-if="moreResults && products.length"
      class="d-flex flex-row align-items-center justify-content-center"
    >
      <button @click="emit('incPage')" class="btn btn-primary">
        Charger plus de produits
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../../assets/scss/mixins' as m;
.grid {
  display: grid;
  grid-template-columns: 1fr;
  @include m.md {
    grid-template-columns: 1fr 1fr;
  }
  @include m.lg {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @include m.xl {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  grid-auto-rows: 400px;
  gap: 20px;
}
</style>