<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <bread-crumbs :type="'press'" :links="links" />
      <div class="container">
        <div class="row">
          <div class="col-12 pd">
            <div>
              <div>
                <div
                  v-if="serviceList && serviceList.length"
                  class="row justify-content-between mb-4 mb-md-0"
                >
                  <div
                    v-for="(item, index) in serviceList"
                    :key="index"
                    class="cardsInteraktiv mb-3"
                  >
                    <a
                      v-if="item.id != 6"
                      target="_blank"
                      :href="item.url"
                      class=""
                    >
                      <div class="d-flex">
                        <div>
                          <img :src="item.white_icon_url" :alt="item.title" />
                        </div>
                        <div>
                          <h6>{{ item.title }}</h6>
                          <div
                            class="single-content"
                            v-html="item.content"
                          ></div>
                        </div>
                      </div>
                      <div class="line"></div>
                    </a>
                    <button
                      v-else
                      target="_blank"
                      class="bg-transparent"
                      @click="$bvModal.show('bv-modal-example')"
                    >
                      <div class="d-flex">
                        <div>
                          <img :src="item.white_icon_url" :alt="item.title" />
                        </div>
                        <div>
                          <h6>{{ item.title }}</h6>
                          <div
                            class="single-content"
                            v-html="item.content"
                          ></div>
                        </div>
                      </div>
                      <div class="line"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="bv-modal-example">
      <!-- <pre>{{form}}</pre> -->
      <div
        class="modal__header d-flex justify-content-between align-items-center"
      >
        <h5 class="modal-title">{{ $t('apply') }}</h5>
        <span
          style="cursor: pointer"
          @click="$bvModal.hide('bv-modal-example')"
        >
          <svg
            width="26"
            height="31"
            viewBox="0 0 26 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.2002 6.43994L20.8002 24.3167M5.2002 24.3167L20.8002 6.43994"
              stroke="#787F86"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <!-- name -->
      <div class="flex flex-col">
        <label class="apply-label" for="name">{{ $t('your_name') }}</label>
        <input
          id="name"
          v-model="form.name"
          :class="{ hasError: $v.form.name.$anyError }"
          :placeholder="$t('enter_your_name')"
          class="apply-input"
          type="text"
        />
      </div>

      <!-- Surname -->
      <div class="flex flex-col">
        <label class="apply-label" for="name">{{ $t('your_last_name') }}</label>
        <input
          id="name"
          v-model="form.surname"
          :class="{ hasError: $v.form.surname.$anyError }"
          :placeholder="$t('enter_your_last_name')"
          class="apply-input"
          type="text"
        />
      </div>

      <!-- mail -->
      <div class="flex flex-col">
        <label class="apply-label" for="name">{{ $t('your_mail') }}</label>
        <input
          id="name"
          v-model="form.mail"
          :class="{ hasError: $v.form.mail.$anyError }"
          :placeholder="$t('enter_your_mail')"
          class="apply-input"
          type="text"
        />
      </div>

      <!-- file -->
      <div class="flex flex-col position-relative">
        <label class="apply-label" for="name">{{ $t('your_file') }}</label>
        <input
          id="name"
          :placeholder="$t('enter_your_file')"
          class="apply-input apply-input-file"
          :class="{ hasError: $v.form.file.$anyError }"
          type="file"
          @change="readURL"
        />
        <span class="position-absolute" style="right: 12px; top: 67px">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3733_54055)">
              <path
                d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"
                stroke="#C5CCD5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"
                stroke="#C5CCD5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3733_54055">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>

      <!-- phone-number -->
      <div class="flex flex-col position-relative">
        <label class="apply-label" for="name">{{ $t('your_phone') }}</label>
        <input
          id="name"
          v-model="form.phone"
          v-mask="{ mask: '999999999' }"
          :class="{ hasError: $v.form.phone.$anyError }"
          class="apply-input phone-input"
          type="text"
        />
        <div
          class="position-absolute d-flex align-items-center justify-content-center top-0"
          style="top: 70px; left: 10px"
        >
          <img
            src="../../static/img/uz-flag.png"
            style="max-width: 20px; height: auto; object-fit: cover"
            alt="Uz flag"
          />
          <h6 class="apply-label" style="margin-left: 10px; margin-top: 0">
            +998
          </h6>
        </div>
      </div>

      <!-- message -->
      <div class="flex flex-col">
        <label class="apply-label" for="name">{{ $t('your_message') }}</label>
        <textarea
          id="name"
          v-model="form.message"
          :class="{ hasError: $v.form.message.$anyError }"
          :placeholder="$t('enter_your_message')"
          class="apply-textarea"
          type="text"
        />
      </div>
      <div class="d-flex" style="gap: 26px">
        <b-button
          class="close-btn mt-3"
          block
          @click="$bvModal.hide('bv-modal-example')"
          >{{ $t('cancel') }}</b-button
        >
        <b-button class="submit-btn mt-3" block @click="submitModal">{{
          $t('send')
        }}</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { email, required, minLength, maxLength } from 'vuelidate/lib/validators'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  name: 'InteractiveServices',

  components: {
    BreadCrumbs,
  },

  data() {
    return {
      form: {
        name: '',
        surname: '',
        mail: '',
        file: '',
        phone: '',
        message: '',
      },
    }
  },
  validations: {
    form: {
      name: { required, minLength: minLength(3), maxLength: maxLength(20) },
      surname: { required, minLength: minLength(3), maxLength: maxLength(20) },
      mail: { email },
      file: {},
      phone: { required },
      message: { required, minLength: minLength(3), maxLength: maxLength(200) },
    },
  },

  methods: {
    async submitModal() {
      this.$v.form.$touch()
      if (!this.$v.form.$anyError) {
        const newData = new FormData()
        newData.append('name', this.form.name)
        newData.append('surname', this.form.surname)
        newData.append('email', this.form.mail)
        newData.append('file', this.form.file)
        newData.append('phone_number', `${this.form.phone.replaceAll(' ', '')}`)
        newData.append('application_text', this.form.message)
        await this.$axios
          .post('application/', newData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            this.$toast.success(this.$t('success_message'))
            this.$v.$reset()
            this.$bvModal.hide('bv-modal-example')
            ;(this.form.name = ''),
              (this.form.surname = ''),
              (this.form.mail = ''),
              (this.form.file = ''),
              (this.form.phone = ''),
              (this.form.message = '')
          })
          .catch((err) => {
            this.$toast.error(this.$t('error_message'))
            console.log(err)
          })
      }
    },
    readURL(event) {
      this.form.file = event.target.files[0]
    },
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('interactive_services'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      serviceList: (state) => state.services.serviceList,
    }),
  },

  async fetch() {
    await this.$store.dispatch('services/fetchServiceList').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 28px;
}

.cardsInteraktiv {
  background: #f9fafc url('~/static/image/bank.svg') no-repeat right;
  padding: 12px 0px 0px 12px;
  border-radius: 8px;
  border: 1px solid rgba(159, 171, 185, 0.2);
  width: 49%;

  img {
    margin-bottom: 12px;
    margin-right: 20px;
    width: 60px;
    height: 60px;
  }

  h6 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 23px;
    color: #44494f;

    margin-top: 4px;
    margin-bottom: 6px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 0.875rem;
    line-height: 17px;
    color: #9fabb9;
  }

  transition: 0.3s all;

  &:hover {
    transform: translateY(3px);
    background: right none;
    box-shadow: 0px 4px 20px rgba(159, 171, 185, 0.16);

    .line {
      width: 40%;
    }
  }
}

.line {
  background: #6db0ff;
  width: 30px;
  height: 2px;
  margin-left: 20%;
  transition: 0.3s all;
}
@media screen and (max-width: 768px) {
  .cardsInteraktiv {
    width: 100%;
  }
  .line {
    margin-left: 0;
  }
}
</style>
