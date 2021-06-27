import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';



const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );


  return (
    <div >

      <div className="wrapper">
        <h3>Psychometric Test Login</h3>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className='form' noValidate>

            <div className="form-vals">

              <div className='form-inputs'>
                <label className='form-label'>Full Name</label>
                <input
                  className='form-input'
                  type='text'
                  name='fullname'
                  placeholder='Enter your full name'
                  value={values.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && <label className="error">{errors.fullname}</label>}
              </div>



              <div className='form-inputs'>
                <label className='form-label' >Job Level</label>
                <select className="select" name="job_level" onChange={handleChange}>
                  <option value="Fresher" >Fresher</option>
                  <option value="Associate" >Associate</option>
                  <option value="Mid and Senior" >Mid and Senior</option>
                  <option value="Executive" >Executive</option>
                </select>
              </div>




              <div className='form-inputs'>
                <label className='form-label' >Education</label>
                <select className="select" name="education" onChange={handleChange}>
                  <option value="Undergraduate" >Under Graduate</option>
                  <option value="Postgraduate" >Post Graduate</option>
                  <option value="PhD" >Phd</option>

                </select>
              </div>

            </div>

            <button className='form-input-btn' type='submit'>
              Start test!
            </button>

          </form>
        </div>
      </div>
    </div>

  );
};

export default FormSignup;
