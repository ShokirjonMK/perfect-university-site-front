<template>
  <div class="internet-card">
    <h3 class="internet-card-title mb-2">{{ title }}</h3>
    <a class="internet-card-link" :href="file" download="book.pdf">
      <span v-if="download">Formats available for download:</span>
      <a v-else :href="url" target="_blank">
        {{ url?.replace(/^https?:\/\//, '') }}
      </a>
      <svg
        v-if="download"
        class="ml-2"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M15.0007 18.3337H5.00065C4.08398 18.3337 3.33398 17.5837 3.33398 16.667V14.167H5.00065V16.667H15.0007V6.50033L11.834 3.33366H5.00065V8.33366H3.33398V3.33366C3.33398 2.41699 4.08398 1.66699 5.00065 1.66699H12.5007L16.6673 5.83366V16.667C16.6673 17.5837 15.9173 18.3337 15.0007 18.3337Z"
          fill="#2678D9"
        />
        <path
          d="M15.416 6.66699H11.666V2.91699L15.416 6.66699Z"
          fill="#2678D9"
        />
        <path
          d="M4.58268 10H4.16602V10.8333H4.58268C4.83268 10.8333 4.99935 10.6667 4.99935 10.4167C4.99935 10.1667 4.83268 10 4.58268 10ZM7.99935 10H7.49935V12.5H7.99935C8.49935 12.5 9.16602 12.3333 9.16602 11.5833V10.9167C9.16602 10.1667 8.58268 10 7.99935 10Z"
          fill="#2678D9"
        />
        <path
          d="M3.33268 7.5C2.41602 7.5 1.66602 8.25 1.66602 9.16667V13.3333C1.66602 14.25 2.41602 15 3.33268 15H15.8327V7.5H3.33268ZM4.58268 11.6667H4.16602V13.3333H3.33268V9.16667H4.58268C5.24935 9.16667 5.83268 9.75 5.83268 10.4167C5.83268 11.0833 5.24935 11.6667 4.58268 11.6667ZM9.99935 11.5833C9.99935 12.5833 9.33268 13.3333 7.99935 13.3333H6.66602V9.16667H7.99935C9.33268 9.16667 9.99935 10 9.99935 10.9167V11.5833ZM13.3327 10H11.666V10.8333H12.9993V11.6667H11.666V13.3333H10.8327V9.16667H13.3327V10Z"
          fill="#2678D9"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ResourcesCard',

  props: {
    url: String,
    download: {
      type: Boolean,
      default: false,
    },
    file: String,
    title: String,
  },
}
</script>

<style lang="scss" scoped>
.internet-card {
  border-radius: 12px;
  border: 1px solid #e9edf2;
  background: #fff;
  box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);
  padding: 20px 0 24px 20px;
  margin-top: 16px;

  &-title {
    color: #1d2024;
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
  }

  &-link {
    color: #2678d9;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }
}
</style>
