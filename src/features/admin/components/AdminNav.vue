<script setup lang="ts"></script>

<template>
  <nav class="card d-flex flex-column">
    <h3 class="mb-20">Produits</h3>
    <router-link class="mb-10" to="/admin/addproduct"
      >Ajouter un produit</router-link
    >
    <router-link class="mb-10" to="/admin/productlist"
      >Liste des produits</router-link
    >
  </nav>
</template>

<style scoped lang="scss"></style>