<template>
  <div class="syllabus-bg">
    <Breadcrumb :links="routeSegmentsWithTitles" />

    <div class="container">
      <div class="row mt-4 reversal page-wrapper">
        <div class="col-xl-9">
          <NuxtChild />
        </div>
        <div class="col-xl-3">
          <aside class="sidebar">
            <InternazationalSidebar />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Internationalization',
  computed: {
    routeSegmentsWithTitles() {
      const segments = this.$route.path
        .split('/')
        .filter((segment) => segment !== '')
      const languageCodesToRemove = ['sr', 'ru', 'en']
      const breadcrumbSegments = []
      for (let i = 0; i < segments.length; i++) {
        const segment = segments[i]
        if (languageCodesToRemove.includes(segment)) {
          continue
        }
        const breadcrumbSegment = {
          title: this.$t(`${segment?.replace(/-/g, '_')}`),
          link: this.$t(segments?.slice(0, i + 1).join('/')),
        }

        breadcrumbSegments.push(breadcrumbSegment)
      }
      return breadcrumbSegments
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  margin-left: 0;

  @media (min-width: 992px) {
    max-width: 278px;
    width: 100%;
    margin-left: auto;
  }
}

.syllabus-bg {
  background-color: #f6f8fb;
}

.reversal {
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
}
</style>
