import React from 'react';


function Footer() {
	return (


<footer id="footer" className="footer-area" >
<div className="container footerTop" style={{ display: 'flex'  }} >
          <div className="row" style={{paddingTop:'1em'}}>
           
             
                  <div className="col-lg-2 col-md-2 col-sm-1"><img style={{width:'50px', }} src="../logo.svg" alt=""></img></div>
                  
                  <div id='footer-iva' className="col-lg-10 col-md-10 col-sm-11">
                   
                	<i>P.IVA 04438560247 <br />
                    PEC giulio.farronato@ordineavvocativicenza.it </i>
                  </div>
               
            
          </div>  
        </div> 
        <div className='footerBottom' id="copyright">
         
                 <div className="copyright-content">
                  <p>Creato da Tatiana Motterle - 2024</p>
                  {/* <p>Copyright © 2020 <a rel="nofollow" href="https://uideck.com">UIdeck</a> All Right Reserved</p> */}
                
          </div>
        </div>   
      </footer>
      );
    }
    
    export default Footer;