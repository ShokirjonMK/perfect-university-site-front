<template>
  <div class="logo d-flex">
    <div class="logomark">
      <img
        v-if="$i18n.locale === 'ru'"
        src="/image/header/logo-uz.svg"
        style="max-width: 58px"
        alt="Logo uz"
      />
      <img
        v-if="$i18n.locale === 'en'"
        src="/image/header/logo-uz.svg"
        style="max-width: 58px"
        alt="Logo uz"
      />
      <img
        v-if="$i18n.locale === 'sr'"
        src="/image/header/logo-uz.svg"
        style="max-width: 58px"
        alt="Logo uz"
      />
    </div>
    <img
      src="/image/header/logo-uz.svg"
      class="d-md-none"
      width="58px"
      alt="Logo uz"
    />

    <h1 v-if="logoTitle" v-html="logoTitle" />
  </div>
</template>

<script>
export default {
  props: {
    logoTitle: {
      type: String,
    },
  },
}
</script>
<style lang="scss" scoped>
.logo {
  -webkit-transition: opacity 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
  transition: opacity 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
  gap: 4px;
  .logomark {
    flex-shrink: 0;
    & img {
      width: 42px;
      height: 43px;
    }
  }

  h1 {
    color: #d3e7ff;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 110%;
    padding-top: 0;
    margin-left: 0;
    span.line-1 {
      position: relative;
      &.ru {
        &:after {
          top: 0;
          right: -64px;
        }
      }
    }
  }
}
</style>
