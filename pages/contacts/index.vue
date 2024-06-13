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
      <div v-if="rekvizits" class="container">
        <div
          style="
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
          "
        >
          <h4 class="contact_title">{{ $t('contact_us') }}</h4>
          <p class="contact_subtitle">{{ $t('contact_subtitle') }}</p>
        </div>
        <div style="gap: 24px; padding-bottom: 50px" class="d-lg-flex">
          <div class="bg-white contact_main contact_main-first">
            <h2 class="intro_facts-title">
              {{ $t('university_name') }}
            </h2>
            <div class="inner-page">
              <h6>
                {{ $t('address') }}:
                <a :href="rekvizits?.location" v-html="rekvizits?.address" target="_blank" />
              </h6>
              <h6>
                {{ $t('phone') }}:
                <a :href="`tel:${rekvizits.phone_number}`">{{
                  rekvizits.phone_number
                }}</a>
              </h6>
              <h6>
                {{ $t('fax') }}: <span>{{ rekvizits.fax }}</span>
              </h6>
              <h6>
                {{ $t('bank_account') }}:
                <span>{{ rekvizits.account_number }}</span>
              </h6>
              <h6>
                {{ $t('bank') }}: <span>{{ rekvizits.bank }}</span>
              </h6>
              <h6>
                MFO: <span>{{ rekvizits.mfo }}</span>
              </h6>
              <h6>
                Shx/r: <span>{{ rekvizits.shxr }}</span>
              </h6>
              <h6>
                INN: <span>{{ rekvizits.inn }}</span>
              </h6>
              <h6>
                OKONX: <span>{{ rekvizits.okonx }}</span>
              </h6>
            </div>
          </div>
          <div class="contacts">
            <div class="bg-white contact_main">
              <h2>{{ $t('contact_us') }}</h2>
              <div class="inner-page">
                <div class="row">
                  <div class="col-12 col-md-12 form-group">
                    <label>{{ $t('full_name') }}</label>
                    <b-form-input
                      v-model="form.sender_name"
                      type="text"
                      :class="{ hasError: $v.form.sender_name?.$error }"
                      :placeholder="$t('write_your_full_name')"
                    />
                  </div>

                  <div class="col-12 col-md-12">
                    <div class="form-group">
                      <label>{{ $t('your_phone') }}</label>
                      <vue-tel-input
                        v-model="form.phone_number"
                        :search-placeholder="customSearchPlaceholder"
                        class="tel__input"
                        v-bind="inputOptions"
                        :class="{ hasError: $v.form.phone_number?.$error }"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-12">
                    <div class="form-group">
                      <label>{{ $t('your_email') }}</label>
                      <b-form-input
                        v-model="form.email"
                        type="email"
                        :class="{ hasError: $v.form.email?.$error }"
                        :placeholder="$t('write_your_email')"
                      ></b-form-input>
                    </div>
                  </div>

                  <div class="col-12">
                    <label>{{ $t('application_text') }}</label>
                    <b-form-textarea
                      v-model="form.message"
                      :class="{ hasError: $v.form.message?.$error }"
                      :placeholder="$t('enter_application')"
                      no-resize
                    >
                    </b-form-textarea>
                  </div>
                  <div class="col-12 mt-4">
                    <recaptcha @success="onSuccess" />
                  </div>
                  <div
                    style="margin-top: 40px; gap: 20px"
                    class="col-12 d-flex flex-wrap justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center offerta gap-1">
                      <input
                        id="offerta"
                        v-model="form.checkbox"
                        :class="{ hasErrorCeckbox: $v.form.checkbox?.$error }"
                        class="mr-2"
                        type="checkbox"
                      />
                      <label
                        class="d-flex align-items-center gap-1"
                        :class="{ hasErrorCeckbox: $v.form.checkbox?.$error }"
                        for="offerta"
                      >
                        <span>{{ $t('accepted_offerta') }} </span>
                        <a target="_blank" href="/page/privacy-policy">{{
                          $t('accepted_offerta_text')
                        }}</a>
                        <span> {{ $t('agrement') }}</span>
                      </label>
                    </div>
                    <ButtonMore
                      :disabled="!recaptchaToken"
                      variant="secondary"
                      title="send_application"
                      class="lightBlueBtn"
                      @click="sendMessage"
                    >
                    </ButtonMore>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="contact_main"
              style="background: white; margin-top: 24px"
            >
              <h2 style="margin-bottom: 20px !important">
                {{ $t('social_media') }}
              </h2>
              <div
                v-if="footerSite"
                style="gap: 12px !important"
                class="socials-animate"
              >
                <a target="_blank" :href="footerSite.facebook">
                  <i>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="6" fill="#F6F8FB" />
                      <path
                        d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z"
                        fill="#768194"
                      />
                    </svg>
                  </i>
                </a>
                <a target="_blank" :href="footerSite.youtube">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="6" fill="#F6F8FB" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.2 10.6999C22.9 10.8999 23.4 11.3999 23.6 12.0999C24 13.3999 24 15.9999 24 15.9999C24 15.9999 24 18.5999 23.7 19.8999C23.5 20.5999 23 21.0999 22.3 21.2999C21 21.5999 16 21.5999 16 21.5999C16 21.5999 10.9 21.5999 9.7 21.2999C9 21.0999 8.5 20.5999 8.3 19.8999C8 18.5999 8 15.9999 8 15.9999C8 15.9999 8 13.3999 8.2 12.0999C8.4 11.3999 8.90001 10.8999 9.60001 10.6999C10.9 10.3999 15.9 10.3999 15.9 10.3999C15.9 10.3999 21 10.3999 22.2 10.6999ZM14.4 13.5999L18.6 15.9999L14.4 18.3999V13.5999Z"
                      fill="#768194"
                    />
                  </svg>
                </a>
                <a target="_blank" :href="footerSite.instagram">
                  <i>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="6" fill="#F6F8FB" />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.9992 11.7C13.5992 11.7 11.6992 13.6 11.6992 16C11.6992 18.4 13.5992 20.2999 15.9992 20.2999C18.3992 20.2999 20.2992 18.4 20.2992 16C20.2992 13.6 18.3992 11.7 15.9992 11.7ZM13.1992 16C13.1992 17.6 14.4992 18.7999 15.9992 18.7999C17.4992 18.7999 18.7992 17.5 18.7992 16C18.7992 14.4 17.4992 13.2 15.9992 13.2C14.3992 13.2 13.1992 14.5 13.1992 16Z"
                        fill="#768194"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5992 7.69995H19.3992C20.2992 7.79995 20.8992 7.89995 21.3992 8.09995C21.9992 8.39995 22.3992 8.59995 22.8992 9.09995C23.3992 9.59995 23.6992 10.1 23.8992 10.6C24.0992 11.1 24.2992 11.7 24.2992 12.6V19.4C24.1992 20.3 24.0992 20.9 23.8992 21.4C23.5992 22 23.3992 22.4 22.8992 22.9C22.3992 23.4 21.8992 23.7 21.3992 23.9C20.8992 24.1 20.2992 24.2999 19.3992 24.2999H12.5992C11.6992 24.1999 11.0992 24.1 10.5992 23.9C9.99922 23.6 9.59922 23.4 9.09922 22.9C8.59922 22.4 8.29922 21.9 8.09922 21.4C7.89922 20.9 7.69922 20.3 7.69922 19.4V12.6C7.79922 11.7 7.89922 11.1 8.09922 10.6C8.39922 9.99995 8.59922 9.59995 9.09922 9.09995C9.59922 8.59995 10.0992 8.29995 10.5992 8.09995C11.0992 7.89995 11.6992 7.69995 12.5992 7.69995ZM12.5992 9.19995H19.3992C20.0755 9.19995 20.4659 9.34286 20.7517 9.44747C20.804 9.46662 20.8528 9.48448 20.8992 9.49995C20.9826 9.54162 21.062 9.57913 21.1375 9.61484C21.4244 9.75041 21.6618 9.86256 21.8992 10.1C22.1992 10.4 22.3992 10.7 22.4992 11.1C22.5992 11.4 22.6992 11.8 22.7992 12.6V19.4C22.7992 20.0762 22.6563 20.4666 22.5517 20.7524C22.5326 20.8047 22.5147 20.8535 22.4992 20.9C22.4575 20.9834 22.4201 21.0626 22.3843 21.1382C22.2488 21.4252 22.1366 21.6626 21.8992 21.9C21.5992 22.2 21.2992 22.4 20.8992 22.4999C20.5992 22.5999 20.1992 22.7 19.3992 22.7999H12.5992C11.923 22.7999 11.5326 22.657 11.2467 22.5524C11.1944 22.5333 11.1456 22.5154 11.0992 22.4999C11.0157 22.4582 10.9366 22.4208 10.8609 22.3851C10.574 22.2495 10.3366 22.1373 10.0992 21.9C9.79922 21.6 9.59922 21.3 9.49922 20.9C9.39922 20.6 9.29922 20.2 9.19922 19.4V12.6C9.19922 11.9237 9.34213 11.5333 9.44674 11.2475C9.46589 11.1952 9.48375 11.1464 9.49922 11.1C9.54092 11.0165 9.57838 10.9373 9.61411 10.8617C9.74967 10.5747 9.86183 10.3373 10.0992 10.1C10.3992 9.79995 10.6992 9.59995 11.0992 9.49995C11.3992 9.39995 11.7992 9.29995 12.5992 9.19995Z"
                        fill="#768194"
                      />
                      <path
                        d="M21.3992 11.6C21.3992 12.1522 20.9515 12.6 20.3992 12.6C19.8469 12.6 19.3992 12.1522 19.3992 11.6C19.3992 11.0477 19.8469 10.6 20.3992 10.6C20.9515 10.6 21.3992 11.0477 21.3992 11.6Z"
                        fill="#768194"
                      />
                    </svg>
                  </i>
                </a>

                <a target="_blank" :href="footerSite.telegram">
                  <i>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="6" fill="#F6F8FB" />
                      <path
                        d="M16.6919 12.0074C15.2589 12.6034 12.3949 13.8371 8.09992 15.7083C7.40248 15.9856 7.03714 16.257 7.00388 16.5223C6.94767 16.9706 7.50915 17.1472 8.27374 17.3876C8.37774 17.4203 8.4855 17.4542 8.59598 17.4901C9.34822 17.7346 10.3601 18.0207 10.8862 18.0321C11.3633 18.0424 11.8959 17.8457 12.4839 17.4419C16.4968 14.7331 18.5683 13.3639 18.6983 13.3344C18.7901 13.3136 18.9172 13.2874 19.0034 13.3639C19.0895 13.4405 19.0811 13.5855 19.0719 13.6244C19.0163 13.8615 16.8123 15.9106 15.6717 16.971C15.3161 17.3015 15.0639 17.536 15.0124 17.5896C14.8969 17.7096 14.7791 17.823 14.666 17.9321C13.9672 18.6058 13.4431 19.111 14.695 19.936C15.2967 20.3325 15.7781 20.6603 16.2584 20.9874L16.2585 20.9875C16.783 21.3446 17.3061 21.7009 17.9829 22.1446C18.1554 22.2576 18.32 22.375 18.4804 22.4894L18.4805 22.4894C19.0909 22.9246 19.6393 23.3155 20.3168 23.2532C20.7105 23.217 21.1172 22.8468 21.3237 21.7427C21.8118 19.1335 22.7712 13.4801 22.9929 11.1505C23.0123 10.9464 22.9879 10.6851 22.9683 10.5705C22.9486 10.4558 22.9076 10.2924 22.7586 10.1715C22.582 10.0283 22.3095 9.99805 22.1877 10.0001C21.6335 10.01 20.7834 10.3056 16.6919 12.0074Z"
                        fill="#768194"
                      />
                    </svg>
                  </i>
                </a>

                <a target="_blank" :href="footerSite.linkedin">
                  <i>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="6" fill="#F6F8FB" />
                      <path
                        d="M11.6 24H8.2V13.3H11.6V24ZM9.9 11.8C8.8 11.8 8 11 8 9.9C8 8.8 8.9 8 9.9 8C11 8 11.8 8.8 11.8 9.9C11.8 11 11 11.8 9.9 11.8ZM24 24H20.6V18.2C20.6 16.5 19.9 16 18.9 16C17.9 16 16.9 16.8 16.9 18.3V24H13.5V13.3H16.7V14.8C17 14.1 18.2 13 19.9 13C21.8 13 23.8 14.1 23.8 17.4V24H24Z"
                        fill="#768194"
                      />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <b-modal
          id="modal-center"
          v-model="modalShow"
          class="modalka position-absolute"
          hide-footer
        >
          <div class="d-block">
            <span
              class="cursor-pointer position-absolute"
              style="right: 14px"
              @click="modalShow = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M9 9L27 27M27 9L9 27"
                  stroke="#5A626C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div class="text-center modal__body">
              <svg
                width="132"
                height="132"
                viewBox="0 0 132 132"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1322_13891)">
                  <mask
                    id="mask0_1322_13891"
                    style="mask-type: luminance"
                    maskUnits="userSpaceOnUse"
                    x="-42"
                    y="-42"
                    width="216"
                    height="216"
                  >
                    <path
                      d="M173.061 -41.0586H-41.0566V173.059H173.061V-41.0586Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1322_13891)">
                    <path
                      d="M65.9988 20.3589C91.1882 20.3589 111.64 40.8108 111.64 66.0002C111.64 91.1897 91.1882 111.642 65.9988 111.642C40.8093 111.642 20.3574 91.1897 20.3574 66.0002C20.3574 40.8108 40.8093 20.3589 65.9988 20.3589Z"
                      fill="#2FCB82"
                    />
                    <path
                      d="M65.9988 20.3589C91.1882 20.3589 111.64 40.8108 111.64 66.0002C111.64 91.1897 91.1882 111.642 65.9988 111.642C40.8093 111.642 20.3574 91.1897 20.3574 66.0002C20.3574 40.8108 40.8093 20.3589 65.9988 20.3589Z"
                      stroke="#2FCB82"
                      stroke-width="5.11502"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M87.3005 51.4062L57.5542 81.1525L42.209 65.8073"
                      stroke="white"
                      stroke-width="9.47059"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1322_13891">
                    <rect width="132" height="132" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p>{{ $t('success_send') }}</p>
              <p>
                {{ $t('feedback_successfully_sent') }}
              </p>
              <button-more
                class="w-100"
                :title="$t('got_it')"
                variant="secondary"
                icon
                @click="modalShow = false"
              />
            </div>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import { serialize } from 'object-to-formdata'
import { mapState } from 'vuex'
import HashTags from '../../components/hashTags'
import BreadCrumbs from '~/components/Breadcrumb'
import sideNav from '~/components/sideNav'

export default {
  components: {
    HashTags,
    sideNav,
    BreadCrumbs,
  },
  data() {
    return {
      recaptchaToken: '',
      modalShow: false,
      customSearchPlaceholder: 'search country',
      form: {
        sender_name: '',
        email: null,
        phone_number: '',
        message: '',
        checkbox: '',
      },
    }
  },
  validations: {
    form: {
      sender_name: { required, minLength: minLength(3) },
      email: { required, email },
      phone_number: { required, minLength: minLength(7) },
      message: { required, minLength: minLength(3) },
      checkbox: { required },
    },
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('contact_us'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    inputOptions() {
      return {
        defaultCountry: 'uz',
        mode: 'international',
        dropdownOptions: {
          disabledDialCode: true,
          showDialCodeInList: true,
          showFlags: true,
          showSearchBox: true,
          width: '260px',
          placeholder: 'Search or select country',
        },
        validCharactersOnly: true,
        inputOptions: {
          showDialCode: true,
          placeholder: '(__) ___ __ __',
          maxlength: 20,
        },
      }
    },

    ...mapState({
      rekvizits: (state) => state.rekvizits.rekvizits,
      footerSite: (state) => state.footer,
    }),
  },

  async fetch() {
    await this.$store.dispatch('rekvizits/fetchRekvizits').catch(() => {})
    await this.$store.dispatch('fetchFooter').catch(() => {})
  },

  methods: {
    onSuccess(e) {
      this.recaptchaToken = e
    },
    sendMessage() {
      this.$v.form.$touch()
      console.log(`this.$v.form.$invalid`, this.$v.form)
      if (!this.$v.form.$invalid) {
        const formData = serialize(Object.assign({}, this.form), {
          indices: true,
        })

        this.$axios
          .post(`contact/`, formData)
          .then((res) => {
            this.modalShow = true
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
            this.$v.$reset()

            // Clear all form inputs
            this.form.sender_name = ''
            this.form.email = ''
            this.form.phone_number = '+998'
            this.form.message = ''
            this.form.checkbox = ''
          })
          .catch(() => {
            this.error = true
          })
          .finally(() => {})
      }
    },
  },
}
</script>

<style lang="scss" scoped>
button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}
button:disabled:hover {
  color: white;
  background: #9ca3af;
}
.container {
  h2 {
    color: #144176;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 132%;
    padding-left: 12px;
    position: relative;
    margin-bottom: 24px;
  }
  h2:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 32px;
    border-radius: 2px 8px 8px 2px;
    background: #2678d9;
  }

  .inner-page {
    display: flex;
    flex-direction: column;
    gap: 16px;
    h6 {
      color: #768194;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      display: flex;
      flex-direction: column;
      gap: 8px;

      span,
      a {
        color: #1d2024;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
      }

      a:hover {
        color: #2678d9;
      }
    }
  }
}

.nav {
  margin-top: 8%;
}

.hasError {
  border: 1px solid red !important;

  &:focus {
    box-shadow: none !important;
  }
}
label {
  color: #5a626c;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
}
.vue-tel-input,
.form-control {
  border-radius: 8px;
  border: 1px solid #e8edf2;
  background: #f6f8fb;
  color: #768194;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  height: 42px !important;
}
textarea {
  min-height: 168px;
}
.vue-tel-input:focus,
.form-control:focus {
  color: #495057 !important;
  background-color: #fff !important;
  border-color: #80bdff !important;
  outline: 0 !important;
  box-shadow: none !important;
}
.vue-tel-input:focus-within {
  box-shadow: none !important;
  & input {
    background: red !important;
  }
}
.offerta {
  color: #23415d;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.08px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.offerta label {
  margin-bottom: 0 !important;
  cursor: pointer;
  color: #5a626c;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  white-space: nowrap;
}
.offerta__p {
  color: red !important;
}

.offerta input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.offerta label {
  position: relative;
  cursor: pointer;
}

.offerta label:before {
  content: '';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid #e8edf2;
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 4px;
}

.offerta input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 3px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #2678d9;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.contact_main {
  padding: 24px;
  border-radius: 12px;
}
.contacts,
.contact_main-first {
  width: 50%;
}
@media screen and (max-width: 991px) {
  .contacts,
  .contact_main-first {
    width: 100%;
  }
  .contacts,
  .contact_main-first {
    margin-bottom: 24px;
  }
}
.hasErrorCeckbox {
  color: red !important;
}
.modal__body {
  & p:nth-child(2) {
    color: #1d2024;
    text-align: center;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    line-height: 132%;
    margin-top: 12px;
    margin-bottom: 8px;
  }
  & p:nth-child(3) {
    color: #768194;
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    margin-bottom: 32px;
  }
}
.contact_title {
  color: #1d2024;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  margin-top: 24px;
}
.contact_subtitle {
  max-width: 580px;
  color: #1d2024;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 60px;
  margin-top: 12px;
}
</style>

<style lang="scss">
.vti__input {
  border-radius: 8px;
  background: #f6f8fb;
  color: #1d2024;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}
.vti__dropdown {
  padding: 0 0 0 7px !important;
  background: transparent;
  position: relative;
}

.vti__dropdown-arrow {
  display: none;
}
.vue-tel-input {
  padding: 4px;
}

.vti__dropdown-list::-webkit-scrollbar {
  width: 2px;
}
.vti__dropdown-list::-webkit-scrollbar-thumb {
  background: #0c458b;
  border-radius: 10px;
}

.vti__search_box {
  width: 98%;
  border: 1px solid transparent;
  border-radius: 0px !important;
  padding: 20px;
}

.vti__search_box:focus {
  border: 1px solid #0c458b;
  transition: all 0.4s;
}

.modal-dialog {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important ;
}
.form-group {
  margin-bottom: 20px;
}
.lightBlueBtn {
  width: max-content !important;
}
.aggremnt {
  color: #1c89c1 !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}
</style>
