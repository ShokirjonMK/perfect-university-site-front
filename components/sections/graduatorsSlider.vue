<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1>{{ $t('popular_graduators') }}</h1>

          <carousel-3d
            v-if="graduators"
            :controls-visible="true"
            :width="790"
            :space="175"
            :display="5"
          >
            <template v-if="graduators.results && graduators.results.length">
              <slide
                v-for="(item, index) in graduators.results"
                :key="index"
                :index="index"
              >
                <nuxt-link :to="`university/graduators/${item.slug}`">
                  <div class="d-flex">
                    <div>
                      <img :src="item.image_url" :alt="item.title" />
                    </div>
                    <div class="text">
                      <p>{{ item.quote }}</p>

                      <h6>{{ item.title }}</h6>
                      <span>{{ item.profession }}</span>
                    </div>
                  </div>
                </nuxt-link>
              </slide>
            </template>
          </carousel-3d>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GraduatorsSlider',

  computed: {
    ...mapState({
      graduators: (state) => state.graduators.graduators,
    }),
  },

  async fetch() {
    await this.$store.dispatch('graduators/fetchGraduators').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 100px;

  h1 {
    padding: 48px 0 32px 0px;
  }
}

.carousel-3d-container {
  .carousel-3d-slider {
    .carousel-3d-slide {
      width: 790px !important;
      background: #ffffff;
      border: 1px solid rgba(159, 171, 185, 0.2);
      box-shadow: 0px 4px 20px rgba(159, 171, 185, 0.16);
      border-radius: 4px;

      img {
        height: 273px;
        max-width: 279px !important;
        width: 279px;
      }

      .text {
        padding: 20px 28px 24px 28px;

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          line-height: 144.5%;
          color: #44494f;
        }

        h6 {
          margin-top: 17%;
          margin-bottom: 2px;
          font-style: normal;
          font-weight: bold;
          font-size: 1.25rem;
          line-height: 140%;
          color: #444444;
        }

        span {
          font-style: normal;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 140%;
          color: #9fabb9;
        }
      }
    }
  }
}
</style>
