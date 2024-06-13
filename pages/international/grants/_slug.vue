<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <bread-crumbs v-if="links" :type="'press'" :links="links" />
      <div class="container">
        <div v-if="singleGrant" class="row">
          <div class="col-12 structure-styles pd">
            <h1>
              {{ singleGrant.title }}
            </h1>

            <img :src="singleGrant.image_url" alt="Single " />

            <div class="single-content" v-html="singleGrant.description"></div>
            <h2>
              {{ $t('related_docs') }}
            </h2>
            <template v-if="singleGrant.files && singleGrant.files.length">
              <div
                v-for="(item, index) in singleGrant.files"
                :key="index"
                class="relatedFiles mb-3"
              >
                <a :href="item.file_url" target="_blank">
                  <div>
                    <i v-if="item.file_type === 'pdf'">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 18.3327H4.99998C4.08331 18.3327 3.33331 17.5827 3.33331 16.666V14.166H4.99998V16.666H15V6.49935L11.8333 3.33268H4.99998V8.33268H3.33331V3.33268C3.33331 2.41602 4.08331 1.66602 4.99998 1.66602H12.5L16.6666 5.83268V16.666C16.6666 17.5827 15.9166 18.3327 15 18.3327Z"
                          fill="#9FABB9"
                        />
                        <path
                          d="M15.4167 6.66602H11.6667V2.91602L15.4167 6.66602Z"
                          fill="#9FABB9"
                        />
                        <path
                          d="M4.58335 10H4.16669V10.8333H4.58335C4.83335 10.8333 5.00002 10.6667 5.00002 10.4167C5.00002 10.1667 4.83335 10 4.58335 10ZM8.00002 10H7.50002V12.5H8.00002C8.50002 12.5 9.16669 12.3333 9.16669 11.5833V10.9167C9.16669 10.1667 8.58336 10 8.00002 10Z"
                          fill="#9FABB9"
                        />
                        <path
                          d="M3.33335 7.5C2.41669 7.5 1.66669 8.25 1.66669 9.16667V13.3333C1.66669 14.25 2.41669 15 3.33335 15H15.8334V7.5H3.33335ZM4.58335 11.6667H4.16669V13.3333H3.33335V9.16667H4.58335C5.25002 9.16667 5.83335 9.75 5.83335 10.4167C5.83335 11.0833 5.25002 11.6667 4.58335 11.6667ZM10 11.5833C10 12.5833 9.33335 13.3333 8.00002 13.3333H6.66669V9.16667H8.00002C9.33335 9.16667 10 10 10 10.9167V11.5833ZM13.3334 10H11.6667V10.8333H13V11.6667H11.6667V13.3333H10.8334V9.16667H13.3334V10Z"
                          fill="#9FABB9"
                        />
                      </svg>
                    </i>
                    <i v-else-if="item.file_type === 'xlsx'">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 18.3327H4.99998C4.08331 18.3327 3.33331 17.5827 3.33331 16.666V14.166H4.99998V16.666H15V6.49935L11.8333 3.33268H4.99998V8.33268H3.33331V3.33268C3.33331 2.41602 4.08331 1.66602 4.99998 1.66602H12.5L16.6666 5.83268V16.666C16.6666 17.5827 15.9166 18.3327 15 18.3327Z"
                          fill="#4EA06B"
                        />
                        <path
                          d="M15.4167 6.66602H11.6667V2.91602L15.4167 6.66602Z"
                          fill="#4EA06B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.66602 9.16667C1.66602 8.25 2.41602 7.5 3.33268 7.5H15.8327V15H3.33268C2.41602 15 1.66602 14.25 1.66602 13.3333V9.16667ZM6.28826 13H7.08326L5.97326 11.175L7.00826 9.44H6.22326L5.59826 10.59L4.97826 9.44H4.18826L5.22326 11.175L4.11826 13H4.91326L5.59826 11.76L6.28826 13ZM8.02096 13H10.331V12.38H8.71596V9.44H8.02096V13ZM13.2762 12.74C13.5095 12.5467 13.6578 12.2683 13.7212 11.905H13.0162C12.9362 12.2417 12.7362 12.41 12.4162 12.41C12.2262 12.41 12.0778 12.3483 11.9712 12.225C11.9045 12.1483 11.8578 12.045 11.8312 11.915C11.8078 11.7817 11.7962 11.55 11.7962 11.22C11.7962 10.89 11.8078 10.66 11.8312 10.53C11.8578 10.3967 11.9045 10.2917 11.9712 10.215C12.0778 10.0917 12.2262 10.03 12.4162 10.03C12.7328 10.03 12.9312 10.1983 13.0112 10.535H13.7212C13.6578 10.1717 13.5095 9.89333 13.2762 9.7C13.0428 9.50667 12.7562 9.41 12.4162 9.41C12.0362 9.41 11.7178 9.535 11.4612 9.785C11.2978 9.94833 11.1962 10.1283 11.1562 10.325C11.1195 10.5183 11.1012 10.8167 11.1012 11.22C11.1012 11.6233 11.1195 11.9233 11.1562 12.12C11.1962 12.3133 11.2978 12.4917 11.4612 12.655C11.7178 12.905 12.0362 13.03 12.4162 13.03C12.7562 13.03 13.0428 12.9333 13.2762 12.74Z"
                          fill="#4EA06B"
                        />
                      </svg>
                    </i>
                    <i
                      v-else-if="
                        item.file_type === 'doc' || item.file_type === 'docx'
                      "
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 18.3346H4.99998C4.08331 18.3346 3.33331 17.5846 3.33331 16.668V14.168H4.99998V16.668H15V6.5013L11.8333 3.33464H4.99998V8.33464H3.33331V3.33464C3.33331 2.41797 4.08331 1.66797 4.99998 1.66797H12.5L16.6666 5.83464V16.668C16.6666 17.5846 15.9166 18.3346 15 18.3346Z"
                          fill="#9FABB9"
                        />
                        <path
                          d="M15.4167 6.66797H11.6667V2.91797L15.4167 6.66797Z"
                          fill="#9FABB9"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.66602 9.16667C1.66602 8.25 2.41602 7.5 3.33268 7.5H15.8327V15H3.33268C2.41602 15 1.66602 14.25 1.66602 13.3333V9.16667ZM10.7332 13L11.6882 9.44H10.9632L10.4082 11.685L9.7582 9.44H9.2382L8.5882 11.685L8.0382 9.44H7.3132L8.2632 13H8.8432L9.4982 10.84L10.1532 13H10.7332Z"
                          fill="#9FABB9"
                        />
                      </svg>
                    </i>
                    <i v-else>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 18.3346H4.99998C4.08331 18.3346 3.33331 17.5846 3.33331 16.668V14.168H4.99998V16.668H15V6.5013L11.8333 3.33464H4.99998V8.33464H3.33331V3.33464C3.33331 2.41797 4.08331 1.66797 4.99998 1.66797H12.5L16.6666 5.83464V16.668C16.6666 17.5846 15.9166 18.3346 15 18.3346Z"
                          fill="#9FABB9"
                        />
                        <path
                          d="M15.4167 6.66797H11.6667V2.91797L15.4167 6.66797Z"
                          fill="#9FABB9"
                        />
                        <path
                          d="M3.33268 7.5C2.41602 7.5 1.66602 8.25 1.66602 9.16667V13.3333C1.66602 14.25 2.41602 15 3.33268 15H15.8327V7.5H3.33268Z"
                          fill="#9FABB9"
                        />
                      </svg>
                    </i>
                    {{ item.file_name }}
                  </div>
                </a>
              </div>
            </template>

            <HashTags />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import internationalSide from '~/components/internationalSide'
import BreadCrumbs from '~/components/Breadcrumb'

export default {
  components: {
    internationalSide,
    BreadCrumbs,
  },
  data() {
    return {}
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('international_grants'),
          link: `/${this.$i18n.locale}/international/grants`,
        },
        {
          title: this.singleGrant?.title,
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      singleGrant: (state) => state.international.singleGrant,
    }),
  },
  async fetch() {
    await this.$store
      .dispatch('international/fetchSingleGrant', this.$route.params.slug)
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.688rem;
  border: none;
  margin-bottom: 24px;
}

img {
  width: 100%;
}

.relatedFiles {
  padding: 20px;
  background: #ffffff;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  transition: 0.3s all;

  a {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 130%;
    color: #44494f;
  }

  svg {
    path {
      transition: 0.3s all;
    }
  }

  &:hover {
    background: #f8fafc;

    svg {
      path {
        fill: #4ea06b;
      }
    }
  }
}

.navs {
  margin-top: -1.5%;
}
</style>
