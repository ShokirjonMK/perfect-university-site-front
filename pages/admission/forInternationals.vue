<template>
  <div>
    <div class="container mb-5 structure-styles">
      <div v-if="admissionTasks" class="row">
        <div class="col-12 col-md-9 pd">
          <h1>{{ admissionTasks.title }}</h1>
          <div class="d-flex time-and-views justify-content-between">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z"
                  stroke="#9FABB9"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6665 1.33325V3.99992"
                  stroke="#9FABB9"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.3335 1.33325V3.99992"
                  stroke="#9FABB9"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 6.66675H14"
                  stroke="#9FABB9"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ admissionTasks.publish_date }}
            </span>
            <span>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66675 8.00008C1.66675 8.00008 4.33341 2.66675 9.00008 2.66675C13.6667 2.66675 16.3334 8.00008 16.3334 8.00008C16.3334 8.00008 13.6667 13.3334 9.00008 13.3334C4.33341 13.3334 1.66675 8.00008 1.66675 8.00008Z"
                  stroke="#9FABB9"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="#9FABB9"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ admissionTasks.views }}
            </span>
          </div>
          <div
            class="structure-styles__content"
            v-html="admissionTasks.content"
          ></div>
          <HashTags />
          <apply />
        </div>

        <div class="col-12 col-md-3" style="padding: 0">
          <div>
            <sidebarAppeal />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      admissionTasks: (state) => state.admission.admissionTasks,
    }),
  },
  async fetch() {
    await this.$store
      .dispatch('admission/fetchAdmisssionTasks')
      .catch((err) => {
        console.log('error', err)
      })
  },
}
</script>

<style lang="scss" scoped>
svg {
  min-width: 8px !important;
  min-height: 8px !important;
  margin-right: 10px;
  margin-top: 10.5px;
}
</style>
