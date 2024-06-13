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
      <div v-if="articlesSingle" class="container structure-styles">
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <h1>
              {{ articlesSingle.title }}
            </h1>
            <div>
              <b-tabs content-class="mt-3">
                <b-tab title="Maqola va ishlanmalar" active>
                  <h2>{{ $t('academic_calendar') }}:</h2>
                  <div
                    v-if="
                      articlesSingle.section && articlesSingle.section.length
                    "
                    class="accordion"
                    role="tablist"
                  >
                    <b-card
                      v-for="(item, index) in articlesSingle.section"
                      :key="index"
                      no-body
                      class="mb-4 pb-1"
                    >
                      <b-card-header
                        header-tag="header"
                        class="header d-flex"
                        role="tab"
                      >
                        <b-button
                          v-b-toggle.v-b-toggle="'accordion' + index"
                          class="text-left"
                          block
                          @click="accordionOpen = !accordionOpen"
                        >
                          <div class="d-flex justify-content-between">
                            <h6>{{ item.section_number }} - seksiya:</h6>
                            <i>
                              <svg
                                :class="accordionOpen ? 'accordion_open' : ''"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20.0001 12.0001H3.99993"
                                  stroke="#9FABB9"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  class="opacity"
                                  d="M12 4V20.0001"
                                  stroke="#9FABB9"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </i>
                          </div>
                        </b-button>
                      </b-card-header>
                      <b-collapse
                        :id="'accordion' + index"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text v-if="item.data && item.data.length">
                            <a
                              v-for="(datas, index) in item.data"
                              :key="index"
                              :href="`${datas.file_url}`"
                              download
                            >
                              <div class="d-flex title mb-3">
                                <div class="number">
                                  <span> {{ item.section_number }} </span>
                                </div>
                                <div>
                                  <span class="author"> {{ datas.title }}</span>
                                  <h6>{{ datas.author }}</h6>
                                </div>
                              </div>
                            </a>
                          </b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </b-tab>
                <b-tab
                  v-if="
                    articlesSingle.mono_files &&
                    articlesSingle.mono_files.length
                  "
                  :title="$t('monografiyalar')"
                  class="mb-5"
                >
                  <a
                    v-for="(items, index) in articlesSingle.mono_files"
                    :key="index"
                    :href="items.file_url"
                  >
                    <div class="rows toDownload">
                      <h6>{{ items.title }}</h6>
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
                        Monografiya_1.pdf
                      </span>
                    </div>
                  </a>
                </b-tab>
              </b-tabs>
            </div>
          </div>

          <div class="col-12 col-md-3" style="padding: 0">
            <div>
              <sideCourses />
              <sidebarAppeal />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import sideScience from '@/components/sideScience'

export default {
  components: {
    sideScience,
  },
  data() {
    return {
      monographies: 10,
      accordionOpen: false,
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('scientific_articles'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },

    ...mapState({
      articlesSingle: (state) => state.articles.articlesSingle,
    }),
  },

  async fetch() {
    await this.$store
      .dispatch('articles/fetchArticlesSingle', this.$route.params.slug)
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
h1 {
  border-bottom: none;
}

.tabs {
  .card {
    border: none !important;
  }

  .card-text a {
    span {
      color: #44494f;
    }

    h6 {
      color: #8c8c8c;
    }

    transition: 0.3s all;
  }

  .number {
    padding: 6px 9px;
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    box-sizing: border-box;
    border-radius: 2px;
    margin-right: 11px;
    margin-top: 2px;
    margin-left: -40px;
  }

  .title {
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    box-sizing: border-box;
    padding: 12px 25px 12px 25px;
    border-radius: 2px;

    a h6 {
      margin-top: 8px;
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 17px;
      color: #8c8c8c;
    }

    span {
      font-weight: 700;
    }

    &:hover {
      span {
        color: #024da5;
      }

      h6 {
        color: #6db0ff;
      }
    }
  }

  .card-text {
    border: none !important;
    margin-top: 0;
    padding-top: 0;
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
