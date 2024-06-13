<template>
  <div v-if="$fetchState.pending" class="fetch-pending">
    <loader />
  </div>
  <div v-else-if="$fetchState.error" class="fetch-error">
    Что то пошло не так =(
  </div>
  <div v-else class="container pb-5">
    <bread-crumbs :type="'press'" :links="links" />
    <div class="row">
      <div class="col-12 col-lg-9">
        <div class="hero">
          <div class="content">
            <span class="top-tile">{{ $t('admisison_yaer') }}</span>
            <h1 class="title">
              {{ $t('internetional_apply') }}
              <strong>{{ $t('international') }}</strong> {{ $t('students') }}
            </h1>
            <p class="description">
              On the approval of the regulation on the procedure for obtaining a
              second and subsequent higher education in higher educational
              institutions of the republic of uzbekistan
            </p>
          </div>
          <a
            class="secondary"
            target="_blank"
            href="https://qabul.perfectuniversity.uz/ "
          >
            {{ $t('apply_now') }} <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div class="intro__main-card">
          <div>
            <h2 class="intro_facts-title with-icon">
              <img
                src="/image/about-tsue/mission-logo.svg"
                alt="Mission logo"
                class="rounded-0"
              />
              {{ $t('why_tpu') }}
            </h2>
            <div v-html="statistic?.main?.content" />
          </div>

          <div class="intro__item">
            <div class="d-flex align-items-center">
              <h2 class="intro_facts-title">{{ $t('tsue_in_numbers') }}</h2>
            </div>
            <div
              v-if="statistic && statistic.items && statistic.items.length"
              class="row"
            >
              <div
                v-for="(item, index) in statistic.items"
                :key="index"
                class="col-12 col-md-4 col-lg-3 statistics__item"
              >
                <div class="numbers">
                  <img
                    class="numbers__icon"
                    :src="
                      item.blue_icon_url || '/image/about-tsue/mission-logo.svg'
                    "
                    alt="Mission logo"
                  />
                  <p class="numbers__title">{{ item.title }}</p>
                  <h1 class="numbers__counter counter">
                    <number
                      ref="animateQWE"
                      :from="0"
                      :to="item.number"
                      :duration="5"
                      :delay="1"
                      easing="Power1.easeOut"
                    ></number>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="intro__item">
            <h2 class="intro_facts-title">
              {{ $t('international_networking') }}
            </h2>
            <ul class="intern-networking">
              <li
                v-for="item in internationalList"
                class="intern-networking__item"
              >
                <span>{{ $t(`${item.title}`) }}</span>
              </li>
            </ul>
          </div>
          <div class="intro__item">
            <h2 class="intro_facts-title">
              {{ $t('foreign_students_about_us') }}
            </h2>
            <div
              v-if="statistic && statistic.main"
              ref="statisticsAnimate"
              class="statistics"
              :style="{
                backgroundImage: 'url(' + statistic.main.image_url + ')',
              }"
              @mouseover.prevent="mouseOver()"
            >
              <div class="overlay-image"></div>
              <div class="player__video width-full">
                <template v-if="singleVideo && singleVideo.length">
                  <div
                    class="text-center height-full d-flex align-items-center justify-content-center"
                  >
                    <div
                      v-for="(item, indexVideo) in singleVideo"
                      :key="indexVideo"
                      class="animation-play"
                      @click="index = indexVideo"
                    >
                      <svg
                        class="animate-play"
                        width="104"
                        height="104"
                        viewBox="0 0 104 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="52" cy="52" r="52" fill="white" />
                        <path
                          d="M61.3165 46.5728C64.196 48.3725 65.6357 49.2723 66.1294 50.4244C66.5606 51.4305 66.5606 52.5695 66.1294 53.5756C65.6357 54.7277 64.196 55.6275 61.3165 57.4272L47.792 65.88C44.5961 67.8774 42.9981 68.8762 41.6795 68.7701C40.53 68.6777 39.4764 68.0938 38.7888 67.168C38 66.1059 38 64.2216 38 60.4528V43.5472C38 39.7784 38 37.8941 38.7888 36.832C39.4764 35.9062 40.53 35.3223 41.6795 35.2299C42.9981 35.1238 44.5961 36.1226 47.792 38.12L61.3165 46.5728Z"
                          fill="#2678D9"
                        />
                      </svg>

                      <span class="animate-2nd"> </span>
                      <span class="animate-1st"> </span>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <CoolLightBox
          v-if="singleVideo && singleVideo.length"
          :items="singleVideo"
          :index="index"
          @close="index = null"
        >
        </CoolLightBox>
      </div>
      <div class="col-12 col-lg-3">
        <AdmissionSidebar />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'
import BreadCrumbs from '@/components/Breadcrumb.vue'
import AdmissionSidebar from '@/components/AdmissionSidebar.vue'
export default {
  name: 'Statistics',
  components: {
    BreadCrumbs,
    CoolLightBox,
    AdmissionSidebar,
  },

  data() {
    return {
      index: null,
      singleVideo: [],
      internationalList: [
        {
          icon: 'grant-icon',
          title: 'international_networking',
        },
        {
          icon: 'grant-icon',
          title: 'international_cooperation',
        },
        {
          icon: 'grant-icon',
          title: 'double_degree_joint_programs',
        },
      ],
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('about_tsue'),
          link: `${this.$i18n.locale}/about`,
        },
        {
          title: this.$t('statistics'),
          link: `${this.$i18n.locale}/about/statistics`,
        },
      ]
    },
    ...mapState({
      statistic: (state) => state.statistic.statistic,
    }),
  },

  methods: {
    mouseOver() {
      for (let i = 0; i < this.$refs.animateQWE.length; i++) {
        this.$refs.animateQWE[i].play()
      }
    },
  },
  async fetch() {
    await this.$store.dispatch('statistic/fetchStatistic').catch(() => {})
    this.singleVideo.push(this.statistic.main?.link)
  },
}
</script>
<style scoped lang="scss">
.hero {
  margin-top: 32px;
  margin-bottom: 75px;

  .content {
    margin-bottom: 48px;
  }

  .top-tile {
    color: var(--main-dark);
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 132%; /* 26.4px */
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .title {
    color: var(--main-dark);
    font-size: 40px;
    font-weight: 700;
    line-height: 132%; /* 52.8px */
    text-transform: uppercase;
    margin-bottom: 16px;

    strong {
      color: #ffffff;
      background-color: var(--darkBlue);
      padding: 0 4px;
    }
  }

  .description {
    color: #5a626c;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 136%;
  }
}
.intro__main-card {
  border-radius: 12px;
  background: #fff;
  margin-top: 24px;
  padding: 24px 26px;
  & h2 {
    color: #144176;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 132%;
    padding-left: 12px;
    position: relative;
    margin-bottom: 16px;
  }

  & h2.with-icon {
    padding-left: 0;
    &::before {
      display: none;
    }
  }

  & h2:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 32px;
    border-radius: 2px 8px 8px 2px;
    background: #2678d9;
  }
  & li {
    display: flex;
    align-items: center;
  }
  & .intro__item {
    margin-top: 24px;
  }
  .numbers {
    display: flex;
    padding: 16px 16px 35px 16px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    background: #f6f8fb;
    backdrop-filter: blur(10.5px);
    margin-top: 20px;
    height: 85% !important;
  }
  .numbers__icon {
    width: 32px;
    height: 32px;
  }
  .statistics .numbers__counter .counter {
    margin-top: 4px;
    color: #1d2024;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  }
  .numbers__title {
    color: #768194;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 136%;
    margin-top: 16px !important;
    margin-bottom: 4px !important;
  }
}
.numbers__counter {
  margin-top: 6px;
  color: #1d2024;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
}

.statistics__inner {
  padding-bottom: 44px;
}
.statistics__item {
  padding: 0 12px !important;
}

.intern-networking {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;

  .intern-networking__item {
    background-color: var(--gray-bg);
    padding: 12px;
    border-radius: 12px;

    span {
      color: var(--main-dark);
      font-size: 1rem;
      font-weight: 700;
      line-height: 130%; /* 20.8px */
    }
  }
}

.statistics {
  border-radius: 12px;
  width: 100%;
  height: 395px;
  padding: 0;
  margin: 0;
  position: relative;

  .animation-play {
    position: relative;
    cursor: pointer;
    transform: translate(0, 100px);
  }
}

.player__video {
  backdrop-filter: blur(10.5px);
  border-radius: 12px;
}
.statistics__inner {
  padding-bottom: 44px;
}
.statistics__item {
  padding: 0 12px !important;
}

@media (max-width: 767px) {
  .hero {
    margin: 24px 0;

    .top-tile {
      font-size: 1rem;
    }

    .title {
      font-size: 2rem;
    }
  }
}

.overlay-image {
  height: 100%;
  position: absolute;
  width: 100%;
  background: radial-gradient(
    54.3% 54.3% at 50% 45.7%,
    rgba(0, 49, 107, 0.7) 0%,
    rgba(0, 49, 107, 0.78) 100%
  );
  border-radius: 12px;
}

.secondary {
  border: 1px solid transparent;
  background: #1c89c1;
  color: white;
  padding: 12px 25px;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  border-radius: 8px;
  i {
    font-size: 1rem;
    color: white;
  }
  &:hover {
    background: #1967b0;
  }
}
</style>
