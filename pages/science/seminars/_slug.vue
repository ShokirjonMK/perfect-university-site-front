<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <bread-crumbs :type="'press'" :links="links" />

      <div
        v-if="seminarSingle && seminarSingle.seminars"
        class="container structure-styles"
      >
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <h1>
              {{ seminarSingle.seminars.title }}
            </h1>
            <div class="time-and-views d-flex justify-content-between">
              <span
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 2.66699H3.33333C2.59695 2.66699 2 3.26395 2 4.00033V13.3337C2 14.07 2.59695 14.667 3.33333 14.667H12.6667C13.403 14.667 14 14.07 14 13.3337V4.00033C14 3.26395 13.403 2.66699 12.6667 2.66699Z"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6667 1.33301V3.99967"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33331 1.33301V3.99967"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 6.66699H14"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {{
                  $moment(seminarSingle.seminars.publish_date)
                    .locale(
                      $i18n.locale == 'sr'
                        ? 'uz-latn'
                        : $i18n.locale == 'uz'
                        ? 'uz'
                        : $i18n.locale
                    )
                    .format('LL')
                }}
              </span>
              <span
                ><svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66675 8.00032C1.66675 8.00032 4.33341 2.66699 9.00008 2.66699C13.6667 2.66699 16.3334 8.00032 16.3334 8.00032C16.3334 8.00032 13.6667 13.3337 9.00008 13.3337C4.33341 13.3337 1.66675 8.00032 1.66675 8.00032Z"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {{ seminarSingle.seminars.views }}
              </span>
            </div>

            <img
              :src="seminarSingle.seminars.image_url"
              class="mb-4"
              :alt="seminarSingle.seminars.title"
            />
            <div
              class="single-content"
              v-html="seminarSingle.seminars.description"
            ></div>

            <HashTags />
          </div>

          <div class="col-12 col-md-3" style="padding: 0">
            <div>
              <sideCourses />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="seminarSingle.related && seminarSingle.related.length"
        class="container-fluid d-print-none"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 pd">
              <h2>
                {{ $t('related_photos') }}
              </h2>
            </div>

            <div
              v-for="(items, index) in seminarSingle.related"
              :key="index"
              class="col-12 col-md-3 pd"
            >
              <NuxtLink :to="`${items.slug}`">
                <div class="seminar-cards mb-5" style="position: relative">
                  <img :src="items.thumbnail_url" :alt="items.thumbnail_url" />
                  <img
                    src="@/static/image/seminars-bg.svg"
                    class="bg"
                    alt="Seminars image"
                  />
                  <div class="text-info">
                    <h6>{{ items.title }}</h6>
                    <div class="d-flex justify-content-between">
                      <span class="type">{{ items.category }}</span>
                      <span class="date">
                        {{
                          $moment(items.publish_date)
                            .locale(
                              $i18n.locale == 'sr'
                                ? 'uz-latn'
                                : $i18n.locale == 'sr'
                                ? 'sr'
                                : $i18n.locale
                            )
                            .format('LL')
                        }}
                      </span>
                    </div>
                    <div class="line"></div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    BreadCrumbs,
  },
  data() {
    return {}
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('scientific_seminars'),
          link: `/${this.$i18n.locale}/science/seminars`,
        },
        {
          title: this.seminarSingle.seminars.title,
        },
      ]
    },

    ...mapState({
      seminarSingle: (state) => state.seminars.seminarSingle,
      seminar: (state) => state.seminars.seminar,
    }),
  },

  async fetch() {
    await this.$store
      .dispatch('seminars/fetchSeminarSingle', this.$route.params.slug)
      .catch(() => {}),
      await this.$store.dispatch('seminars/fetchSeminar').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    padding-bottom: 16px;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  img {
    border-radius: 4px;
    width: 100%;
  }

  .text-info {
    position: absolute;
    top: 61%;
    z-index: 2;
    padding: 0px 16px 0px 16px;

    h6 {
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 21px;
      color: #ffffff;
      margin-bottom: 12px;
    }

    span {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 20px;
      color: #ffffff;
      margin-bottom: 10px;
    }
    .date {
      color: #9fabb9;
    }
  }

  .line {
    width: 30%;
    height: 2px;
    background: #6db0ff;
    transition: 0.3s all;
  }

  .seminar-cards {
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    transition: 0.3s all;

    &:hover {
      transform: translatey(2px);

      .line {
        width: 100%;
      }
    }
  }
}

.container-fluid {
  background: #f9fafc;

  h2 {
    padding: 28px 0 28px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 35px;
    color: #374453;
  }
}
</style>
