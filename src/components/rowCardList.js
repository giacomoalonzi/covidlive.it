import React from "react"
import RowCardItem from "@Components/rowCardItem"
import { range } from "lodash"
import PropTypes from "prop-types"
import type { Element } from "react"

type Props = {
  list: any,
  isLoading: boolean,
  numberOfFakeCards: number,
}

const RowCardList = ({ list, isLoading, numberOfFakeCards }: Props): Element<'div'> => {
  const renderRowElements = (): Array<Function> => {
    return list.map((item, key) => (
      <RowCardItem
        key={key}
        index={key}
        name={item.name}
        infected={item.infected}
        healed={item.healed}
        deaths={item.deaths}
      />
    ))
  }

  const renderLoadingElement = (key: number): Function => {
    return <RowCardItem key={key} isLoading />
  }

  return (
    <div className="row-card-list">
      <div className="row-card-list__wrap">
        <ul className="row-card-list__item">
          {isLoading ? range(numberOfFakeCards).map(renderLoadingElement) : renderRowElements()}
        </ul>
      </div>
    </div>
  )
}

RowCardList.defaultProps = {
  list: [],
  numberOfFakeCards: 10,
  isLoading: false,
}

RowCardList.propTypes = {
  list: PropTypes.array.isRequired,
  numberOfFakeCards: PropTypes.number,
  isLoading: PropTypes.bool,
}
export default RowCardList
