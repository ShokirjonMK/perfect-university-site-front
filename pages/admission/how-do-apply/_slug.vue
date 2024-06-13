<template>
  <div class="container">
    <template v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </template>
    <template v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </template>
    <template v-else>
      <Breadcrumb v-if="links" :type="'press'" :links="links" />
      <div class="row single-content-list">
        <div v-if="catalogSingle" class="inside-page col-12 col-lg-9">
          <h1>
            {{ catalogSingle.title }}
          </h1>
          <NuxtLink to="/">
            <template v-if="catalogSingle.files && catalogSingle.files.length">
              <div
                v-for="(item, index) in catalogSingle.files"
                :key="index"
                class="rows toDownload"
              >
                <h6>{{ item.title }}</h6>
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="4" fill="#E0E7FF" />
                    <path
                      d="M10.2121 13.4724C11.0121 13.4724 11.6041 13.7644 11.9881 14.3484C12.3721 14.9324 12.5641 15.7524 12.5641 16.8084C12.5641 17.4644 12.4641 18.0484 12.2641 18.5604C12.0721 19.0644 11.7841 19.4604 11.4001 19.7484C11.0241 20.0364 10.5761 20.1804 10.0561 20.1804C9.38407 20.1804 8.85207 19.9484 8.46007 19.4844V22.4484L6.92407 22.6164V13.6524H8.26807L8.35207 14.4324C8.60007 14.1124 8.88407 13.8724 9.20407 13.7124C9.52407 13.5524 9.86007 13.4724 10.2121 13.4724ZM9.62407 19.0044C10.5121 19.0044 10.9561 18.2764 10.9561 16.8204C10.9561 16.0444 10.8561 15.4844 10.6561 15.1404C10.4561 14.7964 10.1561 14.6244 9.75607 14.6244C9.50007 14.6244 9.26007 14.7044 9.03607 14.8644C8.81207 15.0164 8.62007 15.2244 8.46007 15.4884V18.3444C8.75607 18.7844 9.14407 19.0044 9.62407 19.0044Z"
                      fill="#3366FF"
                    />
                    <path
                      d="M19.4125 11.1084V20.0004H18.0565L17.9485 19.1964C17.7485 19.5004 17.4925 19.7404 17.1805 19.9164C16.8765 20.0924 16.5285 20.1804 16.1365 20.1804C15.3605 20.1804 14.7645 19.8804 14.3485 19.2804C13.9325 18.6804 13.7245 17.8644 13.7245 16.8324C13.7245 16.1844 13.8285 15.6084 14.0365 15.1044C14.2445 14.5924 14.5405 14.1924 14.9245 13.9044C15.3165 13.6164 15.7685 13.4724 16.2805 13.4724C16.8885 13.4724 17.4205 13.7004 17.8765 14.1564V10.9404L19.4125 11.1084ZM16.5685 19.0164C16.8405 19.0164 17.0805 18.9524 17.2885 18.8244C17.4965 18.6884 17.6925 18.4804 17.8765 18.2004V15.2964C17.6925 15.0724 17.5045 14.9044 17.3125 14.7924C17.1285 14.6804 16.9125 14.6244 16.6645 14.6244C16.2565 14.6244 15.9325 14.8084 15.6925 15.1764C15.4605 15.5364 15.3445 16.0844 15.3445 16.8204C15.3445 17.6044 15.4485 18.1684 15.6565 18.5124C15.8645 18.8484 16.1685 19.0164 16.5685 19.0164Z"
                      fill="#3366FF"
                    />
                    <path
                      d="M23.8241 12.1044C23.5201 12.1044 23.3001 12.1764 23.1641 12.3204C23.0361 12.4564 22.9721 12.6764 22.9721 12.9804V13.6524H24.4961L24.3281 14.7564H22.9721V20.0004H21.4361V14.7564H20.4041V13.6524H21.4361V12.9564C21.4361 12.3564 21.6281 11.8724 22.0121 11.5044C22.4041 11.1284 22.9561 10.9404 23.6681 10.9404C24.2281 10.9404 24.7761 11.0644 25.3121 11.3124L24.8681 12.3444C24.5241 12.1844 24.1761 12.1044 23.8241 12.1044Z"
                      fill="#3366FF"
                    />
                  </svg>
                  <a :href="item.url" download>
                    {{ item.filename }}
                  </a>
                </span>
              </div>
            </template>
          </NuxtLink>

          <div class="single-content" v-html="catalogSingle.content">
            <!-- {{ catalogSingle.content }} -->
          </div>

          <div
            v-if="
              catalogSingle &&
              catalogSingle.questions &&
              catalogSingle.questions.length
            "
            class="accordion"
            role="tablist"
          >
            <b-card
              v-for="(item, index) in catalogSingle.questions"
              :key="index"
              no-body
              class="mb-4 pb-0"
            >
              <b-card-header
                header-tag="header"
                class="header d-flex"
                role="tab"
              >
                <b-button
                  v-b-toggle="'accordion' + item.id"
                  class="text-left"
                  block
                  @click="accordionOpen = !accordionOpen"
                >
                  <div class="d-flex justify-content-between">
                    <h6>{{ item.title }}</h6>
                    <i>
                      <svg
                        :class="accordionOpen ? 'accordion_open' : ''"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.0001 12.0001H3.99993"
                          stroke="#9FABB9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          class="opacity"
                          d="M12 4V20.0001"
                          stroke="#9FABB9"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </i>
                  </div>
                </b-button>
              </b-card-header>
              <b-collapse
                :id="'accordion' + item.id"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <div class="single-content" v-html="item.content"></div>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
        <div class="col-12 col-lg-3">
          <AdmissionSidebar />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AdmissionSidebar from '@/components/AdmissionSidebar.vue'

export default {
  components: {
    AdmissionSidebar,
  },

  async fetch() {
    await this.$store
      .dispatch('catalog/fetchCatalogSingle', this.$route.params.slug)
      .catch(() => {})
  },
  data() {
    return {
      accordionOpen: false,
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.catalogSingle?.title,
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      catalogSingle: (state) => state.catalog.catalogSingle,
    }),
  },
}
</script>

<style lang="scss" scoped>
.inside-page {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
}

.single-content {
  gap: 12px;
  display: flex;
  flex-direction: column;
  object-fit: cover !important;

  iframe {
    width: 100%;
    height: 100%;
  }
}
.navs {
  margin-top: -2.4%;
}

h1 {
  margin-bottom: 24px;
  font-size: 1.5rem;
  color: var(--darkBlue);
}

h2 {
  color: #44494f;
}

h5 {
  padding: 16px;
  font-weight: 500;
  font-size: 1.0625rem;
  line-height: 20px;
  color: #263c55;
  background: #f8f8f8;
  border-radius: 8px;
  width: 222px;
  margin-bottom: 12px;
}

.rows {
  padding: 18px 20px 18px 20px;
  background: #f9fafc;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  margin-top: 32px;
  transition: 0.3s all;

  h6 {
    margin-bottom: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 24px;
    color: #44494f;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 16px;
    color: #9fabb9;
  }

  &:hover {
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    box-shadow: 0px 4px 20px rgba(159, 171, 185, 0.16);
    border-radius: 4px;
  }

  a:hover {
    color: #024da5;
  }

  a {
    color: rgba(38, 60, 85, 0.7);
    padding-left: 12px;
  }
}
</style>
<style>
.single-content img {
  object-fit: cover;
}

.single-content-list {
  margin: 24px 0 40px 0;
}
</style>
