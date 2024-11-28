import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [],
  }),
  actions: {
    addFavorite(image) {
      if (!this.favorites.find((fav) => fav.id === image.id)) {
        this.favorites.push(image);
      }
    },
    removeFavorite(imageId) {
      this.favorites = this.favorites.filter((fav) => fav.id !== imageId);
    },
  },
  getters: {
    getFavorites: (state) => state.favorites,
  },
});
