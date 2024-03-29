import React from 'react';


function Hero({
    h2,
    h3,
    contact,
    altPic
    }
    ) 
{
	return (

<header className="header" style={{display:'block'}}>
  
{/* Hero Start */}
  <div id="hero-area" className="hero-area"  style={{paddingTop:'7em'}}>
  <div className="container" style={{position:'relative'}}>  


  {/* Under Construction */}
  {/* <div className='underConstruction' style={{zIndex:'50000'}}>
    <h3 style={{zIndex:'50000', display:'block', background:'lightBlue', color:'red', textAlign:'center'}}> Sito in costruzione</h3>
    </div>  */} 


    <div className="row align-items-center">
      <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <div className="contents">
    {/*     <img style={{width:'105px', display:'inline'}} src="../logo.svg" alt="logo avvocato Giulio Farronato, rappresentato dalle lettere G e F, di varie tonalità di azzurro, con la F stilizzata come una colonna"/> */}
          <h2 className="head-title">{h2}</h2>
          <h3 style={{fontStyle:'italic', fontSize:'1.9em'}}>{h3}</h3>
          {/* <p style={{fontSize:'1.3rem', paddingTop:'0.2em', paddingBottom:'0.5em'}}>{serv1} </p>
          <p style={{fontSize:'1.3rem', paddingBottom:'0.5em'}}>  {serv2}</p>
          <p style={{fontSize:'1.3rem', paddingBottom:'0.5em'}}>  {serv3}    </p> */}
          {/* <div className="header-button">
            <a href="#contactForm" className="btn btn-custom" >{contact}</a>
            
          </div> */}
        </div>
      </div>
      <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12" >
                  
       
      <div className="intro-img" >
        <img className='img-fluid'alt={altPic} 
        style={{width:'350px', height:'500px', position:'relative', marginBottom:'-410px'}}
        src="../avv-giulio-farronato.png"/>
        </div> 
        </div> 
    </div> 
  </div> 
</div>
{/* Hero End */}    
</header> 
);
    }
    
    export default Hero; 