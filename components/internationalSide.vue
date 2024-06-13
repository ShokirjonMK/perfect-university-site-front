<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending"></div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <div class="sideNews">
        <ul v-if="headerSite && headerSite.menu">
          <NuxtLink :to="`/${$i18n.locale}/${headerSite.menu[sideHeadId].url}`">
            <li class="univ">
              <img class="mr-2" src="../static/img/logo-sidebar.png" />
              {{ headerSite.menu[sideHeadId].title }}
            </li>
          </NuxtLink>
          <template
            v-if="
              headerSite.menu[sideHeadId].child &&
              headerSite.menu[sideHeadId].child.length
            "
          >
            <NuxtLink
              v-for="(item, index) in headerSite.menu[sideHeadId].child"
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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'InternationalSide',

  computed: {
    ...mapState({
      headerSite: (state) => state.header.header,
    }),
  },
  props: {
    sideHeadId: {
      type: Number | String,
    },
  },
  async fetch() {
    await this.$store.dispatch('header/fetchHeader').catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.sideNews {
  a.nuxt-link-exact-active {
    li {
      background: #00316b;
      color: white;
    }
  }
  width: 100%;
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
