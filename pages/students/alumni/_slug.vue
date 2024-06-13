<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <h1 class="container">{{ $t('alumni') }}</h1>
      <div class="container">
        <div>
          <div v-if="graduatorSliderSlug">
            <div class="graduatorsCards">
              <div class="alumni__row d-md-flex">
                <div class="alumni__img">
                  <img
                    class="img-graduators"
                    :src="graduatorSliderSlug.image_url"
                    alt="Image"
                  />
                </div>
                <div class="w-100" style="padding: 0">
                  <div class="content">
                    <div class="st-floor">
                      <h6>{{ graduatorSliderSlug.title }}</h6>
                      <span>{{ graduatorSliderSlug.profession }}</span>
                      <div class="line"></div>
                    </div>

                    <div class="alumni__link">
                      <div class="ps-2">
                        <p v-if="graduatorSliderSlug.faculty">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 17.5H1.75C1.75 17.9142 2.08579 18.25 2.5 18.25V17.5ZM17.5 17.5V18.25C17.9142 18.25 18.25 17.9142 18.25 17.5H17.5ZM5 5.08333C4.58579 5.08333 4.25 5.41912 4.25 5.83333C4.25 6.24755 4.58579 6.58333 5 6.58333V5.08333ZM5.83333 6.58333C6.24755 6.58333 6.58333 6.24755 6.58333 5.83333C6.58333 5.41912 6.24755 5.08333 5.83333 5.08333V6.58333ZM9.16667 5.08333C8.75245 5.08333 8.41667 5.41912 8.41667 5.83333C8.41667 6.24755 8.75245 6.58333 9.16667 6.58333V5.08333ZM10 6.58333C10.4142 6.58333 10.75 6.24755 10.75 5.83333C10.75 5.41912 10.4142 5.08333 10 5.08333V6.58333ZM5 7.58333C4.58579 7.58333 4.25 7.91912 4.25 8.33333C4.25 8.74755 4.58579 9.08333 5 9.08333V7.58333ZM5.83333 9.08333C6.24755 9.08333 6.58333 8.74755 6.58333 8.33333C6.58333 7.91912 6.24755 7.58333 5.83333 7.58333V9.08333ZM9.16667 7.58333C8.75245 7.58333 8.41667 7.91912 8.41667 8.33333C8.41667 8.74755 8.75245 9.08333 9.16667 9.08333V7.58333ZM10 9.08333C10.4142 9.08333 10.75 8.74755 10.75 8.33333C10.75 7.91912 10.4142 7.58333 10 7.58333V9.08333ZM5 10.0833C4.58579 10.0833 4.25 10.4191 4.25 10.8333C4.25 11.2475 4.58579 11.5833 5 11.5833V10.0833ZM5.83333 11.5833C6.24755 11.5833 6.58333 11.2475 6.58333 10.8333C6.58333 10.4191 6.24755 10.0833 5.83333 10.0833V11.5833ZM9.16667 10.0833C8.75245 10.0833 8.41667 10.4191 8.41667 10.8333C8.41667 11.2475 8.75245 11.5833 9.16667 11.5833V10.0833ZM10 11.5833C10.4142 11.5833 10.75 11.2475 10.75 10.8333C10.75 10.4191 10.4142 10.0833 10 10.0833V11.5833ZM9.16667 17.5V18.25H9.91667V17.5H9.16667ZM5.83333 17.5H5.08333V18.25H5.83333V17.5ZM15 8.41667C14.5858 8.41667 14.25 8.75245 14.25 9.16667C14.25 9.58088 14.5858 9.91667 15 9.91667V8.41667ZM15.0083 9.91667C15.4225 9.91667 15.7583 9.58088 15.7583 9.16667C15.7583 8.75245 15.4225 8.41667 15.0083 8.41667V9.91667ZM15 10.9167C14.5858 10.9167 14.25 11.2525 14.25 11.6667C14.25 12.0809 14.5858 12.4167 15 12.4167V10.9167ZM15.0083 12.4167C15.4225 12.4167 15.7583 12.0809 15.7583 11.6667C15.7583 11.2525 15.4225 10.9167 15.0083 10.9167V12.4167ZM15 13.4167C14.5858 13.4167 14.25 13.7525 14.25 14.1667C14.25 14.5809 14.5858 14.9167 15 14.9167V13.4167ZM15.0083 14.9167C15.4225 14.9167 15.7583 14.5809 15.7583 14.1667C15.7583 13.7525 15.4225 13.4167 15.0083 13.4167V14.9167ZM17.4092 6.28834L16.7409 6.62883L17.4092 6.28834ZM17.045 5.92416L16.7045 6.59242L17.045 5.92416ZM12.045 2.59083L11.7045 3.25908L12.045 2.59083ZM12.4092 2.95501L11.7409 3.2955V3.2955L12.4092 2.95501ZM2.59083 2.95501L3.25908 3.2955L2.59083 2.95501ZM2.95501 2.59083L3.2955 3.25908L2.95501 2.59083ZM1.75 3.83333V17.5H3.25V3.83333H1.75ZM3.83333 3.25H11.1667V1.75H3.83333V3.25ZM11.75 3.83333V5.83333H13.25V3.83333H11.75ZM11.75 5.83333V17.5H13.25V5.83333H11.75ZM2.5 18.25H12.5V16.75H2.5V18.25ZM12.5 18.25H17.5V16.75H12.5V18.25ZM16.75 7.16667V17.5H18.25V7.16667H16.75ZM12.5 6.58333H16.1667V5.08333H12.5V6.58333ZM5 6.58333H5.83333V5.08333H5V6.58333ZM9.16667 6.58333H10V5.08333H9.16667V6.58333ZM5 9.08333H5.83333V7.58333H5V9.08333ZM9.16667 9.08333H10V7.58333H9.16667V9.08333ZM5 11.5833H5.83333V10.0833H5V11.5833ZM9.16667 11.5833H10V10.0833H9.16667V11.5833ZM8.41667 15V17.5H9.91667V15H8.41667ZM9.16667 16.75H5.83333V18.25H9.16667V16.75ZM6.58333 17.5V15H5.08333V17.5H6.58333ZM7.5 14.0833C8.00626 14.0833 8.41667 14.4937 8.41667 15H9.91667C9.91667 13.6653 8.83469 12.5833 7.5 12.5833V14.0833ZM7.5 12.5833C6.16531 12.5833 5.08333 13.6653 5.08333 15H6.58333C6.58333 14.4937 6.99374 14.0833 7.5 14.0833V12.5833ZM15 9.91667H15.0083V8.41667H15V9.91667ZM15 12.4167H15.0083V10.9167H15V12.4167ZM15 14.9167H15.0083V13.4167H15V14.9167ZM18.25 7.16667C18.25 6.94569 18.2506 6.73485 18.2362 6.55826C18.221 6.37292 18.1857 6.16033 18.0774 5.94785L16.7409 6.62883C16.7235 6.59461 16.7336 6.58783 16.7411 6.68041C16.7494 6.78174 16.75 6.92094 16.75 7.16667H18.25ZM16.1667 6.58333C16.4124 6.58333 16.5516 6.58392 16.6529 6.5922C16.7455 6.59976 16.7387 6.60985 16.7045 6.59242L17.3855 5.25591C17.173 5.14764 16.9604 5.11232 16.7751 5.09718C16.5985 5.08275 16.3876 5.08333 16.1667 5.08333V6.58333ZM18.0774 5.94785C17.9256 5.64993 17.6834 5.40771 17.3855 5.25591L16.7045 6.59242C16.7202 6.60041 16.7329 6.61315 16.7409 6.62883L18.0774 5.94785ZM11.1667 3.25C11.4124 3.25 11.5516 3.25058 11.6529 3.25886C11.7455 3.26643 11.7387 3.27652 11.7045 3.25908L12.3855 1.92257C12.173 1.81431 11.9604 1.77899 11.7751 1.76384C11.5985 1.74942 11.3876 1.75 11.1667 1.75V3.25ZM13.25 3.83333C13.25 3.61235 13.2506 3.40151 13.2362 3.22493C13.221 3.03959 13.1857 2.827 13.0774 2.61451L11.7409 3.2955C11.7235 3.26128 11.7336 3.2545 11.7411 3.34708C11.7494 3.44841 11.75 3.5876 11.75 3.83333H13.25ZM11.7045 3.25908C11.7202 3.26707 11.7329 3.27982 11.7409 3.2955L13.0774 2.61451C12.9256 2.31659 12.6834 2.07437 12.3855 1.92257L11.7045 3.25908ZM3.25 3.83333C3.25 3.5876 3.25058 3.44841 3.25886 3.34708C3.26643 3.2545 3.27652 3.26128 3.25908 3.2955L1.92257 2.61451C1.81431 2.827 1.77899 3.03959 1.76384 3.22493C1.74942 3.40151 1.75 3.61235 1.75 3.83333H3.25ZM3.83333 1.75C3.61235 1.75 3.40151 1.74942 3.22493 1.76384C3.03959 1.77899 2.827 1.81431 2.61451 1.92257L3.2955 3.25908C3.26128 3.27652 3.2545 3.26643 3.34708 3.25886C3.44841 3.25058 3.5876 3.25 3.83333 3.25V1.75ZM3.25908 3.2955C3.26707 3.27982 3.27982 3.26707 3.2955 3.25908L2.61451 1.92257C2.31659 2.07437 2.07437 2.31659 1.92257 2.61451L3.25908 3.2955Z"
                              fill="#2678D9"
                            />
                          </svg>

                          {{ graduatorSliderSlug.faculty }}
                        </p>
                        <p v-if="graduatorSliderSlug.year">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 7.5H17.5M5.83333 2.5V4.16667M14.1667 2.5V4.16667M5 10.8333H6.66667M5 14.1667H6.66667M9.16667 10.8333H10.8333M9.16667 14.1667H10.8333M13.3333 10.8333H15M13.3333 14.1667H15M5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3183C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7668 17.5 14.8333V6.83333C17.5 5.89991 17.5 5.4332 17.3183 5.07668C17.1586 4.76308 16.9036 4.50811 16.59 4.34832C16.2335 4.16667 15.7668 4.16667 14.8333 4.16667H5.16667C4.23325 4.16667 3.76654 4.16667 3.41002 4.34832C3.09641 4.50811 2.84144 4.76308 2.68166 5.07668C2.5 5.4332 2.5 5.89991 2.5 6.83333V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z"
                              stroke="#2678D9"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>

                          {{ graduatorSliderSlug.year }} {{ $t('year') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <b-tabs class="tabs">
              <b-tab
                v-if="graduatorSliderSlug.bio"
                :title="$t('biography')"
                active
              >
                <div class="single-content">
                  <div
                    class="d-flex align-md-items-center"
                    style="gap: 12px; margin-bottom: 20px"
                  >
                    <img
                      src="@/static/image/about-tsue/mission-logo.svg"
                      alt="Image"
                    />
                    <h5>
                      {{ $t('biography') }}
                    </h5>
                  </div>

                  <div v-html="graduatorSliderSlug.bio"></div>
                </div>
              </b-tab>
              <b-tab v-if="graduatorSliderSlug.tasks" :title="$t('functions')">
                <div class="single-content">
                  <div
                    class="d-flex align-md-items-center"
                    style="gap: 12px; margin-bottom: 20px"
                  >
                    <img
                      src="@/static/image/about-tsue/mission-logo.svg"
                      alt="Image"
                    />
                    <h5>
                      {{ $t('functions') }}
                    </h5>
                  </div>

                  <div v-html="graduatorSliderSlug.tasks"></div>
                </div>
              </b-tab>
              <b-tab v-if="photo.length" :title="$t('photo_gallery')">
                <div class="single-content">
                  <div
                    class="d-flex align-md-items-center"
                    style="gap: 12px; margin-bottom: 20px"
                  >
                    <img
                      src="@/static/image/about-tsue/mission-logo.svg"
                      alt="Image"
                    />
                    <h5>
                      {{ $t('photo_gallery') }}
                    </h5>
                  </div>
                  <div class="gallery">
                    <img
                      v-for="(image, imageIndex) in photo"
                      :key="imageIndex"
                      :src="image.image_url"
                      alt="Image"
                      @click="index = imageIndex"
                    />
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
    <CoolLightBox :items="lightBoxPhoto" :index="index" @close="index = null">
    </CoolLightBox>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'
import sideNav from '~/components/sideNav'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    sideNav,
    BreadCrumbs,
    CoolLightBox,
  },
  data() {
    return {
      pics: 12,
      index: null,
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('popular_graduators'),
          link: `/${this.$i18n.locale}/university/graduators`,
        },
        {
          title: this.graduatorSliderSlug?.title,
          link: `${this.$i18n.locale}`,
        },
      ]
    },

    ...mapState({
      graduatorSliderSlug: (state) => state.graduators.graduatorSliderSlug,
      photo: (state) => state.graduators.photo,
      lightBoxPhoto: (state) =>
        state.graduators.photo?.map((el) => el?.image_url),
    }),
  },

  async fetch() {
    await this.$store
      .dispatch('graduators/fetchGraduatorSliderSlug', this.$route.params.slug)
      .catch(() => {}),
      await this.$store
        .dispatch('graduators/fetchPhoto', this.$route.params.slug)
        .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.graduatorsCards {
  padding: 0 24px 24px 24px;
  border-radius: 12px;
  border: 1px solid #e9edf2;
  background: #fff;
  box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);
  margin-bottom: 24px;

  h6 {
    color: #1d2024;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 128%;
  }

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: #768194;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-top: 8px;
  }

  .line {
    margin-top: 20px;
  }
}
.alumni__link {
  display: flex;
  padding: 15px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: #f6f8fb;
}
.img-graduators {
  max-width: 176px;
  max-height: 217px;
  width: 176px;
  height: 217px;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
}
.alumni__img {
  border-radius: 12px;
  border: 1px solid #e8edf2;
  background: #e8edf2;
  margin-top: -28px;
}
h1 {
  margin-top: 24px;
  margin-bottom: 52px;
}
.alumni__row {
  gap: 28px;
}
.content {
  margin-top: 28px;
}
.single-content {
  border-radius: 12px;
  background: white;
  padding: 24px;
}
h5 {
  color: #144176;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 14px;
  grid-row-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  & img {
    width: 198px;
    height: 136px;
    object-fit: cover;
    cursor: pointer;
  }
}
</style>
