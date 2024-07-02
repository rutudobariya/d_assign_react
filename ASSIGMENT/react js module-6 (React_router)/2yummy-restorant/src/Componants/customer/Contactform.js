import React, { Fragment, useEffect, useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { errors } from 'jquery';

export default function ContactformApp() {

    // const initialValue = {name : " " , email : " " , subject : " "};
    // const[formValues,setFormValues] = useState(initialValue);
    // const[formErrors,setFormErrors] = useState({});
    // const[isSubmit,setisSubmit] = useState(false);


    // const handleChange = (element) =>{
    //     const { name , value } = element.target;
    //     setFormValues({...formValues, [name]: value });
    // };

    // const handleSubmit = (element) => {
    //     element.preventDefault();
    //     setFormErrors(validate(formValues));
    //     setisSubmit(true);
    // };

    // useEffect(() => {
    //     console.log(formErrors);
    //     if(Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues);
    //     }
    // },[formErrors])

    // const validate =(values) =>{
    //     const errors = {}
    //     const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    //     if (!values.name){
    //         errors.name = "Please Enter Your Name"
    //     }
    //     if (!values.email){
    //         errors.email = "Please Enter Your Name"
    //     }
    //     else if (!regex.test(values.email)){
    //         errors.email =" Please Enter A Valid Email Address"
    //     }
    //     if (!values.subject){
    //         errors.subject = "Please Enter Your Name"
    //     }
    //     return errors;
    // }


    const initialValues = { name: "", email: "", submit: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "Pleas Enter Your Name";
        }
        if (!values.email) {
            errors.email = "Pleas Enter Your Email";
        } else if (!regex.test(values.email)) {
            errors.email = "Please Enter a Valid Email Address";
        }
        if (!values.subject) {
            errors.submit = "Pleas Enter Your Subject";
        }
        return errors;
    };

return (
    <Fragment>
        <form className="detailsform " onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
                className='p-2 rounded-0'
                data-aos="fade-up" data-aos-duration="1000" /> <br />
            <span>{formErrors.name}</span>
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                className='mt-3 p-2 rounded-0'
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" /> <br />
            <span>{formErrors.email}</span>
            <input 
                type="text"
                name="subject"
                placeholder="Subject"
                value={formValues.subject}
                onChange={handleChange}
                className='mt-3 p-2 rounded-0'
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" /> <br />
            
            <span>{formErrors.submit}</span>
            <textarea
                cols={10} rows={5}
                name='message'
                placeholder='Message'
                className='mt-3 p-2 w-100'
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
            </textarea>
            <MDBBtn type='submit' className="mt-3 p-3 border border-0 rounded-0 bg-danger w-100">Submit</MDBBtn>
        </form>
    </Fragment>
)
}
