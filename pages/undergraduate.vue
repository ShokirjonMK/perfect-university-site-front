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
            <Undergraduate />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Undergraduate from '../components/Undergraduate.vue'

export default {
  name: 'Student',
  components: { Undergraduate },
  computed: {
    routeSegmentsWithTitles() {
      const segments = this.$route.path
        .split('/')
        .filter((segment) => segment !== '')
      const languageCodesToRemove = ['sr', 'ru', 'en']
      const breadcrumbSegments = []

      // Check if the last segment is to be removed
      const removeLastSegment =
        'undergraduate/faq/tez-tez-soraladigan-savollarga-javoblar'

      // If the last segment is to be removed, pop it off the array
      if (segments[segments.length - 1] === removeLastSegment) {
        segments.pop()
      }

      for (let i = 0; i < segments.length; i++) {
        const segment = segments[i]
        if (languageCodesToRemove.includes(segment)) {
          continue
        }

        const i18nKey = segment.replace(/-/g, '_')

        const title = this.$t(i18nKey)
        const link = this.$t(segments?.slice(0, i + 1).join('/')).replace(
          /-/g,
          '_'
        )

        const breadcrumbSegment = {
          title: title.replace(/-/g, '_'),
          link,
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
