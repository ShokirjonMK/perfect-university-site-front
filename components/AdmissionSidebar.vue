<template>
  <ul class="sidebar d-flex flex-column position-relative">
    <li class="sidebar-list-item-top text-uppercase text-white">
      {{ $t('admissions') }}
    </li>
    <li
      v-for="(item, items) in admissionLinkers"
      :key="items"
      class="sidebar-list-item"
    >
      <NuxtLink
        class="sidebar-link w-100 h-100 d-flex align-items-center"
        :class="{
          active:
            getRoute?.includes(item?.link) ||
            (items === 5 && getRoute?.includes('/university/vacancy')),
        }"
        :to="localePath(item?.link)"
      >
        {{ $t(item.name) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import { admissionLinkers } from '@/helpers/linkers'
export default {
  name: 'AboutTsueSidebar',

  data() {
    return {
      admissionLinkers,
    }
  },
  computed: {
    getRoute() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss" scoped>
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

  &.active {
    &::before {
      opacity: 1;
    }
    font-weight: 600;
    background: #eef5fc;
    color: var(--main-dark);
  }
}
.sidebar-list-item {
  border-bottom: 1px solid #f6f8fb;
}

.nuxt-link-exact-active {
  font-weight: 600;
  background: #eef5fc;
  color: var(--main-dark);
}

.nuxt-link-exact-active svg path {
  fill: #2678d9;
  stroke: #2678d9;
}
</style>
