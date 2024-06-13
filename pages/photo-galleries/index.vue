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
            <h1>{{ $t('photo_gallery') }}</h1>
          </div>
          <div class="col-12 col-md-9 pd">
            <div v-if="fotoGallery && fotoGallery.length" class="row">
              <div
                v-for="(item, index) in fotoGallery"
                :key="index"
                class="col-12 col-md-4"
              >
                <NuxtLink :to="`/${$i18n.locale}/photo-galleries/${item.id}`">
                  <div class="video-cards mb-5">
                    <div class="images">
                      <img :src="item.thumbnail_url" :alt="item.title" />
                      <div class="d-flex svg">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4 13.8665H4.26668C3.67735 13.8665 3.20001 13.3891 3.20001 12.7998V5.86647C3.20001 5.27714 3.67735 4.7998 4.26668 4.7998H14.4C14.9893 4.7998 15.4667 5.27714 15.4667 5.86647V12.7998C15.4667 13.3891 14.9893 13.8665 14.4 13.8665Z"
                            fill="white"
                          />
                          <path
                            d="M3.19999 3.73379H12.8V3.20046C12.8 2.61112 12.3227 2.13379 11.7333 2.13379H1.59999C1.01066 2.13379 0.533325 2.61112 0.533325 3.20046V10.6671C0.533325 11.2565 1.01066 11.7338 1.59999 11.7338H2.13333V4.80046C2.13333 4.21112 2.61066 3.73379 3.19999 3.73379Z"
                            fill="white"
                          />
                        </svg>
                        <span class="hovered">
                          {{ item.count }} {{ $t('pics') }}
                        </span>
                      </div>
                    </div>
                    <div class="text-info">
                      <h6>{{ item.title }}</h6>
                      <span class="date">{{
                        $moment(item.publish_date)
                          .locale(
                            $i18n.locale == 'sr'
                              ? 'uz-latn'
                              : $i18n.locale == 'sr'
                              ? 'sr'
                              : $i18n.locale
                          )
                          .format('LL')
                      }}</span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-3" style="margin-top: 0">
            <internationalSide side-head-id="7" />
            <sidebarAppeal />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import sideNews from '~/components/sideNews'
import sidebarAppeal from '~/components/sidebarAppeal'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    sideNews,
    sidebarAppeal,
    BreadCrumbs,
  },

  data() {
    return {}
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('photo_gallery'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },

    ...mapState({
      fotoGallery: (state) => state.fotoGallery.fotoGallery,
    }),
  },

  async fetch() {
    await this.$store.dispatch('fotoGallery/fetchFotoGallery').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 32px;

  h1 {
    margin-bottom: 32px;
  }

  .video-cards {
    position: relative;
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    border-radius: 4px;
    transition: 0.5s all;

    .images {
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 4px 4px 0 0;
      }
      .svg {
        position: absolute;
        z-index: 3;
        left: 8px;
        top: 8px;
        background: rgba(2, 28, 59, 0.6);
        border-radius: 4px;
        font-style: normal;
        font-weight: bold;
        font-size: 0.75rem;
        line-height: 15px;
        color: #ffffff;
        padding: 4px;

        svg {
          margin-right: 8px;
        }
      }

      .hovered {
        display: none;
      }
    }

    .text-info {
      padding: 12px;

      h6 {
        font-style: normal;
        font-weight: bold;
        font-size: 0.875rem;
        line-height: 21px;
        color: #44494f;

        margin-bottom: 8px;
      }

      span {
        font-style: normal;
        font-weight: normal;
        font-size: 0.875rem;
        line-height: 20px;
        color: #9fabb9;
      }
    }

    &:hover {
      box-shadow: 0px 4px 20px rgba(142, 153, 166, 0.16);

      .hovered {
        display: block;
      }
    }
  }

  .col-md-3 {
    margin-top: 32px;
  }
}

img {
  width: 100%;
}
</style>
