<template>
  <div class="table-head">
    <div class="table-row">
        <template v-if="tableHead">
          <div class="table-col" v-for="(day,index) of tableHead" :key="index">
            <div class="table-day">
              <p class="table-col__day">{{ day.cid }}</p>
              <div class="table-date">
                <p>{{ day.starttime }}</p>
                <span>-</span>
                <p>{{ day.endtime }}</p>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="table-col" v-for="(day,index) of 7" :key="index">
            <div class="table-day">
              <p class="table-col__day">{{ day }}</p>
              <div class="table-date">
                <p>00:00</p>
                <span>-</span>
                <p>00:00</p>
              </div>
            </div>
          </div>
        </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableHead: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
