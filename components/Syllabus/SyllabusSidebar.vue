<template>
  <ul class="d-flex flex-column position-relative">
    <li class="sidebar-list-item-top text-uppercase text-white">
      {{ $t('syllabus') }}
    </li>
    <li
      v-for="(item, items) in sidebarLinks"
      :key="items"
      class="sidebar-list-item"
    >
      <button v-if="!item.children" class="w-100" @click="openActive(item)">
        <NuxtLink
          class="sidebar-link w-100 h-100 d-flex align-items-center"
          :class="{
            'active-link-sidebar':
              $route.fullPath === localePath(item?.path) ||
              $route.fullPath === localePath(item?.path) + '#/',
          }"
          :to="localePath(item?.path)"
        >
          {{ $t(item?.link) }}
        </NuxtLink>
      </button>
      <SyllabusSidebarChild
        v-if="item?.children"
        :item="item"
        :active="activeLinkIndex"
        @openActive="openActive"
      />
    </li>
  </ul>
</template>

<script>
import { CollapseTransition } from '@ivanv/vue-collapse-transition/src'
import { sidebarData } from '~/assets/data'
export default {
  name: 'SyllabusSidebar',

  components: { CollapseTransition },

  data() {
    return {
      activeLinkIndex: 0,
    }
  },
  computed: {
    sidebarLinks() {
      const base = `/about/syllabus/${this.$route.params.faculty}/${this.$route.params.course}`
      return sidebarData(base)
    },
  },

  methods: {
    openActive(item) {
      this.activeLinkIndex = item.id
    },
    checkChildrenActive(item) {
      return item.children.find(
        (child) => this.$route.fullPath === this.localePath(child?.path)
      )
    },
  },
}
</script>

<style lang="scss">
.sidebar {
  border-radius: 12px;
  background: #fff;
}
.sidebar-list-item-top {
  width: 100%;
  padding: 13px 0 13px 16px;
  color: var(--main-white, #fff);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 140%;
  background-color: var(--darkBlue);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-image: url('/image/bg-pattern-small.png');
  background-repeat: no-repeat;
  background-position: center right;
}
.sidebar-link {
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

.sidebar-children {
  padding-left: 16px;
}

.sidebar-list-item {
  border-bottom: 1px solid #f6f8fb;
}

.active-link-sidebar {
  font-weight: 600;
  background: #eef5fc;
  color: var(--main-dark);
}

.active-link-sidebar .span-svg {
  fill: #2678d9;
  stroke: #2678d9;
  transform: rotateX(180deg);
}

.syllabus-sidebar-active {
  background: #eef5fc !important;
}

.sidebar-link:hover,
.sidebar-link-ch:hover {
  background-color: #e8edf2 !important;
  color: #768194;
}
</style>
