import React from 'react';
import "./Header.css";
import {Link } from "react-router-dom";
import logo from './logo_shevalues.png'



function Header() {
      

    return (
        <nav className="header">
         <Link to="/">
         <img className="header__logo" src={logo} alt=""/> 
         </Link>
          <div className="header__search">
        <input type="text" className="header__searchInput"/>
        
        </div>

        <div className="header__nav">
            
          <Link to="/Login"className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Jobseeker</span>
          <span className="header__optionLineTwo">Log in</span>
          </div>
          
          
          </Link>  
          <Link to="/jobseeker-signUp"className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Jobseeker</span>
          <span className="header__optionLineTwo">Sign Up</span>
          </div>
          
          
          </Link> 

          <Link to="/registration"className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Registration</span>
          <span className="header__optionLineTwo">Form</span>
          </div>
          
          
          </Link> 

          
          

                       

        </div>



            
        </nav>
    )
}

export default Header;






