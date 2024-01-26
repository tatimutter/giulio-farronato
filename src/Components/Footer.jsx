import React from 'react';


function Footer() {
	return (


<footer id="footer" className="footer-area" >
<div className="container footerTop" style={{ display: 'flex'  }} >
          <div className="row " style={{paddingTop:'10px'}}>
           
             
                  <div className="col-lg-2 col-md-2 col-sm-2"><img style={{width:'50px', }} src="../logo.svg" alt=""></img></div>
                  
                  <div className="col-lg-10 col-md-10 col-sm-10" style={{ fontSize:'0.9em', textAlign:'center', paddingTop:'0.3em', /* marginLeft:'-6em' */}}>
                   
                	<i>P.IVA 04438560247 -
                    PEC giulio.farronato@ordineavvocativicenza.it </i>
                  </div>
               
            
          </div>  
        </div> 
        <div id="copyright">
         
                 <div className="copyright-content">
                  <p>Creato da Tatiana Motterle - 2024</p>
                  {/* <p>Copyright © 2020 <a rel="nofollow" href="https://uideck.com">UIdeck</a> All Right Reserved</p> */}
                
          </div>
        </div>   
      </footer>
      );
    }
    
    export default Footer;