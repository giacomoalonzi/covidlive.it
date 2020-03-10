// flow
import React from "react"
import PropTypes from "prop-types"
import type { Element } from "react"

type Props = {
  children: ?Object | ?Array<Object>,
  type: string,
  fullHeight?: boolean,
}
const Skeleton = ({ children, type, fullHeight }: Props): Element<"div"> => {
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
