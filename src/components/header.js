import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core'
import avatar from '../avatar.png';
import Typed from 'react-typed';
import {makeStyles} from '@material-ui/core/styles'

// CSS Styles

const useStyles = makeStyles((theme) => ({
    avatar : {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),

    },
    title : {
        color: "tomato"
    },
    subTitle : {
        color: "tan",
        marginBottom : "3rem"
    }, 
    typedContainer : {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform : "translate(-50%, -50%)",
        width: "100vw",
        textAlign : "center",
        zIndex : 1,
        
    }
}))


const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Hero" ></Avatar>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Mustapha Zeroual"]} typeSpeed={60} loop></Typed>
            </Typography>
            <Typography className={classes.subTitle} variant="h5">
                <Typed strings={["Web Design", "Web Developement", "MERN Stack"]} typeSpeed={40} backSpeed={60} loop ></Typed>
            </Typography>
        </Box>
    )
}

export default Header;
