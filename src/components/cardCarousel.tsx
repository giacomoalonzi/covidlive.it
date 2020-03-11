// @flow
import * as React from "react"
import * as PropTypes from "prop-types"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
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
type Props = {
  children: Array<Object>
}

const CardCarousel = ({ children }: Props) => {
  const [isMobile, setIsMobile] = React.useState(breakpointTablet && !breakpointTablet.matches)

  React.useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(breakpointTablet && !breakpointTablet.matches)
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const renderItem = (child: any, key: number) => (
    <div className="card-carousel__item" key={key}>
      {child}
    </div>
  )

  const renderChildren = () => {
    return children.map(renderItem)
  }

  return (
    <div className="card-carousel">
      <div className="card-carousel__wrap">
        {isMobile ? (
          // @ts-ignore
          <Swiper {...params}>{renderChildren()}</Swiper>
        ) : (
          renderChildren()
        )}
      </div>
    </div>
  )
}

CardCarousel.defaultProps = {
  children: [],
}

CardCarousel.propTypes = {
  children: PropTypes.array,
}

export default CardCarousel
