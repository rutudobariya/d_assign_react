import React, { useEffect, useState } from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  const [data, setData] = useState(0);

  useEffect(
    () => {
      fetch("http://localhost:4000/portfolio")
        .then((res) => res.json(res))
        .then((data) => setData(data));
    }, []);
  return (
    <>

      <Container>
        <Row>
        <h1 className='text-center mb-5'>Product Detail</h1>
        {data && data.map((item) => {
              return (
                <>
                
          <Col md={4}>
         
            
                  <Card>
                    <div className='card-header'>
                      <h2 className='text-center fw-bold'>{item.title}</h2>
                      <img className='img-fluid' src={item.url} alt="not found" />
                    </div>
                    <div className='card-body'>
                      <p align="justify">{item.description}</p>
                    </div>
                    <div className='card-footer'>
                      <h4>{item.productname}</h4>
                    </div>
                  </Card>
               
          </Col>
          </>
              )
            })

            }
        </Row>
      </Container>


    </>
  );
}

export default App;
