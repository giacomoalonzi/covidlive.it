import React, { useEffect, useContext, useState } from "react"
import { Context as RegionsDataContext } from '@Contexts/regionsData'
import { Context as NationalTrendDataContext } from '@Contexts/nationalTrendData'
import Layout from "@Components/layout"
import SEO from "@Components/seo"
import BigCard from '@Components/bigCard'
import CardCarousel from '@Components/cardCarousel'
import { get, last } from 'lodash'
import { format, parseISO } from 'date-fns'
import { it } from 'date-fns/locale'
import RowCardList from '@Components/rowCardList'

const IndexPage = () => {
  const {store: regionsDataStore, onGetRegionsData} = useContext(RegionsDataContext)
  const {store: nationalTrendDataStore, onGetNationalTrandData} = useContext(NationalTrendDataContext)
  const [regionsDataSorted, setRegionsDataSorted] = useState([])
  useEffect(() => {
    onGetNationalTrandData()
    onGetRegionsData()
  }, [])

  useEffect(() => {
    const { data } = regionsDataStore
    const dailyData = data.splice(data.length - 20, data.length)
    const sortedData = dailyData.sort(function (a, b) {
      return a.infected - b.infected;
    }).reverse().splice(0, 10)

    setRegionsDataSorted(sortedData)
    console.log(sortedData)
  }, [regionsDataStore])
  
  const {data: nationalTrendData} = nationalTrendDataStore
  const todayNationalTrendData = last(nationalTrendData)
  return (
  <Layout>
    <SEO title="Covidlive: La situazione in Italia in tempo reale" />
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
                  additionalContent={`+${todayNationalTrendData.newInfected.toLocaleString()}`}
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
              
              <p>Ultimo aggiornamento: {format(new Date(parseISO(get(todayNationalTrendData, 'date', ''))), 'dd/LL/yyyy – H:mm', {
                locale: it
              })} – <a href="http://www.protezionecivile.gov.it/home" norel="nofollow" target="_blank">Fonte</a> </p>
            </>
          )}
        </div>
        <div className="homepage__item homepage__item--region-chart u-margin-top-spacer-xxlarge u-margin-bottom-spacer-xlarge">
          <h2 className="u-margin-bottom-spacer-large">Top 10 regioni</h2>
          <RowCardList list={regionsDataSorted} />
        </div>
      </div>
    </div>
      
    </div>
  </Layout>
)
}

export default IndexPage
