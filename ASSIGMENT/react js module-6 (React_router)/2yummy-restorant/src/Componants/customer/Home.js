import React, { Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import cook from "../../assest/images/home-page/header/cook.jpg";
import greeksalad from "../../assest/images/home-page/header/greek-salad.jpg";
import cookingvagetables from "../../assest/images/home-page/header/cooking-fresh-vegetables.jpg";
import vegetablesalad from "../../assest/images/home-page/header/fresh-vegetable-greek-salad.jpg";
import tortillasalad from "../../assest/images/home-page/header/tortilla-wrap-with-falafel-fresh-salad.jpg";
import hotdog from "../../assest/images/home-page/brackfast/hot-dog.jpg";
import number1 from "../../assest/images/home-page/menu/number-1.png";
import number2 from "../../assest/images/home-page/menu/number-2.png";
import number3 from "../../assest/images/home-page/menu/number-3.png";
import number4 from "../../assest/images/home-page/menu/number-4.png";
import number5 from "../../assest/images/home-page/menu/number-5.png";
import number6 from "../../assest/images/home-page/menu/number-6.png";
import deliverfood from "../../assest/images/home-page/delivery-service/ffd.jpg";
import burger from "../../assest/images/home-page/slider/burger.png"
import pizza from "../../assest/images/home-page/slider/pizza.png"


export default function HomeApp() {
    return (
        <Fragment>
            {/* header section start */}
            <MDBContainer id="header" className="mb-5">
                <MDBRow>
                    <MDBCol xs sm={12} md lg={6} className="detail p-lg-5 p-md-4 p-sm-5" data-aos="fade-right" data-aos-duration="1000">
                        <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
                            <span className="text-danger">Dining</span> <br />
                            On The Lake
                        </h1>
                        <p className="fs-5">    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, libero cumque labore ratione excepturi quam possimus animi sit sapiente.</p>
                        <Link to="/Menu">
                            <MDBBtn href="#" className="rounded-pill bg-danger border border-0 btn">VIEW MENU</MDBBtn>
                        </Link>
                    </MDBCol>
                    <MDBCol xs sm={12} md lg={6} className=" imagee p-lg-5 p-md-5 p-sm-5" data-aos="fade-left" data-aos-duration="1500">
                        <MDBCol className="imagegif" align="center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000">
                            <img src={cook} alt="cook" className="img-fluid rounded-circle" />
                        </MDBCol>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="MDBContainer food-items mx-auto">
                    <MDBCol xs={10} sm={10} md={6} lg={3} className="food-item  mt-sm-3 mx-auto position-relative" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={greeksalad} alt="green salad" className="img-fluid" />
                    </MDBCol>
                    <MDBCol xs={10} sm={10} md={6} lg={3} className="food-item mt-sm-3 mx-auto" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={cookingvagetables} alt="cooking vegetables" className="img-fluid" />
                    </MDBCol>
                    <MDBCol xs={10} sm={10} md={6} lg={3} className="food-item mt-sm-3 mx-auto" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={vegetablesalad} alt="vegetablesalad" className="img-fluid" />
                    </MDBCol>
                    <MDBCol xs={10} sm={10} md={6} lg={3} className="food-item mt-sm-3 mx-auto" data-aos="zoom-in" data-aos-duration="1000">
                        <img src={tortillasalad} alt="tortilla salad" className="img-fluid" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            {/* brackfast section start */}
            <MDBContainer fluid id="breakfast">
                <MDBContainer className="p-5">
                    <MDBCol xs={5} sm={5} md={4} lg={4} className="redcontainer rounded-circle float-end" data-aos="zoom-in" data-aos-duration="1000">
                    </MDBCol>
                    <MDBCol xs={12} sm={10} md={10} lg={10} className="hotdog">
                        <img src={hotdog} alt="Hotdog" className="img-fluid" />
                    </MDBCol>
                    <MDBCol xs={12} sm={8} md={6} lg={4} className="p-5 bg-white card text-center" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <h1>Breakfast</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <Link to="/Menu">
                            <MDBBtn variant="outline-danger" className="rounded-pill w-100">Order Now</MDBBtn>
                        </Link>
                    </MDBCol>
                </MDBContainer>
            </MDBContainer>

            {/* menu section start */}
            <MDBContainer fluid id="menu">
                <MDBContainer className="empty"></MDBContainer>
                <MDBContainer className=" menu-main text-white p-5 ">
                    <MDBCol className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <MDBCol>
                            <MDBCol>
                                <MDBRow>
                                    <MDBCol size={4} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number1} alt="number-1" className="img-fluid" />
                                    </MDBCol>
                                    <MDBCol size={8}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Fresh Food</h3>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol >
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                <Link to="/Menu">
                                    <MDBBtn href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                    <MDBCol className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <MDBCol>
                            <MDBCol>
                                <MDBRow>
                                    <MDBCol size={4} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number2} alt="number-2" className="img-fluid" />
                                    </MDBCol>
                                    <MDBCol size={8}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Gujarati</h3>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol >
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                <Link to="/Menu">
                                    <MDBBtn href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                    <MDBCol className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <MDBCol>
                            <MDBCol>
                                <MDBRow>
                                    <MDBCol size={4} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number3} alt="number-3" className="img-fluid" />
                                    </MDBCol>
                                    <MDBCol size={8}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Punjabi</h3>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol >
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                <Link to="/Menu">
                                    <MDBBtn href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                    <MDBCol className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <MDBCol>
                            <MDBCol>
                                <MDBRow>
                                    <MDBCol size={4} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number4} alt="number-4" className="img-fluid" />
                                    </MDBCol>
                                    <MDBCol size={8}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Chinese</h3>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol >
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                <Link to="/Menu">
                                    <MDBBtn href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                    <MDBCol className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <MDBCol>
                            <MDBCol>
                                <MDBRow>
                                    <MDBCol size={4} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                        <img src={number5} alt="number-5" className="img-fluid" />
                                    </MDBCol>
                                    <MDBCol size={8}>
                                        <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Pasta & Pizza</h3>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol>
                                <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                                <Link to="/Menu">
                                    <MDBBtn href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                    <MDBCol className="menu-inner p-4" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <MDBCol>
                            <MDBRow>
                                <MDBCol size={4} className="menu-count" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000">
                                    <img src={number6} alt="number-6" className="img-fluid" />
                                </MDBCol>
                                <MDBCol size={8}>
                                    <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" className=" mt-lg-3">Special</h3>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol >
                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text. </p>
                            <Link to="/Menu">
                                <MDBBtn href="#" variant="outline-none" className="border border-0 p-0 border-bottom rounded-0 text-info bg-transparent shadow-0">LEARN MORE</MDBBtn>
                            </Link>                        
                        </MDBCol>
                    </MDBCol>
                </MDBContainer>
            </MDBContainer>

            {/* devilery-service section start */}
            <MDBContainer fluid id="devilery-service">
                <MDBRow>
                    <MDBCol xs sm md lg>

                    </MDBCol>
                    <MDBCol sm={2} md={1} lg={1} className="bg-danger service-circle rounded-circle m-5" align="end" data-aos="zoom-out" data-aos-duration="1500" >
                    </MDBCol>
                </MDBRow>
                <div className="service-bg 
                bg-danger">
                    <MDBCol>
                        <img src={deliverfood} alt="tff" className="img-fluid w-75" data-aos="fade-right" style={{ animation: "fadeInLeftBig 2s linear 1" }} />
                    </MDBCol>
                    <MDBCol xs={10} sm={8} md={6} lg={5} className=" service-card p-5 text-bg-dark" data-aos="zoom-up" data-aos-duration="1000" data-aos-delay="1500">
                        <h1>Our Service</h1>
                        <p>Id faucibus nisl tincidunt eget nullam non nisi. Amet dictum sit amet justo donec enim diam vulputate ut. Non quam lacus suspendisse faucibus interdum. Ac ut consequat semper viverra nam. Auctor augue mauris augue neque gravida in fermentum et.</p>
                        <MDBBtn href="#" variant="outline-primary" className="rounded-pill">LEARN MORE</MDBBtn>
                    </MDBCol>
                </div>
            </MDBContainer>

            {/* fastfood section start */}
            <MDBContainer fluid id="fastfood">
                <MDBRow>
                    <MDBCol xs={10} sm={10} md={8} lg={8} className="p-5 text-white">
                        <MDBCol className="american">
                            <h3 className="ms-1" data-aos="flip-up" data-aos-duration="1000">MUST - TRY INDIAN FOOD</h3>
                            <h1 className="mt-3" data-aos="fade-right" data-aos-duration="1000">Indian Food</h1>
                            <MDBBtn href="#" variant="danger" className="rounded-pill mt-3 ms-1 MDBBtn">LEARN MORE</MDBBtn>
                        </MDBCol>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBContainer id="burger" className="pb-5">
                <MDBCol xs={10} sm={10} md={8} lg={8} className="mx-auto text-center mt-5">
                    <h1>Burger Menu</h1>
                    <p className="m-3">You're gonna need two hands to hold our toasted buns. Our fresh, juicy burgers are served up medium-well with a side of fries and a whole lot of flavor.</p>
                </MDBCol>
                <MDBContainer className=" burger-items">
                    <MDBRow>
                        <MDBCol xs={12} sm={12} md={6} lg={6} className="burger-box burger1 m-0 p-0" data-aos="fade-right" data-aos-duration="1000">
                            <MDBCol className="text-white burger-info text-center">
                                <h2>Double Burger</h2>
                                <h5 className="text-danger">$ 8.50</h5>
                                <MDBBtn variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </MDBBtn>
                            </MDBCol>
                        </MDBCol>
                        <MDBCol xs={12} sm={12} md={6} lg={6} className="burger-box burger2 mt-4 mt-md-0 m-0 p-0" data-aos="fade-left" data-aos-duration="1000">
                            <MDBCol className="text-white burger-info text-center">
                                <h2>Farm House</h2>
                                <h5 className="text-danger">$ 7.50</h5>
                                <MDBBtn variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </MDBBtn>
                            </MDBCol>
                        </MDBCol>
                        <MDBCol xs={12} sm={12} md={6} lg={6} className="burger-box burger3 mt-4 m-0 p-0" data-aos="fade-right" data-aos-duration="1000">
                            <MDBCol className="text-white burger-info text-center">
                                <h2>Bacon Burger</h2>
                                <h5 className="text-danger">$ 8.00</h5>
                                <MDBBtn variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </MDBBtn>
                            </MDBCol>
                        </MDBCol>
                        <MDBCol xs={12} sm={12} md={6} lg={6} className="burger-box burger4 mt-4 m-0 p-0" data-aos="fade-left" data-aos-duration="1000">
                            <MDBCol className="text-white burger-info text-center">
                                <h2>Special Offer</h2>
                                <h5 className="text-danger">$ 15.00</h5>
                                <MDBBtn variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </MDBBtn>
                            </MDBCol>
                        </MDBCol>
                        <MDBCol xs={12} sm={12} md={6} lg={6} className="burger-box burger5 mt-4 m-0 p-0" data-aos="fade-right" data-aos-duration="1000">
                            <MDBCol className="text-white burger-info text-center">
                                <h2>Black Burger</h2>
                                <h5 className="text-danger">$ 11.00</h5>
                                <MDBBtn variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </MDBBtn>
                            </MDBCol>
                        </MDBCol>
                        <MDBCol xs={12} sm={12} md={6} lg={6} className="burger-box burger6 mt-4 m-0 p-0" data-aos="fade-left" data-aos-duration="1000">
                            <MDBCol className="text-white burger-info text-center">
                                <h2>king Burger</h2>
                                <h5 className="text-danger">$ 11.00</h5>
                                <MDBBtn variant="danger" className="rounded-pill">
                                    ADD TO CART
                                </MDBBtn>
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>

            {/* slider section start */}
            <MDBContainer fluid id="slider">
                <MDBRow className="p-5">
                    <MDBCol md={5} lg={5} className="bg-white rounded-2 text-center">
                        <MDBCol id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <MDBCol className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </MDBCol>
                            <MDBCol className="carousel-inner">
                                <MDBCol className="carousel-item active">
                                    <MDBCol xs={6} sm={6} md lg={3} className="mx-auto">
                                        <img src={burger} className="img-fluid" alt="Burger" />
                                    </MDBCol>
                                    <h3 className="text-danger">Burger</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique officiis enim eos recusandae veniam animi ut minus, tenetur, a dignissimos vitae voluptatibus aliquid magnam ipsam repudiandae ipsum id rerum?</p>
                                </MDBCol>
                                <MDBCol className="carousel-item">
                                    <MDBCol xs={6} sm={6} md lg={3} className="mx-auto">
                                        <img src={pizza} className="img-fluid" alt="Burger" />
                                    </MDBCol>
                                    <h3 className="text-danger">Pizza & Pasta</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique officiis enim eos recusandae veniam animi ut minus, tenetur, a dignissimos vitae voluptatibus aliquid magnam ipsam repudiandae ipsum id rerum?</p>
                                </MDBCol>
                            </MDBCol>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </MDBCol>
                    </MDBCol>
                </MDBRow>
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
