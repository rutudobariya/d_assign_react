import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Container>
        <Row>
          {data &&
            data.map((item) => {
              return (
                <>

                  <Col md={4} >
                    <Card>
                      <div className="card-header">
                        <div className="height">
                        <h1>{item.title}</h1>
                        </div>
                        <img className="img-fluid" src={item.image}></img>
                      </div>
                      <div className="card-body">
                        <h3> &#8377; {item.price}</h3>
                        <p>{item.description}</p>
                      </div>
                      <div className="card-footer">
                        <Button>Add Cart</Button>
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
