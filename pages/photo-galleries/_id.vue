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

      <div class="container">
        <div class="row">
          <div
            v-if="fotoGallerySingle && fotoGallerySingle.news"
            class="col-12 col-md-9"
          >
            <div class="row">
              <div class="col-12">
                <h1>
                  {{ fotoGallerySingle.news.title }}
                </h1>
                <span class="date">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z"
                      stroke="#9FABB9"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.6667 1.3335V4.00016"
                      stroke="#9FABB9"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.33331 1.3335V4.00016"
                      stroke="#9FABB9"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 6.6665H14"
                      stroke="#9FABB9"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {{
                    $moment(fotoGallerySingle.news.publish_date)
                      .locale(
                        $i18n.locale == 'sr'
                          ? 'uz-latn'
                          : $i18n.locale == 'sr'
                          ? 'sr'
                          : $i18n.locale
                      )
                      .format('LL')
                  }}
                </span>
              </div>
              <template
                v-if="
                  fotoGallerySingle.news.images &&
                  fotoGallerySingle.news.images.length
                "
              >
                <div
                  v-for="(item, indexPhoto) in fotoGallerySingle.news.images"
                  :key="indexPhoto"
                  class="col-12 col-md-4"
                >
                  <div class="images mt-4">
                    <img
                      class="imgs"
                      :src="item.src"
                      alt="Pre loader"
                      rel="preload"
                      @click="index = indexPhoto"
                    />
                  </div>
                  <CoolLightBox
                    v-if="
                      fotoGallerySingle.news.images &&
                      fotoGallerySingle.news.images.length
                    "
                    :items="fotoGallerySingle.news.images"
                    :index="index"
                    @close="index = null"
                  >
                  </CoolLightBox>
                </div>
              </template>
            </div>
          </div>
          <div class="col-12 col-md-3 components">
            <internationalSide class="mt-4" side-head-id="7" />
            <sidebarAppeal />
          </div>
        </div>
      </div>

      <div class="container-fluid recommended">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>{{ $t('related_photos') }}</h1>
            </div>
            <template
              v-if="
                fotoGallerySingle.related && fotoGallerySingle.related.length
              "
            >
              <div
                v-for="(item, index) in fotoGallerySingle.related"
                :key="index"
                class="col-12 col-md-3"
              >
                <NuxtLink :to="`${item.id}`">
                  <div class="photo-cards mb-5">
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
                        <span class="hovered"> {{ item.count }} sur'at </span>
                      </div>
                    </div>
                    <div class="text-info">
                      <h6>{{ item.title }}</h6>
                      <span class="date">
                        {{
                          $moment(item.publish_date)
                            .locale(
                              $i18n.locale == 'sr'
                                ? 'uz-latn'
                                : $i18n.locale == 'sr'
                                ? 'sr'
                                : $i18n.locale
                            )
                            .format('LL')
                        }}
                      </span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'
import sideNews from '~/components/sideNews'
import sidebarAppeal from '~/components/sidebarAppeal'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    sideNews,
    sidebarAppeal,
    BreadCrumbs,
    CoolLightBox,
  },
  data() {
    return {
      index: null,
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('photo_gallery'),
          link: `/${this.$i18n.locale}/photo-galleries`,
        },
        {
          title: this.fotoGallerySingle?.news?.title,
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      fotoGallerySingle: (state) => state.fotoGallerySingle.fotoGallerySingle,
    }),
  },

  async fetch() {
    await this.$store
      .dispatch(
        'fotoGallerySingle/fetchFotoGallerySingle',
        this.$route.params.id
      )
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.imgs {
  width: 279px !important;
  height: 149px !important;
}

.container {
  .components {
    margin-top: 32px;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 130%;
    color: #44494f;
    margin-top: 32px;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #e7e9ed;
  }

  .date {
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 16px;
    color: #9fabb9;

    svg {
      margin-top: -3px;
      margin-right: 6px;
    }
  }

  img {
    border-radius: 4px;
    object-fit: cover;
    &:hover {
      cursor: pointer;
    }
  }
}

.recommended {
  margin-top: 128px;
  background: #faf9fc;
  padding: 28px 0px 0px 00px;

  .photo-cards {
    position: relative;
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    border-radius: 4px;
    transition: 0.5s all;

    .images {
      img {
        width: 100% !important;
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
</style>
