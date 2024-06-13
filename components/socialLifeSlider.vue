<template>
  <div>
    <VueSlickCarousel
      ref="c1"
      class="mb-3"
      v-bind="settings"
      :as-nav-for="c2"
      :focus-on-select="true"
    >
      <div>
        <img src="@/static/image/teams1.png" alt="team image" />
      </div>
      <div>
        <img src="@/static/image/teams2.png" alt="team image" />
      </div>
      <div>
        <img src="@/static/image/social.png" alt="team image" />
      </div>
      <div>
        <img src="@/static/image/teams4.png" alt="team image" />
      </div>

      <div>
        <img src="@/static/image/teams5.png" alt="team image" />
      </div>
      <div>
        <img src="@/static/image/teams3.png" alt="team image" />
      </div>
    </VueSlickCarousel>

    <div style="position: relative">
      <svg
        class="right"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="showPrev()"
      >
        <g filter="url(#filter0_d)">
          <rect
            width="28"
            height="28"
            rx="14"
            transform="matrix(-1 0 0 1 34 6)"
            fill="white"
          />
          <path
            d="M21.3838 25.3334L16.0505 20L21.3838 14.6667"
            stroke="#787F86"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="40"
            height="40"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
    <VueSlickCarousel
      ref="c2"
      class="navigation"
      v-bind="settings2"
      :as-nav-for="c1"
      :slides-to-show="5"
      :focus-on-select="true"
    >
      <div class="inner">
        <img src="@/static/image/teams1-mini.png" alt="team image" />
      </div>
      <div class="inner">
        <img src="@/static/image/teams2-mini.png" alt="team image" />
      </div>
      <div class="inner">
        <img src="@/static/image/social-mini.png" alt="team image" />
      </div>
      <div class="inner">
        <img src="@/static/image/teams4-mini.png" alt="team image" />
      </div>
      <div class="inner">
        <img src="@/static/image/teams5-mini.png" alt="team image" />
      </div>

      <div class="inner">
        <img src="@/static/image/teams3-mini.png" alt="team image" />
      </div>
    </VueSlickCarousel>
    <div style="position: relative">
      <svg
        width="40"
        class="left"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="showNext()"
      >
        <g filter="url(#filter0_d)">
          <rect x="6" y="6" width="28" height="28" rx="14" fill="white" />
          <path
            d="M18.667 25.3334L24.0003 20L18.667 14.6667"
            stroke="#787F86"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="40"
            height="40"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialLifeSlider',

  data() {
    return {
      c1: undefined,
      c2: undefined,
      settings: {
        arrows: false,
      },

      settings2: {
        arrows: false,
        centerMode: true,
      },
    }
  },

  mounted() {
    if (this.$refs.c1 && this.$refs.c2) {
      this.c1 = this.$refs.c1
      this.c2 = this.$refs.c2
    }
  },

  methods: {
    showNext() {
      this.$refs.c2.next()
    },
    showPrev() {
      this.$refs.c2.prev()
    },
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  .slick-slide {
    img {
      opacity: 0.5;
      transition: 0.3s all;
    }
  }

  .slick-current {
    img {
      opacity: 1;
    }
  }

  .inner {
    padding: 0px 7.5px 0px 7.5px;
  }
}

.right {
  position: absolute;
  z-index: 1;
  top: 19px;
  left: -14px;
}

.left {
  right: -17px;
  position: absolute;
  top: -65px;
}
</style>
