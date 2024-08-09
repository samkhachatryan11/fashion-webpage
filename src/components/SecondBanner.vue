<template>
  <div class="main_banner">
    <div class="main_banner__inner container">
      <div class="banner_image">
        <img src="../assets/images/girl_with_stars2.png" />
      </div>
      <div class="banner_info">
        <div class="white_bg"></div>
        <span class="banner_info_title">PAYDAY<br />SALE NOW</span>
        <span class="banner_info_description"
          >Spend minimal $100 get 30% off<br />
          voucher code for your next purchase</span
        >
        <span class="banner_info_description2">1 June - 10 June 2021</span>
        <span class="banner_info_description_terms_and_conditions"
          >*Terms & Conditions apply</span
        >
        <MainBtn class="banner_info_btn" size="extra_lg">Shop Now</MainBtn>
      </div>
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
.main_banner {
  background: linear-gradient(#f9df56, #e0c340);
  margin-top: 120px;

  &__inner {
    display: flex;
  }
}

.banner_image,
.banner_info {
  flex: 0 0 50%;
}

.banner_image {
  display: flex;
  align-items: flex-end;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
}

.banner_info {
  font-family: var(--main_font);
  display: flex;
  flex-direction: column;

  &_btn {
    margin-top: 45px;
    margin-left: 100px;
  }

  &_title {
    font-size: 82px;
    font-weight: 900;
    position: absolute;
    margin-left: 100px;
    line-height: 100px;
    margin-top: 100px;
  }

  &_description {
    margin-top: 120px;
    margin-left: 100px;
    letter-spacing: -2%;
    font-size: 26px;
    font-weight: 600;

    &_terms_and_conditions {
      margin-top: 30px;
      margin-left: 100px;
      letter-spacing: -2%;
      font-size: 26px;
      font-weight: 500;
    }
  }

  &_description2 {
    margin-top: 30px;
    margin-left: 100px;
    letter-spacing: -2%;
    font-size: 26px;
    font-weight: 700;
  }
}

.white_bg {
  background-color: #fff;
  width: 400px;
  height: 100px;
  rotate: -2deg;
  margin-left: 80px;
  margin-top: 95px;
}

@media screen and (max-width: 1440px) {
  .banner_info {
    &_description {
      margin-top: 100px;
      margin-left: 100px;
      letter-spacing: -2%;
      font-size: 20px;
      font-weight: 600;
    }

    &_title {
      font-size: 64px;
      font-weight: 900;
      position: absolute;
      margin-top: 105px;
      margin-left: 100px;
      line-height: 85px;
    }
  }

  .white_bg {
    background-color: #fff;
    width: 320px;
    height: 85px;
    rotate: -2deg;
    margin-top: 100px;
    margin-left: 80px;
  }
}

@media screen and (max-width: 1170px) {
  .banner_info {
    &_title {
      font-size: 57px;
      font-weight: 900;
      margin-top: 105px;
      margin-left: 100px;
      line-height: 80px;
    }

    &_description {
      font-size: 18px;
    }

    &_description2,
    &_description_terms_and_conditions {
      font-size: 20px;
    }
  }

  .white_bg {
    width: 290px;
    height: 80px;
  }
}

@media screen and (max-width: 950px) {
  .banner_info {
    &_title {
      font-size: 57px;
      font-weight: 900;
      margin-top: 105px;
      line-height: 70px;
    }
    &_description {
      font-size: 15px;
    }
    &_description2,
    &_description_terms_and_conditions {
      font-size: 16px;
    }
  }

  .white_bg {
    width: 260px;
    height: 70px;
  }
}

@media screen and (max-width: 840px) {
  .main_banner__inner {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .banner_info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    &_title {
      font-size: 52px;
      font-weight: 900;
      margin: 80px 0px 0px 0px;
      line-height: 70px;
    }
    &_description {
      margin: 100px 0px 0px 0px;
      font-size: 15px;
    }
    &_description2,
    &_description_terms_and_conditions {
      margin: 40px 0px 0px 0px;
      font-size: 16px;
    }
    &_btn {
      margin: 40px 0px 0px 0px;
    }
  }

  .white_bg {
    margin: 68px 25px 0px 0px;
    width: 250;
    height: 80px;
  }
}
</style>
