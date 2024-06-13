<template>
  <div>
    <div
      :class="[
        'h-full w-full flex items-center rounded transition-300 hover:border-blue cursor-pointer',
        {
          'border border-dashed border-gray-100': !images.length,
          'border-red': error,
        },
      ]"
    >
      <input
        id="file"
        type="file"
        name="file"
        class="w-0 h-0 absolute"
        accept="image/png, image/jpeg"
        multiple
        @change="handleFile"
      />
      <div v-if="images.length" class="flex gap-3">
        <div
          v-for="(item, index) in images"
          :key="index"
          class="w-[68px] h-[68px] flex-y-center relative"
        >
          <img
            :src="item.url"
            alt="avatar"
            class="w-[68px] h-[68px] object-cover relative z-0 rounded"
            @error="item.url = null"
          />
          <div
            class="transition-300 group absolute top-1 right-1 w-5 h-5 bg-red flex items-center justify-center z-20 rounded cursor-pointer border border-transparent hover:scale-110"
            @click="removeImage(index)"
          >
            <span class="transition-300 icon-trash text-white text-base"></span>
          </div>
        </div>
        <div
          class="w-[68px] h-[68px] flex-center relative border-2 border-dashed border-blue rounded bg-white-100 transition-300 group"
          @click="getFile"
        >
          <i
            class="icon-plus-circle transition-300 text-blue text-2xl group-hover:scale-110"
          ></i>
        </div>
      </div>
      <div
        v-else
        class="w-full h-full py-3 backdrop-blur bg-gray-150 flex items-center justify-center flex-col gap-5"
        @click="getFile"
      >
        <slot>
          <div class="text-base flex-center">
            <i class="icon-link text-gray text-2xl mr-2.5"></i>
            <span class="leading-130 text-dark font-medium"
              >Перетащите файл</span
            >
            <span class="text-dark leading-130 mx-1">или</span>
            <span class="text-blue">выберите</span>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: String,
    small: Boolean,
    error: Boolean,
    desc: String,
    defaultImages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      images: [],
    }
  },
  watch: {
    defaultImages: {
      handler(value) {
        if (value) {
          value.forEach((item) => {
            this.images.push({
              url: item,
              name: '',
              file: new File([], item),
              type: 'image',
            })
          })
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    async handleFile(event) {
      const target = event?.target
      if (target?.files === null) {
        return
      }
      if (target?.files?.length) {
        for (const key in target?.files) {
          if (target?.files[key].type?.includes('video')) {
            console.log('video')
            const video = document.createElement('video')
            video.src = URL.createObjectURL(target?.files[key])
            video.addEventListener('loadedmetadata', () => {
              const canvas = document.createElement('canvas')
              canvas.width = video.videoWidth
              canvas.height = video.videoHeight
              const ctx = canvas.getContext('2d')
              ctx?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
              const thumbnail = canvas.toDataURL('image/png')
              this.images.push({
                url: thumbnail,
                name: target?.files[key].name,
                file: target?.files[key],
                type: 'video',
              })
            })
          } else {
            await new Promise((resolve, reject) => {
              const reader = new FileReader()
              reader.onload = () => {
                resolve(reader.result)
              }
              reader.readAsDataURL(target?.files[key])
              reader.onerror = (error) => reject(error)
            })
              .then((res) => {
                this.images.push({
                  url: res,
                  name: target?.files[key].name,
                  file: target?.files[key],
                  type: 'image',
                })
              })
              .catch((err) => {
                console.log(err)
              })
          }
        }
      }
      this.send()
    },
    getFile() {
      const input = document.getElementById('file')
      input?.click()
    },
    removeImage(index) {
      this.images.splice(index, 1)
      this.send()
    },
    send() {
      this.$emit('change', this.images)
    },
  },
}
</script>

<style scoped>
.color {
  color: #e74c3c;
}
</style>
