<template>
  <NuxtLink :to="`/${$i18n.locale}/news/${data.slug}`" class="news-main-card">
    <div class="news-main-card__img h-100">
      <img :src="data.thumbnail_url" alt="News main card" />
    </div>
    <div style="transition: 0.4s" class="news-main-card__wrapper">
      <div class="news-main-card__category">
        {{ data?.category }}
      </div>
      <h2 style="margin: 12px 0 16px 0" class="news-main-card__title">
        {{ data?.title }}
      </h2>
      <div class="d-flex align-items-center news-main-card__svg">
        <div class="d-flex align-items-center">
          <svg
            color="views"
            class="mr-1"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66699 7.99984C1.66699 7.99984 4.33366 2.6665 9.00032 2.6665C13.667 2.6665 16.3337 7.99984 16.3337 7.99984C16.3337 7.99984 13.667 13.3332 9.00032 13.3332C4.33366 13.3332 1.66699 7.99984 1.66699 7.99984Z"
              stroke="#fff"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
              stroke="#fff"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{{ data?.views }}</span>
        </div>
        <div class="d-flex align-items-center">
          <svg
            width="16"
            height="16"
            class="mr-1"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6667 2.6665H3.33333C2.59695 2.6665 2 3.26346 2 3.99984V13.3332C2 14.0696 2.59695 14.6665 3.33333 14.6665H12.6667C13.403 14.6665 14 14.0696 14 13.3332V3.99984C14 3.26346 13.403 2.6665 12.6667 2.6665Z"
              stroke="#fff"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.667 1.3335V4.00016"
              stroke="#fff"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33301 1.3335V4.00016"
              stroke="#fff"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 6.6665H14"
              stroke="#fff"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>
            {{
              $moment(data.publish_date)
                .locale(
                  $i18n.locale == 'sr'
                    ? 'uz-latn'
                    : $i18n.locale == 'sr'
                    ? 'sr'
                    : $i18n.locale
                )
                .format('LL')
            }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script>
export default {
  name: 'NewsMainCard',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
