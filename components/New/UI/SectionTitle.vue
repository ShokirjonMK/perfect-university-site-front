<template>
  <div class="d-flex justify-content-between align-items-center">
    <h1 class="section__title">{{ title }}</h1>
    <ButtonMore
      :title="$t('view_all')"
      @click="$router.push(localePath('/news'))"
    />
  </div>
</template>
<script>
import ButtonMore from '../../Button/ButtonMore.vue'

export default {
  name: 'SectionTitle',
  components: { ButtonMore },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style>
.section__title {
  color: #1d2024;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
}
</style>
