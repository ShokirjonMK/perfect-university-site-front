<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div>
      <BreadCrumbs :links="links" />
      <div class="container structure-styles">
        <div class="row">
          <div class="col-12 col-md-9">
            <h1>
              {{ $t('upcoming_conferences') }}
            </h1>
            <b-tabs
              v-if="conferenceYears && conferenceYears.length"
              content-class="mt-3"
            >
              <b-tab
                v-for="(item, index) in conferenceYears"
                :key="index"
                :title="'' + item"
                @click="changeActiveYear(index)"
              >
                <template
                  v-if="upcomingConferences && upcomingConferences.length"
                >
                  <div
                    v-for="(item, idx) in upcomingConferences"
                    :key="idx"
                    class="row conference__card"
                  >
                    <div class="col-12 col-md-3">
                      <div class="conference__card_date">
                        <h1>{{ $moment(item.date).format('D') }}</h1>
                        <h5>
                          {{
                            $moment(item.date)
                              .locale(
                                $i18n.locale == 'sr'
                                  ? 'uz-latn'
                                  : $i18n.locale == 'sr'
                                  ? 'sr'
                                  : $i18n.locale
                              )
                              .format('MMMM')
                          }},
                          {{
                            $moment(item.date)
                              .locale(
                                $i18n.locale == 'sr'
                                  ? 'uz-latn'
                                  : $i18n.locale == 'sr'
                                  ? 'sr'
                                  : $i18n.locale
                              )
                              .format('dddd')
                          }}
                        </h5>
                        <div class="upcoming">
                          <h6>
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_4500_60839)">
                                <path
                                  d="M7.375 7.8125C7.375 8.15768 7.65482 8.4375 8 8.4375C8.34518 8.4375 8.625 8.15768 8.625 7.8125C8.625 7.46732 8.34518 7.1875 8 7.1875C7.65482 7.1875 7.375 7.46732 7.375 7.8125Z"
                                  fill="white"
                                />
                                <path
                                  d="M14.125 1.25H13.375V0.625C13.375 0.279822 13.0952 0 12.75 0C12.4048 0 12.125 0.279822 12.125 0.625V1.25H3.875V0.625C3.875 0.279822 3.59518 0 3.25 0C2.90482 0 2.625 0.279822 2.625 0.625V1.25H1.875C0.841125 1.25 0 2.09113 0 3.125V14.125C0 15.1589 0.841125 16 1.875 16H6.03125H6.125H6.89848C7.37248 16 7.62365 15.3612 7.34609 14.977C7.24582 14.8382 7.08724 14.75 6.91599 14.75H6.125H6.03125H1.875C1.53038 14.75 1.25 14.4696 1.25 14.125V5.875H14.75V7.125V7.1875V7.19059C14.9079 7.29303 15.0601 7.40336 15.2063 7.52104C15.4996 7.75724 16 7.56412 16 7.1875V7.125V3.125C16 2.09113 15.1589 1.25 14.125 1.25ZM14.75 4.625H1.25V3.125C1.25 2.78038 1.53038 2.5 1.875 2.5H2.625V3.125C2.625 3.47018 2.90482 3.75 3.25 3.75C3.59518 3.75 3.875 3.47018 3.875 3.125V2.5H12.125V3.125C12.125 3.47018 12.4048 3.75 12.75 3.75C13.0952 3.75 13.375 3.47018 13.375 3.125V2.5H14.125C14.4696 2.5 14.75 2.78038 14.75 3.125V4.625Z"
                                  fill="white"
                                />
                                <path
                                  d="M11.7812 7.5625C9.45503 7.5625 7.5625 9.45503 7.5625 11.7812C7.5625 14.1075 9.45503 16 11.7812 16C14.1075 16 16 14.1075 16 11.7812C16 9.45503 14.1075 7.5625 11.7812 7.5625ZM11.7812 14.75C10.1443 14.75 8.8125 13.4182 8.8125 11.7812C8.8125 10.1443 10.1443 8.8125 11.7812 8.8125C13.4182 8.8125 14.75 10.1443 14.75 11.7812C14.75 13.4182 13.4182 14.75 11.7812 14.75Z"
                                  fill="white"
                                />
                                <path
                                  d="M12.375 10.3125C12.375 9.96732 12.0952 9.6875 11.75 9.6875C11.4048 9.6875 11.125 9.96732 11.125 10.3125V11.4062C11.125 11.9585 11.5727 12.4062 12.125 12.4062H12.8125C13.1577 12.4062 13.4375 12.1264 13.4375 11.7812C13.4375 11.4361 13.1577 11.1562 12.8125 11.1562H12.375V10.3125Z"
                                  fill="white"
                                />
                                <path
                                  d="M4.875 10.3125C4.875 10.6577 5.15482 10.9375 5.5 10.9375C5.84518 10.9375 6.125 10.6577 6.125 10.3125C6.125 9.96732 5.84518 9.6875 5.5 9.6875C5.15482 9.6875 4.875 9.96732 4.875 10.3125Z"
                                  fill="white"
                                />
                                <path
                                  d="M2.375 10.3125C2.375 10.6577 2.65482 10.9375 3 10.9375C3.34518 10.9375 3.625 10.6577 3.625 10.3125C3.625 9.96732 3.34518 9.6875 3 9.6875C2.65482 9.6875 2.375 9.96732 2.375 10.3125Z"
                                  fill="white"
                                />
                                <path
                                  d="M2.375 7.8125C2.375 8.15768 2.65482 8.4375 3 8.4375C3.34518 8.4375 3.625 8.15768 3.625 7.8125C3.625 7.46732 3.34518 7.1875 3 7.1875C2.65482 7.1875 2.375 7.46732 2.375 7.8125Z"
                                  fill="white"
                                />
                                <path
                                  d="M2.375 12.8125C2.375 13.1577 2.65482 13.4375 3 13.4375C3.34518 13.4375 3.625 13.1577 3.625 12.8125C3.625 12.4673 3.34518 12.1875 3 12.1875C2.65482 12.1875 2.375 12.4673 2.375 12.8125Z"
                                  fill="white"
                                />
                                <path
                                  d="M4.875 7.8125C4.875 8.15768 5.15482 8.4375 5.5 8.4375C5.84518 8.4375 6.125 8.15768 6.125 7.8125C6.125 7.46732 5.84518 7.1875 5.5 7.1875C5.15482 7.1875 4.875 7.46732 4.875 7.8125Z"
                                  fill="white"
                                />
                                <path
                                  d="M4.875 12.8125C4.875 13.1577 5.15482 13.4375 5.5 13.4375C5.84518 13.4375 6.125 13.1577 6.125 12.8125C6.125 12.4673 5.84518 12.1875 5.5 12.1875C5.15482 12.1875 4.875 12.4673 4.875 12.8125Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_4500_60839">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            {{ $t(item.status) }}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-9">
                      <div class="conference__card_body">
                        <div class="conference__card_header">
                          <div class="conference__card_header_img">
                            <img
                              src="/image/financial-faculte.svg"
                              alt="facult"
                            />
                          </div>
                          <NuxtLink
                            :to="`/${$i18n.locale}/science/upcoming-conference/${item.id}`"
                          >
                            <h2>{{ item.title }}</h2>
                          </NuxtLink>
                        </div>
                        <p
                          class="conference__card_desc"
                          v-html="item.description"
                        ></p>
                        <div
                          class="conference__card_bottom d-flex justify-content-between"
                        >
                          <span class="time"
                            >{{ getHourMinute(item.start_time) }} -
                            {{ getHourMinute(item.end_time) }}</span
                          >
                          <div
                            class="conference__card_buttons d-flex align-items-center justify-content-between"
                          >
                            <button
                              class="light-btn"
                              @click="
                                $bvModal.show('bv-modal-example-conference')
                              "
                            >
                              {{ $t('submit_an_application') }}
                            </button>
                            <NuxtLink
                              :to="`/${$i18n.locale}/science/upcoming-conference/${item.id}`"
                            >
                              <button>{{ $t('more') }}</button>
                            </NuxtLink>
                          </div>
                        </div>
                        <div class="line"></div>
                      </div>
                    </div>
                  </div>
                </template>
              </b-tab>
            </b-tabs>
          </div>
          <div class="col-12 col-md-3">
            <sideScience />
            <sidebar-appeal />
          </div>
        </div>
      </div>
    </div>
    <b-modal id="bv-modal-example-conference">
      <div class="row conference__modal">
        <div class="col-md-8 col-12 order-md-0 order-1 conference__modal_right">
          <p class="modal__title">{{ $t('admission_form') }}</p>
          <!--name-->
          <div class="flex flex-col">
            <label class="apply-label mt-0" for="name">{{
              $t('name_surname')
            }}</label>
            <input
              id="name"
              v-model="form.name"
              :placeholder="$t('write_full_name')"
              :class="{ hasError: $v.form.name.$error }"
              class="apply-input"
              type="text"
            />
          </div>
          <!-- phone -->
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="flex flex-col">
                <label class="apply-label mt-16 mb-8" for="name">{{
                  $t('phone_number')
                }}</label>
                <vue-tel-input
                  v-model="form.phone1"
                  v-bind="inputOptions"
                  :class="{ hasError: $v.form.phone1.$error }"
                ></vue-tel-input>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="flex flex-col">
                <label class="apply-label mt-16 mb-8" for="name">{{
                  $t('phone_number')
                }}</label>
                <vue-tel-input
                  v-model="form.phone2"
                  v-bind="inputOptions"
                  :class="{ hasError: $v.form.phone2.$error }"
                ></vue-tel-input>
              </div>
            </div>
          </div>
          <!-- mail -->
          <div class="flex flex-col">
            <label class="apply-label" for="mail">{{
              $t('email_address')
            }}</label>
            <input
              id="mail"
              v-model="form.mail"
              placeholder="namuna@tpu.uz"
              :class="{ hasError: $v.form.mail.$error }"
              class="apply-input"
              type="email"
            />
          </div>
          <!-- file -->
          <div class="flex flex-col position-relative">
            <label class="apply-label" for="name">{{ $t('article') }}</label>
            <input
              id="name"
              :placeholder="$t('enter_your_file')"
              :class="{ hasError: $v.form.file.$error }"
              class="apply-input apply-input-file"
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
          <button class="conference__submit" @click="postForm">
            {{ $t('send') }}
          </button>
        </div>
        <div
          class="col-md-4 col-12 order-md-1 order-0 conference__modal_left position-relative"
        >
          <i @click="$bvModal.hide('bv-modal-example-conference')">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 9L9 27"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 9L27 27"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
          <img src="/image/modal-logo.svg" alt="Modal logo" />
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { email, maxLength, minLength, required } from 'vuelidate/lib/validators'
import sideScience from '~/components/sideScience'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    sideScience,
    BreadCrumbs,
  },
  data() {
    return {
      conferenceYears: [2023, 2024, 2025, 2026],
      form: {
        name: '',
        mail: '',
        file: '',
        phone1: '',
        phone2: '',
      },
      cardData: [
        {
          id: 1,
          date: new Date(),
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias.',
          shortDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias.',
          term: '10:00 - 14:00',
          status: 'upcoming',
        },
        {
          id: 2,
          date: new Date(),
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias.',
          shortDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias.',
          term: '10:00 - 14:00',
          status: 'upcoming',
        },
        {
          id: 3,
          date: new Date(),
          title:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias.',
          shortDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias.',
          term: '10:00 - 14:00',
          status: 'upcoming',
        },
      ],
    }
  },
  validations: {
    form: {
      name: { required, minLength: minLength(3), maxLength: maxLength(20) },
      mail: { email, required },
      file: { required },
      phone1: { required },
      phone2: {},
    },
  },
  methods: {
    readURL(event) {
      this.form.file = event.target.files[0]
    },
    submitModal() {
      this.$v.form.$touch()
      if (!this.$v.form.$anyError) {
        this.$bvModal.hide('bv-modal-example')
        this.$bvToast.toast('Your message has been sent successfully', {
          title: 'Success',
          variant: 'success',
          solid: true,
        })
      }
    },
    async changeActiveYear(index) {
      await this.$store
        .dispatch(
          'conferences/fetchUpcomingConferences',
          this.conferenceYears[index]
        )
        .catch(() => {})
    },
    getHourMinute(str) {
      return str.split(':')?.slice(0, 2).join(':')
    },
    async postForm() {
      this.$v.form.$touch()
      if (!this.$v.form.$invalid) {
        try {
          const formData = new FormData()
          formData.append('full_name', this.form.name)
          formData.append('email', this.form.mail)
          formData.append('file', this.form.file)
          formData.append('phone_number', this.form.phone1)
          formData.append('addition_phone_number', this.form.phone2)
          formData.append('conference', 1)
          await this.$axios.$post('conference/application/', formData)
          this.$bvToast.toast(this.$t('sent_successfully'), {
            title: this.$t('success'),
            variant: 'success',
            solid: true,
          })
          this.$bvModal.hide('bv-modal-example-conference')
        } catch (e) {
          this.$bvToast.toast(this.$t('smth_went_wrong'), {
            title: this.$t('error'),
            variant: 'danger',
            solid: true,
          })
        }
      } else {
        console.log('error')
      }
    },
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('science'),
          link: `${this.$i18n.locale}/science`,
        },
        {
          title: this.$t('conferences'),
          link: `${this.$i18n.locale}/science/conferences`,
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
      upcomingConferences: (state) => state.conferences.upcomingConferences,
    }),
  },

  async fetch() {
    if (this.conferenceYears.length) {
      await this.$store
        .dispatch(
          'conferences/fetchUpcomingConferences',
          this.conferenceYears[0]
        )
        .catch(() => {})
    }
  },
}
</script>

<style scoped lang="scss">
.structure-styles {
  margin-bottom: 0 !important;
}

h1 {
  border: none;
  margin-bottom: 36px;
}

.conference__card {
  margin-bottom: 28px;

  &:hover {
    .line {
      width: 100%;
    }
  }

  &_date {
    border: 1px solid rgba(159, 171, 185, 0.2);
    border-radius: 4px;
    background-size: contain;
    background-image: url('~static/image/ceremony-date-card-bg.svg');
    background-position: bottom;
    background-repeat: no-repeat;
    min-height: 228px;
    position: relative;
    text-align: center;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 4rem;
      line-height: 60px;
      text-align: center;
      color: #003b81;
      margin-bottom: 8px;
    }

    h5 {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 17px;
      text-align: center;
      color: #003b81;
      margin-bottom: 59px;
    }

    .upcoming {
      position: absolute;
      bottom: 0;
      width: 100%;
      background: #003b81;
      padding: 10px 29.5px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      h6 {
        font-style: normal;
        font-weight: 500;
        font-size: 0.8125rem;
        line-height: 20px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          margin-right: 6px;
        }
      }
    }
  }

  &_header {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &_img {
      width: 72px !important;
      height: 52px;
      background-color: #ffffff;
      border: 1px solid rgba(159, 171, 185, 0.2);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;

      img {
        width: 36px;
        height: 36px;
        object-fit: cover;

        @media (max-width: 767px) {
          width: 24px;
          height: 24px;
        }
      }
    }

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 26px;
      color: #44494f;
      margin: 0;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #003b81;
      }
    }
  }

  &_body {
    padding: 28px 16px 0px 28px;
    background: #f9fafc;
    border: 1px solid rgba(159, 171, 185, 0.2);
    border-radius: 4px;
    min-height: 228px;
  }

  &_desc {
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 24px;
      color: #9fabb9 !important;
      margin-top: 12px;
    }
  }

  &_bottom {
    margin-top: 48px;
    column-gap: 12px;

    .time {
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 20px;
      color: #44494f;
      margin-bottom: 16px;
    }

    .line {
      background: #6db0ff;
      width: 16%;
      height: 2px;
      transition: 0.3s all;
      margin-top: 13px;
    }

    @media (max-width: 1200px) {
      flex-direction: column-reverse;
      margin-top: 8px;
      row-gap: 12px;
    }
  }

  &_buttons {
    column-gap: 12px;
    margin-top: -34px;

    .light-btn {
      border: 1px solid rgba(159, 171, 185, 0.2);
      background: #ffffff;
      color: #024da5;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #024da5;
        color: #ffffff;
      }
    }

    button {
      background: #024da5;
      border-radius: 4px;
      color: white;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 20px;
      text-align: center;
      padding: 10px 49px;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #003b81;
      }
    }

    @media (max-width: 1200px) {
      margin-top: 8px;
      flex-direction: column;
      row-gap: 12px;
    }
  }
}

.conference__modal {
  margin-left: 0;
  margin-right: 0;
}

.modal__title {
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 30px;
  color: #44494f;
  margin-bottom: 24px;
}

.conference__modal_right {
  padding: 28px 24px 24px 24px;
}

.conference__modal_left {
  background-color: #024da5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  svg {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  i {
    cursor: pointer;

    &:hover {
      svg {
        path {
          stroke: #87a2ca;
        }
      }
    }
  }
}

.conference__submit {
  width: 100%;
  padding: 12px;
  background: #024da5;
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
  color: #ffffff;
  transition: all 0.3s ease-in-out;
  margin-top: 286px;

  &:hover {
    background: #003b81;
  }
}

.apply-input {
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #3794dd;
  }
}
</style>

<style scoped lang="scss">
.modal-body {
  padding: 0 !important;
}

.modal {
  overflow: hidden !important;
}

.modal-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.vue-tel-input {
  position: relative;
  border-color: #e6e8ec;
  transition: all 0.2s ease-in-out;
}

.vue-tel-input:focus-within {
  box-shadow: none;
  border-color: #3794dd;
}

.vti__input {
  padding-left: 12px;
  border: none !important;
  outline: none !important;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 20px;
  color: #44494f;
}

.vti__dropdown {
  background: #f0f3f6 !important;
  border-radius: 2px !important;
  padding: 12px !important;
}

.vti__dropdown-list {
  max-width: 280px;
  max-height: 324px;
  padding: 0 !important;
  background: #fff;
  border-radius: 8px;
}

.vti__dropdown-list.below {
  top: 46px !important;
  z-index: 9999 !important;
}

.vti__dropdown-item:hover {
  background: #e5f5fb;
}
</style>
