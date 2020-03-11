// @Flow
import React from 'react' 
import PropTypes from "prop-types"
import type { Element, Node } from "react"
type Props = {
  children: Array<Node>
}
const FakeCarousel = ({children}: Props): Element<'div'> => (
  <div className="fake-carousel">
    <div className="fake-carousel__wrap">
      {children}
    </div>
  </div>
)

FakeCarousel.defaultProps = {
  children: [],
}

FakeCarousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default FakeCarousel