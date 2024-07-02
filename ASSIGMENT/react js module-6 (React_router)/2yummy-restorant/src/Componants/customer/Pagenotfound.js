import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import error from "../../assest/images/error-page/404-error.gif";

export default function PagenotfoundApp() {
  return (
    <Fragment>
      <MDBContainer>
        <MDBCol className='d-flex justify-content-center'>
          <img src={error} alt='page not found' className='img-fluid w-50 mx-auto' />
        </MDBCol>
        <MDBCol className='d-flex justify-content-center'>
          <MDBBtn className='mb-4' href='/Home'>Go Back <i className="bi bi-arrow-right"></i> </MDBBtn>
        </MDBCol>
      </MDBContainer>
      {/* footer start */}
      <MDBContainer fluid id="footer" className="p-0">
        <MDBRow className="text-white m-0 p-0 pt-4 pb-3">
          <MDBCol xs sm={10} md={3} lg={3} className="mx-auto ps-5 ps-sm-0 ps-md-0" >
            <h3>Usefull Link</h3>
            <Link to="/Home" className="text-decoration-none text-white"><i className="bi bi-arrow-right-square"></i> Home</Link> <br />
            <Link to="/About" className=" text-decoration-none text-white"><i className="bi bi-arrow-right-square"></i> About</Link> <br />
            <Link to="/Menu" className=" text-decoration-none text-white"><i className="bi bi-arrow-right-square"></i> Menu</Link> <br />
            <Link to="/Contact" className=" text-decoration-none text-white"><i className="bi bi-arrow-right-square"></i> Contact</Link> <br />
            <Link to="/Bookingtable" className=" text-decoration-none text-white"><i className="bi bi-arrow-right-square"></i> Book Table</Link>
          </MDBCol>
          <MDBCol xs sm={10} md={3} lg={3} className="mx-auto ps-5 ps-sm-0 ps-md-0 pt-5 pt-md-0">
            <h3>Contact us</h3>
            <p><i className="bi bi-geo-alt-fill"></i> 123 street , Ahamdabad, India</p>
            <p><i className="bi bi-telephone-fill"></i> +91 9576233977</p>
            <p><i className="bi bi-envelope-fill"></i> 2yumm@gmail.com</p>
            <p className="social-mediya">
              <b><i className="bi bi-facebook"></i></b>
              <b><i className="bi bi-instagram"></i></b>
              <b><i className="bi 
                            bi-twitter"></i></b>
              <b><i className="bi bi-youtube"></i></b>
            </p>
          </MDBCol>
          <MDBCol xs sm={10} md={3} lg={3} className="mx-auto ps-5 ps-sm-0 ps-md-0 pt-5 pt-md-0">
            <h3>Opening</h3>
            <h5>Monday - Saturday</h5>
            <p>09AM - 09PM</p>
            <h5>Sunday</h5>
            <p>10AM - 08PM</p>
          </MDBCol>
        </MDBRow>
        <MDBCol xs sm={12} md lg={12} className="copyright text-center text-white-50 p-2">
          &copy; Copyright by 2yumm 2023 || All rights are reserved
        </MDBCol>
      </MDBContainer>

    </Fragment>
  )
}
