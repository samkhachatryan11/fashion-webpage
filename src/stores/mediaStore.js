import { defineStore } from "pinia";

export const useMediaStore = defineStore("mediaStore", {
  id: "media",
  state: () => ({
    arrivalImages: [
      {
        imageUrl: "src/assets/images/gray_background_girl.png",
        title: "Hoodies & Sweetshirt",
      },
      {
        imageUrl: "src/assets/images/violet_background_girl.png",
        title: "Coats & Parkas",
      },
      {
        imageUrl: "src/assets/images/blue_background_girl.png",
        title: "Tees & T-Shirt",
      },
    ],
    favouriteImages: [
      {
        imageUrl: "src/assets/images/a_girl.png",
        title: "Hoodies & Sweetshirt",
      },
      {
        imageUrl: "src/assets/images/2_girls.png",
        title: "Coats & Parkas",
      },
    ],
  }),
  getters: {
    getTitles(state) {
      return state.titles;
    },
    getImages(state) {
      return state.images;
    },
  },
  actions: {
    addTitle(title) {
      this.titles.push(title);
    },
    addImage(image) {
      this.images.push(image);
    },
    getImage(key) {
      return this.images[key];
    },
    removeTitle(index) {
      this.titles.splice(index, 1);
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
  },
});
