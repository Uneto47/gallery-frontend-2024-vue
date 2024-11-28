<template>
  <div id="app" class="flex flex-col min-h-screen bg-[#acaeaf]">
  <header class="app-header fixed top-0 left-0 w-full bg-gray-100 shadow-md p-4 z-10">
    <nav class="flex justify-between items-center container mx-auto">
      <div class="flex items-center gap-1">
        <h1 class="text-xl font-semibold text-blue-600">Galeria de Imagens</h1>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0v6m0-6H5m16 16l-4-4"/>
        </svg>
      </div>
      <div class="flex space-x-4">
        <router-link 
          to="/" 
          class="hover:text-blue-600 font-bold transition-colors border-b-2 border-transparent hover:border-blue-600"
          active-class="font-bold text-blue-600"
        >
          Home
        </router-link>
        <router-link 
          to="/favorites" 
          class="hover:text-blue-600 font-bold transition-colors border-b-2 border-transparent hover:border-blue-600"
          active-class="font-bold text-blue-600"
        >
          Favoritos
        </router-link>
      </div>
    </nav>
  </header>
    <main class="app-content flex-1 container mx-auto p-4 mt-[70px]">
      <router-view />
    </main>
    <footer class="app-footer bg-gray-100 text-center p-2 border-t border-gray-300">
      <p>&copy; 2024 - Galeria de Imagens</p>
    </footer>
  </div>
</template>


<style scoped>
.app-header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-footer p {
  color: #666;
  font-size: 0.875rem;
}
</style>
