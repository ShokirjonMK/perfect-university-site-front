<template>
  <div>
    <h3 class="apply__title d-flex align-items-center cursor-pointer">
      <img
        src="/icons/chevron-left.svg"
        alt="chevron-left"
        @click="$emit('on-step', 'forgot_password')"
      />
      {{ $t('new_password') }}
    </h3>
    <p class="apply__subtitle">{{ $t('choose_password') }}</p>
    <div class="apply__wrapper">
      <div>
        <div class="apply__form-group">
          <label for="" class="apply__form-label">{{ $t('password') }}</label>
          <div>
            <input
              v-model="new_password"
              :class="{ error: $v.new_password.$error }"
              type="text"
              class="apply__form-input"
              placeholder="Enter your password"
            />
            <span class="suffix">
              <img src="/icons/eye.svg" alt="eye" />
            </span>
          </div>
        </div>
      </div>
      <button class="apply__form-button" @click="onSubmit">
        {{ $t('confirm') }}
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { minLength, required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      new_password: '',
    }
  },
  validations: {
    new_password: {
      required,
      minLength: minLength(8),
    },
  },
  computed: {
    ...mapState({
      email: (state) => state.auth.resetPasswordEmail,
      session: (state) => state.auth.resetPasswordSession,
    }),
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        if (this.new_password.length < 8) {
          this.$toast.error('Password must be at least 8 characters')
        }
        return
      }
      this.$axios
        .post('auth/reset-password/', {
          email: this.email,
          session: this.session,
          new_password: this.new_password,
        })
        .then((res) => {
          this.$emit('on-step', 'login')
          this.$store.commit('auth/setResetNewPassword', this.new_password)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
