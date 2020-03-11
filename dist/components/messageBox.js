"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
const MessageBox = ({ children, type, size }) => (React.createElement("div", { className: `message-box ${type ? 'message-box--' + type : ''} ${size ? 'is-' + size : ''}` }, children));
MessageBox.defaultProps = {
    children: '',
    type: 'warning',
    size: '',
};
MessageBox.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    size: PropTypes.string,
};
exports.default = MessageBox;
//# sourceMappingURL=messageBox.js.map