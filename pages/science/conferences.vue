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
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <h1>
              {{ $t('list_of_conferences') }}
            </h1>
            <b-tabs
              v-if="conferenceYears && conferenceYears.length"
              content-class="mt-3"
            >
              <b-tab
                v-for="(item, index) in conferenceYears"
                :key="index"
                :title="'' + item"
                @click="changeActiveYear(index)"
              >
                <template v-if="conferences && conferences.length">
                  <div v-for="(items, index) in conferences" :key="index">
                    <h2>
                      {{ items.title }}
                    </h2>

                    <div class="table-wrap">
                      <b-table
                        v-if="items.subjects && items.subjects.length"
                        id="my-table"
                        striped
                        :fields="fields"
                        :items="items.subjects"
                        responsive="lg"
                        stacked="lg"
                        class=""
                      >
                        <template v-slot:cell(index)="data">
                          {{ data.index + 1 }}
                        </template>
                        <template v-slot:cell(theme)="data">
                          <div>
                            {{ data.item.title }}
                          </div>
                        </template>
                        <template v-slot:cell(name)="data">
                          <div>
                            {{ data.item.department }}
                          </div>
                        </template>
                        <template v-slot:cell(file)="data">
                          <div class="d-flex align-items-center">
                            <svg
                              class="flex-shrink-0"
                              style="margin-right: 8px"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15 18.3327H5.00004C4.08337 18.3327 3.33337 17.5827 3.33337 16.666V14.166H5.00004V16.666H15V6.49935L11.8334 3.33268H5.00004V8.33268H3.33337V3.33268C3.33337 2.41602 4.08337 1.66602 5.00004 1.66602H12.5L16.6667 5.83268V16.666C16.6667 17.5827 15.9167 18.3327 15 18.3327Z"
                                fill="#7EA3D1"
                              />
                              <path
                                d="M15.4166 6.66602H11.6666V2.91602L15.4166 6.66602Z"
                                fill="#7EA3D1"
                              />
                              <path
                                d="M4.58329 10H4.16663V10.8333H4.58329C4.83329 10.8333 4.99996 10.6667 4.99996 10.4167C4.99996 10.1667 4.83329 10 4.58329 10ZM7.99996 10H7.49996V12.5H7.99996C8.49996 12.5 9.16663 12.3333 9.16663 11.5833V10.9167C9.16663 10.1667 8.58329 10 7.99996 10Z"
                                fill="#7EA3D1"
                              />
                              <path
                                d="M3.33329 7.5C2.41663 7.5 1.66663 8.25 1.66663 9.16667V13.3333C1.66663 14.25 2.41663 15 3.33329 15H15.8333V7.5H3.33329ZM4.58329 11.6667H4.16663V13.3333H3.33329V9.16667H4.58329C5.24996 9.16667 5.83329 9.75 5.83329 10.4167C5.83329 11.0833 5.24996 11.6667 4.58329 11.6667ZM9.99996 11.5833C9.99996 12.5833 9.33329 13.3333 7.99996 13.3333H6.66663V9.16667H7.99996C9.33329 9.16667 9.99996 10 9.99996 10.9167V11.5833ZM13.3333 10H11.6666V10.8333H13V11.6667H11.6666V13.3333H10.8333V9.16667H13.3333V10Z"
                                fill="#7EA3D1"
                              />
                            </svg>
                            <div>
                              <a
                                style="color: black"
                                :href="data.item.file_url"
                                download
                                target="_blank"
                              >
                                {{ $t('download') }}
                              </a>
                            </div>
                          </div>
                        </template>
                        <template v-slot:cell(date)="data">
                          <div>
                            {{
                              $moment(data.item.start_date)
                                .locale(
                                  $i18n.locale == 'sr'
                                    ? 'uz-latn'
                                    : $i18n.locale == 'sr'
                                    ? 'sr'
                                    : $i18n.locale
                                )
                                .format('DD MMMM YYYY')
                            }}
                            / {{ data.item.place }}
                          </div>
                        </template>
                      </b-table>
                    </div>
                  </div>
                </template>
              </b-tab>
            </b-tabs>
          </div>
          <div class="col-12 col-md-3" style="padding: 0">
            <div>
              <sideCourses />
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
import sideScience from '~/components/sideScience'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    sideScience,
    BreadCrumbs,
  },
  data() {
    return {
      fields: [
        { key: 'index', label: '#' },
        { key: 'theme', label: this.$t('conference_theme') },
        { key: 'name', label: this.$t('name_of_cafedra') },
        { key: 'file', label: this.$t('name_of_file') },
        { key: 'date', label: this.$t('date_and_place') },
      ],
    }
  },
  methods: {
    async changeActiveYear(index) {
      await this.$store
        .dispatch('conferences/fetchConferences', this.conferenceYears[index])
        .catch(() => {})
    },
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('list_of_conferences'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },

    ...mapState({
      conferences: (state) => state.conferences.conferences,
      conferenceYears: (state) => state.conferences.conferenceYears,
    }),
  },
  async fetch() {
    await this.$store
      .dispatch('conferences/fetchConferenceYears')
      .catch(() => {})
    if (this.conferenceYears.length) {
      await this.$store
        .dispatch('conferences/fetchConferences', this.conferenceYears[0])
        .catch(() => {})
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  border: none;
}

tbody {
  background: #f9fafc;
}

table {
  vertical-align: middle;
}

td {
  vertical-align: middle;
}
</style>
