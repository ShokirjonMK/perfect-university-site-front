<script></script>
<template>
  <div class="card-bg">
    <img
      v-if="$i18n.locale === 'en'"
      style="width: 142px; height: 40px"
      src="/image/footer-oz.svg"
      alt="Footer uz logo"
    />
    <img
      v-else-if="$i18n.locale === 'ru'"
      style="width: 142px; height: 40px"
      src="/image/footer-ru.svg"
      alt="Footer uz logo"
    />
    <img
      v-else-if="$i18n.locale === 'sr'"
      style="width: 142px; height: 40px"
      src="/image/footer-en.svg"
      alt="Footer logo uz"
    />
    <img class="bg-img" src="/image/header/Vector.svg" alt="Header vector" />
    <div>
      <h3 class="title-seacrh">{{ $t('transfer_students_admissions') }}</h3>
      <a
        class="search-apply-button"
        target="_blank"
        href="https://qabul.perfectuniversity.uz/"
      >
        {{ $t('apply_now') }}
        <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.title-seacrh {
  color: #fff;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 30.8px */
  margin-bottom: 20px;
}

.desc_search {
  color: #768194;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 11px */
  margin-left: 8px;
  margin-bottom: 0 !important;
}

.short-desc {
  color: #1d2024;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 14.3px */
}

.views {
  color: #768194;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 11px */
}

.card-search {
  transition: all 0.4s;
  border-radius: 8px !important;
  background: #f6f8fb !important;
}

.card-search:hover h3 {
  color: #4d90df !important;
}

.card-bg {
  border-radius: 12px;
  background: linear-gradient(147deg, #0b1e33 18.1%, #17406c 80.3%);
  overflow: hidden;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 312px;
  justify-content: space-between;
  position: relative;
}

.bg-img {
  position: absolute;
  right: 0;
  bottom: 0;
}

.search-apply-button {
  padding: 12px 20px;
  border-radius: 8px;
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(8px);
  color: white;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 16.9px */
}
</style>
