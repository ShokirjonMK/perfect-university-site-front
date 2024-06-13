<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <NewSectionsMainIntro :main="main" />
      <NewSectionsNewsEvents v-bind="{ news, event }" />
      <OurMission />
      <MainNews v-if="false" :data="newsPage" />
      <!--      <main-slider />-->
      <statistics />
    </div>
    <InteractiveService v-if="services.length" :data="services" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'

import { email, required, minLength, maxLength } from 'vuelidate/lib/validators'
import NoData from '../components/NoData.vue'
import InteractiveService from '../components/InteractiveService/interactiveService.vue'
import MainNews from '../components/MainNews/mainNews.vue'
import statistics from '~/components/sections/statistics'
import sliderPartners from '~/components/sections/sliderPartners'
import catalogDownload from '~/components/sections/catalogDownload'
import loader from '~/components/loader'
import OurMission from '@/components/New/Sections/OurMission.vue'

export default {
  components: {
    MainNews,
    InteractiveService,
    statistics,
    sliderPartners,
    catalogDownload,
    CoolLightBox,
    loader,
    NoData,
    OurMission,
  },

  data() {
    return {
      index: null,
      activeCategory: null,
      form: {
        name: '',
        surname: '',
        mail: '',
        file: '',
        phone: '',
        message: '',
      },
    }
  },

  validations: {
    form: {
      name: { required, minLength: minLength(3), maxLength: maxLength(20) },
      surname: { required, minLength: minLength(3), maxLength: maxLength(20) },
      mail: { email },
      file: {},
      phone: { required },
      message: { required, minLength: minLength(3), maxLength: maxLength(200) },
    },
  },

  methods: {
    async fetchNewsCategory(category) {
      await this.$store.dispatch('newsPage/fetchNews', {
        category,
        page: this.page,
        hashtag: '',
      })
    },
    async submitModal() {
      this.$v.form.$touch()
      if (!this.$v.form.$anyError) {
        const newData = new FormData()
        newData.append('name', this.form.name)
        newData.append('surname', this.form.surname)
        newData.append('email', this.form.mail)
        newData.append('file', this.form.file)
        newData.append('phone_number', `${this.form.phone.replaceAll(' ', '')}`)
        newData.append('application_text', this.form.message)
        await this.$axios
          .post('application/', newData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            this.$toast.success(this.$t('success_message'))
            this.$v.$reset()
            this.$bvModal.hide('bv-modal-example')
            ;(this.form.name = ''),
              (this.form.surname = ''),
              (this.form.mail = ''),
              (this.form.file = ''),
              (this.form.phone = ''),
              (this.form.message = '')
          })
          .catch((err) => {
            this.$toast.error(this.$t('error_message'))
            console.log(err)
          })
      }
    },
    readURL(event) {
      this.form.file = event.target.files[0]
    },
    isValidUrl(str) {
      const pattern = new RegExp(
        '^([a-zA-Z]+:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
      )
      return pattern.test(str)
    },
  },

  computed: {
    ...mapState({
      main: (state) => state.main,
      announcement: (state) => state.announcement,
      news: (state) => state.newsPage.newsPage,
      services: (state) => state.services.services,
      vebinars: (state) => state.vebinars.vebinars,
      faculty: (state) => state.faculty.faculty,
      topextra: (state) => state.topextra.topextra,
      event: (state) => state.event.event,
      newsCategories: (state) => state.news.newsCategories,
      videos: (state) => state.videos.videos,
      newsPage: (state) => state.newsPage.newsPage,
    }),
  },

  async fetch() {
    await this.$store.dispatch('announcement/fetchAnnouncement')
    await this.$store.dispatch('announcement/fetchAnnouncement')
    await this.$store.dispatch('newsPage/fetchNews', {
      category: 'yangiliklar',
      page: this.page,
      hashtag: '',
    })

    await this.$store.dispatch('services/fetchServices')
    await this.$store.dispatch('vebinars/fetchVebinars')
    await this.$store.dispatch('faculty/fetchFaculty')
    await this.$store.dispatch('topextra/fetchTopextra')
    await this.$store.dispatch('event/fetchEvent')
    await this.$store.dispatch('news/fetchNewsCategories')
    await this.$store.dispatch('videos/fetchVideos', { page: 1 })

    await this.$store.dispatch('newsPage/fetchNewsPage', 1)
  },
}
</script>

<style lang="scss" scoped>
.img-fluid {
  max-height: 650px;
}

.interactive-cards {
  transition: 0.3s ease-in-out;
  .single-content {
    color: rgba(255, 255, 255, 0.5);
  }

  .hover {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: 0.3s all;
  }

  .not_hover {
    transition: 0.3s all;
    margin-right: 20px;
  }
}

.interactive-cards:hover {
  //  .not_hover {
  //   opacity: 0;
  // }
  .single-content {
    color: white;
  }

  //  .hover {
  //    opacity: 1;
  //  }
}

.slider-partners {
  padding-bottom: 133px;
}

.cloud {
  /*height:500px;*/
  width: 845px;
  margin: 0 auto;
  position: absolute;
  top: 0;
}

.cloud > div {
  position: absolute;
  width: 230px;
  height: 164px;

  background-size: contain !important;
  background-repeat: no-repeat !important;
}

.cloud > div:nth-child(1) {
  background: url('~/static/image/bulut2.svg');
  left: 11%;
  top: 20px;
  z-index: -1;
  -webkit-animation: cloud2 6s ease-in-out infinite;
  -moz-animation: cloud2 6s ease-in-out infinite;
  -o-animation: cloud2 6s ease-in-out infinite;
  animation: cloud2 6s ease-in-out infinite;
}

.cloud > div:nth-child(2) {
  background-image: url('~/static/image/bulut1.svg');
  right: 32%;
  width: 15%;
  top: 150px;

  -webkit-animation: cloud2 6s ease-in-out infinite;
  -moz-animation: cloud2 6s ease-in-out infinite;
  -o-animation: cloud2 6s ease-in-out infinite;
  animation: cloud2 6s ease-in-out infinite;
}

/*cloud 1 4*/
@-webkit-keyframes cloud1 {
  0%,
  100% {
    -webkit-transform: translateY(0) rotate(-6deg);
  }
  50% {
    -webkit-transform: translateY(-20px) rotate(8deg);
  }
}

/* cloud 2 5*/
@-webkit-keyframes cloud2 {
  0%,
  100% {
    -webkit-transform: translateY(3px) translateX(10px) rotate(1deg);
  }
  50% {
    -webkit-transform: translateY(-3px) translateX(-10px) rotate(-1deg);
  }
}

@-moz-keyframes cloud2 {
  0%,
  100% {
    -moz-transform: translateY(0) rotate(6deg);
  }
  50% {
    -moz-transform: translateY(-30px) rotate(-8deg);
  }
}

@-o-keyframes cloud2 {
  0%,
  100% {
    -o-transform: translateY(0) rotate(6deg);
  }
  50% {
    -o-transform: translateY(-30px) rotate(-8deg);
  }
}

.mt-12 {
  margin-top: 12px;
}

/* cloud 0*/
</style>

<style lang="scss">
.card-text {
  //display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.news-index__tabs {
  border: none !important;

  .card {
    border: none !important;
  }

  .card-header {
    border-bottom: 0 !important;
    background: none !important;
    display: flex !important;
    justify-content: flex-start !important;
  }
  .card-header-tabs {
    position: relative !important;
    width: auto;
    overflow-x: scroll;
    touch-action: pan-y;
    cursor: pointer;
    height: 61px;
    //justify-content: right !important;
    &::-webkit-scrollbar {
      height: 7px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #0c458b;
      border-radius: 5px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #00316b;
    }
  }

  @media screen and (max-width: 768px) {
    .news-index-title {
      position: relative;
    }
  }

  .nav-item {
    flex-shrink: 0;
  }

  .nav-link {
    display: flex;
    flex-direction: row !important;
    align-items: flex-start !important;
    padding: 12px 20px !important;
    gap: 10px !important;
    padding: 12px 20px !important;
    background: #ffffff !important;
    border: 1px solid #e6e8ec !important;
    border-radius: 99px !important;
    color: #9fabb9 !important;
    margin-left: 16px;
  }

  .nav-link.active {
    background: #00316b !important;
    color: #ffffff !important;
  }
}
</style>

<style lang="scss">
.home__banner {
  width: 100%;
  min-height: 554px;
  background-image: url('../static/image/banner-bg.jpg');
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    min-height: 430px;
  }

  &-linear {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(23, 38, 61, 0.8);

    .container {
      height: 100%;
    }
  }

  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 26px;
    }

    div {
      @media screen and (max-width: 580px) {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        align-items: center;
        justify-content: center;
      }
    }
  }

  &-title {
    max-width: 790px;
    font-style: normal;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 130%;
    color: #ffffff;
    text-align: center;
    margin-bottom: 28px;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  &-link {
    display: inline-block;
    padding: 10px 32px;
    background: #024da5;
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    color: white;

    &:hover {
      background-color: white !important;
      color: #263c55 !important;
    }
  }
}
.light {
  background-color: white !important;
  color: #263c55 !important;
  margin-left: 24px;

  @media screen and (max-width: 580px) {
    margin-left: 0px;
  }

  &:hover {
    background-color: #024da5 !important;
    color: white !important;
  }
}
</style>
