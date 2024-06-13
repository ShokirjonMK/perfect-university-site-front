<template>
  <div class="page-wrapper wrapper d-flex flex-column">
    <div v-if="tests.length" class="d-flex flex-column gap-5">
      <TestCard
        v-for="test of tests"
        :key="test.id"
        :test-i-d="test.id"
        :question="test.question"
        :test-answers="test.test_answers"
      />
    </div>
    <NoData v-if="!tests.length && !loading" :title="$t('here_is_empty')" />
  </div>
</template>

<script>
export default {
  async fetch() {
    const data = await this.$axios
      .$get(
        `syllabus/test/TestQuestionList/${this.$route.params.course}/?limit=100`
      )
      .finally(() => {
        this.loading = false
      })
    this.tests = data.results
  },
  data() {
    return {
      tests: [],
      loading: true,
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.wrapper {
  gap: 20px;
}
</style>
