// @flow
import * as React from 'react'
import * as PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <div className="header__wrap">
      <div className="header__item header__item--brand">
        <p>
          <Link to="/">
            <span role="img">🦠</span>
            {` `}covid<span>live</span>
            <small>La situazione in italia in tempo reale</small>
          </Link>
        </p>
      </div>
      <div className="header__item header__item--nav">
        <nav>
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
              <Link to="/link-utili">Link utili</Link>
              <a href="mailto:ciao@covidlive.it">Contatti</a>
            </li>
          </ul>
        </nav>
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
