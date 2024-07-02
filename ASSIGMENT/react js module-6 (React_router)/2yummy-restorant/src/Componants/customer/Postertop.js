import React, { Fragment } from 'react';
import { MDBContainer,MDBCol } from 'mdb-react-ui-kit';

function PostertopApp(props) {
  return (
    <Fragment>
        <MDBContainer fluid className="p-5 text-center" id="pagename">
            <MDBCol >
                <h1 className="text-white" data-aos="fade-down" data-aos-duration="1000">{props.name}</h1>
            </MDBCol>
        </MDBContainer>
    </Fragment>
  )
}

export default PostertopApp;
