<template>
  <div>
    <div v-if="activeText?.text" v-html="activeText?.text" />
    <NoData v-else />
  </div>
</template>

<script>
export default {
  props: {
    textSection: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    activeText() {
      return this.textSection.find((el) => el?.type === '7_independent_study')
    },
  },
}
</script>

<style lang="scss" scoped>
.self-study {
  color: #1d2024;
  font-size: 1rem;
  line-height: 130%;
}
</style>
