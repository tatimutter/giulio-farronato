import React from 'react'

const Servizi = ({
    help,
    item1,
    content1,
    item2,
    content2,
    item3,
    content3
}) => {
  return (
    <div><section id="services" className="services-area section-padding" style={{height:'100vh'}}>
    <div className="container">
      <div className="section-header text-center">
        <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">{help}</h2>
        <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
      </div>
      <div className="row">
        {/* <!-- Services item --> */}
        <div className="col-md-4 col-lg-4 col-xs-12">
          <div className="services-item wow fadeInRight" data-wow-delay="0.3s">
            <div className="icon">
              <i className="lni-cog"></i>
            </div>
            <div className="services-content">
              <h3><a href="#">{item1}</a></h3>
              <p>{content1}</p>
            </div>
          </div>
        </div>
        {/* <!-- Services item --> */}
        <div className="col-md-4 col-lg-4 col-xs-12">
          <div className="services-item wow fadeInRight" data-wow-delay="0.6s">
            <div className="icon">
              <i className="lni-stats-up"></i>
            </div>
            <div className="services-content">
              <h3><a href="#">{item2}</a></h3>
              <p>{content2}</p>
            </div>
          </div>
        </div>
       {/*  <!-- Services item --> */}
        <div className="col-md-4 col-lg-4 col-xs-12"> 
          <div className="services-item wow fadeInRight" data-wow-delay="0.9s">
            <div className="icon">
              <i className="lni-users"></i>
            </div>
            <div className="services-content">
              <h3><a href="#">{item3}</a></h3>
              <p>{content3}</p>
            </div>
          </div>
        </div>
       {/*  <!-- Services item --> */}
        {/* <div className="col-md-6 col-lg-4 col-xs-12">
          <div className="services-item wow fadeInRight" data-wow-delay="1.2s">
            <div className="icon">
              <i className="lni-layers"></i>
            </div>
            <div className="services-content">
              <h3><a href="#">Tutela della persone LGBT*</a></h3>
              <p>Percorsi di rettifica anagrafica e affermazione di genere per le persone trans</p>
            </div>
          </div>
        </div> */}
      
      </div>
    </div>
  </section></div>
  )
}

export default Servizi