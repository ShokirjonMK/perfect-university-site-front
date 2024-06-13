<template>
  <div class="container apply">
    <Transition name="fade" mode="out-in">
      <div :key="step">
        <LoginForm v-if="step === 'login'" @on-step="step = $event" />
        <ForgotPassword
          v-if="step === 'forgot_password'"
          @on-step="step = $event"
          @on-submit="step = $event"
        />
        <OtpCode
          v-if="step === 'otp_code'"
          @on-step="step = $event"
          @on-submit="step = $event"
        />
        <NewPassword
          v-if="step === 'new_password'"
          @on-step="step = $event"
          @on-submit="step = $event"
        />
      </div>
    </Transition>
  </div>
</template>
<script>
import LoginForm from '../../components/Apply/LoginForm.vue'
import ForgotPassword from '../../components/Apply/ForgotPassword.vue'
import OtpCode from '../../components/Apply/OtpCode.vue'
import NewPassword from '../../components/Apply/NewPassword.vue'

export default {
  components: { NewPassword, OtpCode, ForgotPassword, LoginForm },
  data() {
    return {
      step: 'login',
    }
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
