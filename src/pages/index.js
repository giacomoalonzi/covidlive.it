import React, { useEffect, useContext, useState } from "react"
import { Context as RegionsDataContext } from "@Contexts/regionsData"
import { Context as NationalTrendDataContext } from "@Contexts/nationalTrendData"
import Layout from "@Components/layout"
import SEO from "@Components/seo"
import BigCard from "@Components/bigCard"
import CardCarousel from "@Components/cardCarousel"
import InfectedChart from "@Components/infectedChart"
import TestPerformedChart from "@Components/testPerformedChart"

import { get, last, slice, range } from "lodash"
import { format, parseISO } from "date-fns"
import { it } from "date-fns/locale"
import RowCardList from "@Components/rowCardList"
const IndexPage = () => {
  const { store: regionsDataStore, onGetRegionsData } = useContext(RegionsDataContext)
  const { store: nationalTrendDataStore, onGetNationalTrandData } = useContext(NationalTrendDataContext)
  const [regionsDataSorted, setRegionsDataSorted] = useState([])
  useEffect(() => {
    onGetNationalTrandData()
    onGetRegionsData()
  }, [])

  useEffect(() => {
    const { data } = regionsDataStore
    const dailyData = data.splice(data.length - 20, data.length)
    const sortedData = dailyData
      .sort(function(a, b) {
        return a.infected - b.infected
      })
      .reverse()
      .splice(0, 10)

    setRegionsDataSorted(sortedData)
  }, [regionsDataStore])
  const { data: nationalTrendData } = nationalTrendDataStore
  const todayNationalTrendData = last(nationalTrendData)
  const lastWeekData = slice(nationalTrendData, nationalTrendData.length - 7)

  const infectedChartData = {
    labels: lastWeekData.map(i => format(new Date(parseISO(i.date)), "dd/LL")),
    series: [lastWeekData.map(i => ({ meta: "positivi", value: i.infected }))],
  }

  const testPerformedChartData = {
    labels: lastWeekData.map(i => format(new Date(parseISO(i.date)), "dd/LL")),
    series: [lastWeekData.map(i => i.testPerformed)],
  }

  const renderBigCardLoadingState = (key: number): Function => {
    return <BigCard key={key} isLoading />
  }

  const renderBigCardCarousel = (): Function => {
    return (
      <>
        <BigCard
          emoji="😷"
          title="Positivi"
          content={`${get(todayNationalTrendData, "infected", "").toLocaleString()}`}
          additionalContent={`+${get(todayNationalTrendData, "newInfected", "").toLocaleString()}`}
          subContent={`Totali fino ad oggi ${get(todayNationalTrendData, "totalCases", "").toLocaleString()}`}
        />
        <BigCard emoji="😊" title="Guariti" content={get(todayNationalTrendData, "healed", "")} />
        <BigCard
          emoji="😢"
          title="Deceduti"
          content={get(todayNationalTrendData, "deaths", "")}
          subContent="In attesa di conferma ISS"
        />
      </>
    )
  }

  return (
    <Layout>
      <SEO title="Covidlive: La situazione in Italia in tempo reale" />
      <div>
        <div className="homepage">
          <div className="homepage__wrap">
            <div className="homepage__item homepage__item--big-cards">
              <>
                <CardCarousel>
                  {!todayNationalTrendData ? <>{range(3).map(renderBigCardLoadingState)}</> : renderBigCardCarousel()}
                </CardCarousel>
                {todayNationalTrendData && (
                  <p>
                    Ultimo aggiornamento:{" "}
                    {format(new Date(parseISO(get(todayNationalTrendData, "date", ""))), "dd/LL/yyyy – H:mm", {
                      locale: it,
                    })}{" "}
                    –{" "}
                    <a href="http://www.protezionecivile.gov.it/home" rel="noopener noreferrer" target="_blank">
                      Fonte
                    </a>{" "}
                  </p>
                )}
              </>
            </div>
            <div className="homepage__item homepage__item--region-chart u-margin-top-spacer-xxlarge u-margin-bottom-spacer-xlarge">
              <h2 className="u-margin-bottom-spacer-large">Top 10 regioni</h2>
              <RowCardList
                list={regionsDataSorted}
                numberOfFakeCards={10}
                isLoading={!regionsDataSorted.length}
              />
            </div>

            <div className="homepage__item homepage__item--half u-margin-top-spacer-xlarge u-margin-bottom-spacer-xlarge">
              <h2 className="u-margin-bottom-spacer-large">Positivi ultima settimana</h2>
              <div className="card">
                <div className="card__wrap">
                  <div className="card__item">
                    <InfectedChart data={infectedChartData} />
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage__item homepage__item--half u-margin-top-spacer-xlarge u-margin-bottom-spacer-xlarge">
              <h2 className="u-margin-bottom-spacer-large">Tamponi ultima settimana</h2>
              <div className="card">
                <div className="card__wrap">
                  <div className="card__item">
                    <TestPerformedChart data={testPerformedChartData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
