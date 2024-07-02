import React, { useEffect, useRef, useState } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Button, Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import swal from "sweetalert";


export default function App() {

  // FOR MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const Taskname = useRef("");
  const Assigndate = useRef("");


  // SAVE DATA IN API
  const SanDdata = () => {
    const insert = {
      Taskname: Taskname.current.value,
      Assigndate: Assigndate.current.value
    }

    axios.post("http://localhost:3200/Task", insert)
      .then(() => {
        swal("Task Added Successfully")
        window.location = "/"
      });
  }


  //FATCH DATA FROM API IN WEBPAGE
  const [display, setDisplay] = useState([0]);

  useEffect = () => {
    axios.get("http://localhost:3200/Task")
      .then(res => {
        setDisplay(res.data)
      }, [])
  }


  return (
    <div>

      <Container fluid="true" className=' p-5'>
        <Row>
          <Col className="col-5 p-5 addtask rounded-3 mx-auto">
            <Col>
              <h2>Task Manager</h2>
            </Col>
            <Col className='mt-4'>
              <Button variant='success' type='button' onClick={handleShow}>Add Task</Button>
            </Col>
          </Col>
          <Col className="col-6">
            <table className='w-100 rounded-3'>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>TaskName</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
            { display && display.map((item) => {
              return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Taskname}</td>
                <td>{item.Assigndate}</td>
              </tr>
              )
            })}
            </tbody>
            </table>
          </Col>
        </Row>
      </Container>


      {/* MODAL */}
      <Modal show={show} onHide={handleClose} className='modal'>
        <Modal.Header>
          <Modal.Title>Add Task</Modal.Title>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>

        <div className='p-3'>
          <label>TaskName</label>
          <input type='text' placeholder='TaskName' className='form-control p-2 mt-2'  ref={Taskname}/>
        </div>

        <div className='p-3'>
          <label>Date</label>
          <input type='date' placeholder='TaskName' className='form-control p-2 mt-2' ref={Assigndate} />
        </div>

        <div className='p-3'>
          <Button type='button' className='form-control' onClick={SanDdata}>Add data</Button>
        </div>

      </Modal>

    </div>
  )
}
