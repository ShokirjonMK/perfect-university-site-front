<template>
  <el-dropdown placement="bottom-start" trigger="click">
    <span
      class="el-dropdown-link"
      :class="{ active: activeType === tab.type }"
      @click="checkTab(tab.type)"
    >
      {{ $t(tab.title) }}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown" class="list">
      <div v-loading="searchLoader" class="dropdown-loader" />
      <div class="dropdown-search">
        <svg
          class="dropdown-search__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M9.24603 15.4364C12.6649 15.4364 15.4364 12.6649 15.4364 9.24603C15.4364 5.82718 12.6649 3.05566 9.24603 3.05566C5.82718 3.05566 3.05566 5.82718 3.05566 9.24603C3.05566 12.6649 5.82718 15.4364 9.24603 15.4364Z"
            stroke="#003B81"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 17.5L13.76 13.76"
            stroke="#003B81"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input
          type="text"
          class="dropdown-search__input"
          :placeholder="$t('search_placeholder')"
          :value="searchValue"
          @input="updateSearchValue"
        />
      </div>
      <div class="dropdown-content h-100">
        <template v-if="tab.content.length">
          <el-dropdown-item
            v-for="(item, i) of tab.content"
            :key="i"
            class="list-item"
          >
            <label class="list-label">
              <span class="list-text">{{ item.shortname }}</span>
              <input
                type="radio"
                class="list-input"
                name="choose"
                :checked="item.id === modelValue.id"
                :value="modelValue.cid"
                @input="
                  $emit('update:modelValue', { id: item, type: tab.type })
                "
              />
              <span class="list-check">
                <span class="list-circle"></span>
                <svg
                  class="list-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <rect
                    x="0.833313"
                    y="0.833313"
                    width="18.3333"
                    height="18.3333"
                    rx="9.16667"
                    fill="#003B81"
                  />
                  <path
                    d="M14.5903 6.92184L14.5901 6.92162C14.2712 6.61562 13.7591 6.61529 13.4405 6.92179C13.4405 6.92181 13.4404 6.92182 13.4404 6.92184L8.79536 11.3881L6.55945 9.23825L6.55927 9.23807C6.24036 8.93206 5.72823 8.93174 5.40959 9.2383C5.08564 9.54996 5.08564 10.0591 5.40959 10.3708L5.40965 10.3708L8.22047 13.0734L8.22064 13.0735C8.53955 13.3795 9.05168 13.3799 9.37032 13.0733L14.5901 8.05454C14.9145 7.74326 14.9141 7.23338 14.5903 6.92184Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.5"
                  />
                </svg>
              </span>
            </label>
          </el-dropdown-item>
        </template>
        <template v-else>
          <div class="dropdown-search__empty">
            {{ this.$t('empty_search') }}
          </div>
        </template>
        <template v-if="observeVisible">
          <!--          <observer @on-change="onChange" class="test-lazy">-->
          <!--            <div ref="allItemsTarget" class="observer"></div>-->
          <!--          </observer>-->
        </template>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
// import Observer from 'vue-intersection-observer'
import _ from 'lodash'
export default {
  props: {
    tab: {
      type: Object,
      required: true,
    },
    activeType: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Object,
    },
    searchValue: {
      type: String,
    },
    searchLoader: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue', 'update:searchValue'],
  // components: {Observer},
  data() {
    return {
      dropActive: null,
      content: this.modelValue,
      observer: null,
      activeTab: null,
      observeVisible: false,
    }
  },
  methods: {
    updateSearchValue: _.debounce(function (value) {
      this.$emit('update:searchValue', { search: value, type: this.activeTab })
    }, 300),
    checkTab(target) {
      this.$emit('handleTab', target)
      this.activeTab = target
      setTimeout(() => {
        this.observeVisible = true
      }, 1000)
    },
    onChange(entry, unobserve) {
      if (entry.isIntersecting) {
        this.$emit('observerFetch', {
          trigger: entry.isIntersecting,
          type: this.activeTab,
        })
      }
    },
  },
  watch: {
    search(value) {
      this.updateSearchValue(value)
    },
    activeType(oldValue, newValue) {
      if (newValue !== oldValue) {
        this.$emit('update:clearSearchValue')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  //height: 100%;
  &-item {
    padding-left: 12px;
    transition: all 0.2s ease;
    &:hover {
      background: #eef3f8;
    }
    &:not(:last-child) label {
      border-bottom: 1px solid #e7e9ed;
    }
  }
  &-label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 12px 8px 0;
    margin: 0;
    cursor: pointer;
  }
  &-text {
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    color: #374453;
    margin-right: 30px;
  }
  &-input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    height: 0;
    width: 0;
    &:checked + .list-check > .list-circle {
      opacity: 0;
    }
    &:checked + .list-check > .list-svg {
      opacity: 1;
    }
  }
  &-check {
    position: relative;
    width: 18.33px;
    height: 18.33px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-svg {
    opacity: 0;
    transition: all 0.2s ease;
  }
  &-circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1.6px solid #e7e9ed;
    border-radius: 34px;
    transition: all 0.2s ease;
  }
}
.dropdown-content {
  position: relative;
  overflow-y: auto;
  max-height: 400px;
  max-width: 300px;
  min-width: 300px;
  &::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background-color: #e1e1e1;
  }

  &::-moz-scrollbar {
    height: 1px;
    background-color: #e1e1e1;
  }

  &::-ms-scrollbar {
    height: 1px;
    background-color: #e1e1e1;
  }

  &::-o-scrollbar {
    height: 1px;
    background-color: #e1e1e1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cdcdcd;
  }

  &::-moz-scrollbar-thumb {
    background-color: #cdcdcd;
  }

  &::-ms-scrollbar-thumb {
    background-color: #cdcdcd;
  }

  &::-o-scrollbar-thumb {
    background-color: #cdcdcd;
  }
}
.el-dropdown-menu {
  position: relative;
  padding: 38px 0 0 0 !important;
  overflow: hidden;
  .el-dropdown-menu__item {
    padding-right: 0;
  }
}
.dropdown-loader {
  position: absolute;
  top: 38px;
  left: 0;
  width: 100%;
  height: 100%;
}
.dropdown-search {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #f9fafc;
  border-bottom: 1px solid #e6e8ec;
  border-radius: 2px;
  &__input {
    width: 100%;
    padding: 9px 12px 9px 44px;
    outline: none;
    border: none;
    background: transparent;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    &::placeholder {
      color: #9fabb9;
    }
  }
  &__icon {
    position: absolute;
    top: 9px;
    left: 12px;
  }
  &__empty {
    padding: 10px 12px;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 20px;
    color: #7c8084;
  }
}
.el-dropdown {
  @media screen and (max-width: 768px) {
    width: 33.333%;
  }
}
.el-dropdown-link {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbfbfb;
  padding: 12px 30px;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 25px;
  color: #7c8084;
  transition: all 0.2s ease;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding: 8px;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.875rem;
  }
  &:hover {
    background: #eef3f8;
    color: #374453;
  }
  &.active {
    background: #003b81;
    color: #fff;
  }
  .el-icon--right {
    display: none !important;
  }
}
.timetable {
  &-tab {
    display: flex;
    align-items: center;
    &__action {
      background: #fbfbfb;
      padding: 12px 30px;
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 25px;
      color: #7c8084;
      transition: all 0.2s ease;
      &:hover {
        background: #eef3f8;
        color: #374453;
      }
      &.active {
        background: #003b81;
        color: #fff;
      }
    }
    &__item {
      position: relative;
      &:hover > .timetable-tab__content > .timetable-tab-list {
        //opacity: 1!important;
        //visibility: visible!important;
        //transform: translateY(0);
      }
    }
    &__content {
      position: relative;
      transform: translateY(-5px);
    }
    &-list {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      //opacity: 0;
      //visibility: hidden;
      min-width: 292px;
      max-height: 569px;
      background: #fbfbfb;
      border: 0.5px solid #e1e1e1;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
      transition: all 0.2s ease;
      z-index: 10;
      transform: translateY(5px);
      &__item {
      }
    }
  }
  .list {
    //height: 100%;
    &-item {
      padding-left: 12px;
      transition: all 0.2s ease;
      &:hover {
        background: #eef3f8;
      }
      &:not(:last-child) > label {
        border-bottom: 1px solid #e7e9ed !important;
      }
    }
    &-label {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 8px 12px 8px 0;
      margin: 0;
      cursor: pointer;
    }
    &-text {
      font-weight: 500;
      font-size: 1rem;
      line-height: 20px;
      color: #374453;
    }
    &-input {
      position: absolute;
      opacity: 0;
      visibility: hidden;
      height: 0;
      width: 0;
      &:checked + .list-check > .list-circle {
        opacity: 0;
      }
      &:checked + .list-check > .list-svg {
        opacity: 1;
      }
    }
    &-check {
      position: relative;
      width: 18.33px;
      height: 18.33px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-svg {
      opacity: 0;
      transition: all 0.2s ease;
    }
    &-circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1.6px solid #e7e9ed;
      border-radius: 34px;
      transition: all 0.2s ease;
    }
  }
}
.dropdown-enter-active {
  transition: all 0.2s ease;
}

.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
