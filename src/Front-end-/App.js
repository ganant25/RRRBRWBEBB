import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import JobSeekerLogin from "./JobSeekerLogin";
import EmployerLogin from "./EmployerLogin";


function App() {
  return (
    <Router>
      <div className="app">
         <Switch>
           
           <Route path="/JobSeekerLogin">
             <JobSeekerLogin />
           </Route>
           <Route path="/EmployerLogin">
             <EmployerLogin />
           </Route>
           <Route path="/">
             <Header />
             <Home/>
             <h1>Home Page</h1>
           </Route>
         </Switch>
    </div>
    </Router>
  );
}

export default App;
