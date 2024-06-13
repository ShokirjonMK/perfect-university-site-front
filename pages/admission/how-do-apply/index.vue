<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <template v-else>
      <div class="container pb-5">
        <breadcrumb v-if="links" :type="'press'" :links="links" />
        <div v-if="catalog && catalog.length" class="row how-do-apply">
          <div class="col-12 col-lg-9">
            <h1>
              {{ $t('how_do_apply') }}
            </h1>
            <div
              v-for="(item, index) in catalog"
              :key="index"
              class="d-flex align-items-center justify-content-between mb-4 cards"
            >
              <h6>{{ item.title }}</h6>
              <NuxtLink
                :to="`/${$i18n.locale}/admission/how-do-apply/${item.slug}`"
              >
                <button class="button">{{ $t('more') }}</button>
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <AdmissionSidebar />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AdmissionSidebar from '~/components/AdmissionSidebar.vue'

export default {
  components: {
    AdmissionSidebar,
  },

  async fetch() {
    await this.$store.dispatch('catalog/fetchCatalog').catch(() => {})
  },
  data() {
    return {}
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('for_entrants'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      catalog: (state) => state.catalog.catalog.results,
    }),
  },
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    border: none;
    margin-bottom: 24px;
  }

  .cards {
    width: 100%;
    background-color: #ffffff;
    border: 1px solid var(--gray-color-2);
    box-shadow: 0px 9px 24px 0px var(--shadow);
    border-radius: 12px;
    padding: 20px 20px 20px 24px;
    background-repeat: no-repeat;
    background-position: 78%;
    background-size: 20%;
    h6 {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 26px;
      text-align: left;
      color: var(--darkBlue);
      position: relative;
      padding-left: 12px;

      @media screen and (max-width: 768px) {
        font-size: 1.125rem;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background-color: var(--blue);
        border-radius: 2px 8px 8px 2px;
      }
    }

    a {
      width: 100%;
      max-width: 149px;
      button {
        background: #2678d926;
        border-radius: 6px;
        border: 0 none;
        font-size: 0.875rem;
        transition: 0.3s all;
        font-weight: 600;
        line-height: 18px;
        color: var(--blue);
        padding: 11px 0;
        width: inherit;

        &:hover {
          background: var(--blue-btn-hover);
          color: #024da5;
        }
      }
    }

    transition: 0.3s all;

    &:hover {
      transform: translateY(3px);
      box-shadow: 0px 4px 20px rgba(159, 171, 185, 0.16);
    }
  }
}

.line-vertical {
  margin-right: 32px;
  position: absolute;
  transition: 0.3s all;
}

.navs {
  margin-top: -1%;
}

.how-do-apply {
  margin-top: 24px !important;
}
</style>
