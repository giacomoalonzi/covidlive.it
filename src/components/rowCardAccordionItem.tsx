import * as React from "react"
import * as PropTypes from "prop-types"
import Skeleton from "@Components/skeleton"
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
}

const RowCardItemAccordion = ({ index, name, infected, healed, deaths, isLoading }: Props) => (
  <li className="row-card-item">
    <div className="row-card-item__wrap">
      {isLoading ? (
        <Skeleton fullHeight>
          <p>Loading</p>
        </Skeleton>
      ) : (
        <AccordionItem>
          <AccordionItemHeading>
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
                  {infected}
                </p>
              </div>
              <div className="row-card-item-stat">
                <p>
                  <span role="img" aria-labelledby="img">
                    😊
                  </span>
                  {healed}
                </p>
              </div>
              <div className="row-card-item-stat">
                <p>
                  <span role="img" aria-labelledby="img">
                    😢
                  </span>
                  {deaths}
                </p>
              </div>
              <AccordionItemButton>+</AccordionItemButton>
            </div>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>altri dati</p>
          </AccordionItemPanel>
        </AccordionItem>
      )}
    </div>
  </li>
)

RowCardItemAccordion.defaultProps = {
  index: 0,
  name: "",
  infected: 0,
  healted: 0,
  deaths: 0,
  isLoading: false,
}

RowCardItemAccordion.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  infected: PropTypes.number,
  healted: PropTypes.number,
  deaths: PropTypes.number,
  isLoading: PropTypes.bool,
}

export default RowCardItemAccordion
