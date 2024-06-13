<script src="../../lang/en-EN.js"></script>
<template>
  <div v-if="$fetchState.pending" class="fetch-pending"></div>
  <div v-else-if="$fetchState.error" class="fetch-error">
    Что то пошло не так =(
  </div>
  <div v-else>
    <BreadCrumbs v-if="links" :type="'press'" :links="links" />
    <div v-if="newsSingle && newsSingle.news" class="news-container">
      <div class="row pt-5">
        <div class="col-12">
          <h1>
            {{ newsSingle.news.title }}
          </h1>
          <div class="news-content">
            <div
              v-if="newsSingle.news.image_url"
              class="text-center position-relative"
            >
              <img
                :src="newsSingle.news.image_url"
                :alt="newsSingle.news.title"
              />
              <div class="position-absolute download-box">
                <button
                  class="download-btn position-absolute"
                  @click="imageDownload(newsSingle.news.image_url)"
                >
                  {{ $t('downloadImg') }}
                </button>
              </div>
            </div>
            <div>
              <div
                class="mt-4 single-content"
                v-html="newsSingle.news.description"
              ></div>
            </div>
            <div
              v-if="newsSingle.news.gallery && newsSingle.news.gallery.length"
              class="mt-4"
            >
              <!-- big -->
              <VueSlickCarousel
                v-if="newsSingle.news.gallery"
                ref="c1"
                :as-nav-for="c2"
                :focus-on-select="true"
                class="slider_big relative"
                v-bind="settings"
                @afterChange="swiper"
              >
                <template #prevArrow="arrowOption" class="prev-button">
                  <!-- {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }} -->
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 18L8 12L14 6"
                      stroke="#21252B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
                <template #nextArrow="arrowOption" class="next-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6L16 12L10 18"
                      stroke="#21252B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
                <div
                  v-for="(item, index) in newsSingle.news.gallery"
                  :key="index"
                >
                  <div class="position-relative">
                    <aspect-ratio-image :ratio="9 / 16">
                      <img
                        :src="item.image_url"
                        :alt="item.title"
                        class="pointer-events-none"
                      />
                    </aspect-ratio-image>
                    <div class="position-absolute download-box">
                      <div
                        class="download-btn position-absolute"
                        @click="
                          downloadImage(
                            newsSingle.news.image_url,
                            'image_' + newsSingle.news.category_slug,
                            $event
                          )
                        "
                      >
                        {{ $t('downloadImg') }}
                      </div>
                    </div>
                  </div>
                </div>
              </VueSlickCarousel>
              <!-- list  -->
              <VueSlickCarousel
                v-if="newsSingle.news.gallery"
                ref="c2"
                :as-nav-for="c1"
                :focus-on-select="true"
                :slides-to-show="5"
                v-bind="settings2"
              >
                <template #prevArrow="arrowOption" class="prev-button">
                  <!-- {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }} -->
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 18L8 12L14 6"
                      stroke="#21252B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
                <template #nextArrow="arrowOption" class="next-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 6L16 12L10 18"
                      stroke="#21252B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </template>
                <div
                  v-for="(item, index) in newsSingle.news.gallery"
                  :key="index"
                  class="cursor-pointer"
                >
                  <aspect-ratio-image :ratio="9 / 16">
                    <img
                      :src="item.image_url"
                      alt="Mission logo"
                      class="px-1 mini-gallery-img cursor-pointer"
                      @click="test(index)"
                    />
                  </aspect-ratio-image>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
        <div class="col-12">
          <hashTags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import hashTags from '~/components/hashTags'
import BreadCrumbs from '~/components/Breadcrumb'
import axios from 'axios'

export default {
  components: {
    BreadCrumbs,
    hashTags,
  },

  async fetch() {
    await this.$store
      .dispatch('newsSingle/fetchNewsSingle', this.$route.params.slug)
      .catch((error) => {
        if (error.response.status == 404) {
          this.$router.push('/404')
        }
      })
  },
  data() {
    return {
      mediaSingle: [
        {
          img: 'https://picsum.photos/500/500',
        },
        {
          img: 'https://picsum.photos/600/500',
        },
        {
          img: 'https://picsum.photos/700/500',
        },
        {
          img: 'https://picsum.photos/800/500',
        },
        {
          img: 'https://picsum.photos/700/600',
        },
        {
          img: 'https://picsum.photos/800/600',
        },
        {
          img: 'https://picsum.photos/850/500',
        },
        {
          img: 'https://picsum.photos/700/650',
        },
        {
          img: 'https://picsum.photos/890/620',
        },
      ],
      c1: undefined,
      c2: undefined,
      focusedItem: 1,
      settings: {
        loop: true,
        infinite: true,
        draggable: false,
      },
      settings2: {
        loop: true,
        infinite: true,
        draggable: false,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 4 } },
          { breakpoint: 576, settings: { slidesToShow: 3 } },
        ],
      },
    }
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('news'),
          link: `/${this.$i18n.locale}/news`,
        },
        {
          title: `${this.newsSingle?.news?.title.substring(0, 60)}...`,
          link: `${this.$i18n.locale}/news`,
        },
      ]
    },
    ...mapState({
      newsSingle: (state) => state.newsSingle.newsSingle,
    }),
  },
  watch: {
    'this.c1'(val) {
      console.log('test')
    },
  },
  mounted() {
    console.dir(this)
    this.c1 = this.$refs.c1
    this.c2 = this.$refs.c2
  },

  methods: {
    async imageDownload(imageUrl) {
      try {
        const response = await axios.get(imageUrl, {
          responseType: 'blob',
        })
        const blob = new Blob([response.data], {
          type: response.headers['content-type'],
        })
        const url = window.URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'downloaded_image.jpg')
        document.body.appendChild(link)
        link.click()

        window.URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Error downloading image:', error)
      }
    },

    downloadImage(imageUrl, fileName, event) {
      axios.get(imageUrl, {
        headers: {
          responseType: 'blob',
        },
      })
      // .then((response) => {
      //   const link = document.createElement('a')
      //   link.href = URL.createObjectURL(blob)
      //   link.download = fileName + '.jpg'
      //
      //   document.body.appendChild(link)
      //   link.click()
      //
      //   document.body.removeChild(link)
      // })
      // .catch((error) => console.error('Error downloading image:', error))
    },
    test(index) {
      this.focusedItem = index + 1
      console.log(index)
      this.$refs.c1.goTo(index)
    },
    swiper(e) {
      console.log('our carousel is ready', e)
      this.focusedItem = e + 1
    },
  },
  head() {
    return {
      title: this.newsSingle?.news?.title,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.newsSingle?.news?.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.newsSingle?.news?.title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.newsSingle?.news?.image_url,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.newsSingle?.news?.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.newsSingle?.news?.title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.newsSingle?.news?.image_url,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.newsSingle?.news?.title,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.download-box {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    opacity: 1;
  }
}

.download-btn {
  cursor: pointer;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 20px;
  color: #ffffff;
  background: #024da5;
  border-radius: 4px;
  padding: 4px 10px;
  border: 1px solid #024da5;
  transition: 0.3s all;
  bottom: 20px;
  right: 20px;
  &:hover {
    background-color: #05306d;
    border-color: #05306d;
  }
}

.mini-gallery-img {
  transition: all 0.3s ease-in-out;
}

.mini-gallery-img:hover {
  opacity: 0.8;
}

.slick-prev {
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
  z-index: 1;
  background: #fff;
  //border: 1px solid #e5e5e5;
  border-radius: 50%;
  //padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #e5e5e5;
  }
}

.slick-next {
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  z-index: 1;
  background: #fff;
  //border: 1px solid #e5e5e5;
  border-radius: 50%;
  //padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #e5e5e5;
  }
}
</style>

<style lang="scss" scoped>
.single-content p {
  // display: flex !important;
  background: olivedrab !important;
}

.single-content {
  white-space: pre-line;
}

.news-content {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  margin-top: 24px;

  @media screen and (max-width: 640px) {
    padding: 0;
    background: transparent;
  }
}

.news-container {
  max-width: 914px;
  padding: 0 16px;
  margin: 0 auto;

  img {
    border-radius: 10px;
  }
}

.container {
  .recommended-news-side {
    .mini-card {
      padding: 0px 12px 12px 12px;
      background: #f9fafc;
      border: 1px solid rgba(159, 171, 185, 0.2);
      border-radius: 4px;
      margin-top: 28px;

      .line {
        height: 2px;
        background: #6db0ff;
        width: 15%;
        margin-bottom: 10px;
        transition: 0.3s all;
      }

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 20px;
        color: #9fabb9;
      }

      h6 {
        font-style: normal;
        font-weight: bold;
        font-size: 0.75rem;
        line-height: 21px;
        color: #44494f;
        margin-top: 16px;
      }

      &:hover {
        .line {
          width: 100%;
        }
      }
    }
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5625rem;
    line-height: 130%;
    color: #44494f;
    margin-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #e7e9ed;
  }

  .justify-content-between {
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 16px;
      color: #9fabb9;
      margin-top: 16px;
      margin-bottom: 20px;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 144.5%;
    color: #44494f;
  }

  .cards-news {
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    box-shadow: 0px 4px 8px rgba(159, 171, 185, 0.08);
    border-radius: 4px;
    min-height: 287px;

    .text-info {
      padding: 12px 12px 0px 12px;

      h6 {
        font-style: normal;
        font-weight: bold;
        font-size: 0.875rem;
        line-height: 21px;
        color: #44494f;

        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 16px;
      }

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 20px;
        text-align: right;
        color: #9fabb9;
      }

      .status {
        font-style: normal;
        font-weight: normal;
        font-size: 0.875rem;
        line-height: 20px;
        color: #44494f;
        margin: 0;
      }

      .line {
        width: 15%;
        height: 2px;
        background: #6db0ff;
        transition: 0.3s all;
        margin-top: 8px;
      }
    }

    transition: 0.3s all;

    &:hover {
      .line {
        width: 100%;
      }

      transform: translateY(3px);
    }
  }
}
</style>
