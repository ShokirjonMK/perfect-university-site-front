<template>
  <button class="button" :class="variant" @click.prevent="$emit('click')">
    {{ $t(title) }}
    <i v-if="icon" :class="iconClass" />
    <img v-else-if="imgIcon" :src="iconStatic" alt="Icon image" />
    <svg
      v-else-if="iconContact"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.62523 8.99988H4.06404M3.93475 9.59779L3.18118 11.8488C2.76846 13.0817 2.56209 13.6981 2.71019 14.0777C2.8388 14.4074 3.11502 14.6573 3.45585 14.7524C3.84833 14.8619 4.44113 14.5952 5.62673 14.0617L13.2275 10.6413C14.3848 10.1206 14.9634 9.86018 15.1422 9.49846C15.2976 9.18421 15.2976 8.81549 15.1422 8.50124C14.9634 8.13952 14.3848 7.87915 13.2275 7.35839L5.61362 3.93215C4.4316 3.40024 3.84058 3.13429 3.44849 3.24339C3.10798 3.33813 2.83179 3.5874 2.70274 3.91645C2.55414 4.29534 2.75829 4.91043 3.16661 6.14063L3.93622 8.45935C4.00635 8.67064 4.04141 8.77628 4.05525 8.88433C4.06753 8.98021 4.06741 9.07727 4.05488 9.17311C4.04076 9.28113 4.00542 9.38668 3.93475 9.59779Z"
        stroke="white"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>
<script>
export default {
  name: 'ButtonMore',
  props: {
    title: {
      type: String,
      default: 'view_all',
    },
    buttonLink: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '/',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    icon: {
      type: Boolean,
      default: true,
    },
    iconContact: {
      type: Boolean,
      default: true,
    },
    iconClass: {
      type: String,
      default: 'fas fa-arrow-right',
    },
    imgIcon: {
      type: Boolean,
      default: false,
    },
    iconStatic: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;

  transition: all 0.3s linear;
}
.primary {
  border: 1px solid #d7dce0;
  background: #e9edf2;
  padding: 8px 24px;
  color: #1d2024;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  i {
    font-size: 1rem;
    color: inherit;
  }

  &:hover {
    background: #d5dce3;
  }
}
.secondary {
  border: 1px solid transparent;
  background: #1c89c1;
  color: white;
  padding: 12px 25px;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  i {
    font-size: 1rem;
    color: white;
  }
  &:hover {
    background: #1967b0;
  }
}

.outline-secondary {
  padding: 12px 41px;
  border-radius: 8px;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  background: rgba(28, 137, 193, 0.16);
  border: 1px solid transparent;
  color: #1c89c1;
}
.light-variant {
  padding: 12px 41px;
  border-radius: 8px;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  background: #fff;
  color: #1d2024;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
}
</style>
<script setup></script>
