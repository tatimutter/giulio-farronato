import React, { useRef, useState, useEffect } from 'react';
import { Form, redirect, useActionData, useNavigate} from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contatti (
    {
    formIntro,
    send
    }
) 

{

    const data = useActionData();

	const form = useRef();
	
const navigate = useNavigate();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('giuliofarronato', 'xxx', form.current, 'xxx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

	  e.target.reset()

	  
	  navigate('/reqsuccess');
    };

  return (
    <div> <section id="contact-section" className="section-padding contact-area" style={{height:'100vh'}}>    
    <div   className="container">
      <div className="section-header text-center">          
        <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Contattami</h2>
        <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
      </div>
      <div className="row contact-form-area wow fadeInUp" data-wow-delay="0.3s">   
        <div className="col-lg-7 col-md-12 col-sm-12">

          <div  className="contact-block">
          <div style={{marginBottom:'20px'}}> <i>{formIntro} </i> </div>
            <Form id="contactForm" ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6">
              <div className="form-group">
              <input type="text" className="form-control" id="name" name="name" placeholder="Nome" required data-error="Inserisci nome" />
                <div className="help-block with-errors"></div>
                  </div>                                 
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" placeholder="Email" id="email" className="form-control" name="email" required data-error="Inserisci email" />
                    <div className="help-block with-errors"></div>
                  </div> 
                </div>
                 <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" placeholder="Oggetto" id="msg_subject" className="form-control" required data-error="Inserisci oggetto del messaggio" />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group"> 
                    <textarea className="form-control" id="message" placeholder="Messaggio" rows="7" data-error="Scrivi il tuo messaggio" required></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="submit-button text-left">
                    <button className="btn btn-custom" id="form-submit" type="submit" values="Send">{send}</button>

                    {data && data.error && <p>{data.error}</p>}
                    <div id="msgSubmit" className="h3 text-center hidden"></div> 
                    <div className="clearfix"></div> 
                  </div>
                </div>
              </div>            
            </Form>
          </div>
        </div>
        {/* Sezione contatti */}
        <div className="col-lg-5 col-md-12 col-xs-12" style={{textAlign:'right'}}>
            <ul>
            
            {/* Indirizzo */}   

                <li className="address">
                <svg
                viewBox="0 -3 24 24"
                fill="currentColor"
                height="1.8em"
                width="1.8em"
                >
                <path d="M12 3L2 12h3v8h14v-8h3L12 3m0 4.7c2.1 0 3.8 1.7 3.8 3.8 0 3-3.8 6.5-3.8 6.5s-3.8-3.5-3.8-6.5c0-2.1 1.7-3.8 3.8-3.8m0 2.3a1.5 1.5 0 00-1.5 1.5A1.5 1.5 0 0012 13a1.5 1.5 0 001.5-1.5A1.5 1.5 0 0012 10z" />
                </svg>
                  <span className="visually-hidden" style={{paddingLeft:'10px'}}>via Roma, 22 Vicenza</span>
                 </li>
                 <br />
                {/* Telefono */}
                <li>
                <svg
                viewBox="0 -3 24 24"
                fill="currentColor"
                height="1.8em"
                width="1.8em"
                >
                <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48a1.01 1.01 0 001.41.01c.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1C8.85 5.25 10.39 5 12 5c1.59 0 3.14.25 4.59.72v3.1c0 .39.23.74.56.9.98.49 1.85 1.12 2.67 1.85.18.18.43.28.68.28.3 0 .55-.11.73-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.28-.12-.52-.3-.7A16.965 16.965 0 0012 3M9 7v3s-6 5-6 8v4h18v-4c0-3-6-8-6-8V7h-2v2h-2V7H9m3 5a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 1.5A2.5 2.5 0 009.5 16a2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5z" />
                </svg>
                <span style={{paddingLeft:'10px'}}>+39 1234 567 890</span>
                </li>
                <br />

                {/* Mail */}
                <li>
                <a href="mailto:giulio@mail.com">
                <svg
                viewBox="0 -3 24 24"
                fill="currentColor"
                height="1.8em"
                width="1.8em"
                >
                <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
					<span className="visually-hidden" style={{paddingLeft:'10px'}}>Scrivimi</span>
					</a>
                </li>
                <br/>

                {/* LinkedIn */}
                <li>
                <a href="https://www.linkedin.com/in/giuliofarronato/?originalSubdomain=it">
                <svg
                viewBox="0 -3 24 24"
                fill="currentColor"
                height="1.8em"
                width="1.8em"
                >
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
					<span className="visually-hidden" style={{paddingLeft:'10px'}}>LinkedIn</span>
					</a>
                </li>
              </ul>
            {/* </div> */}
            {/* Sezione contatti end*/}

            {/* Mappa */}
          <div className="map" style={{paddingTop:'20px'}}>
            {/* <object style={{border:'0', height: '280px', width: '100%'}}data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34015.943594576835!2d-106.43242624069771!3d31.677719472407432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d90e99d597b%3A0x6cd3eb9a9fcd23f1!2sCourtyard+by+Marriott+Ciudad+Juarez!5e0!3m2!1sen!2sbd!4v1533791187584"></object> */}
            <iframe title='indirizzo in Google Maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.5683967163674!2d11.539421906843105!3d45.544821664851064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f316332c9bc8d%3A0x5c833604f287c2f8!2sViale%20Roma%2C%2022%2C%2036100%20Vicenza%20VI%2C%20Italy!5e0!3m2!1sen!2sus!4v1695225466006!5m2!1sen!2sus"  style={{border:'0', width:'100%', height:'40vh'}} allowFullScreen loading="lazy"></iframe>
          </div>
          {/* Mappa end */}
        </div>
      </div>
    </div> 
  </section></div>
  );
}

export default Contatti