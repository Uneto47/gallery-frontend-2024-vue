<script setup>
import { computed, ref } from 'vue';
import { useFavoritesStore } from '../store/favorites';

const props = defineProps(['image']);
const favoritesStore = useFavoritesStore();

const isFavorited = computed(() =>
  favoritesStore.getFavorites.find((fav) => fav.id === props.image.id)
);

const toggleFavorite = () => {
  if (isFavorited.value) {
    favoritesStore.removeFavorite(props.image.id);
  } else {
    favoritesStore.addFavorite(props.image);
  }
};

const isHovered = ref(false);
</script>

<template>
  <div class="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <img
      :src="isHovered ? image.images.original.url : image.images.fixed_height_still.url"
      alt="Image"
      class="w-full h-64 object-cover rounded-t-lg transition-transform duration-300"
      @mouseover="isHovered = true"  
      @mouseleave="isHovered = false" 
    />
    
    <div class="text-center p-4">
      <h3 class="flex font-semibold text-sm mb-2 h-8 justify-center">{{ image.title }}</h3>
    </div>

    <div class="flex justify-center pb-4">
      <button
        :class="isFavorited ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'"
        @click="toggleFavorite"
        class="px-4 py-2 rounded-lg text-sm font-medium"
      >
        {{ isFavorited ? 'Remover Favorito' : 'Favoritar' }}
      </button>
    </div>
  </div>
</template>