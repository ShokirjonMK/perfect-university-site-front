<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-between">
            <h1>{{ $t('partners') }}</h1>
            <div class="d-flex slider-btns">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="showPrev"
              >
                <path
                  d="M16.25 19.5L9.75 13L16.25 6.5"
                  stroke="#9FABB9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="showNext"
              >
                <path
                  d="M9.75 19.5L16.25 13L9.75 6.5"
                  stroke="#9FABB9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <VueSlickCarousel
              v-if="partners && partners.length"
              ref="sliderPartners"
              v-bind="settings"
            >
              <div v-for="(item, index) in partners" :key="index">
                <a target="_blank" :href="item.url">
                  <img :src="item.icon_url" alt="Icon" />
                </a>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SliderPartners',

  data() {
    return {
      settings: {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 20000,
        speed: 500,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
    }
  },

  methods: {
    showNext() {
      this.$refs.sliderPartners.next()
    },
    showPrev() {
      this.$refs.sliderPartners.prev()
    },
  },

  computed: {
    ...mapState({
      partners: (state) => state.partners.partners,
    }),
  },

  async fetch() {
    await this.$store.dispatch('partners/fetchPartners').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    color: white;
  }
  .justify-content-between {
    margin-top: 64px;
    margin-bottom: 32px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      transition: 0.3s all;
      height: 47px;
    }
    &:hover {
      img {
        opacity: 0.5;
      }
    }
  }

  img {
    pointer-events: none;
  }
}
</style>
