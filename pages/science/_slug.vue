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

      <div v-if="scientificNewsSingle.news" class="container">
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <h1>
              {{ scientificNewsSingle.news.title }}
            </h1>
            <div class="d-flex justify-content-between">
              <span>
                <svg
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
                    d="M10.6665 1.3335V4.00016"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.3335 1.3335V4.00016"
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
                {{
                  $moment(scientificNewsSingle.news.publish_date)
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
              <span>
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66675 7.99984C1.66675 7.99984 4.33341 2.6665 9.00008 2.6665C13.6667 2.6665 16.3334 7.99984 16.3334 7.99984C16.3334 7.99984 13.6667 13.3332 9.00008 13.3332C4.33341 13.3332 1.66675 7.99984 1.66675 7.99984Z"
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
                {{ scientificNewsSingle.news.views }}
              </span>
            </div>
            <div>
              <img
                :src="scientificNewsSingle.news.image_url"
                :alt="scientificNewsSingle.news.title"
              />
            </div>
            <div>
              <div
                class="mt-4 single-content"
                v-html="scientificNewsSingle.news.description"
              ></div>
            </div>
            <div>
              <hashTags />
            </div>
          </div>

          <div class="col-12 col-md-3">
            <sidebarAppeal />
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <h1>Shuningdek o‘qing</h1>
          </div>
          <template
            v-if="
              scientificNewsSingle.related &&
              scientificNewsSingle.related.length
            "
          >
            <div
              v-for="(item, index) in scientificNewsSingle.related"
              :key="index"
              class="col-12 col-md-3"
            >
              <NuxtLink :to="`${item.slug}`">
                <div class="cards-news mt-4 mb-5">
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
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import sidebarAppeal from '~/components/sidebarAppeal'
import hashTags from '~/components/hashTags'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    sidebarAppeal,
    hashTags,
    BreadCrumbs,
  },
  data() {
    return {}
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('scientific_news'),
          link: `/${this.$i18n.locale}/science`,
        },
        {
          title: this.scientificNewsSingle?.news?.title,
          link: `${this.$i18n.locale}`,
        },
      ]
    },

    ...mapState({
      scientificNewsSingle: (state) => state.news.scientificNewsSingle,
    }),
  },

  async fetch() {
    await this.$store
      .dispatch('news/fetchScientificNewsSingle', this.$route.params.slug)
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.container {
  .recommended-news-side {
    .mini-card {
      padding: 0px 12px 12px 12px;
      background: #f9fafc;
      border: 1px solid rgba(159, 171, 185, 0.2);
      border-radius: 4px;
      margin-top: 28px;

      .line {
        height: 2px;
        background: #6db0ff;
        width: 15%;
        margin-bottom: 10px;
        transition: 0.3s all;
      }

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 20px;
        color: #9fabb9;
      }

      h6 {
        font-style: normal;
        font-weight: bold;
        font-size: 0.75rem;
        line-height: 21px;
        color: #44494f;
        margin-top: 16px;
      }

      &:hover {
        .line {
          width: 100%;
        }
      }
    }
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5625rem;
    line-height: 130%;
    color: #44494f;
    margin-top: 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e7e9ed;
  }

  .justify-content-between {
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 16px;
      color: #9fabb9;
      margin-top: 16px;
      margin-bottom: 20px;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 144.5%;
    color: #44494f;
  }

  .cards-news {
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    box-shadow: 0px 4px 8px rgba(159, 171, 185, 0.08);
    border-radius: 4px;
    min-height: 287px;

    img {
      height: 149px;
      width: 100%;
    }

    .text-info {
      padding: 12px 12px 0px 12px;

      h6 {
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
        width: 15%;
        height: 2px;
        background: #6db0ff;
        transition: 0.3s all;
        margin-top: 8px;
      }
    }

    transition: 0.3s all;

    &:hover {
      transform: translateY(3px);

      .line {
        width: 100%;
      }
    }
  }
}
</style>
