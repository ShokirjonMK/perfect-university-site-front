<template>
  <div class="page-wrapper">
    <div class="row no-gutters">
      <div
        v-for="item of videoList.results"
        :key="item?.id"
        class="col-md-6 col-lg-4 wrapper"
      >
        <ResourcesVideo
          :videos="item"
          :title="item.title"
          :updated-at="item.updated_at"
        />
      </div>
    </div>
    <button-more
      v-if="videoList.next !== null"
      class="w-100 mt-4"
      :to="`/news-events`"
      :text="$t('more_news_events')"
      @click="buttonMore"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 100,
      perPage: 6,
      currentPage: 1,
      videoList: [],
      loading: true,
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      if (this.$route.query.page) {
        this.currentPage = Number(this.$route.query.page)
      }
      const data = await this.$axios
        .$get('student/videos/', {
          params: {
            syllabus: this.$route.params.course,
            offset: (this.currentPage - 1) * this.perPage,
            limit: this.perPage,
          },
        })
        .finally(() => {
          this.loading = false
        })

      this.total = data.count
      this.videoList = data
    },
    async setPage(val) {
      this.$router.push({ query: { page: val } })
      this.currentPage = val

      const data = await this.$axios.$get(
        '/syllabus/course_resource/CourseResourceLessonVideo/',
        {
          params: {
            syllabus: this.$route.params.course,
            offset: (this.currentPage - 1) * this.perPage,
            limit: this.perPage,
          },
        }
      )

      this.total = data.count
      this.videoList = data.results
    },
    buttonMore() {
      this.perPage = this.perPage + 4
      this.fetch()
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 12px;
}
</style>
