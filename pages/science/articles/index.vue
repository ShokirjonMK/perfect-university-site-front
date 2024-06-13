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

      <div class="container structure-styles">
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <h1>
              {{ $t('articles') }}
            </h1>
            <div>
              <div class="table-wrap laws">
                <b-table
                  v-if="articles && articles.length"
                  id="my-table"
                  striped
                  :fields="fields"
                  :items="articles"
                  responsive="lg"
                  stacked="lg"
                  class="mt-4"
                >
                  <template v-slot:cell(index)="data">
                    <div style="width: 0">
                      {{ data.index + 1 }}
                    </div>
                  </template>

                  <template v-slot:cell(name)="data">
                    <div class="">
                      {{ data.item.title }}
                    </div>
                  </template>

                  <template v-slot:cell(more)="data">
                    <div class="text-center">
                      <nuxt-link
                        :to="`/${$i18n.locale}/science/articles/${data.item.slug}`"
                      >
                        <span>
                          {{ $t('more') }}
                          <svg
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.125 8.75L4.875 5L1.125 1.25"
                              stroke="#6DB0FF"
                              stroke-width="1.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </nuxt-link>
                    </div>
                  </template>

                  <template v-slot:cell(file)="data">
                    <a
                      :href="data.item.file"
                      target="_blank"
                      class="d-block"
                      style="min-width: 70px"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.7137 14.5713V17.9999C19.7137 18.4545 19.5331 18.8906 19.2116 19.212C18.8901 19.5335 18.4541 19.7141 17.9994 19.7141H5.99944C5.54479 19.7141 5.10875 19.5335 4.78726 19.212C4.46577 18.8906 4.28516 18.4545 4.28516 17.9999V14.5713"
                          stroke="#6DB0FF"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.71484 10.2856L12.0006 14.5714L16.2863 10.2856"
                          stroke="#6DB0FF"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 14.5714V4.28564"
                          stroke="#6DB0FF"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </template>
                </b-table>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-3 navs" style="padding: 0">
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
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    sideScience,
    BreadCrumbs,
  },
  data() {
    return {
      monographies: 10,
      accordionOpen: false,
      perPage: 10,
      currentPage: 1,
      fields: [
        { key: 'index', label: '№' },
        { key: 'name', label: this.$t('article_title') },
        { key: 'more', label: '' },
      ],
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
      articles: (state) => state.articles.articles.results,
    }),
  },

  async fetch() {
    await this.$store.dispatch('articles/fetchArticles').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
h1 {
  border-bottom: none;
  font-size: 30px;
}

span {
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #6db0ff;
  margin-left: -5px;
  transition: 0.3s all;

  &:hover {
    color: #003b81;

    svg {
      path {
        stroke: #003b81;
      }
    }
  }

  svg {
    margin-left: 5px;
  }
}
table th div {
  text-align: center !important;
}

.navs {
  margin-top: -1.3%;
}
</style>
