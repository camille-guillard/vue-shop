<script setup lang="ts">
import TheHeader from './components/Header.vue';
import TheFooter from './components/Footer.vue';
import Boutique from './features/boutique/Boutique.vue';
import Admin from './features/admin/Admin.vue';
import { reactive, type Component as C } from 'vue';
import type { Page } from './interfaces';
import { seed40articles, seed } from './data/seed';

const state = reactive<{
    page: Page
}>({
    page: 'Boutique'
})

const pages: { [s: string]: C } = {
    Boutique,
    Admin
}

function navigate(page: Page): void {
    state.page = page;
}

// seed('videogames4')
//seed40articles('videogames4');

</script>

<template>
  <div class="app-container">
    <TheHeader @navigate="navigate" :page="state.page" class="header" />
    <div class="app-content">
      <Suspense>
        <Component :is="pages[state.page]" />
      </Suspense>
    </div>
    <TheFooter class="footer hide-xs" />
  </div>
</template>

<style lang="scss">
@import './assets/scss/base.scss';
@import './assets/scss/debug.scss';

.app-container {
  height: 100vh;
  display: grid;
  grid-template-areas: 'header' 'app-content' 'footer';
  grid-template-rows: 48px auto 48px;
}

.header {
  grid-area: header;
}

.app-content {
  grid-area: app-content;
}

.footer {
  grid-area: footer;
}
</style>
