<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else class="container pb-5">
      <bread-crumbs :type="'press'" :links="links" />
      <div class="row pt-4" style="padding-left: 0">
        <div class="col-12 col-lg-9">
          <div class="col-12 mt-4 mt-md-0">
            <h1>{{ $t('vacancies') }}</h1>
            <div
              v-if="vacancy && vacancy.results && vacancy.results.length"
              class="vacancy__grid"
            >
              <div v-for="(item, index) in vacancy.results" :key="index">
                <NuxtLink
                  :to="`/${$i18n.locale}/university/vacancy/${item.id}`"
                >
                  <div class="cards">
                    <div class="work-info">
                      <h5 class="origin">
                        {{ item.department }}
                      </h5>
                      <div class="line"></div>
                      <h6 class="position">
                        {{ item.title }}
                      </h6>
                    </div>
                    <div style="padding-top: 20px" class="infos">
                      <div class="date">
                        <p class="item">
                          <svg
                            color="views"
                            class="mr-1"
                            width="16"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.66699 7.99984C1.66699 7.99984 4.33366 2.6665 9.00032 2.6665C13.667 2.6665 16.3337 7.99984 16.3337 7.99984C16.3337 7.99984 13.667 13.3332 9.00032 13.3332C4.33366 13.3332 1.66699 7.99984 1.66699 7.99984Z"
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
                          <span>{{ item.views }}</span>
                        </p>
                        <p class="item">
                          <svg
                            class="mr-1"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z"
                              stroke="#9FABB9"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.667 1.3335V4.00016"
                              stroke="#9FABB9"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.33301 1.3335V4.00016"
                              stroke="#9FABB9"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2 6.6665H14"
                              stroke="#9FABB9"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <span>
                            {{
                              $moment(item.date)
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
                        </p>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div v-if="vacancy.total > 9" class="pagination-wrap">
                  <b-pagination
                    v-model="page"
                    :total-rows="vacancy.total"
                    :per-page="vacancy.per_page"
                    first-number
                    last-number
                    aria-controls="stadiums-items"
                  ></b-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutTsueSidebar class="col-12 col-lg-3" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import sideNav from '~/components/sideNav'
import BreadCrumbs from '@/components/Breadcrumb.vue'

export default {
  components: {
    BreadCrumbs,
    sideNav,
  },

  async fetch() {
    await this.$store
      .dispatch('vacancy/fetchVacancy', this.page)
      .catch(() => {})
  },
  data() {
    return {
      page: 1,
      per_page: 9,
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('about_tpu'),
          link: `${this.$i18n.locale}/about_tpu`,
        },
        {
          title: this.$t('vacancies'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      vacancy: (state) => state.vacancy.vacancy,
    }),
  },

  watch: {
    async page() {
      await this.$fetch()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    margin-bottom: 24px;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid var(--gray-color-2);
  box-shadow: 0 9px 24px 0 var(--shadow);
  padding: 16px 20px;
  border-radius: 12px;
  position: relative;
  height: 157px;

  .work-info {
    h6 {
      margin-bottom: 0;
    }

    .line {
      margin-bottom: 8px;
    }
  }

  h6 {
    font-size: 1rem;
    line-height: 148%;
    margin-bottom: 16px;
    color: var(--dark-text-0);
    font-weight: 600;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  h5 {
    font-weight: 500;
    font-size: 1rem;
    line-height: 148%;
    color: var(--dark-text-0);
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines to display */
    -webkit-box-orient: vertical;
    text-align: left;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 1.6875rem;
    line-height: 34px;
    color: #003b81;
    margin: 0;
  }

  .salary {
    text-align: left;
    background: rgba(0, 49, 107, 0.08);
    padding: 12px 20px;
    font-family: 'Fira Sans', sans-serif;

    span {
      font-weight: 600;
      font-size: 1.75rem;
      line-height: 34px;
      color: var(--blue);
    }
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 16px;
    color: #263c55;
  }

  .line {
    width: 48px;
    height: 1px;
    background: var(--gray-color-3);
    margin-bottom: 8px;
  }

  .date {
    display: flex;
    align-items: center;
    gap: 12px;

    .item {
      display: flex;
      align-items: center;

      span {
        color: var(--gray-color-1);
      }
    }

    .views {
      margin-left: 16px;
    }
  }

  .line1 {
    margin-top: 20px;
    background: #6db0ff;
    width: 10%;
    height: 2px;
    transition: 0.3s all;
  }

  transition: 0.3s all;

  &:hover {
    .line1 {
      width: 90%;
    }

    box-shadow: 0px 4px 20px rgba(159, 171, 185, 0.16);

    transform: translateY(3px);
  }
}

.navs {
  margin-top: 7.6%;
}
.vacancy__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media screen and (max-width: 991px) {
  .vacancy__grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
