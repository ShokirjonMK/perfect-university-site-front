<template>
  <div class="code-input" :class="error ? 'error' : ''">
    <label
      class="apply__form-label"
      :for="`verification-input-${randomNumber}`"
    >
      {{ $t('code') }}
    </label>
    <div class="code-input__wrapper">
      <template v-for="(v, index) in values">
        <input
          :id="`verification-input-${randomNumber + index}`"
          :key="index"
          :ref="
            (el) => {
              if (el) inputs[index + 1] = el
            }
          "
          class="code-input__input"
          :class="inputClass"
          pattern="[0-9]"
          :autoFocus="autoFocus && index === autoFocusIndex"
          :data-id="index"
          :value="v"
          :required="required"
          :disabled="disabled"
          maxlength="1"
          @input="onValueChange"
          @paste="handlePaste"
          @focus="onFocus"
          @keydown="onKeyDown"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    className: String,
    inputClass: String,
    step: Number,
    fields: {
      type: Number,
      default: 6,
    },
    title: String,
    error: Boolean,
    label: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      KEY_CODE: {
        backspace: 8,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
      },
      randomNumber: Math.floor(Math.random() * 101),
      values: [],
      iRefs: [],
      inputs: [],
      autoFocusIndex: 0,
      autoFocus: true,
    }
  },
  watch: {
    step(newValue) {
      if (newValue === 2) {
        document.getElementById(`verification-input-${this.randomNumber}`)
          .autofocus
      }
    },
    immediate: true,
  },
  beforeUpdate() {
    this.inputs = []
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        if (this.inputs[1]) {
          this.inputs[1]?.focus()
        }
      }, 500)
    })
  },
  created() {
    this.initVals()
  },
  methods: {
    initVals() {
      let vals
      if (this.values.length) {
        vals = []
        for (let i = 0; i < this.fields; i++) {
          vals.push(this.values[i] || '')
        }
        this.autoFocusIndex =
          this.values.length >= this.fields ? 0 : this.values.length
      } else {
        vals = Array(this.fields).fill('')
      }
      this.iRefs = []
      for (let i = 0; i < this.fields; i++) {
        this.iRefs.push(i + 1)
      }
      this.values = vals
    },
    onFocus(e) {
      e.target.select(e)
    },
    onValueChange(e) {
      const index = parseInt(e.target.dataset.id)
      e.target.value = e.target.value.replace(/[^\d]/gi, '')
      if (e.target.value === '' || !e.target.validity.valid) {
        return
      }
      let next
      const value = e.target.value
      this.values = Object.assign([], this.values)
      if (value.length > 1) {
        let nextIndex = value.length + index - 1
        if (nextIndex >= this.fields) {
          nextIndex = this.fields - 1
        }
        next = this.iRefs[nextIndex]
        const split = value.split('')
        split.forEach((item, i) => {
          const cursor = index + i
          if (cursor < this.fields) {
            this.values[cursor] = item
          }
        })
      } else {
        next = this.iRefs[index + 1]
        this.values[index] = value
      }
      if (next) {
        const element = this.inputs[next]
        element.focus()
        element.select()
      }
      this.triggerChange(this.values)
    },
    onKeyDown(e) {
      const index = parseInt(e.target.dataset.id)
      const prevIndex = index - 1
      const nextIndex = index + 1
      const prev = this.iRefs[prevIndex]
      const next = this.iRefs[nextIndex]
      switch (e.keyCode) {
        case this.KEY_CODE.backspace: {
          e.preventDefault()
          const vals = [...this.values]
          if (this.values[index]) {
            vals[index] = ''
            this.values = vals
            this.triggerChange(vals)
          } else if (prev) {
            vals[prevIndex] = ''
            this.inputs[prev].focus()
            this.values = vals
            this.triggerChange(vals)
          }
          break
        }
        case this.KEY_CODE.left:
          e.preventDefault()
          if (prev) {
            this.inputs[prev].focus()
          }
          break
        case this.KEY_CODE.right:
          e.preventDefault()
          if (next) {
            this.inputs[next].focus()
          }
          break
        case this.KEY_CODE.up:
        case this.KEY_CODE.down:
          e.preventDefault()
          break
        default:
          break
      }
    },
    triggerChange(values = this.values) {
      const val = values.join('')
      this.$emit('change', val)
      if (val.length >= this.fields) {
        this.$emit('complete', val)
      }
    },
    handlePaste(e) {
      const paste = e.clipboardData.getData('text')
      if (typeof paste === 'string') {
        this.values = paste.split('')
        const inputs = e.target.parentElement.querySelectorAll('.otp-input')
        inputs.item(this.values.length - 1).focus()
      }
    },
  },
}
</script>

<style>
.error input {
  border: 1px solid #e52e30 !important;
  background: #fef5f5 !important;
}
</style>
