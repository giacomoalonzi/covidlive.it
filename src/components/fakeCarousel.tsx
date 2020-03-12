import * as React from "react"
import * as PropTypes from "prop-types"
type Props = {
  children: [] | {}
}
const FakeCarousel = ({ children }: Props) => (
  <div className="fake-carousel">
    <div className="fake-carousel__wrap">{children}</div>
  </div>
)

FakeCarousel.defaultProps = {
  children: [],
}

FakeCarousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default FakeCarousel
