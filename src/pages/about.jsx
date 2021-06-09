import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Page } from "../components/page"

export const getStaticProps = async ({ locale }) => ({
  props: await serverSideTranslations(locale),
})

export const AboutPage = () => <Page page="about" />

export default AboutPage
