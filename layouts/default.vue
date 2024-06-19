<template>
  <div class="default-wrapper">
    <main-header />
    <div class="default">
      <Nuxt />
    </div>
    <main-footer class="mt-auto" />
  </div>
</template>

<script>
import MainFooter from '~/components/footer'
import MainHeader from '~/components/header'
import MetaMixin from '~/mixins/meta.js'
export default {
  name: 'Default',
  components: {
    MainHeader,
    MainFooter,
  },
  mixins: [MetaMixin],
  mounted() {
    if (
      this.$route &&
      this.$route.path ===
        `/${this.$i18n.locale}/struktura/%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D1%8B-2/%D1%86%D0%B5%D0%BD%D1%82%D1%80-%D0%BD%D0%B0%D1%83%D1%87%D0%BD%D0%BE-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-%D0%BE%D1%82%D0%B4%D0%B5-2/`
    ) {
      this.$router.push(
        `/${this.$i18n.locale}/structure/centers-sections/ozbekiston-iqtisodiyotini-rivojlantirishning-ilmiy-asoslari-va-muammolari-ilmiy-tadqiqot-markazi`
      )
    }
    if (
      this.$route &&
      this.$route.path === `/${this.$i18n.locale}/structure/university-council/`
    ) {
      this.$router.push(`/${this.$i18n.locale}/static/university-council/`)
    }
  },
}
</script>

<style>
.default {
  background-color: #f6f8fb;
  flex-grow: 1;
  padding-top: 28px;
  /* min-height: 100vh; */
}
.default-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
