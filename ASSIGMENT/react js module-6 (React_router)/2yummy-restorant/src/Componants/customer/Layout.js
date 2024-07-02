import React, { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function LayoutApp() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <Fragment>
      <MDBNavbar expand='lg' id='navigation'>
        <MDBContainer >
          <MDBNavbarBrand className='brand-logo'> <Link to="/Home"><h1>2<sub>Yumm</sub></h1></Link></MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' color='danger' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='w-auto ms-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active>
                  <Link aria-current='page' to="/Home">Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink to="/About">
                  <Link to="/About">About Us</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Service
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>
                      <Link to="/Bookingtable"> Booking </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Link to="/Menu"> Menu</Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to="/Contactus">Contact Us</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem className='mx-sm-suto'>
                <Link to="/Bookingtable">
                  <MDBBtn className='btn-outline-warning bg-light '>
                    Book Table
                  </MDBBtn>
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <Outlet />
    </Fragment>
  );
}