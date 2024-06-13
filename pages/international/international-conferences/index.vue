<template>
  <div v-if="$fetchState.pending" class="fetch-pending"></div>
  <div v-else-if="$fetchState.error" class="fetch-error">
    Что то пошло не так =(
  </div>
  <div v-else>
    <bread-crumbs :type="'press'" :links="links" />
    <div class="container">
      <div class="row">
        <div
          v-if="internationalConferences && internationalConferences.length"
          class="col-12 col-md-9 pd"
        >
          <h1>{{ $t('international_conferences') }}</h1>

          <div
            v-for="(item, index) in internationalConferences"
            :key="index"
            class="cardsGrants mb-4"
          >
            <nuxt-link
              :to="
                localePath(
                  `/international/international-conferences/${item.id}`
                )
              "
            >
              <h2>{{ item.title }}</h2>
              <p>{{ item.short_description }}</p>
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 2.66602H3.33333C2.59695 2.66602 2 3.26297 2 3.99935V13.3327C2 14.0691 2.59695 14.666 3.33333 14.666H12.6667C13.403 14.666 14 14.0691 14 13.3327V3.99935C14 3.26297 13.403 2.66602 12.6667 2.66602Z"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6667 1.33398V4.00065"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33325 1.33398V4.00065"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 6.66602H14"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {{
                  $moment(item.publish_date)
                    .locale(
                      $i18n.locale == 'sr'
                        ? 'uz-latn'
                        : $i18n.locale == 'sr'
                        ? 'sr'
                        : $i18n.locale
                    )
                    .format('LL')
                }}
              </span>
            </nuxt-link>
          </div>
        </div>

        <div class="col-12 col-md-3" style="padding: 0">
          <div>
            <sideInternational />
            <sidebarAppeal />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import internationalSide from '~/components/internationalSide'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    internationalSide,
    BreadCrumbs,
  },
  data() {
    return {}
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('international_conferences'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      internationalConferences: (state) =>
        state.international.internationalConferences,
      perPage: (state) => state.international.perPage,
      total: (state) => state.international.total,
      currentPage: (state) => state.international.currentPage,
    }),
  },
  async fetch() {
    await this.$store
      .dispatch('international/fetchInternationalConferences')
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 32px;
  margin-bottom: 32px;
}

.navs {
  margin-top: 7.7%;
}

.cardsGrants {
  background: #f9fafc;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  padding: 16px 24px 20px 24px;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 30px;
    color: #44494f;
    margin-bottom: 12px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 20px;
    color: #9fabb9;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 16px;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 16px;
    color: #9fabb9;

    svg {
      margin-top: -5px;
    }
  }

  transition: 0.3s all;

  &:hover {
    transform: translateY(3px);
    background: none;
  }
}
</style>
