import * as React from "react"
import * as PropTypes from "prop-types"
import Skeleton from "@Components/skeleton"
import { useIntl } from "gatsby-plugin-intl"

const chevronSvg = require("@Assets/images/icons/chevron.svg")
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

type Props = {
  index?: number
  name?: string
  infected?: number
  healed?: number
  deaths?: number
  isLoading?: boolean
  testPerformed?: number
  homeConfinement?: number
  hospitalized?: number
  intensiveCare?: number
  hospitalizedWithSymptoms?: number
  selectedAccordionId?: [string]
  newInfected?: number
}

const RowCardItemAccordion = ({
  index,
  name,
  infected,
  healed,
  deaths,
  isLoading,
  testPerformed,
  homeConfinement,
  hospitalized,
  intensiveCare,
  hospitalizedWithSymptoms,
  selectedAccordionId,
  newInfected,
}: Props) => {
  const { formatMessage } = useIntl()
  return (
    <div
      className={`row-card-item ${selectedAccordionId.includes(name) ? "is-selected" : ""} ${
        isLoading ? "is-loading" : ""
      }`}
    >
      <AccordionItem className="row-card-item__wrap" uuid={name}>
        {isLoading ? (
          <Skeleton>
            <p>Loading</p>
          </Skeleton>
        ) : (
          <>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="row-card-item__item row-card-item__item--text">
                  <p>
                    <span>{index + 1}</span>
                    {name}
                  </p>
                </div>
                <div className="row-card-item__item row-card-item__item--stats">
                  <div className="row-card-item-stat">
                    <p>
                      <span role="img" aria-labelledby="img">
                        😷
                      </span>
                      {infected.toLocaleString()}
                      <small>+{newInfected}</small>
                    </p>
                  </div>
                  <div className="row-card-item-stat">
                    <p>
                      <span role="img" aria-labelledby="img">
                        😊
                      </span>
                      {healed.toLocaleString()}
                    </p>
                  </div>
                  <div className="row-card-item-stat">
                    <p>
                      <span role="img" aria-labelledby="img">
                        😢
                      </span>
                      {deaths.toLocaleString()}
                    </p>
                  </div>
                  <div className="row-card-item-chevron ">
                    <img src={chevronSvg} />
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="row-card-item__item row-card-item__item--panel">
                <div className="row-card-table">
                  <div className="row-card-table__wrap">
                    <div className="row-card-table-row"></div>
                    <div className="row-card-table-row">
                      <div className="row-card-table-row__wrap">
                        <div className="row-card-table-row__item">
                          <p>
                            {formatMessage({ id: "pages.homepage.allRegions.regionBlockDataLabels.hospitalizedLabel" })}
                          </p>
                        </div>
                        <div className="row-card-table-row__item">
                          <p>{hospitalized.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row-card-table-row">
                      <div className="row-card-table-row__wrap">
                        <div className="row-card-table-row__item">
                          <p>
                            {formatMessage({ id: "pages.homepage.allRegions.regionBlockDataLabels.intensiveCare" })}
                          </p>
                        </div>
                        <div className="row-card-table-row__item">
                          <p>{intensiveCare.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row-card-table-row">
                      <div className="row-card-table-row__wrap">
                        <div className="row-card-table-row__item">
                          <p>
                            {formatMessage({
                              id: "pages.homepage.allRegions.regionBlockDataLabels.hospitalizedWithSymptoms",
                            })}
                          </p>
                        </div>
                        <div className="row-card-table-row__item">
                          <p>{hospitalizedWithSymptoms.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row-card-table-row">
                      <div className="row-card-table-row__wrap">
                        <div className="row-card-table-row__item">
                          <p>
                            {formatMessage({
                              id: "pages.homepage.allRegions.regionBlockDataLabels.homeConfinement",
                            })}
                          </p>
                        </div>
                        <div className="row-card-table-row__item">
                          <p>{homeConfinement.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row-card-table-row__wrap">
                      <div className="row-card-table-row__item">
                        <p>
                          {formatMessage({
                            id: "pages.homepage.allRegions.regionBlockDataLabels.testPerformed",
                          })}
                        </p>
                      </div>
                      <div className="row-card-table-row__item">
                        <p>{testPerformed.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </>
        )}
      </AccordionItem>
    </div>
  )
}

RowCardItemAccordion.defaultProps = {
  index: 0,
  name: "",
  infected: 0,
  healted: 0,
  deaths: 0,
  isLoading: false,
  testPerformed: 0,
  homeConfinement: 0,
  hospitalized: 0,
  intensiveCare: 0,
  hospitalizedWithSymptoms: 0,
  selectedAccordionId: [""],
  newInfected: 0,
}

RowCardItemAccordion.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  infected: PropTypes.number,
  healted: PropTypes.number,
  deaths: PropTypes.number,
  isLoading: PropTypes.bool,
  testPerformed: PropTypes.number,
  homeConfinement: PropTypes.number,
  hospitalized: PropTypes.number,
  intensiveCare: PropTypes.number,
  hospitalizedWithSymptoms: PropTypes.number,
  selectedAccordionId: PropTypes.array,
  newInfected: PropTypes.number,
}

export default RowCardItemAccordion
