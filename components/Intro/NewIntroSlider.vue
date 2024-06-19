<template>
  <div v-if="slider.results && slider.results.length" class="h-100 position-relative" style="z-index: 0">
    <div class="slider-wrap">
      <div class="left-site">
        <!-- <img src="../../static/herobg.jpg" class="intro-slider__bg-img" alt="bg"> -->
        <h2 class="left-site__title">
          {{ slider.results[activeIndex].title }}
        </h2>
        <div class="left-site__subtitle" v-html="slider.results[activeIndex].short_description">
        </div>
        <a v-if="slider.results[activeIndex].link" :href="slider.results[activeIndex].link"><button class="link_btn">Ariza
            topshirish</button></a>
      </div>
      <div class="right-site">
        <VueSlickCarousel ref="slider" v-bind="settings" class="intro-slider" @afterChange="activeIndex = $event">
          <img v-for="(item, index) in slider.results" :key="index" class="" :src="item?.image_url"
            :alt="item?.title" />
        </VueSlickCarousel>
      </div>
    </div>
    <div class="navigation-wrap">
      <div class="intro-slider-navigation">
        <ul class="intro-slider__pagination">
          <li v-for="(i, idx) in slider.results" :key="idx" :class="{ active: activeIndex === idx }"
            @click="goToActiveIndex(idx)">
            <span> {{ idx + 1 }}</span>
          </li>
        </ul>
        <div v-if="slider.results.length > 1" class="intro-slider__navigation">
          <button @click="$refs.slider.prev()">
            <img src="/icons/chevron-left.svg" alt="icon chevron" />
          </button>
          <button style="rotate: 180deg" @click="$refs.slider.next()">
            <img src="/icons/chevron-left.svg" alt="icon chevron" />
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="intro-slider-info">
      <div class="container position-relative">
        <div class="left-site">
          <img src="../../static/herobg.jpg" class="intro-slider__bg-img" alt="bg">
          <h2 class="intro-slider-info__title">
            {{ slider.results[activeIndex].title }}
          </h2>
          <div class="intro-slider-info__subtitle" v-html="slider.results[activeIndex].short_description">
          </div>
          <a href="https://qabul.perfectuniversity.uz"><button class="intro-slider-navigation link_btn">Ariza
              topshirish</button></a>
        </div>
        <div class="intro-slider-navigation">
          <ul class="intro-slider__pagination">
            <li v-for="(i, idx) in slider.results" :key="idx" :class="{ active: activeIndex === idx }"
              @click="goToActiveIndex(idx)">
              <span> {{ idx + 1 }}</span>
            </li>
          </ul>
          <div v-if="slider.results.length > 1" class="intro-slider__navigation">
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
    <VueSlickCarousel ref="slider" v-bind="settings" class="intro-slider right-site"
      @afterChange="activeIndex = $event">
      <img v-for="(item, index) in slider.results" :key="index" class="" :src="item?.image_url" :alt="item?.title" />
    </VueSlickCarousel> -->
    <!-- <VueSlickCarousel ref="slider" v-bind="settings" class="intro-slider" @afterChange="activeIndex = $event">
      <img v-for="(item, index) in slider.results" :key="index" class="intro-slider__image" :src="item?.image_url"
        :alt="item?.title" />
    </VueSlickCarousel> -->
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
/* .intro-slider {
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

  &__bg-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    object-fit: cover;
  }

  .right-site {
    img {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 50%;
      object-fit: cover;
    }
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
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: 132%;
      text-transform: uppercase;
      margin-bottom: 16px;
      max-width: 781px;
      position: relative;
      z-index: 1;

      @media (max-width: 768px) {
        font-size: 24px;
      }
    }

    &__subtitle {
      max-width: 681px;
      color: #fff;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 136%;
      position: relative;
      z-index: 1;

      @media (max-width: 768px) {
        font-size: 14px;
      }
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
        line-height: 28px;
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
        filter: invert(100%) sepia(0%) saturate(1229%) hue-rotate(179deg) brightness(121%) contrast(108%);
        width: 24px;
        height: 24px;
      }

    }
  }

} */

/* .link_btn {
  display: inline-block;
  padding: .5rem 3rem;
  border-radius: .5rem;
  background-color: var(--blue-hover);
  color: #fff;
  font-size: 18px;

  &:hover {
    background-color: var(--darkBlue);
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

} */

.slider-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }

  .left-site {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    width: 100%;
    background-image: linear-gradient(rgba(23, 38, 61, 0.9), rgba(23, 38, 61, 0.9)), url("../../static/herobg3.jpg");
    background-size: cover;
    padding: 2rem;
    padding-bottom: 3rem;


    &__title {
      color: #fff;
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: 132%;
      text-transform: uppercase;
      margin-bottom: 16px;
      max-width: 781px;
      position: relative;
      z-index: 1;

      @media (max-width: 768px) {
        font-size: 28px;
      }
    }

    &__subtitle {
      max-width: 681px;
      color: #fff;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 136%;
      position: relative;
      z-index: 1;

      @media (max-width: 768px) {
        font-size: 14px;
      }

    }

    .link_btn {
      display: inline-block;
      padding: .5rem 3rem;
      border-radius: .5rem;
      background-color: var(--blue-hover);
      color: #fff;
      font-size: 18px;
      /* margin-top: 1rem; */

      &:hover {
        background-color: var(--darkBlue);
      }

      @media (max-width: 768px) {
        font-size: 15px;
      }

    }
  }

  .right-site {
    width: 100%;
    position: relative;

    .intro-slider {
      position: absolute;
      inset: 0;
      z-index: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }
    }

    @media (max-width: 1024px) {
        display: none;
      }
  }

}

.navigation-wrap {
  position: absolute;
  bottom: 5rem;
  width: 100%;
  z-index: 1000;
  padding: 0 2rem;

  .intro-slider-navigation {

      margin-top: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 1;

    .intro-slider__pagination {
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
          line-height: 28px;
          /* 31.68px */
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

    .intro-slider__navigation {
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
          filter: invert(100%) sepia(0%) saturate(1229%) hue-rotate(179deg) brightness(121%) contrast(108%);
          width: 24px;
          height: 24px;
        }

      }
    }
  }
}
</style>
