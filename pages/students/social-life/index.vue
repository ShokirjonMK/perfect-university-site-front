<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else class="social-row">
      <h1>{{ social?.page?.title }}</h1>
      <div class="social__card">
        <div v-if="social?.page?.images && social?.page?.images.length">
          <dormSlider :images="social?.page?.images" />
        </div>
        <div>
          <span class="line-clamp"></span>
          <a class="sport-and-fitness">Sports and fitness</a>
        </div>
        <div class="social-items" v-html="social?.page?.content" />
      </div>
      <HashTags />
    </div>
  </div>
</template>

<script>
import dormSlider from '@/components/dormSlider.vue'

export default {
  name: 'IndexVue',
  async fetch() {
    const data = await this.$axios.$get('/static/social-life')
    this.social = data
  },
  data() {
    return {
      components: {
        dormSlider,
      },
      social: {},
    }
  },
}
</script>
<style lang="scss">
.social-items h2 {
  color: #144176;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  padding-left: 12px;
  position: relative;
}
.social-items h2:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 32px;
  border-radius: 2px 8px 8px 2px;
  background: #2678d9;
}
.social__card {
  padding: 24px;
  background: white;
  border-radius: 12px;
  margin-top: 24px;
}
.social-items {
  margin-top: 24px;
  position: relative;

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

.sport-and-fitness {
  color: #144176;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 31.68px */
}

.line-clamp {
  ontent: '';
  position: absolute;
  left: 0;
  width: 3px;
  height: 20px;
  border-radius: 2px 10px 10px 2px;
  background-color: var(--blue);
  opacity: 0;
  display: block;
}
</style>
