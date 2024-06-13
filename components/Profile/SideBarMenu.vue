<template>
  <ul class="sidebar d-flex flex-column position-relative">
    <li class="sidebar-list-item-top text-uppercase text-white">
      Undergraduate
    </li>
    <li v-for="(item, index) in menus" :key="index" class="sidebar-list-item">
      <NuxtLink
        class="sidebar-link w-100 h-100 d-flex align-items-center"
        :to="localePath(item?.url)"
        :class="{
          'nuxt-link-exact-active':
            $route.fullPath?.includes('edit') && index === 0,
        }"
      >
        {{ $t(item?.title) }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SideNav',
  data() {
    return {
      sideHead: null,
      menus: [
        {
          title: 'personal_info',
          url: '/profile',
        },
        {
          title: 'contact_info',
          url: '/profile/contact',
        },
        {
          title: 'education_skills',
          url: '/profile/education',
        },
        {
          title: 'my_applications',
          url: '/profile/application',
        },
      ],
    }
  },

  computed: {
    ...mapState({
      headerSite: (state) => state.header.header,
    }),
  },
  mounted() {
    this.sideHead = this.$route.path.split('/')[2]
    for (let i = 0; i < this.headerSite?.menu?.length; i++) {
      if (this.headerSite.menu[i].url === this.sideHead) {
        this.menus = this.headerSite.menu[i]
      }
    }
  },
  async fetch() {
    await this.$store.dispatch('header/fetchHeader').catch(() => {})
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
  color: var(--grey-grey-2, #768194);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  padding: 12px 16px;
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

  &.nuxt-link-exact-active {
    &::before {
      opacity: 1;
    }
  }
}
.sidebar-list-item {
  border-bottom: 1px solid #f6f8fb;
}

.nuxt-link-exact-active {
  font-weight: 600;
  background: #eef5fc;
  color: var(--main-dark, #1d2024);
}

.nuxt-link-exact-active svg path {
  fill: #2678d9;
  stroke: #2678d9;
}
</style>
