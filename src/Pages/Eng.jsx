import Hero from '../Components/Hero'
import AboutOneCol from '../Components/AboutOneCol'
import Servizi from '../Components/Servizi'
import Contatti from '../Components/Contatti'


function Eng() {
     
        return (
          <body>


    
          <Hero 
           h2=' Avvocato Giulio Farronato'
           h3='Diritto di famiglia e dell&#39;immigrazione' 
           contact='Contattami'
           altPic='Piano americano dell&#39;avvocato Giulio Farronato, sorridente. Indossa una camicia bianca'  />
        
        
         <AboutOneCol
         who='Chi sono'
         descr1='Sono avvocato presso il foro di Vicenza ed esperto in diritti umani e protezione internazionale presso la Prefettura di Treviso.'
         descr2='I temi di cui mi occupo principalmente riguardano il diritto di famiglia, dell&#39;immigrazione e della tutela delle persone LGBT+.'
         descr3= 'Ho maturato esperienza presso le giurisdizioni ordinarie, le sezioni specializzate e le giurisdizioni amministrative. In passato sono stato assegnista di ricerca presso l&#39;università di Padova in materia di diritto internazionale.'
         descr4= 'Sono socio delle associazioni ASGI - Associazione Studi Giuridici Immigrazione e Rete Lenford-Avvocatura per i diritti LGBT+ attraverso cui ho conosciuto avvocati e avvocate con cui collaboro frequentemente e dal 2023 sono Osservatore per le condizioni di detenzione e membro del difensore civico per l&#39;associazione Antigone.'       
        descr5= 'Vuoi saperne di più?'
         /*  mail='Scrivimi' */
         linkedIn='Visita il mio LinkedIn' /> 
        <Servizi 
        help='Come posso aiutarti'
        item1='Diritto di Famiglia'
        content1='Mi occupo di tutte le pratiche più comuni del diritto di famiglia: separazioni, divorzi, affidamento e mantenimento dei figli, eredità, riconoscimento del figlio, procedure di interdizione, inabilitazione e nomina di amministratori di sostegno. Ho una particolare esperienza in procedimenti relativi a minori, donne vittime di violenze e abusi e persone in situazioni di svantaggio sociale. 
        In molti casi, mi sono dovuto occupare di pratiche di diritto di famiglia con risvolti relativi al diritto privato internazionale, materia con cui ho maturato esperienza.'
        item2='Diritto dell&#39;Immigrazione'
        content2='Ho una lunga esperienza in questo ambito che ho iniziato a seguire fin dagli studi universitari. Mi occupo sia dell&#39;ambito giudiziale che stra giudiziale. Alcuni degli ambiti di cui mi occupo sono rilascio, conversione e rinnovo dei permessi di soggiorno per privati ma anche per aziende (come ad esempio nei casi di lavoratori altamente specializzati, distacchi di azienda o c.d. flussi). Seguo pratiche per il riconoscimento della cittadinanza e la tutela di persone richiedenti protezione internazionale. 
        Sono consulente in tematiche di diritto dell&#39;immigrazione per alcune aziende così come per alcuni enti del terzo settore.'
        item3='Minoranze e diritti LGBT+'
        content3='Mi sono occupato spesso di casi che includono minoranze e le relative discriminazioni che devono affrontare. In particolare, per quanto riguarda le persone trans mi occupo di cause di affermazione di genere e rettifica del nome. '/>
      <Contatti 
      formIntro='Spiegazione su riempimento formulario Spiegazione su riempimento formulario '
      send='Invia messaggio'/>    
         
          
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
      
      export default Eng
      