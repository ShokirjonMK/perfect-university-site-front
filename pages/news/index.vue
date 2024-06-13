<template>
  <div v-if="$fetchState.pending" class="fetch-pending">
    <loader />
  </div>
  <div v-else-if="$fetchState.error" class="fetch-error">
    Что то пошло не так =(
  </div>
  <div v-else>
    <BreadCrumbs :type="'press'" :links="links" />
    <div class="container mb-5" style="padding-top: 24px">
      <div class="">
        <div>
          <h1 class="news-title">{{ $t('news_events') }}</h1>
          <Transition name="fade" mode="out-in">
            <div :key="loading">
              <div v-if="loading" class="news-wrapper">
                <NewsMainCardLoading class="news-main-card" />
                <NewsCardLoading v-for="i in 10" :key="i" />
              </div>
              <div v-if="newsPage?.length && !loading" class="news-wrapper">
                <NewsMainCard :data="newsPage?.slice(0, 1)?.[0]" loading />
                <NewsCard
                  v-for="(data, index) in newsPage?.slice(1)"
                  :key="index"
                  loading
                  class="news-card"
                  v-bind="{ data }"
                />
              </div>
              <div v-if="total > perPage && !loading" class="pagination-wrap">
                <BPagination
                  v-model="page"
                  :total-rows="total"
                  :per-page="perPage"
                  first-number
                  last-number
                  aria-controls="stadiums-items"
                />
              </div>
              <NoData v-if="!newsPage?.length && !loading" class="w-100" />
            </div>
          </Transition>
          <!-- tabs -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '~/components/loader'
import NoData from '~/components/NoData.vue'
import BreadCrumbs from '~/components/Breadcrumb'
import NewsCard from '~/components/New/Cards/News/NewsCard.vue'
import NewsMainCard from '~/components/New/Cards/News/NewsMainCard.vue'
import NewsMainCardLoading from '~/components/New/Cards/News/NewsMainCardLoading.vue'
import NewsCardLoading from '~/components/New/Cards/News/NewsCardLoading.vue'

export default {
  components: {
    NewsCardLoading,
    NewsMainCardLoading,
    NewsMainCard,
    NewsCard,
    Loader,
    BreadCrumbs,
    NoData,
  },
  async fetch() {
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page)
    }
    await this.$store.dispatch('news/fetchNewsCategories').catch(() => {})
    await this.$store
      .dispatch('newsPage/fetchNews', {
        category: '',
        page: this.page,
        hashtag: '',
      })
      .catch(() => {})
      .finally(() => (this.loading = false))
  },
  data() {
    return {
      page: 1,
      activeCategory: 1,
      categoryName: 'yangiliklar',
      loading: true,
    }
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('news'),
          link: `${this.$i18n.locale}/press-center/news`,
        },
      ]
    },
    ...mapState({
      newsCategories: (state) => state.news.newsCategories,
      newsPage: (state) => state.newsPage.newsPage,
      perPage: (state) => state.newsPage.perPage,
      total: (state) => state.newsPage.total,
      currentPage: (state) => state.newsPage.currentPage,
    }),
  },
  watch: {
    page(page) {
      this.$router.push({ query: { page } })
      this.loading = true
      this.$store
        .dispatch('newsPage/fetchNewsPage', {
          page,
          categorySlug: this.categoryName,
        })
        .finally(() => (this.loading = false))
    },
  },
  created() {
    this.page = this.currentPage
  },
  methods: {
    async fetchNewsCategory(category) {
      this.categoryName = category
      this.page = 1
      await this.$store.dispatch('newsPage/fetchNews', {
        category_slug: this.categoryName,
        page: this.page,
        hashtag: '',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.news-title {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  color: #1d2024;
  margin-bottom: 24px;
}

.news {
  &-wrapper {
    display: grid;
    margin-bottom: 24px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
  }

  &-main-card {
    grid-column: span 2 / span 2;
  }
}

@media screen and (max-width: 1024px) {
  .news {
    &-wrapper {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

@media screen and (max-width: 768px) {
  .news {
    &-wrapper {
      grid-template-columns: 1fr;
    }

    &-main-card {
      grid-column: span 1 / span 1;
    }
  }
}
</style>
