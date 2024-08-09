<template>
  <div class="container">
    <div class="new_arrivals">
      <div class="header">
        <MainTitle>NEW ARRIVALS</MainTitle>
      </div>
      <div class="cards" v-if="store.arrivalImages.length > 0">
        <Card
          v-for="image in store.arrivalImages"
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

console.log("images", store.images);
</script>

<style scoped lang="scss">
.new_arrivals {
  margin-top: 80px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 50px;
}
</style>
