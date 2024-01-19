import React from 'react';


function Footer() {
	return (


<footer id="footer" className="footer-area" >
<div className="container footerTop">
          <div className="row " style={{paddingTop:'5px',  }}>
           
             
                  <div className="footer-logo col-2"><img style={{width:'65px', display: 'flex', verticalAlign:'middle' }} src="../logo.svg" alt=""></img></div>
                  <div className="textwidget col-10" style={{paddingLeft:'10px', }}>
                   
                	{/* <i>Informazioni legali e fiscali  Informazioni legali e fiscali  Informazioni legali e fiscali  </i> */}
                  </div>
               
            
          </div>  
        </div> 
        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* <div className="copyright-content">
                  <p>Copyright © 2020 <a rel="nofollow" href="https://uideck.com">UIdeck</a> All Right Reserved</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>   
      </footer>
      );
    }
    
    export default Footer;