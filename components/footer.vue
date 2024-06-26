<template>
  <div class="footer mt-5">
    <div class="container-fluid st-floor">
      <div class="container iqtisodiyot">
        <div class="row align-items-center">
          <div class="col-12 col-lg-3 d-lg-flex text-lg-left logo_footer">
            <div>
              <img src="/image/footer-oz.svg" alt="Footer logo uz" />
            </div>
          </div>
          <div class="col-12 col-lg-3 footer-contacts">
            <div v-if="footerSite" class="socials-animate">
              <a
                class="show_tooltip"
                target="_blank"
                :href="footerSite.facebook"
              >
                <i>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="28"
                      height="28"
                      rx="6"
                      fill="white"
                      fill-opacity="0.12"
                    />
                    <path
                      d="M21 14C21 10.15 17.85 7 14 7C10.15 7 7 10.15 7 14C7 17.5 9.5375 20.3875 12.8625 20.9125V16.0125H11.1125V14H12.8625V12.425C12.8625 10.675 13.9125 9.7125 15.4875 9.7125C16.275 9.7125 17.0625 9.8875 17.0625 9.8875V11.6375H16.1875C15.3125 11.6375 15.05 12.1625 15.05 12.6875V14H16.975L16.625 16.0125H14.9625V21C18.4625 20.475 21 17.5 21 14Z"
                      fill="#E8EDF2"
                    />
                  </svg>
                </i>
              </a>
              <a
                target="_blank"
                class="show_tooltip"
                :href="footerSite.youtube"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="28"
                    height="28"
                    rx="6"
                    fill="white"
                    fill-opacity="0.12"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.425 9.3626C20.0375 9.5376 20.475 9.9751 20.65 10.5876C21 11.7251 21 14.0001 21 14.0001C21 14.0001 21 16.2751 20.7375 17.4126C20.5625 18.0251 20.125 18.4626 19.5125 18.6376C18.375 18.9001 14 18.9001 14 18.9001C14 18.9001 9.5375 18.9001 8.4875 18.6376C7.875 18.4626 7.4375 18.0251 7.2625 17.4126C7 16.2751 7 14.0001 7 14.0001C7 14.0001 7 11.7251 7.175 10.5876C7.35 9.9751 7.78751 9.5376 8.40001 9.3626C9.53751 9.1001 13.9125 9.1001 13.9125 9.1001C13.9125 9.1001 18.375 9.1001 19.425 9.3626ZM12.6 11.9001L16.275 14.0001L12.6 16.1001V11.9001Z"
                    fill="#E8EDF2"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                class="show_tooltip"
                :href="footerSite.instagram"
              >
                <i>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="28"
                      height="28"
                      rx="6"
                      fill="white"
                      fill-opacity="0.12"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9998 10.2373C11.8998 10.2373 10.2373 11.8998 10.2373 13.9998C10.2373 16.0998 11.8998 17.7623 13.9998 17.7623C16.0998 17.7623 17.7623 16.0998 17.7623 13.9998C17.7623 11.8998 16.0998 10.2373 13.9998 10.2373ZM11.5498 13.9998C11.5498 15.3998 12.6873 16.4498 13.9998 16.4498C15.3123 16.4498 16.4498 15.3123 16.4498 13.9998C16.4498 12.5998 15.3123 11.5498 13.9998 11.5498C12.5998 11.5498 11.5498 12.6873 11.5498 13.9998Z"
                      fill="#E8EDF2"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.0248 6.7373H16.9748C17.7623 6.8248 18.2873 6.91231 18.7248 7.0873C19.2498 7.34981 19.5998 7.5248 20.0373 7.9623C20.4748 8.39981 20.7373 8.83731 20.9123 9.27481C21.0873 9.71231 21.2623 10.2373 21.2623 11.0248V16.9748C21.1748 17.7623 21.0873 18.2873 20.9123 18.7248C20.6498 19.2498 20.4748 19.5998 20.0373 20.0373C19.5998 20.4748 19.1623 20.7373 18.7248 20.9123C18.2873 21.0873 17.7623 21.2623 16.9748 21.2623H11.0248C10.2373 21.1748 9.71231 21.0873 9.27481 20.9123C8.7498 20.6498 8.39981 20.4748 7.96231 20.0373C7.52481 19.5998 7.26231 19.1623 7.08731 18.7248C6.91231 18.2873 6.7373 17.7623 6.7373 16.9748V11.0248C6.8248 10.2373 6.91231 9.71231 7.08731 9.27481C7.34981 8.7498 7.52481 8.39981 7.96231 7.9623C8.39981 7.5248 8.83731 7.2623 9.27481 7.0873C9.71231 6.91231 10.2373 6.7373 11.0248 6.7373ZM11.0248 8.0498H16.9748C17.5665 8.0498 17.9081 8.17485 18.1582 8.26639C18.204 8.28314 18.2467 8.29877 18.2873 8.31231C18.3602 8.34877 18.4297 8.38159 18.4958 8.41283C18.7469 8.53145 18.9546 8.62959 19.1623 8.83731C19.4248 9.09981 19.5998 9.36231 19.6873 9.71231C19.7748 9.97481 19.8623 10.3248 19.9498 11.0248V16.9748C19.9498 17.5665 19.8248 17.9081 19.7332 18.1582C19.7165 18.204 19.7008 18.2467 19.6873 18.2873C19.6508 18.3603 19.6181 18.4296 19.5868 18.4958C19.4682 18.7469 19.37 18.9546 19.1623 19.1623C18.8998 19.4248 18.6373 19.5998 18.2873 19.6873C18.0248 19.7748 17.6748 19.8623 16.9748 19.9498H11.0248C10.4331 19.9498 10.0915 19.8248 9.84138 19.7332C9.79562 19.7165 9.75291 19.7008 9.71231 19.6873C9.63926 19.6508 9.57002 19.6181 9.5038 19.5868C9.25273 19.4682 9.04502 19.37 8.83731 19.1623C8.57481 18.8998 8.39981 18.6373 8.31231 18.2873C8.2248 18.0248 8.13731 17.6748 8.0498 16.9748V11.0248C8.0498 10.4331 8.17485 10.0915 8.26639 9.84139C8.28314 9.79562 8.29877 9.75291 8.31231 9.71231C8.3488 9.63932 8.38157 9.56996 8.41283 9.5038C8.53145 9.25273 8.62959 9.04502 8.83731 8.83731C9.09981 8.5748 9.36231 8.39981 9.71231 8.31231C9.97481 8.2248 10.3248 8.13731 11.0248 8.0498Z"
                      fill="#E8EDF2"
                    />
                    <path
                      d="M18.7248 10.1498C18.7248 10.6331 18.3331 11.0248 17.8498 11.0248C17.3666 11.0248 16.9748 10.6331 16.9748 10.1498C16.9748 9.66656 17.3666 9.27481 17.8498 9.27481C18.3331 9.27481 18.7248 9.66656 18.7248 10.1498Z"
                      fill="#E8EDF2"
                    />
                  </svg>
                </i>
              </a>

              <a
                target="_blank"
                class="show_tooltip"
                :href="footerSite.telegram"
              >
                <i>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="28"
                      height="28"
                      rx="6"
                      fill="white"
                      fill-opacity="0.12"
                    />
                    <path
                      d="M14.6054 10.5065C13.3515 11.028 10.8455 12.1074 7.08743 13.7448C6.47717 13.9874 6.15749 14.2248 6.12839 14.457C6.07921 14.8493 6.5705 15.0038 7.23952 15.2142C7.33052 15.2428 7.42481 15.2724 7.52148 15.3038C8.17969 15.5178 9.0651 15.7681 9.52539 15.7781C9.94291 15.7871 10.4089 15.6149 10.9234 15.2617C14.4347 12.8914 16.2472 11.6934 16.361 11.6676C16.4413 11.6494 16.5526 11.6264 16.628 11.6934C16.7033 11.7604 16.6959 11.8873 16.6879 11.9214C16.6393 12.1288 14.7108 13.9218 13.7127 14.8496C13.4016 15.1389 13.1809 15.344 13.1358 15.3909C13.0348 15.4959 12.9318 15.5952 12.8328 15.6906C12.2213 16.2801 11.7627 16.7221 12.8581 17.444C13.3846 17.7909 13.8058 18.0778 14.2261 18.364L14.2263 18.3641C14.6852 18.6766 15.1429 18.9883 15.7351 19.3765C15.8859 19.4754 16.03 19.5781 16.1704 19.6782L16.1704 19.6782C16.7046 20.059 17.1844 20.4011 17.7772 20.3465C18.1217 20.3148 18.4775 19.9909 18.6582 19.0249C19.0853 16.7418 19.9248 11.7951 20.1188 9.75666C20.1358 9.57806 20.1144 9.3495 20.0972 9.24917C20.08 9.14883 20.0442 9.00588 19.9137 8.90005C19.7593 8.77472 19.5208 8.7483 19.4142 8.75008C18.9293 8.75872 18.1854 9.01738 14.6054 10.5065Z"
                      fill="#E8EDF2"
                    />
                  </svg>
                </i>
              </a>

              <a
                target="_blank"
                class="show_tooltip"
                :href="footerSite.linkedin"
              >
                <i>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="28"
                      height="28"
                      rx="6"
                      fill="white"
                      fill-opacity="0.12"
                    />
                    <path
                      d="M10.15 21H7.175V11.6375H10.15V21ZM8.6625 10.325C7.7 10.325 7 9.625 7 8.6625C7 7.7 7.7875 7 8.6625 7C9.625 7 10.325 7.7 10.325 8.6625C10.325 9.625 9.625 10.325 8.6625 10.325ZM21 21H18.025V15.925C18.025 14.4375 17.4125 14 16.5375 14C15.6625 14 14.7875 14.7 14.7875 16.0125V21H11.8125V11.6375H14.6125V12.95C14.875 12.3375 15.925 11.375 17.4125 11.375C19.075 11.375 20.825 12.3375 20.825 15.225V21H21Z"
                      fill="#E8EDF2"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex footer-linkers mt-3 md:mt-0">
            <div class="hello1">
              <p class="linker-title">{{ $t('email') }}</p>
              <p class="linker-phone">
                <a :href="'mailto:' + footerSite?.email">{{
                  footerSite?.email
                }}</a>
              </p>
            </div>
            <div v-if="footerSite?.address">
              <p class="linker-title">{{ $t('address') }}</p>
              <p class="linker-phone">
                <a
                  :href="footerSite?.location"
                  target="_blank"
                  v-html="footerSite?.address"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid nd-floor">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 d-lg-block footer__left">
            <div>
              <p class="footer__left-p">{{ $t('todays_teachers1') }}</p>
              <p class="footer__left-p">{{ $t('todays_teachers3') }}</p>
            </div>
            <div class="ctrl d-lg-block">
              <i18n path="ctrl_enter" tag="div" class=""
                ><template #cntrl__enter
                  ><span class="footer__cntrl">{{
                    $t('cntrl__enter')
                  }}</span></template
                ></i18n
              >
            </div>
          </div>
          <div
            v-if="footerMenu && footerMenu.length"
            class="col-lg-3 col-md-3 d-md-flex d-flex sections"
          >
            <div>
              <ul
                v-for="(item, index) in footerMenu"
                :key="index"
                class="hello2"
              >
                <h6 v-if="index < 1 && item && item.title && item.title.length">
                  {{ item.title }}
                </h6>
                <div
                  v-if="index < 2 && item && item.child && item.child.length"
                >
                  <NuxtLink
                    v-for="(item, index2) in item.child"
                    :key="index2"
                    :to="`/${$i18n.locale}/${item.url}`"
                  >
                    <li v-if="item && item.title && item.title.length">
                      {{ item.title }}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.8335 14.1668L14.1668 5.8335M14.1668 5.8335H6.66683M14.1668 5.8335V13.3335"
                          stroke="white"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </li>
                  </NuxtLink>
                </div>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-3 contacts">
            <h6>{{ $t('contacts') }}</h6>
            <a class="quote-span" :href="`tel:${footerSite?.phone_number}`">
              <span class="first_tel">{{
                footerSite?.phone_number?.slice(0, 4)
              }}</span
              >{{ footerSite?.phone_number?.slice(4) }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid rd-floor">
      <div class="container">
        <div class="footer__bottom">
          <div class="col-12 col-lg-6 text-lg-left footer__bottom-left">
            <p class="mb-0 copyright_desc">
              {{ $t('copyright_all_rights_reserved') }} {{ nowYear() }}.
              {{ $t('copyright_all_rights_reserved2') }}
            </p>
          </div>
          <div class="col-12 col-lg-6 text-lg-right text-end developed-by">
            <p>{{ $t('developed_by') }} :</p>
            <!-- <a class="uic mb-[-5px]" href="https://uic.group/" target="_blank">
              <UIcLogo />
            </a> -->
            <b class="text-uppercase" style="color: #2678D8; font-size: 13px;" >global softline group</b>
          </div>
        </div>
      </div>
    </div>

    <CtrlEnter />
  </div>
</template>

<script language="javascript" type="text/javascript">
import { defineComponent } from 'vue'
import Apply from './apply.vue'
import ApplyNow from './Button/ApplyNow.vue'
import UIcLogo from './UIcLogo.vue'

export default defineComponent({
  components: { UIcLogo, ApplyNow, Apply },
})
</script>
<script language="javascript1.1" type="text/javascript"></script>
<script language="javascript1.2" type="text/javascript"></script>
<script language="javascript1.3" type="text/javascript"></script>
<script language="JavaScript" type="text/javascript"></script>
<script>
import CtrlEnter from '@/components/CtrlEnter'
import { mapState } from 'vuex'

export default {
  name: 'Footer',
  components: {
    CtrlEnter,
  },
  methods: {
    get_appeal_phones(phone_string) {
      if (phone_string) {
        return phone_string.split(',').filter(Boolean)
      }
    },
    nowYear() {
      const date = new Date()
      return date.getFullYear()
    },
  },

  watch: {
    '$i18n.locale'() {
      this.$store.dispatch('fetchFooter').catch(() => {})
    },
  },

  computed: {
    ...mapState({
      footerSite: (state) => state.footer,
      footerMenu: (state) => state.footerMenu,
    }),
  },
  async fetch() {
    await this.$store.dispatch('fetchFooter').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.footer-contacts {
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
}
.developed-by {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;

  & p {
    margin-bottom: 0 !important;
  }
}
.nd-floor {
  ul li {
    transition: 0.3s all;
    display: flex;
    align-items: center;

    svg {
      opacity: 0;
      transition: 0.3s;
    }

    &:hover {
      text-decoration-line: underline;

      svg {
        margin-left: 6px;
        opacity: 1;
        position: relative;
      }
    }
  }
}

.logo_footer {
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    margin-top: 0 !important;
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 1200px) {
  .footer .nd-floor h6 {
    margin-right: 10px;
  }
}

//@media only screen and (max-width: 992px) {
//  .sections {
//    margin-top: 20px;
//  }
//}

@media only screen and (max-width: 768px) {
  .footer .nd-floor p {
    font-size: 13px;
    line-height: 15px;
    margin-bottom: 15px;
  }

  .footer .nd-floor .ctrl {
    font-size: 0.875rem;
    margin-bottom: 17px;
  }

  .footer .nd-floor h6 {
    font-size: 0.75rem;
    white-space: nowrap;
    line-height: 15px;
  }

  .footer .nd-floor ul li {
    font-size: 13px;
    line-height: 11px;
  }
}

@media only screen and (max-width: 576px) {
  .footer .nd-floor h6 {
    margin-right: 0px;
  }

  .footer .nd-floor li {
    white-space: nowrap;
  }
}
</style>

<style lang="scss">
.footer-linkers {
  gap: 40px;

  @media screen and (max-width: 500px) {
    flex-direction: column !important;
    gap: 12px;
  }
}
.linker-phone {
  margin-top: 4px !important;
  a {
    margin-left: 0 !important;
    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    &:hover {
      color: #1c89c1 !important;
    }
  }
}

.linker-title {
  color: #fff !important;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  opacity: 0.5;
  margin: 0 !important;
}
.socials-animate {
  position: relative;
  display: flex;
  gap: 12px;
}
.footer__left-p {
  color: white;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  opacity: 0.8;
}
.contacts p {
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 133px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer__bottom {
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column !important;
    gap: 12px;
  }
}

@media screen and (max-width: 500px) {
  .developed-by {
    justify-content: center !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .footer__bottom-left {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
@media screen and (min-width: 768px) and (max-width: 991px) {
  .footer-contacts {
    margin-top: 12px;
    margin-bottom: 12px;
  }
}
.footer__cntrl {
  opacity: 0.8;
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}

.show_tooltip .tooltip2 {
  visibility: hidden;
  width: 120px;
  background-color: white;
  color: #1d2024;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s;
}

.show_tooltip:hover .tooltip2 {
  visibility: visible;
  opacity: 1;
}
.quote-span {
  color: #fff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    color: #1c89c1 !important;
  }
}
.first_tel {
  font-weight: 400;
}

@media only screen and (max-width: 500px) {
  .copyright_desc {
    text-align: center;
  }
}
</style>
