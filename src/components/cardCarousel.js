import React, { useLayoutEffect, useState } from "react"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import PropTypes from "prop-types"
const breakpointTablet = typeof window !== `undefined` ? window.matchMedia("(min-width:62em)") : null

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
}

const CardCarousel = ({ children }: { children: any }) => {
  const [isMobile, setIsMobile] = useState(breakpointTablet && !breakpointTablet.matches)

  useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(breakpointTablet && !breakpointTablet.matches)
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const renderChildren = (): Array<Function> => {
    const arrayOfChildren = React.Children.toArray(children.props.children)
    return arrayOfChildren.map((child, key) => (
      <div className="card-carousel__item" key={key}>
        {child}
      </div>
    ))
  }
  return (
    <div className="card-carousel">
      <div className="card-carousel__wrap">
        {isMobile ? <Swiper {...params}>{renderChildren()}</Swiper> : renderChildren()}
      </div>
    </div>
  )
}

CardCarousel.defaultProps = {
  children: {},
}

CardCarousel.propTypes = {
  children: PropTypes.object,
}

export default CardCarousel
