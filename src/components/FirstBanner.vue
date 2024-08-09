<template>
  <div class="container">
    <div class="banner">
      <div class="banner_content">
        <div class="banner_content_bg">
          <div class="white_bg"></div>
          <div class="yellow_bg"></div>
        </div>
        <div class="banner_content_info">
          <h2 class="banner_content_slogan1">
            LET'S EXPLORE UNIQUE CLOTHES.
          </h2>
        </div>
        <h4 class="banner_content_slogan2">
          Live for Influential and Innovative fashion!
          <MainBtn class="banner_btn" size="lg">Shop Now</MainBtn>
        </h4>
      </div>
      <div class="banner_image">
        <img src="../assets/images/girl_with_stars.png" />
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
.banner {
  display: flex;
  flex-direction: row;
  background-color: #f4f6f5;
  border-radius: 40px;

  &_content {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  &_btn {
    margin-top: 30px;
  }

  &_content_bg {
    display: flex;
    flex-direction: column;
    gap: 95px;
    rotate: -2deg;
    margin: 70px 130px;
  }
  &_content_info {
    position: absolute;
    font-family: var(--main_font);
    display: flex;
    flex-direction: column;
    margin: 70px 150px;
    width: 400px;
  }
  &_content_slogan1 {
    font-size: 64px;
    line-height: 1.4;
    font-weight: 900;
    word-break: keep-all;
  }
  &_content_slogan2 {
    font-family: var(--main_font);
    margin-top: 40px;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: -1px;
    margin-left: 150px;
    margin-bottom: 50px;
  }

  &_image {
    display: flex;
    align-items: flex-end;

    img {
      width: 100%;
      height: 600px;
      max-width: 100%;
      padding: 0;
    }
  }
}

.white_bg {
  background-color: #ffffff;
  width: 250px;
  height: 80px;
}

.yellow_bg {
  background-color: var(--gold_color);
  width: 350px;
  height: 80px;
}

@media screen and (max-width: 1340px) {
  .banner {
    &_content {
      &_info {
        width: 250px;
        margin: 70px 95px;
        gap: 100px;
      }

      &_slogan1 {
        font-size: 40px;
        line-height: 1.3;
      }

      &_slogan2 {
        margin-top: 10px;
        font-size: 20px;
        margin-left: 100px;
      }

      &_bg {
        gap: 50px;
        margin: 62px 80px;
      }
    }
    &_image {
      img {
        width: 100%;
        height: 460px;
      }
    }
  }

  .white_bg {
    background-color: #ffffff;
    width: 150px;
    height: 55px;
  }

  .yellow_bg {
    background-color: var(--gold_color);
    width: 200px;
    height: 50px;
  }
}

@media screen and (max-width: 1020px) {
  .banner {
    &_content {
      &_info {
        width: 250px;
        margin: 70px 95px;
        gap: 100px;
      }

      &_slogan1 {
        font-size: 40px;
        line-height: 1.3;
      }

      &_slogan2 {
        margin-top: 10px;
        font-size: 16px;
        margin-left: 100px;
      }

      &_bg {
        gap: 50px;
        margin: 62px 80px;
      }
    }

    &_btn {
      margin-top: 25px;
    }

    &_image {
      img {
        width: 100%;
        height: 430px;
      }
    }
  }

  .white_bg {
    background-color: #ffffff;
    width: 150px;
    height: 55px;
  }

  .yellow_bg {
    background-color: var(--gold_color);
    width: 200px;
    height: 50px;
  }
}

@media screen and (max-width: 900px) {
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f6f5;
    border-radius: 40px;

    &_content {
      width: auto;
      margin: 20px;
      display: flex;
      flex-direction: column;

      &_slogan2 {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &_btn {
      margin-top: 15px;
    }

    &_image {
      img {
        width: 600px;
        height: 100%;
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f6f5;
    border-radius: 40px;
    overflow: hidden;

    &_content {
      display: flex;
      flex-direction: column;

      &_info {
        width: 200px;
      }

      &_slogan2 {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &_image {
      img {
        width: 600px;
        height: 100%;
      }
    }
  }

  .white_bg {
    padding: 0;
  }

  .yellow_bg {
    padding: 0;
  }
}
</style>
