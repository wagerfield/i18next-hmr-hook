import { appWithTranslation } from "next-i18next"
import { useHMR } from "../hooks/use-hmr"
import config from "../../next-i18next.config"
import "tailwindcss/tailwind.css"

export const App = ({ Component, pageProps }) => {
  useHMR()

  return <Component {...pageProps} />
}

export default appWithTranslation(App, config)
