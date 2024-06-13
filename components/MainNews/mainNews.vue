<template>
  <div class="container-fluid interaktiv bg-white">
    <div class="container">
      <div
        class="d-flex align-center align-items-center justify-content-between"
      >
        <NuxtLink :to="localePath('/university/interactive-services')">
          <h1 class="section-title">{{ $t('news_article') }}</h1>
        </NuxtLink>
        <ButtonMore
          :title="$t('view_all')"
          @click="$router.push(localePath('/news'))"
        />
      </div>
      <NuxtLink
        v-for="(news, index) of data?.slice(0, 4)"
        :key="index"
        :to="localePath(`/news/${news.slug}`)"
        class="news-cards"
      >
        <div class="main-left">
          <div class="timer">
            {{
              $moment(news.publish_date)
                .locale(
                  $i18n.locale == 'sr'
                    ? 'uz-latn'
                    : $i18n.locale == 'sr'
                    ? 'sr'
                    : $i18n.locale
                )
                .format('D.MM.YYYY')
            }}
          </div>
          <div class="news-cards-content">
            <div class="badge">Partnership</div>
            <p>{{ news.title }}</p>
            <div class="eye">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 7.99992C10 9.10449 9.10457 9.99992 8 9.99992C6.89544 9.99992 6 9.10449 6 7.99992C6 6.89535 6.89544 5.99992 8 5.99992C9.10457 5.99992 10 6.89535 10 7.99992Z"
                  stroke="#768194"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.0003 3.33325C5.01521 3.33325 2.48836 5.29517 1.63884 7.9999C2.48834 10.7046 5.01521 12.6666 8.00031 12.6666C10.9854 12.6666 13.5123 10.7047 14.3618 7.99994C13.5123 5.2952 10.9854 3.33325 8.0003 3.33325Z"
                  stroke="#768194"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ news?.views }}
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center svg_linker">
          <div>
            <img :src="news?.thumbnail_url" alt="image" />
          </div>
          <div>
            <svg
              class="svg_linker-svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 34L34 14M34 14H16M34 14V32"
                stroke="#A4AEBB"
                stroke-width="2.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import ButtonMore from '../Button/ButtonMore.vue'

export default defineComponent({
  components: { ButtonMore },
  props: {
    data: {
      type: Array,
    },
  },
})
</script>

<style lang="scss" scoped>
.section-title {
  color: #1d2024;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  margin-bottom: 0;
}
.news-cards {
  margin-top: 24px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d7dce0;
  padding-bottom: 12px;

  & .timer {
    color: #1d2024;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 132%;
    margin-right: 24px;
  }
  & .badge {
    padding: 4px 8px 5px 8px;
    gap: 10px;
    border-radius: 4px;
    border: 1px solid #2678d9;
    backdrop-filter: blur(15px);
    color: #2678d9;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & img {
    width: 220px;
    height: 124px;
    object-fit: cover;
  }

  & .main-left {
    display: flex;
    align-items: center;
    gap: 24px;
  }
}
.news-cards-content {
  max-width: 557px;
  & p {
    color: #1d2024;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  & .eye {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #768194;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
.svg_linker {
  gap: 54px;
}
.news-cards:hover .svg_linker-svg {
  transform: rotate(45deg);
}
@media screen and (max-width: 991px) {
  .news-cards {
    flex-direction: column;
    align-items: start;
  }
  .main-left {
    flex-direction: column;
    align-items: start !important;
    gap: 12px !important;
  }
  .svg_linker {
    margin-top: 12px !important;
    gap: 24px !important;
  }
}
</style>
