import * as React from "react"
import * as PropTypes from "prop-types"
import RowCardItem from "@Components/rowCardItem"
import { range } from "lodash"
import { Accordion } from "react-accessible-accordion"

type Props = {
  list: any
  isLoading: boolean
  numberOfFakeCards: number
}

const RowCardList = ({ list, isLoading, numberOfFakeCards }: Props) => {
  const onAccordionChange = (uuid: [number]): void => {
    setSelectedAccordionId(uuid)
  }
  const [selectedAccordionId, setSelectedAccordionId] = React.useState<[number]>([0])
  const renderRowElements = (item: any, key: number): any => {
    return (
      <RowCardItem
        key={key}
        index={key}
        name={item.name}
        infected={item.infected}
        newInfected={item.newInfected}
        healed={item.healed}
        deaths={item.deaths}
        testPerformed={item.testPerformed}
        homeConfinement={item.homeConfinement}
        hospitalized={item.hospitalized}
        intensiveCare={item.intensiveCare}
        hospitalizedWithSymptoms={item.hospitalizedWithSymptoms}
        selectedAccordionId={selectedAccordionId}
      />
    )
  }

  const renderLoadingElement = (key: number) => {
    return <RowCardItem key={key} isLoading />
  }

  return (
    <div className="row-card-list">
      <div className="row-card-list__wrap">
        <div className="row-card-list__item">
          {isLoading ? (
            range(numberOfFakeCards).map(renderLoadingElement)
          ) : (
            <>
              <Accordion onChange={onAccordionChange}>{list.map(renderRowElements)}</Accordion>
            </>
          )}
        </div>
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
