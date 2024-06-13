<template>
  <div style="position: relative">
    <VueSlickCarousel
      v-if="images && images.length"
      ref="c1"
      class="mb-3"
      v-bind="settings"
      :as-nav-for="c2"
      :focus-on-select="true"
    >
      <div v-for="(item, index) in images" :key="index" class="item">
        <img
          v-if="item?.image_url || item.image"
          :src="item.image_url || item.image"
          alt="image"
        />
      </div>
    </VueSlickCarousel>

    <svg
      v-if="images && images.length > 6"
      class="left"
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

    <VueSlickCarousel
      ref="c2"
      class="navigation"
      v-bind="settings2"
      :as-nav-for="c1"
      :slides-to-show="5"
      :focus-on-select="true"
    >
      <div v-for="(item, index) in images" :key="index" class="inner">
        <img
          v-if="item?.image_url || item.image"
          :src="item.image_url || item.image"
          alt="image"
        />
      </div>
    </VueSlickCarousel>

    <svg
      v-if="images && images.length > 6"
      width="40"
      class="right"
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
</template>

<script>
export default {
  name: 'DormSlider',
  props: ['images'],

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

<style scoped lang="scss">
.navigation {
  .slick-slide {
    img {
      transition: 0.3s all;
      border-radius: 8px !important;
      opacity: 0.4;
      background: #1c89c1;
    }
  }

  .slick-current {
    img {
      border: 2px solid #1c89c1 !important;
      opacity: 1;
    }
  }

  .inner {
    padding: 0 7.5px 0 7.5px;
  }
}

svg {
  transition: all 0.3s;
}
.right {
  right: -15px;
  position: absolute;
  bottom: 32px;
  z-index: 3;
  cursor: pointer;
  &:hover {
    rect {
      fill: #024da5;
    }
    path {
      stroke: #fff;
    }
  }
}

.left {
  left: -15px;
  position: absolute;
  bottom: 32px;
  z-index: 3;
  cursor: pointer;
  &:hover {
    rect {
      fill: #024da5;
    }
    path {
      stroke: #fff;
    }
  }
}

.slick-slider {
  position: relative;
  .item {
    width: 100%;
    height: 464px;

    @media only screen and (max-width: 768px) {
      height: 100%;
    }
    img {
      width: 100%;
      object-fit: contain;
      border-radius: 8px;
    }
  }

  .inner {
    height: 80px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

<style>
.inner {
  margin-top: 10px !important;
}
.navigation .slick-list {
  height: 103px !important;
}
.slick-track {
  @media screen and (max-width: 768px) {
    margin: 0 !important;
    width: max-content !important;
  }
}
.navigation .slick-slide {
  @media screen and (max-width: 768px) {
    width: 80px !important;
  }
}
</style>
