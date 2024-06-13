<template>
  <div
    class="file-upload"
    @dragover.prevent="handleDragOver"
    @drop.prevent="handleDrop"
    @dragenter.prevent="handleDragEnter"
    @dragleave.prevent="handleDragLeave"
  >
    <input
      v-bind="{ id }"
      type="file"
      name="file"
      class="w-0 h-0 absolute"
      :accept="acceptPdf ? 'application/pdf' : 'image/*'"
      multiple
      @change="handleFile"
    />
    <div
      v-if="image?.url"
      class="w-full h-full flex-y-center relative rounded-lg transition-300 hover:border-blue cursor-pointer"
    >
      <div class="absolute top-2 right-2 space-y-2">
        <div
          class="d-flex align-items-center justify-content-center z-20"
          @click="removeImage"
        >
          <p class="file__upload">{{ image?.name }}</p>
          <span
            v-if="deleted"
            class="transition-300 icon-trash text-white text-2xl group-hover:text-red"
          />
        </div>
      </div>
    </div>
    <div
      v-else
      class="w-100 d-flex align-items-center justify-content-center flex-col rounded-lg transition-300 hover:border-green cursor-pointer px-6 py-11 border-2 border-dashed border-green-100"
      :class="[
        {
          '!border-red': error,
        },
      ]"
      @click="getFile('create')"
    >
      <slot>
        <div>
          <div
            class="d-flex align-items-center gap-2 flex-row file-upload__input"
          >
            <span class="text-base leading-normal font-medium text-dark-100">
              {{ $t('select ') }}
            </span>
            {{ $t('or_drag_drop_ur_file') }}
          </div>
        </div>
      </slot>
    </div>
    <div
      v-if="dragging"
      class="delay-75 ease-in w-full h-full bg-dark-100 bg-opacity-80 rounded-lg absolute p-2"
    >
      <div
        class="w-full h-full border-dashed border-2 rounded-md border-white border-opacity-60 flex items-center justify-center"
      >
        <p class="text-white text-base font-bold !leading-[130%]">
          {{ $t('drop_file_here') }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FileUpload',
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    defaultImage: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
    },
    format: {
      type: String,
      default: 'square',
    },
    id: {
      type: String,
      default: '',
    },
    acceptPdf: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      image: null,
      uploadType: '',
      currentTarget: null,
      dragging: false,
      deleted: false,
    }
  },
  methods: {
    getFile(type) {
      this.uploadType = type
      document.getElementById(this.id).click()
    },
    removeImage() {
      this.image = null
      this.send()
    },
    handleFile(event) {
      console.log(event.target.files)
      const target = event?.target
      if (target?.files === null) {
        return
      }
      if (target?.files?.length) {
        this.handleUploader(target)
        // console.log(target?.files)
      }
    },
    handleUploader(target) {
      new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
          resolve(reader.result)
        }
        reader.readAsDataURL(target?.files[0])
        reader.onerror = (error) => reject(error)
      })
        .then((res) => {
          // Do not touch this, or else You will find yourself DEAD!!!
          this.image = target?.files[0]
          this.send()
        })
        .catch(() => {
          // Todo: Toast show
        })
    },
    handleOnDropUploader(target) {
      new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
          resolve(reader.result)
        }
        reader.readAsDataURL(target?.[0])
        reader.onerror = (error) => reject(error)
      })
        .then((res) => {
          // Do not touch this, or else You will find yourself DEAD!!!
          this.image = res
          this.send()
        })
        .catch(() => {
          // Todo: Toast show
        })
    },
    send() {
      this.$emit('change', this.image)
    },
    handleDragOver(event) {
      event.preventDefault()
    },
    handleDragEnter(event) {
      this.dragging = true
      this.currentTarget = event?.target
    },
    handleDragLeave(event) {
      if (event?.target === this.currentTarget) {
        this.currentTarget = null
        this.dragging = false
      }
    },
    handleDrop(event) {
      event.preventDefault()
      this.dragging = false
      this.uploadType = 'create'
      const files = event.dataTransfer?.files
      this.handleOnDropUploader(files)
      this.send()
    },
  },
}
</script>
<style scoped>
.color {
  color: #e74c3c;
}
.file__upload {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  margin-bottom: 0 !important;
}
</style>
