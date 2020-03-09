import React from 'react'
import PropTypes from "prop-types"

type Props = {
  index: number,
  name: string,
  infected: number,
  healed: number,
  deaths: number
}

const RowCardItem = ({index, name, infected, healed, deaths}: Props) => (
  <li className="row-card-item">
    <div className="row-card-item__wrap">
      <div className="row-card-item__item row-card-item__item--text">
        <p>
          <span>{index + 1}</span>
          {name}
        </p>
      </div>
      <div className="row-card-item__item row-card-item__item--stats">
        <div className="row-card-item-stat">
          <p><span>😷</span>{infected}</p>
        </div>
        <div className="row-card-item-stat">
          <p><span>😊</span>{healed}</p>
        </div>
        <div className="row-card-item-stat">
          <p><span>😢</span>{deaths}</p>
        </div>
      </div>
    </div>
  </li>
)

RowCardItem.defaultProps = {
  index: 0,
  name: '',
  infected: 0,
  healted: 0,
  deaths: 0,
}

RowCardItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  infected: PropTypes.number,
  healted: PropTypes.number,
  deaths: PropTypes.number,
}

export default RowCardItem;