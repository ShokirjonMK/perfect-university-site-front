<template>
  <div>
    <h3 class="apply__title d-flex align-items-center cursor-pointer">
      <img
        src="/icons/chevron-left.svg"
        alt="chevron-left"
        @click="$emit('on-step', 'login')"
      />
      {{ $t('forgot_password') }}
    </h3>
    <p class="apply__subtitle">{{ $t('enter_email_to_reset_password') }}</p>
    <div class="apply__wrapper">
      <div>
        <div class="apply__form-group">
          <label for="" class="apply__form-label">{{ $t('your_email') }}</label>
          <input
            v-model="email"
            :class="{ error: $v.email.$error }"
            type="text"
            class="apply__form-input"
            :placeholder="$t('enter_password')"
          />
        </div>
      </div>
      <button class="apply__form-button" @click="onSubmit">
        {{ $t('continue') }}
      </button>
    </div>
    <div class="apply__wrapper">
      <div class="apply__bottom">
        {{ $t('remembered_password') }}
        <div class="apply__bottom_item" @click="$emit('on-step', 'login')">
          {{ $t('login') }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      email: '',
    }
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  computed: {
    ...mapState({
      savedEmail: (state) => state.auth.resetPasswordEmail,
    }),
  },
  mounted() {
    this.email = this.savedEmail
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.$axios
        .post('auth/send-verification-code/', {
          email: this.email,
          type: 'reset_password_verification',
        })
        .then((res) => {
          this.$store.commit('auth/setResetPasswordEmail', this.email)
          this.$store.commit('auth/setResetPasswordSession', res.data?.session)
          this.$emit('on-step', 'otp_code')
        })
        .catch((e) => {
          if (e.response?.data) {
            for (const key in e.response?.data) {
              this.$toast.error(e.response?.data[key][0])
            }
          }
        })
    },
  },
}
</script>
