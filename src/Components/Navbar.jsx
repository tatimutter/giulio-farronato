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
  
       
  <nav className="navbar navbar-expand-md navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
    <div className="container">

    <NavLink
				
					to="/"
					exact
					className={({ isActive }) =>
						isActive ? 'active' : 'nav-link'
					}><img style={{width:'65px'}} src="../logo.png" alt="logo"/> </NavLink>
      
           
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i className="lni-menu"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
          <li className="nav-item active">
            <a className="nav-link" href="#hero-area">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              Come posso aiutarti
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#team">
              Materia 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">
              Materia 3
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#about-section">
              Chi sono
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              ENG
            </a>
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