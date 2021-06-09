const HttpBackend = require("i18next-http-backend/cjs")

module.exports = {
  i18n: {
    defaultLocale: "en-US",
    locales: ["de-DE", "en-US", "fr-FR"],
  },
  defaultNS: "core",
  ns: ["core", "page"],
  use: process.browser ? [HttpBackend] : [],
}
