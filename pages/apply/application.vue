<template>
  <div class="container apply">
    <ApplicationForm />
  </div>
</template>
<script>
import ApplicationForm from '../../components/Apply/ApplicationForm.vue'
import ApplyStepper from '../../components/Apply/ApplyStepper.vue'

export default {
  components: { ApplyStepper, ApplicationForm },
  fetch() {
    this.$store.dispatch('form/fetchAdmission')
  },
  data() {
    return {
      step: 'otp_code',
    }
  },
}
</script>
