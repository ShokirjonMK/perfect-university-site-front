<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <div v-if="catalogSingle" class="structure-styles">
        <h1>
          {{ $t('faq') }}
        </h1>
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
            class="mb-4"
          >
            <b-card-header header-tag="header" class="header d-flex" role="tab">
              <b-button
                v-b-toggle="'accordion' + item.id"
                class="text-left"
                block
                @click="item.accordionOpen = !item.accordionOpen"
              >
                <div class="d-flex justify-content-between align-items-center">
                  <h6>{{ item.title }}</h6>
                  <i class="icon-down">
                    <svg class="icon" width="18" height="18">
                      <use xlink:href="/icons/sprite.svg#down" />
                    </svg>
                  </i>
                </div>
              </b-button>
            </b-card-header>
            <b-collapse
              :id="'accordion' + item.id"
              :visible="item.accordionOpen"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <div class="single-content" v-html="item.content" />
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import sideCourses from '@/components/sideCourses'

export default {
  components: {
    sideCourses,
  },
  data() {
    return {}
  },

  computed: {
    ...mapState({
      catalogSingle: (state) => state.catalog.catalogSingle,
    }),
  },

  async fetch() {
    await this.$store
      .dispatch('catalog/fetchCatalogSingle', this.$route.params.slug)
      .catch(() => {})
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
    transition: 0.3s all;
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
      border-top: 1px solid transparent;

      .card-text {
        padding-top: 0;

        .single-content {
          color: var(--darkBlue);
          font-size: 0.875rem;
          font-weight: 500;
        }
      }

      &.show {
        border-color: var(--gray-color-3);
        padding-top: 16px;
        margin-top: 16px;
      }
    }

    h6 {
      font-weight: 700;
      font-size: 1rem;
      line-height: 24px;
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
</style>
