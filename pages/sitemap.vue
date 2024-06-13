<template>
  <div>
    <bread-crumbs :type="'press'" :links="links" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item
                v-for="(main, index) in header.menu"
                :key="index"
                :title="main.title"
                :name="main.id"
              >
                <a
                  v-for="(item, indexKey) in main.child"
                  v-if="main.child.length"
                  :key="indexKey"
                  class="collapse-link"
                  :href="item.url"
                  >{{ item.title }}</a
                >
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BreadCrumbs from '~/components/Breadcrumb'
import sidebarAppeal from '~/components/sidebarAppeal'
import sideNews from '~/components/sideNews'

export default {
  data() {
    return {
      activeNames: ['1'],
    }
  },
  computed: {
    ...mapState({
      header: (state) => state.header.header,
    }),

    async fetch() {
      await this.$store.dispatch('header/fetchHeader').catch(() => {})
    },

    links() {
      return [
        {
          title: this.$t('sitemap'),
          link: `${this.$i18n.locale}/sitemap`,
        },
      ]
    },
  },
  components: {
    BreadCrumbs,
  },
}
</script>

<style lang="scss">
.collapse-link {
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #86909c;
}
</style>
