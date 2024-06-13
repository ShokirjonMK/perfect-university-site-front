<template>
  <ul class="sidebar d-flex flex-column position-relative">
    <li class="sidebar-list-item-top text-uppercase text-white">
      {{ $t('faculties_and_departments') }}
    </li>
    <li v-for="(item, items) in faculty" :key="items" class="sidebar-list-item">
      <a
        v-if="isValidUrl(item.link)"
        target="_blank"
        :href="item.link"
        :class="{ active: getRoute?.includes(item?.slug) }"
        class="sidebar-link w-100 h-100 d-flex align-items-center"
      >
        {{ item?.title }}
      </a>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('directions'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    getRoute() {
      return this.$route.path
    },
    ...mapState({
      faculty: (state) => state.faculty.faculty,
    }),
  },

  async fetch() {
    await this.$store.dispatch('faculty/fetchFaculty').catch(() => {})
  },
  async mounted() {
    await this.$store.dispatch('faculty/fetchFaculty').catch(() => {})
    if (this.faculty.length > 0) {
      const firstFaculty = this.faculty[0]
      this.$router.push(`/${this.$i18n.locale}/faculties/${firstFaculty.slug}`)
    }
  },

  methods: {
    isValidUrl(str) {
      const pattern = new RegExp(
        '^([a-zA-Z]+:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
      )
      return pattern.test(str)
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
