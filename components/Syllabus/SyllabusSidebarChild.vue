<template>
  <div
    class="sidebar__main"
    :class="{ 'syllabus-sidebar-active': item.id === active }"
  >
    <button
      class="sidebar-link-ch w-100 h-100 d-flex align-items-center justify-content-between"
      :class="{
        'syllabus-sidebar-active active-link-sidebar': item.id === active,
      }"
      @click="$emit('openActive', item)"
    >
      <span>{{ $t(item?.link) }}</span>
      <span class="span-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M4.5 6.75L9 11.25L13.5 6.75"
            stroke="#BDC5CE"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>
    <CollapseTransition>
      <div
        v-if="item.id === active"
        class="sidebar-children d-flex flex-column"
      >
        <NuxtLink
          v-for="(child, index) in item.children"
          :key="index"
          class="sidebar-link-children w-100 h-100 d-flex align-items-center"
          :class="{
            'active-link-sidebar-children':
              $route.fullPath === localePath(child?.path) ||
              $route.fullPath === localePath(child?.path) + '#/',
            'syllabus-sidebar-active': item.id === active,
          }"
          :to="localePath(child?.path)"
        >
          {{ $t(child?.link) }}
        </NuxtLink>
      </div>
    </CollapseTransition>
  </div>
</template>

<script>
import { CollapseTransition } from '@ivanv/vue-collapse-transition/src'

export default {
  name: 'SyllabusSidebarChild',
  components: { CollapseTransition },

  props: {
    item: {
      type: Object,
      default: () => {},
    },
    active: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    //   Check if child is active
    if (this.checkChildrenActive(this.item)) {
      this.$emit('openActive', this.item)
    }
  },

  methods: {
    checkChildrenActive(item) {
      return item.children.find(
        (child) =>
          this.$route.fullPath === this.localePath(child?.path) ||
          this.$route.fullPath === this.localePath(child?.path) + '#/'
      )
    },
  },
}
</script>

<style scoped lang="scss">
.active-link-sidebar-children {
  color: #1c89c1;
  font-weight: 700;
}

.sidebar-link-ch {
  color: var(--gray-color-1);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  padding: 11px;
  position: relative;
  transition: all 0.3s;
  background: #fff;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 3px;
    height: 20px;
    border-radius: 2px 10px 10px 2px;
    background-color: var(--blue);
    opacity: 0;
  }

  &.active-link-sidebar {
    color: #1d2024;
    font-weight: 700;
    &::before {
      opacity: 1;
    }
  }

  &-children {
    color: var(--gray-color-1);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
    padding: 11px 16px 11px 0;
    position: relative;
    transition: all 0.3s;
    background: #f6f8fb;
    border-bottom: 1px solid #2678d91f;

    //  Last one has no border
    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: #1c89c1;
    }
  }
}
</style>
