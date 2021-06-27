import { useState, useEffect } from 'react';


// all the methods have been defined here, react hooks have been used.


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    phone_number: '',
    city: '',
    gender: '',
    work_status: '',
    years_of_experience: '',
    job_title: '',
    industry: '',
    skills: '',
    education: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
