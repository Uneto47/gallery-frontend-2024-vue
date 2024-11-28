<template>
  <div id="app" class="flex flex-col min-h-screen bg-[#acaeaf]">
    <header class="app-header bg-gray-100 shadow-md p-4">
      <nav class="flex justify-between items-center container mx-auto">
        <h1 class="text-xl font-semibold text-blue-600">Galeria de Imagens</h1>
        <div class="flex space-x-4">
          <router-link 
            to="/" 
            class="hover:text-blue-600 transition-colors"
            active-class="font-bold text-blue-600"
          >
            Home
          </router-link>
          <router-link 
            to="/favorites" 
            class="hover:text-blue-600 transition-colors"
            active-class="font-bold text-blue-600"
          >
            Favoritos
          </router-link>
        </div>
      </nav>
    </header>

    <main class="app-content flex-1 container mx-auto p-4">
      <router-view />
    </main>

    <footer class="app-footer bg-gray-100 text-center p-4 border-t border-gray-200">
      <p>&copy; 2024 - Galeria de Imagens</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app-header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>
