<template>
  <footer class="footer">
    <div class="footer_info">
      <h2>FASHION</h2>
      <span
        >Complete your style with awesome<br />
        clothes from us.</span
      >
      <div class="footer_info_social_media">
        <div class="footer_info_social_media_bg">
          <img src="../assets/svg/facebook.svg" alt="facebook" />
        </div>
        <div class="footer_info_social_media_bg">
          <img src="../assets/svg/insta.svg" alt="instagram" />
        </div>
        <div class="footer_info_social_media_bg">
          <img src="../assets/svg/twitter.svg" alt="twitter" />
        </div>
        <div class="footer_info_social_media_bg">
          <img src="../assets/svg/in.svg" alt="linkedin" />
        </div>
      </div>
    </div>
    <div class="footer_navigator">
      <ul class="footer_navigator_list">
        <li class="footer_navigator_list_title">Company</li>
        <li class="footer_navigator_list_item">About</li>
        <li class="footer_navigator_list_item">Contact us</li>
        <li class="footer_navigator_list_item">Support</li>
        <li class="footer_navigator_list_item">Careers</li>
      </ul>
      <ul class="footer_navigator_list">
        <li class="footer_navigator_list_title">Quick Link</li>
        <li class="footer_navigator_list_item">Share Location</li>
        <li class="footer_navigator_list_item">Orders Tracking</li>
        <li class="footer_navigator_list_item">Size Guide</li>
        <li class="footer_navigator_list_item">FAQs</li>
      </ul>
      <ul class="footer_navigator_list">
        <li class="footer_navigator_list_title">Legal</li>
        <li class="footer_navigator_list_item">Terms & conditions</li>
        <li class="footer_navigator_list_item">Privacy Policy</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  font-family: var(--main_font);
  background-color: #000000;
  padding: 80px 100px;

  &_info {
    display: flex;
    flex-direction: column;
    gap: 32px;

    h2 {
      font-weight: 900;
      font-size: 40px;
      letter-spacing: 3%;
      color: #ffffff;
    }

    > span {
      color: #8e8e8e;
      font-size: 18px;
    }

    &_social_media {
      display: flex;
      flex-direction: row;
      gap: 14px;

      &_bg {
        margin-top: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 52px;
        height: 52px;
        background-color: #ebd96b;
        border-radius: 15px;
        cursor: pointer;

        img {
          width: 25px;
          height: 20px;
        }
      }
    }
  }

  &_navigator {
    display: flex;
    flex-direction: row;
    gap: 100px;
    padding: 0px 5px;

    &_list {
      display: flex;
      flex-direction: column;
      gap: 28px;

      &_title {
        font-weight: 400;
        font-size: 18px;
        line-height: 40px;
        letter-spacing: 2%;
        color: #d9d9d9;
        list-style: none;
      }

      &_item {
        list-style: none;
        color: #8e8e8e;
        cursor: pointer;
        font-size: 12px;
      }
    }
  }
}

@media screen and (max-width: 860px) {
  .footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 45px;
    font-family: var(--main_font);
    background-color: #000000;
    padding: 80px 100px;

    &_info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
    }
  }
}

@media screen and (max-width: 450px) {
  .footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 45px;
    font-family: var(--main_font);
    background-color: #000000;
    padding: 80px 100px;

    &_info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
    }

    &_navigator {
      gap: 60px;

      &_list {
        gap: 25px;

        &_title {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
