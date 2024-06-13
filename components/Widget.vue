<template>
  <div class="widget-outer">
    <div v-if="isWidgetOpen" class="widget">
      <div class="widget__overlay" @click="isWidgetOpen = false"></div>
      <div class="widget__window">
        <div class="row">
          <div class="col-md-8">
            <div class="special-box">
              <button
                :class="{ active: settings.mode == 'with-color' }"
                @click="settings.mode = 'with-color'"
              >
                <span>{{ $t('colorful') }}</span>
                <img
                  src="@/static/image/colored.jpg"
                  class="img-fluid"
                  alt="Colored img-fluid"
                />
              </button>
              <button @click="settings.mode = 'contrast'">
                <span>{{ $t('contrast') }}</span>
                <img
                  src="@/static/image/contrast.jpg"
                  class="img-fluid"
                  alt="Contrast img"
                />
              </button>
              <button @click="settings.mode = 'without-color'">
                <span>{{ $t('without_color') }}</span>
                <img
                  src="@/static/image/uncolored.jpg"
                  class="img-fluid"
                  alt="uncolored image"
                />
              </button>
              <button @click="settings.mode = 'invert-color'">
                <span>{{ $t('invert') }}</span>
                <img
                  src="@/static/image/invert.jpg"
                  class="img-fluid"
                  alt="Invert image"
                />
              </button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="checkboxes d-flex">
              <form class="">
                <input
                  id="no_pic"
                  v-model="settings.noImage"
                  type="checkbox"
                  name="fruit-1"
                  value="no_pic"
                />
                <label for="no_pic">{{ $t('without_image') }}</label>

                <input
                  id="screen_teller"
                  v-model="settings.reader"
                  type="checkbox"
                  name="fruit-2"
                  value="screen_teller"
                />
                <label for="screen_teller">{{ $t('sreen_reader') }}</label>
              </form>
            </div>
            <div class="special-box__col">
              <div class="special-box__range">
                <div class="small">Aa</div>
                <input
                  v-model="settings.fontSize"
                  type="range"
                  class="range"
                  min="10"
                  value="16"
                  max="22"
                />
                <div class="range-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="big">Aa</div>
              </div>
            </div>
          </div>
          <button class="special-box__close" @click="backToDefault()">
            {{ $t('asl_holi') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpenOnInit: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    settings: {
      mode: 'with-color',
      fontSize: 16,
      noImage: false,
      reader: false,
    },
    isWidgetOpen: false,
  }),
  watch: {
    $route(to, from) {
      if (this.settings.noImage) {
        this.settings.noImage = false
        this.applyImageStyles()
      }
    },
    isOpenOnInit(val) {
      this.isWidgetOpen = val
    },
    isWidgetOpen(val) {
      this.$emit('onWidgetChange', val)
    },
    settings: {
      deep: true,
      handler() {
        localStorage.setItem('specialSettings', JSON.stringify(this.settings))
        const nuxt = document.getElementById('__nuxt')
        if (nuxt) {
          if (this.settings.mode === 'without-color') {
            nuxt.classList.add('blackAndWhite')
            nuxt.classList.remove('blackAndWhiteInvert')
            nuxt.classList.remove('contrast')
          } else if (this.settings.mode === 'contrast') {
            nuxt.classList.add('contrast')
            nuxt.classList.remove('blackAndWhite')
            nuxt.classList.remove('blackAndWhiteInvert')
          } else if (this.settings.mode === 'invert-color') {
            nuxt.classList.add('blackAndWhiteInvert')
            nuxt.classList.remove('blackAndWhite')
            nuxt.classList.remove('contrast')
          } else {
            nuxt.classList.remove('blackAndWhite')
            nuxt.classList.remove('blackAndWhiteInvert')
            nuxt.classList.remove('contrast')
          }

          document
            .querySelectorAll('img')
            .forEach((imageItem) =>
              imageItem.style.setProperty(
                'display',
                this.settings.noImage ? 'none' : '',
                'important'
              )
            )
          document
            .querySelector('html')
            .style.setProperty(
              'font-size',
              `${this.settings.fontSize}px`,
              'important'
            )
          if (this.settings.reader) {
            document.addEventListener('mouseup', this.speech)
          } else {
            document.removeEventListener('mouseup', this.speech)
          }
        }
      },
    },
  },
  created() {
    this.isWidgetOpen = this.isOpenOnInit
  },
  mounted() {
    this.settings = JSON.parse(localStorage.getItem('specialSettings')) || {
      mode: 'with-color',
      fontSize: 16,
      noImage: false,
      reader: false,
    }

    const nuxt = document.getElementById('__nuxt')
    if (nuxt) {
      if (this.settings.mode === 'without-color') {
        nuxt.classList.add('blackAndWhite')
      } else if (this.settings.mode === 'invert-color') {
        nuxt.classList.add('blackAndWhiteInvert')
      }

      document
        .querySelectorAll('img')
        .forEach((imageItem) =>
          imageItem.style.setProperty(
            'display',
            this.settings.noImage ? 'none' : '',
            'important'
          )
        )

      document
        .querySelector('html')
        .style.setProperty(
          'font-size',
          `${this.settings.fontSize}px`,
          'important'
        )
      if (this.settings.reader) {
        document.addEventListener('mouseup', this.speech)
      }
    }
  },
  methods: {
    getSelectionText() {
      let text = ''
      if (window.getSelection) {
        text = window.getSelection().toString()
      } else if (document.selection && document.selection.type !== 'Control') {
        text = document.selection.createRange().text
      }
      return text
    },
    speech() {
      const _this = this
      setTimeout(function () {
        if (window.responsiveVoice) {
          window.responsiveVoice.cancel()
          window.responsiveVoice.speak(
            _this.getSelectionText(),
            'Russian Female'
          )
        }
      }, 1)
    },
    backToDefault() {
      this.settings.mode = 'with-color'
      this.settings.fontSize = 16
      this.settings.reader = false
      this.settings.noImage = false
    },
  },
}
</script>

<style lang="scss" scoped>
.widget-outer {
  position: relative;
  z-index: 20;
  left: 0;
  right: 0;
}

.widget {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  bottom: 0;

  &__window {
    position: relative;
    z-index: 7;
  }
}

.special-box {
  display: flex;
  align-items: stretch;
  position: relative;
  justify-content: space-between;
  min-height: 92px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 8px;
    transition: 0.4s all;
    background: rgba(255, 255, 255, 0);
    width: 25%;
    cursor: pointer;
    position: relative;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border: 1px solid #e0e5ec;
      border-radius: 0;
    }

    span {
      background: #e0e5ec;
      padding: 5px 15px;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 2;

      @media screen and (max-width: 768px) {
        font-size: 10px !important;
      }
    }

    &:focus,
    &.active {
      outline: none;
      background: rgba(255, 255, 255, 0.2);
    }

    &.without-color {
      background-image: url('/images/color-bg/static_images_color-bg_without-color.png');
      background-color: #5b5b5b;

      span {
        color: #404040;
      }
    }

    &.invert-color {
      background-image: url('/images/color-bg/static_images_color-bg_invert-color.png');
      background-color: #080808;

      span {
        color: #fff;
        background-color: #000;
      }
    }
  }

  &__close {
    position: absolute;
    top: calc(100% + -98px);
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white !important;
    padding: 12px;
    font-size: 0.688rem;
    color: #333;
    font-weight: bold;
    border-radius: 4px;
    transition: all 0.3s;

    &:hover {
      background-color: #e1e3e6 !important;
    }
    &:focus {
      outline: none;
      opacity: 1;
      cursor: pointer;
    }
  }

  &__col {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  &__checkboxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    label {
      line-height: 1.2;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .heading {
    line-height: 1.2;
    margin-bottom: 10px;
  }

  &__range {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(120, 120, 128, 0.2);
    border-bottom: 1px solid rgba(120, 120, 128, 0.2);

    .range {
      margin: 0 10px;
    }
  }

  .small {
    color: #8c8c8c;
    line-height: 1.2;
    font-size: 0.625rem;
    font-weight: bold;
  }

  .big {
    color: #8c8c8c;
    font-weight: bold;
    line-height: 1.2;
    font-size: 1.375rem;
  }
}

.range {
  $moonstone: #d8dfe6;
  $frost: #7d9aa7;
  $thumb-size: 20px;
  $track-size: calc(#{$thumb-size} / 4);

  appearance: none;
  width: 100%;
  margin: 0;
  outline: none;
  border: none;

  & > * {
    outline: none;
  }

  &:focus {
    outline: none;
    border: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: $track-size;
    cursor: pointer;
    background-color: $moonstone;
    border-radius: calc(#{$track-size} / 2);
  }

  &::-webkit-slider-thumb {
    box-shadow: 0px 2.096px 5.58933px rgba(0, 0, 0, 0.15),
      0px 0.698667px 0.698667px rgba(0, 0, 0, 0.16),
      0px 2.096px 0.698667px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    height: $thumb-size;
    width: $thumb-size;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: calc((#{$thumb-size} / 2) + (#{$track-size} / 2));
  }

  &::-moz-range-track {
    width: 100%;
    height: $track-size;
    cursor: pointer;
    background-color: $moonstone;
    border-radius: calc(#{$track-size} / 2);
  }

  &::-moz-range-thumb {
    box-shadow: 0px 2.096px 5.58933px rgba(0, 0, 0, 0.15),
      0px 0.698667px 0.698667px rgba(0, 0, 0, 0.16),
      0px 2.096px 0.698667px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    height: $thumb-size;
    width: $thumb-size;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    /* margin-top: -($thumb-size / 2) + ($track-size / 2);*/
  }

  &::-ms-track {
    width: 100%;
    height: $track-size;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
    border-width: $track-size 0;
  }

  &::-ms-fill-lower {
    background: $moonstone;
    border: none;
    border-radius: calc(#{$track-size} / 2);
  }

  &::-ms-fill-upper {
    background: $moonstone;
    border: none;
    border-radius: calc(#{$track-size} / 2);
  }

  &::-ms-thumb {
    height: $thumb-size;
    width: $thumb-size;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 2.096px 5.58933px rgba(0, 0, 0, 0.15),
      0px 0.698667px 0.698667px rgba(0, 0, 0, 0.16),
      0px 2.096px 0.698667px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}

.special-box__range {
  position: relative;
  border: none;
  margin-top: 25px;
  color: #fff;

  .small {
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 130%;
  }

  .big {
    font-weight: bold;
    font-size: 1.4375rem;
    line-height: 130%;
  }

  .range {
    position: relative;
    z-index: 2;
    background: #fff;
  }

  .range-indicator {
    position: absolute;
    bottom: 12px;
    height: 3px;
    background: transparent;
    left: 21px;
    right: 34px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    span {
      background: #fff;
      width: 2px;
      height: 8px;

      &:nth-child(7) {
        height: 14px;
      }

      &:first-child,
      &:last-child {
        opacity: 0;
      }
    }
  }
}
</style>
