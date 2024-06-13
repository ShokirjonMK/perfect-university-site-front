export default {
  name: 'MetaMixin',
  computed: {
    locale() {
      switch (this.$i18n.locale) {
        case 'sr' || 'sr':
          return 'sr'
          break
        case 'en':
          return 'en'
          break
        case 'ru':
          return 'ru'
          break

          return 'sr'
      }
    },
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.locale,
      },
      meta: [
        { hid: 'og:url', property: 'og:url', content: window.location.href },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('og_description'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('og_description'),
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: window.location.href,
        },
      ],
    }
  },
}
