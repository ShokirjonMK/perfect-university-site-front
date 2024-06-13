<template>
  <div class="video-card">
    <CoolLightBox
      v-if="singleVideo && singleVideo.length"
      :items="singleVideo"
      :index="index"
      @close="index = null"
    />

    <div class="position-relative">
      <img
        class="video-card-preview"
        :src="videos?.thumbnail || '/image/Students/default-bg.svg'"
        alt="video-card-preview"
      />
      <div class="video-card-overlay">
        <button
          v-for="(item, indexVideo) in singleVideo"
          :key="indexVideo"
          class="animation-play play-btn hover-effect"
          @click="index = indexVideo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.8812 7.7382C15.081 8.48807 15.6809 8.863 15.8866 9.34302C16.0663 9.76226 16.0663 10.2368 15.8866 10.656C15.6809 11.1361 15.081 11.511 13.8812 12.2609L8.24601 15.7829C6.91439 16.6151 6.24858 17.0313 5.69913 16.9871C5.22019 16.9486 4.78117 16.7053 4.49468 16.3195C4.16602 15.877 4.16602 15.0919 4.16602 13.5215V6.47753C4.16602 4.90721 4.16602 4.12206 4.49468 3.67953C4.78117 3.2938 5.22019 3.05048 5.69913 3.01197C6.24858 2.9678 6.91439 3.38393 8.24601 4.2162L13.8812 7.7382Z"
              fill="#1C89C1"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="position-relative video-card-body">
      <div class="left-badge" />
      <p class="video-card-title">{{ videos?.title || title }}</p>
      <div class="d-flex align-items-center video-card-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M2 6.66667H14M4.66667 2V3.33333M11.3333 2V3.33333M4.13333 14H11.8667C12.6134 14 12.9868 14 13.272 13.8547C13.5229 13.7268 13.7268 13.5229 13.8547 13.272C14 12.9868 14 12.6134 14 11.8667V5.46667C14 4.71993 14 4.34656 13.8547 4.06135C13.7268 3.81046 13.5229 3.60649 13.272 3.47866C12.9868 3.33333 12.6134 3.33333 11.8667 3.33333H4.13333C3.3866 3.33333 3.01323 3.33333 2.72801 3.47866C2.47713 3.60649 2.27316 3.81046 2.14532 4.06135C2 4.34656 2 4.71993 2 5.46667V11.8667C2 12.6134 2 12.9868 2.14532 13.272C2.27316 13.5229 2.47713 13.7268 2.72801 13.8547C3.01323 14 3.3866 14 4.13333 14Z"
            stroke="#768194"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="video-card-date ml-1">
          {{
            $moment(videos?.created_at || updatedAt)
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
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
export default {
  name: 'ResourcesVideo',
  components: { CoolLightBox },
  props: {
    title: String,
    updatedAt: String,
    url: String,
    modalShow: false,
    file: {
      type: Object,
      default: () => ({}),
    },
    videos: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      index: null,
      singleVideo: [],
    }
  },
  mounted() {
    this.singleVideo = [
      {
        src:
          this.videos?.video_url ||
          this.url ||
          this.file.file ||
          this.videos?.video,
        title: this.videos?.title || this.title,
        autoplay: true,
      },
    ]
  },
}
</script>

<style lang="scss" scoped>
.video-card {
  border-radius: 12px;
  border: 1px solid #f6f8fb;
  background: #fff;
  box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);
  width: 100% !important;

  &-preview {
    border-radius: 0;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    height: 149px;
    width: 100%;
  }

  &-body {
    padding: 16px 12px 16px 16px;
  }

  &-title {
    color: #1d2024;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 130%;
    height: 36px;
    max-height: 36px;
    overflow: hidden;
  }

  &-bottom {
    margin-top: 20px;
  }

  &-date {
    color: #768194;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: normal;
  }

  &-overlay {
    border-radius: 12px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(20, 65, 118, 0.6);
  }
}

.play-btn {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #fff;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* pulse wave */
.play-btn:before {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate1 2s;
  animation: pulsate1 2s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 2px solid #fff;
  top: -25%;
  left: -25%;
  background: rgba(198, 16, 0, 0);
}

@-webkit-keyframes pulsate1 {
  0% {
    -webkit-transform: scale(0.7);
    transform: scale(0.8);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
      0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }

  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    opacity: 0;
    box-shadow: none;
  }
}

@keyframes pulsate1 {
  0% {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
      0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }

  100% {
    -webkit-transform: scale(1.1, 1.1);
    transform: scale(1.1);
    opacity: 0;
    box-shadow: none;
  }
}
</style>
