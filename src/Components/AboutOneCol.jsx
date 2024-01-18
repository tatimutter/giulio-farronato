import React from 'react'

import '../App.css'

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
    <div id="about-section" className="about-area section-padding">
        <div  style={{textAlign:"center"}}>
          
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 info">
              <div className="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                <div>
                  <div className="site-heading">
                    
                    <h2 className="section-title">{who}</h2>
                  </div>
                  <div className="content" style={{textAlign:'center'}}>
                    <p style={{fontSize:"larger"}}> {descr1} 
                    {/* Pallino */}
                    <div className="services-item wow fadeInRight" data-wow-delay="0.3s" style={{padding:'0'}}>
                    <div className="icon" style={{height:'1em', width:'1em'}}>
                    <i className="lni-cog" ></i>
                    </div>
                    </div>
                    {descr2} 
                    <br/>
                    {/* Pallino */}
                    <div className="services-item wow fadeInRight" data-wow-delay="0.3s" style={{padding:'0'}}>
                    <div className="icon" style={{height:'1em', width:'1em'}}>
                    <i className="lni-cog" ></i>
                    </div>
                    </div>
                    {descr3} 
                    <br/> 
                    {/* Pallino */}
                    <div className="services-item wow fadeInRight" data-wow-delay="0.3s" style={{padding:'0'}}>
                    <div className="icon" style={{height:'1em', width:'1em'}}>
                    <i className="lni-cog" ></i>
                    </div>
                    </div>
                    {descr4} 
                    <br/> <br/>
                    {/* <span style={{fontWeight:"bold"}}>{descr5}</span>  */}
                    </p>
                    </div>
                    
                  <div className="row" >
                  <div className="col-lg-6 col-md-6 col-xs-6" style={{textAlign:'right', display:'inline'}}>
                  <p style={{fontWeight:"bold", fontSize:"larger"}}>{descr5}</p> 
                   {/*  <a href="#" className="btn btn-custom mt-3">{mail}</a> */}
                   {/* <img className="img-fluid" src="../LinkedIn-test.png" alt="" style={{width:'50vh'}}></img> */}
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-6" style={{textAlign:'left', }}>
                    <a href="https://www.linkedin.com/in/giuliofarronato/?originalSubdomain=it" className="btn btn-custom mt-3" style={{}}>{linkedIn}</a>
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