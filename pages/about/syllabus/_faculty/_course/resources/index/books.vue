<template>
  <div class="d-flex flex-column wrapper mt-4">
    <ResourcesCard
      v-for="item of bookList"
      :key="item.id"
      download
      :title="item.title"
      :file="item.file"
    />
  </div>
</template>

<script>
export default {
  name: 'Books',
  async fetch() {
    const data = await this.$axios.$get(
      '/syllabus/course_resource/CourseResourceLessonFile/?limit=100'
    )

    this.bookList = data.results
  },
  data() {
    return {
      bookList: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  gap: 16px;
  padding-bottom: 64px;
}
</style>
