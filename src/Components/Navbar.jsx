import React from 'react';
import { NavLink } from 'react-router-dom';




function Navbar() {
	/* const showButton = () => {
		setHidden(false);
	}; */

	//const showButton = useContext(BtnContext);
	return (
    <>
  {/* Header Start */}
  
       
  <nav className="navbar navbar-expand-md navbar-expand-lg bg-inverse fixed-top scrolling-navbar" style={{height: '33.05 !important'}}>
    <div className="container">

  {/*   <NavLink
					to="/"
					exact
					className={({ isActive }) =>
						isActive ? 'active' : 'nav-link'
					}><img style={{width:'65px'}} src="../logo_chiaro.svg" alt="logo avvocato Giulio Ferronato"/>
    </NavLink> */}



      <NavLink
				
        to="/"
        exact
        className={({ isActive }) =>
          isActive ? 'active' : 'nav-link'
        }><img style={{width:'65px'}} src="../logo.svg" alt="logo avvocato Giulio Farronato, rappresentato dalle lettere G e F, di varie tonalità di azzurro, con la F stilizzata come una colonna"/> </NavLink>
           
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i className="lni-menu"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav  w-90 justify-content-end clearfix" style={{marginRight: '4%', marginLeft:'35%'}}>
          <li className="nav-item">
            <a className="nav-link" href="#hero-area">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-section">
              Chi sono
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              Come posso aiutarti
            </a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#contact-section">
              Contatti
            </a>
          </li>
          {/*
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              Materia 3
            </a>
          </li> */}
         
         
         </ul>
         <ul className="navbar-nav w-10 justify-content-end clearfix" style={{marginLeft: '5%'}}> 

         <li className="nav-item">
          
          <NavLink
          to="/"
          exact
          className={({ isActive }) =>
            isActive ? 'active' : 'nav-link'
          }> IT </NavLink>
            </li>
         <li className="nav-item">
        <NavLink
				to="/eng"
        exact
        className={({ isActive }) =>
          isActive ? 'active' : 'nav-link'
        }> ENG </NavLink>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
 



{/* Header End */}
</>
);
}

export default Navbar;