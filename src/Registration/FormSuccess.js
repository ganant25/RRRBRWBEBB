import React from 'react';
import './Form.css';

//this is the page which the registration is redirected to. Once the API is integrated, this should be changed.


const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
     
    </div>
  );
};

export default FormSuccess;
