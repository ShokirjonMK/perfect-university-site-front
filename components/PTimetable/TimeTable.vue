<template>
  <div v-loading="loading" class="mtable">
    <TimeTableHead :table-head="tableHead" />
    <TimeTableBody :table-body="tableBody" :data-type="dataType" />
  </div>
</template>

<script>
import TimeTableHead from '@/components/PTimetable/TimeTableHead.vue'
import TimeTableBody from '@/components/PTimetable/TimeTableBody.vue'

export default {
  components: { TimeTableBody, TimeTableHead },
  props: {
    tableBody: {
      type: Array | Object,
    },
    tableHead: {
      type: Array,
    },
    loading: {
      type: Boolean,
    },
    dataType: {
      type: String,
    },
  },
  data() {
    return {
      dataShow: 2,
    }
  },
}
</script>

<style lang="scss">
.table-more {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px auto 0 auto;
  background: transparent;
  &__text {
    font-weight: 400;
    font-size: 10px;
    line-height: 120%;
    color: #003b81;
  }
  &__count {
    font-weight: 400;
    font-size: 10px;
    line-height: 120%;
    color: #7c8084;
  }
}
.mtable {
  display: flex;
  flex-direction: column;
  max-width: 1342px;
  overflow-y: auto;
  padding-bottom: 16px;
  &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
    background-color: #f5f5f5;
  }

  &::-moz-scrollbar {
    height: 1px;
    background-color: #f5f5f5;
  }

  &::-ms-scrollbar {
    height: 1px;
    background-color: #f5f5f5;
  }

  &::-o-scrollbar {
    height: 1px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cedbe9;
  }

  &::-moz-scrollbar-thumb {
    background-color: #cedbe9;
  }

  &::-ms-scrollbar-thumb {
    background-color: #cedbe9;
  }

  &::-o-scrollbar-thumb {
    background-color: #cedbe9;
  }
  &-head {
    padding-left: 70px;
    min-width: 1312px;
  }
  &-body {
    margin-top: 24px;
    min-width: 1312px;
    width: 100%;
    .table-col {
      padding: 4px;
    }
  }
  &-multiple {
    height: 100%;
  }
  &-week {
    padding: 4px;
    border: 1px solid #e7e9ed;
    border-right: none;
    &__day {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #003b81;
      color: #fff;
      width: auto;
      height: 100%;
      min-width: 62px;
      padding: 38px 8px;
      font-weight: 500;
      font-size: 1rem;
      line-height: 20px;
      text-transform: uppercase;
      margin: 0;
    }
  }
  &-row {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid #e7e9ed;
  }
  &-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 22px;
    text-align: center;
    color: #7c8084;
  }
  &-group {
    height: 100%;
    margin: 0 auto;
  }
  &-data {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    background: #eef3f8;
    padding: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background: #dae8ff;
    }
    &-group {
      margin: auto 0;
    }
    & p:first-child {
      margin-bottom: 8px;
    }
    & p:last-child {
      font-size: 0.75rem;
    }
    p {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 17px;
      color: #44494f;
    }
    &__day {
      &:not(:last-child) {
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #e1e3e7;
      }
    }
    &__room {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 120%;
      color: #44494f;
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }
  &-room {
    margin-right: auto;
    position: relative;
    //bottom: 5px;
    //left: 4px;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 120%;
    color: #000000;
  }
  &-day {
    padding: 12px 25px;
  }
  &-col {
    text-align: center;
    &:not(:last-child) {
      border-right: 1px solid #e7e9ed;
    }
    &__day {
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 25px;
      color: #374453;
    }
    & > span {
      display: block;
      height: 100%;
    }
    &.subject > span {
      height: auto !important;
    }
  }
  .small {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    flex-direction: column !important;
    height: auto;
    padding: 4px;
    margin-bottom: 4px;
    &-text {
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      color: #44494f;
      text-align: left;
      padding-right: 8px;
    }
    &-room {
      position: relative;
      bottom: auto;
      left: auto;
      font-weight: 400;
      font-size: 10px;
      line-height: 120%;
      color: #043c7e;
      background: rgba(119, 158, 205, 0.3);
      padding: 4px;
      white-space: nowrap;
      margin-right: 0 !important;
    }
  }
}
</style>
