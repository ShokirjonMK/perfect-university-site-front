<template>
  <div class="row">
    <div class="apply__form-group col-md-6 col-12">
      <label for="" class="apply__form-label">
        {{ $t('first_name') }}
      </label>
      <input
        v-model="form.first_name"
        type="text"
        class="apply__form-input"
        :class="{ error: $v.form.first_name.$error }"
        :placeholder="$t('write_first_name')"
      />
    </div>
    <div class="apply__form-group col-md-6 col-12">
      <label for="" class="apply__form-label">{{ $t('last_name') }}</label>
      <input
        v-model="form.last_name"
        type="text"
        class="apply__form-input"
        :class="{ error: $v.form.last_name.$error }"
        :placeholder="$t('write_last_name')"
      />
    </div>
    <div class="apply__form-group col-md-6 col-12">
      <label for="" class="apply__form-label">{{ $t('gender') }}</label>
      <el-select
        v-model="form.gender"
        :placeholder="$t('choose_gender')"
        :class="{ error: $v.form.gender.$error }"
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
      <label for="" class="apply__form-label">{{ $t('nationality') }}</label>
      <el-select
        v-model="form.nationality"
        :placeholder="$t('choose_nationality')"
        :class="{ error: $v.form.nationality.$error }"
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
        :placeholder="$t('choose_citizen')"
        :class="{ error: $v.form.citizen.$error }"
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
      <label for="" class="apply__form-label"> {{ $t('date_of_birth') }}</label>
      <el-date-picker
        v-model="form.birth_date"
        format="dd.MM.yyyy"
        value-format="yyyy-MM-dd"
        :class="{ error: $v.form.birth_date.$error }"
        type="date"
        class="w-100"
        placeholder="dd.mm.yyyy"
      >
      </el-date-picker>
    </div>
    <div class="apply__form-group col-md-6 col-12">
      <label for="" class="apply__form-label"> {{ $t('passport') }} </label>
      <div class="d-flex flex-row">
        <input
          v-model="form.passport_series"
          type="text"
          :class="{ error: $v.form.passport_series.$error }"
          class="apply__form-input text-uppercase"
          style="max-width: 60px"
          maxlength="2"
          placeholder="AB"
          @input="$event.target.value = $event.target.value.toUpperCase()"
        />
        <input
          v-model="form.passport_number"
          type="text"
          :class="{ error: $v.form.passport_number.$error }"
          class="apply__form-input"
          :placeholder="$t('passport_number')"
        />
      </div>
    </div>
    <div class="apply__form-group col-md-6 col-12">
      <label for="" class="apply__form-label">{{
        $t('upload_ur_passport')
      }}</label>
      <FileUpload
        id="passport"
        :error="$v.form.passport.$error"
        @change="form.passport = $event"
      />
    </div>
    <div class="apply__form-group col-12">
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
    <div class="apply__form-group col-12">
      <label for="" class="apply__form-label">{{ $t('password') }}</label>
      <input
        v-model="form.password"
        :class="{ error: $v.form.password.$error }"
        type="text"
        class="apply__form-input"
        :placeholder="$t('enter_password')"
      />
    </div>
    <div class="apply__form-group col-12">
      <label for="" class="apply__form-label">
        {{ $t('phone_number') }}
      </label>
      <vue-tel-input
        v-model="form.phone"
        v-bind="inputOptions"
        :class="{ error: $v.form.phone.$error }"
      ></vue-tel-input>
    </div>
    <div class="apply__form-group personal-info__buttons col-12 d-flex gap-6">
      <button class="blue" @click="onSignUp">{{ $t('sign_up') }}</button>
      <button class="gray" @click="onContinue">{{ $t('continue') }}</button>
    </div>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
import FileUpload from './FileUpload.vue'

export default {
  components: {
    FileUpload,
  },
  data() {
    return {
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
        nationality: 'Uzbek',
        citizen: 'Uzbekistan',
        birth_date: '',
        passport_number: '',
        passport_series: '',
        passport: null,
        email: '',
        phone: '',
        password: '',
        user: null,
      },
      datePickerLocale: {
        name: 'en', // Change the language code to 'en' for English
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        weekStart: 0, // 0 for Sunday, 1 for Monday
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthsShort: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        formats: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'MM/DD/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY HH:mm',
          LLLL: 'dddd, MMMM D, YYYY HH:mm',
        },
        ordinal: (n) => `${n}th`,
        buttonCancel: 'Cancel',
        buttonValidate: 'OK',
        rangeHeaderText: 'From %d to 13',
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
      passport_number: { required },
      passport_series: { required },
      passport: { required },
      email: { required },
      phone: { required },
      password: { required },
    },
  },
  computed: {
    ...mapState({
      nationality: (state) => state.form.nationalities,
      countries: (state) => state.form.countries,
      degrees: (state) => state.form.degrees,
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
  methods: {
    async onContinue() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          await this.onRegister()
          this.$emit('continue', this.form)
        } catch (err) {
          console.log(err)
        }
      }
    },
    async onSignUp() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          await this.onRegister()
          await this.onAdmission()
          await this.$store.dispatch('auth/getSignUpData', {
            ...this.form,
          })
          await this.$router.push(this.localePath('/apply'))
        } catch (err) {
          console.log(err)
        }
      }
    },
    onRegister() {
      return new Promise((resolve, reject) => {
        this.$axios
          .post('/auth/register/', {
            email: this.form.email,
            password: this.form.password,
          })
          .then((res) => {
            this.form.user = res.data.id
            resolve(res)
          })
          .catch((err) => {
            console.log(err?.response)
            if (err?.response?.data) {
              for (const key in err?.response?.data) {
                this.$toast.error(err?.response?.data[key]?.[0])
              }
            }
            reject(err)
          })
      })
    },
    onAdmission() {
      return new Promise((resolve, reject) => {
        const formData = new FormData()
        formData.append('first_name', this.form.first_name)
        formData.append('last_name', this.form.last_name)
        formData.append(
          'date_of_birth',
          this.$moment(this.form.birth_date).format('YYYY-MM-DD')
        )
        formData.append('passport_copy', this.form.passport)
        formData.append('gender', this.form.gender)
        formData.append(
          'passport',
          this.form.passport_series + this.form.passport_number
        )
        formData.append('phone_number', this.form.phone)
        formData.append('citizenship', this.form.citizen)
        formData.append('nationality', this.form.nationality)
        formData.append('user', this.form.user)
        this.$axios
          .post('/admission/', formData)
          .then((res) => {
            console.log(res)
            resolve(res)
          })
          .catch((err) => {
            this.$toast.error(err?.response?.data)
            console.log(err)
            reject(err)
          })
      })
    },
  },
}
</script>
