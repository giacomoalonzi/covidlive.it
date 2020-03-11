"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
const rowCardItem_1 = require("@Components/rowCardItem");
const lodash_1 = require("lodash");
const RowCardList = ({ list, isLoading, numberOfFakeCards }) => {
    const renderRowElements = () => {
        return list.map((item, key) => (React.createElement(rowCardItem_1.default, { key: key, index: key, name: item.name, infected: item.infected, healed: item.healed, deaths: item.deaths })));
    };
    const renderLoadingElement = (key) => {
        return React.createElement(rowCardItem_1.default, { key: key, isLoading: true });
    };
    return (React.createElement("div", { className: "row-card-list" },
        React.createElement("div", { className: "row-card-list__wrap" },
            React.createElement("ul", { className: "row-card-list__item" }, isLoading ? lodash_1.range(numberOfFakeCards).map(renderLoadingElement) : renderRowElements()))));
};
RowCardList.defaultProps = {
    list: [],
    numberOfFakeCards: 10,
    isLoading: false,
};
RowCardList.propTypes = {
    list: PropTypes.array.isRequired,
    numberOfFakeCards: PropTypes.number,
    isLoading: PropTypes.bool,
};
exports.default = RowCardList;
//# sourceMappingURL=rowCardList.js.map