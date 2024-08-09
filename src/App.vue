<template>
  <div>
    <Header />
    <FirstBanner />
    <BrandsBanner />
    <NewArrivals />
    <SecondBanner />
    <YoungsFavourite />
    <Mobile />
    <Community />
    <Footer />
  </div>
</template>

<script>
import BrandsBanner from "./components/BrandsBanner.vue";
import SecondBanner from "./components/SecondBanner.vue";
import NewArrivals from "./components/NewArrivals.vue";
import FirstBanner from "./components/FirstBanner.vue";
import YoungsFavourite from "./components/YoungsFavourite.vue";
import Header from "./components/Header.vue";
import Mobile from "./components/Mobile.vue";
import Community from "./components/Community.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    FirstBanner,
    BrandsBanner,
    NewArrivals,
    SecondBanner,
    YoungsFavourite,
    Mobile,
    Community,
    Footer,
  },
};
</script>

<style lang="scss"></style>
