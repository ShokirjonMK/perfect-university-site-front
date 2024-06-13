<template>
  <div>
    <ApplyStepper v-bind="{ step }" />
    <h3 class="apply__title mt-36">
      {{ step === 1 ? $t('personal_info') : $t('education') }}
    </h3>
    <p class="apply__subtitle">{{ $t('create_ur_new_account') }}</p>
    <div class="apply__wrapper">
      <Transition mode="out-in">
        <div>
          <ApplyPersonalInfo
            v-if="step === 1"
            ref="personalInfo"
            @continue="onContinue"
          />
          <ApplyDiplomaInfo
            v-if="step === 2"
            ref="diplomaInfo"
            @on-submit="onSubmit"
          />
        </div>
      </Transition>
    </div>
    <div class="apply__wrapper">
      <div class="apply__bottom">
        {{ $t('already_have_account') }}
        <NuxtLink :to="localePath('/apply')"> {{ $t('login') }} </NuxtLink>
      </div>
    </div>
    <el-dialog :visible.sync="success" class="success_modal">
      <div class="d-flex align-items-center justify-content-center flex-column">
        <img src="/new/success.svg" alt="Success" />
        <h3 class="success_modal__title">{{ $t('apply_success') }}</h3>
        <p class="success_modal__subtitle">{{ $t('apply_success_text') }}</p>
        <div class="success_modal__form-group personal-info__buttons col-12">
          <button class="gray" @click="success = false">
            {{ $t('back_to_home') }}
          </button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import ApplyPersonalInfo from './ApplyPersonalInfo.vue'
import ApplyDiplomaInfo from './ApplyDiplomaInfo.vue'
import ApplyStepper from './ApplyStepper.vue'
export default {
  components: {
    ApplyStepper,
    ApplyDiplomaInfo,
    ApplyPersonalInfo,
  },
  data() {
    return {
      step: 1,
      success: false,
      form: {
        personalInfo: {},
        diplomaInfo: {},
      },
    }
  },
  watch: {
    success(val) {
      if (!val) {
        this.$router.push(this.localePath('/'))
      }
    },
  },
  methods: {
    onContinue(data) {
      this.form.personalInfo = { ...data }
      this.step = 2
    },
    onSubmit(form) {
      this.form.diplomaInfo = { ...form }
      const formData = new FormData()
      formData.append('first_name', this.form.personalInfo.first_name)
      formData.append('last_name', this.form.personalInfo.last_name)
      formData.append(
        'date_of_birth',
        this.$moment(this.form.personalInfo.date_of_birth).format('YYYY-MM-DD')
      )
      if (this.form.personalInfo.passport)
        formData.append('passport_copy', this.form.personalInfo.passport?.file)
      formData.append('gender', this.form.personalInfo.gender)
      formData.append(
        'passport',
        this.form.personalInfo.passport_series +
          this.form.personalInfo.passport_number
      )
      formData.append('phone_number', this.form.personalInfo.phone)
      formData.append('user', this.form.personalInfo.user)
      formData.append('citizenship', this.form.personalInfo.citizen)
      formData.append('nationality', this.form.personalInfo.nationality)
      formData.append('higher_education_name', form?.qualification)
      formData.append('education_name', form?.university_name)
      if (form.diploma) formData.append('diploma', form.diploma)
      formData.append('degree', form.programmes)
      formData.append('application', form.faculties)
      formData.append('language_qualifications', form.english_proficiency)

      return new Promise((resolve, reject) => {
        this.$axios
          .post('/admission/', formData)
          .then((res) => {
            this.success = true
            console.log(res)
            resolve(res)
          })
          .catch((err) => {
            this.$toast(err?.response?.data)
            console.log(err?.response)
            reject(err)
          })
      })
    },
  },
}
</script>
