<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else class="rankings__row">
      <h1>{{ $t('rankings') }}</h1>
      <div v-for="(item, idx) in rankings" :key="idx">
        <div class="rankings__img">
          <img :src="item.image" alt="image" />
        </div>

        <div class="rank__number">
          <div v-for="(numberItem, idx) in items(item)" :key="idx">
            <p class="ranking__title">{{ numberItem.title }}</p>
            <p class="ranking__counter counter">
              <number
                ref="animateQWE"
                :from="0"
                :to="numberItem.number"
                :duration="5"
                :delay="1"
                easing="Power1.easeOut"
              ></number>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async fetch() {
    const data = await this.$axios.$get('/international-ranking/')
    this.rankings = data
  },
  data() {
    return {
      rankings: [],
    }
  },
  methods: {
    items(item) {
      return [
        {
          title: this.$t('academic_reputation_ranking'),
          number: item.reputation_ranking,
        },
        {
          title: this.$t('score_for_academic_reputation'),
          number: item.academic_reputation_ranking,
        },
        {
          title: this.$t('employer_reputation_rating'),
          number: item.employer_reputation_ranking,
        },
        {
          title: this.$t('employer_reputation_assessment'),
          number: item.reputation_assessment,
        },
      ]
    },
  },
}
</script>

<style scoped lang="scss">
.rankings__row {
  & .rankings__img {
    border-radius: 12px;
    border: 1px solid #e9edf2;
    background: #fff;
    box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);
    margin-top: 24px;
    margin-bottom: 20px;
    max-width: 982px;
    max-height: 462px;
  }
  & img {
    width: 100%;
    height: 462px;
    border-radius: 12px;
  }
}
.rank__number {
  padding: 24px 26px 24px 28px;
  border-radius: 12px;
  border: 1px solid #e9edf2;
  background: #fff;
  box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.ranking__title {
  color: #989ea5;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
.ranking__counter {
  color: #1d2024;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .rank__number {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 767px) {
  .rank__number {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
