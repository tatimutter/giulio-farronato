import React, {useState, useEffect} from 'react';

import Hero from '../Components/Hero';
import AboutOneCol from '../Components/AboutOneCol';
import Servizi from '../Components/Servizi';
import Contatti from '../Components/Contatti';



function Home(
) 

{
 
  const [show, setShow] = useState(Array(7).fill(false));

	

	function toggle(index) {
		const updatedShow = [...show];
		updatedShow[index] = !updatedShow[index];
		setShow(updatedShow);
		
	  }

    const offset = 200;
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


 <AboutOneCol
 

 who='Chi sono'
 descr1='Sono avvocato presso il foro di Vicenza ed esperto in diritti umani e protezione internazionale presso la Prefettura di Treviso.'
 descr2='I temi di cui mi occupo principalmente riguardano il diritto di famiglia, dell&#39;immigrazione e della tutela delle persone LGBT+.'
 descr3= 'Ho maturato esperienza presso le giurisdizioni ordinarie, le sezioni specializzate e le giurisdizioni amministrative. In passato sono stato assegnista di ricerca presso l&#39;università di Padova in materia di diritto internazionale.'
 descr4= 'Sono socio delle associazioni ASGI - Associazione Studi Giuridici Immigrazione e Rete Lenford-Avvocatura per i diritti LGBT+ attraverso cui ho conosciuto avvocati e avvocate con cui collaboro frequentemente e dal 2023 sono Osservatore per le condizioni di detenzione e membro del difensore civico per l&#39;associazione Antigone.'       
descr5= 'Vuoi saperne di più?'
 /*  mail='Scrivimi' */
 linkedIn='Visita il mio LinkedIn' 
 />

<Servizi 
help='Come posso aiutarti'
item1='Diritto di Famiglia'
content1='Mi occupo di tutte le pratiche più comuni del diritto di famiglia: separazioni, divorzi, affidamento e mantenimento dei figli, eredità, riconoscimento del figlio, procedure di interdizione, inabilitazione e nomina di amministratori di sostegno.'
content1a= 'Ho una particolare esperienza in procedimenti relativi a minori, donne vittime di violenze e abusi e persone in situazioni di svantaggio sociale.' 
content1b= 'In molti casi, mi sono dovuto occupare di pratiche di diritto di famiglia con risvolti relativi al diritto privato internazionale, materia con cui ho maturato esperienza.'
item2='Diritto dell&#39;Immigrazione'
content2='Ho una lunga esperienza in questo ambito che ho iniziato a seguire fin dagli studi universitari. Mi occupo sia dell&#39;ambito giudiziale che stra giudiziale.'
content2a= 'Alcuni degli ambiti di cui mi occupo sono rilascio, conversione e rinnovo dei permessi di soggiorno per privati ma anche per aziende (come ad esempio nei casi di lavoratori altamente specializzati, distacchi di azienda o c.d. flussi).'
content2b= 'Seguo pratiche per il riconoscimento della cittadinanza e la tutela di persone richiedenti protezione internazionale.' 
content2c='Sono consulente in tematiche di diritto dell&#39;immigrazione per alcune aziende così come per alcuni enti del terzo settore.'
item3='Minoranze e diritti LGBT+'
content3='Mi sono occupato spesso di casi che includono minoranze e le relative discriminazioni che devono affrontare.'
content3a='In particolare, per quanto riguarda le persone trans mi occupo di cause di affermazione di genere e rettifica del nome. '/>

<Contatti 


send='Invia messaggio'/> 
  
  <div style={{textAlign:'right', paddingRight:'1em'}}>
      {showButton && (
        <button style={{background: 'transparent',
          border: 'none' }} onClick={scrollToTop}>
         <svg
      fill="#46bbc6"
      viewBox="0 0 16 16"
      height="3em"
      width="3em"
      
    >
      <path d="M16 8A8 8 0 100 8a8 8 0 0016 0zm-7.5 3.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11.5z" />
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
  