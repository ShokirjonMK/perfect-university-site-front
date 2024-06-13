<template>
  <div>
    <div class="share d-flex justify-content-between print-block">
      <div class="d-flex left__link">
        <div class="share_wrapper">
          <button-share class="share__button" :title="title" />
          <button class="print-page print-page_mobile" @click="printPage()">
            {{ $t('print') }}
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4615 19.654H21.673C22.208 19.6524 22.7207 19.4391 23.099 19.0608C23.4774 18.6824 23.6906 18.1698 23.6922 17.6347V9.55781C23.6906 9.02276 23.4774 8.51009 23.099 8.13176C22.7207 7.75343 22.208 7.54017 21.673 7.53857H6.32685C5.79181 7.54017 5.27913 7.75343 4.9008 8.13176C4.52247 8.51009 4.30922 9.02276 4.30762 9.55781V17.6347C4.30922 18.1698 4.52247 18.6824 4.9008 19.0608C5.27913 19.4391 5.79181 19.6524 6.32685 19.654H7.53839"
                  stroke="#2678D9"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.2335 13.1924H8.76578C8.08774 13.1924 7.53809 13.742 7.53809 14.4201V22.4647C7.53809 23.1427 8.08774 23.6924 8.76578 23.6924H19.2335C19.9115 23.6924 20.4612 23.1427 20.4612 22.4647V14.4201C20.4612 13.742 19.9115 13.1924 19.2335 13.1924Z"
                  stroke="#2678D9"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.4612 7.53839V6.32685C20.4596 5.79181 20.2463 5.27913 19.868 4.9008C19.4896 4.52247 18.977 4.30922 18.4419 4.30762H9.55732C9.02227 4.30922 8.5096 4.52247 8.13127 4.9008C7.75294 5.27913 7.53968 5.79181 7.53809 6.32685V7.53839"
                  stroke="#2678D9"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.8658 11.5769C21.5349 11.5769 22.0774 11.0345 22.0774 10.3653C22.0774 9.69623 21.5349 9.15381 20.8658 9.15381C20.1967 9.15381 19.6543 9.69623 19.6543 10.3653C19.6543 11.0345 20.1967 11.5769 20.8658 11.5769Z"
                  fill="#2678D9"
                />
              </svg>
            </span>
          </button>
        </div>
        <div class="copyUrl position-relative pb-0">
          <p>
            {{ returnUrl(url) }}
          </p>
          <span @click="copyUrl">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7503 2.75V5.86667C13.7503 6.38005 13.7503 6.63674 13.8502 6.83282C13.9381 7.00531 14.0784 7.14554 14.2508 7.23342C14.4469 7.33333 14.7036 7.33333 15.217 7.33333H18.3337M9.16699 7.33333H5.50033C4.4878 7.33333 3.66699 8.15414 3.66699 9.16667V17.4167C3.66699 18.4292 4.4878 19.25 5.50033 19.25H11.0003C12.0128 19.25 12.8337 18.4292 12.8337 17.4167V14.6667M14.667 2.75H12.1003C11.0736 2.75 10.5602 2.75 10.168 2.94982C9.82305 3.12559 9.54258 3.40605 9.36681 3.75102C9.16699 4.14319 9.16699 4.65657 9.16699 5.68333V11.7333C9.16699 12.7601 9.16699 13.2735 9.36681 13.6656C9.54258 14.0106 9.82305 14.2911 10.168 14.4668C10.5602 14.6667 11.0736 14.6667 12.1003 14.6667H15.4003C16.4271 14.6667 16.9405 14.6667 17.3326 14.4668C17.6776 14.2911 17.9581 14.0106 18.1338 13.6656C18.3337 13.2735 18.3337 12.7601 18.3337 11.7333V6.41667L14.667 2.75Z"
                stroke="#2678D9"
                stroke-width="1.6"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div v-if="isCopied" class="tooltip">{{ $t('copied') }}</div>
        </div>
      </div>
      <div>
        <button class="print-page" @click="printPage">
          {{ $t('print') }}
          <span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4615 19.654H21.673C22.208 19.6524 22.7207 19.4391 23.099 19.0608C23.4774 18.6824 23.6906 18.1698 23.6922 17.6347V9.55781C23.6906 9.02276 23.4774 8.51009 23.099 8.13176C22.7207 7.75343 22.208 7.54017 21.673 7.53857H6.32685C5.79181 7.54017 5.27913 7.75343 4.9008 8.13176C4.52247 8.51009 4.30922 9.02276 4.30762 9.55781V17.6347C4.30922 18.1698 4.52247 18.6824 4.9008 19.0608C5.27913 19.4391 5.79181 19.6524 6.32685 19.654H7.53839"
                stroke="#2678D9"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M19.2335 13.1924H8.76578C8.08774 13.1924 7.53809 13.742 7.53809 14.4201V22.4647C7.53809 23.1427 8.08774 23.6924 8.76578 23.6924H19.2335C19.9115 23.6924 20.4612 23.1427 20.4612 22.4647V14.4201C20.4612 13.742 19.9115 13.1924 19.2335 13.1924Z"
                stroke="#2678D9"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M20.4612 7.53839V6.32685C20.4596 5.79181 20.2463 5.27913 19.868 4.9008C19.4896 4.52247 18.977 4.30922 18.4419 4.30762H9.55732C9.02227 4.30922 8.5096 4.52247 8.13127 4.9008C7.75294 5.27913 7.53968 5.79181 7.53809 6.32685V7.53839"
                stroke="#2678D9"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M20.8658 11.5769C21.5349 11.5769 22.0774 11.0345 22.0774 10.3653C22.0774 9.69623 21.5349 9.15381 20.8658 9.15381C20.1967 9.15381 19.6543 9.69623 19.6543 10.3653C19.6543 11.0345 20.1967 11.5769 20.8658 11.5769Z"
                fill="#2678D9"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HashTags',

  data() {
    return {
      title: this.$t('university_name'),
      url: '',
      isCopied: false,
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
  methods: {
    printPage() {
      window.print()
    },
    returnUrl() {
      return (this.url = window.location.href)
    },
    copyUrl() {
      if (this.url !== '') {
        if (navigator.clipboard) {
          navigator.clipboard
            .writeText(this.url)
            .then(() => {
              this.isCopied = true
              setTimeout(() => {
                this.isCopied = false
              }, 2000)
            })
            .catch((error) => {
              console.error('Failed to copy', error)
            })
        } else {
          // Fallback for browsers that do not support navigator.clipboard
          const tempInput = document.createElement('input')
          tempInput.value = this.url
          document.body.appendChild(tempInput)
          tempInput.select()
          document.execCommand('copy')
          document.body.removeChild(tempInput)
          this.isCopied = true
          setTimeout(() => {
            this.isCopied = false
          }, 2000)
        }
      }
    },
  },
}
</script>

<style lang="scss">
.share {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e7e9ed;
  margin-bottom: 64px;
  gap: 20px;

  &_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .print-page {
      width: 100%;
      display: flex !important;
      justify-content: space-between;
      @media screen and (min-width: 768px) {
        display: none !important;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .share__link {
      width: 100%;
      justify-content: space-between;
    }
  }

  &__button {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 12px;
    margin-bottom: 32px;
    margin-top: 20px;
    padding-top: 20px;
    flex-direction: column;
  }

  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 24px;
    color: #9fabb9;
    margin-right: 8px;
  }
  svg {
    transition: 0.3s all;
    &:hover {
      transform: translateY(-3px);
    }
  }

  button {
    display: flex;
    padding-left: 12px;
    align-items: center;
    gap: 12px;
    border-radius: 12px;
    background: white;
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 1.25rem;
      line-height: 24px;
      color: #9fabb9;
    }
  }
}
.print-page {
  color: #1d2024;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 768px) {
    display: none !important;
  }
  & span {
    padding: 9px;
    border-radius: 8px;
    border: 1px solid #e8edf2;
    background: rgba(233, 237, 242, 0.6);
  }
}
.copyUrl {
  border-radius: 8px;
  border: 1px solid #e8edf2;
  background: #fff;
  display: flex;
  align-items: center;
  padding-left: 12px;
  width: max-content;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }

  & p {
    display: inline-block;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 205px;
    color: #1d2024;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0 !important;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  & span {
    padding: 9px;
    border-radius: 8px;
    border: 1px solid #e8edf2;
    background: rgba(233, 237, 242, 0.6);
    cursor: pointer;
    margin-left: 12px;
  }
}
.tooltip {
  position: absolute;
  color: #1d2024;
  font-size: 1rem;
  font-weight: 400;
  top: -40px;
  right: -10px;
  animation: fadeOut 3s forwards;
  background: white;
  padding: 6px;
  border-radius: 8px;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.dropdown-toggle {
  color: #1d2024;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.left__link {
  gap: 20px;
  @media screen and (max-width: 768px) {
    gap: 12px;
    flex-direction: column;
  }
}
</style>

<style scoped>
.btn-group {
  border-radius: 8px;
  border: 1px solid #e8edf2;
  background: #fff;
}
</style>
