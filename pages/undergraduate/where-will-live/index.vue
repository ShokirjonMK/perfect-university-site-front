<template>
  <div v-if="whereLive.length" class="social-row">
    <h1>{{ whereLive?.page?.title }}</h1>
    <div class="social__card">
      <div v-if="whereLive?.page?.images && whereLive?.page?.images.length">
        <dormSlider :images="whereLive?.page?.images" />
      </div>

      <div class="social-items" v-html="whereLive?.page?.content"></div>
    </div>
    <HashTags />
  </div>
  <div v-else>
    <h5>{{ $t('not_found_title') }}</h5>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dormSlider from '@/components/dormSlider.vue'

export default {
  name: 'IndexVue',
  components: {
    dormSlider,
  },
  async fetch() {
    this.whereLive = await this.$axios.$get('/static/where-will-live')
  },
  data() {
    return {
      whereLive: {},
    }
  },
  computed: {
    ...mapState({
      staticSinglePage: (state) => state.static.staticSinglePage,
    }),
  },
}
</script>

<style lang="scss" scoped>
.social__card {
  padding: 24px;
  background: white;
  border-radius: 12px;
  margin-top: 24px;
}
.social-items {
  margin-top: 24px;
  position: relative;
  h2 {
    color: #144176;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 132%;
    padding-left: 12px;
    position: relative;
  }

  & h2:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 32px;
    border-radius: 2px 8px 8px 2px;
    background: #2678d9;
  }
  & p {
    color: #1d2024;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-top: 16px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  & ul {
    gap: 12px;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    margin-left: 8px;
  }
  & li {
    display: flex;
    gap: 8px;
    color: #1d2024;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    &:before {
      content: url('~/static/image/about-tsue/zero-mission.svg');
    }
  }
}
</style>
