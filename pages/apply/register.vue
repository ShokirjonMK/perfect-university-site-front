<template>
  <div class="container apply">
    <RegisterForm />
  </div>
</template>
<script>
import RegisterForm from "../../components/Apply/RegisterForm.vue";

export default {
  components: {RegisterForm},
  data() {
    return {
      step: 'otp_code'
    }
  },
}
</script>
