import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Link from "next/link"

const PageNav = ({ className, links }) => (
  <nav className={className}>
    <ul className="flex space-x-2">
      {links.map(({ href, text, locale }, key) => (
        <li key={key}>
          <Link href={href} locale={locale}>
            <a className="block p-2">{text}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export const Page = ({ page }) => {
  const { locales, pathname } = useRouter()
  const { t, i18n } = useTranslation()

  return (
    <main className="min-h-screen flex flex-col text-gray-900">
      <header className="flex justify-between px-4 bg-red-500 text-white">
        <PageNav
          links={[
            { text: t("page:index.title"), href: "/" },
            { text: t("page:about.title"), href: "/about" },
          ]}
        />
        <PageNav
          links={locales.map((locale) => ({
            text: t(`core:locale.${locale}`),
            href: pathname,
            locale,
          }))}
        />
      </header>
      <div className="flex-1 p-6 space-y-4">
        <h1 className="font-bold text-2xl">{t(`page:${page}.title`)}</h1>
        <p className="text-gray-600">{t(`page:${page}.body`)}</p>
        <pre className="text-sm text-red-500">
          {i18n && JSON.stringify(i18n.options.ns)}
        </pre>
      </div>
      <footer className="flex items-center justify-between p-6 bg-gray-100">
        <span className="text-gray-600">{t(`core:footer`)}</span>
        <PageNav
          links={locales.map((locale) => ({
            text: t(`core:locale.${locale}`),
            href: pathname,
            locale,
          }))}
        />
      </footer>
    </main>
  )
}
