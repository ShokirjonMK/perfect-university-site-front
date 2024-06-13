<template>
  <div v-if="$fetchState.pending" class="fetch-pending"></div>
  <div v-else-if="$fetchState.error" class="fetch-error">
    Что то пошло не так =(
  </div>
  <div v-else>
    <div v-if="internationalGrant && internationalGrant.length" class="">
      <h1>{{ $t('international_grants') }}</h1>

      <div
        v-for="(item, index) in internationalGrant"
        :key="index"
        class="cardsGrants"
      >
        <NuxtLink :to="localePath(`/international/grants/${item.slug}`)">
          <h2 class="d-flex align-items-start">
            <img
              src="/image/about-tsue/mission-logo.svg"
              alt="Mission logo"
              class="rounded-0"
            />
            <span class="ml-3">{{ item.title }}</span>
          </h2>
          <p v-if="item?.short_description">{{ item.short_description }}</p>
          <div style="display: flex; gap: 12px; align-items: center">
            <div style="gap: 4px" class="d-flex align-items-center">
              <svg
                color="views"
                class="mr-2"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66699 7.99984C1.66699 7.99984 4.33366 2.6665 9.00032 2.6665C13.667 2.6665 16.3337 7.99984 16.3337 7.99984C16.3337 7.99984 13.667 13.3332 9.00032 13.3332C4.33366 13.3332 1.66699 7.99984 1.66699 7.99984Z"
                  stroke="#9FABB9"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="#9FABB9"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{{ item?.views }}</span>
            </div>
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
          </div>
        </NuxtLink>
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
          title: this.$t('international_grants'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      internationalGrant: (state) => state.international.internationalGrant,

      perPage: (state) => state.international.perPage,
      total: (state) => state.international.total,
      currentPage: (state) => state.international.currentPage,
    }),
  },
  async fetch() {
    await this.$store
      .dispatch('international/fetchInternationalGrant')
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 24px;
}

.navs {
  margin-top: 7.7%;
}

.cardsGrants {
  background: #ffffff;
  border: 1px solid var(--gray-color-2);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 9px 24px 0 #1441760a;
  margin-bottom: 16px !important;

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 26px;
    color: var(--main-dark);
    margin-bottom: 12px;

    span {
      color: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
    }
  }

  p {
    font-weight: 400;
    line-height: 136%;
    font-style: normal;
    font-size: 1rem;
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
    font-size: 0.75rem;
    line-height: 16px;
    color: #768194;

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
