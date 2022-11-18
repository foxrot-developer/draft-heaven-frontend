import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TextField from '../../shared/TextField';
import '../../assets/css/login-form.css';
import { userRegistration } from '../../store/StoreIndex';

const RegistrationForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validValues = {
        fullName: '',
        email: '',
        password: ''
    };

    const errorSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required'),
        fullName: Yup.string().required('Name is required')
    });

    const registrationHandler = (values) => {
        const data = {
            name: values.fullName,
            email: values.email,
            password: values.password
        };

        dispatch(userRegistration(data, navigate));
    }

    return (
        <Formik
            initialValues={validValues}
            validationSchema={errorSchema}
            onSubmit={registrationHandler}
        >
            {(formik) => (
                <React.Fragment>
                    <Form>
                        <TextField label='Name' name='fullName' type='text' />
                        <TextField label='Email' name='email' type='email' />
                        <TextField label='Password' name='password' type='password' />
                        <div className='text-center'>
                            <Button type='submit' className='px-5 btn custom-btn'>
                                Register
                            </Button>
                        </div>
                    </Form>
                </React.Fragment>
            )}
        </Formik>
    )
}

export default RegistrationForm;
