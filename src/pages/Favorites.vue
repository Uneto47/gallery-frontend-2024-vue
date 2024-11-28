<template>
  <div>
    <h1>Favoritos</h1>
    <div class="grid">
      <ImageCard
        v-for="image in favorites"
        :key="image.id"
        :image="image"
      />
    </div>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '../store/favorites';
import ImageCard from '../components/ImageCard.vue';

const favoritesStore = useFavoritesStore();
const favorites = favoritesStore.getFavorites;
</script>
