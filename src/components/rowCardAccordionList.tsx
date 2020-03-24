import * as React from "react"
import * as PropTypes from "prop-types"
import RowCardAccordionItem from "@Components/rowCardAccordionItem"
import { range } from "lodash"
import { Accordion } from "react-accessible-accordion"

type Props = {
  list: any
  isLoading: boolean
  numberOfFakeCards: number
  enableAccordion: boolean
}

const RowCardAccordionList = ({ list, isLoading, numberOfFakeCards, enableAccordion }: Props) => {
  const onAccordionChange = (uuid: [string]): void => {
    setSelectedAccordionId(uuid)
  }
  const [selectedAccordionId, setSelectedAccordionId] = React.useState<[string]>([""])
  const renderRowElements = (item: any, key: number): any => {
    return (
      <RowCardAccordionItem
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
        enableAccordion={enableAccordion}
      />
    )
  }

  const renderLoadingElement = (key: number) => {
    return <RowCardAccordionItem key={key} isLoading />
  }

  return (
    <div className={`row-card-list`}>
      <div className="row-card-list__wrap">
        <div className="row-card-list__item">
          <Accordion allowZeroExpanded onChange={onAccordionChange}>
            {isLoading ? range(numberOfFakeCards).map(renderLoadingElement) : list.map(renderRowElements)}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

RowCardAccordionList.defaultProps = {
  list: [],
  numberOfFakeCards: 10,
  isLoading: false,
  enableAccordion: true,
}

RowCardAccordionList.propTypes = {
  list: PropTypes.array.isRequired,
  numberOfFakeCards: PropTypes.number,
  isLoading: PropTypes.bool,
  enableAccordion: PropTypes.bool,
}
export default RowCardAccordionList
