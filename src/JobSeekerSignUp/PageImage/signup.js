// import '../../App.css';
import './signup.css';
import React from 'react';
import signupImage from './signupImage.svg';
import Form from '../Form/Form'

function Sign() {
  return (
    <div className="signup">
      <section className="signupContainerCls">
        <div className="container">
          <div className="row">
            <div className="col-md-6 paddingNoneCls">
              <div className="signupLeftHolder bgColor">
                <span className="signupImageHolderCls">
                  <img src={signupImage} alt="signup image" className="signupImageCls"></img>
                </span>
                <div className="bottomTextHolder">
                  <h1 className="headerFont textWhite">Welcome to Shevalues! Women only Job Portal.</h1>
                  <p className="textWhite paraFont">We have taken all the steps to make you a Job ready candidate from day one, with your account, you can:</p>
                  <ul className="signupLeftJoListingCls paraFont">
                    <li className="textWhite">
                      Track your job applications
                    </li>
                    <li className="textWhite">
                      Communicate directly with the hiring team
                    </li>
                    <li className="textWhite">
                      Upskill, reskill, Newskill - Be Ready for the Future
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Sign;