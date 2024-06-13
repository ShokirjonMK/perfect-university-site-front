<template>
  <div class="fieldsSlider">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1>{{ $t('study_directions') }}</h1>
          </div>
          <div class="col-12 text-right slider-btns" style="margin-top: -60px">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="showPrev()"
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
              @click="showNext()"
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
      </div>

      <VueSlickCarousel
        v-if="faculty && faculty.length"
        ref="fieldsSlider"
        v-bind="settings"
      >
        <div v-for="(item, index) in faculty" :key="index">
          <div>
            <nuxt-link to="">
              <div class="cards">
                <div class="st-floor">
                  <div class="d-flex">
                    <img :src="item.image_url" class="img" :alt="item.title" />
                    <h6>{{ item.title }}</h6>
                  </div>
                  <div class="line"></div>
                </div>
                <p>
                  {{ item.description }}
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FieldsSlider',

  data() {
    return {
      settings: {
        //   "dots": true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.3,
        centeredMode: true,
        slidesToScroll: 1,
        centerPadding: '70px',
        arrows: false,
      },
    }
  },

  computed: {
    ...mapState({
      faculty: (state) => state.faculty.faculty,
    }),
  },

  async fetch() {
    await this.$store.dispatch('faculty/fetchFaculty').catch(() => {})
  },

  methods: {
    showNext() {
      this.$refs.fieldsSlider.next()
    },
    showPrev() {
      this.$refs.fieldsSlider.prev()
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-btns svg {
  &:hover {
    path {
      stroke: #003b81;
    }
  }
}

h1 {
  margin-top: 48px;
  margin-bottom: 32px;
}

.cards {
  margin-right: 28px;
  background: #ffffff;
  border: 1px solid rgba(159, 171, 185, 0.2);
  box-shadow: 0px 4px 20px rgba(159, 171, 185, 0.16);
  border-radius: 4px;
  padding: 0 0px 28px 0px;
  min-height: 188px;

  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 24px;
    color: #44494f;
    margin-left: 16px;
    margin-top: 15px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 140%;
    color: #444444;
    margin-top: 28px;
    padding-left: 32px;
    padding-right: 40px;

    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 16px;
  }

  .line {
    margin-top: 14px;
    margin-left: 5px;
    background: #6db0ff;
    width: 44px;
    height: 2px;
    transition: 0.3s all;
  }

  .st-floor {
    padding: 16px 0px 0 32px;
    background: #f9fafc;
  }

  &:hover {
    .line {
      width: 95%;
    }
  }
}

.slick-slider {
  .slick-dots {
    ul {
      li {
        button {
          background: saddlebrown;
        }
      }
    }
  }
}

.fieldsSlider .img {
  width: 44px;
  min-width: 44px;
  height: auto;
}
</style>
