<template>
  <div class="">
    <div class="container">
      <div class="container cards">
        <div class="row cards__content">
          <div class="offset-xl-2 offset-lg-1 offset-0"></div>
          <div class="col-12 col-lg-10 col-xl-8 col-md-12 card">
            <div class="d-flex justify-content-between card__content">
              <div class="text">
                <h6>{{ $t('you_can_get_catalog') }}</h6>
                <p>
                  {{ $t('you_can_get_info') }}
                </p>
              </div>
              <div class="d-flex">
                <img
                  src="@/static/image/catalog-download.svg"
                  alt="catalog-download"
                />
                <div v-if="courseFile" class="download mt-5 ml-3">
                  <a target="_blank" :href="courseFile.file_url" download="">
                    <h5>{{ $t('download') }}</h5>
                    <svg
                      width="57"
                      height="14"
                      viewBox="0 0 57 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M49 13L56 7L49 1"
                        stroke="#6DB0FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M55 7C53.7478 7 18.4783 7 1 7"
                        stroke="#6DB0FF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CatalogDownload',

  computed: {
    ...mapState({
      courseFile: (state) => state.event.courseFile,
    }),
  },

  async fetch() {
    await this.$store.dispatch('event/fetchCourseFile').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.cards {
  position: absolute;
  bottom: -22%;
}

.card {
  background: #024da5;
  border-radius: 4px;
  padding: 16px 32px 0 32px;
}

img {
  margin-bottom: -1px;
}

.text {
  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 24px;
    color: #ffffff;
    margin-bottom: 12px;
    margin-top: 8px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.5);
  }
}

.download {
  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    color: #ffffff;
    transition: 0.3s all;
    &:hover {
      color: #aaaaaa;
    }
  }
}

@media only screen and (max-width: 992px) {
  .text {
    h6 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
}

@media only screen and (max-width: 768px) {
  .card {
    padding: 8px 16px 0px 16px;
  }

  .text {
    h6 {
      font-size: 0.85rem;
      line-height: 15px;
      margin-bottom: 4px;
    }

    p {
      font-size: 0.7rem;
      line-height: 15px;
    }
  }
  img {
    width: 60%;
    margin-bottom: -31px;
  }
  .download {
    h5 {
      font-size: 0.8rem;
    }
  }
}

@media only screen and (max-width: 576px) {
  .card {
    max-width: 330px;
    display: flex;
    flex-direction: column !important;

    .card__content {
      flex-direction: column;
    }
  }

  .cards {
    margin-left: -30px;
  }
  .cards__content {
    width: 260px;
    margin: 0 auto;
    display: flex;
    flex-direction: column !important;
  }

  img {
    width: 20%;
    margin-bottom: -42px;
  }
}
</style>
