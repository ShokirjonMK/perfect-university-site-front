<template>
  <div class="news-events">
    <div>
      <div class="news-events__wrapper">
        <template v-for="(item, idx) in news?.results?.slice(0, 2)">
          <MainCard v-if="idx === 0" :key="idx" :data="item" />
          <LargeCard v-else :key="idx" :data="item" notslug />
        </template>
      </div>
      <div class="students-activities__wrapper">
        <template v-for="(item, idx) in news?.results?.slice(2)">
          <LargeCard :key="idx" :data="item" notslug />
        </template>
      </div>
      <button-more
        v-if="news.results?.length >= 5 && news.next !== null"
        icon-class="false"
        class="w-100 mt-4"
        :to="`/news-events`"
        :text="$t('see_more')"
        @click="$emit('buttonMore')"
      />
    </div>
  </div>
</template>
<script>
import MainCard from '@/components/Students/Card/MainCard.vue'
import LargeCard from '@/components/Students/Card/LargeCard.vue'
export default {
  components: { MainCard, LargeCard },
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.students-activities__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  gap: 24px;
  margin-top: 24px;
}
</style>
