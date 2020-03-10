import React from 'react' 

const FakeCarousel = ({children}: {children: any}) => (
  <div className="fake-carousel">
    <div className="fake-carousel__wrap">
      {children}
    </div>
  </div>
)
export default FakeCarousel