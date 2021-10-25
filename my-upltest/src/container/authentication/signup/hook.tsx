import React from 'react'
import { useFormik } from 'formik';
// import { useState } from 'react';
import * as Yup from 'yup';

const ForSignin = () => {

    //formik validation
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname:'',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object().shape({
            fname: Yup.string()
                .min(2, 'Name is Too Short!')
                .max(30, 'Name is Too Long!')
                .required('User name field is required')
                .matches(
                    /\w/,
                    "Please enter valid detail"
                ),
            lname: Yup.string()
                .min(2, 'Name is Too Short!')
                .max(30, 'Name is Too Long!')
                .required('User name field is required')
                .matches(
                    /\w/,
                    "Please enter valid detail"
                ),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email field cannot be empty"),
            password: Yup.string()
                .min(8, "Must be 8 or more than 8 characters")
                .required("Password field is Required")
                .matches(
                    /\w/,
                    "Please enter valid password"
                ),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password must match')
                .required("Password field is required")
                .matches(
                    /\w/,
                    "Please enter valid password"
                ),
        }),
        onSubmit: (values) => {
            let data = {
                //...values,
                fname: values.fname,
                lname: values.lname,
                email: values.email,
                password: values.password,
            }
            console.log(data);
        },
    });

    return {
        formik
    }


}

export default ForSignin
