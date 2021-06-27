import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./HomePage/home";
import JobSeekerSignUp from "./JobSeekerSignUp/JobSeekerSignUp";
import Policy from "./JobSeekerSignUp/Form/policy";
import Login from "./Login";
import Form from "./Registration/Form"
import Header from "./Header";


// import TestLogin from "./PsychometricTest/components/Login/TestLogin";
// import PsychQuiz from "./PsychometricTest/components/Quiz/PsychQuiz";

import FormPsych from "./PsychometricTest/components/Login/Form/FormPsych"

function App() {
  return (
    <Router>
      <div >
        <Switch>

          

          <Route path="/jobseeker-login">
            <Login />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/jobseeker-signUp">
            <JobSeekerSignUp />
          </Route>
         
          <Route path="/registration">
            <Form />
          </Route>
         

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/quiz-login">
            <FormPsych />
          </Route>
          
          {/* <Route path="/pyschometricTest">
            <TestLogin />
          </Route>
          <Route path="/quiz">
            <PsychQuiz />
          </Route> */}

          <Route path="/policy">
            <Policy />
          </Route>


          <Route path="/header">
            <Header />
          </Route>

          <Route path="/">
          <Header />

          <JobSeekerSignUp />
          
              

           </Route>



        </Switch>
      </div>
    </Router>
  );
}

export default App;
