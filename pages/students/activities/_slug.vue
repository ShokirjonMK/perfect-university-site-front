<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else class="social-row mt-5 mt-lg-0">
      <h1 v-if="data?.title">{{ data?.title }}</h1>
      <div
        v-if="data?.images.length || data?.contents.length"
        class="social__card"
      >
        <div v-if="data?.images && data?.images?.length">
          <dormSlider :images="data?.images" />
        </div>
        <div
          v-for="(item, idx) in data?.contents"
          :key="idx"
          class="social-items"
        >
          <h2>{{ item?.title }}</h2>
          <p v-html="item?.content" />
          <ul v-if="item?.tags.length">
            <li v-for="(tag, index) in item?.tags" :key="index">
              {{ tag?.tag }}
            </li>
          </ul>
        </div>
      </div>
      <div v-else>
        <NoData />
      </div>
      <HashTags v-if="data?.images.length || data?.contents.length" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import dormSlider from '@/components/dormSlider.vue'
import BreadCrumbs from '@/components/Breadcrumb.vue'

export default {
  name: 'IndexVue',
  components: { BreadCrumbs },
  async fetch() {
    await this.$store
      .dispatch('students/fetchStudentsActivitiesSlug', this.$route.params.slug)
      .catch(() => {})
  },
  data() {
    return {
      components: {
        dormSlider,
      },
      social: {},
    }
  },
  computed: {
    ...mapState({
      data: (state) => state.students.studentsActivitiesSlug,
    }),
  },
}
</script>
<style lang="scss">
.social-items h2 {
  color: #144176;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  padding-left: 12px;
  position: relative;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
}
.social-items h2:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 32px;
  border-radius: 2px 8px 8px 2px;
  background: #2678d9;
}
.social__card {
  padding: 24px;
  background: white;
  border-radius: 12px;
  margin-top: 24px;

  @media screen and (max-width: 768px) {
    padding: 14px;
  }
}
.social-items {
  margin-top: 24px;
  position: relative;

  & p {
    color: #1d2024;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-top: 16px;
    margin-bottom: 0 !important;

    &:last-child {
      margin-bottom: 0;
    }
  }
  & ul {
    gap: 12px;
    display: flex;
    flex-direction: column;
    margin: 20px 0 24px 8px;
  }
  & li {
    display: flex;
    gap: 8px;
    color: #1d2024;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    &:before {
      content: url('~/static/image/about-tsue/zero-mission.svg');
      height: 25px;
      width: 25px;
    }
    &:before {
      @media screen and (max-width: 768px) {
        content: '';
        display: none;
      }
    }
  }
}
</style>
