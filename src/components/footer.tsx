import * as React from "react"
import { useIntl } from "gatsby-plugin-intl"
const Footer = () => {
  const { formatMessage } = useIntl()
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__item">
          <p>
            COVIDLIVE.IT © {new Date().getFullYear()} — {formatMessage({ id: "globals.footer.licenseCtaLabel" })}{" "}
            <a rel="noopener noreferrer" target="_blank" href="https://creativecommons.org/licenses/by/4.0/deed.en">
              CC-BY-4.0
            </a>{" "}
            —{" "}
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/pcm-dpc/COVID-19/blob/master/LICENSE">
              {formatMessage({ id: "globals.footer.showLicenseLabel" })}
            </a>{" "}
            — {formatMessage({ id: "globals.footer.datasetLabel" })}{" "}
            <a rel="noopener noreferrer" target="_blank" href="http://www.protezionecivile.gov.it/home">
              {formatMessage({ id: "globals.footer.datasetCtaLabel" })}
            </a>{" "}
            <br />
            Developed with{" "}
            <span role="img" aria-labelledby="img">
              ❤️
            </span>{" "}
            by{" "}
            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/realbardaxx">
              @giacomo.alonzi
            </a>{" "}
            —{" "}
            <a rel="noopener noreferrer" target="_blank" href="https://www.iubenda.com/privacy-policy/72729546">
              Privacy policy
            </a>{" "}
            —{" "}
            <a href="https://github.com/giacomoalonzi/covidlive.it" rel="noopener noreferrer" target="_blank">
              {formatMessage({ id: "globals.footer.contributingCtaLabel" })}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
