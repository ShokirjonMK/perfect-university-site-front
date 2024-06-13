<template>
  <div class="shimmer-wrapper loading-news-main-card">
    <div>
      <div class="shimmer loading-news-main-card__category" />
      <div class="shimmer loading-news-main-card__title" />

      <div class="d-flex loading-news-main-card-info">
        <div class="d-flex loading-news-main-card-info-block">
          <div class="loading-news-main-card-info__icon shimmer" />
          <div class="loading-news-main-card-info__title shimmer" />
        </div>
        <div class="d-flex loading-news-main-card-info-block">
          <div class="loading-news-main-card-info__icon shimmer" />
          <div class="loading-news-main-card-info__title shimmer" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  &-news-main-card {
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &__category {
      width: 80px;
      height: 24px;
      margin-bottom: 12px;
    }
    &__title {
      height: 24px;
      width: 100%;
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
}
</style>
<script setup></script>
