<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else class="container pb-5">
      <bread-crumbs :type="'press'" :links="links" />
      <div class="row pt-4 gap-4">
        <div class="col-12">
          <h1 class="syllabus-title">{{ $t('programs') }}</h1>
          <SyllabusCard :department-list="departmentSyllabusList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BreadCrumbs from '@/components/Breadcrumb.vue'

export default {
  components: { BreadCrumbs },
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
          title: this.$t('programs'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
  },
}
</script>
Ï
<style lang="scss" scoped></style>
