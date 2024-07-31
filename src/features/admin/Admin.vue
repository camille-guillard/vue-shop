<script setup lang="ts">
import ProductForm from './components/ProductForm.vue';
</script>

<template>
  <div
    class="
      admin-container
      d-flex
      flex-row
      justify-content-center
      align-items-center
    "
  >
    <ProductForm />
  </div>
</template>

<style scoped lang="scss">
.admin-container {
  height: 100%;
}
</style>