<template>
  <h2><slot /></h2>
  <img
    class="md_img"
    v-if="size == 'md'"
    src="../assets/svg/Vector 8.svg"
    :class="{ [`h2__${size}`]: size }"
  />
  <img
    class="lg_img"
    :class="{ [`h2__${size}`]: size }"
    v-if="size == 'lg'"
    src="../assets/svg/Vector 9.svg"
  />
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "md",
    },
  },
};
</script>

<style scoped lang="scss">
h2 {
  position: absolute;
  font-family: var(--main_font);
  line-height: 50px;
  letter-spacing: 6%;
  font-weight: 900;
  font-size: 48px;
}

.md_img.h2__md {
  width: 186px;
  height: 35px;
  margin-left: 195px;
  margin-top: 23px;
  margin-bottom: 80px;
}

.lg_img.h2__lg {
  width: 160px;
  height: 32px;
  margin-left: 295px;
  margin-top: 32px;
  margin-bottom: 60px;
}

@media screen and (max-width: 500px) {
  h2 {
    font-size: 32px;
    letter-spacing: 4%;
  }
  .md_img.h2__md {
    width: 125px;
    height: 25px;
    margin-left: 130px;
    margin-top: 23px;
  }

  .lg_img.h2__lg {
    width: 110px;
    height: 32px;
    margin-left: 195px;
    margin-top: 25px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 350px) {
  h2 {
    font-size: 26px;
    letter-spacing: 4%;
  }

  .md_img.h2__md {
    width: 101px;
    height: 25px;
    margin-left: 105px;
    margin-top: 22px;
  }

  .lg_img.h2__lg {
    width: 85px;
    height: 32px;
    margin-left: 160px;
    margin-top: 22px;
    margin-bottom: 60px;
  }
}
</style>
