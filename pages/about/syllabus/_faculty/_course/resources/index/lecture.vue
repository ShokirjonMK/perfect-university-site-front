<template>
  <div class="page-wrapper">
    <div class="table-wrapper">
      <table class="table-responsive-sm">
        <thead class="rowgroup">
          <tr>
            <th>#</th>
            <th>Lecture title</th>
            <th>Attached Materials</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="rowgroup">
          <tr v-for="item of lectureList">
            <td>{{ item.order }}</td>

            <td class="d-flex align-items-center lecture-title">
              {{ item.title }}
            </td>

            <td class="download-file">
              <div class="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.8327 7.5V14.8333C15.8327 15.7668 15.8327 16.2335 15.651 16.59C15.4912 16.9036 15.2363 17.1586 14.9227 17.3183C14.5661 17.5 14.0994 17.5 13.166 17.5H6.83268C5.89926 17.5 5.43255 17.5 5.07603 17.3183C4.76243 17.1586 4.50746 16.9036 4.34767 16.59C4.16602 16.2335 4.16602 15.7668 4.16602 14.8333V5.16667C4.16602 4.23325 4.16602 3.76654 4.34767 3.41002C4.50746 3.09641 4.76243 2.84144 5.07603 2.68166C5.43255 2.5 5.89926 2.5 6.83268 2.5H10.8327M15.8327 7.5L10.8327 2.5M15.8327 7.5H11.666C11.2058 7.5 10.8327 7.1269 10.8327 6.66667V2.5"
                    stroke="#2678D9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <a
                  target="_blank"
                  :href="item.file"
                  download="additional_materials.pdf"
                >
                  {{ $t('additional_materials') }}
                </a>
              </div>
            </td>

            <td
              class="d-flex align-items-center"
              @click="downloadFile(item.file, 'additional_materials.pdf')"
            >
              <button class="d-flex align-items-center gap-1 download-button">
                {{ $t('upload') }}
                <svg
                  class="ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M12.75 12.75H12.7575M13.05 10.5H13.5C14.1989 10.5 14.5484 10.5 14.824 10.6142C15.1916 10.7664 15.4836 11.0584 15.6358 11.426C15.75 11.7016 15.75 12.0511 15.75 12.75C15.75 13.4489 15.75 13.7984 15.6358 14.074C15.4836 14.4416 15.1916 14.7336 14.824 14.8858C14.5484 15 14.1989 15 13.5 15H4.5C3.80109 15 3.45163 15 3.17597 14.8858C2.80843 14.7336 2.51642 14.4416 2.36418 14.074C2.25 13.7984 2.25 13.4489 2.25 12.75C2.25 12.0511 2.25 11.7016 2.36418 11.426C2.51642 11.0584 2.80843 10.7664 3.17597 10.6142C3.45163 10.5 3.80109 10.5 4.5 10.5H4.95M9 11.25V3M9 11.25L6.75 9M9 11.25L11.25 9"
                    stroke="#2678D9"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="total > 10" class="mt-4 d-flex justify-content-end">
      <BPagination
        v-model="currentPage"
        :total-rows="total"
        :per-page="10"
        first-number
        last-number
        aria-controls="stadiums-items"
      />
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    if (this.$route.query.page) {
      this.currentPage = Number(this.$route.query.page)
    }
    const data = await this.$axios.$get(
      `/syllabus/course_resource/CourseResourceLessonLecture/?syllabus=${
        this.$route.params.course
      }&offset=${(this.currentPage - 1) * 10}`
    )
    this.total = data.count

    this.lectureList = data.results
  },
  data() {
    return {
      total: 0,
      currentPage: 1,
      lectureList: [],
      items: [],
    }
  },

  watch: {
    async currentPage(page) {
      this.$router.push({ query: { page } })
      this.loading = true

      const data = await this.$axios.$get(
        `/syllabus/course_resource/CourseResourceLessonLecture/?syllabus=${
          this.$route.params.course
        }&offset=${(page - 1) * 10}`
      )
      this.total = data.count

      this.lectureList = data.results
    },
  },
  methods: {
    downloadFile(url, filename) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'GET',
        })
          .then((result) => {
            return result.blob()
          })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', filename)
            link.click()
            link.remove()
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
}
</script>

<style scoped>
.table-container {
  border-radius: 8px;
  overflow: hidden;
}
table {
  border-collapse: collapse;
  border-radius: 8px;
  width: 100%;
}

thead {
  border-radius: 8px;
  background: #144176;
  color: #fff;
}

td,
th {
  border-bottom: 1px solid #e8edf2;
  text-align: left;
  padding: 16px 24px;
}

tr:nth-child(even) {
  background-color: #fff;
}

tbody tr {
  transition: all 0.2s ease;
}

tbody tr:hover {
  background-color: #e8eaee;
}

.lecture-title {
  color: #263c55;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 132%;
}

.download-file a {
  margin-left: 6px;
  color: #263c55;
  margin-top: 1px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  transition: 0.3s ease;
}

.download-file a:hover {
  color: #4d90df;
}

.download-button {
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    color: #1c89c1;
  }
}
.table-wrapper {
}
</style>
