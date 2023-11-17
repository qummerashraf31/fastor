import React, { useEffect, useRef, useState } from 'react'
import { Grid } from '@mui/material'
import styles from "../styles/Login.module.css"
import { Link } from "react-router-dom";

function Otpscreen() {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [activeIndex, setActiveIndex] = useState(0)
    const otpRef = useRef(null)

    const handleOTPChange = (e, index) => {

        const { value } = e.target;
        console.log("value", value)
        const tempOTP = [...otp];
        tempOTP[index] = value.substring(value.length - 1);
        if (!value) {
            setActiveIndex(index - 1)
        } else {
            setActiveIndex(index + 1)
        }
        setOtp(tempOTP)
    }

    useEffect(() => {
        otpRef.current?.focus();
    }, [activeIndex])

    return (
        <>
            <Grid container className={styles.loginContainer} >
                <div className={styles.loginCard}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <p className={styles.loginHeading}>OTP Verification</p>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <p className={styles.loginSubheading}>Enter the verification code we just sent on your Mobile Number.</p>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div style={{
                            display: 'flex'
                        }}>
                            {
                                otp.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <input
                                            className={styles.OtpInputBox}
                                            onChange={(e) => handleOTPChange(e, index)}
                                            ref={index === activeIndex ? otpRef : null}
                                            value={item}
                                            type='number'
                                        />
                                    </React.Fragment>
                                ))
                            }

                        </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        <Link to="/list" className={styles.button}>Send Code</Link>

                    </Grid>
                </div>
            </Grid>
        </>
    )
}

export default Otpscreen