<template>
  <div class="d-flex flex-column wrapper mt-4">
    <div v-if="resources.length">
      <ResourcesCard
        v-for="item of resources"
        :key="item.id"
        :title="item.title"
        :url="item.url"
      />
    </div>
    <NoData v-else />
  </div>
</template>

<script>
export default {
  name: 'InternetResources',
  async fetch() {
    const data = await this.$axios.$get(
      '/syllabus/course_resource/CourseResourceLessonUrl/?limit=100'
    )

    this.resources = data.results
  },
  data() {
    return {
      resources: [],
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
