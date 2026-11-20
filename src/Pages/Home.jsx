import React, {useState, useEffect} from 'react';

import Hero from '../Components/Hero';
import About from '../Components/About';
import Servizi from '../Components/Servizi';
import Contatti from '../Components/Contatti';



function Home(
) 

{
     const offset = 50;
    //const duration = 500;
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > offset) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }); 

    };

    
    return (
      <body>

  
    
  <Hero 
   h2=' Avvocato Giulio Farronato'
   h3='Diritto di famiglia e dell&#39;immigrazione' 
   contact='Contattami'
   altPic='Piano americano dell&#39;avvocato Giulio Farronato, sorridente. Indossa una camicia bianca' />


 <About
 

 who='Chi sono'
 descr1='Sono avvocato presso il foro di Vicenza e mi occupo principalmente di temi che riguardano il diritto di famiglia, dell&#39;immigrazione, della tutela delle persone LGBT+ e del diritto penale.'
 descr2='Ho maturato esperienza presso le giurisdizioni ordinarie, le sezioni specializzate e le giurisdizioni amministrative.'
 descr3= 'In passato sono stato esperto in diritti umani e protezione internazionale presso la Prefettura di Treviso, assegnista e borsista di ricerca presso l&#39;università di Padova in materia di diritto internazionale.'
 descr4= 'Attualmente sono consulente con alcuni centri Antidiscriminazione in Veneto in materia civile e tutela contro le discriminazioni per orientamento sessuale e identità di genere e per Veneto Lavoro in materia di diritto dell&#39;immigrazione.' 
 descr5='Sono socio delle associazioni ASGI - Associazione Studi Giuridici Immigrazione con la quale seguo progetti legati alle prassi illegittime della pubblica amministrazione e Rete Lenford-Avvocatura per i diritti LGBT+ con cui seguo in particolare il tema della tutela delle persone trans e delle persone non binarie.'      
descr6= 'Vuoi saperne di più?'
 
 linkedIn='Visita il mio LinkedIn' 
 />

<Servizi 
help='Come posso aiutarti'
item1='Diritto di Famiglia'
content1='Mi occupo di tutte le pratiche più comuni del diritto di famiglia: separazioni, divorzi, affidamento e mantenimento dei figli, eredità, riconoscimento del figlio, procedure di interdizione, inabilitazione e nomina di amministratori di sostegno.'
content1a= 'Ho una particolare esperienza in procedimenti relativi a minori, donne vittime di violenze e abusi e persone vulnerabili.' 
content1b= 'In molti casi, mi sono dovuto occupare di pratiche di diritto di famiglia con risvolti relativi al diritto privato internazionale, materia con cui ho maturato esperienza'
item2='Diritto dell&#39;Immigrazione'
content2='Ho maturato una lunga esperienza in questo ambito e mi occupo sia dell&#39;ambito giudiziale che stragiudiziale.'
content2a= 'Affronto la materia sia in un&#39;ottica di tutela dei diritti umani delle persone migranti che in supporto a privati ed aziende per questioni più amministrative (come ad esempio supporto per lavoratori altamente specializzati, distacchi di azienda o c.d. flussi).'
content2b= 'Seguo pratiche per il riconoscimento della cittadinanza e la tutela di persone richiedenti protezione internazionale.' 
content2c='Sono consulente in tematiche di diritto dell&#39;immigrazione per alcune aziende del territorio e per alcuni enti del terzo settore.'
item3='Minoranze e diritti LGBT+'
content3='Mi occupo della tutela di minoranze delle relative discriminazioni che devono affrontare.'
content3a='In particolare, per quanto riguarda le persone trans mi occupo di cause di affermazione di genere e rettifica del nome.'/>

<Contatti 


send='Invia messaggio'/> 
  
  <div style={{textAlign:'right', paddingRight:'1em'}}>
      {showButton && (
        <button
  type="button"
  className={`scroll-top ${showButton ? 'visible' : ''}`}
  onClick={scrollToTop}
  aria-label="Torna su"
>
  <svg viewBox="0 0 16 16" width="22" height="22" fill="currentColor">
    <path d="M8 3.293l5.354 5.353a.5.5 0 01-.708.708L8 4.707 3.354 9.354a.5.5 0 01-.708-.708L8 3.293z" />
  </svg>
</button>

      )}
      </div>
  
      {/*  Top Arrow  */}
      {/* <a href="#" className="back-to-top">
        <i className="lni-arrow-up"></i>
      </a> */}

      
 {/*   JS per top arrow */}
{/* const offset = 200;
  const duration = 500;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > offset) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    
  }, []); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }); 
  
 */}     
 {/*  <div>
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>

      )}
      </div> */}
  


      
       
  </body>
      
    )
  }
  
  export default Home
  