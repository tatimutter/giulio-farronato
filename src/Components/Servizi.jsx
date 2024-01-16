import React, {useState} from 'react'



const Servizi = ({
    help,
    item1,
    content1,
    content1a,
    content1b,
    content1c,
    item2,
    content2,
    content2a,
    content2b,
    content2c,
    item3,
    content3,
    content3a
}) => {

  const [show, setShow] = useState(Array(3).fill(false));

	

	function toggle(index) {
		const updatedShow = [...show];
		updatedShow[index] = !updatedShow[index];
		setShow(updatedShow);
		
	  }
  return (
    <div><section id="services" className="services-area section-padding">
    <div className="container">
      <div className="section-header text-center">
        <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">{help}</h2>
        <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
      </div>
      <div className="row">
        {/* <!-- Diritto di famiglia - Services item --> */}
        <div className="col-md-4 col-lg-4 col-xs-12">
          <div className="services-item wow fadeInRight" data-wow-delay="0.3s">
            <div className="icon">
              <i className="lni-cog"></i>
            </div>
            <div className="services-content">
            <h3 style={{fontSize:'16px', color:'#585b60'}}>{item1}</h3>
            <button className="btn btn-custom mt-3" onClick={() => toggle(1)}
								>
								  {show[1] ? 'Leggi di meno' : 'Leggi di più'}</button>
								  </div>
                  <div style={{paddingTop: '1.7em'}}>
                {show[1] && 
              <div>
              {content1}
              <br /> 
              {content1a}
              <br /> 
              {content1b}
              <br />
              {content1c}
              </div>

                }
            </div>
          </div>
        </div>
        {/* <!-- Diritto dell'immigrazione - Services item --> */}
        <div className="col-md-4 col-lg-4 col-xs-12">
          <div className="services-item wow fadeInRight" data-wow-delay="0.6s">
            <div className="icon">
              <i className="lni-stats-up"></i>
            </div>
            <div className="services-content">
              <h3 style={{fontSize:'16px', color:'#585b60'}}>{item2}</h3>
              <button className="btn btn-custom mt-3" onClick={() => toggle(2)}
								>
								  {show[2] ? 'Leggi di meno' : 'Leggi di più'}</button>
								  </div>
                  <div style={{paddingTop: '1.7em'}}>
                {show[2] && 
              
              <div>
              {content2}
              <br /> 
              {content2a}
              <br /> 
              {content2b}
              <br />
              {content2c}
              </div>
                }
             
            </div>
          </div>
        </div>
       {/*  <!-- Minoranze e diritti LGBT+ - Services item --> */}
        <div className="col-md-4 col-lg-4 col-xs-12"> 
          <div className="services-item wow fadeInRight" data-wow-delay="0.9s">
            <div className="icon">
              <i className="lni-users"></i>
            </div>
            <div className="services-content">
              <h3 style={{fontSize:'16px', color:'#585b60'}}>{item3}</h3>
              <button className="btn btn-custom mt-3" onClick={() => toggle(3)}
								>
								  {show[3] ? 'Leggi di meno' : 'Leggi di più'}</button>
								  </div>

								<div style={{paddingTop: '1.7em'}}>
                {show[3] && 
              
              <div>
              {content3}
              <br /> 
              {content3a}
              </div>
                }
              
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