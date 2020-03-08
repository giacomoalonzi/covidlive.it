import React, { useEffect, useContext } from "react"
import { Context as RegionsDataContext } from '@Contexts/regionsData'
import Layout from "@Components/layout"
import SEO from "@Components/seo"

const IndexPage = () => {
  const {store, onGetRegionsData} = useContext(RegionsDataContext)
  useEffect(() => {
    onGetRegionsData()
  }, [])
  return (
  <Layout>
    <SEO title="Home" />
    <h1>Covid 19 IT</h1>
  </Layout>
)
}

export default IndexPage
