import React, { Fragment} from 'react'
import { MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import FooterApp from './Footer';
import PostertopApp from './Postertop';
import ContactformApp from './Contactform';

export default function ContactusApp() {
    return (
        <Fragment>
            <PostertopApp name="Contact Us"/>
            <MDBContainer className="p-5">
                <MDBRow className=''>
                    <MDBCol xs sm md lg={12} className="text-center  position-relative" data-aos="fade-up" data-aos-duration="1000">
                        <h4 className="text-danger" id='twoline'>Contact For Any Query</h4>
                    </MDBCol>
                    <MDBCol className="information shadow-sm mx-auto text-center p-4 p-sm-0 pt-sm-4 pb-sm-4 rounded-3 mx-auto mt-lg-5 mt-5 " xs={8} sm={6} md lg={3} data-aos="zoom-out" data-aos-duration="1000">
                        <h5>Booking</h5>
                        <i className='bi bi-envelope-open-fill text-danger'></i><br />
                        <Link to="#" className='text-decoration-none'> Toyummbooking@gmail.com</Link>
                    </MDBCol>
                    <MDBCol className="information shadow-sm text-center mx-auto p-4 p-sm-0 pt-sm-4 pb-sm-4 rounded-3 mx-auto mt-lg-5 mt-5" xs={8} sm={6} md lg={3} data-aos="zoom-out" data-aos-duration="1000">
                        <h5>General</h5>
                        <i className='bi bi-envelope-open-fill text-danger'></i><br />
                        <Link to='#' className=' text-decoration-none'>Toyummgeneral@gmail.com</Link>
                    </MDBCol>
                    <MDBCol className="information shadow-sm text-center mx-auto p-4 p-sm-0 pt-sm-4 pb-sm-4 rounded-3 mx-auto mt-lg-5 mt-sm-4 mt-5" xs={8} sm={6} md lg={3} data-aos="zoom-out" data-aos-duration="1000">
                        <h5>Technical</h5>
                        <i className='bi bi-envelope-open-fill text-danger'></i><br />
                        <Link to='#' className=' p-sm-0 text-decoration-none'> Toyummtechanical@gmail.com</Link>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBContainer fluid>
                    <MDBCol xs sm md lg={12} className="text-center  position-relative" data-aos="fade-up" data-aos-duration="1000">
                        <h4 className="text-danger" id='twoline'>Keep in touch</h4>
                    </MDBCol>
                    <MDBRow className="p-5 pt-3">
                        <MDBCol className=" mx-auto" xs={10} sm={10} md={5} lg={5} data-aos="fade-up" data-aos-duration="1500">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14685.865745544928!2d72.4819042!3d23.0433552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b6318e8da91%3A0x864bb42461cc953f!2sTaj%20Skyline%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1685164697975!5m2!1sen!2sin" width="100%" height="100%" style={{ border: "0px" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </MDBCol>
                        <MDBCol className=" mx-auto" xs={10} sm={10} md={5} lg={5}>
                        {/* contactform */}
                            <ContactformApp/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                {/* footer  start*/}
                <FooterApp />
        </Fragment>
    )}
