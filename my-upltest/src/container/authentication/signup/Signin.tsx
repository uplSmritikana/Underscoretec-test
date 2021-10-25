import { Button, IconButton, InputAdornment, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockIcon from '@material-ui/icons/Lock';
import './login.css'
import ForSignin from './hook';

const Signin = () => {
    
    const { formik,
    } = ForSignin();
    
    return (
        <div className="signin">
            <div className="signin_card">
                <Paper elevation={2} className="paperStyle_signin">
                    <h2>Sign In</h2>
                    <form onSubmit={formik.handleSubmit}>
                    <div className="form">
                        <TextField
                            id="fname"
                            label="First Name"
                            fullWidth
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fname}
                            error={formik.touched.fname && Boolean(formik.errors.fname)}
                            helperText={formik.touched.fname && formik.errors.fname}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <PersonIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} />
                    </div>
                    <div className="form">
                        <TextField
                            id="lname"
                            label="Last Name"
                            fullWidth
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lname}
                            error={formik.touched.lname && Boolean(formik.errors.lname)}
                            helperText={formik.touched.lname && formik.errors.lname}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <PersonIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} />
                    </div>
                    <div className="form">
                        <TextField
                            id="email"
                            label="Email"
                            fullWidth
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <AlternateEmailIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="form">
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            error={
                                formik.touched.password && Boolean(formik.errors.password)
                            }
                            helperText={formik.touched.password && formik.errors.password}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <LockIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                    <div className="form">
                        <Button className="form-btn" type={"submit"} color="primary" variant="contained" fullWidth >Sign In</Button>
                    </div>
                    <Typography align="center" >Already have an account?<Link className="form-link" to="/">Sign In</Link></Typography>
                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default Signin
