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

      <div class="container structure-styles">
        <div class="row">
          <div v-if="scholarships" class="col-12 col-md-9 pd">
            <template v-if="scholarships.page">
              <h1>
                {{ scholarships.page.title }}
              </h1>

              <img
                :src="scholarships.page.image_url"
                style="width: 100%"
                class="mb-4"
                alt="Schoolarship"
              />

              <div
                class="single-content"
                v-html="scholarships.page.content"
              ></div>

              <h2>{{ $t('international_partners') }}</h2>
            </template>

            <div
              v-if="scholarships.partners && scholarships.partners.length"
              class="row"
            >
              <div
                v-for="(item, index) in scholarships.partners"
                :key="index"
                class="col-12 col-sm-6 col-md-4 text-center mb-4"
              >
                <a :href="item.url">
                  <div class="card-fields">
                    <img :src="item.image_url" alt="Card fields" />
                    <div
                      class="d-flex justify-content-center"
                      style="padding-left: 20px; padding-right: 20px"
                    >
                      <div class="line"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <HashTags />
          </div>

          <div class="col-12 col-md-3 navs" style="padding: 0">
            <div>
              <internationalSide />
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
          title: this.scholarships?.page?.title,
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      scholarships: (state) => state.international.scholarships,
    }),
  },

  async fetch() {
    await this.$store
      .dispatch('international/fetchScholarships')
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.navs {
  margin-top: 7.7%;
}

.structure-styles {
  h1 {
    border: none;
  }

  .mt {
    margin-top: -3.5%;
  }

  .card-fields {
    min-height: 179px;
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    border-radius: 4px;
    padding: 24px 0px 0px 0px;
    position: relative;
    max-height: 161px;
    position: relative;
    vertical-align: center;

    // .line2 {
    //     margin-top: 17.5% !important;
    // }

    .line {
      position: absolute;
      bottom: 0;
    }

    img {
      vertical-align: center;
      margin-top: 12%;
    }

    &:hover {
      transform: translateY(3px);

      .univ {
        opacity: 1;
      }

      .line {
        width: 100%;
        text-md-right text-center &:hover {
          width: 60%;
        }
      }
    }
  }

  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 21px;
    text-align: center;
    color: #44494f;
  }

  //   .line {
  //     margin-top: 16px;
  //   }

  .card-fields {
    transition: 0.3s all;
  }
}
</style>
