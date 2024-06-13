<template>
  <div class="avatar-upload">
    <input id="avatar" type="file" :disabled="!edit" @change="handleChange" />
    <div v-if="file.url && edit" class="avatar-upload__active">
      <div class="avatar-upload__active__icon" @click="getFile">
        <i class="fas fa-edit"></i>
      </div>
      <img :src="file.url" :alt="file.name" />
    </div>
    <div v-else class="avatar-upload__default" @click="getFile">
      <img :src="avatar" :alt="file.name" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'AvatarUploader',
  props: {
    avatar: {
      type: String,
      default: '/new/default_avatar.svg',
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      file: {
        name: '',
        size: '',
        type: '',
        url: '',
        file: null,
      },
    }
  },
  mounted() {
    this.file.url = this.avatar
  },
  methods: {
    getFile() {
      document.getElementById('avatar').click()
    },
    handleChange(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.$emit('update:avatar', reader.result)
      }
      this.file.name = file.name
      this.file.size = file.size
      this.file.type = file.type
      this.file.file = file
      this.file.url = URL.createObjectURL(file)
      this.$emit('update:file', this.file)
    },
  },
}
</script>
