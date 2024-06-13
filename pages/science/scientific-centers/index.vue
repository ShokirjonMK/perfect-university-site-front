<template>
  <div>
    <div class="fetch-pending" v-if="$fetchState.pending">
      <loader/>
    </div>
    <div class="fetch-error" v-else-if="$fetchState.error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <bread-crumbs :type="'press'" :links="links"/>
      <div class="container structure-styles">
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <h1>
              {{ $t('research_centers') }}
            </h1>
            <ScientificCenterCard v-for="(item,index) in scienceCenter" :key="index"
              :title="item.title"
              :description="item.description"
              :link="`/${$i18n.locale}/science/scientific-centers/${item.slug}`"
            ></ScientificCenterCard>
          </div>
  
          <div class="col-12 col-md-3" style="padding:0">
            <div>
              <sideCourses/>
              <sidebarAppeal/>
            </div>
          </div>
  
  
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import sideScience from "~/components/sideScience"
import ScientificCenterCard from '../../../components/admission/ScientificCenterCard.vue';
import BreadCrumbs from "~/components/Breadcrumb";


export default {

  data() {
    return {
      page: 1
    }
  },

  components: {
    sideScience,
    ScientificCenterCard,
    BreadCrumbs
  },
 
  computed: {
    links() {
        return [

          {
            title: this.$t("research_centers"),
            link: `${this.$i18n.locale}`,
          },
        ];
      },
    ...mapState({
      scienceCenter: (state) => state.report.scienceCenter
    })
  },

  async fetch() {
    await this.$store.dispatch("report/fetchScienceCenter",
      {
        page: this.page
      }
    ).then((res) => console.log(res))
    .catch((err)=> console.log(err, 'wee'))
  }
}
</script>

<style lang="scss" scoped>
h1 {
  border: none
}
</style>
