import React from 'react';


function Footer() {
	return (


<footer id="footer" className="footer-area section-padding" >
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-1 col-mb-2" style={{paddingTop:'30px'}}>
                <div className="widget">
                  <h3 className="footer-logo"><img style={{width:'105px'}} src="../logo.svg" alt=""></img></h3>
                  <div className="textwidget" style={{paddingLeft:'10px'}}>
                	<p>Informazioni legali e fiscali  Informazioni legali e fiscali  Informazioni legali e fiscali  </p>
                  </div>
                  <div className="social-icon">
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9 col-sm-9 col-xs-11" style={{textAlign:'right'}}>
                <h3 className="footer-titel">Dove mi trovi</h3>
                <ul className="address">
                  <li>
                    <a href="#"> via Roma, 22 <br/> Vicenza</a>
                  </li>
                  <li>
                    <a href="#"> +39 1234 567 890</a>
                  </li>
                  <li>
                    <a href="#"> giulio@mailing.it</a>
                  </li>
                </ul>
              </div>
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