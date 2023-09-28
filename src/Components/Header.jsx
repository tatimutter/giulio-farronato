function Header() {
	return (


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
    );
}
export default Header;