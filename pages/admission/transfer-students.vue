<template>
  <div v-if="$fetchState.pending" class="fetch-pending">
    <loader />
  </div>
  <div v-else-if="$fetchState.error" class="fetch-error">
    Что то пошло не так =(
  </div>
  <div v-else>
    <bread-crumbs v-if="links" :type="'press'" :links="links" />
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 col-lg-9">
          <div class="transfer-students">
            <div class="transfer-students-inner d-flex align-items-center">
              <div class="col-left mt-4 mt-md-0">
                <span>{{ $t('admisison_yaer') }}</span>
                <h1>
                  <span class="transfer-students-heading">
                    {{ $t('transfer_students') }}</span
                  >
                  <strong>{{ $t('admissions') }}</strong>
                </h1>
                <a href="http://qabul.perfectuniversity.uz">
                  <button class="button-apply-now">
                    {{ $t('apply_now') }}
                  </button>
                </a>
              </div>
              <div class="col-right">
                <img src="/image/transfer-students.png" alt="image" />
              </div>
            </div>
          </div>
          <div>
            <div class="structure__styles">
              <h2>
                {{ staticPages?.page?.title }}
              </h2>

              <div class="single__content" v-html="staticPages.page?.content" />
              <div class="info">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8H12.01M12 11V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#2678D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {{ $t('transfer_description') }}
              </div>
              <div class="single__apply">
                <div class="single__apply-left" style="z-index: 99">
                  <p>{{ $t('transfer_students_admissions') }}</p>
                  <a target="_blank" href="https://qabul.perfectuniversity.uz/">
                    <button class="button-apply-now button">
                      {{ $t('apply_now') }}
                    </button>
                  </a>
                </div>
                <img
                  class="single__apply-img"
                  src="/image/Vector-bg.svg"
                  alt="image"
                />
                <div class="single__apply-right">
                  <img src="/image/footer-en.svg" alt="Footer en" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3">
          <AdmissionSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BreadCrumbs from '~/components/Breadcrumb'
import AdmissionSidebar from '~/components/AdmissionSidebar.vue'

export default {
  components: {
    BreadCrumbs,
    AdmissionSidebar,
  },
  async fetch() {
    const data = await this.$axios.$get('/static/transfer-student/')
    this.staticPages = data
  },
  data() {
    return {
      staticPages: [],
    }
  },

  computed: {
    chekImage() {
      return ['.jpeg', 'jpg'].includes(this.staticPages?.page?.image_url)
        ? this.staticPages?.page?.image_url
        : 'https://yangi.tsue.uz/image/seminars.jpg'
    },
    links() {
      return [
        {
          title: this.$t('transfer_students'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
  },
  head() {
    return {
      title: this.staticPages?.page?.title,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.staticPages?.page?.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.staticPages?.page?.title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.chekImage,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.staticPages?.page?.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.staticPages?.page?.title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.chekImage,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.staticPages?.page?.title,
        },
      ],
    }
  },
}
</script>

<style scoped>
.single__apply-img {
  position: absolute;
  left: 50%;
}

& h2 {
  color: #144176;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.144px;
  position: relative;
  margin-bottom: 24px;
  margin-left: 12px;

  &:before {
    content: '';
    position: absolute;
    left: -12px;
    border-radius: 2px 8px 8px 2px;
    background: #1c89c1;
    width: 4px;
    height: 32px;
  }
}
</style>
<style lang="scss" scoped>
.transfer-students {
  position: relative;
  margin-bottom: 48px;
  .col-left {
    span {
      color: var(--main-dark);
      font-size: 1.25rem;
      line-height: 26px;
      text-transform: uppercase;
    }
    h1 {
      margin-top: 4px;
      margin-bottom: 40px;
      font-weight: 700;
      font-size: 40px;
      color: var(--main-dark);
      text-transform: uppercase;

      strong {
        background-color: var(--darkBlue);
        font-weight: inherit;
        color: #ffffff;
        padding-right: 12px;
        padding-left: 12px;
      }
    }

    .button {
      background-color: var(--blue);
      border: 0 none;
      color: #ffffff;
      line-height: 26px;

      &:hover {
        background-color: var(--blue-hover);
      }
    }
  }
}
.structure__styles {
  width: 100%;
  max-width: 100% !important;
  margin: 0 auto 24px;
}

.structure__styles .single__content p {
  color: #1d2024;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.256px;
}

.structure__styles ul {
  gap: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  margin-left: 8px;
  margin-top: 24px;
}

.structure__styles li {
  display: flex;
  gap: 8px;
  color: #1d2024;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &:before {
    content: url('~/static/image/about-tsue/zero-mission.svg');
  }
}
.structure__styles .info {
  display: flex;
  padding: 16px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid rgba(38, 120, 217, 0.32);
  background: rgba(38, 120, 217, 0.08);
  max-width: 982px;
  gap: 12px;
  color: #1d2024;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.256px;
  margin-top: 24px;
}
.single__apply {
  border: 2px solid rgba(255, 255, 255, 0.24);
  border-radius: 16px;
  background: linear-gradient(147deg, #0b1e33 18.1%, #17406c 80.3%);
  padding: 20px 24px;
  margin-top: 32px;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
}
.single__apply-left .button {
  border-radius: 8px;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(8px);
}
.single__apply-left p {
  color: white;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 12px;
}

@media (max-width: 767px) {
  .structure__styles {
    margin-bottom: 20px;
  }
  .single__apply-img {
    top: 0 !important;
    right: 0 !important;
  }
}

@media (max-width: 991px) {
  .transfer-students-inner {
    flex-direction: column;

    .col-left {
      margin-bottom: 32px;

      h1 {
        font-size: 2rem;
      }
    }
  }
}
.single__apply-right {
  & .single__apply-img {
    position: absolute;
    right: 40%;
  }
  & .language {
    position: absolute;
    right: 9%;
    top: 26%;
    align-items: center;
  }
}
.info svg {
  min-width: 24px;
  min-height: 24px;
}

.transfer-students-heading {
  font-size: 40px !important;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 24px !important;
  }
}

.button-apply-now {
  border: 1px solid transparent;
  background: #1c89c1;
  color: white;
  padding: 12px 25px;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  &:hover {
    background: #1967b0;
  }
}
</style>
