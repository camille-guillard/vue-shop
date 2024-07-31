<script setup lang="ts">
import type { Page } from '../interfaces';
import { reactive } from 'vue';
import Calc from './Calc.vue';

const state = reactive<{
  open: boolean;
}>({
  open: false,
});
</script>

<template>
  <header class="px-20 d-flex flex-row align-items-center">
    <a href="#" class="d-flex flex-row align-items-center mr-20">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
      />
      <span class="logo">Dyma</span>
    </a>
    <div class="d-flex flex-row align-items-center flex-fill actions-container">
      <ul class="d-flex flex-row flex-fill hide-xs flex-fill">
        <li class="mr-10">
          <router-link to="/boutique">Boutique</router-link>
        </li>
        <li>
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
      <ul class="d-flex flex-row hide-xs">
        <li class="mr-10">
          <a href="#">Inscription</a>
        </li>
        <li>
          <a href="#">Connexion</a>
        </li>
      </ul>
      <div class="menu-xs-container">
        <Calc
          :open="state.open"
          @close="state.open = false"
          :transparent="true"
        />
        <i
          @click="state.open = !state.open"
          class="fa-solid fa-bars show-xs"
        ></i>
        <Transition>
          <ul @click="state.open = false" v-if="state.open" class="menu card">
            <li>
              <router-link to="/boutique">Boutique</router-link>
            </li>
            <li>
              <router-link to="/admin">Admin</router-link>
            </li>
            <li>
              <a href="#">Inscription</a>
            </li>
            <li>
              <a href="#">Connexion</a>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/mixins';

header {
  background-color: var(--primary-1);
  a {
    color: var(--text-primary-color);
    img {
      width: 20px;
      margin-right: 5px;
    }
    .logo {
      font-weight: 700;
      font-size: 20px;
    }
  }

  i {
    @include mixins.sm {
      display: none;
    }
    justify-self: end;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }

  .actions-container {
    @include mixins.xs {
      justify-content: end;
    }
  }

  .menu-xs-container {
    position: relative;
  }

  .menu {
    z-index: 2;
    position: absolute;
    top: 20px;
    right: 0px;
    li {
      padding: 10px;
    }
    a {
      color: var(--text-color);
    }
  }
}

.v-leave-to,
.v-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.v-leave-active,
.v-enter-active {
  transition: all 0.2s;
}
</style>