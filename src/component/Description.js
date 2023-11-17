import { Grid } from '@mui/material'
import React from 'react'
import styles from "../styles/Description.module.css"
import { useLocation } from 'react-router-dom';
import fastorLogo from "../assests/logo.png"
import ShareIcon from '@mui/icons-material/Share';
import { RWebShare } from "react-web-share";

function Description() {
    const { data } = useLocation();
    console.log(data);

    function sharePage() {
    }
    return (
        <>
            <Grid container style={{
                position: 'relative'
            }}>

                <Grid item lg={12} md={12} sm={12} xs={12}>

                    <img
                        src='https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'

                        className={styles.descImg}

                    />
                    <img
                        src={fastorLogo}
                        className={styles.imposedLogo}

                    />

                </Grid>





                <div className={styles.cardContainer}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <p className={styles.restaurantName}>Lazy Bear</p>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>

                        <RWebShare
                            data={{
                                text: "Restaurant Description Page",
                                url: "/description",
                                title: "Fastor App",
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <ShareIcon
                                className={styles.shareIcon}
                                onClick={sharePage}
                            />
                        </RWebShare>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <p className={styles.restaurantAddress}>Connaught Place. New Delhi</p>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <p className={styles.restaurantDesc}>Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache</p>
                    </Grid>
                </div>

            </Grid>


        </>
    )
}

export default Description