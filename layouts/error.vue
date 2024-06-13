<template>
  <div>
    <div v-if="error.statusCode === 404" class="container-fluid error-page">
      <div class="container">
        <div class="error-block">
          <div class="">
            <h1>{{ $t('not_found') }}</h1>
            <p class="text-center">{{ $t('page_does_not_exist') }}</p>
            <NuxtLink to="/">
              <button>{{ $t('return_to_home') }}</button>
            </NuxtLink>
          </div>
          <div class="text-center mt-3 mt-md-0">
            <img src="@/static/image/error.svg" alt="Error image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MetaMixin from '~/mixins/meta.js'

export default {
  name: 'NotFoundPage',
  mixins: [MetaMixin],
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  layout: 'error-layout',
}
</script>

<style lang="scss" scoped>
.error-page {
  h1 {
    color: var(--Main-Dark, #313132);
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 46.8px */

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }

  p {
    color: var(--Grey-Grey-1, #757d83);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }

  a {
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }

  button {
    background: transparent;
    border-radius: 4px;
    font-style: normal;
    text-align: center;
    padding: 12px 16px 12px 16px;
    outline: none;
    border: 1px solid #1c89c1;
    transition: 0.3s all;
    color: #1d2024;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    &:hover {
      border: 1px solid #003b81;
      background: none;
      color: #003b81;
    }
  }
}

.footer-error {
  background-image: url('~/static/image/IQTISODIYOT.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background: #00316b;
  height: 14vh;

  .container {
    background-image: url('~/static/image/IQTISODIYOT.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 48px 0px 48px 0px;

    span {
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      line-height: 20px;
      color: #ffffff;
      margin-left: 5px;
    }

    svg {
      margin-left: 16px;
    }
  }
}

.error-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}
</style>
