w
<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <bread-crumbs v-if="links" :type="'press'" :links="links" />

      <div class="container">
        <div v-if="eventSingle" class="row">
          <div class="container">
            <h1>
              {{ eventSingle.title }}
            </h1>
            <div class="d-flex justify-content-between">
              <span>
                <svg
                  style="margin-top: -3px"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6667 1.3335V4.00016"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33325 1.3335V4.00016"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 6.6665H14"
                    stroke="#9FABB9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &nbsp;
                {{
                  $moment(eventSingle.event_date)
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
              <span
                ><svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.66675 7.99984C1.66675 7.99984 4.33341 2.6665 9.00008 2.6665C13.6667 2.6665 16.3334 7.99984 16.3334 7.99984C16.3334 7.99984 13.6667 13.3332 9.00008 13.3332C4.33341 13.3332 1.66675 7.99984 1.66675 7.99984Z"
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
                {{ eventSingle.views }}</span
              >
            </div>

            <div class="row">
              <div class="col-12 col-md-9">
                <p v-html="eventSingle.description"></p>
              </div>
              <div class="col-9 col-md-3">
                <div class="cards text-center">
                  <h1>{{ $moment(eventSingle.event_date).format('D') }}</h1>
                  <h5>
                    {{
                      $moment(eventSingle.event_date)
                        .locale(
                          $i18n.locale == 'sr'
                            ? 'uz-latn'
                            : $i18n.locale == 'sr'
                            ? 'sr'
                            : $i18n.locale
                        )
                        .format('MMMM')
                    }},
                    {{
                      $moment(eventSingle.event_date)
                        .locale(
                          $i18n.locale == 'sr'
                            ? 'uz-latn'
                            : $i18n.locale == 'sr'
                            ? 'sr'
                            : $i18n.locale
                        )
                        .format('dddd')
                    }}
                  </h5>
                  <div class="status">
                    <h6>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8813 2.77539C15.1926 4.12591 16 5.96842 16 7.9995C16 10.0306 15.1926 11.8731 13.8813 13.2236M3.11867 13.2236C1.80736 11.8731 1 10.0306 1 7.9995C1 5.96842 1.80736 4.12591 3.11867 2.77539"
                          stroke="white"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.2243 5.5C11.8601 6.15184 12.25 7.03175 12.25 8C12.25 8.96825 11.8601 9.84816 11.2243 10.5M5.77571 5.5C5.13991 6.15184 4.75 7.03175 4.75 8C4.75 8.96825 5.13991 9.84816 5.77571 10.5"
                          stroke="white"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        />
                        <circle cx="8.5" cy="8" r="1.25" fill="white" />
                      </svg>
                      {{ eventSingle.status }}
                    </h6>
                  </div>
                  <div class="time">
                    <span>{{ eventSingle.duration }}</span>
                  </div>
                </div>
              </div>
            </div>
            <hashTags />
          </div>
          <div v-if="false" class="col-12 col-md-3">
            <internationalSide class="mt-4" side-head-id="7" />
            <sidebarAppeal />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import sidebarAppeal from '~/components/sidebarAppeal'
import hashTags from '~/components/hashTags'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    sidebarAppeal,
    hashTags,
    BreadCrumbs,
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('pending_events'),
          link: `/${this.$i18n.locale}/events`,
        },
        {
          title: `${this.eventSingle.title.substring(0, 40)}...`,
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      eventSingle: (state) => state.eventSingle.eventSingle,
    }),
  },

  async fetch() {
    await this.$store
      .dispatch('eventSingle/fetchEventSingle', this.$route.params.id)
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 5%;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5625rem;
    line-height: 130%;
    color: #44494f;
    margin-top: 32px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e7e9ed;
  }

  .justify-content-between {
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 16px;
    color: #9fabb9;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 144.5%;
    color: #44494f;
    margin-top: 24px;
  }
}

.cards {
  margin-top: 24px;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  background-size: contain;
  background: #ffffff url('~static/image/ceremony-date-card-bg.svg') no-repeat
    bottom;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 4rem;
    line-height: 60px;
    text-align: center;
    color: #003b81;
    margin-bottom: 8px;
    border: none;
  }

  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 17px;
    text-align: center;
    color: #003b81;
    margin-bottom: 59px;
  }

  .time {
    padding: 11px;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 20px;
      color: #44494f;
    }
  }

  .status {
    background: #18b962;
    padding: 8px 29.5px;

    h6 {
      font-style: normal;
      font-weight: 500;
      font-size: 0.8125rem;
      line-height: 20px;
      color: #ffffff;
      padding-left: -6px;

      svg {
        margin-top: -3px;
      }
    }
  }
}
</style>
