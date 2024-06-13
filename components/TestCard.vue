<template>
  <div>
    <div class="test-card d-flex">
      <div class="test-card-order">{{ testID }}</div>
      <div class="ml-2">
        <div class="test-card-header">
          <div class="d-flex">
            <div>
              <p class="test-card-question mt-1" v-html="question"></p>
              <img
                v-if="img"
                class="mt-4"
                src="~/static/image/code.png"
                alt="Code image png"
              />
            </div>
          </div>
        </div>
        <div class="test-card-body mt-4">
          <div
            v-for="option of testAnswers"
            :key="option.value"
            class="custom-control custom-radio mt-2"
          >
            <input
              :id="'customRadio' + option.id"
              v-model="selectedOption"
              :value="option.id"
              type="radio"
              :name="'customRadio' + testID"
              class="custom-control-input"
            />
            <label
              :class="
                selectedOption === option.id
                  ? 'test-card-answer__selected'
                  : 'test-card-answer'
              "
              class="custom-control-label cursor-pointer test-card-answer"
              :for="'customRadio' + option.id"
              >{{ option.answer }}</label
            >
          </div>
        </div>
        <div class="test-card-footer mt-4">
          <button
            v-if="isCorrect"
            class="test-card-status test-card-status__success d-inline-block"
          >
            <span class="text-capitalize">{{ $t('thats_right') }}</span>
          </button>

          <button
            v-else-if="inCorrect"
            class="test-card-status test-card-status__error d-inline-block"
          >
            <span class="text-capitalize">Incorrect</span>
          </button>

          <button
            v-else
            class="test-card-status d-inline-block"
            @click="checkAnswer(selectedOption)"
          >
            <span class="text-capitalize">{{ $t('check') }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    testID: Number,
    question: String,
    testAnswers: Array,
  },
  data() {
    return {
      isCorrect: false,
      inCorrect: false,
      selectedOption: '',
    }
  },
  methods: {
    isSelectedOption(cardIndex, optionValue) {
      return this.selectedOptions[cardIndex] === optionValue
    },

    async checkAnswer(answer) {
      if (!this.selectedOption) return
      const data = await this.$axios.$get(
        `syllabus/test/CheckTestAnswer/${answer}/`
      )
      console.log(data, 'data')

      this.isCorrect = data.is_correct
      if (!data.is_correct) {
        this.inCorrect = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.test-card {
  border-radius: 12px;
  border: 1px solid #e9edf2;
  background: var(--main-white, #fff);
  box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);
  padding: 20px 16px;

  &-header {
  }

  &-order {
    width: 28px;
    height: 27px;
    color: #1d2024;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 136.5%;
  }

  &-title {
    color: #1d2024;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 136.5%;
  }

  &-question {
    color: #1d2024;
    font-size: 1rem;
    font-weight: 500;
    line-height: 136.5%;
  }

  &-answer {
    color: #768194;
    font-size: 1rem;
    font-weight: 500;
    line-height: normal;
  }

  &-answer__selected {
    color: #2678d9;
  }

  &-body {
    @media (max-width: 768px) {
      margin-top: 60px !important;
    }
  }

  &-status {
    border-radius: 4px;
    background-color: #2678d9;
    padding: 4px 8px;

    span {
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      line-height: 18px;
    }
  }

  &-status__success {
    background: rgba(24, 185, 98, 0.1);

    span {
      color: #18b962;
    }
  }

  &-status__error {
    background: rgba(206, 17, 38, 0.1);

    span {
      color: #ce1126;
    }
  }
}
</style>
