<template>
  <div class="community">
    <h2>
      JOIN SHOPPING COMMUNITY TO<br />
      GET MONTHLY PROMO
    </h2>
    <span>Type your email down below and be young wild generation</span>
    <div class="input_div">
      <input type="text" placeholder="Add your email here" />
      <MainBtn size="sm">SEND</MainBtn>
    </div>
  </div>
</template>

<script>
import MainBtn from "./MainBtn.vue";

export default {
  components: {
    MainBtn,
  },
};
</script>

<style scoped lang="scss">
.community {
  font-family: var(--main_font);
  padding: 120px 0px;
  background-color: #e5c643;
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  h2 {
    color: #ffffff;
    text-align: center;
    font-size: 55px;
    line-height: 70px;
    font-weight: 900;
  }

  span {
    color: #ffffff;
    font-weight: 300;
    font-size: 34px;
    line-height: 35px;
    letter-spacing: 3%;
  }
}

.input_div {
  display: flex;
  align-items: center;
  padding: 8px 8px;
  background-color: #ffffff;
  gap: 50px;
  border: none;
  border-radius: 10px;
  margin-top: 10px;

  input {
    font-family: var(--main_font);
    background: none;
    border: none;
    font-size: 18px;
    margin-left: 15px;
  }
}

textarea:focus,
input:focus {
  outline: none;
}

@media screen and (max-width: 1080px) {
  .community {
    h2 {
      font-size: 36px;
    }

    span {
      color: #ffffff;
      font-weight: 300;
      font-size: 22px;
      line-height: 35px;
      letter-spacing: 3%;
    }

    input {
      font-size: 12px;
      margin-left: 15px;
    }
  }
}
</style>
