<template>
  <nuxt-link :to="link" class="scientific-card">
    <h5 class="scientific-card__title">
      {{ title || 's' }}
    </h5>
    <p class="scientific-card__desc" v-html="description"></p>

    <button class="scientific-card__button">{{ $t('more') }}</button>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.scientific-card {
  background: #ffffff;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 32px;
  transition: all 0.3s ease;
  margin-bottom: 12px;

  &:hover {
    box-shadow: 0px 4px 20px rgba(159, 171, 185, 0.16);
  }

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 36px;
    color: #374453;
  }

  &__desc {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 144.5%;
    color: #44494f;
    margin-top: 4px;
  }

  &__button {
    padding: 10px 32px;
    height: 40px;
    left: 32px;
    bottom: 28px;
    background: #024da5;
    border-radius: 4px;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    color: #ffffff;
    margin-top: 28px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    max-width: 200px;
    &:hover {
      background: #024da5;
      opacity: 0.8;
    }
  }
}

.scientific-card:last-child {
  margin-bottom: 0;
}
</style>
