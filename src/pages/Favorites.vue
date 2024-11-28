<script setup>
import { useFavoritesStore } from '../store/favorites';
import { useRouter } from 'vue-router';
import ImageCard from '../components/ImageCard.vue';

const favoritesStore = useFavoritesStore();
const favorites = favoritesStore.getFavorites;
console.log(favorites)
const router = useRouter();

const goToHome = () => {
  router.push('/');
};
</script>

<template>
  <div v-if="favorites.length" class="flex flex-col w-full items-center">
    <h1 class="text-3xl font-bold text-gray-800 mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-blue-500">
        Favoritos
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
        <ImageCard
          v-for="image in favorites"
          :key="image.id"
          :image="image"
          class="translate"
        />
    </div>
  </div>
  <div v-else class="flex flex-col gap-2 mt-32 items-center justify-center text-gray-500">
    <p class="text-xl font-semibold mb-4">Ops! Nenhuma imagem encontrada.</p>
    <p class="text-lg text-gray-600 mb-4">Parece que você está sem favoritos... Vamos dar uma olhada em algo divertido enquanto isso!</p>
    <img src="../assets/icons/person.png" alt="Imagem divertida"  class="w-40 mb-4" />
    <button 
      @click="goToHome" 
      class="text-blue-500 bg-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
    >
      Voltar para a Home
    </button>
  </div>
</template>

<style scoped>
.translate {
  transition: transform 0.4s ease-in-out;
}
.translate:hover {
  transform: scale(1.05);
}
</style>
