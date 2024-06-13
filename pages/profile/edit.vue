<template>
  <div>
    <h2 class="profile__title">
      <img
        src="/icons/chevron-left.svg"
        alt="chevron left"
        @click="$router.push(localePath('/profile'))"
      />{{ $t('editing_personal_info') }}
    </h2>
    <div
      class="apply mt-24"
      style="max-width: 100% !important; padding: 0 !important"
    >
      <div class="profile-card-wrapper">
        <div>
          <AvatarUploader
            edit
            :avatar="user?.image"
            @update:file="form.avatar = $event"
          />
        </div>
        <div class="row mt-24">
          <div class="apply__form-group col-md-6 col-12">
            <label for="" class="apply__form-label">
              {{ $t('first_name') }}
            </label>
            <input
              v-model="form.first_name"
              :class="{ error: $v.form.first_name.$error }"
              type="text"
              class="apply__form-input"
              :placeholder="$t('write_first_name')"
            />
          </div>
          <div class="apply__form-group col-md-6 col-12">
            <label for="" class="apply__form-label">{{
              $t('last_name')
            }}</label>
            <input
              v-model="form.last_name"
              :class="{ error: $v.form.last_name.$error }"
              type="text"
              class="apply__form-input"
              :placeholder="$t('write_last_name')"
            />
          </div>
          <div class="apply__form-group col-md-6 col-12">
            <label for="" class="apply__form-label">{{ $t('gender') }}</label>
            <el-select
              v-model="form.gender"
              :class="{ error: $v.form.gender.$error }"
              :placeholder="$t('choose_gender')"
            >
              <el-option
                v-for="item in genders"
                :key="item.id"
                :label="item.title"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <div class="apply__form-group col-md-6 col-12">
            <label for="" class="apply__form-label">{{
              $t('nationality')
            }}</label>
            <el-select
              v-model="form.nationality"
              :class="{ error: $v.form.nationality.$error }"
              :placeholder="$t('choose_nationality')"
            >
              <el-option
                v-for="item in nationality"
                :key="item.id"
                :label="item.title"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <div class="apply__form-group col-md-6 col-12">
            <label for="" class="apply__form-label">{{ $t('citizen') }}</label>
            <el-select
              v-model="form.citizen"
              :class="{ error: $v.form.citizen.$error }"
              :placeholder="$t('choose_citizen')"
            >
              <el-option
                v-for="item in countries"
                :key="item.id"
                :label="item.title"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <div class="apply__form-group col-md-6 col-12">
            <label for="" class="apply__form-label">
              {{ $t('date_of_birth') }}</label
            >
            <el-date-picker
              v-model="form.birth_date"
              :class="{ error: $v.form.birth_date.$error }"
              type="date"
              class="w-100"
              placeholder="dd.mm.yyyy"
            >
            </el-date-picker>
          </div>
          <div class="apply__form-group col-md-6 col-12">
            <label for="" class="apply__form-label">
              {{ $t('your_email') }}
            </label>
            <input
              v-model="form.email"
              :class="{ error: $v.form.email.$error }"
              type="text"
              class="apply__form-input"
              :placeholder="$t('enter_ur_email')"
            />
          </div>
          <div class="apply__form-group col-md-6 col-12">
            <label for="" class="apply__form-label">
              {{ $t('phone_number') }}
            </label>
            <vue-tel-input
              v-model="form.phone"
              :class="{ error: $v.form.phone.$error }"
              v-bind="inputOptions"
            ></vue-tel-input>
          </div>
          <div class="apply__form-group col-md-6 col-12">
            <label for="" class="apply__form-label">{{ $t('password') }}</label>
            <input
              v-model="form.password"
              :class="{ error: $v.form.password.$error }"
              type="text"
              class="apply__form-input"
              :placeholder="$t('enter_password')"
            />
          </div>
          <div class="apply__form-group col-md-6 col-12">
            <label for="" class="apply__form-label">{{
              $t('new_password')
            }}</label>
            <input
              v-model="form.new_password"
              :class="{ error: $v.form.new_password.$error }"
              type="text"
              class="apply__form-input"
              :placeholder="$t('enter_new_password')"
            />
          </div>
        </div>
      </div>
      <div class="mt-4 profile-card-wrapper d-flex justify-content-end">
        <ButtonMore
          :icon="false"
          :icon-contact="false"
          title="cancel"
          class="mr-2"
          style="height: 32px !important"
          @click="$router.push(localePath('/profile'))"
        />
        <ButtonMore
          variant="secondary"
          :icon="false"
          title="save_changes"
          :icon-contact="false"
          style="height: 32px !important"
          @click="submit"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { required, sameAs, email, minLength } from 'vuelidate/lib/validators'
import AvatarUploader from '../../components/Profile/AvatarUploader.vue'
import ButtonMore from '../../components/Button/ButtonMore.vue'

export default {
  components: {
    ButtonMore,
    AvatarUploader,
  },
  middleware: 'auth',
  fetch() {
    this.$store.dispatch('form/fetchAdmission')
  },
  data() {
    return {
      value: '',
      checked: false,
      phone: '',
      birthDate: '',
      inputOptions: {
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
      },
      form: {
        first_name: '',
        last_name: '',
        gender: '',
        nationality: '',
        citizen: '',
        birth_date: '',
        email: '',
        phone: '',
        password: '',
        new_password: '',
        avatar: null,
      },
    }
  },
  validations: {
    form: {
      first_name: { required },
      last_name: { required },
      gender: { required },
      nationality: { required },
      citizen: { required },
      birth_date: { required },
      email: { required, email },
      phone: { required, minLength: minLength(9) },
      password: { required },
      new_password: { required, sameAs: sameAs('password') },
    },
  },
  computed: {
    ...mapState({
      nationality: (state) => state.form.nationalities,
      countries: (state) => state.form.countries,
      degrees: (state) => state.form.degrees,
      user: (state) => state.auth.user,
    }),
    genders() {
      return [
        {
          title: this.$t('male'),
          id: 1,
        },
        {
          title: this.$t('woman'),
          id: 2,
        },
      ]
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.form.phone = this.user?.admission_fields?.phone_number || ''
        this.form.first_name = this.user?.admission_fields?.first_name
        this.form.last_name = this.user?.admission_fields?.last_name
        this.form.gender = this.user?.admission_fields?.gender
        this.form.nationality = this.nationality?.find(
          (el) => el.title === this.user?.admission_fields?.nationality
        )?.id
        this.form.birth_date = this.user?.admission_fields?.date_of_birth
        this.form.citizen = this.countries?.find(
          (el) => el.title === this.user?.admission_fields?.citizenship
        )?.id
        this.form.email = this.user?.email
      }, 500)
    })
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      const formData = new FormData()
      formData.append('admission_fields__first_name', this.form.first_name)
      formData.append('admission_fields__last_name', this.form.last_name)
      formData.append('admission_fields__gender', this.form.gender)
      formData.append('admission_fields__date_of_birth', this.form.birth_date)
      formData.append('admission_fields__citizenship', this.form.citizen)
      formData.append('admission_fields__phone_number', this.form.phone)
      formData.append('admission_fields__nationality', this.form.nationality)
      formData.append('email', this.form.email)
      if (this.form.avatar) formData.append('image', this.form.avatar?.file)
      this.$axios
        .patch('auth/update-profile/', formData)
        .then((res) => {
          this.$store.dispatch('auth/fetchProfile')
          this.$toast.success(this.$t('success'))
        })
        .catch((err) => {
          this.$toast.error(this.$t('error'))
        })
    },
  },
}
</script>
