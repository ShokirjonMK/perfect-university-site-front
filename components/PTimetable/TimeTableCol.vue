<template>
  <div class="table-row">
    <template v-if="tableBody">
      <div
        v-for="(day, ix) of tableBody[week]"
        :key="ix"
        class="table-col"
        :class="{ subject: day.length > 1 }"
      >
        <template v-if="day.length && day.length <= 1">
          <PopoverWrapper :data="selectedDate" :data-type="dataType">
            <template v-if="dataType === 'rooms'">
              <TimeTableDataRoom
                v-for="(dayData, idx) of day"
                :key="idx"
                :data="dayData"
                :data-type="dataType"
                @handleDay="handleDay"
              />
            </template>
            <template v-else>
              <TimeTableData
                v-for="(dayData, idx) of day"
                :key="idx"
                :data="dayData"
                :data-type="dataType"
                @handleDay="handleDay"
              />
            </template>
          </PopoverWrapper>
        </template>
        <template v-if="day.length && day.length >= 2">
          <PopoverWrapper :data="selectedDate" :data-type="dataType">
            <template v-if="dataType === 'rooms'">
              <TimeTableDataRoomGroup
                :data="day"
                :show="dataShow"
                @handleDay="handleDay"
              />
            </template>
            <template v-else>
              <TimeTableDataSmall
                :data="day"
                :show="dataShow"
                @handleDay="handleDay"
              />
            </template>
          </PopoverWrapper>
        </template>
        <TimeTableMoreAction
          :data="day"
          :show="dataShow"
          @handleShow="handleShow"
        />
      </div>
    </template>
    <template v-else>
      <div v-for="el of 7" :key="el" class="table-col"></div>
    </template>
    <el-dialog
      class="table-dialog"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <template #title>
        <div class="timetable-dialog-date">
          <p class="timetable-dialog-date__week">{{ $t(week) }}</p>
          <p class="timetable-dialog-date__date">({{ currentDate }})</p>
        </div>
      </template>
      <div class="table-dialog-body">
        <TimeTableDataShort
          v-for="(day, index) of dialogData"
          :key="index"
          :data="day"
        />
      </div>
      <div v-if="checkDialogLength" class="dialog-shadow"></div>
    </el-dialog>
  </div>
</template>

<script>
import TimeTableData from '@/components/PTimetable/TimeTableData.vue'
import TimeTableDataSmall from '@/components/PTimetable/TimeTableDataSmall.vue'
import TimeTableShort from '@/components/PTimetable/TimeTableShort.vue'
import TimeTableDataShort from '@/components/PTimetable/TimeTableDataShort.vue'
import TimeTableMoreAction from '@/components/PTimetable/TimeTableMoreAction.vue'
import PopoverWrapper from '@/components/PTimetable/PopoverWrapper/PopoverWrapper.vue'
import TimeTableDataRoomGroup from '@/components/PTimetable/TimeTableDataRoomGroup.vue'
import TimeTableDataRoom from '@/components/PTimetable/TimeTableDataRoom.vue'
export default {
  components: {
    TimeTableDataRoomGroup,
    TimeTableDataRoom,
    PopoverWrapper,
    TimeTableMoreAction,
    TimeTableDataSmall,
    TimeTableDataShort,
    TimeTableData,
    TimeTableShort,
  },
  props: {
    tableBody: {
      type: Array | Object,
    },
    dataShow: {
      type: Number,
    },
    week: {
      type: String,
    },
    dataType: {
      type: String,
    },
  },
  data() {
    return {
      visible: false,
      dialogVisible: false,
      dialogData: null,
      selectedDate: null,
    }
  },
  computed: {
    checkDialogLength() {
      return this.dialogData?.length > 3
    },
    currentDate() {
      return this.$moment(new Date()).format('D.MM.YYYY')
    },
  },
  methods: {
    handleDay(target) {
      this.selectedDate = target
    },
    handleShow(target) {
      this.dialogData = target
      this.dialogVisible = true
    },
    handleClose() {
      this.dialogVisible = false
    },
  },
}
</script>

<style lang="scss">
.timetable {
  padding: 32px 0 66px;
  &-dialog-date {
    display: flex;
    align-items: center;
    &__week {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 120%;
      color: #383838;
      margin-right: 6px;
    }
    &__date {
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 120%;
      color: #b0b0b0;
      margin-top: 2px;
    }
  }
}
.el-dialog {
  max-width: 380px;
  min-width: 320px;
}
.table-dialog {
  &-body {
    max-height: 300px;
    overflow-y: auto;
    padding-right: 10px;
    z-index: 1;
    &::-webkit-scrollbar {
      width: 4px;
      height: 8px;
      background-color: #d9d9d9;
    }

    &::-moz-scrollbar {
      height: 1px;
      background-color: #d9d9d9;
    }

    &::-ms-scrollbar {
      height: 1px;
      background-color: #6a7380;
    }

    &::-o-scrollbar {
      height: 1px;
      background-color: #d9d9d9;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #003b81;
    }

    &::-moz-scrollbar-thumb {
      background-color: #003b81;
    }

    &::-ms-scrollbar-thumb {
      background-color: #003b81;
    }

    &::-o-scrollbar-thumb {
      background-color: #003b81;
    }
  }
  .el-dialog__body {
    padding: 0 10px 20px 20px !important;
    position: relative;
  }
  .dialog-shadow {
    &:after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 100%;
      height: 50px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 60%
      );
      z-index: 0;
    }
  }
  .el-dialog__headerbtn .el-dialog__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    opacity: 0.4;
    border: 1.6px solid #9e9ea5;
    border-radius: 100%;
    transition: all 0.2s ease;
    &:hover {
      border-color: red;
      opacity: 1;
    }
    &:hover:before {
      color: red !important;
    }
  }
  .el-icon-close:before {
    font-size: 13px;
    color: #9e9ea5 !important;
  }
}
</style>
