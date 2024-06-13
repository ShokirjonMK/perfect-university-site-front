<template>
  <div class="table-data-group">
    <p>{{ data.subject }}</p>
    <p v-if="data.teachers">{{ data.teachers[0] }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.table-data-group p{
  color: inherit;
}
</style>
