<template>
  <div class="table-popover">
    <div class="table-popover-head" v-if="data">
      <p class="table-popover-head__title">{{ data.class[0] }}</p>
      <button class="table-popover-head__action" @click.prevent="handleClick">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M10.7142 1.28601L1.28613 10.7141M1.28613 1.28601L10.7142 10.7141" stroke="#B5B5C3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="table-popover-body popover-body" v-if="data">
      <div class="popover-body-group" v-if="data.teachers.length">
        <p class="popover-body-group__title">{{ $t('teachers') }}:</p>
        <div class="popover-body-group__list">
          <p v-for="(teacher,index) of data.teachers" :key="index">{{ teacher }}<span v-if="index < data.teachers.length - 1">,</span></p>
        </div>
      </div>
      <div class="popover-body-group" v-if="data.classroom.length">
        <p class="popover-body-group__title">{{ $t('groups') }}:</p>
        <div class="popover-body-group__list">
          <p >{{ data.classroom }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    },
  },
  methods: {
    handleClick(){
      this.$emit('handleClick')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
