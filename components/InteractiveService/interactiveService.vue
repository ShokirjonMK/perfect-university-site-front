<template>
  <div class="container-fluid interaktiv bg-white">
    <div class="container">
      <h1 class="section-title">{{ $t('interactive_services') }}</h1>
      <div class="interactive-cards">
        <a
          v-for="(interactive, index) of data?.slice(0, 4)"
          :key="index"
          :href="interactive?.url"
          target="_blank"
        >
          <div class="interactive-cards-items">
            <div class="items-img">
              <img :src="interactive?.icon_url" alt="image" />
            </div>
            <h3>{{ interactive?.title }}</h3>
            <p class="p_in_p" v-html="interactive?.content" />
            <div class="bottom_line" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import ButtonMore from '../Button/ButtonMore.vue'

export default defineComponent({
  components: { ButtonMore },
  props: {
    data: {
      type: Array,
    },
  },
})
</script>

<style>
.p_in_p {
  margin-bottom: 0 !important;
}

.p_in_p > p {
  margin-bottom: 0 !important;
}
</style>

<style lang="scss" scoped>
.section-title {
  color: #1d2024;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  margin-bottom: 0;
}
.img-fluid {
  max-height: 650px;
}

.interactive-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 56px;
  margin-top: 54px;

  & .interactive-cards-items {
    border-radius: 12px;
    background: #f6f8fb;
    padding: 50px 20px 28px 20px;
    position: relative;

    & h3 {
      color: #1d2024;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
    & p {
      color: #989ea5;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }
    & .bottom_line {
      width: 60px;
      height: 2px;
      border-radius: 4px 4px 0 0;
      background: #d6273e;
      position: absolute;
      bottom: 0;
      transition: width 0.3s;
    }
    & .items-img {
      display: flex;
      padding: 14px;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      border: 1px solid rgba(38, 120, 217, 0.06);
      background: #fff;
      box-shadow: 0 4px 24px 0 rgba(214, 39, 62, 0.12);
      position: absolute;
      top: -30px;
    }
    & .items-img img {
      width: 32px;
      height: 32px;
    }
  }
  .interactive-cards-items:hover .bottom_line {
    width: 80%;
  }
}
@media (max-width: 991px) {
  .interactive-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
