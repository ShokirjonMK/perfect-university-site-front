<template>
  <div class="no-data d-flex align-items-center">
    <div
      class="no-data__inform d-flex flex-column justify-content-center w-100"
    >
      <img class="no-data__img" src="/image/nodata.svg" alt="Nodata image" />
      <h4 class="no-data__title text-center mt-3">{{ $t('here_is_empty') }}</h4>
      <h4 class="no-data__subtitle text-center">
        {{ $t('here_is_no_information_yet') }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.no-data {
  margin: 0 auto;
  min-height: 50vh;
}

.no-data__inform {
  margin-left: 12px;
  text-align: left;
}
.no-data__img {
  width: 270px;
  height: 200px;
  margin: 0 auto;
}

.no-data__title {
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 30px;
  color: #44494f;

  @media screen and (max-width: 767px) {
    font-size: 1.125rem;
    line-height: 22px;
  }
}

.no-data__subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 144.5%;
  color: #44494f;

  @media screen and (max-width: 767px) {
    font-size: 0.875rem;
    line-height: 144.5%;
  }
}
</style>
