<template>
  <div>
    <div class="cardApply mt-4">
      <h3>
        {{ $t('start_acceptance') }}
        <p>
          {{ $t('for_apply_aplication') }}
        </p>
        <nuxt-link :to="`/${$i18n.locale}/admission`">
          <button class="blue-btn">
            {{ $t('apply_for') }}
            <svg
              width="38"
              height="24"
              viewBox="0 0 38 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 19L31 11.5L23 4"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31 11.5H5.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </nuxt-link>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'apply',
}
</script>

<style lang="scss" scoped>
.cardApply {
  padding: 48px 0px 48px 48px;
  background: #d8e7fa;
  border-radius: 8px;

  background-image: url('~/static/image/apply.svg');
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  h3 {
    font-weight: bold;
    font-size: 2.0625rem;
    line-height: 24px;
    color: #3474ee;
  }

  p {
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 21px;
    color: #365ca4;
    margin-top: 12px;
    margin-bottom: 23px;
  }

  button {
    background: #3474ee;
    border-color: #3474ee;
    &:hover {
      background: none;
      color: #3474ee;
      svg path {
        stroke: #3474ee;
      }
    }
  }
}
</style>
