<template>
  <div>
    <NuxtChild :text-section="textSection" />
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
}
</script>

<style lang="scss" scoped></style>
