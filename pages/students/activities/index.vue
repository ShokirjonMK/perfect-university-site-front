<template>
  <div class="activities mt-5 mt-lg-0">
    <h1 class="activities__title">{{ $t('student_activities') }}</h1>
    <p class="activities__text">{{ $t('student_activities_text') }}</p>

    <div class="student-gallery">
      <p class="student-gallery__title">{{ $t('gallery') }}</p>
      <StudentCard
        class="main__news"
        :news="studentsActivities"
        @buttonMore="buttonMore"
      />
    </div>
    <div class="student-videos">
      <p class="student-videos__title">{{ $t('Videos') }}</p>
      <StudentVideos @buttonMore="buttonMore" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StudentCard from '@/components/Students/Card/index.vue'
import StudentVideos from '@/components/Students/Videos/index.vue'
export default {
  components: { StudentCard, StudentVideos },
  data() {
    return {
      page: 1,
      limit: 5,
    }
  },

  computed: {
    ...mapState({
      studentsActivities: (state) => state.students.studentsActivities,
    }),
  },

  mounted() {
    this.fetch()
  },

  methods: {
    buttonMore() {
      console.log('salom')
      this.limit = this.limit + 4
      this.fetch()
    },

    async fetch() {
      await this.$store.dispatch('students/fetchStudentsActivities', {
        page: this.page,
        limit: this.limit,
      })
    },
  },
}
</script>

<style scoped lang="scss">
.activities {
  &__text {
    margin-top: 16px;
    color: #1d2024;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
}

.student-gallery {
  margin-top: 24px;
  &__title {
    color: #1d2024;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
}

.student-videos {
  padding-top: 64px;
  &__title {
    color: #1d2024;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
  }
}

.news-events {
  padding: 0 !important;
}
</style>

<style>
.activities .news-events__wrapper {
  grid-template-columns: 2fr 1fr !important;
  padding: 0 !important;
  grid-template-rows: repeat(1, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr !important;
  }
}
.activities .students-activities__wrapper {
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr !important;
  }
}
</style>
