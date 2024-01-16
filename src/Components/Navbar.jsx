import React from 'react';
import { NavLink } from 'react-router-dom';




function Navbar() {
	
	
	return (
    <>
  {/* Header Start */}
  
       
  <nav className="navbar navbar-expand-md navbar-expand-lg bg-inverse fixed-top scrolling-navbar" >
    <div className="container">

  
      <NavLink
				
        to="/"
        exact='true'
        className={({ isActive }) =>
          isActive ? 'active' : 'nav-link'
        }><img style={{width:'65px'}} src="../logo.svg" alt="logo avvocato Giulio Farronato, rappresentato dalle lettere G e F, di varie tonalità di azzurro, con la F stilizzata come una colonna"/> </NavLink>
           
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" >
      <path
        fill="currentColor"
        d="M12 5a1 1 0 100 2h8a1 1 0 100-2h-8zM7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM3 18a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z"
      />
    </svg>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse" style={{backgroundColor: '#fff', width:'100%', padding: '20px 100px'}}>
        <ul className="navbar-nav  w-90 justify-content-end clearfix" style={{marginRight: '4%', marginLeft:'35%'}}>
          <li className="nav-item">
            <a className="nav-link" href="#hero-area" >
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
         
         
         
         </ul>
         <ul className="navbar-nav w-10 justify-content-end clearfix" style={{marginLeft: '5%'}}> 

         <li className="nav-item">
          
          <NavLink
          to="/"
          exact='true'
          className={({ isActive }) =>
            isActive ? 'active' : 'nav-link'
          }> IT </NavLink>
            </li>
         <li className="nav-item">
        <NavLink
				to="/eng"
        exact='true'
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