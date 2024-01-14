import React from 'react';


function Footer() {
	return (


<footer id="footer" className="footer-area section-padding" >
        <div className="container footerTop">
          <div className="row " style={{paddingTop:'10px'}}>
           
             
                  <div className="footer-logo col-2"><img style={{width:'105px'}} src="../logo.svg" alt=""></img></div>
                  <div className="textwidget col-10" style={{paddingLeft:'10px', verticalAlign:'middle'}}>
                    <br />
                	<p>Informazioni legali e fiscali  Informazioni legali e fiscali  Informazioni legali e fiscali  </p>
                  </div>
                 {/*  <div className="social-icon">
              </div> */}
              {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-mb-6" style={{textAlign:'right'}}>
              
                <ul className="address">
                  <li>
                  <a href="mailto:info@nicolanoro.com">
					<svg
					viewBox="0 0 16 16"
					fill="currentColor"
					height="1em"
					width="1em"
					aria-labelledby='icontitle icondesc'
					>
					<title id='icontitle'>icona mail</title>
					<path
						fill="currentColor"
						d="M8 0a8 8 0 100 16A8 8 0 008 0zM4 4h8c.143 0 .281.031.409.088L8 9.231 3.591 4.088A.982.982 0 014 4zm-1 7V5l.002-.063 2.932 3.421-2.9 2.9A.967.967 0 013 11zm9 1H4c-.088 0-.175-.012-.258-.034L6.588 9.12l1.413 1.648L9.414 9.12l2.846 2.846a.967.967 0 01-.258.034zm1-1c0 .088-.012.175-.034.258l-2.9-2.9 2.932-3.421L13 5v6z"
					/>
					</svg>
					<span className="visually-hidden">via Roma, 22 Vicenza</span>
					</a>
                    
                  </li>
                  <li>
                    +39 1234 567 890
                  </li>
                  <li>
                     giulio@mailing.it
                  </li>
                </ul>
              </div> */}
            
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