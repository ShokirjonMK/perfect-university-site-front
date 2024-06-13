<template>
  <div class="logo d-flex">
    <div class="logomark">
      <img
        v-if="isDark"
        src="/image/header/uz-logoi-white.svg"
        alt="uz logo image"
      />
      <img v-else src="/image/header/uz-logoi.svg" alt="logo image" />
    </div>
    <h1 v-if="logoTitle" v-html="logoTitle" />
  </div>
</template>

<script>
export default {
  props: {
    logoTitle: {
      type: String,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss">
.logo {
  -webkit-transition: opacity 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
  transition: opacity 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
  gap: 4px;
  .logomark {
    flex-shrink: 0;
  }

  h1 {
    padding-top: 5px;
    margin-left: 8px;
    span.line-1 {
      position: relative;
      //&:after {
      //  content: "";
      //  position: absolute;
      //  width: 51px;
      //  height: 42px;
      //  right: -58px;
      //  bottom: 0;
      //  background: url("/image/90.svg");
      //}
      &.ru {
        &:after {
          top: 0;
          right: -64px;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    h1 {
      margin-top: 3px;
      font-size: 17px;
    }
  }
}

@media only screen and (max-width: 991px) {
  .logo {
    h1 {
      margin-top: 5px;
      font-size: 0.8rem !important;
      margin-left: 16px !important;
    }
  }
}
</style>
