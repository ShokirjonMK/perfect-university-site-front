<template>
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
          <h1>
            {{ $t('faculties_and_departments') }}
          </h1>
          <card :department-list="faculty" />
          <KafedraCard :department-list="kafedra" />
        </div>
        <div class="col-12 col-lg-3">
          <AdmissionSidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BreadCrumbs from '~/components/Breadcrumb'
import Card from '@/components/admission/Card.vue'
import KafedraCard from '@/components/admission/KafedraCard.vue'
import AdmissionSidebar from '~/components/AdmissionSidebar.vue'

export default {
  components: {
    Card,
    BreadCrumbs,
    AdmissionSidebar,
    KafedraCard,
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('faculties_and_departments'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      faculty: (state) => state.faculty.faculty,
      kafedra: (state) => state.faculty.kafedra,
    }),
  },

  async fetch() {
    await this.$store.dispatch('faculty/fetchKafedra').catch(() => {})
    await this.$store.dispatch('faculty/fetchFaculty').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.faculty {
  padding-top: 24px !important;
}
</style>
