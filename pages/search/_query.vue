<template>
  <div v-if="$fetchState.error" class="fetch-error">Что то пошло не так =(</div>

  <div v-else>
    <bread-crumbs :type="'press'" :links="links" />
    <div class="single page search-results">
      <div class="main-content">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <h1 class="title" style="margin-top: 12px">
                {{ $t('search_results') }}
              </h1>
              <div class="form-group">
                <input
                  v-model="search"
                  type="text"
                  class="input"
                  :placeholder="`${$t('search')}...`"
                  @input="searchLink, debouncedSearch()"
                />

                <button class="btn btn-search">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0945 18.5239C15.1971 18.5239 18.5229 15.198 18.5229 11.0954C18.5229 6.99282 15.1971 3.66699 11.0945 3.66699C6.99184 3.66699 3.66602 6.99282 3.66602 11.0954C3.66602 15.198 6.99184 18.5239 11.0945 18.5239Z"
                      stroke="#003B81"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.9997 21.0002L16.5117 16.5122"
                      stroke="#003B81"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  v-if="search.length"
                  class="btn clear"
                  @click.prevent="clearSearch"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L13 13M1 13L13 1"
                      stroke="#9FABB9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div v-if="filteredResults && filteredResults.length && search">
                <nuxt-link
                  v-for="(result, index) in filteredResults"
                  :key="index"
                  :to="generateLink(result)"
                  class="search-result"
                >
                  <h6 class="result" v-html="generateHtml(result)"></h6>
                  <div class="tag">{{ $t(result.type) }}</div>
                </nuxt-link>
              </div>

              <div v-else class="search-result-not-found">
                <div class="img-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="139"
                    height="146"
                    viewBox="0 0 139 146"
                    fill="none"
                  >
                    <path
                      d="M122.121 54.3082C124.599 54.3082 126.607 52.2929 126.607 49.807C126.607 47.321 124.599 45.3057 122.121 45.3057C119.643 45.3057 117.635 47.321 117.635 49.807C117.635 52.2929 119.643 54.3082 122.121 54.3082Z"
                      fill="#EAEEF9"
                    />
                    <path
                      d="M2.95146 78.6503C4.58151 78.6503 5.90293 77.3244 5.90293 75.6889C5.90293 74.0534 4.58151 72.7275 2.95146 72.7275C1.32142 72.7275 0 74.0534 0 75.6889C0 77.3244 1.32142 78.6503 2.95146 78.6503Z"
                      fill="#EAEEF9"
                    />
                    <path
                      d="M16.5179 131.891C18.1479 131.891 19.4693 130.565 19.4693 128.929C19.4693 127.294 18.1479 125.968 16.5179 125.968C14.8878 125.968 13.5664 127.294 13.5664 128.929C13.5664 130.565 14.8878 131.891 16.5179 131.891Z"
                      fill="#EAEEF9"
                    />
                    <path
                      d="M32.2949 131.891L73.7122 118.881V65.541L32.2949 78.4507V131.891Z"
                      fill="#F1F3F9"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M115.13 131.891L73.7129 118.881V65.541L115.13 78.4507V131.891Z"
                      fill="#F1F3F9"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M73.7122 145L32.2949 131.99V78.6504L73.7122 91.6602V145Z"
                      fill="white"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M73.7129 145L115.13 131.99V78.6504L73.7129 91.6602V145Z"
                      fill="white"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M73.7132 65.5406L54.2401 50.9297L12.1309 65.1403L32.2958 78.4503L73.7132 65.5406Z"
                      fill="#F1F3F9"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M73.7129 65.5406L93.1859 50.9297L135.295 65.1403L115.13 78.4503L73.7129 65.5406Z"
                      fill="#F1F3F9"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M32.2958 78.6504L73.7132 91.6602L53.0539 104.87L12.1309 91.2598L32.2958 78.6504Z"
                      fill="#F1F3F9"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M115.13 78.6504L73.7129 91.6602L94.3721 104.87L135.295 91.2598L115.13 78.6504Z"
                      fill="#F1F3F9"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M85.2677 14.3326C91.07 30.1181 92.7995 33.6256 93.3671 49.18C93.1488 52.7306 93.0135 56.5915 91.3436 59.7003C89.1136 64.4561 83.6591 67.7497 78.5058 67.8031C73.1969 67.8982 67.9922 64.6397 65.6496 59.615C64.0014 56.5656 64.0538 52.3944 66.3146 49.6257C68.7724 46.9704 73.0963 46.3083 76.2068 47.9675C79.6283 49.5431 81.6705 52.8193 82.4269 56.2745C83.1833 59.7296 82.851 63.4771 81.9276 66.8844C79.9966 75.1714 78.3972 75.5723 73.6615 89.6026"
                      stroke="#C9D4E2"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-dasharray="4 4"
                    />
                    <path
                      d="M92.3307 5.97688C92.3172 8.29805 90.1624 9.71932 87.4299 8.97818C84.5528 8.48653 82.5166 7.97981 82.3855 5.90815C82.4515 3.78357 84.7638 2.95204 87.4703 2.01469C90.7155 0.722021 92.1471 3.70863 92.3307 5.97688Z"
                      fill="#F1F3F9"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M73.7391 13.0748C75.1972 14.5795 78.2713 15.0182 79.7693 12.7198C81.4119 10.1719 82.8179 8.31965 81.3073 6.61836C79.8493 5.11366 78.4302 6.12671 75.1851 7.41938C72.5836 8.7499 72.0315 11.4264 73.7391 13.0748Z"
                      fill="#F1F3F9"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M80.4667 3.47329C81.7936 2.90632 83.3832 3.32227 84.0925 4.39596C84.3946 4.73621 84.7493 5.27306 84.8543 5.66622C85.9838 8.31258 85.6287 10.9362 84.1046 11.556C82.436 12.4254 80.1371 10.9358 79.2573 8.43308C79.0472 7.64675 78.9421 7.25358 78.7846 6.66383C78.614 5.23482 79.1397 4.04026 80.4667 3.47329C80.6637 3.42038 80.4667 3.47329 80.4667 3.47329Z"
                      fill="#F1F3F9"
                    />
                    <path
                      d="M80.4667 3.47329C81.7936 2.90632 83.3832 3.32227 84.0925 4.39596C84.3946 4.73621 84.7493 5.27306 84.8543 5.66622C85.9838 8.31258 85.6287 10.9362 84.1046 11.556C82.436 12.4254 80.1371 10.9358 79.2573 8.43308C79.0472 7.64675 78.9421 7.25358 78.7846 6.66383C78.614 5.23482 79.1397 4.04026 80.4667 3.47329ZM80.4667 3.47329C80.4667 3.47329 80.6637 3.42038 80.4667 3.47329Z"
                      stroke="#D6DCE8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.4706 46.0733H16.9017V43.498H14.6998V46.0733H12.1309V48.3542H14.6998V50.9294H16.9017V48.3542H19.4706V46.0733Z"
                      fill="#AAB2C5"
                    />
                    <path
                      d="M25.1132 110.685H22.5443V108.109H20.3423V110.685H17.7734V112.966H20.3423V115.541H22.5443V112.966H25.1132V110.685Z"
                      fill="#AAB2C5"
                    />
                    <path
                      d="M137.413 110.831L134.27 109.24L135.857 106.089L133.163 104.726L131.576 107.876L128.433 106.286L127.027 109.076L130.17 110.667L128.583 113.818L131.277 115.182L132.864 112.031L136.007 113.622L137.413 110.831Z"
                      fill="#AAB2C5"
                    />
                  </svg>
                </div>
                <h5>{{ $t('search_not_found') }}</h5>
              </div>

              <div
                v-if="
                  filteredResults &&
                  filteredResults.length &&
                  formattedResults.length > 9
                "
                class="pagination-wrap"
              >
                <b-pagination
                  v-model="currentPage"
                  :total-rows="formattedResults.length"
                  :per-page="perPage"
                  first-number
                  last-number
                ></b-pagination>
              </div>
            </div>
            <div class="col-12 col-md-3" style="padding: 0">
              <div>
                <SearchSidebarCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'
import BreadCrumbs from '@/components/Breadcrumb.vue'
import SearchSidebarCard from '@/components/New/Cards/SearchSidebarCard.vue'

export default {
  name: 'Query',
  components: { SearchSidebarCard, BreadCrumbs },
  async fetch() {
    await this.$store
      .dispatch('search/search', this.$route.query.query)
      .catch(() => {})
    await this.$store
      .dispatch('newsPage/fetchNews', {
        category: 'yangiliklar',
        page: this.page,
        hashtag: '',
      })
      .catch(() => {})
  },
  data() {
    return {
      currentPage: 1,
      perPage: 9,
      search: this.$route.query.query || '',
    }
  },
  fetchOnServer: false,
  computed: {
    links() {
      return [
        {
          title: this.$t('search_results'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      results: (state) => state.search.results,
      news: (state) => state.newsPage.newsPage,
    }),
    formattedResults() {
      const results = []

      Object.keys(this.results).forEach((type) => {
        this.results[type].forEach((result) => {
          result.type = type
          results.push(result)
        })
      })

      return results
    },
    filteredResults() {
      return this.formattedResults.slice(
        (this.currentPage - 1) * this.perPage,
        (this.currentPage - 1) * this.perPage + this.perPage
      )
    },
    generateLink() {
      return (result) => {
        switch (result.type) {
          case 'events':
            return `/${this.$i18n.locale}/events/${result.id}`
          case 'news':
            return `/${this.$i18n.locale}/news/${result.slug}`
          case 'static_page':
            return `/${this.$i18n.locale}/page/${result.slug}`
          case 'elons':
            return `/${this.$i18n.locale}/press-center/elonlar/${result.id}`
          case 'photogallery':
            return `/${this.$i18n.locale}/press-center/photo/${result.id}`
          case 'videogallery':
            return `/${this.$i18n.locale}/press-center/video/${result.id}`
          default:
            return ''
        }
      }
    },
    generateHtml() {
      return (result) => {
        const title = result.title.toLowerCase()
        const query = this.$store.state.search.query.toLowerCase()
        const startIndex = title.indexOf(query)

        if (startIndex === -1) {
          return result.title
        } else {
          return `${result.title.slice(
            0,
            startIndex
          )}<span class="selected">${result.title.slice(
            startIndex,
            startIndex + query.length
          )}</span>${result.title.slice(startIndex + query.length)}`
        }
      }
    },
  },
  methods: {
    debouncedSearch: _.debounce(function () {
      this.searchLink()
    }, 500), // Adjust the debounce delay as needed
    searchLink() {
      if (this.search.length) {
        this.$router.push({
          path: '/search/',
          query: { query: this.search },
        })
        this.$route.query.query = this.search
        console.log(this.$route.query)
        setTimeout(() => {
          this.$store.dispatch('search/search', this.$route.query.query)
        }, 100)
      } else {
        this.$router.push({
          path: '/search/',
          query: { query: '' },
        })
        setTimeout(() => {
          this.$store.dispatch('search/search', '')
        }, 100)
      }
    },

    clearSearch() {
      this.search = ''
      // this.$refs.search.focus()
    },
  },
  head() {
    return {
      title: this.$t('search_results'),
    }
  },
  fetchOnServer: false,
}
</script>

<style lang="scss" scoped>
.clear {
  display: block;
  position: absolute;
  top: 12px;
  background: #a1a6b4;
  border-radius: 12px;
  color: #ffffff;
  line-height: 24px;
  padding: 0 12px;
  font-size: 0.75rem;
  margin: 10px 0px;
  width: 24px;
}

.search-result,
result {
  transition: 0.4s;
}

.search-result:hover .result {
  color: #2678d9;
  transition: all 0.4s;
}

.input:focus-within {
  border-color: #2678d9;
  box-shadow: 0 0 0 0.2rem rgba(38, 120, 217, 0.25);
}
</style>
