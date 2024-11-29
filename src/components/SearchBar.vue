<script setup>
import { ref } from 'vue';

const query = ref('');
</script>

<template>
  <div class="search-bar flex justify-center py-1">
    <div class="relative w-full max-w-md">
      <input 
        type="text"
        class="w-full p-4 pl-12 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-400 transition-all"
        placeholder="Digite aqui..."
        v-model="query"
        @keyup.enter="$emit('search', query)"
      />
      <button
        @click="$emit('search', query)"
        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0v6m0-6H5m16 16l-4-4"/>
        </svg>
      </button>
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
