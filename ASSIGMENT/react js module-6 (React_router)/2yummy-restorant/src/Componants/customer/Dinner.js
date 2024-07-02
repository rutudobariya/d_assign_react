import React, { Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import maincourse from "../../assest/images/menu-page/launch-section/main-course.jpg";
import gujaratiunlimited from "../../assest/images/menu-page/launch-section/gujarati-unlimitad.jpg";
import punjabiunlimited from "../../assest/images/menu-page/launch-section/punjabi-unlimitad.jpg";
import pizza from "../../assest/images/menu-page/dinner-section/pizza.png";
import pasta from "../../assest/images/menu-page/dinner-section/pasta.png";
import dosa from "../../assest/images/menu-page/dinner-section/dosa.png";
import soup from "../../assest/images/menu-page/launch-section/hot-and-sour.png";
import chas from "../../assest/images/menu-page/launch-section/chas.png";
import papad from "../../assest/images/menu-page/launch-section/papad.png"
import gujarati from "../../assest/images/menu-page/launch-section/Gujarati.png";
import punjabi from "../../assest/images/menu-page/launch-section/punjabi.png";
import Chainese from "../../assest/images/menu-page/launch-section/chinese.png";
import pavbhaji from "../../assest/images/menu-page/dinner-section/pav-bhaji.png";
import colddrinks from "../../assest/images/menu-page/dinner-section/cold-drinks.png";


export default function DinnerApp() {
  return (
    <Fragment>
      <MDBContainer id='dinner-menu' className='mb-5'>
                <MDBRow>
                    <MDBCol size={12} className='mt-5'>
                        <h3 className='text-center'>Unlimited</h3>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3  items' align="center" >
                        <img src={maincourse} alt="Full Course" className='img-fluid'/>
                        <h5 className='mt-2'>Main Course</h5>
                        <p className='mt-2'>RS.299 / Unlimited</p>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={gujaratiunlimited} alt="Gujarati Thali" className='img-fluid'/>
                        <h5 className='mt-2'>Gujarati</h5>
                        <p className='mt-2'> RS.180 / Unlimited</p>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={punjabiunlimited} alt="Punjabi Thali" className='img-fluid'/>
                        <h5 className='mt-2'>Punjabi</h5>
                        <p className='mt-2'>RS.220 / Unlimited</p>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={pizza} alt="Piaaz" className='img-fluid'/>
                        <h5 className='mt-2'>Pizza</h5>
                        <p className='mt-2'>RS.279 / Unlimited</p>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={pasta} alt="Pasta" className='img-fluid'/>
                        <h5 className='mt-2'>Pasta</h5>
                        <p className='mt-2'>RS.239 / Unlimited</p>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={dosa} alt="Pasta" className='img-fluid'/>
                        <h5 className='mt-2'>Dosa</h5>
                        <p className='mt-2'>RS.259 / Unlimited</p>
                    </MDBCol>
                    <MDBCol size={12}>
                        <h3 className='text-center mt-4'>Thali</h3>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={soup} alt=" Soup" className='img-fluid'/>
                        <h5>Soup</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={chas} alt="Chass Rise" className='img-fluid'/>
                        <h5 className='mt-2'>Chass</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={papad} alt="papad" className='img-fluid'/>
                        <h5 className='mt-2'>Papad</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={gujarati} alt="gujarati" className='img-fluid'/>
                        <h5 className='mt-2'>Gujarati</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={punjabi} alt="punjabi" className='img-fluid'/>
                        <h5 className='mt-2'>Punjabi</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={Chainese} alt="chainese" className='img-fluid'/>
                        <h5 className='mt-2'>Chainese</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={5} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={pavbhaji} alt="North Indian" className='img-fluid'/>
                        <h5 className='mt-2'>Pav Bhaji</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    <MDBCol sm={10} md={5} lg={5} className='mx-auto mt-md-3 mt-sm-4 items' align="center" >
                        <img src={colddrinks} alt="Cold-Drinks" className='img-fluid'/>
                        <h5 className='mt-2'>Cold-Drinks</h5>
                        <button type="button" class="btn btn-sm rounded-pill px-3 mt-2" data-mdb-ripple-color="dark">View</button>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
    </Fragment>
  )
}
