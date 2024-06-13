<template>
  <el-popover v-model="visible" placement="left" width="200">
    <template v-if="dataType === 'rooms'">
      <RoomDataType :data="data" @handleClick="handleClick" />
    </template>
    <template v-if="dataType === 'group'">
      <GroupPopoverType :data="data" @handleClick="handleClick" />
    </template>
    <template v-if="dataType === 'teachers'">
      <TeacherPopoverType :data="data" @handleClick="handleClick" />
    </template>
    <template v-if="dataType === 'subjects'">
      <SubjectPopoverType :data="data" @handleClick="handleClick" />
    </template>
    <slot slot="reference" />
  </el-popover>
</template>

<script>
import GroupPopoverType from '@/components/PTimetable/PopoverWrapper/PopoverDataTypes/GroupPopoverType.vue'
import TeacherPopoverType from '@/components/PTimetable/PopoverWrapper/PopoverDataTypes/TeacherPopoverType.vue'
import SubjectPopoverType from '@/components/PTimetable/PopoverWrapper/PopoverDataTypes/SubjectPopoverType.vue'
import RoomDataType from '@/components/PTimetable/GroupTypes/RoomDataType.vue'

export default {
  components: {
    RoomDataType,
    SubjectPopoverType,
    TeacherPopoverType,
    GroupPopoverType,
  },
  props: {
    data: {
      type: Object,
    },
    dataType: {
      type: String,
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    handleClick(target) {
      this.visible = target
    },
  },
}
</script>

<style lang="scss">
.el-popover {
  padding: 0 !important;
  &__reference-wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
}
.popper__arrow::after {
}
.table-popover {
  .popover-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      &:not(:last-child) {
        margin-bottom: 12px;
      }
      &__title {
        font-weight: 500;
        font-size: 10px;
        line-height: 120%;
        margin-bottom: 6px;
      }
      &__list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 4px;
        p {
          font-weight: 400;
          font-size: 10px;
          line-height: 130%;
          color: #043c7e;
        }
      }
    }
  }
  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f2f4f8;
    padding: 10px 8px;
    gap: 16px;
    &__title {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 17px;
      color: #44494f;
    }
    &__action {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      background: transparent;
      &:hover svg path {
        stroke: red;
      }
    }
  }
  &-body {
    padding: 12px;
  }
}
</style>
