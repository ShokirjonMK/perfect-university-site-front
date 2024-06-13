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

      <div class="container structure-styles">
        <div v-if="internationalConferences" class="row">
          <div class="col-12 col-md-9 pd">
            <h1>{{ $t('international_conferences') }}</h1>

            <img
              :src="internationalConferences.image_url"
              class="mb-4"
              alt="International imavge"
            />
            <div
              class="single-content"
              v-html="internationalConferences.content"
            ></div>
            <h2>
              {{ $t('list_of_int_conferences') }}
            </h2>

            <div class="table-wrap">
              <b-table
                v-if="
                  internationalConferences.conferences &&
                  internationalConferences.conferences.length
                "
                id="my-table"
                striped
                :fields="fields"
                :items="internationalConferences.conferences"
                responsive="lg"
                stacked="lg"
                class=""
              >
                <template v-slot:cell(index)="data">
                  {{ data.index + 1 }}
                </template>

                <template v-slot:cell(title)="data">
                  {{ data.item.title }}
                </template>
                <template v-slot:cell(department)="data">
                  <div class="text-center">
                    {{ data.item.department }}
                  </div>
                </template>

                <template v-slot:cell(date)="data">
                  <div class="text-center">
                    {{ data.item.date }}
                  </div>
                  <div class="text-center">
                    {{ data.item.place }}
                  </div>
                </template>
                <template v-slot:cell(place)="data">
                  <div class="text-center">
                    {{ data.item.place }}
                  </div>
                </template>
                <template v-slot:cell(action)="data">
                  <div class="text-center">
                    <nuxt-link :to="`${$route.params.more}/${data.item.slug}`">
                      <span>
                        {{ $t('more') }}
                        <svg
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.125 8.75L4.875 5L1.125 1.25"
                            stroke="#6DB0FF"
                            stroke-width="1.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </nuxt-link>
                  </div>
                </template>
              </b-table>
            </div>

            <HashTags />
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import internationalSide from '~/components/internationalSide'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  data() {
    return {
      fields: [
        { key: 'index', label: '#' },
        { key: 'title', label: this.$t('conference_topic') },
        { key: 'department', label: this.$t('name_department') },
        { key: 'date', label: this.$t('date') },
        { key: 'place', label: this.$t('venue') },
        { key: 'action', label: this.$t('action') },
      ],
    }
  },

  computed: {
    ...mapState({
      links() {
        return [
          {
            title: this.$t('international_conferences'),
            link: `${this.$i18n.locale}`,
          },
        ]
      },

      internationalConferences: (state) =>
        state.conferences.internationalConferences,
    }),
  },

  components: {
    internationalSide,
    BreadCrumbs,
  },
  async fetch() {
    await this.$store
      .dispatch('conferences/fetchInternationalConferences')
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
h1 {
  border: none;
}

img {
  width: 100%;
}

table {
  margin-bottom: 116px;

  .table-head {
    background: #003b81;
    border-radius: 4px;

    font-style: normal;
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 16px;
    color: #ffffff;
  }

  td {
    vertical-align: middle;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 140%;
    padding: 24px 24px;

    color: #263c55;
  }

  .th {
    width: 18%;
  }

  th {
    vertical-align: inherit;
    margin-bottom: 20px;
    padding: 22px 24px;
  }

  tr {
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 140%;
    color: #263c55;
  }
}

.navs {
  margin-top: 7.9%;
}
</style>
