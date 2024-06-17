<template>
  <div class="h-100- position-relative " style="z-index: 0">
    <div class="hero-wrap pt-4">
      <div class="title-wrap">
        <h2 class="">
          2024-2025 o'quv yili uchun qabul boshlandi
        </h2>
        <div class="">On the approval of the regulation on the procedure for obtaining a second and subsequent higher education in higher educational institutions of the republic of uzbekistan</div>
        <a href="https://qabul.perfectuniversity.uz" class="mt-3" >
          <button class="link_btn">
            Ariza topshirish
            <svg
                width="38"
                height="24"
                viewBox="0 0 38 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 19L31 11.5L23 4"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31 11.5H5.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
          </button>
        </a>
      </div>
      <div class="">
        <div class="img-wrap">
          <img class="position-absolute top-left" src="../../static/hero2.jpg" alt="Logo Pattern" />
          <img class="position-absolute bottom-right" src="../../static/hero3.jpg" alt="Logo Pattern" />
        </div>
      </div>
      <!-- <img class="logo-pattern" src="/image/logo-sm.svg" alt="Logo Pattern" /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slider: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        fade: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
      },
      activeIndex: 0,
    }
  },
  methods: {
    goToActiveIndex(index) {
      this.$refs.slider.goTo(index)
    },
  },
}
</script>

<style lang="scss">
.hero-wrap{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  /* background: url("../../static/2.gif") no-repeat; */
  /* background-color: rgba(0, 0, 0, 0.1); */
  /* background: url("../../static/og-image.png") no-repeat; */
  background-size: cover;
}
.title-wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  padding: 1rem 1rem 1rem 3rem;

  h2{
    font-size: 2.5rem;
  }
}
.img-wrap{
  position: relative;
  width: 100%;
  height: 80vh;
  margin-top: 1rem;

  & > img {
    width: 60%;
    border-radius: 2rem;
  }
}
.top-left{
  top: 0;
  left: 0;
  z-index: 2;
}
.bottom-right{
  bottom: 0;
  right: 10px;
}
.link_btn {
  padding: 0.5rem 2rem;
  border-radius: 0.45rem;
  background-color: var(--darkBlue);
  color: #fff;
  border: none;
  outline: none;

  &:hover {
    background-color: var(--blue-hover);
  }
}

@media (max-width: 998px) {
  .hero-wrap{
    grid-template-columns: 1fr;
  }

  .title-wrap{
    align-items: center;
    text-align: center;
    padding: 2rem .5rem;
  }
  .img-wrap{
    & > img {
      max-height: 100%;
      width: auto;
    }
  }

}
</style>
