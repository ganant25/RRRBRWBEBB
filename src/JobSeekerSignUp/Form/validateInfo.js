export default function validateInfo(values) {
  let errors = {};
  var pattern = new RegExp(/^[0-9\b]+$/);


  
//each of the mandatory fields are checked and the syntax of fields like email, phone number and password is checked.


  if (!values.first_name.trim()) {
    errors.first_name = 'First Name required!';
  }

  if (!values.last_name.trim()) {
    errors.last_name = 'Last Name required!';
  }


  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.user_email) {
    errors.user_email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.user_email)) {
    errors.user_email = 'Email address is invalid!';
  }


if(!values.phone_number)  {
  errors.phone_number = 'Phone number required!';
} else if(!pattern.test(values.phone_number)){
errors.phone_number = 'Please enter only numbers!';
} else if((values.phone_number.length!=10)){
  errors.phone_number = 'Please enter a valid phone!';
}



  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }



  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}
