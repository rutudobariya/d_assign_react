import React, { Fragment } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardFooter} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import dishfood from "../../assest/images/aboutus-page/food-section/food-1.jpg";
import dokla from "../../assest/images/aboutus-page/food-section/food-2.jpg";
import vegfood from "../../assest/images/aboutus-page/food-section/food-3.jpg";
import tikki from "../../assest/images/aboutus-page/food-section/food-4.jpg";
import bob from "../../assest/images/aboutus-page/team-section/bob-brouni.jpg";
import john from "../../assest/images/aboutus-page/team-section/john-saga.jpg";
import remo from "../../assest/images/aboutus-page/team-section/rembo-disuza.jpg";
import markes from "../../assest/images/aboutus-page/team-section/markes-grover.jpg";
import gallery1 from "../../assest/images/aboutus-page/gallery-section/gallery-1.jpg";
import gallery2 from "../../assest/images/aboutus-page/gallery-section/gallery-2.jpg";
import gallery3 from "../../assest/images/aboutus-page/gallery-section/gallery-3.jpg";
import gallery4 from "../../assest/images/aboutus-page/gallery-section/gallery-4.jpg";
import gallery5 from "../../assest/images/aboutus-page/gallery-section/gallery-5.jpg";
import gallery6 from "../../assest/images/aboutus-page/gallery-section/gallery-6.jpg";
import gallery7 from "../../assest/images/aboutus-page/gallery-section/gallery-7.jpg";
import gallery8 from "../../assest/images/aboutus-page/gallery-section/gallery-8.jpg";
import PostertopApp from './Postertop';
import FooterApp from './Footer';

export default function AboutApp() {
    return (
        <Fragment>

            <PostertopApp name="About Us"/>
            <MDBContainer>
                <MDBRow className='p-5'>
                    <MDBCol sm={12} md={6} lg={6} className='about-container'>
                        <MDBCol className='photos' data-aos="zoom-out" data-aos-duration="500">
                            <img src={dishfood} ali="food1" className='img-fluid w-100' />
                        </MDBCol>
                        <MDBCol className='photos' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="500">
                            <img src={dokla} ali="food2" className='img-fluid w-75' />
                        </MDBCol>
                        <MDBCol className='photos' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="1000">
                            <img src={vegfood} ali="food3" className='img-fluid w-75' />
                        </MDBCol>
                        <MDBCol className='photos' data-aos="zoom-out" data-aos-duration="500" data-aos-delay="1500">
                            <img src={tikki} ali="food4" className='img-fluid w-100'/>
                        </MDBCol>
                    </MDBCol>
                    <MDBCol sm={12} md={6} lg={6} className=" ps-lg-5 mt-5 mt-md-0 mt-lg-0 aboutus-details">
                        <MDBCol className='position-relative'>
                            <h4 className='text-danger' id='oneline' data-aos="fade-up" data-aos-duration="500 ">about us</h4>
                        </MDBCol> 
                        <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">Welcome to Restoran</h1>
                        <p className='text-justify' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <MDBBtn className='bg-danger p-3 border border-0 rounded-1' >READ MORE</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer id='ourteam' className='p-5 pt-3'>
                <MDBCol className='mb-5 text-center'>
                    <MDBCol className='position-relative'>
                        <h4 className='text-danger' id='twoline' data-aos="fade-up" data-aos-duration="500">Team Members</h4>
                    </MDBCol>
                    <h1 data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">Our Master Team</h1>
                </MDBCol>
                <MDBRow className='cardrow m-0 p-0'>
                    <MDBCard className='m-0 text-center border border-0' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
                        <MDBCol size={9} className='mx-auto mt-4 rounded-circle imgbox'>
                            <img src={bob} alt=" Bob Brouni" className="img-fluid rounded-circle" />
                        </MDBCol>
                        <MDBCardBody>
                            <h4>Bob Brouni</h4>
                            <p>Master Chef</p>
                        </MDBCardBody>
                        <MDBCardFooter className='bg-transparent border border-0 p-0 cardfottor'>
                            <MDBCol size={8} className='mx-auto d-flex justify-content-evenly'>
                                <div className='cardicon'>
                                    <i className='bi bi-facebook'></i>
                                </div>
                                <div className='cardicon'>
                                    <i className='bi bi-twitter'></i>
                                </div>
                                <div className='cardicon'>
                                    <i className='bi bi-instagram'></i>
                                </div>
                            </MDBCol>
                        </MDBCardFooter>
                    </MDBCard>
                    <MDBCard className='m-0 text-center border border-0' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
                        <MDBCol size={9} className='mx-auto mt-4 rounded-circle imgbox'>
                            <img src={markes} alt=" Markes Grover" className="img-fluid rounded-circle" />
                        </MDBCol>
                        <MDBCardBody>
                            <h4>Markes Grover</h4>
                            <p>Master Cook</p>
                        </MDBCardBody>
                        <MDBCardFooter className='bg-transparent border border-0 p-0 cardfottor'>
                            <MDBCol size={8} className='mx-auto d-flex justify-content-evenly'>
                                <div className='cardicon'>
                                    <i className='bi bi-facebook'></i>
                                </div>
                                <div className='cardicon'>
                                    <i className='bi bi-twitter'></i>
                                </div>
                                <div className='cardicon'>
                                    <i className='bi bi-instagram'></i>
                                </div>
                            </MDBCol>
                        </MDBCardFooter>
                    </MDBCard>
                    <MDBCard className='m-0 text-center border border-0' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
                        <MDBCol size={9} className='mx-auto mt-4 rounded-circle imgbox'>
                            <img src={john} alt=" John Deo" className="img-fluid rounded-circle" />
                        </MDBCol>
                        <MDBCardBody>
                            <h4>John Deo</h4>
                            <p>chef</p>
                        </MDBCardBody>
                        <MDBCardFooter className='bg-transparent border border-0 p-0 cardfottor'>
                            <MDBCol size={8} className='mx-auto d-flex justify-content-evenly'>
                                <div className='cardicon'>
                                    <i className='bi bi-facebook'></i>
                                </div>
                                <div className='cardicon'>
                                    <i className='bi bi-twitter'></i>
                                </div>
                                <div className='cardicon'>
                                    <i className='bi bi-instagram'></i>
                                </div>
                            </MDBCol>
                        </MDBCardFooter>
                    </MDBCard>
                    <MDBCard className='m-0 text-center border border-0' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
                        <MDBCol size={9} className='mx-auto mt-4 rounded-circle imgbox'>
                            <img src={remo} alt=" Remi Dishuza" className="img-fluid rounded-circle" />
                        </MDBCol>
                        <MDBCardBody>
                            <h4>Remo Dishuza</h4>
                            <p>Master Chef</p>
                        </MDBCardBody>
                        <MDBCardFooter className='bg-transparent border border-0 p-0 cardfottor'>
                            <MDBCol size={8} className='mx-auto d-flex justify-content-evenly'>
                                <div className='cardicon'>
                                    <i className='bi bi-facebook'></i>
                                </div>
                                <div className='cardicon'>
                                    <i className='bi bi-twitter'></i>
                                </div>
                                <div className='cardicon'>
                                    <i className='bi bi-instagram'></i>
                                </div>
                            </MDBCol>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBRow>
            </MDBContainer>

            {/* our service */}
            <MDBContainer id='ourservice'>
                <MDBCol size={12} className='position-relative mt-2'>
                    <h3 id='twoline' className='text-center text-danger'>Our Services</h3>
                </MDBCol>
                <MDBRow className='mb-5'>
                    <MDBCol size="10" md="5" lg="3" className='mx-auto servicecard border border-2 p-4 mt-4'>
                        <i className='bi bi-person-fill text-danger'></i>
                        <h5 className='my-3'>Master Chefs</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </MDBCol>
                    <MDBCol size="10" md="5" lg="3" className='mx-auto  servicecard border border-2 p-4 mt-4'>
                        <i className='bi bi-award-fill text-danger'></i>
                        <h5 className='my-3'>Quality Food</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </MDBCol>
                    <MDBCol size="10" md="5" lg="3" className='mx-auto  servicecard border border-2 p-4 mt-4'>
                        <i className='bi bi-clock-fill text-danger'></i>
                        <h5 className='my-3'>24x7 Service</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            {/* gallery section start */}
            <MDBContainer fluid id='gallery' className='p-0'>
                <MDBCol size={12} className='text-center'>
                    <MDBCol className='position-relative'>
                        <h4 className='text-danger mt-sm-5 mt-5 mt-md-0 mt-lg-0 pt-md-0 pt-lg-0' id='twoline' data-aos="fade-up" data-aos-duration="500">Gallery</h4>
                    </MDBCol>
                    <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Some Photos From Our Restaurant</h1>
                </MDBCol>
                <MDBContainer fluid className='mt-4'>
                    <MDBRow>
                        <MDBCol sm={10} md={6} lg={3} className='gallery-img-container p-0 mx-auto' data-bs-toggle="modal" data-bs-target="#gallery-1" data-aos="zoom-in" data-aos-duration="1000">
                                <img src={gallery1} alt="our restaurant image-1" className='img-fluid' />
                        </MDBCol>
                        <MDBCol sm={10} md={6} lg={3} className='gallery-img-container p-0 mx-auto' data-bs-toggle="modal" data-bs-target="#gallery-2" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={gallery2} alt="our restaurant image-2" className='img-fluid' />
                        </MDBCol>
                        <MDBCol sm={10} md={6} lg={3} className='gallery-img-container p-0 mx-auto' data-bs-toggle="modal" data-bs-target="#gallery-3" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={gallery3} alt="our restaurant image-3" className='img-fluid' />
                        </MDBCol>
                        <MDBCol sm={10} md={6} lg={3} className='gallery-img-container p-0 mx-auto' data-bs-toggle="modal" data-bs-target="#gallery-4" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={gallery4} alt="our restaurant image-4" className='img-fluid' />
                        </MDBCol>
                        <MDBCol sm={10} md={6} lg={3} className='gallery-img-container p-0 mx-auto' data-bs-toggle="modal" data-bs-target="#gallery-5" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={gallery5} alt="our restaurant image-5" className='img-fluid' />
                        </MDBCol>
                        <MDBCol sm={10} md={6} lg={3} className='gallery-img-container p-0 mx-auto' data-bs-toggle="modal" data-bs-target="#gallery-6" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={gallery6} alt="our restaurant image-6" className='img-fluid' />
                        </MDBCol>
                        <MDBCol sm={10} md={6} lg={3} className='gallery-img-container p-0 mx-auto' data-bs-toggle="modal" data-bs-target="#gallery-7" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={gallery7} alt="our restaurant image-7" className='img-fluid' />
                        </MDBCol>
                        <MDBCol sm={10} md={6} lg={3} className='gallery-img-container p-0 mx-auto' data-bs-toggle="modal" data-bs-target="#gallery-8" data-aos="zoom-in" data-aos-duration="1000">
                            <img src={gallery8} alt="our restaurant image-8" className='img-fluid' />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>




            {/* footer start */}
            <FooterApp />


            {/* MODAL START HERE */}
            {/* GALLERY SECTION MODAL START */}

            <MDBContainer>
            {/* modal-1 */}
                <MDBCol className="modal fade bg-opacity-10" id="gallery-1" tabIndex="-1" aria-labelledby="exampleModalLabel">
                    <MDBCol className="modal-dialog bg-opacity-10">
                        <MDBCol className="modal-content bg-transparent" id='modal-content'>
                            <MDBCol className="modal-header border border-0">
                                <MDBBtn type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></MDBBtn>
                            </MDBCol>
                            <MDBCol className="modal-body">
                                <img src={gallery1} alt="first-gallery-image" className='img-fluid' />
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                </MDBCol>
                </MDBContainer>
                <MDBContainer>
                {/* modal-2 */}
                <MDBCol className="modal fade bg-opacity-10" id="gallery-2" tabIndex="-1" aria-labelledby="exampleModalLabel">
                    <MDBCol className="modal-dialog bg-opacity-10">
                        <MDBCol className="modal-content bg-transparent" id='modal-content'>
                            <MDBCol className="modal-header border border-0">
                                <MDBBtn type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></MDBBtn>
                            </MDBCol>
                            <MDBCol className="modal-body">
                                <img src={gallery2} alt="first-gallery-image" className='img-fluid' />
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                </MDBCol>
                {/* modal-3 */}
                <MDBCol className="modal fade bg-opacity-10" id="gallery-3" tabIndex="-1" aria-labelledby="exampleModalLabel">
                    <MDBCol className="modal-dialog bg-opacity-10">
                        <MDBCol className="modal-content bg-transparent" id='modal-content'>
                            <MDBCol className="modal-header border border-0">
                                <MDBBtn type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></MDBBtn>
                            </MDBCol>
                            <MDBCol className="modal-body">
                                <img src={gallery3} alt="first-gallery-image" className='img-fluid' />
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                </MDBCol>
                {/* modal-4 */}
                <MDBCol className="modal fade bg-opacity-10" id="gallery-4" tabIndex="-1" aria-labelledby="exampleModalLabel">
                    <MDBCol className="modal-dialog bg-opacity-10">
                        <MDBCol className="modal-content bg-transparent" id='modal-content'>
                            <MDBCol className="modal-header border border-0">
                                <MDBBtn type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></MDBBtn>
                            </MDBCol>
                            <MDBCol className="modal-body">
                                <img src={gallery4} alt="first-gallery-image" className='img-fluid' />
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                </MDBCol>
                {/* modal-5 */}
                <MDBCol className="modal fade bg-opacity-10" id="gallery-5" tabIndex="-1" aria-labelledby="exampleModalLabel">
                    <MDBCol className="modal-dialog bg-opacity-10">
                        <MDBCol className="modal-content bg-transparent" id='modal-content'>
                            <MDBCol className="modal-header border border-0">
                                <MDBBtn type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></MDBBtn>
                            </MDBCol>
                            <MDBCol className="modal-body">
                                <img src={gallery5} alt="first-gallery-image" className='img-fluid' />
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                </MDBCol>
                {/* modal-6 */}
                <MDBCol className="modal fade bg-opacity-10" id="gallery-6" tabIndex="-1" aria-labelledby="exampleModalLabel">
                    <MDBCol className="modal-dialog bg-opacity-10">
                        <MDBCol className="modal-content bg-transparent" id='modal-content'>
                            <MDBCol className="modal-header border border-0">
                                <MDBBtn type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></MDBBtn>
                            </MDBCol>
                            <MDBCol className="modal-body">
                                <img src={gallery6} alt="first-gallery-image" className='img-fluid' />
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                </MDBCol>
                {/* modal-7 */}
                <MDBCol className="modal fade bg-opacity-10" id="gallery-7" tabIndex="-1" aria-labelledby="exampleModalLabel">
                    <MDBCol className="modal-dialog bg-opacity-10">
                        <MDBCol className="modal-content bg-transparent" id='modal-content'>
                            <MDBCol className="modal-header border border-0">
                                <MDBBtn type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></MDBBtn>
                            </MDBCol>
                            <MDBCol className="modal-body">
                                <img src={gallery7} alt="first-gallery-image" className='img-fluid' />
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                </MDBCol>
                {/* modal-8 */}
                <MDBCol className="modal fade bg-opacity-10" id="gallery-8" tabIndex="-1" aria-labelledby="exampleModalLabel">
                    <MDBCol className="modal-dialog bg-opacity-10">
                        <MDBCol className="modal-content bg-transparent" id='modal-content'>
                            <MDBCol className="modal-header border border-0">
                                <MDBBtn type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></MDBBtn>
                            </MDBCol>
                            <MDBCol className="modal-body">
                                <img src={gallery8} alt="first-gallery-image" className='img-fluid' />
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                </MDBCol>
            </MDBContainer>


        </Fragment>
    )
}
