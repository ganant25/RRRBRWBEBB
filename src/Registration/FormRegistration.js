import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import SimpleReactFileUpload from './Upload';




const industry_options = [

  {
    option_label: "Adtech"
  },
  {
    option_label: "Advanced manufacturing"
  },
  {
    option_label: "Agtech"
  },
  {
    option_label: "Artificial intelligence and ML"
  },
  {
    option_label: "Audiotech"
  },
  {
    option_label: "Agtech"
  },
  {
    option_label: "Augmented reality (AR)"
  },
  {
    option_label: "Autonomous cars"
  },
  {
    option_label: "B2B payments"
  },
  {
    option_label: "Beauty"
  },
  {
    option_label: "AgtBig Dataech"
  },
  {
    option_label: "Carsharing"
  },
  {
    option_label: "Cleantech"
  },
  {
    option_label: "Climate tech"
  },
  {
    option_label: "Cloudtech and DevOps"
  },
  {
    option_label: "Construction technology"
  },

  {
    option_label: "Blockchain"
  },
  {
    option_label: "Circular Economy"
  },
  {
    option_label: "Cybersecurity"
  },
  {
    option_label: "Digital health"
  },
  {
    option_label: "Ecommerce"
  },
  {
    option_label: "Edtech"
  },
  {
    option_label: "Ephemeral content"
  },
  {
    option_label: "eSports"
  },
  {
    option_label: "Femtech"
  },
  {
    option_label: "Fintech"
  },
  {
    option_label: "Foodtech"
  },
  {
    option_label: "Gaming"
  },
  {
    option_label: "Gig economy"
  },
  {
    option_label: "Healthtech"
  },
  {
    option_label: "HRtech"
  },
  {
    option_label: "Impact investing"
  },
  {
    option_label: "Industrials"
  },
  {
    option_label: "Infrastructure"
  },
  {
    option_label: "Insurtech"
  },
  {
    option_label: "Internet of Things (IoT)"
  },
  {
    option_label: "Legal tech"
  },
  {
    option_label: "Life sciences"
  },
  {
    option_label: "Lifestyles of Health"
  },
  {
    option_label: "Manufacturing"
  },
  {
    option_label: "Marketing tech"
  },
  {
    option_label: "Micro-mobility"
  },
  {
    option_label: "Mobile"
  },
  {
    option_label: "Mobile commerce"
  },
  {
    option_label: "Mobility tech"
  },
  {
    option_label: "Mortgage tech"
  },
  {
    option_label: "Nanotechnology"
  },
  {
    option_label: "Pet tech"
  },
  {
    option_label: "Real estate tech"
  },
  {
    option_label: "Restaurant tech"
  },
  {
    option_label: "Ridesharing"
  },
  {
    option_label: "Robotics and drones"
  },
  {
    option_label: "Software as a service (SaaS)"
  },
  {
    option_label: "Space tech"
  },
  {
    option_label: "Supply chain technology"
  },
  {
    option_label: "Sustainability "
  },
  {
    option_label: "Technology, media and telecommunications (TMT)"
  },
  {
    option_label: "Virtual reality (VR)"
  },
  {
    option_label: "Wearables and quantified self"
  },
  {
    option_label: "3D printing"
  },
  {
    option_label: "Oil and gas"
  },
  {
    option_label: "Oncology"
  },
  {
    option_label: "Virtual reality (VR)"
  }

];

console.log(industry_options[0]);



const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );


  return (
    <div className="wrapper registration">
      <h3>Job-Seeker's Registration</h3>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className='form' noValidate>
          <div className='row'>
          <div className="col-md-6 ">

            <div className='form-inputs'>
              <label className='form-label'>Full Name</label>
              <input
                className='form-input'
                type='text'
                name='username'
                placeholder='Enter your full name'
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <label className="error">{errors.username}</label>}
            </div>


            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <label className="error">{errors.email}</label >}
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
              <label className='form-label'>City</label>
              <input
                className='form-input'
                type='text'
                name='city'
                placeholder='Present city'
                value={values.city}
                onChange={handleChange}
              />
              {errors.city && <label className="error">{errors.city}</label >}
            </div>


            <div className='form-inputs'>
            <label className='form-label'>Gender</label>
              <input
                className='form-input-radio'
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}

              />
              She, her and hers

              {/* <label className='form-label'>She, her and hers</label> */}
            </div>

            <div className='form-inputs'>
            <label className='form-label'>Upload Resume</label>
              <SimpleReactFileUpload />
            </div>

          </div>

          <div className="col-md-6">

            <div className='form-inputs'>
              <label className='form-label'  >Work Status</label>
              <select className="select" name="work_status" onChange={handleChange} >
                <option value="Currenty_employed" > Currenty employed</option>
                <option value="Currenty unemployed" > Currenty unemployed</option>
                <option value="Fresher" > Fresher</option>
              </select>
            </div>


            <div className='form-inputs'>
              <label className='form-label'>Years of experience</label>
              <input
                className='form-input'
                type='text'
                name='years_of_experience'
                placeholder='Enter years of experience'
                value={values.years_of_experience}
                onChange={handleChange}
              />
              {errors.years_of_experience && <label className="error">{errors.years_of_experience}</label>}
            </div>


            <div className='form-inputs'>
              <label className='form-label' >Job Title</label>
              <select className="select" name="job_title" onChange={handleChange}>
                <option value="Fresher" >Fresher</option>
                <option value="Associate" >Associate</option>
                <option value="Mid and Senior" >Mid and Senior</option>
                <option value="Executive" >Executive</option>
              </select>
            </div>


            <div className='form-inputs'>
              <label className='form-label' >Industry</label>
              <select className="select" name="industry" onChange={handleChange}>


                {industry_options.map((industry_option, i) =>

                  <option value={industry_option.option_label} key={i}> {industry_option.option_label} </option>


                )}


              </select>
            </div>


            <div className='form-inputs'>
              <label className='form-label'>Skills</label>
              <input
                className='form-input'
                type='text'
                name='skills'
                placeholder='Enter top 4 skills'
                value={values.skills}
                onChange={handleChange}
              />
              {errors.skills && <label className="error">{errors.skills}</label>}
            </div>

            <div className='form-inputs'>
              <label className='form-label'>Education</label>
              <input
                className='form-input'
                type='text'
                name='education'
                placeholder='Enter your eduction'
                value={values.education}
                onChange={handleChange}
              />
              {errors.education && <label className="error">{errors.education}</label>}
            </div>


            </div>

          </div>

          <button className='form-input-btn' type='submit'>
            Register!
          </button>

        </form>
      </div>
      
    </div>
  );
};

export default FormSignup;
