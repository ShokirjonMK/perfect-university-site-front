<template>
  <div class="test-mode">
    <vue-marquee-bar
      :content="[...testmode, ...testmode, ...testmode, ...testmode]"
      :speed="300"
      color="#000000"
      class="intro_marquee_blue"
    >
      <template v-slot:content>
        <div style="display: flex; align-items: center">
          <div class="marqueItem">
            {{ $t('academic_open') }}
          </div>
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="3.34993"
              cy="3.45166"
              r="3"
              transform="rotate(-0.427396 3.34993 3.45166)"
              fill="white"
            />
          </svg>
        </div>
      </template>
    </vue-marquee-bar>
  </div>
</template>

<script>
export default {
  name: 'AcademicYear1',
  data() {
    return {
      testmode: [
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
        this.$t('academic_open'),
      ],
    }
  },
}
</script>

<style scoped>
.intro_marquee_blue {
  background: #144176 !important;
  filter: drop-shadow(0px 0px 19px rgba(38, 120, 217, 0.4)) !important;
  backdrop-filter: blur(5px) !important;
  color: white !important;
}

.intro_marquee_blue:hover {
  animation-play-state: running !important;
}
</style>

<style>
div[class*='thanks-bar'][data-v-442f13ce] {
  margin-right: 2000px !important;
}
</style>
