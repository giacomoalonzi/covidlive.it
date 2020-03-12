import * as React from "react"
import * as PropTypes from "prop-types"

type Props = {
  children: {} | []
  type: string
  fullHeight?: boolean
}
const Skeleton = ({ children, type, fullHeight }: Props) => {
  return (
    <div className={`skeleton ${type} ${fullHeight ? "has-full-height" : ""}`}>
      <div>{children}</div>
      <span>{children}</span>
    </div>
  )
}

Skeleton.defaultProps = {
  children: {},
  type: "is-black",
  fullHeight: false,
}

Skeleton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.string,
  fullHeight: PropTypes.bool,
}

export default Skeleton
