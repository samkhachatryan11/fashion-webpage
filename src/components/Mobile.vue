<template>
  <div class="container">
    <div class="mobile">
      <div class="mobile_info">
        <h3>
          DOWNLOAD APP &<br />
          GET THE VOUCHER!
        </h3>
        <span
          >Get 30% off for first transaction using<br />
          Rondovision mobile app for now.</span
        >
        <div class="mobile_info_download">
          <img src="../assets/svg/app_store.svg" />
          <img src="../assets/svg/google_play.svg" />
        </div>
      </div>
      <div class="mobile_image">
        <img src="../assets/images/phone.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.mobile {
  display: flex;
  flex-direction: row;
  margin-top: 100px;

  &_info {
    font-family: var(--main_font);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    h3 {
      font-size: 40px;
      line-height: 150%;
      letter-spacing: 6%;
      font-weight: 900;
    }

    span {
      line-height: 35px;
      letter-spacing: -4%;
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 40px;
    }

    &_download {
      display: flex;
      flex-direction: row;
      gap: 10px;

      img {
        width: 100px;
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 1080px) {
  .mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    &_info {
      align-items: center;
    }
  }
}

@media screen and (max-width: 850px) {
  .mobile_info {
    width: 100%;

    h3 {
      font-size: 30px;
    }

    span {
      font-size: 14px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 400px) {
  .mobile_info {
    h3 {
      font-size: 26px;
    }

    span {
      font-size: 12px;
      margin-top: 5px;
      margin-bottom: 15px;
    }
  }
}
</style>
