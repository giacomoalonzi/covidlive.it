import * as React from "react"
import * as PropTypes from "prop-types"
import { useIntl, Link, changeLocale, IntlContextConsumer } from "gatsby-plugin-intl"
const Header = () => {
  const { formatMessage } = useIntl()
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__item header__item--brand">
          <p>
            <Link to="/">
              <span role="img" aria-labelledby="emoji">
                🦠
              </span>
              {` `}covid<span>live</span>
              <small>{formatMessage({ id: "globals.header.subTitle" })}</small>
            </Link>
          </p>
        </div>
        <div className="header__item header__item--nav">
          <nav>
            <ul>
              <li>
                {/* <Link to="/faq">FAQ</Link> */}
                <Link to="/link-utili">{formatMessage({ id: "globals.header.nav.usefulLinkLabel" })}</Link>
              </li>
              <li>
                <a href="mailto:ciao@covidlive.it">{formatMessage({ id: "globals.header.nav.contactLabel" })}</a>
              </li>
              <li>
                <IntlContextConsumer>
                  {({ language: currentLocale }: { language: string }) => (
                    <>
                      {currentLocale === "en" ? (
                        <a onClick={() => changeLocale("it")}>
                          <span role="img">🇮🇹</span>
                        </a>
                      ) : (
                        <a onClick={() => changeLocale("en")}>
                          <span role="img">🇺🇸</span>
                        </a>
                      )}
                    </>
                  )}
                </IntlContextConsumer>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
