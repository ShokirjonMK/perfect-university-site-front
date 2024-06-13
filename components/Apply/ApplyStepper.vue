<template>
  <div class="apply-stepper">
    <div class="apply-stepper__item active">
      <p class="apply-stepper__title">{{ $t('personal_info') }}</p>
      <div class="apply-stepper__step ml-40">
        <div>1</div>
      </div>
    </div>
    <div
      class="apply-stepper__item position-relative"
      :class="{ active: step === 2 }"
    >
      <p class="apply-stepper__title">{{ $t('education_info') }}</p>
      <hr />
      <div class="apply-stepper__step ml-40">
        <div>2</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ApplyStepper',
  props: {
    title: {
      type: String,
      default: 'view_all',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    icon: {
      type: Boolean,
      default: true,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
}
</script>
