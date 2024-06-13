<template>
  <DropdownBase body-class="share__link-body">
    <template #head>
      <div class="share__link">
        <p class="">
          {{ $t('share') }}
        </p>
        <button class="">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25033 10.9997C8.25033 12.2653 7.22431 13.2913 5.95866 13.2913C4.69301 13.2913 3.66699 12.2653 3.66699 10.9997C3.66699 9.73402 4.69301 8.70801 5.95866 8.70801C7.22431 8.70801 8.25033 9.73402 8.25033 10.9997Z"
              stroke="#2678D9"
              stroke-width="1.6"
            />
            <path
              d="M12.8333 5.95801L8.25 9.16634"
              stroke="#2678D9"
              stroke-width="1.6"
              stroke-linecap="round"
            />
            <path
              d="M12.8333 16.042L8.25 12.8337"
              stroke="#2678D9"
              stroke-width="1.6"
              stroke-linecap="round"
            />
            <path
              d="M17.4163 16.9587C17.4163 18.2243 16.3903 19.2503 15.1247 19.2503C13.859 19.2503 12.833 18.2243 12.833 16.9587C12.833 15.693 13.859 14.667 15.1247 14.667C16.3903 14.667 17.4163 15.693 17.4163 16.9587Z"
              stroke="#2678D9"
              stroke-width="1.6"
            />
            <path
              d="M17.4163 5.04167C17.4163 6.30732 16.3903 7.33333 15.1247 7.33333C13.859 7.33333 12.833 6.30732 12.833 5.04167C12.833 3.77601 13.859 2.75 15.1247 2.75C16.3903 2.75 17.4163 3.77601 17.4163 5.04167Z"
              stroke="#2678D9"
              stroke-width="1.6"
            />
          </svg>
        </button>
      </div>
    </template>
    <template #body>
      <div class="share__link-items">
        <ShareNetwork
          v-if="title"
          network="telegram"
          :url="getCurrentUrl"
          :title="title"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
              fill="#2678D9"
            />
          </svg>
          Telegram
        </ShareNetwork>
        <ShareNetwork
          v-if="title"
          network="twitter"
          :url="getCurrentUrl"
          :title="title"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="#2678D9"
              d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
            />
          </svg>
          Twitter
        </ShareNetwork>
        <ShareNetwork
          v-if="title"
          network="facebook"
          :url="getCurrentUrl"
          :title="title"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="#2678D9"
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
            />
          </svg>
          Facebook
        </ShareNetwork>
      </div>
    </template>
  </DropdownBase>
</template>

<script>
export default {
  props: {
    title: '',
  },
  data() {
    return {
      socials: ['facebook', 'telegram', 'twitter'],
    }
  },
  computed: {
    getCurrentUrl() {
      if (process.client) {
        return document.location.toString()
      } else {
        return ''
      }
    },
  },
}
</script>

<style lang="scss">
.share__link {
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  border-radius: 8px;
  border: 1px solid #e8edf2;
  background: #fff;
  padding-left: 12px;
  width: max-content;
}
.share__link p {
  color: #1d2024;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0 !important;
}
.share__link button {
  display: flex;
  padding: 9px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: rgba(233, 237, 242, 0.6);

  & svg {
    transition: 0.3s all;
    &:hover {
      transform: translateY(-3px);
    }
  }
}

.share__link-items {
  position: absolute;
  display: flex;
  flex-direction: column;
  background: white;
  width: max-content;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}
.share__link-items > a {
  color: #1d2024;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 8px 12px;
}
.share__link-items > a:hover {
  background: #f2f4f7;
  border-radius: 8px;
}

.share__link-body {
  position: relative;
  z-index: 9999;
}
</style>
