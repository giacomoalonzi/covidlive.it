import React from 'react'
import PropTypes from 'prop-types'
import type { Element } from 'react'
type MessageBoxType = 'success' | 'warning' | 'error'
type Props = {
  children: Object,
  type?: MessageBoxType,
  size?: string,
}
const MessageBox = ({ children, type, size }: Props): Element<'div'> => (
  <div className={`message-box ${type ? 'message-box--' + type : ''} ${size ? 'is-' + size : ''}`}>{children}</div>
)

MessageBox.defaultProps = {
  children: '',
  type: 'warning',
  size: '',
}

MessageBox.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  size: PropTypes.string,
}

export default MessageBox
