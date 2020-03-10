import React from "react"
import PropTypes from "prop-types"
import Skeleton from "@Components/skeleton"
import type { Element } from "react"
type Props = {
  index?: number,
  name?: string,
  infected?: number,
  healed?: number,
  deaths?: number,
  isLoading?: boolean,
}

const RowCardItem = ({ index, name, infected, healed, deaths, isLoading }: Props): Element<'li'> => (
  <li className="row-card-item">
    <div className="row-card-item__wrap">
      {isLoading ? (
        <Skeleton fullHeight>
          <p>Loading</p>
        </Skeleton>
      ) : (
        <>
          <div className="row-card-item__item row-card-item__item--text">
            <p>
              <span>{index + 1}</span>
              {name}
            </p>
          </div>
          <div className="row-card-item__item row-card-item__item--stats">
            <div className="row-card-item-stat">
              <p>
                <span>😷</span>
                {infected}
              </p>
            </div>
            <div className="row-card-item-stat">
              <p>
                <span>😊</span>
                {healed}
              </p>
            </div>
            <div className="row-card-item-stat">
              <p>
                <span>😢</span>
                {deaths}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  </li>
)

RowCardItem.defaultProps = {
  index: 0,
  name: "",
  infected: 0,
  healted: 0,
  deaths: 0,
  isLoading: false,
}

RowCardItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  infected: PropTypes.number,
  healted: PropTypes.number,
  deaths: PropTypes.number,
  isLoading: PropTypes.bool,
}

export default RowCardItem
