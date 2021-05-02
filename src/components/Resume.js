import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, Box, } from '@material-ui/core';
import NavBar from './NavBar';

const useStyles = makeStyles(theme => ({
    mainConatiner : {
        backgroundColor: "#233"
    },
    timeLine : {
        position : "relative",
        padding: "1rem",
        margin : '0 auto',
        //backgroundColor : "cyan",
        '&:before' : {
            content : "''",
            position: "absolute",
            height: "100%",
            border : '1px solid tan',
            right : '40px',
            top:0

        },
        '&:after' : {
            content : "''",
            display : "table",
            //backgroundColor : "blue",
            //color:"red",
            clear : "both",

        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            //backgroundColor:"red",
            "&:before" : {
                left : "calc(50% - 1px)",
                right : "auto"
            }
        }
    },
    timeLineItem : {
        padding: '1rem',
        borderBottom : "2px solid tan",
        position : "relative",
        marging : '1rem 3rem 1rem 1rem',
        width : "90%",
        //backgroundColor : "lightblue",
        clear : 'both',
        "&:after" : {
            content : "''",
            position : 'absolute',
        },
        "&:before" : {
            content : "''",
            position : 'absolute',
            right : "-0.625rem",
            top : "calc(20% - 5px)",
            borderStyle : 'solid',
            borderColor : "tomato tomato transparent transparent",
            borderWidth : '0.625rem',
            transform : "rotate(45deg)"
        },
        [theme.breakpoints.up("md")] : {
            width : "44%",
            margin : "1rem",
            //backgroundColor:"cyan",
            
            
            "&:nth-of-type(2n)" : {
                float : "right",
                margin : "1rem",
                borderColor : "tan",
                //backgroundColor:"cyan"
            },
            
            "&:nth-of-type(2n):before" : {
                right: "auto",
                left : "-0.625rem",
                //right : "0.625rem",
                borderColor : "transparent transparent tomato tomato"
                //transform : "rotate(10deg)"
            }

        }
    },
    timeLineYear : {
        textAlign : "center",
        maxWidth : "9.375rem",
        margin : "0 3rem 0 auto",
        fontSize:"1.8rem",
        background: "tomato",
        color:"white",
        lineHeight: 1,
        padding : "0.5rem 0 1rem",
        "&:before" : {
            display:'none'
        },
        [theme.breakpoints.up('md')] : {
            
            margin : "0 auto",
            "&:nth-of-type(2n)" : {
                float : 'none',
                margin : "0 auto",

            },
            "&:nth-of-type(2n):before" : {
                display : 'none'
            }
        }

    },
    heading : {
        color: "tomato",
        padding: "3rem 0",
        textTransform : "uppercase"
    },
    subHeading : {
        padding: 0,
        color : "white",
        textTransform : "uppercase",
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
           <NavBar />
           
            <Box className={classes.mainConatiner} component="header">
                <Typography className={classes.heading} variant="h4" align="center" >
                    working experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2" >
                        2013
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading} >
                            web design
                        </Typography>
                        <Typography variant="body1" align="left" style={{color : "tomato", }} >
                            Company name where work
                        </Typography>
                        <Typography variant="subtitle" align="left" style={{color : "tan", }} >
                            lorum ipsum dolor sit amet consectetur
                        </Typography>
                    </Box>


                    <Typography className={`${classes.timeLineYear} ${classes.timeLineItem}`} variant="h2" >
                        2014
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading} >
                            senior web design
                        </Typography>
                        <Typography variant="body1" align="left" style={{color : "tomato", }} >
                            Company name where work
                        </Typography>
                        <Typography variant="subtitle" align="left" style={{color : "tan", }} >
                            lorum ipsum dolor sit amet consectetur
                        </Typography>
                    </Box>
                </Box>
                
                    
                
            </Box> 
        </>
    )
}

export default Resume;
