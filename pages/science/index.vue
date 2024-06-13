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

      <div class="container mb-5">
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <h1>{{ $t('scientific_news') }}</h1>

            <div
              v-if="
                scientificNews &&
                scientificNews.results &&
                scientificNews.results.length
              "
              class="row"
            >
              <div
                v-for="(item, index) in scientificNews.results"
                :key="index"
                class="col-12 col-md-4"
              >
                <NuxtLink :to="`/${$i18n.locale}/science/${item.slug}`">
                  <div class="cards-news mt-4">
                    <img :src="item.thumbnail_url" :alt="item.title" />
                    <div class="text-info">
                      <h6>
                        {{ item.title }}
                      </h6>
                      <div class="d-flex justify-content-between">
                        <span class="status">
                          {{ item.category }}
                        </span>
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
                      <div class="line"></div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>

            <h1>
              {{ $t('for_download') }}
            </h1>
            <a v-if="toDownload && toDownload.length" href="">
              <div
                v-for="(item, index) in toDownload"
                :key="index"
                class="rows toDownload"
              >
                <h6>{{ item.title }}</h6>
                <a :href="item.file_url" download>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9997 18.3332H4.99967C4.08301 18.3332 3.33301 17.5832 3.33301 16.6665V14.1665H4.99967V16.6665H14.9997V6.49984L11.833 3.33317H4.99967V8.33317H3.33301V3.33317C3.33301 2.4165 4.08301 1.6665 4.99967 1.6665H12.4997L16.6663 5.83317V16.6665C16.6663 17.5832 15.9163 18.3332 14.9997 18.3332Z"
                        fill="#9FABB9"
                      />
                      <path
                        d="M15.417 6.6665H11.667V2.9165L15.417 6.6665Z"
                        fill="#9FABB9"
                      />
                      <path
                        d="M4.58366 10H4.16699V10.8333H4.58366C4.83366 10.8333 5.00033 10.6667 5.00033 10.4167C5.00033 10.1667 4.83366 10 4.58366 10ZM8.00033 10H7.50033V12.5H8.00033C8.50033 12.5 9.16699 12.3333 9.16699 11.5833V10.9167C9.16699 10.1667 8.58366 10 8.00033 10Z"
                        fill="#9FABB9"
                      />
                      <path
                        d="M3.33366 7.5C2.41699 7.5 1.66699 8.25 1.66699 9.16667V13.3333C1.66699 14.25 2.41699 15 3.33366 15H15.8337V7.5H3.33366ZM4.58366 11.6667H4.16699V13.3333H3.33366V9.16667H4.58366C5.25033 9.16667 5.83366 9.75 5.83366 10.4167C5.83366 11.0833 5.25033 11.6667 4.58366 11.6667ZM10.0003 11.5833C10.0003 12.5833 9.33366 13.3333 8.00033 13.3333H6.66699V9.16667H8.00033C9.33366 9.16667 10.0003 10 10.0003 10.9167V11.5833ZM13.3337 10H11.667V10.8333H13.0003V11.6667H11.667V13.3333H10.8337V9.16667H13.3337V10Z"
                        fill="#9FABB9"
                      />
                    </svg>
                    {{ item.file_name }}
                  </span>
                </a>
              </div>
            </a>
          </div>

          <div class="col-12 col-md-3 side">
            <internationalSide class="mt-4" side-head-id="2" />
            <sidebarAppeal />
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SideScience from '../../components/sideScience.vue'
import sidebarAppeal from '~/components/sidebarAppeal'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    sidebarAppeal,
    SideScience,
    BreadCrumbs,
  },
  data() {
    return {}
  },

  computed: {
    ...mapState({
      links() {
        return [
          {
            title: this.$t('scientific_news'),
            link: `${this.$i18n.locale}`,
          },
        ]
      },

      scientificNews: (state) => state.news.scientificNews,
      toDownload: (state) => state.news.toDownload,
    }),
  },

  async fetch() {
    await this.$store.dispatch('news/fetchScientificNews').catch(() => {}),
      await this.$store.dispatch('news/fetchToDownload').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    margin-top: 32px;
    margin-bottom: 16px;
  }

  .cards-news {
    position: relative;
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    border-radius: 4px;
    min-height: 287px;

    img {
      height: 149px;
      width: 100%;
    }

    .text-info {
      padding: 12px 12px 0px 12px;

      h6 {
        margin-top: 12px;
        margin-bottom: 16px;
        font-style: normal;
        font-weight: bold;
        font-size: 0.875rem;
        line-height: 21px;
        color: #44494f;

        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 20px;
        text-align: right;
        color: #9fabb9;
      }

      .status {
        font-style: normal;
        font-weight: normal;
        font-size: 0.875rem;
        line-height: 20px;
        color: #44494f;
      }

      .line {
        width: 25%;
        height: 2px;
        background: #6db0ff;
        transition: 0.3s all;
        margin-top: 8px;
      }
    }

    transition: 0.3s all;

    &:hover {
      .line {
        width: 100%;
      }

      transform: translateY(3px);
    }
  }

  .side {
    margin-top: 0.3%;
  }
}

.rows {
  padding: 18px 20px 18px 20px;
  background: #f9fafc;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  margin-top: 20px;
  transition: 0.3s all;

  h6 {
    margin-bottom: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 24px;
    color: #44494f;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 16px;
    color: #9fabb9;
  }

  &:hover {
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    box-shadow: 0px 4px 20px rgba(159, 171, 185, 0.16);
    border-radius: 4px;
  }
}
</style>
