<template>
  <div class="full-content">
    <div v-if="data" class="full-content-body">
      <div v-if="data.teachers.length" class="full-content-body-group">
        <p class="full-content-body-group__title">O'qituvchilar:</p>
        <div class="full-content-body-group__list">
          <p v-for="(teacher, index) of data.teachers" :key="index">
            {{ teacher }}<span v-if="data.teachers.length > 1">,</span>
          </p>
        </div>
      </div>
      <div v-if="data.class.length" class="full-content-body-group">
        <p class="full-content-body-group__title">Guruhlar:</p>
        <div class="full-content-body-group__list">
          <p v-for="(group, index) of data.class" :key="index">
            {{ group }}<span v-if="data.class.length > 1">,</span>
          </p>
        </div>
      </div>
      <div v-if="data.classroom.length" class="full-content-body-group">
        <p class="full-content-body-group__title">Xonalar:</p>
        <div class="full-content-body-group__list">
          <p v-for="(room, index) of data.classroom" :key="index">
            {{ room }}<span v-if="data.classroom.length > 1">,</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.full-content {
  padding: 8px;
  background: #eef3f8;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  &-body {
    width: 100%;
    &-group {
      &__title {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 120%;
        color: #043c7e;
        margin-bottom: 6px !important;
      }
      &__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        p {
          font-weight: 400;
          font-size: 0.75rem;
          line-height: 130%;
          color: #043c7e;
          margin: 0 !important;
        }
      }
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
}
</style>
