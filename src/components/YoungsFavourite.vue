<template>
  <div class="container">
    <div class="main_banner">
      <div class="header">
        <MainTitle size="lg">Young's Favourite</MainTitle>
      </div>
      <div class="cards" v-if="store.favouriteImages.length > 0">
        <Card
          v-for="image in store.favouriteImages"
          :key="image.title"
          :imageSrc="image.imageUrl"
          >{{ image.title }}</Card
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";
import MainTitle from "./MainTitle.vue";
import { useMediaStore } from "../stores/mediaStore.js";

const store = useMediaStore();
</script>

<style scoped lang="scss">
.main_banner {
  margin-top: 80px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 50px;
}
</style>
