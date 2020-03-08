import React, { useEffect, useContext } from "react"
// import { Context as RegionsDataContext } from '@Contexts/regionsData'
import { Context as NationalTrendDataContext } from '@Contexts/nationalTrendData'
import Layout from "@Components/Layout"
import SEO from "@Components/Seo"
import BigCard from '@Components/BigCard'
import CardCarousel from '@Components/CardCarousel'
import { get, last } from 'lodash'
import { formatDistanceToNow } from 'date-fns'
import { it } from 'date-fns/locale'
const IndexPage = () => {
  // const {store: regionDataStore, onGetRegionsData} = useContext(RegionsDataContext)
  const {store: nationalTrendDataStore, onGetNationalTrandData} = useContext(NationalTrendDataContext)
  useEffect(() => {
    onGetNationalTrandData()
  }, [])
  
  const {data: nationalTrendData} = nationalTrendDataStore
  const todayNationalTrendData = last(nationalTrendData)
  return (
  <Layout>
    <SEO title="Home" />
    <div>
    <div className="homepage">
      <div className="homepage__wrap">
        <div className="homepage__item homepage__item--big-cards">
          {todayNationalTrendData && (
            <>
              <CardCarousel>
                <BigCard 
                  emoji="😷" 
                  title="Positivi" 
                  content={`${todayNationalTrendData.infected.toLocaleString()}`} 
                  additionalContent={`+${todayNationalTrendData.newInfected}`}
                  subContent={`Totali fino ad oggi ${todayNationalTrendData.totalCases}`} 
                />
                <BigCard 
                  emoji="😊" 
                  title="Guariti" 
                  content={todayNationalTrendData.healed} 
                />
                <BigCard 
                  emoji="😢" 
                  title="Deceduti" 
                  content={todayNationalTrendData.deaths} 
                  subContent="in attesa di conferma ISS" 
                />
              </CardCarousel>
              <p>Ultimo aggiornamento: {formatDistanceToNow(new Date(todayNationalTrendData.date), {
                locale: it
              })}</p>
            </>
          )}
        </div>
      </div>
    </div>
      
    </div>
  </Layout>
)
}

export default IndexPage
