import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Page } from "../components/page"

export const getStaticProps = async ({ locale }) => ({
  props: await serverSideTranslations(locale),
})

export const IndexPage = () => <Page page="index" />

export default IndexPage
