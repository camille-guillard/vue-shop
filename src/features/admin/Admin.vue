<script setup lang="ts">
import AdminNav from './components/AdminNav.vue';
</script>

<template>
  <div class="admin-container d-flex flex-row p-20">
    <AdminNav class="admin-nav" />
    <div
      class="
        admin-main
        flex-fill
        d-flex
        flex-row
        justify-content-center
        align-items-center
      "
    >
      <router-view v-slot="{ Component, route }">
        <Component :is="Component" :key="route.fullPath" />
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-container {
  height: 100%;
}

.admin-nav {
  margin-right: 20px;
  flex: 0 0 200px;
}
</style>