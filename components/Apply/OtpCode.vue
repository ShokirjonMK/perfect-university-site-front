<template>
  <div>
    <h3 class="apply__title d-flex align-items-center cursor-pointer">
      <img
        src="/icons/chevron-left.svg"
        alt="chevron-left"
        @click="$emit('on-step', 'forgot_password')"
      />
      {{ $t('enter_code') }}
    </h3>
    <p class="apply__subtitle">
      {{ $t('we_sent_email') }}
    </p>
    <div class="apply__email">
      <span> {{ email }} </span>
      <img
        src="/icons/pen-square.svg"
        alt="pen"
        class="cursor-pointer"
        @click="$emit('on-step', 'forgot_password')"
      />
    </div>
    <div class="apply__wrapper">
      <div>
        <FOtp
          :error="$v.otp.$error || isError"
          @change="updateOtpValue"
          @complete="onSubmit"
        />
      </div>
      <div class="apply__form-resend">
        <template v-if="resend">
          <div
            class="apply__form-resend_item"
            @click="$emit('on-step', 'forgot_password')"
          >
            {{ $t('resend_code_via_email') }}
          </div>
          <CTimer
            :seconds="61"
            class="apply__form-timer"
            @timeout="resend = false"
          />
        </template>
        <div
          v-else
          class="apply__form-resend_item cursor-pointer"
          @click="resendCode"
        >
          <img src="/icons/rotate-cw.svg" alt="rotate" class="" />
          {{ $t('resend_code') }}
        </div>
      </div>
      <button class="apply__form-button" @click="onSubmit">
        {{ $t('reset_password') }}
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import FOtp from './FOtp.vue'
import CTimer from './CTimer.vue'
export default {
  components: { FOtp, CTimer },
  data() {
    return {
      otp: '',
      resend: true,
      isError: false,
    }
  },
  validations: {
    otp: {
      required,
    },
  },
  computed: {
    ...mapState({
      email: (state) => state.auth.resetPasswordEmail,
      session: (state) => state.auth.resetPasswordSession,
    }),
  },
  watch: {
    otp() {
      this.isError = false
    },
  },
  methods: {
    resendCode() {
      this.$axios
        .post('auth/send-verification-code/', {
          email: this.email,
          type: 'reset_password_verification',
        })
        .then((response) => {
          this.$store.commit(
            'auth/setResetPasswordSession',
            response.data?.session
          )
          this.$toast.success(this.$t('code_sent'))
          this.resend = true
          this.isError = false
          this.$v.otp.$reset()
        })
        .catch((error) => {
          console.log('error resend code: ', error.response.data)
          this.$toast.error(error.response.data)
        })
    },
    updateOtpValue(value) {
      this.otp = value
    },
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.$axios
        .post('auth/verify-reset-code/', {
          email: this.email,
          code: this.otp,
          session: this.session,
        })
        .then((response) => {
          console.log('response the otp: ', response.data)
          this.$store.commit('auth/setResetPasswordCode', this.otp)
          this.$emit('on-submit', 'new_password')
          this.isError = false
        })
        .catch((error) => {
          this.isError = true
          const text = Object.entries(error.response.data)[0][1]
          console.log('error otp: ', text)
          this.$toast.error(text)
        })
    },
  },
}
</script>
