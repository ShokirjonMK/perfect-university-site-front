<template>
  <div>
    <h3 class="apply__title">Registration</h3>
    <p class="apply__subtitle">Create your new account</p>
    <div class="apply__wrapper">
      <div>
        <div class="apply__form-group">
          <label for="" class="apply__form-label">Your e-mail</label>
          <input
            type="text"
            class="apply__form-input"
            placeholder="Enter your e-mail"
          />
        </div>
        <div class="apply__form-group">
          <label for="" class="apply__form-label">Country </label>
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="apply__form-group">
          <label for="" class="apply__form-label">Your phone number</label>
          <vue-tel-input
            v-model="phone"
            v-bind="inputOptions"
            :class="{ hasError: false }"
          ></vue-tel-input>
        </div>
        <div class="apply__form-group">
          <label for="" class="apply__form-label">Password</label>
          <div>
            <input
              type="text"
              class="apply__form-input"
              placeholder="Enter your password"
            />
            <span class="suffix">
              <img src="/icons/eye.svg" alt="eye" />
            </span>
          </div>
        </div>
        <div class="apply__form-group">
          <label for="" class="apply__form-label">Confirm Password</label>
          <div>
            <input
              type="text"
              class="apply__form-input"
              placeholder="Re-enter your password"
            />
            <span class="suffix">
              <img src="/icons/eye.svg" alt="eye" />
            </span>
          </div>
        </div>
      </div>
      <button class="apply__form-button">Sign In</button>
    </div>
    <div class="apply__wrapper">
      <div class="apply__bottom">
        Already have an account?
        <NuxtLink :to="localePath('/apply')">Login</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const inputOptions = {
  defaultCountry: 'uz',
  mode: 'international',
  dropdownOptions: {
    disabledDialCode: true,
    showDialCodeInList: true,
    showFlags: true,
    showSearchBox: true,
    width: '260px',
  },
  validCharactersOnly: true,
  inputOptions: {
    showDialCode: true,
    placeholder: '(__) ___ __ __',
    maxlength: 20,
  },
}
const value = ref('')
const phone = ref('')
</script>
