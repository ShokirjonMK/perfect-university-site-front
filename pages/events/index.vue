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

      <div class="container">
        <div class="row">
          <div class="col-12 pd">
            <h1>
              {{ $t('pending_events') }}
            </h1>
          </div>
          <div class="container">
            <div v-for="(item, index) in events.results" :key="index">
              <div class="row bigger-cards">
                <div class="col-12 col-md-3">
                  <div class="cards text-center">
                    <h1>{{ $moment(item.event_date).format('D') }}</h1>
                    <h5>
                      {{
                        $moment(item.event_date)
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
                        $moment(item.event_date)
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
                    <div
                      class="finished"
                      :class="item.status === 'finished' ? 'finished' : ''"
                    >
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
                        {{ item.status }}
                      </h6>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-9 texts">
                  <div>
                    <NuxtLink :to="`events/${item.id}`">
                      <h2>
                        {{ item.title }}
                      </h2>
                    </NuxtLink>
                    <p>
                      {{ item.short_description }}
                    </p>
                    <div class="d-flex justify-content-between">
                      <span class="time">{{ item.duration }}</span>
                      <NuxtLink :to="`events/${item.id}`">
                        <button>{{ $t('more') }}</button>
                      </NuxtLink>
                    </div>
                    <div class="line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import calendar from '~/components/calendar'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    calendar,
    BreadCrumbs,
  },
  data() {
    return {
      ceremonies: 4,
    }
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('pending_events'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },

    ...mapState({
      events: (state) => state.events.events,
    }),
  },
  methods: {
    async chooseCalendar(item) {
      await this.$store.dispatch('events/fetchEvents', item.id)
    },
  },

  async fetch() {
    await this.$store.dispatch('events/fetchEvents')
  },
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .cards {
    border: 1px solid rgba(159, 171, 185, 0.2);
    border-radius: 4px;
    background-size: cover;
    min-height: 241px;
    position: relative;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 4rem;
      line-height: 60px;
      text-align: center;
      color: #003b81;
      margin-bottom: 8px;
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

    .finished {
      position: absolute;
      bottom: 0;
      width: 100%;
      background: #18b962;
      padding: 8px 29.5px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

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

    .waiting {
      background: #003b81;
    }
  }

  .texts {
    padding: 28px 28px 0px 28px;
    background: #f9fafc;
    border: 1px solid rgba(159, 171, 185, 0.2);
    border-radius: 4px;

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 26px;
      color: #44494f;
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 24px;
      color: #9fabb9;
      margin-top: 12px;
    }

    .justify-content-between {
      margin-top: 28px;
    }

    .time {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 20px;
      color: #44494f;
    }

    .line {
      background: #6db0ff;
      width: 16%;
      height: 2px;
      transition: 0.3s all;
      margin-top: 13px;
    }
  }
}

.bigger-cards {
  margin-bottom: 28px;

  &:hover {
    .line {
      width: 100%;
    }
  }

  button {
    background: #024da5;
    border-radius: 4px;
    padding: 10px 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    color: #ffffff;
    border: none;
    margin-top: -10px;
    transition: 0.3s all;
    border: 1px solid #024da5;

    &:hover {
      background: none;
      border: 1px solid #024da5;
      color: #024da5;
    }
  }
}

.vc-container {
  width: 100% !important;
}
</style>
