<template>
  <div>
    <div class="download__file" :class="{ _error: error }">
      <div
        :class="!multiple ? 'once' : ''"
        class="drop-photo-input drop-photo-input-dropzone"
        @dragover="dragover"
        @dragleave="dragleave"
        @drop="drop"
      >
        <label
          class="drop-photo-input__label"
          :class="files.length > 0 ? 'hidden-text' : ''"
        >
          <div class="drop-photo-input__title">
            <div>
              <div class="text-file"></div>
              <div class="download__here">
                <span>{{ title }}</span>
                <a
                  :href="null"
                  class="d-flex align-items-center justify-content-center btn btn-light-blue"
                >
                  <i>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 14.3669H15.4688C17.6172 14.3669 19.375 13.2259 19.375 11.1013C19.375 8.97665 17.3047 7.91883 15.625 7.83563C15.2777 4.51298 12.8516 2.49188 10 2.49188C7.30469 2.49188 5.56875 4.28055 5 6.05438C2.65625 6.27704 0.625 7.76845 0.625 10.2106C0.625 12.6528 2.73438 14.3669 5.3125 14.3669H7.5"
                        stroke="#3474EE"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 9.99188L10 7.49188L7.5 9.99188"
                        stroke="#3474EE"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 17.5083V8.11688"
                        stroke="#3474EE"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </i>
                  {{ $t('down_load') }}
                </a>
              </div>
            </div>
          </div>
          <b-form-file
            ref="file"
            :disabled="files.length !== 0 && !multiple"
            :multiple="multiple"
            class="d-none"
            :accept="acceptTypes"
            @input="onInput"
          />
        </label>
      </div>
    </div>
    <!--    <p>Video, JPG, PPT, Word, PDF <b>( Max: 50mb )</b></p>-->

    <ul v-if="files && files.length" class="files">
      <li
        v-for="file in files"
        :key="file.id"
        class="d-flex align-items-center justify-content-between"
      >
        <div class="d-flex align-items-center">
          <i>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1499 41.25C8.94076 41.25 7.1499 39.4591 7.1499 37.25V6.75C7.1499 4.54086 8.94076 2.75 11.1499 2.75H25.6153C26.6762 2.75 27.6936 3.17143 28.4438 3.92157L35.6783 11.1561C36.4285 11.9063 36.8499 12.9237 36.8499 13.9846V37.25C36.8499 39.4591 35.059 41.25 32.8499 41.25H11.1499Z"
                fill="white"
              />
              <path
                d="M24.9736 3.3002C26.2997 3.3002 27.5715 3.82698 28.5092 4.76466L34.8356 11.0911C35.7733 12.0288 36.3001 13.3006 36.3001 14.6267V35.7002C36.3001 38.4616 34.0615 40.7002 31.3001 40.7002H11.7001C9.49096 40.7002 7.7001 38.9093 7.7001 36.7002V7.30019C7.7001 5.09105 9.49096 3.3002 11.7001 3.3002H24.9736ZM28.9646 3.66466C28.0269 2.72698 26.7551 2.2002 25.429 2.2002H11.6001C8.83867 2.2002 6.6001 4.43877 6.6001 7.2002V36.8002C6.6001 39.5616 8.83867 41.8002 11.6001 41.8002H32.4001C35.1615 41.8002 37.4001 39.5616 37.4001 36.8002V14.1713C37.4001 12.8452 36.8733 11.5734 35.9356 10.6357L28.9646 3.66466Z"
                fill="#788B9C"
              />
              <path
                d="M25.5078 41.8H37.3999V23.0351C37.0402 22.9284 36.6739 22.8382 36.2999 22.7656V40.7H24.6289C24.8984 41.0861 25.1943 41.4502 25.5078 41.8Z"
                fill="#C5D4DE"
              />
              <path
                d="M26.9502 12.65V2.75H27.2725L36.8502 12.3277V12.65H26.9502Z"
                fill="white"
              />
              <path
                d="M27.4999 3.75549L35.8445 12.1001H28.4999C27.9476 12.1001 27.4999 11.6524 27.4999 11.1001V3.75549ZM28.2893 3.28934C27.7757 2.77574 27.1157 2.43382 26.3999 2.31055V11.2001C26.3999 12.3047 27.2953 13.2001 28.3999 13.2001H37.3083C37.1065 12.4145 36.6974 11.6974 36.1238 11.1238L28.2893 3.28934Z"
                fill="#788B9C"
              />
              <path
                d="M34.1 24.75C31.6202 24.75 29.242 25.7351 27.4886 27.4886C25.7351 29.242 24.75 31.6202 24.75 34.1C24.75 36.5798 25.7351 38.958 27.4886 40.7114C29.242 42.4649 31.6202 43.45 34.1 43.45C36.5798 43.45 38.958 42.4649 40.7114 40.7114C42.4649 38.958 43.45 36.5798 43.45 34.1C43.45 31.6202 42.4649 29.242 40.7114 27.4886C38.958 25.7351 36.5798 24.75 34.1 24.75Z"
                fill="#BAE0BD"
              />
              <path
                d="M34.1002 25.3002C38.9523 25.3002 42.9002 29.2481 42.9002 34.1002C42.9002 38.9523 38.9523 42.9002 34.1002 42.9002C29.2481 42.9002 25.3002 38.9523 25.3002 34.1002C25.3002 29.2481 29.2481 25.3002 34.1002 25.3002ZM34.1002 24.2002C28.6321 24.2002 24.2002 28.6321 24.2002 34.1002C24.2002 39.5683 28.6321 44.0002 34.1002 44.0002C39.5683 44.0002 44.0002 39.5683 44.0002 34.1002C44.0002 28.6321 39.5683 24.2002 34.1002 24.2002Z"
                fill="#5E9C76"
              />
              <path
                d="M29.5029 34.1275L32.5499 37.1734L39.4029 30.3193"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
              />
            </svg>
          </i>
        </div>
        <div class="file-name">{{ file.file.name }}</div>
        <div v-if="file.state === 'error'" class="label label_danger-msg">
          Yuklanmadi
        </div>
        <div v-if="file.state === 'uploading'" class="progress-line">
          <div
            class="progress-line__bar"
            :style="{ width: (file.progress || 0) + '%' }"
          ></div>
        </div>
        <div
          v-if="file.state === 'error'"
          class="label label_danger ml-2 flex-shrink-0 cursor-pointer"
          @click="uploadFile(file.id)"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1.875C5.51992 1.875 1.875 5.52031 1.875 10C1.875 14.4867 5.51328 18.125 10 18.125C14.4801 18.125 18.125 14.4801 18.125 10C18.125 5.51289 14.4871 1.875 10 1.875ZM10 14.1016C9.02616 14.1016 8.0922 13.7147 7.40359 13.0261C6.71498 12.3375 6.32812 11.4035 6.32812 10.4297C6.32812 9.45585 6.71498 8.52189 7.40359 7.83328C8.0922 7.14467 9.02616 6.75781 10 6.75781H10.1645L9.61328 6.20703C9.51072 6.10447 9.4531 5.96536 9.4531 5.82031C9.4531 5.67526 9.51072 5.53616 9.61328 5.43359C9.71585 5.33103 9.85495 5.27341 10 5.27341C10.145 5.27341 10.2842 5.33103 10.3867 5.43359L11.9492 6.99609C12 7.04688 12.0403 7.10717 12.0678 7.17352C12.0953 7.23987 12.1094 7.31099 12.1094 7.38281C12.1094 7.45463 12.0953 7.52575 12.0678 7.59211C12.0403 7.65846 12 7.71875 11.9492 7.76953L10.3867 9.33203C10.2842 9.4346 10.145 9.49222 10 9.49222C9.85495 9.49222 9.71585 9.4346 9.61328 9.33203C9.51072 9.22947 9.4531 9.09036 9.4531 8.94531C9.4531 8.80026 9.51072 8.66116 9.61328 8.55859L10.3164 7.85547C10.2234 7.85156 10.1172 7.85156 10 7.85156C9.4901 7.85156 8.99164 8.00277 8.56767 8.28605C8.1437 8.56934 7.81326 8.97199 7.61812 9.44308C7.42299 9.91417 7.37194 10.4325 7.47141 10.9327C7.57089 11.4328 7.81643 11.8921 8.17699 12.2527C8.53755 12.6133 8.99693 12.8588 9.49703 12.9583C9.99714 13.0578 10.5155 13.0067 10.9866 12.8116C11.4577 12.6164 11.8603 12.286 12.1436 11.862C12.4269 11.438 12.5781 10.9396 12.5781 10.4297C12.5781 10.2846 12.6357 10.1455 12.7383 10.043C12.8409 9.94043 12.98 9.88281 13.125 9.88281C13.27 9.88281 13.4091 9.94043 13.5117 10.043C13.6143 10.1455 13.6719 10.2846 13.6719 10.4297C13.6707 11.4032 13.2835 12.3365 12.5952 13.0248C11.9068 13.7132 10.9735 14.1004 10 14.1016Z"
              fill="#F54363"
            />
          </svg>
        </div>
        <div
          v-else
          class="label ml-2 flex-shrink-0 cursor-pointer"
          @click="removeFile(file.id)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 5.25L6.1875 20.25C6.23203 21.1167 6.8625 21.75 7.6875 21.75H16.3125C17.1408 21.75 17.7595 21.1167 17.8125 20.25L18.75 5.25"
              stroke="#EB5757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.75 5.25H20.25"
              stroke="#EB5757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M9 5.25V3.375C8.99957 3.22715 9.02838 3.08066 9.08476 2.94397C9.14114 2.80729 9.22399 2.6831 9.32854 2.57854C9.4331 2.47399 9.55729 2.39114 9.69397 2.33476C9.83066 2.27838 9.97715 2.24957 10.125 2.25H13.875C14.0229 2.24957 14.1693 2.27838 14.306 2.33476C14.4427 2.39114 14.5669 2.47399 14.6715 2.57854C14.776 2.6831 14.8589 2.80729 14.9153 2.94397C14.9716 3.08066 15.0004 3.22715 15 3.375V5.25"
              stroke="#EB5757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 8.25V18.75"
              stroke="#EB5757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.625 8.25L9 18.75"
              stroke="#EB5757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.375 8.25L15 18.75"
              stroke="#EB5757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <!--          <div class="label" v-if="file.state === 'uploaded'">
          {{ file.sizeH }}
        </div>-->
      </li>
    </ul>
  </div>
</template>

<script>
import mime from 'mime-types'

export default {
  name: 'UploadFiles',
  props: ['multiple', 'dataFiles', 'error', 'title', 'accept'],
  data: () => ({
    i: 0,
    files: [],
  }),
  computed: {
    acceptTypes() {
      switch (this.accept) {
        case 'image':
          return 'image/png, image/jpeg, image/jpg, image/gif, image/webp'
        case 'document':
          return 'application/pdf, application/msword, application/msword'
        default:
          return '*/*'
      }
    },
  },
  watch: {
    dataFiles(item) {
      if (this.dataFiles) {
        if (this.dataFiles.length) {
          this.files = this.dataFiles
          this.i = this.dataFiles.length
        } else {
          this.files.push(this.dataFiles)
        }
      }
    },
  },
  methods: {
    getFileSize(size) {
      let extension = 'b'
      if (size > 1024) {
        size = size / 1024
        extension = 'Kb'
      }
      if (size > 1024) {
        size = size / 1024
        extension = 'Mb'
      }
      if (size > 1024) {
        size = size / 1024
        extension = 'Gb'
      }
      return Math.round(size * 100) / 100 + ' ' + extension
    },

    async onInput(files) {
      if (Array.isArray(files)) {
        for (let i = 0; i < files.length; i++) {
          if (files[i].size <= 52428800) {
            this.$emit('file-added', await this.handleFile(files[i]))
          } else {
            this.$toast.error(this.$t('toast.error'), {
              position: 'top-right',
              timeout: 3000,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              draggable: true,
              draggablePercent: 0.6,
              showCloseButtonOnHover: false,
              hideProgressBar: true,
              closeButton: 'button',
              icon: false,
              rtl: false,
            })
          }
        }
      } else if (files) {
        if (files.size <= 52428800) {
          this.$emit('file-added', await this.handleFile(files))
        } else {
          this.$toast.error(this.$t('toast.error'), {
            position: 'top-right',
            timeout: 3000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: 'button',
            icon: false,
            rtl: false,
          })
        }
      }

      this.$refs.file.reset()
    },

    handleFile(file) {
      if (!this.acceptTypes.includes(file.type) && this.acceptTypes !== '*/*') {
        this.$toast.error(this.$t('file_type_invalid'))
        return
      }
      const object = {
        id: ++this.i,
        file,
        type: mime.extension(file.type),
        sizeH: this.getFileSize(file.size),
        state: 'uploading',
        progress: 0,
        cancelToken: this.$axios.CancelToken.source(),
        response: undefined,
      }

      this.files.push(object)
      this.uploadFile(this.i)
      return object
    },

    async uploadFile(id) {
      const file = this.files.find((f) => f.id === id)

      if (file && this.acceptTypes.includes(file.file.type)) {
        file.progress = 0
        file.state = 'uploading'

        const fd = new FormData()
        fd.append('file', file.file)

        await this.$axios
          .$post('vacancy-form/file-upload/', fd, {
            onUploadProgress: (pe) => {
              file.progress = Math.round((pe.loaded / pe.total) * 100)
            },
            cancelToken: file.cancelToken.token,
          })
          .then((r) => {
            file.state = 'uploaded'
            file.response = r
            this.$emit('file-uploaded', file)
          })
          .catch(() => {
            file.state = 'error'
          })
      } else {
        console.log('------ error -------')
      }
    },

    async removeFile(id) {
      const index = this.files.findIndex((f) => f.id === id)
      if (index !== -1) {
        const file = this.files[index]
        if (file) {
          if (file.response) {
            await this.$axios
              .$delete(`vacancy-form/file-delete/${file.response.id}/`, {
                headers: {
                  Authorization: this.$store.getters.token,
                },
              })
              .then((r) => {
                this.$emit('file-removed', file)
                this.files.splice(index, 1)
              })
              .catch(() => {})
          } else {
            // file.cancelToken.cancel();
            this.$emit('file-removed', file)
            this.files.splice(index, 1)
          }
        } else {
          this.$emit('file-removed', file)

          this.files.splice(index, 1)
        }
      }
    },

    dragover(event) {
      event.preventDefault()
      if (!event.currentTarget.classList.contains('dropzone--active')) {
        event.currentTarget.classList.remove('dropzone--disabled')
        event.currentTarget.classList.add('dropzone--active')
      }
    },

    dragleave(event) {
      event.currentTarget.classList.add('dropzone--disabled')
      event.currentTarget.classList.remove('dropzone--active')
    },

    drop(event) {
      event.preventDefault()
      this.$refs.file.files = event.dataTransfer.files
      event.currentTarget.classList.add('dropzone--disabled')
      event.currentTarget.classList.remove('dropzone--active')
    },
  },

  // mounted() {
  //   if (this.dataFiles) {
  //     this.files.push(this.dataFiles)
  //
  //   }
  //   console.log(this.dataFiles)
  //   console.log(this.files)
  //
  // }
}
</script>

<style lang="scss">
.download__file {
  .drop-photo-input__label {
    .drop-photo-input__title {
      background: #f9fafc;
      border: 1px dashed #e6e8ec;
      border-radius: 2px;
      width: 100%;
      padding: 10px 12px;
      .download__here {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-weight: 500;
          font-size: 1rem;
          line-height: 20px;
          color: #c5ccd5;
        }
        .btn-light-blue {
          background: rgba(52, 116, 238, 0.1);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3474ee;
          font-weight: 500;
          font-size: 1rem;
          line-height: 20px;
          padding: 12px 16px;
          i {
            margin-right: 10px;
          }
        }
      }
    }
  }
}

.hasError {
  .download__file {
    .drop-photo-input__label {
      .drop-photo-input__title {
        border: 1px dashed red !important;
      }
    }
  }
}

.download__file._error {
  border: 1px solid red;
}

.files {
  li {
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;

    i {
      min-width: 44px;
      margin-right: 11px;
    }
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .file-name {
    font-size: 1.125rem;
    line-height: 22px;
    color: #25385b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  .label {
    //background: rgba(77, 148, 255, 0.1);
    color: #4d94ff;
    border-radius: 8px;
    padding: 6px;

    &_danger-msg {
      padding: 0;
      position: absolute;
      left: 56px;
      bottom: -10px;
      background: transparent;
      color: #f54363;
    }
  }

  .progress-line {
    background: rgba(77, 148, 255, 0.1);
    border-radius: 3px;
    position: absolute;
    left: 50px;
    right: 0;
    bottom: -6px;

    &__bar {
      width: 0;
      height: 4px;
      background: #3699ff;
      border-radius: 2px;
      transition: all 0.6s;
    }
  }
}

.download__file {
  .once {
    .hidden-text {
      display: none;
    }
  }
}
</style>
