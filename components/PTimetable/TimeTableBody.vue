<template>
  <div class="table-body">
    <div class="d-flex">
      <div class="table-week">
        <div class="table-week__day">
          {{ $t('monday_short') }}
        </div>
      </div>
      <TimeTableCol :table-body="tableBody" :week="'monday'" :data-show="dataShow" :data-type="dataType"/>
    </div>
    <div class="d-flex">
      <div class="table-week">
        <div class="table-week__day">
          {{ $t('tuesday_short') }}
        </div>
      </div>
      <TimeTableCol :table-body="tableBody" :week="'tuesday'" :data-show="dataShow" :data-type="dataType"/>
    </div>
    <div class="d-flex">
      <div class="table-week">
        <div class="table-week__day">
          {{ $t('wednesday_short') }}
        </div>
      </div>
      <TimeTableCol :table-body="tableBody" :week="'wednesday'" :data-show="dataShow" :data-type="dataType"/>
    </div>
    <div class="d-flex">
      <div class="table-week">
        <div class="table-week__day">
          {{ $t('thursday_short') }}
        </div>
      </div>
      <TimeTableCol :table-body="tableBody" :week="'thursday'" :data-show="dataShow" :data-type="dataType"/>
    </div>
    <div class="d-flex">
      <div class="table-week">
        <div class="table-week__day">
          {{ $t('friday_short') }}
        </div>
      </div>
      <TimeTableCol :table-body="tableBody" :week="'friday'" :data-show="dataShow" :data-type="dataType"/>
    </div>
  </div>
</template>

<script>
import TimeTableCol from "@/components/PTimetable/TimeTableCol.vue";
export default {
  components: {TimeTableCol},
  props: {
    tableBody: {
      type: Array | Object
    },
    dataType: {
      type: String
    }
  },
  data(){
    return {
      dataShow: 2
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
