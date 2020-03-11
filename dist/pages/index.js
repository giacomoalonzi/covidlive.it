"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const react_1 = require("react");
const regionsData_1 = require("@Contexts/regionsData");
const nationalTrendData_1 = require("@Contexts/nationalTrendData");
const layout_1 = require("@Components/layout");
const seo_1 = require("@Components/seo");
const bigCard_1 = require("@Components/bigCard");
const cardCarousel_1 = require("@Components/cardCarousel");
const fakeCarousel_1 = require("@Components/fakeCarousel");
const infectedChart_1 = require("@Components/infectedChart");
const testPerformedChart_1 = require("@Components/testPerformedChart");
const lodash_1 = require("lodash");
const messageBox_1 = require("@Components/messageBox");
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
const rowCardList_1 = require("@Components/rowCardList");
const IndexPage = () => {
    const { store: regionsDataStore, onGetRegionsData } = react_1.useContext(regionsData_1.Context);
    const { store: nationalTrendDataStore, onGetNationalTrandData } = react_1.useContext(nationalTrendData_1.Context);
    const [regionsDataSorted, setRegionsDataSorted] = react_1.useState([]);
    react_1.useEffect(() => {
        onGetNationalTrandData();
        onGetRegionsData();
    }, []);
    react_1.useEffect(() => {
        const { data } = regionsDataStore;
        const dailyData = data.splice(data.length - 20, data.length);
        const sortedData = dailyData
            .sort(function (a, b) {
            return a.infected - b.infected;
        })
            .reverse()
            .splice(0, 10);
        setRegionsDataSorted(sortedData);
    }, [regionsDataStore]);
    const { data: nationalTrendData } = nationalTrendDataStore;
    const todayNationalTrendData = lodash_1.last(nationalTrendData);
    const lastWeekData = lodash_1.slice(nationalTrendData, nationalTrendData.length - 7);
    const labels = lastWeekData.map(i => date_fns_1.format(new Date(date_fns_1.parseISO(i.date)), "dd/LL"));
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
    };
    const renderBigCardLoadingState = (key) => {
        return (react_1.default.createElement("div", { className: "fake-carousel__item" },
            react_1.default.createElement(bigCard_1.default, { key: key, isLoading: true })));
    };
    const renderFakeCarousel = () => {
        return (react_1.default.createElement(fakeCarousel_1.default, null, lodash_1.range(3).map(renderBigCardLoadingState)));
    };
    const renderCarousel = () => {
        return (react_1.default.createElement(cardCarousel_1.default, null,
            react_1.default.createElement(bigCard_1.default, { emoji: "\uD83D\uDE37", title: "Positivi", content: `${lodash_1.get(todayNationalTrendData, "infected", "").toLocaleString()}`, additionalContent: `+${lodash_1.get(todayNationalTrendData, "newInfected", "").toLocaleString()} da ieri`, subContent: `Totali fino ad oggi ${lodash_1.get(todayNationalTrendData, "totalCases", "").toLocaleString()}` }),
            react_1.default.createElement(bigCard_1.default, { emoji: "\uD83D\uDE0A", title: "Guariti", content: lodash_1.get(todayNationalTrendData, "healed", "").toLocaleString() }),
            react_1.default.createElement(bigCard_1.default, { emoji: "\uD83D\uDE22", title: "Deceduti", content: lodash_1.get(todayNationalTrendData, "deaths", "").toLocaleString(), subContent: "In attesa di conferma ISS" })));
    };
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement(seo_1.default, { title: "Covid Live: la situazione in tempo reale" }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "homepage" },
                react_1.default.createElement("div", { className: "homepage__wrap" },
                    react_1.default.createElement("div", { style: { marginLeft: 'auto', marginRight: 'auto' }, className: "u-margin-bottom-spacer-huge" },
                        react_1.default.createElement(messageBox_1.default, { type: "error" },
                            react_1.default.createElement("p", null, "Attenzione: i dati del 10/03 relativi alla Regione Lombardia non sono completi."))),
                    react_1.default.createElement("div", { className: "homepage__item homepage__item--big-cards" },
                        react_1.default.createElement(react_1.default.Fragment, null,
                            !todayNationalTrendData ? renderFakeCarousel() : renderCarousel(),
                            todayNationalTrendData && (react_1.default.createElement("p", null,
                                "Ultimo aggiornamento:",
                                " ",
                                date_fns_1.format(new Date(date_fns_1.parseISO(lodash_1.get(todayNationalTrendData, "date", ""))), "dd/LL/yyyy – H:mm", {
                                    locale: locale_1.it,
                                }),
                                " ",
                                "\u2013",
                                " ",
                                react_1.default.createElement("a", { href: "http://www.protezionecivile.gov.it/home", rel: "noopener noreferrer", target: "_blank" }, "Fonte"),
                                " ")))),
                    react_1.default.createElement("div", { className: "homepage__item homepage__item--region-chart u-margin-top-spacer-xxlarge u-margin-bottom-spacer-xlarge" },
                        react_1.default.createElement("h2", { className: "u-margin-bottom-spacer-large" }, "Le regioni pi\u00F9 colpite"),
                        react_1.default.createElement(rowCardList_1.default, { list: regionsDataSorted, numberOfFakeCards: 10, isLoading: !regionsDataSorted.length })),
                    react_1.default.createElement("div", { className: "homepage__item homepage__item--half u-margin-top-spacer-xlarge u-margin-bottom-spacer-xlarge" },
                        react_1.default.createElement("h2", { className: "u-margin-bottom-spacer-large" }, "Dati ultima settimana"),
                        react_1.default.createElement("div", { className: "card" },
                            react_1.default.createElement("div", { className: "card__wrap" },
                                react_1.default.createElement("div", { className: "card__item" },
                                    react_1.default.createElement(infectedChart_1.default, { data: infectedChartData }))))),
                    react_1.default.createElement("div", { className: "homepage__item homepage__item--half u-margin-top-spacer-xlarge u-margin-bottom-spacer-xlarge" },
                        react_1.default.createElement("h2", { className: "u-margin-bottom-spacer-large" }, "Tamponi ultima settimana"),
                        react_1.default.createElement("div", { className: "card" },
                            react_1.default.createElement("div", { className: "card__wrap" },
                                react_1.default.createElement("div", { className: "card__item" },
                                    react_1.default.createElement(testPerformedChart_1.default, { data: testPerformedChartData }))))))))));
};
exports.default = IndexPage;
//# sourceMappingURL=index.js.map