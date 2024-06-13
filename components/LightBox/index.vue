<template>
  <div v-if="index !== null" class="lightbox">
    <div class="content">
      <video
        v-if="isVideo(items[index]?.file) || isVideo(items[index]?.url)"
        :src="items[index]?.file"
        controls
      ></video>
      <iframe
        v-else
        :src="items[index]?.url"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div class="info">
        <h2>{{ items[index]?.title }}</h2>
      </div>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    index: Number,
  },
  methods: {
    isVideo(src) {
      return /\.(mp4|webm|ogg)$/i.test(src)
    },
  },
}
</script>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  position: relative;
  max-width: 80%;
  max-height: 80%;
  background-color: #fff;
  padding: 20px;
  overflow: auto;
}

.content video,
.content iframe {
  width: 100%;
  height: auto;
  max-height: 70vh;
}

.info {
  position: absolute;
  top: 20px;
  left: 20px;
}

button {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
