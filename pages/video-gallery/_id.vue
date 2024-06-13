<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <bread-crumbs v-if="links" :type="'press'" :links="links" />
      <div
        v-if="videosSingle && videosSingle.single"
        class="container structure-styles"
      >
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <h1>{{ videosSingle.single.title }}</h1>
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
                  $moment(videosSingle.single.publish_date)
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
                {{ videosSingle.single.views }}
              </span>
            </div>
            <div class="mt-3 single-videos" style="position: relative">
              <img :src="videosSingle.single.thumb" alt="image" />
              <div class="play-btns">
                <svg
                  width="86"
                  class="play"
                  height="86"
                  viewBox="0 0 86 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="addArray()"
                >
                  <path
                    d="M34.3513 25.7026L58.1351 42.5195L34.3513 60.2972V25.7026Z"
                    fill="white"
                    stroke="white"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="80"
                    height="80"
                    rx="40"
                    stroke="white"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="86"
                  class="play1"
                  height="86"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="addArray()"
                >
                  <rect width="64" height="64" rx="32" fill="white" />
                  <path
                    d="M25.082 18.1621L44.1091 31.6156L25.082 45.8378V18.1621Z"
                    fill="#024DA5"
                    stroke="#024DA5"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <CoolLightBox
                v-if="videos && videos.length"
                :items="videos"
                :index="index"
                @close="popArray()"
              >
              </CoolLightBox>
            </div>

            <div
              class="single-content"
              v-html="videosSingle.single.description"
            ></div>
            <hashTags />
          </div>

          <div class="col-12 col-md-3 navs" style="padding: 0">
            <div>
              <internationalSide side-head-id="7" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5 pt-4">
      <div class="container">
        <div
          v-if="
            videosSingle && videosSingle.related && videosSingle.related.length
          "
          class="row"
        >
          <div class="col-12">
            <h1>{{ $t('related_topics') }}</h1>
          </div>
          <div
            v-for="(item, index) in videosSingle.related"
            :key="index"
            class="col-12 col-md-3"
          >
            <NuxtLink :to="`${item.id}`">
              <div class="cards-news">
                <div class="images">
                  <img :src="item.thumb" style="width: 100%" alt="image" />
                  <div
                    v-if="videosSingle && videosSingle.single"
                    class="play-btns"
                  >
                    <svg
                      width="64"
                      class="play"
                      height="86"
                      viewBox="0 0 86 86"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      @click="index = videosSingle.single.id"
                    >
                      <path
                        d="M34.3513 25.7026L58.1351 42.5195L34.3513 60.2972V25.7026Z"
                        fill="white"
                        stroke="white"
                        stroke-width="3.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <rect
                        x="3"
                        y="3"
                        width="80"
                        height="80"
                        rx="40"
                        stroke="white"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg
                      width="64"
                      class="play1"
                      height="86"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      @click="index = videosSingle.single.id"
                    >
                      <rect width="64" height="64" rx="32" fill="white" />
                      <path
                        d="M25.082 18.1621L44.1091 31.6156L25.082 45.8378V18.1621Z"
                        fill="#024DA5"
                        stroke="#024DA5"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div class="text-info">
                  <h6>
                    {{ item.title }}
                  </h6>

                  <div>
                    <span class="date">
                      {{
                        $moment(item.publish_date)
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
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'
import Header from '~/components/header'
import Footer from '~/components/footer'
import BreadCrumbs from '~/components/Breadcrumb'
import sideNews from '~/components/sideNews'

export default {
  components: {
    Header,
    Footer,
    BreadCrumbs,
    sideNews,
    CoolLightBox,
  },
  data() {
    return {
      index: null,
      videos: [],
    }
  },

  methods: {
    addArray() {
      this.videos.push(this.videosSingle?.single)
      this.index = 0
    },
    popArray() {
      this.videos.pop()
      this.index = null
    },
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('video_gallery'),
          link: `${this.$i18n.locale}`,
        },
        {
          title: this.videosSingle?.single?.title,
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      videosSingle: (state) => state.videos.videosSingle,
    }),
  },

  async fetch() {
    await this.$store
      .dispatch('videos/fetchVideosSingle', this.$route.params.id)
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.navs {
  margin-top: 6.5%;
}

h1 {
  padding-bottom: 16px;
}

.date {
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 16px;
  color: #9fabb9;
}

img {
  width: 100%;
}

.grad {
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
}

.single-videos {
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  height: 430px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 59, 129, 0.5);
    z-index: 1;
    transition: 0.3s all;
  }

  &:hover {
    &:after {
      background: none;
    }

    .bottom {
      i {
        opacity: 1;
      }
    }
  }
}

.play-btns:hover {
  .play {
    opacity: 0;
  }

  .play1 {
    opacity: 1;
  }
}
.play {
  cursor: pointer;
  z-index: 50;
  position: absolute;
  right: 50%;
  top: 40%;
  opacity: 1;
  transition: 0.3s all;
}

.play1 {
  cursor: pointer;
  z-index: 50;
  position: absolute;
  right: 50%;
  top: 40%;
  opacity: 0;
  transition: 0.3s all;
}

.cards-news {
  background: #ffffff;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(159, 171, 185, 0.16);
  min-height: 287px;

  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 21px;
    color: #44494f;
    padding-bottom: 8px;
  }

  .text-info {
    padding: 12px;
  }
  .play {
    cursor: pointer;
    z-index: 50;
    position: absolute;
    right: 40%;
    top: 28%;
    opacity: 1;
    transition: 0.3s all;
  }

  .play1 {
    cursor: pointer;
    z-index: 50;
    position: absolute;
    right: 40%;
    top: 28%;
    opacity: 0;
    transition: 0.3s all;
  }

  .images {
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0, 59, 129, 0.5);
      z-index: 1;
      transition: 0.3s all;
    }
    &:hover {
      &:after {
        background: none;
      }

      .bottom {
        i {
          opacity: 1;
        }
      }
    }
  }
}
</style>
