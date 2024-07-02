import React, { useEffect, useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Col, Button, Form, InputGroup, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateAttendance = () => {

    // ADD DATA IN API
    const [adddata, setAdddata] = useState("");
    useEffect(() => {
        axios.get('http://localhost:3220/StudentData')
            .then((response) => {
                setAdddata(response.data);
            })
    }, [])

    // UPDATA DATA IN API
    const studentname = useRef("");
    const standard = useRef("");
    const attend = useRef("");
    const enno = useRef("");
    const Navigate = useNavigate("");
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3220/StudentData/${id}`)
            .then((response) => {
                // fetch all data fro update
                studentname.current.value = response.data.studentname;
                standard.current.value = response.data.standard;
                attend.current.value = response.data.attend;
                enno.current.value = response.data.enno;
            })
    }, [])

    const UpdateData = () => {
        const update = {
            studentname: studentname.current.value,
            standard: standard.current.value,
            attend: attend.current.value,
            enno: enno.current.value
        }

        axios.put(`http://localhost:3220/StudentData/${id}`, update)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Attedance',
                    text: 'Update Successfully',
                })
            });
        Navigate("/admin-login/studentattendence")
    }




    return (
        <Container fluid="true" className='p-5 shadow' id='updateattendance'>
            <div className='attendanceform shadow p-5'>
                <Col className='mb-4' align="center">
                    <h2>Update Attendance</h2>
                    <hr className='w-50 border border-3 border-danger rounded-pill' />
                </Col>
                        <Form >
                            <Form.Group className='mb-3'>
                                <Form.Label>Student Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Student Name"
                                    name="studentname"
                                    ref={studentname}
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Standard</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Standard"
                                    name="standard"
                                    min={5}
                                    max={12}
                                    ref={standard}
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Enrollment Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enrollment Number"
                                    name="enno"
                                    maxLength={8}
                                    ref={enno}
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Attendance</Form.Label>
                                <Form.Select
                                    type="number"
                                    placeholder="Attendance"
                                    name="attend"
                                    ref={attend}
                                >
                                    <option>Attendance</option>
                                    <option value="Present" id='red'>Present</option>
                                    <option value="Absent" id='green'>Absent</option>
                                </Form.Select>
                            </Form.Group>

                            <Button type="submit" variant='success' onClick={UpdateData} className='form-control mt-3'>Update Attendance</Button>
                        </Form>
                </div>
        </Container>

    )
}

export default UpdateAttendance;
