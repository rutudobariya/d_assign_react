import React, { useRef } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Col, Button, Form, InputGroup, Row, Container } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

const Attendance = () => {

    // FORM VALIDATION
    const { Formik } = formik;
    const schema = yup.object().shape({
        studentname: yup.string().required(),
        state: yup.string().required(),
        standerd: yup.string().required(),
        radio: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });


    // ADD DATA IN API

    const studentname = useRef("");
    const standard = useRef("");
    const attend = useRef("");
    const enno = useRef("");

    const AddData = () => {
        const insert = {
            studentname: studentname.current.value,
            standard: standard.current.value,
            attend: attend.current.value,
            enno: enno.current.value
        }

        axios.post("http://localhost:3220/StudentData", insert)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Attedance',
                    text: 'Added Successfully',
                })
                window.location = "/"
            });
    }


    return (
        <Container fluid="true" className='p-5 shadow' id='attendance'>
            <div className='attendanceform shadow p-5'>
                <Col className='mb-4' align="center">
                    <h2>Attendance Form</h2>
                    <hr className='w-50 border border-3 border-danger rounded-pill' />
                </Col>

                <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                        studentname: '',
                        standard: '',
                        attend: '',
                        enno:'',
                    }}
                >
                    {({ handleSubmit, handleChange, values, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>

                            <Form.Group className='mb-3'>
                                <Form.Label>Student Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Student Name"
                                    name="studentname"
                                    value={values.studentname}
                                    onChange={handleChange}
                                    isInvalid={!!errors.studentname}
                                    ref={studentname}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.studentname}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Standard</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Standard"
                                    name="standard"
                                    min={5}
                                    max={12}
                                    value={values.standard}
                                    onChange={handleChange}
                                    isInvalid={!!errors.standard}
                                    ref={standard}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.standard}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Enrollment Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enrollment Number"
                                    name="enno"
                                    value={values.enno}
                                    onChange={handleChange}
                                    isInvalid={!!errors.enno}
                                    maxLength={8}
                                    ref={enno}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.enno}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Attendance</Form.Label>
                                <Form.Select
                                    type="number"
                                    placeholder="Attendance"
                                    name="attend"
                                    value={values.attend}
                                    onChange={handleChange}
                                    isInvalid={!!errors.attend}
                                    ref={attend}
                                >
                                    <option>Attendance</option>
                                    <option value="Present" id='red'>Present</option>
                                    <option value="Absent" id='green'>Absent</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.attend}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit" onClick={AddData} className='form-control mt-3'>Add Attendance</Button> 


                            <Button type='button' href='/admin-login/studentattendence' className='showbtn'> Show Attendance &#10596; </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>

    )
}

export default Attendance;
