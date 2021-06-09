import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Link from "next/link"

const pages = [
  { key: "index", path: "/" },
  { key: "about", path: "/about" },
]

export const Page = ({ page }) => {
  const { pathname, locales } = useRouter()
  const { t } = useTranslation()

  return (
    <main className="min-h-screen flex flex-col">
      <header className="flex justify-between px-4 bg-red-500 text-white">
        <nav>
          <ul className="flex space-x-2">
            {pages.map(({ key, path }) => (
              <li key={key}>
                <Link href={path}>
                  <a className="block p-2">{t(`page:${key}.title`)}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul className="flex space-x-2">
            {locales.map((locale) => (
              <li key={locale}>
                <Link href={pathname} locale={locale}>
                  <a className="block p-2">{t(`core:locale.${locale}`)}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="flex-1 p-6 text-gray-900">
        <h1 className="font-bold text-2xl">{t(`page:${page}.title`)}</h1>
        <p className="mt-3 text-gray-600">{t(`page:${page}.body`)}</p>
      </div>
      <footer className="px-5 py-3 bg-gray-200">{t(`core:footer`)}</footer>
    </main>
  )
}
