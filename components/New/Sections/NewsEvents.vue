<template>
  <div class="news-events">
    <div class="container">
      <SectionTitle :title="$t('news_events')" />
      <div class="news-events__wrapper">
        <template v-for="(item, idx) in news?.slice(0, 3)">
          <NewsMainCard v-if="idx === 1" :key="idx" :data="item" />
          <NewsCard v-else :key="idx" :data="item" />
        </template>
      </div>
      <div class="news-events__bottom">
        <NewsCard
          v-for="(item, idx) in event?.slice(0, 3)"
          :key="idx"
          without-image
          :data="item"
          class-custom="news-card__description-1"
          notslug
        />
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from '../UI/SectionTitle.vue'
import NewsCard from '../Cards/News/NewsCard.vue'
import NewsMainCard from '../Cards/News/NewsMainCard.vue'
export default {
  components: { NewsCard, NewsMainCard, SectionTitle },
  props: {
    event: {
      type: Array,
    },
    news: {
      type: Array,
    },
  },
}
</script>

<style>
.news-card__description-1 {
  color: #5a626c;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1 !important;
  margin-bottom: 20px;
}
</style>
