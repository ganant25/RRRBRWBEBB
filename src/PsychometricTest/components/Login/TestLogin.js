import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';




import './stylesheet.css'

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;


  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });


  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
}


function TestLogin(props) {

  let history = useHistory();

  const redirect = () => {
    history.push('/quiz')
  }


  const [fullName, setFullName] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [formErrors, setValues] = useState( {
    fullName: "",
      jobLevel: ""

  });




  // state = {
  //   fullName: "",
  //   jobLevel: null,
  //   formErrors: {
  //     fullName: "",
  //     jobLevel: ""
  //   }



  // handleChange = handleChange.bind(this);






  const handleSubmit = (e) => {



    e.preventDefault();

    if (formValid()) {

      console.log(`
    --SUBMITTING--
    fullName: ${fullName}
    jobLevel: ${jobLevel}
    `)
    }

    else {
      console.error(`FORM INVALID`)
    }

  }


  // const handleChange = (e) => {


  //   e.preventDefault()


  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;





  //   console.log(e);

  //   console.log(`
  //   name ${name}
  //   value ${value}`
  //   )
  //   let formErrors = { ...formErrors };

  //   switch (name) {
  //     case 'fullName':
  //       formErrors.fullName = (value.length) < 0
  //         ? "Please write your full name! "
  //         : "";
  //       break;
  //     case 'jobLevel':

  //       formErrors.jobLevel = value.length < 0
  //         ? "Please select a job level! "
  //         : "";
  //       break;

  //     default:
  //       break;

  //   }

  //   setValues({ formErrors, [name]: value, value: e.target.value }, () => console.log(state));

  // };




  // const { formErrors } = useState({ formErrors });

  return (
    <div className="wrapper">

      <div className="form-wrapper">
        <h1> Psychometric Test</h1>
        <form onSubmit={handleSubmit}  noValidate>

          <div className="full-name">
            <label htmlFor="fullName">User Full Name</label>
            <input
              type="text"
              className="enter-name"
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              noValidate
              // onChange={handleChange}
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}


            />
            {formErrors.fullName.length > 0 && (
              <span className="errorMessage">{formErrors.fullName}</span>
            )}
          </div>

          <div className="test-id">
            <label className='test-id-value' htmlFor="testID">Your test Id is 0000</label>
          </div>

          <div className="job-level">
            <label htmlFor="jobLevel">Job Level</label>
            <select
              name="jobLevel"
              className="job-level-select"
              id="jobLevel"
              placeholder="Select your Job Level"
              // onChange={handleChange}
              onChange={(e) => setJobLevel(e.target.value)}
            >


              <option value="fresher">FRESHER</option>
              <option value="associate">ASSOCIATE</option>
              <option value="midAndSenior">MID AND SENIOR</option>
              <option value="executive">EXECUTIVE</option>

            </select>


            {formErrors.jobLevel.length > 0 && (
              <span className="errorMessage">{formErrors.jobLevel}</span>
            )}



          </div>

          <div className="start-test">
            <button type="submit" onClick={redirect}>Start test!</button>

          </div>

        </form>

      </div>

    </div>
  );
}
export default TestLogin;
