<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <Breadcrumb :links="links" />
      <div v-if="facultySingle" class="container pb-5">
        <div class="row">
          <div class="col-12 col-lg-9">
            <h1>
              {{ facultySingle.title }}
            </h1>
            <div v-if="facultySingle.staffs.length" class="graduatorsCards">
              <div
                v-for="(item, index) in facultySingle.staffs?.slice(
                  0,
                  1,
                  facultySingle.staffs.length
                )"
                :key="index"
              >
                <div class="alumni__row d-md-flex">
                  <div class="alumni__img">
                    <img
                      class="img-graduators"
                      :src="item.image_url"
                      alt="Alumni image"
                    />
                  </div>
                  <div class="w-100" style="padding: 0">
                    <div class="content">
                      <div class="st-floor">
                        <h3>{{ item.title }}</h3>
                        <span>{{ item.position }}</span>
                        <div class="line"></div>
                      </div>

                      <div class="alumni__link">
                        <div style="display: grid; gap: 12px" class="ps-2">
                          <p
                            v-if="item.reception_days"
                            class="alumni__links"
                            style="
                              display: flex;
                              align-items: center;
                              gap: 8px;
                              margin-bottom: 0 !important;
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
                                d="M5.83333 8.33333H14.1667M5.83333 11.6667H10M5.83333 2.5V4.16667M14.1667 2.5V4.16667M5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3183C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7668 17.5 14.8333V6.83333C17.5 5.89991 17.5 5.4332 17.3183 5.07668C17.1586 4.76308 16.9036 4.50811 16.59 4.34832C16.2335 4.16667 15.7668 4.16667 14.8333 4.16667H5.16667C4.23325 4.16667 3.76654 4.16667 3.41002 4.34832C3.09641 4.50811 2.84144 4.76308 2.68166 5.07668C2.5 5.4332 2.5 5.89991 2.5 6.83333V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z"
                                stroke="#2678D9"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            {{ item.reception_days }}
                          </p>
                          <a
                            v-if="item.phone_number"
                            class="alumni__links"
                            :href="`tel:{{ item.phone_number }}`"
                            style="display: flex; align-items: center; gap: 8px"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 4.58333C2.5 11.717 8.28299 17.5 15.4167 17.5C15.7385 17.5 16.0576 17.4882 16.3736 17.4651C16.7362 17.4385 16.9174 17.4253 17.0825 17.3302C17.2192 17.2516 17.3488 17.1121 17.4173 16.97C17.5 16.7985 17.5 16.5984 17.5 16.1983V13.8506C17.5 13.5141 17.5 13.3459 17.4446 13.2016C17.3957 13.0743 17.3163 12.9608 17.2133 12.8713C17.0966 12.77 16.9385 12.7125 16.6223 12.5975L13.95 11.6257C13.5821 11.492 13.3981 11.4251 13.2236 11.4364C13.0697 11.4464 12.9216 11.499 12.7958 11.5881C12.6531 11.6893 12.5524 11.8571 12.351 12.1928L11.6667 13.3333C9.45845 12.3333 7.66825 10.5407 6.66667 8.33333L7.80719 7.64902C8.14288 7.44761 8.31072 7.3469 8.41186 7.20422C8.50104 7.0784 8.55356 6.93031 8.56357 6.77641C8.57493 6.60189 8.50804 6.41794 8.37426 6.05004L7.40249 3.37768C7.2875 3.06147 7.23001 2.90336 7.12868 2.78675C7.03918 2.68374 6.92575 2.60429 6.79835 2.55538C6.65413 2.5 6.4859 2.5 6.14943 2.5H3.80168C3.40157 2.5 3.20151 2.5 3.02998 2.58271C2.88792 2.65121 2.74845 2.78085 2.66975 2.91753C2.57474 3.08255 2.56146 3.26385 2.53491 3.62644C2.51177 3.94238 2.5 4.26148 2.5 4.58333Z"
                                stroke="#2678D9"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            {{ item.phone_number }}
                          </a>
                          <a
                            v-if="item.email"
                            class="alumni__links"
                            :href="`mailto:{{ item.email }}`"
                            style="display: flex; align-items: center; gap: 8px"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.5 6.66675L7.0416 9.69448C8.11079 10.4073 8.64539 10.7637 9.22321 10.9021C9.73384 11.0245 10.2662 11.0245 10.7768 10.9021C11.3546 10.7637 11.8892 10.4073 12.9584 9.69448L17.5 6.66675M5.16667 15.8334H14.8333C15.7668 15.8334 16.2335 15.8334 16.59 15.6518C16.9036 15.492 17.1586 15.237 17.3183 14.9234C17.5 14.5669 17.5 14.1002 17.5 13.1667V6.83341C17.5 5.89999 17.5 5.43328 17.3183 5.07676C17.1586 4.76316 16.9036 4.50819 16.59 4.3484C16.2335 4.16675 15.7668 4.16675 14.8333 4.16675H5.16667C4.23325 4.16675 3.76654 4.16675 3.41002 4.3484C3.09641 4.50819 2.84144 4.76316 2.68166 5.07676C2.5 5.43328 2.5 5.89999 2.5 6.83341V13.1667C2.5 14.1002 2.5 14.5669 2.68166 14.9234C2.84144 15.237 3.09641 15.492 3.41002 15.6518C3.76654 15.8334 4.23325 15.8334 5.16667 15.8334Z"
                                stroke="#2678D9"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            {{ item.email }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <template
                v-if="facultySingle.staffs && facultySingle.staffs.length"
              >
              </template>
              <div
                v-if="facultySingle.faculty_innovative_works"
                class="content__info"
              >
                <div style="gap: 12px" class="d-flex align-items-center">
                  <img
                    src="/image/about-tsue/mission-logo.svg"
                    alt="svg"
                    class="rounded-0"
                  />
                  <h2 class="">{{ $t('about_faculties') }}</h2>
                </div>
                <p
                  class="content__p"
                  style="margin-top: 20px"
                  v-html="facultySingle.faculty_innovative_works"
                ></p>
              </div>

              <b-table
                v-if="facultySingle.staffs && facultySingle.staffs.length"
                id="my-table"
                class="table"
                striped
                :fields="fields"
                :items="facultySingle.staffs"
                responsive="lg"
                stacked="lg"
              >
                <template v-slot:cell(index)="data">
                  <div
                    class="d-md-flex align-items-center justify-content-center mt-auto main_faculties__index"
                  >
                    {{ data.index + 1 }}
                  </div>
                </template>

                <template v-slot:cell(pic)="data" style="width: 120px">
                  <div style="width: 120px">
                    <img
                      :src="data.item.image_url"
                      style="
                        /* height: 160px; */
                        width: 120px;
                        object-fit: cover;
                        border: 1px solid #e8edf2;
                      "
                      alt="image"
                    />
                  </div>
                </template>
                <template v-slot:cell(name)="data">
                  <div style="width: 159px !important">
                    {{ data.item.title }}
                  </div>
                </template>
                <template v-slot:cell(position)="data">
                  <div style="width: 159px !important">
                    {{ data.item.position }}
                  </div>
                </template>
                <template v-slot:cell(phone_number)="data">
                  <div style="width: 159px !important">
                    {{ data.item.phone_number }}
                  </div>
                </template>
                <template v-slot:cell(email)="data">
                  <div style="position: relative">
                    <div
                      style="
                        width: 131px;
                        word-wrap: break-word;
                        cursor: pointer;
                      "
                      @click="copyUrl(data.item.email)"
                    >
                      {{ data.item.email }}
                    </div>
                  </div>
                </template>
              </b-table>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <AdmissionSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb.vue'
import AdmissionSidebar from '@/components/AdmissionSidebar.vue'

export default {
  components: {
    Breadcrumb,
    AdmissionSidebar,
  },
  data() {
    return {
      leaders: 5,
      isCopied: false,
      accordionOpen: false,
      fields: [
        { key: 'index', label: '#' },
        { key: 'pic', label: this.$t('pic') },
        { key: 'name', label: this.$t('name') },
        { key: 'position', label: this.$t('position') },
        {
          key: 'phone_number',
          label: `${this.$t('phone_number')}`,
        },
        {
          key: 'email',
          label: `${this.$t('email')}`,
        },
      ],
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('faculties_and_departments'),
          link: `/${this.$i18n.locale}/admission/faculties`,
        },
        {
          title: this.facultySingle?.title,
          link: `${this.$i18n.locale}`,
        },
      ]
    },

    ...mapState({
      facultySingle: (state) => state.facultySingle.facultySingle,
    }),
  },

  methods: {
    copyUrl(e) {
      if (e !== '') {
        if (navigator.clipboard) {
          navigator.clipboard
            .writeText(e)
            .then(() => {
              this.isCopied = true
              setTimeout(() => {
                this.isCopied = false
              }, 2000)
            })
            .catch((error) => {
              console.error('Failed to copy', error)
            })
        } else {
          // Fallback for browsers that do not support navigator.clipboard
          const tempInput = document.createElement('input')
          tempInput.value = e
          document.body.appendChild(tempInput)
          tempInput.select()
          document.execCommand('copy')
          document.body.removeChild(tempInput)
          this.isCopied = true
          setTimeout(() => {
            this.isCopied = false
          }, 2000)

          console.log('Copied!')
        }
      }
    },
  },

  async fetch() {
    await this.$store
      .dispatch('facultySingle/fetchFacultySingle', this.$route.params.slug)
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.graduatorsCards {
  padding: 0 24px 24px 24px;
  border-radius: 12px;
  border: 1px solid #e9edf2;
  background: #fff;
  box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);

  h6 {
    color: #1d2024;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 128%;
  }

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: #768194;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-top: 8px;
  }

  .line {
    margin-top: 20px;
  }
}
.alumni__link {
  display: flex;
  padding: 15px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: #f6f8fb;
}

.tooltip {
  position: fixed;
  color: #1d2024;
  font-size: 16px;
  font-weight: 400;
  right: 10px;
  top: 10px;
  animation: fadeOut 3s forwards;
  background: white;
  padding: 6px;
  border-radius: 8px;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.img-graduators {
  max-width: 176px;
  max-height: 247px;
  width: 176px;
  height: 247px;
  object-fit: cover;
  border-radius: 12px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    width: 200px;
    height: 100%;
  }
}
.alumni__img {
  border-radius: 12px;
  margin-top: -30px;

  & img {
    border: 1px solid #e8edf2;
  }
}
h1 {
  margin-bottom: 52px;

  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }
}
.alumni__row {
  gap: 28px;
}
.content {
  margin-top: 28px;
}
.single-content {
  border-radius: 12px;
  background: white;
  padding: 24px;
}
h5 {
  color: #144176;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 14px;
  grid-row-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  & img {
    width: 198px;
    height: 136px;
    object-fit: cover;
    cursor: pointer;
  }
}
.content__p {
  color: #1d2024;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
h2 {
  color: #144176;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 132%;
}
.st-floor h3 {
  color: #1d2024;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 128%;
}
.alumni__link a,
p {
  color: #1d2024;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  cursor: pointer;
  transition: 0.3s;
}
.alumni__links:hover {
  transform: translateY(-3px);
}
.content__info {
  background: white;
  padding: 24px;
  border-radius: 12px;
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>

<style>
.table {
  margin-top: 24px !important;
}

tr td {
  color: #1d2024;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
}
tr td:nth-child(3) {
  color: #1d2024;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f6f8fb;
}
.table-striped tbody tr:nth-of-type(even) {
  background-color: #fff;
}
.table thead th {
  background: #144176;
  color: white;
  vertical-align: middle !important;
}
.table th {
  padding: 10px 24px;
}
.table td {
}
tr th:first-child {
  border-top-left-radius: 12px;
}
tr th:last-child {
  border-top-right-radius: 12px;
}
td {
  vertical-align: middle !important;
}
td:first-child {
  padding-left: 18px;
}
.table {
  max-width: 882px;
}
</style>

<style>
@media (max-width: 991.98px) {
  .table.b-table.b-table-stacked-lg > tbody > tr > [data-label]::before {
    content: attr(data-label);
    width: 40%;
    float: left;
    text-align: start;
    word-wrap: break-word;
    font-weight: bold;
    font-style: normal;
    padding: 0 calc(1rem / 2) 0 0;
    margin: 0;
  }
}
.table th,
.table td {
  border-top: 1px solid transparent;
}
.main_faculties__index,
td > div {
  text-align: left;
  align-items: start !important;
  display: flex !important;
}
</style>
