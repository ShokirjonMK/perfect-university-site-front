import ElementLocale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/en'
import uzLocale from 'element-ui/lib/locale/lang/uz-UZ'
import ruLocale from 'element-ui/lib/locale/lang/ru-RU'
export default function ({ i18n }, inject) {
  const locales = {
    sr: uzLocale,
    ru: ruLocale,
    en: lang,
  }
  const setLocale = (locale) => {
    ElementLocale.use(locales[locale])
  }

  setLocale(i18n.locale)
  i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    setLocale(newLocale)
  }
}
