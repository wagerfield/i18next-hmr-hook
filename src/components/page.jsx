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
  const { t } = useTranslation()

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
      <div className="flex-1 p-6">
        <h1 className="font-bold text-2xl">{t(`page:${page}.title`)}</h1>
        <p className="mt-3 text-gray-600">{t(`page:${page}.body`)}</p>
      </div>
      <footer className="flex items-center justify-between px-6 py-2 bg-gray-100">
        <span className="italic text-gray-500">{t(`core:footer`)}</span>
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
