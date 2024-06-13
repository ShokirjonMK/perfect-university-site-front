<template>
  <div class="row">
    <div class="apply__form-group col-12">
      <label for="" class="apply__form-label">{{
        $t('highest_qualification')
      }}</label>
      <input
        v-model="form.qualification"
        :class="{ error: $v.form.qualification.$error }"
        type="text"
        class="apply__form-input"
        :placeholder="$t('choose_qualification')"
      />
    </div>
    <div class="apply__form-group col-12">
      <label for="" class="apply__form-label">{{
        $t('name_of_university')
      }}</label>
      <input
        v-model="form.university_name"
        :class="{ error: $v.form.university_name.$error }"
        type="text"
        class="apply__form-input"
        :placeholder="$t('enter_ur_answer')"
      />
    </div>
    <div class="apply__form-group col-md-6 col-12">
      <label for="" class="apply__form-label">{{ $t('start_date') }} </label>
      <el-date-picker
        v-model="form.start_date"
        :class="{ error: $v.form.start_date.$error }"
        type="date"
        class="w-100"
        placeholder="dd.mm.yyyy"
      >
      </el-date-picker>
    </div>
    <div class="apply__form-group col-md-6 col-12">
      <label for="" class="apply__form-label">{{ $t('end_date') }} </label>
      <el-date-picker
        v-model="form.end_date"
        :class="{ error: $v.form.end_date.$error }"
        type="date"
        class="w-100"
        placeholder="dd.mm.yyyy"
      >
      </el-date-picker>
    </div>
    <div class="apply__form-group col-12">
      <label for="" class="apply__form-label">{{
        $t('high_school_diploma')
      }}</label>
      <FileUpload id="diploma" @change="form.diploma = $event" />
    </div>
    <div class="apply__form-group col-12">
      <label for="" class="apply__form-label"
        >{{ $t('english_proficiency') }}
      </label>
      <el-select
        v-model="form.english_proficiency"
        :placeholder="$t('choose_proficiency')"
        :class="{ error: $v.form.english_proficiency.$error }"
      >
        <el-option
          v-for="item in languages"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </div>
    <div class="apply__form-group col-md-6 col-12">
      <label for="" class="apply__form-label">{{ $t('programmes') }} </label>
      <el-select
        v-model="form.programmes"
        :placeholder="$t('choose_programme')"
        :class="{ error: $v.form.programmes.$error }"
      >
        <el-option
          v-for="item in degrees"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </div>
    <div class="apply__form-group col-md-6 col-12">
      <label for="" class="apply__form-label">{{ $t('faculties') }} </label>
      <el-select
        v-model="form.faculties"
        :placeholder="$t('choose_faculty')"
        :disabled="!form.programmes"
        :class="{ error: $v.form.faculties.$error }"
      >
        <el-option
          v-for="item in applications"
          :key="item.id"
          :label="item.title"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </div>
    <div class="apply__form-group personal-info__buttons col-12">
      <button class="gray" @click="onSubmit">{{ $t('submit') }}</button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import FileUpload from './FileUpload.vue'
export default {
  components: {
    FileUpload,
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
        qualification: '',
        university_name: '',
        start_date: '',
        end_date: '',
        diploma: '',
        english_proficiency: '',
        programmes: '',
        faculties: '',
      },
    }
  },
  validations: {
    form: {
      qualification: { required },
      university_name: { required },
      start_date: { required },
      end_date: { required },
      english_proficiency: { required },
      programmes: { required },
      faculties: { required },
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
    languages() {
      return [
        {
          title: 'TOEFL',
          id: 0,
        },
        {
          title: 'CEFR',
          id: 1,
        },
        {
          title: 'IELTS',
          id: 2,
        },
        {
          title: 'No Score',
          id: 3,
        },
      ]
    },
    applications() {
      return this.form.programmes
        ? this.degrees.find((item) => item.id === this.form.programmes)
            .applications
        : []
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit('on-submit', this.form)
      }
    },
  },
}
</script>
