<template>
  <div class="table-data-group">
    <p v-if="data.teachers">{{ data.teachers[0] }}</p>
    <p v-if="data.class">{{ data.class[0] }}</p>
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
