import * as React from "react"
import Layout from "@Components/layout"
import SEO from "@Components/seo"
const LinkUtili = () => {
  return (
    <Layout>
      <SEO title="Link Utili" />

      <div className="layout-wrap">
        <h2 className="u-margin-bottom-spacer-large">Per effettuare una donazione</h2>
        <div className="card text-section">
          <div className="card__wrap text__wrap">
            <div className="card__item text__item">
              <ul>
                <li>
                  <a
                    href="https://www.regione.lombardia.it/wps/portal/istituzionale/HP/DettaglioRedazionale/servizi-e-informazioni/cittadini/salute-e-prevenzione/coronavirus/coronavirus-raccolta-fondi"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Regione Lombardia
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gofundme.com/f/aiutiamo-ospedale-niguarda-covid19"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ospedale Niguarda di Milano
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ilfoglio.it/sezioni/714/donazioni-spallanzani"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ospedale Spallanzani di Roma
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ao.pr.it/la-squadra-piu-forte-di-parma-dal-parma-calcio-donazione-di-25-000-euro/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ospedale Maggiore di Parma
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gofundme.com/f/raccolta-fondi-per-il-cotugno-di-napolicovid19"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ospedale Cotugno di Napoli
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gofundme.com/f/aiutami-la-terapia-intensiva-santanna"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ospedale Sant’Anna di Como
                  </a>
                </li>
                <li>
                  <a href="mailto:ciao@covidlive.it" rel="noopener noreferrer" target="_blank">
                    <strong>Segnala altre possibilità di donazione</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className="u-margin-bottom-spacer-large u-margin-top-spacer-large">Link utili</h2>
        <div className="card text-section">
          <div className="card__wrap text__wrap">
            <div className="card__item text__item">
              <ul>
                <li>
                  <a
                    href="http://www.salute.gov.it/portale/nuovocoronavirus/dettaglioOpuscoliNuovoCoronavirus.jsp?lingua=italiano&id=443 "
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Raccomandazioni per la prevenzione
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Organizzazione Mondiale della Sanità
                  </a>
                </li>
                <li>
                  <a href="http://www.salute.gov.it/nuovocoronavirus" rel="noopener noreferrer" target="_blank">
                    Ministero della Salute
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.salute.gov.it/portale/nuovocoronavirus/archivioNormativaNuovoCoronavirus.jsp  "
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Norme, circolari e ordinanze
                  </a>
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
