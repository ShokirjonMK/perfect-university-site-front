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
            {{ $t('kafedras') }}
          </h1>
          <KafedraCard :department-list="kafedra" />
        </div>
        <div class="col-12 col-lg-3">
          <DivisionsSidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BreadCrumbs from '~/components/Breadcrumb'
import KafedraCard from '@/components/admission/KafedraCard.vue'
import DivisionsSidebar from '~/components/DivisionsSidebar.vue'

export default {
  components: {
    KafedraCard,
    BreadCrumbs,
    DivisionsSidebar,
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('kafedras'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      kafedra: (state) => state.faculty.kafedra,
    }),
  },

  async fetch() {
    await this.$store.dispatch('faculty/fetchKafedra').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.faculty {
  padding-top: 24px !important;
}
</style>
