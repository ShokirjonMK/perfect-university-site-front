<template>
  <div
    v-if="slider.results && slider.results.length"
    class="h-100 position-relative"
    style="z-index: 0"
  >
    <div class="intro-slider-info">
      <div class="container position-relative">
        <h2 class="intro-slider-info__title">
          {{ slider.results[activeIndex].title }}
        </h2>
        <div
          class="intro-slider-info__subtitle"
          v-html="slider.results[activeIndex].short_description"
        ></div>
        <button class="intro-slider-navigation link_btn" >Qabulga o'tish</button>
        <div class="intro-slider-navigation">
          <ul class="intro-slider__pagination">
            <li
              v-for="(i, idx) in slider.results"
              :key="idx"
              :class="{ active: activeIndex === idx }"
              @click="goToActiveIndex(idx)"
            >
              <span> {{ idx + 1 }}</span>
            </li>
          </ul>
          <div
            v-if="slider.results.length > 1"
            class="intro-slider__navigation"
          >
            <button @click="$refs.slider.prev()">
              <img src="/icons/chevron-left.svg" alt="icon chevron" />
            </button>
            <button style="rotate: 180deg" @click="$refs.slider.next()">
              <img src="/icons/chevron-left.svg" alt="icon chevron" />
            </button>
          </div>
        </div>
        <img class="logo-pattern" src="/image/logo-sm.svg" alt="Logo Pattern" />
      </div>
    </div>
    <VueSlickCarousel
      ref="slider"
      v-bind="settings"
      class="intro-slider"
      @afterChange="activeIndex = $event"
    >
      <img
        v-for="(item, index) in slider.results"
        :key="index"
        class="intro-slider__image"
        :src="item?.image_url"
        :alt="item?.title"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  props: {
    slider: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
      },
      activeIndex: 0,
    }
  },
  methods: {
    goToActiveIndex(index) {
      this.$refs.slider.goTo(index)
    },
  },
}
</script>

<style lang="scss">
.intro-slider {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  .slick-list,
  .slick-track {
    border-radius: 0;
    height: 100%;
  }
  .slick-slide div {
    height: 100%;
  }

  &__image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  &-info {
    background: rgba(23, 38, 61, 0.44);
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: end;
    z-index: 1;

    .container {
      padding-bottom: 64px;
    }

    .logo-pattern {
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translateX(-50%);
      opacity: 0.12;
      pointer-events: none;
      z-index: 0;
    }

    &__title {
      color: #fff;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 132%; /* 42.24px */
      text-transform: uppercase;
      margin-bottom: 16px;
      max-width: 781px;
      position: relative;
      z-index: 1;

      @media (max-width: 768px) {
        font-size: 22px;
      }
    }
    &__subtitle {
      max-width: 681px;
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 136%; /* 19.04px */
      position: relative;
      z-index: 1;
    }
  }

  &-navigation {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  &__pagination {
    display: flex;
    align-items: center;
    li {
      cursor: pointer;
      padding: 0 14px;
      border-right: 1px solid #1c89c1;
      span {
        color: rgba(255, 255, 255, 0.4);
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 31.68px */
        text-transform: uppercase;

        transition: 0.3s all;
        display: block;
      }
      &:hover span {
        color: rgba(255, 255, 255, 0.7);
      }
      &.active span {
        transform: scale(1.1);
        color: white;
      }
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        border-right: 0;
      }
    }
  }

  &__navigation {
    display: flex;
    gap: 20px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      border: 1px solid #768194;
      background: transparent;
      border-radius: 10000px;
      transition: all 0.3s;
      &:hover {
        border: 3px solid #1c89c1;
      }
      &:active {
        transform: scale(0.9);
      }
      img {
        filter: invert(100%) sepia(0%) saturate(1229%) hue-rotate(179deg)
          brightness(121%) contrast(108%);
        width: 24px;
        height: 24px;
      }
    }
  }

}
.link_btn {
  padding: .5rem 3rem;
  border-radius: .5rem;
  background-color: var(--darkBlue);
  color: #fff;

  &:hover{
    background-color: var(--blue-hover);
  }

}
</style>
