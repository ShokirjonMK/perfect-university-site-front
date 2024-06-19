<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
    <bread-crumbs :type="'press'" :links="links" />
    <div class="container mb-5 faculty">
      <div class="row">
        <div class="col-12 col-lg-9">
          <h1 class="syllabus-title">{{ $t('directions') }}</h1>
          <SyllabusCard :department-list="departmentSyllabusList" />
        </div>
        <div class="col-12 col-lg-3">
          <DivisionsSidebar />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BreadCrumbs from '@/components/Breadcrumb.vue'
import DivisionsSidebar from '~/components/DivisionsSidebar.vue'

export default {
  components: { BreadCrumbs, DivisionsSidebar },
  async fetch() {
    const data = await this.$axios.$get(
      '/syllabus/syllabus/DepartmentSyllabusList/'
    )
    this.departmentSyllabusList = data.results
  },
  data() {
    return {
      departmentSyllabusList: [],
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('directions'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
  },
}
</script>
Ï
<style lang="scss" scoped>
.faculty {
  padding-top: 24px !important;
}</style>
