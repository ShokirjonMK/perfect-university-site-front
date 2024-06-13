<template>
  <div style="height: 100%">
    <template v-if="data.weeks !== 'Все'">
      <TimeTableShort :data="data" />
    </template>
    <template v-else>
      <div class="table-data" :class="[{'bottom' : data.weeks === 'B'},checkPeriodTime(data)]" @click="handleDay(data)" >
        <template v-if="dataType === 'rooms'">
          <RoomDataType :data="data" :class="{'text-white' : checkPeriodTime(data)}"/>
        </template>
        <template v-if="dataType === 'group'">
          <GroupDataType :data="data" :class="{'text-white' : checkPeriodTime(data)}"/>
        </template>
        <template v-if="dataType === 'teachers'">
          <TeacherDataType :data="data" :class="{'text-white' : checkPeriodTime(data)}"/>
        </template>
        <template v-if="dataType === 'subjects'">
          <SubjectDataType :data="data" :class="{'text-white' : checkPeriodTime(data)}"/>
        </template>
        <div class="table-room" :class="{'text-white' : checkPeriodTime(data)}" v-if="checkType === 'object'">{{ data.classroom[0] }}</div>
        <div class="table-room" :class="{'text-white' : checkPeriodTime(data)}" v-else>{{ data.classroom }}</div>
      </div>
    </template>
  </div>
</template>

<script>
import GroupDataType from "@/components/PTimetable/GroupTypes/GroupDataType.vue";
import TeacherDataType from "@/components/PTimetable/GroupTypes/TeacherDataType.vue";
import SubjectDataType from "@/components/PTimetable/GroupTypes/SubjectDataType.vue";
import RoomDataType from "@/components/PTimetable/GroupTypes/RoomDataType.vue";
import TimeTableShort from "@/components/PTimetable/TimeTableShort.vue";

export default {
  components: {TimeTableShort, RoomDataType, SubjectDataType, TeacherDataType, GroupDataType},
  emits: ['handleDay'],
  props: {
    data: Object,
    dataType: {
      type: String
    },
  },
  methods: {
    handleDay(target){
      this.$emit('handleDay', target)
    },
    checkPeriodTime(data){
      let start = (Number(data?.period?.starttime.split(':')[0]*60) + Number(data?.period?.starttime.split(':')[1]))*60
      let end =  (Number(data?.period?.endtime.split(':')[0]*60) + Number(data?.period?.endtime.split(':')[1]))*60
      if(start <= this.convertTime && this.convertTime <= end){
        return 'current-time'
      }
    },
  },
  computed: {
    checkType(){
      return typeof this.$props?.data?.classroom
    },
    convertTime() {
      let diff = new Date();
      const h = diff.getHours()*60;
      const m = diff.getMinutes();
      return (h + m)*60
    },
  }
}
</script>

<style lang="scss" scoped>
.current-time{
  background: #4FA4DE;
  & p{
    color: #FFFFFF;
  }
}
</style>
