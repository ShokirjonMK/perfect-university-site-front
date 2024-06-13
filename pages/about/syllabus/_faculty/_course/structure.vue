<template>
  <div class="structure__main">
    <div>
      <h2 class="caption mt-4 mb-3">General structure of science</h2>
      <div class="table-wrapper container">
        <table class="table table-bordered table-responsive-lg">
          <thead>
            <tr>
              <th class="structure-head" scope="col">Lecture</th>
              <th class="structure-head" scope="col">
                <span> Practical training</span>
              </th>
              <th class="structure-head" scope="col">Laboratory</th>
              <th class="structure-head" scope="col">Exam</th>
              <th class="structure-head" scope="col">
                <p class="d-flex align-center justify-content-center">
                  Independent <br />
                  education
                </p>
              </th>
              <th class="structure-head">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="structured-body">
                {{ data?.total_stats?.total_lecture }}
              </td>
              <td class="structured-body">
                {{ data?.total_stats?.total_practical_training }}
              </td>
              <td class="structured-body">
                {{ data?.total_stats?.total_laboratory }}
              </td>
              <td class="structured-body">
                {{ data?.total_stats?.total_exam }}
              </td>
              <td class="structured-body">
                {{ data?.total_stats?.total_independent }}
              </td>
              <td class="structured-body">
                {{ data?.total_stats?.total }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <span class="caption"
      >{{ $t('the_structural_structure_of_science') }}:</span
    >
    <div class="table-wrapper container">
      <table class="table table-bordered custom-table table-responsive-lg">
        <thead>
          <tr>
            <th rowspan="2">№</th>
            <th rowspan="2">{{ $t('topics') }}</th>
            <th rowspan="2">{{ $t('lecture_questions') }}</th>
            <th colspan="3">
              {{ $t('hours') }}
            </th>
          </tr>
          <tr>
            <th>{{ $t('lecture') }}</th>
            <th>{{ $t('laboratory_training') }}</th>
            <th>{{ $t('independent_education') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of items" :key="item.id">
            <td>{{ item.order }}</td>
            <td class="font-weight-bold">{{ item.title }}</td>
            <td>{{ item.lesson_goals }}</td>

            <td
              v-for="lessonHour of item.course_lesson_hours"
              :key="lessonHour.id"
            >
              {{ lessonHour.hour }}
            </td>
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
      </table>
    </div>
  </div>
  <!--<div>-->
  <!--  <b-table responsive :items="items"></b-table>-->
  <!--</div>-->
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  async fetch() {
    const data = await this.$axios.$get(
      '/syllabus/course_lesson/CourseLessonList/?syllabus=' +
        this.$route.params.course
    )
    this.items = data.results
  },
  data() {
    return {
      generalStructure: [],
      items: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.custom-table {
  margin-top: 14px;
}

.caption {
  color: #1d2024;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 24px;
}

table td {
  padding: 20px 24px;
}

table th {
  text-align: center;
  font-size: 1rem;
  color: #144176;
  background: #f9fafc;
  font-weight: 700;
  line-height: 144.5%;
  vertical-align: middle;
}

tbody {
  // Even ones should be black odd ones should be white
  tr:nth-child(even) {
    background-color: #f9fafc;
  }
  tr:nth-child(odd) {
    background-color: #fff;
  }
}

.structure-head {
  padding: 20px;
  background: #f6f8fb;
  color: #144176;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  line-height: 144.5%;
  word-break: break-word;
  vertical-align: middle;
  white-space: nowrap;
}

.structured-body {
  color: #1d2024;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 144.5%;
  background-color: #fff;
}
</style>

<style>
.structure__main .table-wrapper .container {
  width: 100%;
  position: relative !important;
  overflow-x: auto !important;
  padding: 0 !important;

  @media (max-width: 590px) {
    max-width: 100% !important;
  }

  @media (max-width: 1080px) {
    table {
      overflow-x: auto !important;
      max-width: 100% !important;
      min-width: 1000px !important;
    }
  }
  @media (max-width: 768px) {
    table {
      overflow-x: auto !important;
      max-width: 100% !important;
      min-width: 100% !important;
    }
  }
}
</style>
