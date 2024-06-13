<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else class="position-relative">
      <div class="overlay-bg"></div>
      <div
        v-if="statistic && statistic.main"
        ref="statisticsAnimate"
        class="container-fluid statistics"
        :style="{ backgroundImage: 'url(' + statistic.main.image_url + ')' }"
        @mouseover.prevent="mouseOver()"
      >
        <div class="container">
          <div
            v-if="statistic && statistic.items && statistic.items.length"
            class="row"
          >
            <div
              v-for="(item, index) in statistic.items"
              :key="index"
              class="col-12 col-md-4 col-lg-3 statistics__item"
            >
              <div class="numbers">
                <img
                  class="numbers__icon"
                  :src="item.icon_url"
                  :alt="item.title"
                />
                <h6 class="numbers__title">{{ item.title }}</h6>
                <h1 class="numbers__counter counter">
                  <number
                    ref="animateQWE"
                    :from="0"
                    :to="item.number"
                    :duration="5"
                    :delay="1"
                    easing="Power1.easeOut"
                  ></number>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div
              v-if="statistic && statistic.main"
              class="col-12 text-center inner statistics__inner"
            >
              <div class="d-flex justify-content-center">
                <div style="margin-top: 68px" class="">
                  <img
                    v-if="statistic.main.icon_url"
                    class="statistic__icon"
                    :src="statistic.main.icon_url"
                    alt="icon"
                    width="286"
                    height="78"
                  />
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="287"
                    height="79"
                    viewBox="0 0 287 79"
                    fill="none"
                  >
                    <path
                      d="M0 78.174H17.2358V0.178067H0V78.174ZM60.9721 78.174H78.2078V0.178067H60.9721V78.174ZM40.644 78.174H57.8798V0.178067H40.644V78.174ZM20.3281 50.1234H37.5638V0.178067H20.3281V50.1234Z"
                      fill="white"
                    />
                    <path
                      d="M281.818 56.8961L276.857 65.0019L272.008 56.8961H267.702L274.76 68.856V78.1699H278.881V68.7705L286.111 56.8961H281.818Z"
                      fill="white"
                    />
                    <path
                      d="M189.989 46.5016H181.248V40.6143H189.105V37.4006H181.248V32.1811H189.062L190.188 28.7262H177.426V49.9855H189.989V46.5016Z"
                      fill="white"
                    />
                    <path
                      d="M209.809 48.6056V44.6096C208.247 45.8605 206.294 46.5249 204.291 46.4871H203.82C202.917 46.4915 202.022 46.3137 201.189 45.9645C200.357 45.6153 199.604 45.1019 198.975 44.4551C198.346 43.8083 197.855 43.0414 197.531 42.2005C197.207 41.3596 197.057 40.4621 197.09 39.5619C197.059 38.5754 197.233 37.5932 197.601 36.6767C197.968 35.7602 198.521 34.9291 199.225 34.2352C199.929 33.5412 200.768 32.9994 201.691 32.6435C202.614 32.2876 203.601 32.1253 204.59 32.1666C205.836 32.1666 207.068 32.4384 208.197 32.9634L209.282 29.6351C207.666 28.8706 205.893 28.4957 204.106 28.5407C198.163 28.3141 193.164 32.9344 192.937 38.8595C192.926 39.1597 192.927 39.4602 192.94 39.7603C192.654 45.2507 196.885 49.9331 202.39 50.2186C202.458 50.2218 202.526 50.225 202.594 50.2266H203.706C205.859 50.3234 207.99 49.7573 209.809 48.6056Z"
                      fill="white"
                    />
                    <path
                      d="M228.688 28.7254H212.262V32.3085H218.251V49.9855H222.144V32.3085H227.533L228.688 28.7254Z"
                      fill="white"
                    />
                    <path
                      d="M121.359 69.6238C121.359 72.4682 119.933 74.686 116.61 74.686C113.288 74.686 111.776 72.6384 111.776 69.5956V56.8824H107.869V69.3254C107.869 73.1077 109.167 78.3981 116.554 78.3981C123.94 78.3981 125.28 73.3924 125.28 69.4246V56.8824H121.359V69.6238Z"
                      fill="white"
                    />
                    <path
                      d="M145.329 69.7948L131.64 56.8969H131.07V78.1707H134.905V65.3293L148.58 78.1707H149.151V56.8969H145.329V69.7948Z"
                      fill="white"
                    />
                    <path
                      d="M155.11 76.3562C155.11 77.3583 155.925 78.1707 156.93 78.1707H157.198C158.202 78.1707 159.017 77.3583 159.017 76.3562V58.697C159.017 57.6948 158.202 56.8824 157.198 56.8824H156.93C155.925 56.8824 155.11 57.6948 155.11 58.697V76.3562Z"
                      fill="white"
                    />
                    <path
                      d="M172.635 72.2263L167.003 56.8961H162.853L171.124 78.1707H174.075L182.631 56.8961H178.482L172.635 72.2263Z"
                      fill="white"
                    />
                    <path
                      d="M226.72 62.5567C226.72 61.4051 227.675 60.1534 229.957 60.1534C231.824 60.2108 233.61 60.9204 235.005 62.1583V58.1768C233.437 57.1452 231.593 56.6098 229.715 56.6405C225.166 56.6405 222.671 59.4849 222.671 62.8124C222.671 69.2689 231.783 68.3875 231.783 72.298C231.783 73.6206 230.756 74.744 228.574 74.744C226.356 74.6188 224.235 73.7973 222.514 72.3972V76.4642C224.389 77.7572 226.623 78.4334 228.902 78.3982C233.451 78.3982 236.132 75.8667 236.132 72.3263C236.132 65.685 226.72 66.1689 226.72 62.5567Z"
                      fill="white"
                    />
                    <path
                      d="M241.093 76.3562C241.093 77.3583 241.908 78.1707 242.913 78.1707H243.181C244.186 78.1707 245 77.3583 245 76.3562V58.697C245 57.6948 244.186 56.8824 243.181 56.8824H242.913C241.908 56.8824 241.093 57.6948 241.093 58.697V76.3562Z"
                      fill="white"
                    />
                    <path
                      d="M114.742 38.8506H111.591V31.9673H115.07C115.528 31.909 115.993 31.9531 116.432 32.0964C116.871 32.2398 117.272 32.4788 117.607 32.7961C117.941 33.1135 118.201 33.5011 118.366 33.9309C118.532 34.3608 118.599 34.822 118.564 35.2811C118.583 35.7759 118.495 36.269 118.306 36.7269C118.117 37.1848 117.832 37.597 117.47 37.9354C117.107 38.2739 116.676 38.5308 116.206 38.6886C115.735 38.8465 115.236 38.9017 114.742 38.8506ZM122.442 35.2529C122.442 30.9722 119.947 28.6689 115.555 28.6689H107.883V49.9992H111.606L111.591 42.2208H115.312C119.833 42.2208 122.442 39.5328 122.442 35.2529Z"
                      fill="white"
                    />
                    <path
                      d="M153.228 41.6805C154.554 41.2238 155.692 40.3436 156.466 39.1762C157.239 38.0088 157.605 36.6196 157.506 35.2239C157.506 31.2851 155.081 28.7108 150.504 28.7108H143.104V50.0419H146.84V32.0101H149.877C150.344 31.9806 150.811 32.0467 151.252 32.2045C151.692 32.3623 152.095 32.6084 152.436 32.9276C152.777 33.2468 153.048 33.6323 153.234 34.0603C153.42 34.4883 153.516 34.9498 153.516 35.4162C153.516 35.8826 153.42 36.3441 153.234 36.7721C153.048 37.2001 152.777 37.5856 152.436 37.9048C152.095 38.224 151.692 38.4701 151.252 38.6279C150.811 38.7857 150.344 38.8519 149.877 38.8223H147.239V39.0925L154.454 49.9855H158.732L153.228 41.6805Z"
                      fill="white"
                    />
                    <path
                      d="M166.033 41.1966H173.063V37.8974H166.033V32.1811H173.063L174.175 28.7254H162.211V49.9847H166.033V41.1966Z"
                      fill="white"
                    />
                    <path
                      d="M138.67 46.5016H129.943V40.6143H137.786V37.4006H129.943V32.1811H137.743L138.869 28.7262H126.122V49.9855H138.67V46.5016Z"
                      fill="white"
                    />
                    <path
                      d="M198.059 60.3518L199.186 56.8961H186.423V78.1699H199V74.686H190.259V68.7842H198.102V65.585H190.259V60.3518H198.059Z"
                      fill="white"
                    />
                    <path
                      d="M214.411 18.2881H205.63V12.359H213.509V9.14518H205.63V3.88702H213.466L214.597 0.41598H201.776V21.7882H214.411V18.2881Z"
                      fill="white"
                    />
                    <path
                      d="M218.221 63.41C218.221 59.4567 215.797 56.8824 211.22 56.8824H203.92V78.2135H207.656V60.1817H210.693C211.16 60.1512 211.629 60.2167 212.069 60.3741C212.51 60.5315 212.914 60.7774 213.256 61.0966C213.597 61.4159 213.87 61.8016 214.056 62.2301C214.242 62.6585 214.338 63.1204 214.338 63.5874C214.338 64.0543 214.242 64.5163 214.056 64.9447C213.87 65.3731 213.597 65.7589 213.256 66.0781C212.914 66.3974 212.51 66.6433 212.069 66.8007C211.629 66.958 211.16 67.0235 210.693 66.9931H207.998V67.2778L215.227 78.1707H219.505L213.901 69.8657C215.234 69.4147 216.38 68.5373 217.161 67.3699C217.942 66.2025 218.315 64.8104 218.221 63.41Z"
                      fill="white"
                    />
                    <path
                      d="M248.908 60.4801H254.897V78.1707H258.789V60.4801H264.179L265.334 56.8969H248.908V60.4801Z"
                      fill="white"
                    />
                    <path
                      d="M128.065 5.6685L131.027 13.4162H125.118L128.065 5.6685ZM121.934 21.7874L123.779 16.9494H132.382L134.227 21.7874H138.497L129.776 0.415167H126.458L117.677 21.7874H121.934Z"
                      fill="white"
                    />
                    <path
                      d="M154.374 15.9243C154.374 9.2613 144.925 9.73631 144.925 6.11446C144.925 4.95637 145.877 3.69506 148.169 3.69506C149.895 3.69506 151.71 4.40798 153.243 5.71284V1.72163C152.038 0.87484 150.178 0.177246 147.93 0.177246C143.362 0.177246 140.861 2.98295 140.861 6.36688C140.861 12.8525 150.014 11.9622 150.014 15.8953C150.014 17.2163 148.972 18.3591 146.784 18.3591C144.925 18.3591 142.841 17.5728 140.698 15.9993V20.0809C142.41 21.3277 144.715 22.0253 147.112 22.0253C151.681 22.0253 154.374 19.4865 154.374 15.9243Z"
                      fill="white"
                    />
                    <path
                      d="M162.492 12.8525H172.286V21.7874H176.213V0.415167H172.286V9.36535H162.492V0.415167H158.563V21.7874H162.492V12.8525Z"
                      fill="white"
                    />
                    <path
                      d="M185.379 11.1169L193.937 21.7881H198.907L189.591 10.2403L198.045 0.415098H193.371L185.379 9.82496V0.415098H181.45V21.7881H185.379V11.1169Z"
                      fill="white"
                    />
                    <path
                      d="M233.084 13.3726L219.332 0.415906H218.752V21.7881H222.607V8.89107L236.343 21.7881H236.923V0.415906H233.084V13.3726Z"
                      fill="white"
                    />
                    <path
                      d="M108.491 21.7881H112.402V4.01598H117.817L118.977 0.415098H102.475V4.01598H108.491V21.7881Z"
                      fill="white"
                    />
                    <path
                      d="M250.007 21.7881V4.01598H255.421L256.582 0.415098H240.079V4.01598H246.096V21.7881H250.007Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="text-white description-content"
                v-html="statistic.main.content"
              />
            </div>

            <div class="player__video">
              <template v-if="singleVideo && singleVideo.length">
                <div
                  class="col-12 text-center d-flex align-items-center justify-content-center"
                >
                  <div
                    v-for="(item, indexVideo) in singleVideo"
                    :key="indexVideo"
                    class="animation-play"
                    @click="index = indexVideo"
                  >
                    <svg
                      class="animate-play"
                      width="104"
                      height="104"
                      viewBox="0 0 104 104"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="52" cy="52" r="52" fill="white" />
                      <path
                        d="M61.3165 46.5728C64.196 48.3725 65.6357 49.2723 66.1294 50.4244C66.5606 51.4305 66.5606 52.5695 66.1294 53.5756C65.6357 54.7277 64.196 55.6275 61.3165 57.4272L47.792 65.88C44.5961 67.8774 42.9981 68.8762 41.6795 68.7701C40.53 68.6777 39.4764 68.0938 38.7888 67.168C38 66.1059 38 64.2216 38 60.4528V43.5472C38 39.7784 38 37.8941 38.7888 36.832C39.4764 35.9062 40.53 35.3223 41.6795 35.2299C42.9981 35.1238 44.5961 36.1226 47.792 38.12L61.3165 46.5728Z"
                        fill="#2678D9"
                      />
                    </svg>

                    <span class="animate-2nd"> </span>
                    <span class="animate-1st"> </span>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import { mapState } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'

// import VueNumber from 'vue-number-animation'
export default {
  name: 'Statistics',
  components: {
    CoolLightBox,
  },

  data() {
    return {
      singleVideo: [],
      index: null,
    }
  },

  computed: {
    ...mapState({
      statistic: (state) => state.statistic.statistic,
    }),
  },

  methods: {
    mouseOver() {
      for (let i = 0; i < this.$refs.animateQWE.length; i++) {
        this.$refs.animateQWE[i].play()
      }
    },
  },

  async fetch() {
    await this.$store.dispatch('statistic/fetchStatistic').catch(() => {})
    this.singleVideo.push(this.statistic.main?.link)
  },
}
</script>

<style scoped>
.player__video {
  width: 272px;
  height: 272px;
  margin: 0 auto;
  border-radius: 150px 150px 0px 0px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10.5px);
  margin-top: 82px;
}
@media screen and (max-width: 768px) {
  .player__video {
    margin-top: 40px;
  }
}

.statistics__item {
  padding: 0 12px !important;
}

.overlay-bg {
  background: radial-gradient(
    81.71% 81.71% at 50% 20.7%,
    rgba(23, 64, 108, 0.7) 0%,
    #17406c 100%
  );
  position: absolute;
  width: 100%;
  height: 100%;
}
.numbers__title {
  margin-top: 16px;
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
}

.statistic__icon {
  width: 100% !important;
  height: 100% !important;
  padding-bottom: 37px !important;
}

.description-content {
  max-width: 580px;
  text-align: center;
  margin: 0 auto;
  font-size: 14px;
}
</style>
