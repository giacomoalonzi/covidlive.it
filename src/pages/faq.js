// @flow
import React from "react"
import Layout from "@Components/layout"
import SEO from "@Components/seo"
const Faq = () => {
  return (
    <Layout>
      <SEO title="Domande Frequenti" />

      <div className="layout-wrap">
        <h2 className="u-margin-bottom-spacer-large">Domande Frequenti</h2>

        <div className="card">
          <div className="card__wrap">
            <div className="card__item">
              <div className="faq">
                <div className="faq__wrap">
                  <div className="faq__item">
                    <h3>Quali sono le misure previste in Italia? </h3>
                    <p>
                      L'8 marzo il Presidente del Consiglio dei Ministri ha
                      emanato un nuovo Decreto che sostituisce i DPCM del 1 e 4
                      marzo 2020 e stabilisce nuove misure di contenimento
                      dell'epidemia. In particolare il DPCM reca misure urgenti
                      di contenimento del contagio nella regione Lombardia e
                      nelle province di Modena, Parma, Piacenza, Reggio Emilia,
                      Rimini, Pesaro e Urbino, Alessandria, Asti, Novara,
                      Verbano-Cusio-Ossola, Vercelli, Padova, Treviso, Venezia. 
                      Il provvedimento prevede anche misure a livello nazionale
                      e norme di prevenzione generali.
                    </p>
                  </div>

                  <div className="faq__item">
                    <h3>
                      Che cosa devono fare i cittadini della Lombardia e delle
                      province più colpite in Italia?
                    </h3>
                    <p>
                      Ai cittadini della regione Lombardia e delle province di
                      Modena, Parma, Piacenza, Reggio nell’Emilia, Rimini,
                      Pesaro e Urbino, Alessandria, Asti, Novara,
                      Verbano-Cusio-Ossola, Vercelli, Padova, Treviso e Venezia
                      si chiede soprattutto di:
                    </p>
                    <ul>
                      <li>
                        evitare gli spostamenti in entrata e in uscita da questi
                        territori, salvo quelli per esigenze lavorative o motivi
                        di salute
                      </li>
                      <li>
                        ai soggetti con febbre superiore a 37,5 gradi è
                        fortemente raccomandato di rimanere a casa e limitare al
                        massimo i contatti sociali e di contattare il proprio
                        medico curante
                      </li>
                      <li>
                        divieto assoluto di uscire dalla propria abitazione per
                        chi è sottoposto alla quarantena o è risultato positivo
                        al virus.
                      </li>
                    </ul>
                  </div>

                  <div className="faq__item">
                    <h3>
                      Cosa si raccomanda a tutti i cittadini italiani e
                      soprattutto alle persone anziane?
                    </h3>
                    <p>A tutti i cittadini sull'intero territorio nazionale:</p>
                    <ul>
                      <li>
                        è fatta espressa raccomandazione a tutte le persone
                        anziane o affette da patologie croniche o con multi
                        morbilità ovvero con stati di immunodepressione
                        congenita o acquisita, di evitare di uscire dalla
                        propria abitazione o dimora fuori dai casi di stretta
                        necessità e di evitare comunque luoghi affollati nei
                        quali non sia possibile mantenere la distanza di
                        sicurezza interpersonale di almeno un metro;
                      </li>
                      <li>
                        si raccomanda di limitare, ove possibile, gli
                        spostamenti delle persone fisiche ai casi strettamente
                        necessari;
                      </li>
                      <li>
                        ai soggetti con sintomatologia da infezione respiratoria
                        e febbre (maggiore di 37,5° C) è fortemente raccomandato
                        di rimanere presso il proprio domicilio e di limitare al
                        massimo i contatti sociali, contattando il proprio
                        medico curante;
                      </li>
                      <li>
                        chiunque, a partire dal quattordicesimo giorno
                        antecedente la data di pubblicazione del DPCM 8 marzo,
                        abbia fatto ingresso in Italia dopo aver soggiornato in
                        zone a rischio epidemiologico, come identificate
                        dall'Organizzazione mondiale della sanità, deve
                        comunicare tale circostanza al Dipartimento di
                        prevenzione dell'azienda sanitaria competente per
                        territorio nonché al proprio medico di medicina generale
                        ovvero al pediatra di libera scelta
                      </li>
                      <li>
                        le persone per le quali la Dipartimento di prevenzione
                        della Asl accerta la necessità di avviare la
                        sorveglianza sanitaria e l’isolamento fiduciario devono:
                        <ul>
                          <li>
                            mantenere lo stato di isolamento per
                            quattordici giorni dall'ultima esposizione
                          </li>
                          <li>divieto di contatti sociali</li>
                          <li>divieto di spostamenti e via</li>
                          <li>
                            obbligo di rimanere raggiungibile per le attività di
                            sorveglianza.
                          </li>
                        </ul>
                      </li>
                      <li>
                        in caso di comparsa di sintomi la persona in
                        sorveglianza deve:
                        <ul>
                          <li>
                            avvertire immediatamente il medico di medicina
                            generale o il pediatra di libera scelta e
                            l'operatore di Sanità Pubblica;
                          </li>
                          <li>
                            indossare la mascherina chirurgica fornita
                            all'avvio della sorveglianza sanitaria
                          </li>
                          <li>
                            e allontanarsi dagli altri conviventi; rimanere
                            nella propria stanza con la porta chiusa garantendo
                            un'adeguata ventilazione naturale, in attesa del
                            trasferimento in ospedale, ove necessario.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Rispetta inoltre queste semplici raccomandazioni per la
                        prevenzione.
                      </li>
                    </ul>
                  </div>
                  <div className="faq__item">
                    <h3>Che cos'è un Coronavirus?</h3>
                    <p>
                      I Coronavirus sono una vasta famiglia di virus noti per
                      causare malattie che vanno dal comune raffreddore a
                      malattie più gravi come la Sindrome respiratoria
                      mediorientale (MERS) e la Sindrome respiratoria acuta
                      grave (SARS). Sono virus RNA a filamento positivo, con
                      aspetto simile a una corona al microscopio elettronico. La
                      sottofamiglia Orthocoronavirinae della
                      famiglia Coronaviridae è classificata in quattro generi di
                      coronavirus (CoV): Alpha-, Beta-, Delta--
                      e Gammacoronavirus. Il genere del betacoronavirus è
                      ulteriormente separato in cinque sottogeneri (tra i quali
                      il Sarbecovirus). I Coronavirus sono stati identificati a
                      metà degli anni '60 e sono noti per infettare l'uomo ed
                      alcuni animali (inclusi uccelli e mammiferi). Le cellule
                      bersaglio primarie sono quelle epiteliali del tratto
                      respiratorio e gastrointestinale. Ad oggi, sette
                      Coronavirus hanno dimostrato di essere in grado di
                      infettare l'uomo:
                    </p>
                    <ul>
                      <li>
                        Coronavirus umani comuni: HCoV-OC43 e HCoV-HKU1
                        (Betacoronavirus) e HCoV-229E e HCoV-NL63
                        (Alphacoronavirus); essi possono causare raffreddori
                        comuni ma anche gravi infezioni del tratto respiratorio
                        inferiore
                      </li>
                      <li>
                        altri Coronavirus umani (Betacoronavirus): SARS-CoV,
                        MERS-CoV e 2019-nCoV (ora denominato SARS-CoV-2).
                      </li>
                    </ul>
                  </div>
                  <div className="faq__item">
                    <h3>Cosa è la COVID-19?</h3>
                    <p>
                      La malattia provocata dal nuovo Coronavirus ha un
                      nome: “COVID-19” (dove "CO" sta per corona, "VI" per
                      virus, "D" per disease e "19" indica l'anno in cui si è
                      manifestata). Lo ha annunciato, l’11 febbraio 2020, nel
                      briefing con la stampa durante una pausa del Forum
                      straordinario dedicato al virus, il Direttore generale
                      dell’Oms <strong>Tedros Adhanom Ghebreyesus</strong>.
                    </p>
                  </div>
                  <div className="faq__item">
                    <h3>Come si diffonde il nuovo Coronavirus?</h3>
                    <p>
                      Il nuovo coronavirus è un virus respiratorio che si
                      diffonde principalmente attraverso il contatto con le
                      goccioline del respiro delle persone infette, ad esempio
                      quando starnutiscono o tossiscono o si soffiano il naso. È
                      importante perciò che le persone ammalate applichino
                      misure di igiene quali starnutire o tossire in un
                      fazzoletto o con il gomito flesso e gettare i fazzoletti
                      utilizzati in un cestino chiuso immediatamente dopo l'uso
                      e lavare le mani frequentemente con acqua e sapone o
                      usando soluzioni alcoliche.
                    </p>
                  </div>
                  <div className="faq__item">
                    <h3>
                      Quali sono le regole per la disinfezione / lavaggio delle
                      mani?
                    </h3>
                    <p>
                      Il lavaggio e la disinfezione delle mani sono la chiave
                      per prevenire l'infezione. Dovresti lavarti le mani spesso
                      e accuratamente con acqua e sapone per almeno 60 secondi.
                      Se non sono disponibili acqua e sapone, è possibile
                      utilizzare anche un disinfettante per mani a base di
                      alcool (concentrazione di alcool di almeno il 60%).
                    </p>
                  </div>
                  <div className="faq__item">
                    <h3>Cosa posso fare per proteggermi?</h3>
                    <p>
                      Mantieniti informato sulla diffusione dell’epidemia,
                      disponibile sul sito dell'OMS e sul sito del ministero e
                      adotta le seguenti misure di protezione personale:
                    </p>
                    <ul>
                      <li>
                        lavati spesso le mani con acqua e sapone o con soluzioni
                        a base di alcol per eliminare il virus dalle tue mani
                      </li>
                      <li>
                        mantieni una certa distanza – almeno due metri– dalle
                        altre persone quando tossiscono o starnutiscono o se
                        hanno la febbre, perché il virus è contenuto nelle
                        goccioline di saliva e può essere trasmesso col respiro
                        a distanza ravvicinata
                      </li>
                      <li>
                        evita di toccarti occhi, naso e bocca con le mani se
                        presenti febbre, tosse o difficoltà respiratorie   
                      </li>
                    </ul>
                    <p>
                      Se presenti febbre, tosse o difficoltà respiratorie e
                      sospetti di essere stato in stretto contatto con una
                      persona affetta da malattia respiratoria Covid-19:
                    </p>
                    <ul>
                      <li>
                        rimani in casa, non recarti al pronto soccorso o presso
                        gli studi medici ma chiama al telefono il tuo medico di
                        famiglia, il tuo pediatra o la guardia medica. Oppure
                        chiama il numero verde regionale. Utilizza i numeri di
                        emergenza 112/118 soltanto se strettamente necessario. 
                      </li>
                    </ul>
                    <p>
                      Ricorda che per tutte le persone che rientrano dai viaggi
                      dalle zone a rischio negli ultimi 14 giorni c'è obbligo di
                      isolamento domiciliare fiduciario e di comunicazione al
                      Dipartimento di prevenzione della propria ASL.  Vedi anche
                      la sezione Viaggi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Faq
