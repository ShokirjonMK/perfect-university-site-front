<template>
  <div class="main_intro">
    <IntroAdmission v-if="main.is_active" v-bind="{ slider }" />
    <!-- <IntroSlider v-if="main.is_active" v-bind="{ slider }" /> -->
    <div v-else class="container intro">
      <div class="intro__item">
        <h3 class="intro__title">{{ $t('perfect_university') }}</h3>
        <p class="intro__description">{{ $t('intro_description') }}</p>
        <div class="d-flex align-items-center">
          <ButtonMore
            variant="secondary"
            title="more_about"
            @click="$router.push(localePath('/about-perfect'))"
          />
          <button
            v-for="(item, indexVideo) in singleVideo"
            :key="indexVideo"
            class="ml-4 outline-secondary"
            title="video"
            @click="index = indexVideo"
          >
            Video
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M12.4937 6.96473C13.5735 7.6396 14.1134 7.97704 14.2985 8.40906C14.4602 8.78637 14.4602 9.21347 14.2985 9.59078C14.1134 10.0228 13.5735 10.3602 12.4937 11.0351L7.422 14.2049C6.22354 14.954 5.62431 15.3285 5.1298 15.2887C4.69876 15.2541 4.30364 15.0351 4.0458 14.6879C3.75 14.2897 3.75 13.583 3.75 12.1697V5.83012C3.75 4.41683 3.75 3.71019 4.0458 3.31192C4.30364 2.96476 4.69876 2.74577 5.1298 2.71112C5.62431 2.67136 6.22354 3.04588 7.422 3.79492L12.4937 6.96473Z"
                stroke="#1C89C1"
                stroke-width="1.6"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <img src="/img/perfect.webp" alt="Perfect" />
    </div>
    <div style="margin-bottom: 34px; z-index: 1" class="position-relative">
      <marqueAcademeicyear2 class="marqueStyle2" />
      <marqueAcademeicyear1 class="marqueStyle" />
      <!--       -->
    </div>
    <ApplyDialog
      :show="showDialog"
      @confirm="handleConfirm"
      @close="showDialog = false"
    />
    <CoolLightBox
      v-if="singleVideo && singleVideo.length"
      :items="singleVideo"
      :index="index"
      @close="index = null"
    >
    </CoolLightBox>
  </div>
</template>
<script>
import CoolLightBox from 'vue-cool-lightbox'
import { mapState } from 'vuex'
import ButtonMore from '../../Button/ButtonMore.vue'
import marqueAcademeicyear1 from '../../marqueAcademicYear1.vue'
import marqueAcademeicyear2 from '../../marqueAcademicYear2.vue'
import IntroSlider from '~/components/Intro/IntroSlider.vue'
import IntroAdmission from '~/components/IntroAdmission'

export default {
  name: 'MainIntro',
  components: {
    marqueAcademeicyear1,
    marqueAcademeicyear2,
    ButtonMore,
    CoolLightBox,
    IntroSlider,
    IntroAdmission,
  },
  props: {
    main: {
      type: Object,
      default: () => ({}),
    },
  },
  async fetch() {
    await this.$store.dispatch('main/fetchMain')
    if (this.main.is_active) {
      await this.$store.dispatch('main/fetchSlider')
    }
    this.singleVideo.push(
      `https://www.youtube.com/embed/${this.toEmbed(this.main.video_url)}`
    )
  },
  data() {
    return {
      showDialog: false,
      index: null,
      singleVideo: [],
    }
  },
  computed: {
    ...mapState({
      main: (state) => state.main.main,
      slider: (state) => state.main.slider,
    }),
  },
  methods: {
    handleConfirm(e) {
      if (e === 'international') {
        this.$router.push(this.localePath('/apply/application'))
      }
      this.showDialog = false
    },
    toEmbed(url) {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      if (match && match[2].length === 11) {
        return match[2]
      } else {
        return 'error'
      }
    },
  },
}
</script>

<style scoped>
.intro__item {
  max-width: 480px;
  width: 100%;
}

@media only screen and(max-width: 768px) {
  .intro {
    padding-bottom: 100px !important;
  }
}
</style>

<style>
.marqueStyle {
  transform: rotate(-0.402deg);
  margin-top: -40px;
  @media (max-width: 576px) {
    transform: rotate(-5deg) !important;
    width: 700px !important;
    margin-left: -40px !important;
  }
}
.marqueStyle2 {
  transform: rotate(3deg);
  @media (max-width: 576px) {
    transform: rotate(5deg) !important;
    width: 700px !important;
    margin-left: -40px !important;
  }
}

.outline-secondary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 41px;
  border-radius: 8px;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  background: rgba(28, 137, 193, 0.16);
  border: 1px solid transparent;
  color: #1c89c1;

  transition: all 0.3s linear;
}
.main_intro {
  background: white !important;
  margin-top: -28px;
  height: calc(100vh - 191px);
  min-height: 600px;
}
</style>
