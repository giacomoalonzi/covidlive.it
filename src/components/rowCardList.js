import React from 'react'
import RowCardItem from '@Components/rowCardItem'

type Props = {
  list: any
}

const RowCardList = ({list}: Props) => {
  return (
    <div className="row-card-list">
      <div className="row-card-list__wrap">
        <ul className="row-card-list__item">
          {
            list.map((item, key) => (
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
        </ul>
      </div>
    </div>
  )
}

export default RowCardList