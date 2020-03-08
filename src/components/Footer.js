import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrap">
      <div className="footer__item">
        <p>
          COVIDLIVE.IT © { new Date().getFullYear() } — Licenza: <a rel="nofollow" href="https://creativecommons.org/licenses/by/4.0/deed.en">CC-BY-4.0</a> - <a rel="nofollow" href="https://github.com/pcm-dpc/COVID-19/blob/master/LICENSE">Visualizza licenza</a> · Editore/Autore del dataset: <a href="">Dipartimento della Protezione Civile</a> <br />Developed with <span role="img">❤️</span> by <a rel="nofollow" href="https://twitter.com/realbardaxx">@giacomo.alonzi</a></p>
      </div>
    </div>
  </footer>
)

export default Footer