import React from 'react';


function Footer() {
	return (


<footer id="footer" className="footer-area" >
<div className="container footerTop" style={{ display: 'flex'  }} >
          <div className="row" style={{paddingTop:'-30em'}}>
           
             
                  <div className="col-lg-2 col-md-2 col-sm-1"><img style={{width:'50px', }} src="../logo.svg" alt="logo dell'avvocato Giulio Farronato, Vicenza. Monogramma GF in tonalità azzurre, con la F stilizzata come una colonna"></img></div>
                  
                  <div id='footer-iva' className="col-lg-10 col-md-10 col-sm-11">
                   <p>Studio legale Avv. Giulio Farronato <br />
                   Contrà San Tomaso 34, 36100 Vicenza
                   </p>
                	<i>P.IVA 04438560247 <br />
                  PEC: giulio.farronato@ordineavvocativicenza.it </i>
                  <br /><br />
                  <p><a href="../Informativa_privacy.pdf">Informativa sulla privacy</a>
</p>
                  </div>
               
            
          </div>  
        </div> 
        <div className='footerBottom' id="copyright">
         
                 <div className="copyright-content">
                  <p>Proudly made by human - Tatiana Motterle . 2024-2026</p>
                  {/* <p>Copyright © 2020 <a rel="nofollow" href="https://uideck.com">UIdeck</a> All Right Reserved</p> */}
                
          </div>
        </div>   
      </footer>
      );
    }
    
    export default Footer;