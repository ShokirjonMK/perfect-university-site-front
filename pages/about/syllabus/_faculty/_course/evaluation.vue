<template>
  <div class="mt-4 evaluation">
    <!--    <div v-if="activeFifthText" v-html="activeFifthText?.text" />-->

    <div class="evaluation-block">
      <h3 class="evaluation__title">
        {{ $t('procedure_for_assessing_student_knowledge') }}
      </h3>

      <div class="table-wrapper container">
        <table class="table table-bordered custom-table table-responsive-lg">
          <thead>
            <tr>
              <th class="structure-head" rowspan="2">
                {{ $t('rating_assessment') }}
              </th>
              <th class="structure-head" rowspan="2">{{ $t('max_ball') }}</th>
              <th class="structure-head" rowspan="2">
                {{ $t('tasks_to_be_completed') }}
              </th>
              <th class="structure-head" colspan="2">
                {{ $t('task_completion_time') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of items" :key="item.id">
              <td class="structured-body">{{ item.rating_assessment }}</td>
              <td class="font-weight-bold structured-body">
                {{ item.max_ball }}
              </td>
              <td class="structured-body" v-html="item.task_to_be_completed" />
              <td class="structured-body" v-html="item.task_completion_time" />
            </tr>
            <!-- Add more rows as needed -->
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="activeSixthText" v-html="activeSixthText?.text" />
  </div>
</template>

<script>
export default {
  props: {
    subjectName: {
      type: String,
      default: '',
    },
    teacherInfo: {
      type: Object,
      default: () => {},
    },
    textSection: {
      type: Array,
      default: () => [],
    },
  },
  async fetch() {
    const data = await this.$axios.$get(
      '/syllabus/syllabus/ProcedureAssessmentList/'
    )
    this.items = data.results
  },

  data() {
    return {
      generalStructure: [],
      items: [],
    }
  },

  computed: {
    activeFifthText() {
      return this.textSection.find((el) => el?.type === '5_assessment_methods')
    },

    activeSixthText() {
      return this.textSection.find(
        (el) => el?.type === '6_academic_requirements'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.evaluation {
  &-block {
    margin: 24px 0;
  }
  &__title {
    margin-bottom: 14px;
    color: #1d2024;
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
  }

  p {
    margin-bottom: 8px;
  }
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
  vertical-align: middle;
}

.structured-body {
  color: #1d2024;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 144.5%;
  background-color: #fff;
}
</style>
