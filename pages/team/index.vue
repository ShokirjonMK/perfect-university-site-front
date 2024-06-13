<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <div class="container pb-5">
        <breadcrumb v-if="links" :type="'press'" :links="links" />
        <div class="row">
          <div class="col-12">
            <h1>{{ $t('team') }}</h1>
            <div v-if="teamList">
              <div
                v-for="(item, index) in teamList.results"
                :key="index"
                class="graduatorsCards"
              >
                <nuxt-link :to="`/${$i18n.locale}/team/${item?.id}`">
                  <div class="alumni__row d-md-flex">
                    <div class="alumni__img">
                      <img
                        class="img-graduators"
                        :src="item?.image"
                        alt="iamge"
                      />
                    </div>
                    <div class="w-100" style="padding: 0">
                      <div class="content">
                        <div class="st-floor">
                          <h6>{{ item?.title }}</h6>
                          <span>{{ item?.position }}</span>
                          <div class="line"></div>
                        </div>

                        <div class="alumni__link">
                          <div class="ps-2">
                            <p
                              v-if="item?.reception_days"
                              class="item__faculty"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M5.83333 8.33333H14.1667M5.83333 11.6667H10M5.83333 2.5V4.16667M14.1667 2.5V4.16667M5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3183C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7668 17.5 14.8333V6.83333C17.5 5.89991 17.5 5.4332 17.3183 5.07668C17.1586 4.76308 16.9036 4.50811 16.59 4.34832C16.2335 4.16667 15.7668 4.16667 14.8333 4.16667H5.16667C4.23325 4.16667 3.76654 4.16667 3.41002 4.34832C3.09641 4.50811 2.84144 4.76308 2.68166 5.07668C2.5 5.4332 2.5 5.89991 2.5 6.83333V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z"
                                  stroke="#1C89C1"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>

                              {{ item?.reception_days }}
                            </p>
                            <a
                              v-if="item?.phone_number"
                              :href="`tel:${item?.phone_number}`"
                              class="item__year"
                              style="padding-bottom: 16px !important"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M2.5 4.58333C2.5 11.717 8.28299 17.5 15.4167 17.5C15.7385 17.5 16.0576 17.4882 16.3736 17.4651C16.7362 17.4385 16.9174 17.4253 17.0825 17.3302C17.2192 17.2516 17.3488 17.1121 17.4173 16.97C17.5 16.7985 17.5 16.5984 17.5 16.1983V13.8506C17.5 13.5141 17.5 13.3459 17.4446 13.2016C17.3957 13.0743 17.3163 12.9608 17.2133 12.8713C17.0966 12.77 16.9385 12.7125 16.6223 12.5975L13.95 11.6257C13.5821 11.492 13.3981 11.4251 13.2236 11.4364C13.0697 11.4464 12.9216 11.499 12.7958 11.5881C12.6531 11.6893 12.5524 11.8571 12.351 12.1928L11.6667 13.3333C9.45845 12.3333 7.66825 10.5407 6.66667 8.33333L7.80719 7.64902C8.14288 7.44761 8.31072 7.3469 8.41186 7.20422C8.50104 7.0784 8.55356 6.93031 8.56357 6.77641C8.57493 6.60189 8.50804 6.41794 8.37426 6.05004L7.40249 3.37768C7.2875 3.06147 7.23001 2.90336 7.12868 2.78675C7.03918 2.68374 6.92575 2.60429 6.79835 2.55538C6.65413 2.5 6.4859 2.5 6.14943 2.5H3.80168C3.40157 2.5 3.20151 2.5 3.02998 2.58271C2.88792 2.65121 2.74845 2.78085 2.66975 2.91753C2.57474 3.08255 2.56146 3.26385 2.53491 3.62644C2.51177 3.94238 2.5 4.26148 2.5 4.58333Z"
                                  stroke="#1C89C1"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              {{ item?.phone_number }}
                            </a>
                            <a
                              v-if="item?.email"
                              :href="`mailto:${item?.email}`"
                              class="item__year"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M2.5 6.66797L7.0416 9.6957C8.11079 10.4085 8.64539 10.7649 9.22321 10.9034C9.73384 11.0257 10.2662 11.0257 10.7768 10.9034C11.3546 10.7649 11.8892 10.4085 12.9584 9.6957L17.5 6.66797M5.16667 15.8346H14.8333C15.7668 15.8346 16.2335 15.8346 16.59 15.653C16.9036 15.4932 17.1586 15.2382 17.3183 14.9246C17.5 14.5681 17.5 14.1014 17.5 13.168V6.83464C17.5 5.90121 17.5 5.4345 17.3183 5.07798C17.1586 4.76438 16.9036 4.50941 16.59 4.34962C16.2335 4.16797 15.7668 4.16797 14.8333 4.16797H5.16667C4.23325 4.16797 3.76654 4.16797 3.41002 4.34962C3.09641 4.50941 2.84144 4.76438 2.68166 5.07798C2.5 5.4345 2.5 5.90121 2.5 6.83464V13.168C2.5 14.1014 2.5 14.5681 2.68166 14.9246C2.84144 15.2382 3.09641 15.4932 3.41002 15.653C3.76654 15.8346 4.23325 15.8346 5.16667 15.8346Z"
                                  stroke="#1C89C1"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              {{ item?.email }}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
            <div v-else class="d-flex items-center justify-content-center">
              <NoData />
            </div>
            <div class="pagination-wrap">
              <b-pagination
                v-if="page > 1"
                v-model="page"
                :total-rows="total"
                :per-page="perPage"
                first-number
                last-number
                aria-controls="stadiums-items"
              ></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import loader from '@/components/loader.vue'

export default {
  components: {
    loader,
  },
  data() {
    return {
      page: 1,
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('team'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      teamList: (state) => state.team.teamList,
      total: (state) => state.team.teamList.total,
      perPage: (state) => state.team.teamList.per_page,
      currentPage: (state) => state.team.teamList.current_page,
    }),
  },

  watch: {
    page(newPage) {
      this.handlePaginationChange(newPage)
    },
  },

  methods: {
    async handlePaginationChange(newPage) {
      await this.$store
        .dispatch('team/fetchTeamList', { page: newPage })
        .catch(() => {})
      this.scrollToTop()
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },

  async fetch() {
    await this.$store
      .dispatch('team/fetchTeamList', { page: this.page })
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.alumni__img {
  border-radius: 12px;
  border: 1px solid #e8edf2;
  background: #e8edf2;
  margin-top: -28px;
  & img {
    border-radius: 12px;
  }
}
h1 {
  margin-top: 24px;
  margin-bottom: 52px;
}
.alumni__row {
  gap: 28px;
}
.content {
  margin-top: 28px;
}
h1 {
  border: none;
}

.graduatorsCards {
  padding: 0 24px 24px 24px;
  border-radius: 12px;
  border: 1px solid #e9edf2;
  background: #fff;
  box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);
  margin-bottom: 52px;

  .st-floor {
  }

  h6 {
    color: #1d2024;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 128%;
  }

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: #768194;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-top: 8px;
  }

  .line {
    margin-top: 20px;
  }

  transition: 0.3s all;

  &:hover {
    transform: translatey(3px);

    .line {
      width: 95%;
    }
  }
}

.ps {
  background: #f9fafc;
  width: 98%;

  .ps-2 {
    padding: 20px 28px 4px 28px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 16px;
    color: #374453;
    margin-bottom: 16px;

    svg {
      margin-top: -3px;
      margin-right: 6px;
    }
  }
}

.navs {
  margin-top: 7.8%;
}
</style>

<style lang="scss" scoped>
.alumni__link {
  display: flex;
  padding: 15px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: #f6f8fb;
}
.img-graduators {
  max-width: 176px;
  max-height: 275px;
  width: 176px;
  height: 275px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
}
.item__faculty,
.item__year {
  color: #1d2024;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  gap: 8px;
  display: flex;

  &:hover {
    color: #1c89c1;
  }
}
</style>
