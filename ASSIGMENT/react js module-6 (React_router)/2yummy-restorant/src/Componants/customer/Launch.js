import React, { Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import maincourse from "../../assest/images/menu-page/launch-section/main-course.jpg";
import gujaratiunlimited from "../../assest/images/menu-page/launch-section/gujarati-unlimitad.jpg";
import punjabiunlimited from "../../assest/images/menu-page/launch-section/punjabi-unlimitad.jpg";
import soup from "../../assest/images/menu-page/launch-section/hot-and-sour.png";
import chas from "../../assest/images/menu-page/launch-section/chas.png";
import papad from "../../assest/images/menu-page/launch-section/papad.png"
import gujarati from "../../assest/images/menu-page/launch-section/Gujarati.png";
import punjabi from "../../assest/images/menu-page/launch-section/punjabi.png";
import Chainese from "../../assest/images/menu-page/launch-section/chinese.png";

export default function LaunchApp() {
    return (
        <Fragment>
            <MDBContainer id='launch-menu' className='mb-5'>
                <MDBRow>
                    <MDBCol size={12} className='mt-5'>
                        <h3 className='text-center'>Unlimited</h3>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-sm-3 mt-md-3 items' align="center" >
                        <img src={maincourse} alt="Full Course" className='img-fluid' />
                        <h5 className='mt-2'>Main Course</h5>
                        <p className='mt-2'>RS.299 / Unlimited</p>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-sm-3 mt-md-3 items' align="center" >
                        <img src={gujaratiunlimited} alt="Gujarati Thali" className='img-fluid' />
                        <h5 className='mt-2'>Gujarati Thali</h5>
                        <p className='mt-2'>RS.180 / Unlimited</p>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-sm-3 mt-md-3 items' align="center" >
                        <img src={punjabiunlimited} alt="Punjabi Thali" className='img-fluid' />
                        <h5 className='mt-2'>Punjabi Thali</h5>
                        <p className='mt-2'>RS.220 / Unlimited</p>
                    </MDBCol>
                    <MDBCol size={12}>
                        <h3 className='text-center mt-4'>Thali</h3>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-2 items' align="center" >
                        <img src={soup} alt="Soup" className='img-fluid' />
                        <h5>Soup</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={chas} alt="Chass Rise" className='img-fluid' />
                        <h5>Chass</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={papad} alt="papad" className='img-fluid' />
                        <h5>Papad</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={gujarati} alt="gujarati" className='img-fluid' />
                        <h5>Gujarati</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={punjabi} alt="punjabi" className='img-fluid' />
                        <h5>Punjabi</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={Chainese} alt="chainese" className='img-fluid' />
                        <h5>Chainese</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Fragment>
    )
}