<script setup>
import { ref, onMounted } from 'vue';
import { searchImages, loadTrendingImages } from '../services/giphyApi'; 
import SearchBar from '../components/SearchBar.vue';
import ImageCard from '../components/ImageCard.vue';

const images = ref([]);

const fetchImages = async (query = '') => {
  if (query.trim() === '') {
    fetchRandomImages();  
  } else {
    images.value = await searchImages(query); 
  }
};

const fetchRandomImages = async () => {
  try {
    images.value = await loadTrendingImages(); 
  } catch (error) {
    console.error('Erro ao carregar imagens aleatórias:', error);
  }
};

onMounted(() => {
  fetchRandomImages();  
});
</script>

<template>
  <div class="home-container space-y-6">
    <SearchBar @search="fetchImages" />

    <div 
      v-if="images.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4"
    >
      <ImageCard
        v-for="image in images"
        :key="image.id"
        :image="image"
        class="translate"
      />
    </div>

    <div 
      v-else 
      class="text-center text-gray-500"
    >
      Nenhuma imagem encontrada. Tente uma nova busca.
    </div>
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