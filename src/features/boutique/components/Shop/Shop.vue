<script setup lang="ts">
import type {
  FiltersInterface,
  ProductInterface,
  FilterUpdate,
} from '../../../../shared/interfaces';
import ShopProductList from './ShopProductList.vue';
import ShopFilters from './ShopFilters.vue';
import { reactive } from 'vue';
import Calc from '../../../../components/Calc.vue';

const state = reactive<{
  open: boolean;
  isMobile: boolean;
}>({
  open: !matchMedia('(max-width: 575px)').matches,
  isMobile: matchMedia('(max-width: 575px)').matches,
});

defineProps<{
  products: ProductInterface[];
  filters: FiltersInterface;
  page: number;
  moreResults: boolean;
}>();

const emit = defineEmits<{
  (e: 'addProductToCart', productId: string): void;
  (e: 'updateFilter', updateFilter: FilterUpdate): void;
  (e: 'incPage'): void;
}>();
</script>

<template>
  <div class="d-flex flex-row shop-container">
    <Calc
      :open="state.isMobile && state.open"
      @close="state.open = false"
      :transparent="true"
    />
    <Transition>
      <ShopFilters
        v-if="state.open"
        :filters="filters"
        :nbr-of-products="products.length"
        @update-filter="emit('updateFilter', $event)"
        class="shop-filter"
      />
    </Transition>

    <div class="d-flex flex-column">
      <button
        @click="state.open = !state.open"
        class="
          btn btn-primary
          d-flex
          flex-row
          justify-content-center
          align-items-center
        "
      >
        <i class="fa-solid fa-magnifying-glass mr-10"></i>
        <span>Rechercher</span>
      </button>
      <ShopProductList
        class="flex-fill scrollable"
        @add-product-to-cart="emit('addProductToCart', $event)"
        @inc-page="emit('incPage')"
        :products="products"
        :more-results="moreResults"
        :page="page"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../../assets/scss/mixins';
.scrollable {
  overflow-y: auto;
  height: calc(100vh - 96px);
}

button {
  margin: 20px 20px 10px 20px;
  @include mixins.sm {
    display: none;
  }
}

.shop-container {
  position: relative;
}

.shop-filter {
  flex: 0 0 200px;
  @include mixins.xs {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: white;
    z-index: 2;
  }
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}
</style>