<script setup lang="ts">
defineProps<{
  open: boolean;
  transparent?: boolean;
}>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<template>
  <Teleport v-if="open" to="body">
    <div @click="emit('close')" class="calc" :class="{ transparent }"></div>
  </Teleport>
</template>

<style lang="scss" scoped>
.calc {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-color: #0000005e;
  z-index: 1;
}
.transparent {
  background-color: transparent;
}
</style>