<template>
  <div class="table-multiple" :class="[data.weeks === 'B' ? 'bottom' : 'top']">
      <div class="table-data small" :class="checkPeriodTime(data)">
        <div class="w-100 d-flex align-items-center justify-content-between">
          <p class="small-text">{{ data.subject }}</p>
          <svg class="small-icon" :class="{'text-white' : checkPeriodTime(data)}" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.25" stroke="#7C8084" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.00018 4.66667H7.00601" stroke="#7C8084" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.4165 7H6.99984V9.33333H7.58317" stroke="#7C8084" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="w-100 d-flex align-items-center justify-content-between">
          <p class="small-group">{{ data.class[0] }}</p>
          <div class="table-room small-room" :class="{'text-white' : checkPeriodTime(data)}">{{ data.classroom[0] }}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  emits: ['handleDay'],
  props: {
    data: {
      type: Array
    },
    show: {
      type: Number
    }
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
.table-multiple{
  display: grid;
  //height: auto!important;
}
.table-multiple.bottom .small{
  margin-top: auto;
}
.table-multiple.top .small{
  margin-bottom: auto;
}
.small{
  &-group{
    font-weight: 400;
    font-size: 10px;
    line-height: 130%;
    color: #043C7E;
    margin: 0!important;
  }
  &-icon{
    flex-shrink: 0;
    &.text-white{
      path,circle{
        stroke: #FFFFFF;
      }
    }
  }
  &-room.text-white{
    color: #FFFFFF;
    background: transparent;
  }
}
</style>
