<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <h1 class="title">{{ $t('international_cooperation') }}</h1>
      <div class="row">
        <div
          v-for="item in cooperation.results"
          :key="item.id"
          class="col-xl-6 mb-4"
        >
          <a :href="item.link" target="_blank" class="card">
            <div
              class="card-heading mb-3 d-flex align-items-start justify-content-between"
            >
              <img :src="item.image_url" alt="Icon status" />
              <span class="status">{{ item.category.title }}</span>
            </div>
            <div class="card-content">
              <h5 class="">
                {{ item.title }}
              </h5>
              <p class="card-content__subtitle" v-html="item.content"></p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch() {
    await this.$store.dispatch('cooperation/fetchCooperation').catch(() => {})
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      cooperation: (state) => state.cooperation.cooperation,
    }),
  },
}
</script>

<style scoped lang="scss">
.card-heading {
  .status {
    padding: 4px 8px;
    color: #5a626c;
    border: 1px solid var(--gray-color-3);
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
  }
}
h1 {
  color: var(--main-dark);
  font-size: 2rem;
  font-weight: 700;
  line-height: 42px;
  margin-bottom: 24px;
}
.card {
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 9px 24px 0px var(--shadow);
  border: 1px solid var(--gray-color-2);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--blue);
    cursor: pointer;
  }
}

.card-content {
  h5 {
    margin-bottom: 12px;
    color: var(--main-dark);
    font-weight: 600;
    font-size: 1rem;
  }

  p {
    color: #5a626c;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 16.32px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
