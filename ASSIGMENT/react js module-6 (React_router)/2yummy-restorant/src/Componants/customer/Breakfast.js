import React, { Fragment } from 'react';
import { MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import tea from "../../assest/images/menu-page/brackfast-section/tea.png";
import coffee from "../../assest/images/menu-page/brackfast-section/coffee.png";
import vanelagathiya from "../../assest/images/menu-page/brackfast-section/gathiya.png";
import thepla from "../../assest/images/menu-page/brackfast-section/Thepla.png";
import khakhra from "../../assest/images/menu-page/brackfast-section/khakhra.png";
import sandwich from "../../assest/images/menu-page/brackfast-section/sandwich.png";
import poha from "../../assest/images/menu-page/brackfast-section/poha.png";
import khamandhokla from "../../assest/images/menu-page/brackfast-section/khaman-dhokla.png";
import jalebi from "../../assest/images/menu-page/brackfast-section/jalebi.png";
import tost from "../../assest/images/menu-page/brackfast-section/butter-tost.png";
import dosha from "../../assest/images/menu-page/brackfast-section/dosha.png";
import idlisambar from "../../assest/images/menu-page/brackfast-section/idli-sambar.png";
import upma from "../../assest/images/menu-page/brackfast-section/upma.png";
import uttapam from "../../assest/images/menu-page/brackfast-section/uttapam.png";
import vada from "../../assest/images/menu-page/brackfast-section/vada.png";


export default function BreakfastApp() {
  return (
    <Fragment>
      <MDBContainer id='breakfast-menu'>
                    <MDBRow className='mt-5'>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto items ' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={tea} alt="tea" className='img-fluid '/>
                            <h5>Tea</h5>
                            <p>RS.10 / half</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={coffee} alt="coffee" className='img-fluid'/>
                            <h5>Coffee</h5>
                            <p>RS.15 / half</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 mt-lg-0 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={vanelagathiya} alt="gathiya" className='img-fluid'/>
                            <h5>Gathiya</h5>
                            <p>RS.30 / 100gm</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={thepla} alt="Thepla with tea" className='img-fluid'/>
                            <h5>Thepla</h5>
                            <p>RS.40 / 5pce</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={khakhra} alt="khakhra with tea" className='img-fluid'/>
                            <h5>Khakhra</h5>
                            <p>RS.40 / 5pce</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={sandwich} alt="sandwich" className='img-fluid'/>
                            <h5>Sandwich</h5>
                            <p>RS.15 / 1pce</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={poha} alt="poha with tea" className='img-fluid'/>
                            <h5>Poha</h5>
                            <p>RS.20 / 100gm</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={tost} alt="Butter-Tost" className='img-fluid'/>
                            <h5>Butter-Tost</h5>
                            <p>RS.20 / 4pce</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={khamandhokla} alt="khamandhokla" className='img-fluid'/>
                            <h5>Khaman Dhokla</h5>
                            <p>RS.15 / 100gm</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={jalebi} alt="jalebi" className='img-fluid'/>
                            <h5>Jalebi</h5>
                            <p>RS.30 / 100gm</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={dosha} alt="masala-dosha" className='img-fluid'/>
                            <h5>Masala Dosha</h5>
                            <p>RS.50 / 1pce</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                            <img src={idlisambar} alt="idli-sambar" className='img-fluid'/>
                            <h5>Idli Sambar</h5>
                            <p>RS.40 / 4pce</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="2000">
                            <img src={upma} alt="upma" className='img-fluid'/>
                            <h5>Upma</h5>
                            <p>RS.20 / 1pce</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="2000">
                            <img src={uttapam} alt="uttapam" className='img-fluid'/>
                            <h5>Uttapam</h5>
                            <p>RS.35 / 1plate</p>
                        </MDBCol>
                        <MDBCol sm={10} md={5} lg={4} className='mx-auto mt-md-3 items' align="center" data-aos="fade-up" data-aos-duration="500" data-aos-delay="2000">
                            <img src={vada} alt="vada" className='img-fluid'/>
                            <h5>Vada</h5>
                            <p>RS.35 / 5pce</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
    </Fragment>
  )
}