import https from "https";

export default function({ $axios, store, app }) {
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  $axios.onRequest((config) => {
    config.headers.common['Accept-Language'] = app.i18n.locale
  })

}
