import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  }),
  actions: {
    addFavorite(image) {
      if (!this.favorites.find((fav) => fav.id === image.id)) {
        this.favorites.push(image);
        this.saveFavoritesToLocalStorage();
      }
    },
    removeFavorite(imageId) {
      this.favorites = this.favorites.filter((fav) => fav.id !== imageId);
      this.saveFavoritesToLocalStorage();
    },
    saveFavoritesToLocalStorage() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
  },
  getters: {
    getFavorites: (state) => state.favorites,
  },
});
