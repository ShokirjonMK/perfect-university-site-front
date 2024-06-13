<template>
  <div>
    <h3 class="apply__title">{{ $t('login') }}</h3>
    <p class="apply__subtitle">{{ $t('pls_sign_in') }}</p>
    <div class="apply__wrapper">
      <div>
        <div class="apply__form-group">
          <label for="" class="apply__form-label">{{ $t('your_email') }}</label>
          <input
            v-model="form.email"
            :class="{ error: $v.form.email.$error }"
            type="text"
            class="apply__form-input"
            :placeholder="$t('enter_ur_email')"
          />
        </div>
        <div class="apply__form-group">
          <label for="" class="apply__form-label">{{ $t('password') }}</label>
          <div>
            <input
              v-model="form.password"
              :class="{ error: $v.form.password.$error }"
              :type="inputType"
              class="apply__form-input"
              :placeholder="$t('enter_password')"
            />
            <span
              class="suffix cursor-pointer"
              @click="
                inputType === 'password'
                  ? (inputType = 'text')
                  : (inputType = 'password')
              "
            >
              <img src="/icons/eye.svg" alt="eye" />
            </span>
          </div>
        </div>
      </div>
      <div class="apply__form-link">
        <div
          class="apply__form-link_item"
          @click="$emit('on-step', 'forgot_password')"
        >
          {{ $t('forgot_password') }}?
        </div>
      </div>
      <button class="apply__form-button" @click="onSignUp">
        {{ $t('sign_in') }}
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      inputType: 'password',
      form: {
        email: '',
        password: '',
      },
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
  computed: {
    ...mapState({
      loginData: (state) => state.auth.signUpData,
      password: (state) => state.auth.resetNewPassword,
      email: (state) => state.auth.resetPasswordEmail,
    }),
  },
  watch: {
    loginData: {
      handler(val) {
        this.form.email = val?.email || this.email || ''
        this.form.password = val?.password || this.password || ''
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async onSignUp() {
      this.$v.$touch()
      if (this.$v.$invalid) return
      try {
        await this.$store.dispatch('auth/login', this.form)
        await this.$store.dispatch('auth/fetchProfile')
        await this.$router.push(this.localePath('/profile'))
      } catch (e) {
        if (e.response?.data) {
          for (const key in e.response?.data) {
            this.$toast.error(e.response?.data[key][0])
          }
        } else {
          this.$toast.error(this.$t('something_went_wrong'))
        }
      }
    },
  },
}
</script>
