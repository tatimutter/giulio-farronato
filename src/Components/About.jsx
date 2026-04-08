import React from "react";
import './css/about.css';
function About (
    {
        who,
        descr1,
        descr2,
        descr3,
        descr4,
        descr5,
        mail,
        linkedIn
    }
)  {

  
return (
  <div id="about-section" className="about-area section-padding">
    <div className="container">
      <div className="row align-items-center">
        
        <div className="col-lg-6 col-md-12 col-xs-12 info">
          <div className="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
            
            <h2 className="section-title">{who}</h2>
            
            <div className="about-content">
              <p className="about-lead">{descr1}</p>
              <p className="about-body">{descr2}</p>
              <p className="about-body">{descr3}</p>
              <p className="about-body">{descr4}</p>
              <p className="about-highlight">{descr5}</p>

              <div className="about-actions">
                <a href="mailto:info@giuliofarronato.com" className="btn btn-custom">{mail}</a>
              </div>
            </div>

          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
          <div className="about-image-wrapper">
            <img className="img-fluid about-photo" src="../LinkedIn-test.png" alt="Giulio Farronato" />
            <a href="https://www.linkedin.com/in/giuliofarronato/" className="btn btn-custom mt-3">{linkedIn}</a>
          </div>
        </div>

      </div>
    </div>
  </div>
)

    
   /* return (
    <div id="about-section" className="about-area section-padding" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12 info">
              <div className="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                <div>
                  <div className="site-heading">
                    
                    <h2 className="section-title">{who}</h2>
                  </div>
                  <div className="content">
                    <p style={{fontSize:"larger"}}> {descr1} 
                    </p>
                    {descr2} 
                    <br/>
                    {descr3} 
                    <br/> <br/>
                    {descr4} 
                    <br/><br/>
                    <p style={{fontWeight:"bold", fontSize:"medium"}}>{descr5}</p> 
                    
                    <a href="mailto:info@nicolanoro.com" className="btn btn-custom mt-3">{mail}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
              <img className="img-fluid" src="../LinkedIn-test.png" alt="" style={{marginTop:'60px', marginBottom:'50px'}}></img>
              <a href="https://www.linkedin.com/in/giuliofarronato/?originalSubdomain=it" className="btn btn-custom mt-3">{linkedIn}</a>
            </div>
          </div>
        </div>
      </div>
  )  */
}

export default About