<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <div>
        <div class="row mt-4">
          <div class="col-12">
            <div class="col-12" style="padding-left: 0">
              <h1>{{ $t('academic_calendar') }}</h1>
            </div>
            <template v-if="openData && openData.length">
              <div
                v-for="(item, index) in openData"
                :key="index"
                class="rows toDownload"
              >
                <h6>{{ item.title }}</h6>
                <div
                  v-if="item.files && item.files.length"
                  class="d-flex gap-2"
                >
                  <span v-for="(items, index) in item.files" :key="index">
                    <a
                      :href="filePreviewUrl"
                      target="_blank"
                      @click="fileGenerator(items)"
                    >
                      <img src="@/static/icons/pdf.svg" alt="image" />
                      {{ items.title }}
                    </a>
                  </span>
                </div>
              </div>
            </template>
            <div class="pagination-wrap mt-4">
              <b-pagination
                v-if="total > 9"
                v-model="page"
                :total-rows="total"
                :per-page="perPage"
                first-number
                last-number
                aria-controls="stadiums-items"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import WebViewer from '@/components/WebViewer/index.vue'

export default {
  components: { WebViewer },
  data() {
    return {
      file: '',
      filePreviewUrl: '',
    }
  },
  computed: {
    ...mapState({
      openData: (state) => state.openData.academicCalendar,
      total: (state) => state.openData.openData.total,
      perPage: (state) => state.openData.openData.per_page,
      currentPage: (state) => state.openData.openData.current_page,
    }),
  },
  watch: {
    page(page) {
      this.$store
        .dispatch('/openData/fetchAcademicCalendar', {
          page: this.page,
        })
        .catch(() => {})
    },
  },

  methods: {
    async fileGenerator(item) {
      this.file = item.file
      this.filePreviewUrl = `https://docs.google.com/gview?url=${this.file}&embedded=true`
    },
  },

  async fetch() {
    await this.$store.dispatch('openData/fetchAcademicCalendar', {
      page: this.page,
    })
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 64px;

  h1 {
    margin-bottom: 8px;
  }
}

.toDownload a {
  width: 28px;
  height: 28px;
  display: block;
  padding: 3.5px;
  border-radius: 7px;
  background: #f6f8fb;
}

.rows {
  padding: 8px 16px;
  background: #fff;
  border: 1px solid #e8edf2;
  border-radius: 8px;
  margin-top: 16px;
  transition: 0.3s all;
  cursor: pointer;
  h6 {
    margin-bottom: 16px;
    color: #144176;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 16px;
    color: #9fabb9;
  }

  &:hover {
    border: 1px solid rgba(159, 171, 185, 0.2);
    box-shadow: 0 4px 20px rgba(159, 171, 185, 0.16);
  }
}

a:hover {
  color: #003b81;
}

.nav {
  margin-top: 7.7%;
}

.close-svg {
  margin-bottom: 20px;
  float: right;
}
</style>
