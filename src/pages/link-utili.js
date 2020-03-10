import React from "react"
import Layout from "@Components/layout"
import SEO from "@Components/seo"
const LinkUtili = () => {
  return (
    <Layout>
      <SEO title="Link Utili" />

      <div className="layout-wrap">
        <h2 className="u-margin-bottom-spacer-large">Link utili</h2>
        <div className="card text-section">
          <div className="card__wrap text__wrap">
            <div className="card__item text__item">
              <ul>
              <li>
                <a href="http://www.salute.gov.it/portale/nuovocoronavirus/dettaglioOpuscoliNuovoCoronavirus.jsp?lingua=italiano&id=443 " rel="noopener noreferrer" target="_blank">Raccomandazioni per la prevenzione</a>
              </li>
              <li>
                <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/" rel="noopener noreferrer" target="_blank">Organizzazione Mondiale della Sanità</a>
              </li>
              <li>
                <a href="http://www.salute.gov.it/nuovocoronavirus" rel="noopener noreferrer" target="_blank">Ministero della Salute</a>
              </li>
              <li>
                <a href="http://www.trovanorme.salute.gov.it/norme/dettaglioAtto?id=73594" rel="noopener noreferrer" target="_blank">DPCM 8 marzo 2020</a>
              </li>
              <li>
                <a href="http://www.salute.gov.it/portale/nuovocoronavirus/archivioNormativaNuovoCoronavirus.jsp  " rel="noopener noreferrer" target="_blank">Norme e ordinanze</a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LinkUtili
