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
import RowCardItem from '@Components/rowCardItem'
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
              })}</p>
            </>
          )}
        </div>
        <div className="homepage__item homepage__item--region-chart u-margin-top-spacer-huge u-margin-bottom-spacer-xlarge">
          <h2 className="u-margin-bottom-spacer-xlarge">Top 10 regioni</h2>
          <div className="region-chart-wrapper">
            <ul>
              {regionsDataSorted.map((region, key) => (
                <RowCardItem 
                  key={key}
                  index={key} 
                  name={region.name}
                  infected={region.infected}
                  healed={region.healed}
                  deaths={region.deaths}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  </Layout>
)
}

export default IndexPage
