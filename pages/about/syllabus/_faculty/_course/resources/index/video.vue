<template>
  <div class="page-wrapper">
    <div class="row no-gutters">
      <div
        v-for="(item, index) of videoList"
        :key="item?.id"
        class="col-md-6 col-lg-4 wrapper"
      >
        <ResourcesVideo
          :title="item.title"
          :url="item.url"
          :file="item"
          :updated-at="item.updated_at"
        />
      </div>
    </div>
    <el-pagination
      v-if="!loading"
      class="my-pagination d-flex justify-content-end"
      hide-on-single-page
      background
      layout="prev, pager, next, slot"
      :total="total"
      :page-size="perPage"
      :current-page="currentPage"
      @current-change="setPage"
    >
    </el-pagination>
  </div>
</template>

<script>
import LightBox from '@/components/LightBox/index.vue'
export default {
  components: { LightBox },
  async fetch() {
    if (this.$route.query.page) {
      this.currentPage = Number(this.$route.query.page)
    }
    const data = await this.$axios
      .$get('/syllabus/course_resource/CourseResourceLessonVideo/', {
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
    this.videoList = data.results
  },
  data() {
    return {
      total: 100,
      perPage: 12,
      currentPage: 1,
      videoList: [],
      loading: true,
    }
  },
  methods: {
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
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 12px;
}
</style>
