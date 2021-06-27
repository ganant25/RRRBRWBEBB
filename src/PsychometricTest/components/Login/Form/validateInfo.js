export default function validateInfo(values) {

  let errors = {};
  var pattern = new RegExp(/^[0-9\b]+$/);



  if (!values.fullname.trim()) {
    errors.fullname = 'Name required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }



  return errors;
}
