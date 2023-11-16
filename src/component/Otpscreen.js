import React, { useState } from 'react'
import { Grid, TextField } from '@mui/material'
import styles from "../styles/Login.module.css"
import { Link } from "react-router-dom";

function Otpscreen() {
    const [otp, setOtp] = useState([]);
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
                            onChange={(e) => setOtp(e.target.value)}
                            label="enter your email"
                            className={styles.emailInput}
                        />

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        <Link to="/Otpscreen" className={styles.button}>Send Code</Link>

                    </Grid>
                </div>
            </Grid>
        </>
    )
}

export default Otpscreen