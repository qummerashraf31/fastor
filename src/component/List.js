import { Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "../styles/Description.module.css";

function List() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        axios({
            method: 'get',
            url: `https://staging.fastor.in/v1/m/restaurant?city_id=118`,
            headers: {
                Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM0MiIsImVtYWlsIjoiODI4NTgwNTQ1MkBmYXN0b3IuaW4iLCJwaG9uZSI6IjgyODU4MDU0NTIiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjMtMTEtMTZUMTg6NDc6MzAuMDAwWiIsImlhdCI6MTcwMDE2MDQ2OCwiZXhwIjoxNzA3NDE4MDY4fQ.QFoiJvIhCW8Dl6QW1nGq6jOZ5-lIspdUacF6ehvT-LY"}`,

            }
        }).then(res => {
            setData(res.data || []);
            // console.log(res.data)
            setIsLoading(true);

        })
    }, []);
    return (
        <Grid container>
            {isLoading && data.length > 0 ? data.map((item, ind) => (
                <>
                    <Grid container
                        onClick={() => navigate('/description', {
                            restaurantData: item
                        })}
                        key={ind}
                        className={styles.listCard}
                    >
                        <Grid item lg={4} md={4} sm={4} xs={4}>
                            <img
                                src={item?.images[0]?.url}
                                width={'100%'}
                            />
                        </Grid>
                        <Grid item lg={8} md={8} sm={8} xs={8} alignItems={'center'} display={'flex'}>
                            <Grid container textAlign={'left'} pl={'4%'}  >

                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <p className={styles.restaurantName}>{item?.restaurant_name}</p>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <p className={styles.restaurantAddress}>Cakes, Pastry, Pastas</p>
                                    <p className={styles.restaurantAddress}>Connaught Place. New Delhi</p>
                                    <p className={styles.trendOffer}>4 Offers Trending</p>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <p></p>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </>
            ))
                :
                <Typography>Loading.....</Typography>
            }

        </Grid>
    )
}

export default List