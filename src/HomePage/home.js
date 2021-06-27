
import React from 'react';
import { useHistory } from 'react-router-dom';


import banner from './banner.jpg';
import logo from './Logo1.jpg';
import featuredlogo from './FeaturedLogo.png';
// import '../App.css';
import './home.css';
import { Navbar, Nav } from 'react-bootstrap';
import {Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import logo_shevalues from './logo_shevalues.png';
import '../Footer/stylesheet.css';



function Banner() {
  return (
    <div>
    <div className="App">
        <section className="menuHolderCls">
            <nav className="header">
            <Link to="/home">
            <img className="header__logo" src={logo_shevalues} width='123px' height='70px' alt=""/> 
            </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput" placeholder="Search.."  />
            </div>
            <div className="header__nav">
            <Link to="/jobseeker-login" className="header__link">
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
        </section>
      <section className="bannerSectionCls bgColorWhite">
        <div className="container-fluid">
          <div className="row rowContainerCls bgColorBanner">
            <div className="col-md-6">
              <h1 className="textColor text-left headerFont bannerHeaderText">She Values - Adding Values</h1>
              <p className="text-justify paraFont bannerParaCls">Using packages here is powered by Skypack, which makes packages from npm not only available on a CDN, but prepares them for native JavaScript ES6 import usage. All packages are different, so refer to their docs for how they work. If you're using React / ReactDOM, make sure to turn on Babel for the JSX processing.Using packages here is powered by Skypack, which makes packages from npm not only available on a CDN, but prepares them for native JavaScript ES6 import usage. All packages are different, so refer to their docs for how they work.</p>
              {/* <a href="#" onclick="console.log('The link was clicked.'); return false">Click me</a> */}
            </div>
            <div className="col-md-6">
              <span className="bannerContainerCls">
                <img src={banner} className="bannerImageCls" alt=""></img>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row rowContainerCls">
            <div className="col-md-12">
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto secondMenuCls">
                    <Nav.Link href="#ExamplePage" className="paraFont">JOINS</Nav.Link>
                    <Nav.Link href="#pricing" className="paraFont">SKILL GAP</Nav.Link>
                    <Nav.Link href="#pricing" className="paraFont">PARTNER</Nav.Link>
                    <Nav.Link href="#pricing" className="paraFont">LMS</Nav.Link>
                    <Nav.Link href="#pricing" className="paraFont">COMMUNITY</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </section>
      <section className="partnerSectionCls paddingSectionCls bgColorWhite">
        <div className="container-fluid">
          <div className="row rowContainerCls bgColorBanner">
            <div className="col-md-6">
              <div className="partnerContainerCls">
                <h1 className="textColor text-left headerFont bannerHeaderText">Diversity Partners</h1>
                <p className="text-justify paraFont bannerParaCls">A one stop solution to increase the diversity quotient of your organization. Marketplace to generate your diversity offerings as per your budget.</p>
                <p className="text-justify paraFont bannerParaCls">A bundle of solutions to make sure the diversity quotient of your organization is at all time best. Select the services from a varied catalogue to align with your organization’s diversity goals.</p>
                {/* <a href="#" onclick="console.log('The link was clicked.'); return false">Click me</a> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-3">
                <ul className="partnerLogoContainer">
                  <li>
                    <img src={logo} className="partnerLogoCls" alt="Logo of shevalues"></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="partnerLogoContainer">
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="partnerLogoContainer">
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="partnerLogoContainer">
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={logo} className="partnerLogoCls" alt=""></img>
                  </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featuredSectionCls paddingSectionCls">
      <div className="container-fluid">
          <div className="row rowContainerCls">
            <div className="col-md-6">
              <div className="partnerContainerCls">
                <h1 className="textColor text-left headerFont bannerHeaderText">Featured</h1>
                <p className="text-justify paraFont bannerParaCls">A one stop solution to increase the diversity quotient of your organization. Marketplace to generate your diversity offerings as per your budget.</p>
                <p className="text-justify paraFont bannerParaCls">A bundle of solutions to make sure the diversity quotient of your organization is at all time best. Select the services from a varied catalogue to align with your organization’s diversity goals.</p>
                <a href="home" className="readMoreBtnCls" onclick="console.log('The link was clicked.'); return false">Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col-md-4">
                <ul className="partnerLogoContainer featuredLogos">
                  <li>
                    <img src={featuredlogo} className="partnerLogoCls" alt="Logo of shevalues"></img>
                  </li>
                  <li>
                    <img src={featuredlogo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={featuredlogo} className="partnerLogoCls" alt=""></img>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="partnerLogoContainer featuredLogos">
                  <li>
                    <img src={featuredlogo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={featuredlogo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={featuredlogo} className="partnerLogoCls" alt=""></img>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="partnerLogoContainer featuredLogos">
                  <li>
                    <img src={featuredlogo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={featuredlogo} className="partnerLogoCls" alt=""></img>
                  </li>
                  <li>
                    <img src={featuredlogo} className="partnerLogoCls" alt=""></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
    
  );
}
export default Banner;