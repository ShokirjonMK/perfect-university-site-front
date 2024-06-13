<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <h1 class="title">{{ $t('what_can_study') }}</h1>
      <div v-if="courses && courses.length" class="card-list">
        <NuxtLink
          v-for="(item, index) in courses"
          :key="index"
          :to="`/${$i18n.locale}/courses/${item.slug}`"
          class="card-item d-flex align-items-center justify-content-between"
        >
          <div>
            <div class="heading d-flex align-items-center">
              <h2 class="heading-title">
                {{ item.title }}
              </h2>
            </div>
            <ul class="card-item-list">
              <li class="card-item-child d-flex align-items-center">
                <svg class="icon flex-shrink-0" width="28" height="28">
                  <use xlink:href="/icons/sprite.svg#circle"></use>
                </svg>
                <span
                  >{{ item.direction_count }}
                  {{ $t('bachelors_degree_programs') }}</span
                >
              </li>
            </ul>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  async fetch() {
    await this.$store.dispatch('courses/fetchCourses').catch(() => {})
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      courses: (state) => state.courses.courses.results,
    }),
  },
}
</script>

<style scoped lang="scss">
h1 {
  color: var(--main-dark);
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: 700;
  line-height: 132%; /* 42.24px */
}
.card-item {
  border-radius: 12px;
  border: 1px solid var(--grey-grey-1, #e9edf2);
  background: var(--main-white, #fff);
  box-shadow: 0px 9px 24px 0px rgba(20, 65, 118, 0.04);
  padding: 24px;
  margin-bottom: 16px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.14);
  }
}

.heading {
  margin-bottom: 24px;
  h2 {
    color: var(--main-dark);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 132%; /* 26.4px */
  }
}

.card-item-child {
  svg {
    margin-right: 12px;
    margin-top: 2px;
  }

  span {
    color: var(--main-dark);
    font-size: 1rem;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
  }
}
</style>
