<template>
  <div class="card">
    <div class="card_img">
      <img :src="imageSrc" />
    </div>
    <div class="card_description">
      <div class="card_description_info">
        <h4 class="card_description_info_title"><slot /></h4>
        <span class="explore_now">Explore Now!</span>
      </div>
      <div class="card_description_arrow">
        <img src="../assets/svg/Arrow 1.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  border: none;
  background-color: transparent;

  &_description {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &_info {
      display: inline-block;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      &_title {
        display: inline-block;
        font-family: var(--main_font);
        font-weight: 500;
        font-size: 20px;
        letter-spacing: -4%;
      }
    }

    &_arrow {
      img {
        width: 100%;
        height: 22px;
      }
    }
  }
}

.explore_now {
  font-family: var(--main_font);
  font-weight: 400;
  color: #7f7f7f;
}
</style>
