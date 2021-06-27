export default function validateInfo(values) {

  let errors = {};
  var pattern = new RegExp(/^[0-9\b]+$/);

  // all the info entered by the user is validated and then only the form is accepted.

  //the name is a mandatory field, so it length should be greater than 0.

  if (!values.username.trim()) {
    errors.username = 'Name required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }


  //the email field is also mandatory and the syntax is checked.


  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }


  //the mobile number field is also mandatory and the syntax is checked.

  if (!values.phone_number) {
    errors.phone_number = 'Phone number required!';
  } else if (!pattern.test(values.phone_number)) {
    errors.phone_number = 'Please enter only numbers!';
  } else if ((values.phone_number.length != 10)) {
    errors.phone_number = 'Please enter a valid phone!';
  }


  //the city is a mandatory field, so it length should be greater than 0.

  if (!values.city.trim()) {
    errors.city = 'City required';
  }


  //the number of years of experience field is also mandatory and the syntax is checked.

  if (!values.years_of_experience.trim()) {
    errors.years_of_experience = 'Years of experience required';
  } else if (!pattern.test(values.years_of_experience)) {
    errors.years_of_experience = 'Please enter only numbers!';
  }

  //the skills is a mandatory field, so it length should be greater than 0.

  if (!values.skills.trim()) {
    errors.skills = 'Skills required';
  }


  //the education is a mandatory field, so it length should be greater than 0.

  if (!values.education.trim()) {
    errors.education = 'Education required';
  }

  return errors;
}
