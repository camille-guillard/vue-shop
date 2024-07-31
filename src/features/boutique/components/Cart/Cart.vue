<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces';
import { computed, reactive } from 'vue';
import CartProductList from './CartProductList.vue';
import Calc from '../../../../components/Calc.vue';

const state = reactive<{
  open: boolean;
}>({
  open: false,
});

const props = defineProps<{
  cart: ProductCartInterface[];
}>();

const totalPrice = computed(() =>
  props.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0)
);

const emit = defineEmits<{
  (e: 'removeProductFromCart', productId: string): void;
}>();
</script>

<template>
  <div class="cart-container">
    <Transition mode="out-in">
      <div
        v-if="!state.open"
        @click="state.open = !state.open"
        class="
          cart-holder
          d-flex
          flex-row
          justify-content-center
          align-items-center
        "
      >
        <span class="tag">{{ cart.length }}</span>
        <i class="fa-solid fa-basket-shopping"></i>
      </div>
      <div v-else>
        <Calc :open="state.open" @close="state.open = false" />
        <div class="p-20 d-flex flex-column card ml-20">
          <h2 class="mb-10">Panier</h2>
          <CartProductList
            class="flex-fill"
            :cart="cart"
            @remove-product-from-cart="emit('removeProductFromCart', $event)"
          />
          <button class="btn btn-success">Commander ({{ totalPrice }}€)</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.cart-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2;
}

.tag {
  width: 15px;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background-color: var(--danger-1);
  position: absolute;
  top: 0px;
  right: 0px;
  color: var(--text-primary-color);
}

.cart-holder {
  position: relative;
  background-color: var(--primary-1);
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--primary-2);
  }
  width: 50px;
  height: 50px;
  border-radius: 50%;
  i {
    font-size: 20px;
    color: var(--text-primary-color);
  }
}

.v-leave-to,
.v-enter-from {
  transform: translateY(10px);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}
</style>