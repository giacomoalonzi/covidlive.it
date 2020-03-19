import * as React from "react"
import { Context as RegionsDataContext } from "@Contexts/regionsData"
import { Context as NationalTrendDataContext } from "@Contexts/nationalTrendData"
import Layout from "@Components/layout"
import { Link } from "gatsby"
import SEO from "@Components/seo"
import BigCard from "@Components/bigCard"
import CardCarousel from "@Components/cardCarousel"
import FakeCarousel from "@Components/fakeCarousel"
import LineChart from "@Components/lineChart"
import BarChart from "@Components/barChart"
import { get, last, slice, range } from "lodash"
import MessageBox from "@Components/messageBox"
import { format, parseISO } from "date-fns"
import { it } from "date-fns/locale"
import RowCardList from "@Components/rowCardList"
import { NationalTrendDataType } from "@Types/nationalTrendData"

const IndexPage = () => {
  // @ts-ignore
  const { store: regionsDataStore, onGetRegionsData } = React.useContext(RegionsDataContext)
  // @ts-ignore
  const { store: nationalTrendDataStore, onGetNationalTrandData } = React.useContext(NationalTrendDataContext)
  const [regionsDataSorted, setRegionsDataSorted] = React.useState([])
  const [shouldShowAllRegions, setShouldShowAllRegion] = React.useState<boolean>(false)
  React.useEffect(() => {
    onGetNationalTrandData()
    onGetRegionsData()
  }, [])

  React.useEffect(() => {
    const { data } = regionsDataStore
    const dailyData = slice(data, data.length - 21, data.length)
    const sortedData = dailyData
      .sort(function(a: any, b: any) {
        return a.infected - b.infected
      })
      .reverse()

    setRegionsDataSorted(sortedData)
  }, [regionsDataStore])

  const onShowMoreClick = () => {
    setShouldShowAllRegion(!shouldShowAllRegions)
  }
  const { data: nationalTrendData }: { data: [NationalTrendDataType] } = nationalTrendDataStore
  const todayNationalTrendData = last(nationalTrendData)
  const dayBeforeTodayNationTrendDaata = nationalTrendData[nationalTrendData.length - 2]

  const lastWeekData = slice(nationalTrendData, nationalTrendData.length - 7)
  const labels = lastWeekData.map(i => format(new Date(parseISO(i.date)), "dd/LL"))
  // const testsPerformed = lastWeekData.map(i => i.testPerformed)
  const differenceFromYesterdayHealed =
    get(todayNationalTrendData, "healed", 0) - get(dayBeforeTodayNationTrendDaata, "healed", 0)
  const differenceFromYesterdayDeaths =
    // @ts-ignore
    get(todayNationalTrendData, "deaths", 0) - get(dayBeforeTodayNationTrendDaata, "deaths", 0)
  const infected = lastWeekData.map(i => i.infected)
  const newInfected = lastWeekData.map(i => i.newInfected)
  const healed = lastWeekData.map(i => i.healed)
  const deaths = lastWeekData.map(i => i.deaths)

  const infectedChartData = {
    labels,
    datasets: [
      {
        label: "Positivi",
        fill: false,
        lineTension: 0.2,
        backgroundColor: "#E86379",
        borderColor: "#E86379",
        borderCapStyle: "butt",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#E86379",
        pointBackgroundColor: "#E86379",
        pointBorderWidth: 4,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#E86379",
        pointHoverBorderColor: "#E86379",
        pointHoverBorderWidth: 5,
        data: infected,
      },
      {
        label: "Guariti",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#20D6A5",
        borderColor: "#20D6A5",
        borderCapStyle: "butt",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#20D6A5",
        pointBackgroundColor: "#20D6A5",
        pointBorderWidth: 4,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#20D6A5",
        pointHoverBorderColor: "#20D6A5",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: healed,
      },
      {
        label: "Deceduti",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#000b33",
        borderCapStyle: "butt",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#000b33",
        pointBackgroundColor: "#000b33",
        pointBorderWidth: 4,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#000b33",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: deaths,
      },
    ],
  }

  const testPerformedChartData = {
    labels,
    datasets: [
      {
        label: `Nuovi positivi`,
        data: newInfected,
        backgroundColor: "#fcdca3",
        hoverBackgroundColor: "#fbc870",
      },
    ],
  }

  const renderBigCardLoadingState = (key: number) => {
    return (
      <div key={key} className="fake-carousel__item">
        <BigCard isLoading />
      </div>
    )
  }

  const renderFakeCarousel = () => {
    return <FakeCarousel>{range(3).map(renderBigCardLoadingState)}</FakeCarousel>
  }

  const renderCarousel = () => {
    return (
      <CardCarousel>
        <BigCard
          emoji="😷"
          title="Positivi"
          content={`${get(todayNationalTrendData, "infected", 0).toLocaleString()}`}
          additionalContent={`+${get(todayNationalTrendData, "newInfected", 0).toLocaleString()} da ieri`}
          subContent={`Totali fino ad oggi ${get(todayNationalTrendData, "totalCases", 0).toLocaleString()}`}
        />
        <BigCard
          emoji="😊"
          additionalContentType="success"
          additionalContent={`+${differenceFromYesterdayHealed.toLocaleString()} da ieri`}
          title="Guariti"
          content={get(todayNationalTrendData, "healed", 0).toLocaleString()}
        />
        <BigCard
          emoji="😢"
          title="Deceduti"
          additionalContent={`+${differenceFromYesterdayDeaths.toLocaleString()} da ieri`}
          content={get(todayNationalTrendData, "deaths", 0).toLocaleString()}
          subContent="In attesa di conferma ISS"
        />
      </CardCarousel>
    )
  }

  return (
    <Layout>
      <div>
        <SEO title="Covid Live: la situazione in tempo reale" />
        <div className="homepage">
          <div className="homepage__wrap">
            <div style={{ marginLeft: "auto", marginRight: "auto" }} className="u-margin-bottom-spacer-huge">
              <MessageBox type="error">
                <p>
                  Alcuni dati potrebbero non essere aggiornati. <Link to="/updates">Scopri di più</Link>.
                </p>
              </MessageBox>
            </div>
            <div className="homepage__item homepage__item--big-cards">
              <>
                {!todayNationalTrendData ? renderFakeCarousel() : renderCarousel()}
                {todayNationalTrendData && (
                  <p>
                    *Ultimo aggiornamento:{" "}
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
              <div className="container--internal">
                <h2 className="u-margin-bottom-spacer-large">Le regioni più colpite</h2>
                <RowCardList
                  list={!shouldShowAllRegions ? [...regionsDataSorted.slice(0, 10)] : regionsDataSorted}
                  numberOfFakeCards={10}
                  isLoading={!regionsDataSorted.length}
                />
                <div className="homepage-region-chart-cta">
                  <a onClick={onShowMoreClick} className="button button--primary">
                    {!shouldShowAllRegions ? "Mostra altro" : "Mostra meno"}
                  </a>
                </div>
              </div>
            </div>

            <div className="homepage__item homepage__item--half u-margin-top-spacer-xlarge u-margin-bottom-spacer-xlarge">
              <h2 className="u-margin-bottom-spacer-large">Dati ultima settimana</h2>
              <div className="card">
                <div className="card__wrap">
                  <div className="card__item">
                    <LineChart
                      data={infectedChartData}
                      options={{
                        legend: { position: "bottom", labels: { fontFamily: "Lato", padding: 16, fontStyle: "bold" } },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage__item homepage__item--half u-margin-top-spacer-xlarge u-margin-bottom-spacer-xlarge">
              <h2 className="u-margin-bottom-spacer-large">Nuovi positivi ultima settimana</h2>
              <div className="card">
                <div className="card__wrap">
                  <div className="card__item">
                    <BarChart
                      data={testPerformedChartData}
                      options={{
                        legend: { display: false },
                      }}
                    />
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
