export default {
  server: {
    port: 8083, // default: 3000
    host: 'localhost', // default: localhost
  },
  ssr: false,
  pageTransition: { name: 'fade', mode: 'out-in' },
  head: {
    title: 'Tashkent Perfect University',
    // htmlAttrs: {
    //   lang: "sr"
    // },
    meta: [
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      },
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=0',
      },
      { name: 'robots', content: 'max-image-preview:large' },
      // START - Open Graph and Twitter Card Tags 3.3.0
      {
        name: 'keywords',
        content:
          'учебное учреждение, oliy talim, университет, university, образование, students, rector, admission, life',
      },
      { name: 'author', content: 'Perfect university' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content: '/og-image.webp' || '',
      },
      {
        property: 'og:image:url',
        content: '/og-image.webp' || '',
      },
      {
        property: 'og:image:secure_url',
        content: '/og-image.webp',
      },
      {
        property: 'article:publisher',
        content: 'https://www.facebook.com/perfectuniversity.uz',
      },
      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      // END - Open Graph and Twitter Card Tags 3.3.0
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        integrity:
          'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
        crossOrigin: 'anonymous',
        referrerpolicy: 'no-referrer',
      },
    ],
    script: [
      {
        src: 'https://code.responsivevoice.org/responsivevoice.js?key=BiYgxJ4l',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/fonts/fonts.css',
    '@/assets/css/pages.scss',
    'vue-cool-lightbox/dist/vue-cool-lightbox.min.css',
    '@/assets/css/print.scss',
    '@/assets/css/media.scss',
    '@/assets/css/_normalize.scss',
    '@/assets/css/slick.scss',
    '@/assets/css/components.scss',
    '@/assets/css/elements.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-slick-carousel', ssr: false },
    { src: '@/plugins/axios' },
    { src: '@/plugins/carousel3d', ssr: false },
    { src: '@/plugins/v-calendar', ssr: false },
    { src: '@/plugins/locale.js', ssr: false },
    { src: '@/plugins/vuelidate.js', ssr: false },
    { src: '~/plugins/toastification.js', ssr: false },
    { src: '@plugins/v-mask.js', ssr: false },
    { src: '@/plugins/vueMask.js', ssr: false },
    { src: '@/plugins/vue-inputmask', ssr: false },
    { src: '@/plugins/element-ui', ssr: false },
    { src: 'plugins/number-animation', ssr: false },
    { src: 'plugins/vue-marquee-bar', ssr: false },
    { src: 'plugins/croppa', ssr: false },
    { src: 'plugins/vue-tel-input', ssr: false },
    { src: '@plugins/day', ssr: false },
  ],

  // Auto import components: https://go.nuxtj s.dev/config-components

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/moment', '@nuxtjs/google-analytics'],
  moment: { locales: ['uz-latn', 'ru', 'en-gb'], ssr: false },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/proxy',
    '@nuxtjs/sitemap',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/sentry',
    '@nuxtjs/dayjs',
    ['vue-social-sharing/nuxt'],
    ['@nuxtjs/recaptcha'],
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'ru',
            file: 'ru-RU.js',
          },
          {
            code: 'sr',
            file: 'oz-OZ.js',
          },
          {
            code: 'en',
            file: 'en-EN.js',
          },
        ],
        strategy: 'prefix_and_default',
        defaultLocale: 'sr',
        lazy: true,
        langDir: 'lang/',
      },
    ],
    '@nuxtjs/robots',
  ],
  recaptcha: {
    hideBadge: true,
    language: 'uz-UZ',
    siteKey: '6Lf689EpAAAAAB7pzuHxAicDOhucUfmnRv7WooFG', // for example
    version: 2, // Version
    size: 'normal', // Size: 'compact', 'normal', 'invisible' (v2)
  },
  publicRuntimeConfig: {
    recaptcha: {
      siteKey: '6Lf689EpAAAAAB7pzuHxAicDOhucUfmnRv7WooFG', // for example
    },
  },

  sentry: {
    dsn: 'https://812580a8fa7609168571e9c8ec193a88@o713327.ingest.sentry.io/4505940680769536',
    disabled: process.env.NODE_ENV === 'development',
    tracking: {
      tracesSampleRate: 1.0,
      vueOptions: {
        tracing: true,
        tracingOptions: {
          hooks: ['mount', 'update'],
          timeout: 2000,
          trackComponents: true,
        },
      },
      browserOptions: {},
    },
  },

  sitemap: [
    {
      path: '/sitemap.xml',
      hostname: 'https://tpu.uz',
      gzip: true,
      exclude: ['/secret', '/admin/**'],
      defaults: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
    },
  ],

  robots: {
    UserAgent: '*',
    Disallow: '',

    Host: 'https://tpu.uz/',
    Sitemap: 'https://tpu.uz/sitemap.xml',
  },
  dayjs: {
    locales: ['en', 'ru', 'uz', 'uz-latn'],
    defaultLocale: 'uz-latn',
    plugins: ['utc'],
  },
  axios: {
    baseURL: process.env.BASE_URL,
    // baseURL: 'https://api.tpu.uz/',
  },
  build: {
    babel: {
      compact: true,
    },
  },
}
