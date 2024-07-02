import React, { Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import $ from 'jquery';
import eat from "../../assest/images/menu-page/eat.png";


import PostertopApp from './Postertop';
import FooterApp from './Footer';
import BreakfastApp from './Breakfast';
import LaunchApp from './Launch';
import DinnerApp from './Dinner';






function MenuApp() {
    $(document).ready(function(){
        $("#breakfastbtn").click(function(){
            $("#breakfast-menu").css("display","block");
            $("#launch-menu").css("display","none");
            $("#dinner-menu").css("display","none");
            $("#breakfastbtn").css("border-bottom","3px solid #dc3545");
            $("#launchbtn").css("border-bottom","3px solid transparent");
            $("#dinnertbtn").css("border-bottom","3px solid transparent");
        });
    });
    $(document).ready(function(){
        $("#launchbtn").click(function(){
            $("#breakfast-menu").css("display","none");
            $("#launch-menu").css("display","block");
            $("#dinner-menu").css("display","none");
            $("#breakfastbtn").css("border-bottom","3px solid  transparent");
            $("#launchbtn").css("border-bottom","3px solid  #dc3545");
            $("#dinnerbtn").css("border-bottom","3px solid transparent");
        });
    });
    $(document).ready(function(){
        $("#dinnerbtn").click(function(){
            $("#breakfast-menu").css("display","none");
            $("#launch-menu").css("display","none");
            $("#dinner-menu").css("display","block");
            $("#breakfastbtn").css("border-bottom","3px solid  transparent");
            $("#launchbtn").css("border-bottom","3px solid transparent");
            $("#dinnerbtn").css("border-bottom","3px solid  #dc3545");
        })
    });
    return (
        <Fragment>

            <MDBContainer fluid className='p-0' id='ourmenu'>
                <PostertopApp name="Food Menu" />
                <MDBContainer className='mt-5'>
                    <MDBCol className='position-relative '>
                        <h4 className='menu text-center text-danger' id='twoline' data-aos="fade-up" data-aos-duration="500">Food Menu</h4>
                    </MDBCol>
                    <h2 className='text-center mt-2 fs-1' data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">Most Popular Items</h2>
                </MDBContainer>

                <MDBContainer>
                    <MDBCol xs={10} sm={10} md={6} lg={6} className='mx-auto mt-5'>
                        <MDBRow>
                            <MDBCol size={4} id="breakfastbtn" className='menu-type' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
                                <MDBRow>
                                    <MDBCol size={4}>
                                        <img src={eat} alt="brackfast" className='img-fluid mt-2'/>
                                    </MDBCol>
                                    <MDBCol size={8} className='special'>
                                        <p className='m-0 p-0'>Popular</p>
                                        <h5>Breakfast</h5>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol size={4} id='launchbtn' className='menu-type' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
                                <MDBRow>
                                    <MDBCol size={4}>
                                        <img src={eat} alt="brackfast" className='img-fluid mt-2' />
                                    </MDBCol>
                                    <MDBCol size={8} className='special'>
                                        <p className='m-0 p-0'>Special</p>
                                        <h5>Launch</h5>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol size={4} id='dinnerbtn' className='menu-type' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
                                <MDBRow>
                                    <MDBCol size={4}>
                                        <img src={eat} alt="brackfast" className='img-fluid mt-2' />
                                    </MDBCol>
                                    <MDBCol size={8} className='special'>
                                        <p className='m-0 p-0'>Lovely</p>
                                        <h5>Dinner</h5>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBContainer>

                {/* breakfast */}
                <BreakfastApp/>

                {/* Launch */}
                <LaunchApp/>

                {/* Dinner */}
                <DinnerApp/>


                
            </MDBContainer>

            {/* footer start */}
            <FooterApp />
        </Fragment>
    )
}

export default MenuApp;
