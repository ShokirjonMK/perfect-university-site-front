<template>
  <div>
    <main-header timetable/>
    <div class="timetable-layout">
      <Nuxt />
    </div>
    <main-footer/>
  </div>

</template>

<script>
import MainFooter from "~/components/footer";
import MainHeader from "~/components/header";
import MetaMixin from '~/mixins/meta.js'

export default {
  components: {
    MainHeader,
    MainFooter,
  },
  name: "timetable",
  mixins: [MetaMixin],

}
</script>

<style>
.timetable-layout {
  min-height: 100%;
}

@media print {

}
</style>
