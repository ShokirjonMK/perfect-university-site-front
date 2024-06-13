<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending"></div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <bread-crumbs :type="'press'" :links="links" />

      <div class="container structure-styles">
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <div v-if="seminar && seminar.length" class="row">
              <div class="col-12">
                <h1>{{ $t('scientific_seminars') }}</h1>
              </div>
              <div
                v-for="(item, index) in seminar"
                :key="index"
                class="col-12 col-md-4"
              >
                <NuxtLink
                  :to="`/${$i18n.locale}/science/seminars/${item.slug}`"
                >
                  <div class="seminar-cards mb-5" style="position: relative">
                    <img :src="item.thumbnail_url" :alt="item.title" />
                    <img
                      src="@/static/image/seminars-bg.svg"
                      class="bg"
                      alt="Seminars image"
                    />
                    <div class="text-info">
                      <h6>{{ item.title }}</h6>
                      <div class="d-flex justify-content-between">
                        <span class="type">{{ item.category }}</span>
                        <span class="date">
                          {{
                            $moment(item.publish_date)
                              .locale(
                                $i18n.locale == 'sr'
                                  ? 'uz-latn'
                                  : $i18n.locale == 'uz'
                                  ? 'uz'
                                  : $i18n.locale
                              )
                              .format('LL')
                          }}
                        </span>
                      </div>
                      <div class="line"></div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-3 nav" style="padding: 0">
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
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    BreadCrumbs,
  },
  data() {
    return {}
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('scientific_seminars'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      seminar: (state) => state.seminars.seminar,
    }),
  },

  async fetch() {
    await this.$store.dispatch('seminars/fetchSeminar').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    border: none;
    padding: 0;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  img {
    border-radius: 4px;
  }

  .text-info {
    position: absolute;
    top: 61%;
    z-index: 2;
    padding: 0px 16px 0px 16px;

    h6 {
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 21px;
      color: #ffffff;
      margin-bottom: 12px;

      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 16px;
    }

    span {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 20px;
      color: #ffffff;
      margin-bottom: 10px;
    }
    .date {
      color: #9fabb9;
    }
  }

  .line {
    width: 30%;
    height: 2px;
    background: #6db0ff;
    transition: 0.3s all;
  }

  .seminar-cards {
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    transition: 0.3s all;
    height: 250px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    &:hover {
      transform: translatey(2px);

      .line {
        width: 100%;
      }
    }
  }
}

.nav {
  margin-top: -1.1%;
}
</style>
