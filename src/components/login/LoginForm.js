import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TextField from '../../shared/TextField';
import '../../assets/css/login-form.css';

const LoginForm = () => {

    const validValues = {
        email: '',
        password: ''
    };

    const errorSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const loginHandler = (values) => {
        console.log({ values });
    }

    return (
        <Formik
            initialValues={validValues}
            validationSchema={errorSchema}
            onSubmit={loginHandler}
        >
            {(formik) => (
                <React.Fragment>
                    <Form>
                        <TextField label='Email' name='email' type='email' />
                        <TextField label='Password' name='password' type='password' />
                        <div className='text-center'>
                            <Button type='submit' className='px-5 btn custom-btn'>
                                Login
                            </Button>
                        </div>
                    </Form>
                </React.Fragment>
            )}
        </Formik>
    )
}

export default LoginForm;
