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
  name: 'AcademicYear2',
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
  background: #2678d9 !important;
  filter: drop-shadow(0px 0px 19px rgba(38, 120, 217, 0.4)) !important;
  backdrop-filter: blur(5px) !important;
  color: white !important;
  position: absolute !important;
  margin-top: 10px !important;
}
</style>

<style>
.marqueItem {
  color: #ffffff;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 26px;
  margin-right: 16px;
  align-items: center !important;
  display: flex;
  padding: 6px 0;
}

@media (max-width: 576px) {
  .marquee-container > div > div {
    padding-inline: 0 !important;
  }
}
</style>
