"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const React = require("react");
const PropTypes = require("prop-types");
const react_id_swiper_1 = require("react-id-swiper");
require("swiper/css/swiper.css");
const breakpointTablet = typeof window !== `undefined` ? window.matchMedia("(min-width:62em)") : null;
const params = {
    slidesPerView: "auto",
    spaceBetween: 8,
    preloadImages: true,
    shouldSwiperUpdate: true,
    autoHeight: false,
    pagination: false,
    "768": {
        slidesPerView: 2,
        spaceBetween: 8,
    },
};
const CardCarousel = ({ children }) => {
    const [isMobile, setIsMobile] = React.useState(breakpointTablet && !breakpointTablet.matches);
    React.useLayoutEffect(() => {
        function updateSize() {
            setIsMobile(breakpointTablet && !breakpointTablet.matches);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    const renderItem = (child, key) => (React.createElement("div", { className: "card-carousel__item", key: key }, child));
    const renderChildren = () => {
        return children.map(renderItem);
    };
    return (React.createElement("div", { className: "card-carousel" },
        React.createElement("div", { className: "card-carousel__wrap" }, isMobile ? React.createElement(react_id_swiper_1.default, Object.assign({}, params), renderChildren()) : renderChildren())));
};
CardCarousel.defaultProps = {
    children: [],
};
CardCarousel.propTypes = {
    children: PropTypes.array,
};
exports.default = CardCarousel;
//# sourceMappingURL=cardCarousel.js.map