<template>
  <div class="mission position-relative">
    <div class="container">
      <div
        v-for="(item, idx) in mission.slice(0, 1)"
        :key="idx"
        class="mission__content"
      >
        <div class="mission__left">
          <img
            src="/image/footer-oz.svg"
            alt="Footer logo image"
            style="max-width: 143px !important"
          />
          <div>
            <h2 class="mission__title">{{ item?.title }}</h2>
            <p class="mission__subtitle">{{ $t('commitment_values') }}</p>
          </div>
          <ButtonMore
            class="button_more"
            style="width: max-content"
            :title="$t('more_about')"
            variant="light-variant"
            @click="$router.push(localePath('/about/our-mission'))"
          >
          </ButtonMore>
        </div>
        <div class="mission__description">
          {{ item?.description }} <span class="line" />
        </div>
      </div>
      <img
        src="/image/logo-vector.svg"
        alt="Logo image"
        class="mission__bg-img"
      />
    </div>
  </div>
</template>
<script>
import router from 'vue-marquee-bar/src/router'

export default {
  name: 'OurMission',
  async fetch() {
    const data = await this.$axios.$get('/our-mission/?is_main=true')

    this.mission = data.results
  },
  data() {
    return {
      mission: [],
    }
  },
  methods: {
    router() {
      return router
    },
  },
}
</script>

<style scoped>
.line {
  width: 48px;
  height: 4px;
  background: #1c89c1;
  display: block;
  margin-top: 24px;
}
.button_more {
  width: max-content;
}
</style>
