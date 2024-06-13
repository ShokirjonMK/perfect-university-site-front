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
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <div class="row">
              <div class="col-12">
                <h1>{{ $t('video_gallery') }}</h1>
              </div>
              <template v-if="videos && videos.length">
                <div
                  v-for="(item, indexVideos) in videos"
                  :key="indexVideos"
                  class="col-12 col-md-4"
                >
                  <div class="video-cards mb-5">
                    <div class="images">
                      <img
                        src="@/static/image/videos-grad.svg"
                        class="gradient"
                        alt="image"
                      />
                      <img :src="item.thumb" class="pics" alt="image" />

                      <svg
                        class="initial"
                        width="68"
                        height="68"
                        viewBox="0 0 68 68"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        @click="index = indexVideos"
                      >
                        <path
                          d="M27.0811 20.1621L46.1081 33.6156L27.0811 47.8378V20.1621Z"
                          fill="white"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          x="2"
                          y="2"
                          width="64"
                          height="64"
                          rx="32"
                          stroke="white"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <svg
                        class="hovered"
                        width="68"
                        height="68"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        @click="index = indexVideos"
                      >
                        <rect width="64" height="64" rx="32" fill="white" />
                        <path
                          d="M25.0811 18.1621L44.1081 31.6156L25.0811 45.8378V18.1621Z"
                          fill="#024DA5"
                          stroke="#024DA5"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="text-info">
                      <nuxt-link
                        :to="`/${$i18n.locale}/video-gallery/${item.id}`"
                      >
                        <h6>{{ item.title }}</h6>
                      </nuxt-link>
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
              </template>

              <CoolLightBox
                v-if="videos && videos.length"
                :items="videos"
                :index="index"
                @close="index = null"
              >
              </CoolLightBox>
            </div>
            <div class="row mt-4">
              <div class="col-md-12">
                <div class="pagination-wrap">
                  <b-pagination
                    v-if="total > 9"
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
          <div class="col-12 col-md-3 navs">
            <!-- <internationalSide class="mt-4" sideHeadId="7" /> -->
            <sidebarAppeal />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'
import sideNews from '~/components/sideNews'
import sidebarAppeal from '~/components/sidebarAppeal'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    sideNews,
    sidebarAppeal,
    CoolLightBox,
    BreadCrumbs,
  },
  data() {
    return {
      index: null,
      page: 1,
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('video_gallery'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      videos: (state) => state.videos.videos.results,
      total: (state) => state.videos.videos.total,
      perPage: (state) => state.videos.videos.per_page,
      currentPage: (state) => state.videos.videos.current_page,
    }),
  },
  watch: {
    page(page) {
      this.$store
        .dispatch('videos/fetchVideos', {
          page: this.page,
        })
        .catch(() => {})
    },
  },
  async fetch() {
    await this.$store.dispatch('videos/fetchVideos', {
      page: this.page,
    })
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 32px;

  h1 {
    margin-bottom: 32px;
  }

  .navs {
    padding-right: 0;
    margin-top: 5.4%;
  }
}
</style>

<style lang="scss">
.video-cards {
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  transition: 0.5s all;
  min-height: 243px;
  .images {
    position: relative;
    height: 160px;
    img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
    }
    .gradient {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .pics {
      width: 100%;
      height: 164px;
    }

    svg {
      position: absolute;
      z-index: 3;
      left: 36%;
      top: 26%;
    }

    .hovered {
      opacity: 0;
    }
  }

  .text-info {
    padding: 12px;

    h6 {
      font-style: normal;
      font-weight: bold;
      font-size: 0.875rem;
      line-height: 21px;
      color: #44494f;
      margin-bottom: 8px;

      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 20px;
      color: #9fabb9;
    }
  }

  &:hover {
    box-shadow: 0px 4px 20px rgba(142, 153, 166, 0.16);

    transform: translateY(3px);

    .hovered {
      opacity: 1;
    }
  }
}
</style>
