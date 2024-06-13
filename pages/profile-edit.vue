<template>
  <div class="container apply">
    <MainCard>
      <div class="row">
        <div class="apply__form-group col-6">
          <label for="" class="apply__form-label">
            {{ $t('first_name') }}
          </label>
          <input
            type="text"
            class="apply__form-input"
            :placeholder="$t('write_first_name')"
          />
        </div>
        <div class="apply__form-group col-6">
          <label for="" class="apply__form-label">{{ $t('last_name') }}</label>
          <input
            type="text"
            class="apply__form-input"
            :placeholder="$t('write_last_name')"
          />
        </div>
        <div class="apply__form-group col-6">
          <label for="" class="apply__form-label">{{ $t('gender') }}</label>
          <el-select v-model="value" :placeholder="$t('choose_gender')">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="apply__form-group col-6">
          <label for="" class="apply__form-label">{{
            $t('nationality')
          }}</label>
          <el-select v-model="value" :placeholder="$t('choose_nationality')">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="apply__form-group col-6">
          <label for="" class="apply__form-label">{{ $t('citizen') }}</label>
          <el-select v-model="value" :placeholder="$t('choose_citizen')">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="apply__form-group col-6">
          <label for="" class="apply__form-label">
            {{ $t('date_of_birth') }}</label
          >
          <el-date-picker
            v-model="birthDate"
            type="date"
            class="w-100"
            placeholder="dd.mm.yyyy"
          >
          </el-date-picker>
        </div>
        <div class="apply__form-group col-6">
          <label for="" class="apply__form-label"> {{ $t('passport') }} </label>
          <div class="d-flex flex-row">
            <input
              type="text"
              class="apply__form-input w-25"
              placeholder="AB"
            />
            <input
              type="text"
              class="apply__form-input"
              :placeholder="$t('passport_number')"
            />
          </div>
        </div>
        <div class="apply__form-group col-6">
          <label for="" class="apply__form-label">{{
            $t('upload_ur_passport')
          }}</label>
          <FileUpload id="passport" />
        </div>
        <div class="apply__form-group col-12">
          <label for="" class="apply__form-label">
            {{ $t('your_email') }}
          </label>
          <input
            type="text"
            class="apply__form-input"
            :placeholder="$t('enter_ur_email')"
          />
        </div>
        <div class="apply__form-group col-12">
          <label for="" class="apply__form-label">{{ $t('password') }}</label>
          <input
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
            v-model="phone"
            v-bind="inputOptions"
            :class="{ hasError: false }"
          ></vue-tel-input>
        </div>
      </div>
    </MainCard>
  </div>
</template>
<script>
import MainCard from '../components/Profile/MainCard.vue'
import FileUpload from '../components/Apply/FileUpload.vue'
export default {
  components: {
    MainCard,
    FileUpload,
  },
  data() {
    return {
      value: '',
      checked: false,
      phone: '',
      birthDate: '',
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ],
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
    }
  },
}
</script>
