function Home() {
 
    return (
      < >
  
    <body>
      
      <header className="header" style={{display:'block'}}>
  
  {/* Hero Start */}
   <div id="hero-area" className="hero-area" >
    <div className="container">      
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
          <div className="contents">
            <h2 className="head-title">Avvocato Giulio Farronato</h2>
            <h3>Diritto di famiglia e dell&#39;immigrazione</h3>
            <p style={{fontSize:'large'}}>Famiglie 
              <br/>
            LGBTQI+ 
            <br/>
            Cittadinanza
            <br/>
            Migranti
            </p>
            <div className="header-button">
              <a href="#contactForm" className="btn btn-custom" >Contattami</a>
              
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12" >
                    
         
        <div className="intro-img" >
          <img className='img-fluid'alt="Piano americano dell'avvocato Giulio Farronato, a braccia conserte" 
          style={{width:'350px', height:'500px', position:'relative', marginBottom:'-200px'}}
          src="../foto-test-svg.svg"/>
          </div> 
          </div> 
      </div> 
    </div> 
  </div>
{/* Hero End */}    
</header>  

{/* About Section Start */}    
<div className="about-area section-padding" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12 info">
              <div className="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                <div>
                  <div className="site-heading">
                    
                    <h2 className="section-title">Chi sono</h2>
                  </div>
                  <div className="content">
                    <p>
                    Sono avvocato presso il foro di Vicenza ed esercito principalmente in diritto di famiglia e diritto dell&#39;immigrazione. Tra le altre aree di cui mi occupo in particolare c&#39;è il diritto antiscriminatorio e la tutela della persone LGBT*, tra cui i percorsi di rettifica anagrafica e affermazione di genere per le persone trans.
                    Sul tema ho scritto un podcast “Queer to Queer”, dove parlo di minoranze nel mondo LGBT+.
  
                    Attualmente, sono assegnista di ricerca presso l&#39;università di Padova in diritto internazionale per il progetto UNI4Justice.
  
                    In passato ho studiato al Master 2 <q>Cooperazione internazionale e diritto delle ONG</q> presso Paris Cité Sorbonne e a Fribourg in Svizzera dove mi sono dedicato al diritto dell&#39;immigrazione e delle nuove tecnologie a cui è seguito un corso di perfezionamento in Coding e Legal Tech dell&#39;Università degli studi di Milano con una tesi sulla Blockchain applicata al diritto d&#39;autore.
                    Contribuisco attivamente come socio all&#39;associazione Antigone in qualità membro del team del difensore civico per la tutela delle persone ristrette, in Rete Lenford per la tutela della persone LGBT+ e in CAIT e ASGI per quanto riguarda le persone migranti. 
                    </p>
                    <a href="#" className="btn btn-custom mt-3">Scarica il mio CV</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
              <img className="img-fluid" src="../LinkedIn-test.png" alt="" style={{marginTop:'60px', marginBottom:'50px'}}></img>
              <a href="#" className="btn btn-custom mt-3">Visita il mio LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
  {/* About Section End */}
  
  {/* Services Section */}
      <section id="services" className="services-area section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Come posso aiutarti</h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
          </div>
          <div className="row">
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-6 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon">
                  <i className="lni-cog"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">Diritto di famiglia</a></h3>
                  <p>Testo a caso</p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-6 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="0.6s">
                <div className="icon">
                  <i className="lni-stats-up"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">Diritto dell&#39;immigrazione</a></h3>
                  <p>Testo a caso</p>
                </div>
              </div>
            </div>
           {/*  <!-- Services item --> */}
            {/* <div className="col-md-6 col-lg-4 col-xs-12"> 
              <div className="services-item wow fadeInRight" data-wow-delay="0.9s">
                <div className="icon">
                  <i className="lni-users"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">Diritto antidiscriminatorio</a></h3>
                  <p>Testo a caso</p>
                </div>
              </div>
            </div>*/}
           {/*  <!-- Services item --> */}
            {/* <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="1.2s">
                <div className="icon">
                  <i className="lni-layers"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">Tutela della persone LGBT*</a></h3>
                  <p>Percorsi di rettifica anagrafica e affermazione di genere per le persone trans</p>
                </div>
              </div>
            </div> */}
           {/*  <!-- Services item --> */}
           {/*  <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="1.5s">
                <div className="icon">
                  <i className="lni-mobile"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">App Development</a></h3>
                  <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                </div>
              </div>
            </div> */}
           {/*  <!-- Services item --> */}
            {/* <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="1.8s">
                <div className="icon">
                  <i className="lni-rocket"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">User Friendly interface</a></h3>
                  <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
     
  
  {/* Contact Section Start */}
  <section id="contact" className="section-padding contact-area">    
        <div className="container">
          <div className="section-header text-center">          
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Contattami</h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
          </div>
          <div className="row contact-form-area wow fadeInUp" data-wow-delay="0.3s">   
            <div className="col-lg-7 col-md-12 col-sm-12">
              
              <div className="contact-block">
              <div style={{marginBottom:'20px'}}> <i>Spiegazione su riempimento formulario Spiegazione su riempimento formulario Spiegazione su riempimento formulario Spiegazione su riempimento formulario </i> </div>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                  <div className="form-group">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Nome" required data-error="Inserisci nome" />
                    <div className="help-block with-errors"></div>
                      </div>                                 
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" placeholder="Email" id="email" className="form-control" name="email" required data-error="Inserisci email" />
                        <div className="help-block with-errors"></div>
                      </div> 
                    </div>
                     <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" placeholder="Oggetto" id="msg_subject" className="form-control" required data-error="Inserisci oggetto del messaggio" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group"> 
                        <textarea className="form-control" id="message" placeholder="Messaggio" rows="7" data-error="Scrivi il tuo messaggio" required></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="submit-button text-left">
                        <button className="btn btn-custom" id="form-submit" type="submit">Invia messaggio</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div> 
                        <div className="clearfix"></div> 
                      </div>
                    </div>
                  </div>            
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="map">
                {/* <object style={{border:'0', height: '280px', width: '100%'}}data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34015.943594576835!2d-106.43242624069771!3d31.677719472407432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d90e99d597b%3A0x6cd3eb9a9fcd23f1!2sCourtyard+by+Marriott+Ciudad+Juarez!5e0!3m2!1sen!2sbd!4v1533791187584"></object> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.5683967163674!2d11.539421906843105!3d45.544821664851064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f316332c9bc8d%3A0x5c833604f287c2f8!2sViale%20Roma%2C%2022%2C%2036100%20Vicenza%20VI%2C%20Italy!5e0!3m2!1sen!2sus!4v1695225466006!5m2!1sen!2sus" width="600" height="450" style={{border:'0'}} allowfullscreen loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div> 
      </section>
  {/* Contact Section End */}
  
  
      {/*  Top Arrow  */}
      <a href="#" className="back-to-top">
        <i className="lni-arrow-up"></i>
      </a>
      
     JS per top arrow
     {/*  var offset = 200;
        var duration = 500;
        $(window).scroll(function() {
          if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
          } else {
            $('.back-to-top').fadeOut(400);
          }
        });
  
        $('.back-to-top').on('click',function(event) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: 0
          }, 600);
          return false;
        }); */}


      
       
  </body>
      </>
    )
  }
  
  export default Home
  