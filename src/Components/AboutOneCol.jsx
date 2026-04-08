import React from 'react'
import '../App.css'
import './css/about.css'

const AboutOneCol = ({
    who, descr1, descr2, descr3, descr4, descr5, mail, linkedIn
}) => {
  return (
    <div id="about-section" className="about-area section-padding">
        <div style={{textAlign:"center"}}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 info">
              <div className="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                <div>
                  <div className="site-heading">
                    <h2 className="section-title">{who}</h2>
                  </div>
                  <div className="content" style={{padding:'0 7em'}}>
                    <p style={{fontSize:"1.1em"}}> {descr1}
                    <br />
                    {descr2} 
                    <br/> <br/>
                    {descr3} 
                    <br/>  <br/>
                    {descr4} 
                    <br/> <br/>
                    </p>
                  </div>
                  <div className="row">
                    <div className="about-info col-lg-6 col-md-6 col-s-6 col-xs-12">
                      <p style={{fontWeight:"bold", fontSize:"larger"}}>{descr5}</p> 
                    </div>
                    <div className="about-linkedin col-lg-6 col-md-6 col-s-6 col-xs-12">
                      <a href="https://www.linkedin.com/in/giuliofarronato/?originalSubdomain=it" className="btn btn-custom mt-3">{linkedIn}</a>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutOneCol