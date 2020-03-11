import * as React from "react"
import * as PropTypes from "prop-types"
type MessageBoxType = "success" | "warning" | "error"

type Props = {
  children: Object
  type?: MessageBoxType
  size?: string
}
const MessageBox = ({ children, type, size }: Props) => (
  <div className={`message-box ${type ? "message-box--" + type : ""} ${size ? "is-" + size : ""}`}>{children}</div>
)

MessageBox.defaultProps = {
  children: "",
  type: "warning",
  size: "",
}

MessageBox.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  size: PropTypes.string,
}

export default MessageBox
