<template>
  <button class="table-more" v-if="show < data.length" @click="handleShow(data)">
    <span class="table-more__text">{{ $t('more_data') }}</span>
    <span class="table-more__count">({{ data.length - show }})</span>
  </button>
</template>

<script>
export default {
  emits: ['handleShow'],
  props: {
    show: {
      type: Number
    },
    data: {
      type: Array
    }
  },
  methods: {
    handleShow(target){
      this.$emit('handleShow', target)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
