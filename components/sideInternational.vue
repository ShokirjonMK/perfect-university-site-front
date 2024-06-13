<template>
  <div>
    <div class="container sideCourses" style="padding: 0">
      <ul v-if="headerSite && headerSite.menu && headerSite.menu.length">
        <NuxtLink :to="`/${$i18n.locale}/${headerSite.menu[2].url}`">
          <li class="univ">
            <img class="mr-2" src="../static/img/logo-sidebar.png" />
            {{ headerSite.menu[3].title }}
          </li>
        </NuxtLink>
        <template
          v-if="headerSite.menu[3].child && headerSite.menu[3].child.length"
        >
          <NuxtLink
            v-for="(item, index) in headerSite.menu[3].child"
            :key="index"
            :to="`/${$i18n.locale}/${item.url}`"
          >
            <li>
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#BDBFC1" />
              </svg>
              {{ item.title }}
            </li>
          </NuxtLink>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SideCourses',

  computed: {
    ...mapState({
      headerSite: (state) => state.header.header,
    }),
  },
  async fetch() {
    await this.$store.dispatch('header/fetchHeader').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.sideCourses {
  margin-top: 35.5%;

  a.nuxt-link-exact-active {
    li {
      background: #00316b;
      color: white;
    }
  }
  ul {
    border: 1px solid #eceef1;
    box-sizing: border-box;
    border-radius: 4px;
    background: #fbfbfb;
    li {
      padding: 0px 16px 0px 16px;
      border-bottom: 1px solid #eceef1;
      padding-top: 14px;
      padding-bottom: 15px;
      font-style: normal;
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 22px;
      color: #7c8084;
      transition: 0.3s all;
      svg {
        margin-top: -2px;
        margin-right: 8px;
      }

      &:hover {
        background: #00316b;
        color: white;
      }
    }

    .univ {
      background: #00316b;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      font-style: normal;
      font-weight: bold;
      font-size: 1rem;
      line-height: 26px;
      text-transform: uppercase;
      color: #e9edf2;
    }
  }
}
</style>
