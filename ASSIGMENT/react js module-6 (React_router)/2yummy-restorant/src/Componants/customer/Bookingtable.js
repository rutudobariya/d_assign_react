import React, { Fragment } from 'react';
import PostertopApp from './Postertop';
import { MDBContainer, MDBRow , MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import FooterApp from './Footer';
function BookingTableApp() {
    return (
        <Fragment>
            <PostertopApp name="Book Table"/>
            <MDBContainer id='booktable' className='mb-5'>
            <MDBCol className='position-relative'>
                <h4 className='mt-5 text-danger' id='oneline'>Reservation</h4>
            </MDBCol>
                <h1 className='mt-3'>Book Table</h1>
                <MDBRow className='mt-4'>
                    <MDBCol xs={10} sm={10} md={4} lg={4} className='mx-auto'>
                        <input type='text' placeholder='Your Name' id='name' name='name' className='rounded-0 p-2 w-100' />
                    </MDBCol>
                    <MDBCol xs={10} sm={10} md={4} lg={4} className='mx-auto'>
                        <input type='email' placeholder='Your Email' id='email' name='email' className='rounded-0 p-2 w-100' />
                    </MDBCol>
                    <MDBCol xs={10} sm={10} md={4} lg={4} className='mx-auto'>
                        <input type='text' placeholder='Your Number' id='phoneno' name='phoneno' className='rounded-0 p-2 w-100'/>
                    </MDBCol>
                    <MDBCol xs={10} sm={10} md={4} lg={4} className='mx-auto mt-md-4'>
                        <input type='date' placeholder='Date' id='date' name='date' className='rounded-0 p-2 w-100' />
                    </MDBCol>
                    <MDBCol xs={10} sm={10} md={4} lg={4} className='mx-auto mt-md-4'>
                        <input type='time' placeholder='Time' id='time' name='time' className='rounded-0 p-2 w-100' />
                    </MDBCol>
                    <MDBCol xs={10} sm={10} md={4} lg={4} className='mx-auto mt-md-4'>
                        <input type='number' placeholder='Number of People' id='number' name='number' className='rounded-0 p-2 w-100' />
                    </MDBCol>
                    <MDBCol xs={12} sm={12} md={12} lg={12} className='mt-md-4'>
                        <textarea rows={6} placeholder='Message' id='name' name='name' className='p-2 w-100' />
                    </MDBCol>
                    <MDBCol size={12} className='mt-md-4' align="center">
                        <MDBBtn type='submit' className=' bg-danger rounded-pill border border-0'>Book a Table</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


            {/* footer start */}
            <FooterApp />
        </Fragment>
    )
}

export default BookingTableApp;
