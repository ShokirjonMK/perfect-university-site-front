<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending"></div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else style="width: 100%">
      <div class="sideNav">
        <ul v-if="menus">
          <NuxtLink :to="`/${$i18n.locale}/${menus.url}`">
            <li v-if="menus.title" class="univ">
              <img
                class="mr-2"
                src="../static/img/logo-sidebar.png"
                alt="Logo sidebar"
              />
              {{ menus.title }}
            </li>
          </NuxtLink>
          <template v-if="menus.child && menus.child.length">
            <NuxtLink
              v-for="(item, index) in menus.child"
              :key="index"
              :to="`/${$i18n.locale}/${item.url}`"
            >
              <li v-if="item.title">
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
  name: 'SideNav',
  data() {
    return {
      sideHead: null,
      menus: null,
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
.sideNav {
  ul {
    box-sizing: border-box;
    border-radius: 12px;
    background: #ffffff;

    a.nuxt-link-exact-active {
      li {
        background: #eef5fc;
        color: var(--main-dark);
        text-shadow: 0 0 0.65px var(--main-dark), 0 0 0.65px var(--main-dark);

        &::before {
          opacity: 1;
        }
      }
    }

    li {
      border-bottom: 1px solid var(--gray-bg);
      list-style: none;
      padding: 12px 16px;
      font-style: normal;
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 18px;
      color: var(--gray-color-1);
      transition: text-shadow 0.3s ease;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 3px;
        height: 20px;
        background-color: var(--blue);
        border-radius: 2px 10px 10px 2px;
        transition: all 0.3s ease;
        opacity: 0;
      }

      &:hover {
        background: #eef5fc;
        color: var(--main-dark);
        text-shadow: 0 0 0.65px var(--main-dark), 0 0 0.65px var(--main-dark);

        &::before {
          opacity: 1;
        }
      }
    }

    .univ {
      background: #00316b;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      font-style: normal;
      font-weight: bold;
      font-size: 1rem;
      line-height: 26px;
      text-transform: uppercase;
      color: #e9edf2;

      &::before {
        display: none;
      }

      &:hover {
        background-color: var(--darkBlue);
        color: #ffffff;
      }
    }
  }
}
</style>
