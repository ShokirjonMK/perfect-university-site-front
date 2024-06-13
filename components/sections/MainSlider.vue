<template>
  <section class="main-slider">
    <!--    <teleport to="body">-->
    <div v-if="isModalOpen" class="card-overlay">
      <transition :key="isModalOpen">
        <div v-show="isModalOpen" class="card-modal">
          <div class="card-modal__header">
            <div class="card-modal__text">
              <h1>2024/2025 o‘quv yili</h1>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="closeModal"
              >
                <path
                  d="M4.80078 4.7998L19.2008 19.1998M4.80078 19.1998L19.2008 4.7998"
                  stroke="#787F86"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="card-modal__body">
            <div class="flec">
              <div
                v-for="item in studentTypes"
                :key="item.id"
                class="global-students"
                :class="item.id == currentActiveSelectorID ? 'active' : ''"
                @click="selectStudentType(item.id)"
              >
                <span v-html="item.icon"></span>

                <p>{{ $t(item.text) }}</p>
              </div>
            </div>
          </div>
          <div class="card-modal__footer">
            <div class="flec">
              <button class="btn" @click="closeModal">
                {{ $t('cancel') }}
              </button>
              <nuxt-link
                class="btn p-0"
                :to="studentTypes[currentActiveSelectorID - 1].url"
              >
                <button class="bg-transparent h-100 w-100" @click="onContinue">
                  {{ $t('continue') }}
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!--    </teleport>-->
    <VueSlickCarousel
      v-if="slider.results && slider.results.length"
      ref="mainSlider"
      v-bind="settings"
      @beforeChange="slickDotsChange"
    >
      <div v-for="(item, idx) in slider.results" :key="idx" class="item">
        <img src="@/static/image/banner-bg.jpg" alt="banner" />
        <div class="shadow-img"></div>
        <div class="inner">
          <div class="container">
            <div class="flex d-flex align-items-center justify-content-between">
              <div class="center">
                <svg
                  width="118"
                  height="123"
                  viewBox="0 0 118 123"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0C0 3.63348 2.94446 6.59409 6.55811 6.59409H110.685C114.298 6.59409 117.243 3.63348 117.243 0H0Z"
                    fill="white"
                  />
                  <path
                    d="M9.77023 13.3228C9.77023 16.9562 12.7147 19.9168 16.3283 19.9168V104.429V106.986C16.3283 108.735 17.6667 110.081 19.4066 110.081H30.3814C36.9395 110.081 43.23 112.1 48.5835 115.733L59.2906 123L67.7225 116.675C73.3437 112.369 80.3034 110.081 87.263 110.081H97.8363C99.5762 110.081 100.915 108.735 100.915 106.986V104.429V19.9168H101.718C105.331 19.9168 108.276 16.9562 108.276 13.3228H9.77023ZM63.7073 111.427L59.023 114.926L52.1972 110.216C45.7729 105.775 38.1441 103.487 30.2476 103.487H22.7526V82.7626H30.2476C36.8057 82.7626 43.0961 84.7812 48.4497 88.4147L59.1568 95.6816L67.5887 89.3567C73.2099 85.0503 80.1695 82.7626 87.1292 82.7626H94.2226V103.487H87.1292C78.8311 103.487 70.5331 106.313 63.7073 111.427ZM55.4093 57.3282V85.0503L52.331 82.8971C50.4573 81.5514 48.4497 80.4748 46.3083 79.5328V57.3282H55.4093ZM61.9674 57.3282H70.3993V80.0426L71.2023 79.6674C68.5255 80.8786 66.1164 82.3589 63.7073 84.1083L61.8336 85.454V57.3282H61.9674ZM94.3565 76.1685H87.263C83.7832 76.1685 80.3034 76.7068 76.9574 77.6488V57.4628H82.4448C86.0584 57.4628 89.0029 54.5022 89.0029 50.8687H27.7047C27.7047 54.5022 30.6491 57.4628 34.2628 57.4628H39.7502V77.5142C36.6719 76.7068 33.5936 76.3031 30.3814 76.3031H22.8865V19.9168H94.3565V76.1685Z"
                    fill="white"
                  />
                  <path
                    d="M39.4825 41.7177H42.8285V31.6247H48.0482V41.7177H52.7325C54.7401 41.7177 56.3462 41.1794 57.4169 40.1028C58.4876 39.0263 59.023 37.4114 59.023 35.3928V34.5853C59.023 32.7013 58.4876 31.0864 57.4169 30.0098C56.3462 28.9333 54.7401 28.395 52.7325 28.395H48.4497H48.0482H35.8688V31.6247H39.4825V41.7177V41.7177ZM51.3942 31.6247H52.5987C53.6694 31.6247 54.3386 31.8939 54.874 32.2976C55.2755 32.7013 55.5432 33.5088 55.5432 34.5853V35.3928C55.5432 36.6039 55.2755 37.4114 54.874 37.8151C54.4725 38.2188 53.6694 38.488 52.5987 38.488H51.3942V31.6247Z"
                    fill="white"
                  />
                  <path
                    d="M64.5104 28.395H61.1644V41.7177H64.5104V28.395Z"
                    fill="white"
                  />
                  <path
                    d="M68.124 40.372C68.6594 40.9103 69.1947 41.1794 69.8639 41.4486C70.5331 41.7177 71.3362 41.8523 72.1392 41.8523C72.9422 41.8523 73.7452 41.7177 74.4144 41.4486C75.0836 41.1794 75.619 40.7757 76.1544 40.372C76.6897 39.8337 76.9574 39.2954 77.2251 38.6225C77.4927 37.9497 77.6266 37.1422 77.6266 36.3348V28.5295H74.2806V36.3348C74.2806 37.2768 74.1468 37.9497 73.7452 38.2188C73.3437 38.6225 72.9422 38.7571 72.273 38.7571C71.6038 38.7571 71.0685 38.6225 70.8008 38.2188C70.3993 37.8151 70.2654 37.1422 70.2654 36.3348V28.5295H66.9195V36.3348C66.9195 37.1422 67.0533 37.9497 67.321 38.6225C67.321 39.2954 67.5887 39.8337 68.124 40.372Z"
                    fill="white"
                  />
                </svg>
                <button class="entrence-btn" @click="openModal">
                  <p>{{ $t('entrance') }}</p>
                </button>
                <!--                <p class="mt-4">{{ $t("forThisYear") }}</p>-->
              </div>
              <div class="text">
                <NuxtLink :to="item.link">
                  <h6 class="slider-title">{{ item.title }}</h6>
                </NuxtLink>
                <div
                  class="v-text custom-left"
                  v-html="item.short_description"
                ></div>
              </div>
            </div>
            <div class="custom-control">
              <i @click="showPrev">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 16.25L13 9.75L6.5 16.25"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
              <div v-if="slider.results" class="dots">
                <span>{{ '0' + counter }}</span>
                <span>/</span>
                <span>{{ '0' + (slider ? slider.results.length : 0) }}</span>

                <div class="slick-progress">
                  <span
                    :style="{
                      width: (slickDots.progress / 100) * 60 + 'px',
                    }"
                  ></span>
                </div>
              </div>
              <i @click="showNext">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 9.75L13 16.25L19.5 9.75"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </i>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainSlider',
  data() {
    return {
      slickDots: {
        activeSlide: 0,
        progress: 0,
        tick: undefined,
      },
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      },
      studentTypes: [
        {
          id: 1,
          text: 'local',
          url: '/courses/entrants',
          icon: `<svg
                  width="65"
                  height="64"
                  viewBox="0 0 65 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.166 42.6668H37.8327M23.966 58.6668H41.0327C45.5131 58.6668 47.7533 58.6668 49.4646 57.7949C50.9699 57.0279 52.1937 55.804 52.9607 54.2987C53.8327 52.5875 53.8327 50.3472 53.8327 45.8668V18.1335C53.8327 13.6531 53.8327 11.4129 52.9607 9.70157C52.1937 8.19628 50.9699 6.97243 49.4646 6.20544C47.7533 5.3335 45.5131 5.3335 41.0327 5.3335H23.966C19.4856 5.3335 17.2454 5.3335 15.5341 6.20544C14.0288 6.97243 12.805 8.19628 12.038 9.70157C11.166 11.4129 11.166 13.6531 11.166 18.1335V45.8668C11.166 50.3472 11.166 52.5875 12.038 54.2987C12.805 55.804 14.0288 57.0279 15.5341 57.7949C17.2454 58.6668 19.4856 58.6668 23.966 58.6668ZM40.4993 24.0002C40.4993 28.4184 36.9176 32.0002 32.4993 32.0002C28.0811 32.0002 24.4993 28.4184 24.4993 24.0002C24.4993 19.5819 28.0811 16.0002 32.4993 16.0002C36.9176 16.0002 40.4993 19.5819 40.4993 24.0002Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>`,
        },
        {
          id: 2,
          text: 'global',
          url: '/admission',
          icon: `<svg
                  width="65"
                  height="64"
                  viewBox="0 0 65 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.5006 5.3335C39.1707 12.6358 42.9613 22.1123 43.1673 32.0002C42.9613 41.8881 39.1707 51.3646 32.5006 58.6668M32.5006 5.3335C25.8306 12.6358 22.04 22.1123 21.834 32.0002C22.04 41.8881 25.8306 51.3646 32.5006 58.6668M32.5006 5.3335C17.7731 5.3335 5.83398 17.2726 5.83398 32.0002C5.83398 46.7278 17.7731 58.6668 32.5006 58.6668M32.5006 5.3335C47.2282 5.3335 59.1673 17.2726 59.1673 32.0002C59.1673 46.7278 47.2282 58.6668 32.5006 58.6668M7.16737 24.0002H57.834M7.16732 40.0002H57.834"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>`,
        },
      ],
      currentActiveSelectorID: 1,
      counter: 1,
      isModalOpen: false,
    }
  },

  computed: {
    ...mapState({
      slider: (state) => state.slider,
    }),
  },

  mounted() {
    this.slickDotsStart()
  },
  methods: {
    openModal() {
      document.body.style.overflow = 'hidden'
      this.isModalOpen = true
    },

    closeModal() {
      document.body.style.overflowY = 'scroll'
      this.isModalOpen = false
    },

    selectStudentType(id) {
      this.currentActiveSelectorID = id
    },

    showNext() {
      this.$refs.mainSlider.next()
    },
    showPrev() {
      this.$refs.mainSlider.prev()
    },

    onContinue() {
      this.isModalOpen = false
      document.body.style.overflowY = 'scroll'
    },

    // handleBreakpoint(currentSlide) {
    //   this.counter = currentSlide + 1
    //   //console.log(currentSlide);
    // },

    slickDotsStart() {
      if (this.$refs.mainSlider) {
        this.slickDots.progress = 0
        clearInterval(this.slickDots.tick)
        this.slickDots.tick = setInterval(this.slickDotsTick, 30)
      }
    },
    slickDotsTick() {
      this.slickDots.progress += 0.8
      if (this.slickDots.progress >= 100) {
        if (this.$refs.mainSlider) {
          this.$refs.mainSlider.next()
        } else {
          clearInterval(this.slickDots.tick)
        }
        this.slickDotsStart()
      }
    },
    slickDotsChange(from, to) {
      this.slickDots.activeSlide = to
      this.counter = to + 1
      this.slickDotsStart()
    },
  },

  async fetch() {
    await this.$store.dispatch('fetchPosts').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.main-slider {
  position: relative;
  .item {
    position: relative;
    min-height: 554px;
    position: relative;
    height: 100%;
    display: block !important;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      min-height: 554px;
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #17263d;
      z-index: -1;
    }

    .inner {
      position: absolute;
      z-index: 3;
      left: 0;
      right: 0;
      bottom: 40px;
      color: #fff !important;

      .text {
        padding: 0 200px;
        width: 1000px;
      }

      h6 {
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 54px;
        margin-bottom: 20px;

        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        transition: 0.3s all;
        &:hover {
          opacity: 0.5;
        }
      }
      a {
        color: white;
      }
      p {
        font-size: 1.25rem;
        line-height: 140%;
        /* color: rgba(255, 255, 255, 0.5) !important; */
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }

  .custom-control {
    svg {
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }

    //position: absolute;
    left: 120px;
    z-index: 3;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 0 !important;
    max-width: 70px;
    //bottom: 60px;
    .dots {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 60px;
      margin: 10px 0;
      padding-bottom: 5px;
      .slick-progress {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background: rgba(255, 255, 255, 0.2);
        span {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          background: #fff;
          width: 0;
        }
      }
    }
  }
}

.card-overlay {
  position: fixed;
  background: rgba(2, 13, 26, 0.8);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  .card-modal {
    width: 586px;
    background: #ffffff;
    border-radius: 4px;

    @media (max-width: 520px) {
      .flec {
        flex-direction: column;
      }
    }

    &__header {
      padding: 22px;
      border-bottom: 1px solid #e6e8ec;
    }

    .btn {
      display: block;
      width: 100% !important;
      background-color: #024da5;
      border: 1px solid #024da5;
      padding: 12px 0;
      border-radius: 2px;
      color: #fff;
      font-weight: 500;
      font-size: 1rem;
      line-height: 20px;
      transition: 0.3s ease;

      &:hover {
        background-color: #fff;
        border: 1px solid #024da5;

        button {
          color: #024da5;
        }
      }

      &:active {
        scale: 0.9;
      }
    }

    .btn:first-child {
      background: #e6e8ec;
      color: #263c55;
      border: 1px solid #e6e8ec;

      &:hover {
        background: #bfc1c7;
      }
    }

    &__body {
      padding: 22px;

      .flec {
        display: flex;
        gap: 20px;
        justify-content: space-between;
      }

      .global-students {
        width: 100%;
        cursor: pointer;
        background: #ffffff;
        border: 2px solid #e6e8ec;
        border-radius: 4px;
        padding: 32px 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #787f86;
        align-items: center;
        gap: 1rem;

        // &:hover {
        //   border: 2px solid #024da5;
        // }
        // &:hover p {
        //   color: #024da5;
        // }

        p {
          font-weight: 500;
          font-size: 1rem;
          line-height: 130%;
          color: #787f86;
        }
      }
    }

    &__footer {
      padding: 0 24px;
      padding-bottom: 24px;
      .flec {
        display: flex;
        gap: 20px;
        justify-content: space-between;
      }
    }

    &__text {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        cursor: pointer;
      }

      h1 {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 25px;
        color: #44494f;
      }
    }
  }
}

.shadow-img {
  position: absolute;
  background: #17263d;
  opacity: 0.8;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}

.active {
  border: 2px solid #024da5 !important;

  span,
  p {
    color: #024da5 !important;
  }
}

img {
  height: 100%;
}

.bg-transparent {
  background: transparent;
  color: #fff;
}

.dots {
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 130%;
    /* identical to box height, or 26px */

    text-align: center;

    color: #ffffff;
  }
}

.flex {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .center {
    padding-block: 10px;
    svg {
      width: 100%;
    }

    p {
      text-align: center;
    }
  }

  .entrence-btn {
    margin-top: 32px;
    padding: 16px 0px;
    background: #024da5;
    border-radius: 4px;
    font-weight: 700;
    line-height: 130%;
    text-align: center;
    transition: 0.3s ease;

    display: block;
    width: 100%;
    max-width: 356px;

    @media (max-width: 920px) {
      max-width: 290px;
    }

    p {
      color: #ffffff !important;
      text-align: center;
      font-size: 20px !important;
      line-height: 130%;
      width: 336px;

      @media (max-width: 920px) {
        width: 290px;
      }
    }

    &:active {
      scale: 0.9;
    }
  }
}

.v-text {
  h1 {
    line-height: 40px;
  }
}

@media screen and (max-width: 768px) {
  .slider-title {
    font-size: 32px !important;
    margin-bottom: 4px !important;
  }

  .v-text {
    h1 {
      font-size: 24px !important;
    }
  }
}
</style>

<style lang="scss">
@media screen and (max-width: 768px) {
  .slider-title {
    font-size: 32px !important;
    margin-bottom: 4px !important;
  }

  .custom-control {
    bottom: 40px !important;
  }

  .v-text {
    h1 {
      font-size: 24px !important;
    }
  }
}

.continue-btn {
  width: 100%;
}

@media screen and (max-width: 425px) {
  .slider-title {
    font-size: 24px !important;
    margin-bottom: 4px !important;
  }

  .v-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    h1 {
      font-size: 18px !important;
      text-align: left;
      line-height: 24px;
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
