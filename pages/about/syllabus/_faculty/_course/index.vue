<template>
  <div class="page-wrapper syllabus-about">
    <address
      v-for="(item, index) in data?.course_syllabus_informations"
      :key="index"
      class="info-about-science"
    >
      <h2 class="text-uppercase mb-3 sub-title">
        {{ $t(item?.type) }}
      </h2>
      <div class="mb-1" v-html="item?.text" />
    </address>
  </div>
</template>

<script>
export default {
  props: {
    subjectName: String,
    teacherInfo: {
      email: String,
    },
    textSection: Array,
    department: Object,
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.sub-title {
  color: #1c89c1;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.order-title,
li::marker {
  color: #1d2024;
  font-size: 1rem;
  font-weight: 700;
  line-height: 130%;
}

.order-text {
  margin-top: 8px;
  color: #1d2024;
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  margin-left: -18px;
}

.syllabus-about {
  & p {
    color: #1d2024;
    font-size: 16px;
    font-style: normal;
    font-weight: inherit;
    line-height: 130%;
  }
}
</style>
