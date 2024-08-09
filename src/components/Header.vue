<template>
  <div class="container">
    <header class="main_header">
      <div class="logo">
        <img src="../assets/svg/Fashion_logo.svg" />
        <h1 class="logo_title">FASHION</h1>
      </div>
      <div class="menu">
        <ul class="menu_items">
          <li class="menu_items_item">CATALOGUE</li>
          <li class="menu_items_item">FASHION</li>
          <li class="menu_items_item">FAVOURITE</li>
          <li class="menu_items_item">LIFESTYLE</li>
          <MainBtn class="sign_up_btn">SIGN UP</MainBtn>
        </ul>
      </div>
      <img
        class="mobile_menu_icon"
        src="../assets/svg/mobile_menu_open.svg"
        v-if="!isMenuOpen"
        @click="openMenu()"
      />
      <div :class="{ mobile_menu_active: isMenuOpen }" class="mobile_menu">
        <img
          class="mobile_menu_close_icon"
          src="../assets/svg/mobile_menu_close.svg"
          v-if="isMenuOpen"
          @click="openMenu(), toggleActive()"
        />
        <ul class="mobile_menu_items">
          <li class="mobile_menu_items_item">CATALOGUE</li>
          <li class="mobile_menu_items_item">FASHION</li>
          <li class="mobile_menu_items_item">FAVOURITE</li>
          <li class="mobile_menu_items_item">LIFESTYLE</li>
          <MainBtn size="mobile" class="mobile_menu_sign_up_btn"
            >SIGN UP</MainBtn
          >
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import MainBtn from "./MainBtn.vue";

export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  components: {
    MainBtn,
  },

  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped lang="scss">
.main_header {
  font-family: var(--main_font);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;

  h1 {
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 3%;
  }

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
}

.menu {
  display: flex;
  flex-direction: row;
  align-items: center;

  &_items {
    font-family: var(--main_font);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    font-weight: 500;
    font-size: 16px;
    list-style: none;

    &_item {
      cursor: pointer;
    }

    &_item:hover {
      text-decoration: underline;
    }
  }
}

.mobile_menu {
  display: none;
  justify-content: center;
  position: absolute;
  width: 100%;
  padding: 40px 0px;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #000000;
  border-radius: 0px 0px 12px 12px;
  transition: 0.4s;

  &_items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: #ffffff;
    list-style-type: none;
  }

  &_sign_up_btn {
    margin-top: 15px;
  }
}

.mobile_menu_icon,
.mobile_menu_close_icon {
  position: absolute;
  height: 50px;
  width: 50px;
  right: 0;
  margin-right: 30px;
  padding: 0;
}

.mobile_menu_active {
  display: flex;
}

@media (width <= 900px) {
  .menu {
    display: none;
  }

  .mobile_menu_items_item {
    font-size: 20px;
  }
}

@media (width > 900px) {
  .mobile_menu_icon,
  .mobile_menu {
    display: none;
  }
}
</style>
