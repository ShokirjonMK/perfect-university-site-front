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
      <div class="row pt-4">
        <div class="col-12 col-lg-9">
          <h1>{{ $t('history_main') }}</h1>
          <div class="intro-history container">
            <div
              v-for="(item, index) in history?.slice(0, 1)"
              :key="index"
              class="intro-history-card"
            >
              <h2>{{ item?.title }}</h2>
              <p class="intro-history-subtitle">
                {{ item?.description }}
              </p>

              <div class="intro-images">
                <img
                  v-for="(img, idx) in item?.history_image"
                  :key="idx"
                  :src="img?.image"
                  alt="image"
                />
              </div>
            </div>
            <div
              v-for="(item, indx) in history?.slice(1, 2)"
              :key="indx"
              class="history__footer position-relative"
            >
              <div
                v-for="(img, indx) in item?.history_image"
                :key="indx"
                class="history__footer-img"
              >
                <img :src="img?.image" :alt="item?.title" />
              </div>
              <div class="mission__info-card">
                <div style="gap: 12px" class="d-flex align-items-center">
                  <h2 class="mission__card-title">{{ item?.title }}</h2>
                </div>
                <p class="mission__info-title">
                  {{ item?.description }}
                </p>
                <ul class="mission__info-title-item" style="gap: 12px">
                  <li v-for="(history, indx) in item?.history_item" :key="indx">
                    <img
                      src="@/static/image/about-tsue/zero-mission.svg"
                      alt="image"
                    />
                    {{ history?.content }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <AboutTsueSidebar class="col-12 col-lg-3 p-3" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BreadCrumbs from '@/components/Breadcrumb.vue'

export default {
  name: 'History',
  components: { BreadCrumbs },
  computed: {
    links() {
      return [
        {
          title: this.$t('about_tpu'),
          link: `${this.$i18n.locale}/about_tpu`,
        },
        {
          title: this.$t('history_main'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      rector: (state) => state.rector.rector,
    }),
  },
  async fetch() {
    const data = await this.$axios.$get('/history/')

    this.history = data.results
  },
  data() {
    return {
      history: [],
    }
  },
}
</script>

<style scoped lang="scss">
.history__footer {
  padding-top: 100px !important;
}

.intro-history {
  border-radius: 12px;
  margin-top: 24px;
  padding: 32px;
  background: #fff no-repeat right top;
  background-image: url('@/static/image/about-tsue/history-yarimOY.svg');
  overflow: hidden;
  .intro-history-card {
    .intro-history-subtitle {
      max-width: 439px;
      color: #1d2024;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      margin-top: 20px;
    }
  }
  .intro-images {
    margin-top: 52px;
    margin-bottom: 40px;
    gap: 16px;
    display: flex;
    & img {
      width: 160px;
      height: 220px;
      flex-shrink: 0;
      border-radius: 12px;
      border: 2px solid #2678d9;
      background: lightgray 50% / cover no-repeat;
    }
    :nth-child(1) {
      margin-top: 20px;
    }
    :nth-child(2) {
      margin-top: 72px;
    }
    :nth-child(3) {
      margin-top: 36px;
    }
    :nth-child(5) {
      margin-top: 36px;
    }
  }
}

.timeline {
  position: relative;
  padding: 40px 0 0 0;
}
.main_timeline .timeline:last-child {
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
}

.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background: #e9edf2;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.main {
  position: relative;
  background: inherit;
  width: 50%;
}

.main.left {
  left: 0;
  padding-right: 33px;
}

.main.right {
  left: 50%;
  padding-left: 33px;
}

.main::after {
  content: '';
  position: absolute;
  width: 28px;
  height: 28px;
  top: calc(50% - 11px);
  right: -13px;
  background: #ffffff;
  border: 4px solid #2678d9;
  border-radius: 16px;
  z-index: 1;
}

.main.right::after {
  left: -14px;
}

.main.right::before {
  left: 8px;
}

.main .date {
  position: absolute;
  display: inline-block;
  top: calc(50% - 14px);
  text-align: center;
  letter-spacing: 1px;
  z-index: 1;
  color: #144176;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
}

.main.left .date {
  right: -120px;
}

.main.right .date {
  left: -120px;
}

.main .icon {
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 9px 0;
  top: calc(50% - 20px);
  border: 2px solid #e9edf2;
  border-radius: 40px;
  text-align: center;
  font-size: 1.125rem;
  color: #e9edf2;
  z-index: 1;
}

.main.left .icon {
  right: 56px;
}

.main.right .icon {
  left: 56px;
}

.main .content {
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #e8edf2;
  background: #f6f8fb;
}

.main.right .content {
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #e8edf2;
  background: #f6f8fb;
}

.main .content h6 {
  margin: 0 0 10px 0;
  color: #1d2024;
  font-size: 1rem;
  font-weight: 600;
  line-height: 130%;
}

.main .content p {
  margin: 0;
  color: #768194;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}

@media (max-width: 767.98px) {
  .timeline::after {
    left: 0;
  }

  .main {
    width: 100%;
    padding-left: 20px;
    padding-right: 30px;
  }

  .main.right {
    left: 0%;
  }

  .main.left::after,
  .main.right::after {
    left: -13px;
  }

  .main.left::before,
  .main.right::before {
    left: 100px;
    border-color: transparent #e9edf2 transparent transparent;
  }

  .main.left .date,
  .main.right .date {
    right: auto;
    left: 24px;
  }
  .main.left {
    padding-right: 0 !important;
  }
  .main.right {
    padding-left: 20px !important;
    padding-right: 0 !important;
  }

  .main::after {
    top: -42px;
  }
  .main .content {
    margin-bottom: 60px;
  }
  .main .date {
    top: -45px;
  }
  .timeline {
    padding: 97px 0 0 0;
  }
}
@media screen and (max-width: 991px) {
  .history__footer {
    flex-direction: column;
    align-items: start !important;
  }
  .history__footer-img {
    left: 0 !important;
  }
}
.mission__info-title {
  color: #768194;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-top: 12px;
  margin-bottom: 20px;
}
.mission__info-title-item li {
  display: flex;
  gap: 8px;
}
.mission__info-title-item {
  display: flex;
  flex-direction: column;
}
.mission__info-card {
  max-width: 447px;
  @media screen and (max-width: 991px) {
    max-width: 100%;
    margin-top: 60px;
  }
}
.history__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.history__footer-img {
  position: relative;
  left: -33px;
  width: 364px;
  height: 364px;
}
h2 {
  color: #144176;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  padding-left: 12px;
  position: relative;
}

h2:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 32px;
  border-radius: 2px 8px 8px 2px;
  background: #2678d9;
}
</style>
