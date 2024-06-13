<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else class="container pb-5">
      <bread-crumbs :type="'press'" :links="links" />
      <div class="row pt-4">
        <div v-if="faq" class="structure-styles col-12 col-lg-9">
          <h1>
            {{ $t('faq') }}
          </h1>
          <div v-if="faq" class="accordion" role="tablist">
            <b-card
              v-for="(item, index) in faq"
              :key="index"
              no-body
              class="mb-4"
            >
              <b-card-header
                header-tag="header"
                class="header d-flex"
                role="tab"
              >
                <b-button
                  :aria-expanded="item.accordionOpen"
                  class="text-left"
                  block
                  @click="toggleCollapse(item)"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6>{{ item.title }}</h6>
                    <i class="icon-down">
                      <svg
                        :class="{ 'rotate-180': item.accordionOpen }"
                        class="icon"
                        width="18"
                        height="18"
                      >
                        <use xlink:href="/icons/sprite.svg#down" />
                      </svg>
                    </i>
                  </div>
                </b-button>
              </b-card-header>
              <CollapseTransition>
                <b-card-body v-if="item.accordionOpen">
                  <b-card-text>
                    <div class="single__content-main">
                      <div class="single-content" v-html="item.content" />
                    </div>
                  </b-card-text>
                </b-card-body>
              </CollapseTransition>
            </b-card>
          </div>
        </div>
        <AboutTsueSidebar class="col-12 col-lg-3 p-3" />
      </div>
    </div>
  </div>
</template>

<script>
import { CollapseTransition } from '@ivanv/vue-collapse-transition/src'
import BreadCrumbs from '@/components/Breadcrumb.vue'

export default {
  components: { BreadCrumbs, CollapseTransition },
  async fetch() {
    const data = await this.$axios.$get('faq-questions/')

    this.faq = data.results.map((item) => ({ ...item, accordionOpen: false }))
  },
  data() {
    return {
      faq: [],
    }
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('faq'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
  },
  methods: {
    toggleCollapse(item) {
      item.accordionOpen = !item.accordionOpen
      this.faq.forEach((faqItem) => {
        if (faqItem !== item) {
          faqItem.accordionOpen = false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.navs {
  margin-top: -2.4%;
}

h1 {
  margin-bottom: 24px;
}

.accordion {
  margin-top: 0;

  .card {
    border-color: var(--gray-color-2);
    border-bottom: 1px solid var(--gray-color-2);
    border-radius: 12px;
    padding: 16px 16px 16px 20px;
    transition: all 0.3s; /* Add transition for smoother opening/closing */
    box-shadow: 0px 9px 24px 0px var(--shadow);

    header {
      background-color: transparent;

      .btn {
        &:hover {
          border-color: transparent;
        }
        &:focus,
        &:active {
          border: 0 none;
          outline: none;
          background-color: transparent;
          box-shadow: none;
        }

        &.not-collapsed {
          .icon-down {
            transition: 300ms ease-in;
            background-color: var(--gray-color-3);
            .icon {
              transform: rotate(180deg);
              color: var(--blue);
            }
          }
        }
      }
    }

    button,
    .card-body {
      padding: 0 !important;
    }

    .collapse {
      .card-text {
        padding-top: 0;

        .single-content {
          color: var(--darkBlue);
          font-size: 0.875rem;
          font-weight: 500;
        }
      }
    }

    h6 {
      font-weight: 700;
      font-size: 1rem;
      line-height: 20px;
      color: var(--darkBlue);
    }

    .icon-down {
      width: 42px;
      height: 42px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray-bg);
      flex-shrink: 0;
      margin-left: 8px;

      svg {
        flex-shrink: 0;
        color: var(--gray-color-1);
      }
    }

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 16px;
      color: #9fabb9;
    }
  }
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
.accordion .card:hover {
  border: 1px solid var(--blue);
}
.single__content-main {
  border-top: 1px solid #e9edf2;
  padding-top: 16px;
}

.rotate-180 {
  transform: rotate(180deg);
}

.icon {
  transition: 300ms ease-in;
}
</style>
