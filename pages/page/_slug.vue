<template>
  <div v-if="$fetchState.pending" class="fetch-pending">
    <loader />
  </div>
  <div v-else-if="$fetchState.error" class="fetch-error">
    Что то пошло не так =(
  </div>
  <div v-else>
    <bread-crumbs v-if="links" :type="'press'" :links="links" />
    <div class="container">
      <div v-if="staticPages && staticPages.page" class="row">
        <div class="col-12 col-lg-9">
          <h2>
            {{ staticPages?.page?.title }}
          </h2>
          <div class="structure__styles">
            <div
              v-if="staticPages.page.images && staticPages.page.images.length"
              class="mb-4"
            >
              <dormSlider :images="staticPages.page.images" />
            </div>
            <img
              v-if="
                staticPages.page.image_url &&
                $route.path !== '/page/privacy-policy'
              "
              :src="staticPages.page.image_url"
              :alt="staticPages?.page?.title"
            />

            <div class="single__content" v-html="staticPages.page.content" />
          </div>
          <HashTags v-if="$route.params.slug === 'social-life'" />
        </div>
        <div class="col-12 col-lg-3 pb-3">
          <aside class="sidebar">
            <StudentsSidebar
              v-if="
                $route.params.slug === 'social-life' ||
                $route.params.slug === 'campus-facilities'
              "
            />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BreadCrumbs from '~/components/Breadcrumb'
import dormSlider from '~/components/dormSlider'

export default {
  components: {
    BreadCrumbs,
    dormSlider,
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.staticPages?.page?.title,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.staticPages?.page?.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.staticPages?.page?.title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.chekImage,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.staticPages?.page?.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.staticPages?.page?.title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.chekImage,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.staticPages?.page?.title,
        },
      ],
    }
  },

  computed: {
    chekImage() {
      return ['.jpeg', 'jpg'].includes(this.staticPages?.page?.image_url)
        ? this.staticPages?.page?.image_url
        : 'https://yangi.tsue.uz/image/seminars.jpg'
    },
    links() {
      return [
        {
          title: this.staticPages?.page?.title,
          link: `${this.$i18n.locale}/static`,
        },
      ]
    },
    ...mapState({
      staticPages: (state) => state.static.staticPages,
      staticSingleMenu: (state) => state.static.staticSingleMenu,
      headerSite: (state) => state.header.header,
    }),
  },
  async fetch() {
    await this.$store
      .dispatch('static/fetchStaticPages', this.$route.params.slug)
      .catch(() => {})
  },
}
</script>

<style scoped>
h2 {
  width: 100%;
  max-width: 982px;
  margin: 0 auto 24px;
  color: #1d2024;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
}
.container {
  margin-top: 24px;
}
</style>
<style lang="scss">
.structure__styles {
  font-family: 'Vela Sans', sans-serif;
  width: 100%;
  padding: 24px 24px 62px 24px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 27px 71px 0px rgba(28, 78, 66, 0.03),
    0px -2.353px 54.828px 0px rgba(28, 78, 66, 0.02),
    0px -4.354px 31.545px 0px rgba(28, 78, 66, 0.01),
    0px -2.42px 8.124px 0px rgba(28, 78, 66, 0.01),
    0px -0.586px 1.043px 0px rgba(28, 78, 66, 0),
    0px 0.278px 0px 0px rgba(28, 78, 66, 0);
}
.single__content {
  margin-top: 16px;

  & h1 {
    color: #144176;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 132%;
    position: relative;
    margin-bottom: 16px;
    margin-left: 12px;

    &:before {
      content: '';
      position: absolute;
      left: -12px;
      border-radius: 2px 8px 8px 2px;
      background: #1c89c1;
      width: 4px;
      height: 32px;
    }
  }
}

.structure__styles .single__content p {
  color: #1d2024;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.256px;
}

.structure__styles ul {
  gap: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  margin-left: 8px;
  margin-top: 24px;
}

.structure__styles li {
  display: flex;
  gap: 8px;
  color: #1d2024;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &:before {
    content: url('~/static/image/about-tsue/zero-mission.svg');
  }
}
</style>
