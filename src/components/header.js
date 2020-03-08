import PropTypes from "prop-types"
import React from "react"


const Header = () => (
  <header className="header">
    <div className="header__wrap">
      <div className="header__item header__item--brand">
        <p><span role="img">🦠</span>{` `}covid<span>live</span></p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
