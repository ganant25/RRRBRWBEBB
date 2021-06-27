import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { useState } from 'react';
import { Link } from "react-router-dom";
import policy from './policy';




const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  // When the button is clicked




  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>

        <h3>
          Job-Seeker Sign Up
        </h3>

        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='first_name'
            placeholder='Enter your first name'
            value={values.first_name}
            onChange={handleChange}
          />
          {errors.first_name && <label className="error">{errors.first_name}</label>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='last_name'
            placeholder='Enter your last name'
            value={values.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <label className="error" >{errors.last_name}</label>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='user_email'
            placeholder='Enter your email'
            value={values.user_email}
            onChange={handleChange}
          />
          {errors.user_email && <label className="error" >{errors.user_email}</label>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
            type='text'
            name='phone_number'
            placeholder='Enter your phone number'
            value={values.phone_number}
            onChange={handleChange}
          />
          {errors.phone_number && <label className="error" >{errors.phone_number}</label>}
        </div>


        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <label className="error" >{errors.password}</label>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <label className="error" >{errors.password2}</label>}
        </div>

        <div className="form-inputs terms">

          <label className='form-label' htmlFor="agree"><input type="checkbox" id="agree" onChange={checkboxHandler} />  I agree to <Link to ='/policy'>terms and conditions</Link></label>
        </div>
        {/* <Link to="/registration"> */}
          <button disabled={!agree} className='form-input-btn' type='submit'>
            Sign up
          </button>
        {/* </Link> */}

        <span className='form-input-login'>
          Already have an account? Login <Link to= "/jobseeker-login">here</Link>
        </span>

      </form>
    </div>
  );
};

export default FormSignup;
