<template>
  <div>
    <button :class="{ [`btn__${size}`]: size }">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    customStyle: {
      type: Object,
      default: () => ({}),
    },
    size: {
      type: String,
      default: "md",
    },
  },
};
</script>

<style scoped lang="scss">
button {
  font-family: var(--main_font);
  font-weight: 500;
  font-size: 18px;
  padding: 12px 20px;
  border-radius: 7px;
  border: none;
  background-color: black;
  color: #fefefe;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

button.btn__sm {
  padding: 10px 18px;
}

button.btn__md {
  padding: 8px 18px;
  letter-spacing: -3%;
}

button.btn__lg {
  padding: 14px 26px;
  font-size: 20px;
}

button.btn__extra_lg {
  padding: 14px 32px;
}

button.btn__mobile {
  padding: 8px 18px;
  letter-spacing: -3%;
  background-color: #ffffff;
  color: #000000;
}
</style>
