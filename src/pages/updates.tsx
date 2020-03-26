import * as React from "react"
import Layout from "@Components/layout"
import SEO from "@Components/seo"
const Faq = () => {
  return (
    <Layout>
      <SEO title="Aggiornamenti" path="/updates/" />

      <div className="layout-wrap">
        <div className="updates">
          <h2 className="u-margin-bottom-spacer-large">Aggiornamento dati</h2>

          <div className="card">
            <div className="card__wrap">
              <div className="card__item">
                <p>
                  <strong>18/03/2020</strong> — Dati Regione Campania non pervenuti.
                </p>
                <p>
                  <strong>18/03/2020</strong> — Dati Provincia di Parma non pervenuti.
                </p>
                <p>
                  <strong>17/03/2020</strong> — Dati Provincia di Rimini non aggiornati.
                </p>
                <p>
                  <strong>16/03/2020</strong> — Dati P.A. Trento e Puglia non pervenuti.
                </p>
                <p>
                  <strong>11/03/2020</strong> — Dati Regione Abruzzo non pervenuti.
                </p>
                <p>
                  <strong>10/03/2020</strong> — Dati Regione Lombardia parziali.
                </p>
                <p>
                  <strong>07/03/2020</strong> — Dati Brescia +300 esiti positivi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Faq
