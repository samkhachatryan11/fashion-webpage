<template>
  <div class="brands">
    <img src="../assets/svg/h&m.svg" alt="h&m" />
    <img src="../assets/svg/obey.svg" alt="obey" />
    <img src="../assets/svg/shopify.svg" alt="shopify" />
    <img src="../assets/svg/lacoste.svg" alt="lacoste" />
    <img src="../assets/svg/levis.svg" alt="levis" />
    <img src="../assets/svg/amazon.svg" alt="amazon" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.brands {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--gold_color);
  gap: 30px;
  padding: 25px 220px;
  margin-top: 35px;

  img {
    mix-blend-mode: multiply;
    width: 150px;
    height: 50px;
  }
}

@media screen and (max-width: 1105px) {
  .brands {
    gap: 20px;
    padding: 20px 150px;
  }
}
</style>
