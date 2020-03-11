import React, { useEffect, useContext, useState } from "react"
import { Context as RegionsDataContext } from "@Contexts/regionsData"
import { Context as NationalTrendDataContext } from "@Contexts/nationalTrendData"
import Layout from "@Components/layout"
import SEO from "@Components/seo"
import BigCard from "@Components/bigCard"
import CardCarousel from "@Components/cardCarousel"
import FakeCarousel from "@Components/fakeCarousel"
import InfectedChart from "@Components/infectedChart"
import TestPerformedChart from "@Components/testPerformedChart"
import { get, last, slice, range , merge} from "lodash"
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
  const labels = lastWeekData.map(i => format(new Date(parseISO(i.date)), "dd/LL")); 
  const testsPerformed = lastWeekData.map(i => i.testPerformed);
  const infected = lastWeekData.map(i => i.infected);
  const healed = lastWeekData.map(i => i.healed);
  const deaths = lastWeekData.map(i => i.deaths);
  
  const infectedChartData = {
    labels,
    datasets: [
      {
        label: 'Positivi',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#E86379',
        borderColor: '#E86379',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#E86379',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#E86379',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 5,
        data: infected
      },
      {
        label: 'Guariti',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#20D6A5',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#20D6A5',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#20D6A5',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: healed
      },
      {
        label: 'Deceduti',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#000b33',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#000b33',
        pointBackgroundColor: '#000b33',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#000b33',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: deaths
      }
    ]
  };

  const testPerformedChartData = {
    labels,
    datasets: [
      {
        label: `Tamponi effettuati`,
        data: testsPerformed,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
      }
    ]
  }

  const renderBigCardLoadingState = () => {
    return (
    <FakeCarousel>
      { range(3).map((key) => <div className="fake-carousel__item"><BigCard key={key} isLoading /></div> ) }
    </FakeCarousel>)
  }

  const renderBigCardCarousel = () => {
    return (
      <CardCarousel>
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
      </CardCarousel>
    )
  }

  return (
    <Layout>
      <SEO title="Covidlive: la situazione in Italia in tempo reale" />
      <div>
        <div className="homepage">
          <div className="homepage__wrap">
            <div className="homepage__item homepage__item--big-cards">
              <>
                {!todayNationalTrendData ? renderBigCardLoadingState() : renderBigCardCarousel() }
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
              <RowCardList list={regionsDataSorted} numberOfFakeCards={10} isLoading={!regionsDataSorted.length} />
            </div>

            <div className="homepage__item homepage__item--half u-margin-top-spacer-xlarge u-margin-bottom-spacer-xlarge">
              <h2 className="u-margin-bottom-spacer-large">Dati ultima settimana</h2>
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
