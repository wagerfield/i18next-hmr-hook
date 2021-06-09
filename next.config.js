const { resolve } = require("path")
const { I18NextHMRPlugin } = require("i18next-hmr/plugin")
const { i18n } = require("./next-i18next.config")

const localesDir = resolve("public/locales")

module.exports = {
  i18n,
  webpack(config, context) {
    if (!context.isServer && context.dev) {
      config.plugins.push(new I18NextHMRPlugin({ localesDir }))
    }

    return config
  },
}
