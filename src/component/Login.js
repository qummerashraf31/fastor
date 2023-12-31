import React, { useState } from 'react'
import { Grid } from '@mui/material'
import styles from "../styles/Login.module.css"
import { Link } from "react-router-dom";


function Login() {

    const [emailText, setEmailText] = useState('');
    console.log('emailtext', emailText)
    return (

        <>
            <Grid container className={styles.loginContainer} >
                <div className={styles.loginCard}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <p className={styles.loginHeading}>Enter Your Mobile Number</p>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <p className={styles.loginSubheading}>We will send you the 4 digit verification code</p>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <input
                            type='email'
                            onChange={(e) => setEmailText(e.target.value)}
                            label="enter your email"
                            className={styles.inputBox}
                            maxLength={10}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Link to="/otp" className={styles.button} aria-disabled={true}>Send Code</Link>
                    </Grid>
                </div>
            </Grid>
        </>
    )
}

export default Login