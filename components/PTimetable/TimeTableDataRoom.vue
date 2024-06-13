<template>
  <div class="table-multiple">
    <div
      class="table-data"
      :class="checkPeriodTime(data)"
      @click="handleDay(data)"
    >
      <div class="w-100 d-flex align-items-center justify-content-between">
        <p class="small-text">{{ data.subject }}</p>
      </div>
      <div
        class="w-100 d-flex align-items-start justify-content-start flex-column"
      >
        <p class="small-group">{{ data.class[0] }}</p>
        <div
          v-for="(teacher, i) of data.teachers"
          :key="i"
          class="table-data__room"
          :class="{ 'text-white': checkPeriodTime(data) }"
        >
          {{ teacher }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['handleDay'],
  props: {
    data: {
      type: Array,
    },
    show: {
      type: Number,
    },
  },
  computed: {
    convertTime() {
      const diff = new Date()
      const h = diff.getHours() * 60
      const m = diff.getMinutes()
      return (h + m) * 60
    },
  },
  methods: {
    handleDay(target) {
      this.$emit('handleDay', target)
    },
    checkPeriodTime(data) {
      const start =
        (Number(data?.period?.starttime.split(':')[0] * 60) +
          Number(data?.period?.starttime.split(':')[1])) *
        60
      const end =
        (Number(data?.period?.endtime.split(':')[0] * 60) +
          Number(data?.period?.endtime.split(':')[1])) *
        60
      if (start <= this.convertTime && this.convertTime <= end) {
        return 'current-time'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.current-time {
  background: #4fa4de;
  & p {
    color: #ffffff;
  }
}
.table-multiple {
  display: grid;
}
.small {
  &-group {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 120%;
    color: #043c7e;
    margin: 0 !important;
  }
  &-icon {
    flex-shrink: 0;
    &.text-white {
      path,
      circle {
        stroke: #ffffff;
      }
    }
  }
  &-room.text-white {
    color: #ffffff;
    background: transparent;
  }
}
</style>
