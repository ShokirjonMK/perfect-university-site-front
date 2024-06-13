<template>
  <div>
    <div class="calendar-wrap mt-5">
      <vc-date-picker is-expanded v-model="date" @dayclick="$emit('chooseCalendar', $event)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      date: new Date(),
    }
  },
}
</script>

<style lang="scss" scoped>

.vc-container {
  .vc-pane-container {
    .vc-pane-layout {
      .vc-pane {
        .vc-header {
          background: #00316B !important;
        }
      }
    }
  }

}


</style>
