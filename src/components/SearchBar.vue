<script setup>
import { ref } from 'vue';

const query = ref('');
</script>

<template>
  <div class="search-bar flex justify-center py-4">
    <div class="relative w-full max-w-md">
      <input 
        type="text"
        class="w-full p-4 pl-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-400 transition-all"
        placeholder="Digite aqui..."
        v-model="query"
        @keyup.enter="$emit('search', query)"
      />
    </div>
  </div>
</template>

<style scoped>
.search-bar {
  padding: 1rem;
}

input:focus {
  border-color: #4C84FF;
  box-shadow: 0 0 0 2px rgba(76, 132, 255, 0.3);
}
</style>
