import React from 'react';
import "./Header.css";
import {Link } from "react-router-dom";



function Header() {
      

    return (
        <nav className="header">
         <Link to="/">
         <img className="header__logo" src="https://scontent.flko1-1.fna.fbcdn.net/v/t1.6435-9/159010685_272121367692353_1198959771294857677_n.png?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=z-pPX64-3lgAX-n3OUJ&_nc_ht=scontent.flko1-1.fna&oh=a02d3398542dc7d9b2b21156a1885e58&oe=60BA5999" alt=""/> 
         </Link>
          <div className="header__search">
        <input type="text" className="header__searchInput"/>
        
        </div>

        <div className="header__nav">
            
          <Link to="/JobSeekerLogin"className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Jobseeker</span>
          <span className="header__optionLineTwo">Log in</span>
          </div>
          
          
          </Link>  
          <Link to="/EmployerLogin"className="header__link">
          <div className="header__option">
          <span className="header__optionLineOne">Employer</span>
          <span className="header__optionLineTwo">Log in</span>
          </div>
          
          
          </Link> 
          

                       

        </div>



            
        </nav>
    )
}

export default Header;






