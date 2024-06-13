<template>
  <div v-if="$fetchState.pending" class="fetch-pending"></div>
  <div v-else-if="$fetchState.error" class="fetch-error">
    Что то пошло не так =(
  </div>
  <div v-else>
    <bread-crumbs :type="'press'" :links="links" />

    <div class="container structure-styles">
      <div class="row" style="margin: 0">
        <div class="col-12 col-lg-8 col-md-11 pd">
          <h1 class="mb-4">
            {{ $t('Co_curricular_programs') }}
          </h1>
          <template
            v-if="
              internationalRelations &&
              internationalRelations.relations &&
              internationalRelations.relations.length
            "
          >
            <div
              v-for="(item, index1) in internationalRelations.relations"
              :key="index1"
              class="row mb-4"
            >
              <a :href="item.link" target="_blank" class="d-flex programCards">
                <div
                  class="col-6 col-lg-3 col-sm-3 align-items-sm-center d-lg-flex"
                  style="padding-left: 0"
                >
                  <img
                    class="object-cover"
                    :src="item.image_url"
                    alt="Item image"
                  />
                </div>
                <div class="col-lg-9 col-sm-9 col-6">
                  <h6>
                    {{ item.title }}
                  </h6>
                  <div class="line"></div>
                  <p v-html="item.short_description" />
                </div>
              </a>
            </div>
          </template>

          <div class="row">
            <div class="table-wrap table-striped text-center mt-5">
              <b-table
                v-if="
                  internationalRelations &&
                  internationalRelations.staffs &&
                  internationalRelations.staffs.length
                "
                :fields="fields"
                :items="internationalRelations.staffs"
                responsive="lg"
                stacked="lg"
                class=""
              >
                <template v-slot:cell(index)="data">
                  {{ data.index + 1 }}
                </template>

                <template v-slot:cell(image_url)="data">
                  <div class="img-wrap">
                    <img :src="data.item.image_url" alt="Image wrap" />
                  </div>
                </template>
              </b-table>
            </div>
          </div>
          <h2>
            {{ $t('foreign_exchange_programs') }}
          </h2>

          <template
            v-if="
              internationalRelations &&
              internationalRelations.usufull_links &&
              internationalRelations.usufull_links.length
            "
          >
            <div
              v-for="(item, index2) in internationalRelations.usufull_links"
              :key="index2"
              class="links mb-3"
            >
              <h6>{{ item.title }}</h6>
              <a target="_blank" :href="item.link">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="20"
                      height="20"
                      rx="3.33333"
                      fill="#9FABB9"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M10.001 3.88672C8.38024 3.88672 6.82585 4.53057 5.6798 5.67662C4.53374 6.82268 3.88989 8.37706 3.88989 9.99783C3.88989 11.6186 4.53374 13.173 5.6798 14.319C6.82585 15.4651 8.38024 16.1089 10.001 16.1089C11.6218 16.1089 13.1762 15.4651 14.3222 14.319C15.4683 13.173 16.1121 11.6186 16.1121 9.99783C16.1121 8.37706 15.4683 6.82268 14.3222 5.67662C13.1762 4.53057 11.6218 3.88672 10.001 3.88672V3.88672Z"
                      stroke="#9FABB9"
                      stroke-width="1.11111"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M4.16602 12.2201H15.8327M9.99935 3.88672C9.26264 3.88672 8.5561 4.53057 8.03516 5.67662C7.51423 6.82268 7.22157 8.37706 7.22157 9.99783C7.22157 11.6186 7.51423 13.173 8.03516 14.319C8.5561 15.4651 9.26264 16.1089 9.99935 16.1089C10.7361 16.1089 11.4426 15.4651 11.9635 14.319C12.4845 13.173 12.7771 11.6186 12.7771 9.99783C12.7771 8.37706 12.4845 6.82268 11.9635 5.67662C11.4426 4.53057 10.7361 3.88672 9.99935 3.88672V3.88672ZM4.16602 7.77561H15.8327H4.16602Z"
                      stroke="#9FABB9"
                      stroke-width="1.11111"
                      stroke-miterlimit="10"
                    />
                  </svg>
                  &nbsp;
                  {{ item.link }}
                </span>
              </a>
            </div>
          </template>

          <HashTags />
        </div>

        <div class="col-12 col-lg-4 col-md-10 navs">
          <div>
            <internationalSide side-head-id="3" />
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
    return {
      fields: [
        { key: 'index', label: '#' },
        { key: 'image_url', label: this.$t('pic') },
        { key: 'title', label: this.$t('name_surname') },
        { key: 'place', label: this.$t('country_visited') },
        {
          key: 'short_description',
          label: this.$t('higher_education_institution'),
        },
      ],
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('Co_curricular_programs'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      internationalRelations: (state) =>
        state.international.internationalRelations,
      sideBar: (state) => state.sideBar.sideBar,
    }),
  },
  async fetch() {
    await this.$store
      .dispatch('international/fetchInternationalRelations')
      .catch(() => {})
    await this.$store
      .dispatch('sideBar/fetchSideBar', 'university')
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
h1 {
  border: none;
  margin-left: -14px;
}

.navs {
  margin-top: 7.9%;
}

.links {
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;

  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 130%;
    color: #44494f;
    margin-bottom: 12px;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 130%;
    color: #9fabb9;
    transition: 0.3s all;
  }

  a:hover span {
    color: #003b81;

    svg {
      path {
        stroke: #003b81;
      }
    }
  }
}

.programCards {
  transition: 0.3s all;
  background: #f9fafc;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  margin-right: 0;
  margin-left: 0;

  img {
    height: 100%;
    width: 100%;
  }

  .col-9 {
    padding: 12px 12px 12px 0px;
  }

  h6 {
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 32px;
    color: #44494f;
  }

  .line {
    margin-top: 8px;
    margin-bottom: 16px;
  }

  p {
    font-size: 0.875rem;
    line-height: 140%;
    color: #9fabb9;
    margin-bottom: 34px;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  svg {
    margin-right: 12px;
    opacity: 0;
    transition: 0.3s all;

    &:hover {
      path {
        fill: #c5ccd5;
      }
    }
  }

  &:hover {
    .line {
      width: 100%;
    }

    transform: translateY(3px);

    svg {
      opacity: 1;
    }
  }
}

table {
  margin-bottom: 116px;
  img {
    width: 72px;
    height: 75px;
  }
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
</style>
