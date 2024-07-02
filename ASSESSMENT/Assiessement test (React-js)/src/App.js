import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import { signUpSchema } from './schemas';


function App() {

  const initialValues = {
    Email: "",
    Password: "",
    Retype_Password: "",
    First_Name: "",
    Last_Name: "",
    Phone_Number: "",
    Address: "",
    Town: "",
    Region: "",
    Postcode: "",
    Country: "",
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(
        "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
        values
      );
      action.resetForm();
    },
  });

  return (
    <div>
      <Container fluid="true" id='form'>
        <Container className='p-5'>
          <h3>Regster here</h3>
          <h1>USER REGISTRATION</h1>
          <p>Fields marked <span className='text-danger fw-bold'>*</span> are required.</p>

          <form onSubmit={handleSubmit}>
            <table className='w-100 mt-4'>
              <tbody>
                <tr>
                  <td>Email <span className='text-danger fw-bold'>*</span></td>
                  <td>
                    <input type='email'
                      placeholder='Email'
                      name="Email"
                      className='p-1 w-100 mt-2'
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      value={values.Email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br />
                    {errors.Email && touched.Email ? (
                      <p className='form-error'>{errors.Email}</p>
                    ) : null}
                  </td>
                </tr>

                <tr className='mt-4'>
                  <td>Password <span className='text-danger fw-bold'>*</span></td>
                  <td>
                    <input
                      type='password'
                      placeholder='Password'
                      name="Password"
                      className='p-1 w-100 mt-2'
                      value={values.Password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br />
                    {errors.Password && touched.Password ? (
                      <p className='form-error'>{errors.Password}</p>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>Retype Password <span className='text-danger fw-bold'>*</span></td>
                  <td>
                    <input
                      type='password'
                      placeholder='Retype Password'
                      name="Retype_Password"
                      className='p-1 w-100 mt-2'
                      value={values.Retype_Password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br />
                    {errors.Retype_Password && touched.Retype_Password ? (
                      <p className='form-error'>{errors.Retype_Password}</p>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>First Name <span className='text-danger fw-bold'>*</span></td>
                  <td>
                    <input
                      type='text'
                      placeholder='First Name'
                      name="First_Name"
                      className='p-1 w-100 mt-2'
                      value={values.First_Name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br />
                    {errors.First_Name && touched.First_Name ? (
                      <p className='form-error'>{errors.First_Name}</p>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>Last Name <span className='text-danger fw-bold'>*</span></td>
                  <td><input
                    type='text'
                    placeholder='Last Name'
                    name="Last_Name"
                    className='p-1 w-100 mt-2'
                    value={values.Last_Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  /><br />
                    {errors.Last_Name && touched.Last_Name ? (
                      <p className='form-error'>{errors.Last_Name}</p>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>Phone Number <span className='text-danger fw-bold'>*</span></td>
                  <td>
                    <input
                      type='text'
                      placeholder='Phone Number'
                      name="Phone_Number"
                      className='p-1 w-100 mt-2'
                      value={values.Phone_Number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br />
                    {errors.Phone_Number && touched.Phone_Number ? (
                      <p className='form-error'>{errors.Phone_Number}</p>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>Address <span className='text-danger fw-bold'>*</span></td>
                  <td>
                    <textarea
                      placeholder='Enter Adress'
                      name="Address"
                      className='p-1 w-100 mt-2'
                      value={values.Address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}>
                    </textarea><br />
                    {errors.Address && touched.Address ? (
                      <p className='form-error'>{errors.Address}</p>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>Town <span className='text-danger fw-bold'>*</span></td>
                  <td>
                    <input
                      type='text'
                      placeholder='Enter Town'
                      name="Town"
                      className='p-1 w-100 mt-2'
                      value={values.Town}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br />
                    {errors.Town && touched.Town ? (
                      <p className='form-error'>{errors.Town}</p>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>Region <span className='text-danger fw-bold'>*</span></td>
                  <td>
                    <input
                      type='text'
                      placeholder='Region'
                      name="Region"
                      className='p-1 w-100 mt-2'
                      value={values.Region}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br />
                    {errors.Region && touched.Region ? (
                      <p className='form-error'>{errors.Region}</p>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>Postcode / Zip <span className='text-danger fw-bold'>*</span></td>
                  <td>
                    <input
                      type='text'
                      placeholder='Postcode'
                      name="Postcode"
                      className='p-1 w-100 mt-2'
                      value={values.Postcode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br />
                    {errors.Postcode && touched.Postcode ? (
                      <p className='form-error'>{errors.Postcode}</p>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td>Country <span className='text-danger fw-bold'>*</span></td>
                  <td>
                    <select className="form-select mt-2" name='Country' value={values.Country}
                      onChange={handleChange}
                      onBlur={handleBlur}>
                      <option value="select country">- Select Country -</option>
                      <option value="1">India</option>
                      <option value="2">United Kingdom</option>
                      <option value="3">United State of America</option>
                      <option value="4">Canada</option>
                      <option value="5">Germany</option>
                      <option value="6">Austria</option>
                      <option value="7">Colombia</option>
                      <option value="8">Argentina</option>
                      <option value="9">China</option>
                      <option value="10">Belgium</option>
                    </select><br />
                    {errors.Country && touched.Country ? (
                      <p className='form-error'>{errors.Country}</p>
                    ) : null}
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td><button type='submit' className='btn btn-md btn-success  mt-2' >Regirster</button></td>
                </tr>
              </tbody>
            </table>
          </form>
        </Container>
      </Container>
    </div>
  );
}

export default App;
