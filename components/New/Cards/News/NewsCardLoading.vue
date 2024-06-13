<template>
  <div class="shimmer-wrapper loading-news-card bg-white">
    <div class="loading-news-card__img shimmer" />
    <div class="loading-news-card-block">
      <div class="loading-news-card-block__category shimmer" />
      <div class="shimmer loading-news-card-block__title" />
      <div class="shimmer loading-news-card-block__description" />
      <div class="shimmer loading-news-card-block__description" />
      <div class="shimmer loading-news-card-block__description" />

      <div class="d-flex loading-news-card-info">
        <div class="d-flex loading-news-card-info-block">
          <div class="loading-news-card-info__icon shimmer" />
          <div class="loading-news-card-info__title shimmer" />
        </div>
        <div class="d-flex loading-news-card-info-block">
          <div class="loading-news-card-info__icon shimmer" />
          <div class="loading-news-card-info__title shimmer" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-news-card {
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  &__img {
    height: 182px;
    width: 100%;
  }
  &-block {
    padding: 20px;

    &__category {
      width: 80px;
      height: 24px;
      margin-bottom: 24px;
    }

    &__title {
      height: 22px;
      width: 100%;
      margin-bottom: 8px;
    }
    &__description {
      width: 100%;
      height: 15px;
      margin-bottom: 2px;
    }
  }

  &-info {
    gap: 12px;
    margin-top: 16px;
    &-block {
      gap: 4px;
    }

    &__icon {
      width: 16px;
      height: 16px;
    }
    &__title {
      width: 50px;
      height: 16px;
    }
  }
}
</style>
<script setup></script>
