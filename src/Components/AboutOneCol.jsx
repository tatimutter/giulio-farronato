import React from 'react'

const AboutOneCol = (
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
) => {
  return (
    <div id="about-section" className="about-area section-padding" /* style={{height:"100vh"}} */>
        <div className="container" style={{textAlign:"center"}}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 info">
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
                    
                    <a href="#" className="btn btn-custom mt-3">{mail}</a>
                    <a href="#" className="btn btn-custom mt-3">{linkedIn}</a>
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