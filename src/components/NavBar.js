import React, {useState} from 'react';

import { 
    AppBar, Toolbar, 
    ListItem, IconButton, 
    ListItemText, Avatar, 
    Divider, List, 
    Typography, Box,
    CssBaseline, makeStyles,
    ListItemIcon
} from '@material-ui/core'

import { 
    ArrowBack, 
    AssignmentInd, 
    Home, Apps, 
    ContactMail 
} from '@material-ui/icons';
import avatar from '../avatar.png'; 
import  Drawer from '@material-ui/core/Drawer'

// CSS Styles
const useStyles = makeStyles((theme) => {
    return {
        menuSliderContainer: {
        width : 250,
        backgroundColor : "#511",
        height : '100%'
        },
        avatar : {
            
            display: "block",
            width:theme.spacing(13),
            height : theme.spacing(13),
            margin: "0.5rem auto",
            backgroundColor: "lightblue"
        },
        tanColor : {
            color : "tan",
        }
    }
});

const menuItems = [
    {
        itemComponent: <Home />,
        itemText : "Home"
    },
    {
        itemComponent: <AssignmentInd />,
        itemText : "Resume "
    },
    {
        itemComponent: <Apps />,
        itemText : "Portfolio"
    },
    {
        itemComponent: <ContactMail />,
        itemText : "Contact"
    },
]



const NavBar = () => {
     const [state, setState] = useState({
         right : false,
     });
     const togglerSlider = (open) => {
         setState({...state, right : open})
     }
    const classes = useStyles();
    const sideList = (slider) => (

            <Box onClick={() => {togglerSlider(false);}} className={classes.menuSliderContainer} component="div">
                <Avatar className={classes.avatar} src={avatar} alt="Hero" ></Avatar>
                <Divider></Divider>
                <List>
                {menuItems.map((item, key) => {
                    return (

                    <ListItem button key={key}>
                        <ListItemIcon className={classes.tanColor}>
                            {item.itemComponent}
                        </ListItemIcon>
                        <ListItemText className={classes.tanColor}  primary={item.itemText} />
                    </ListItem>
                    )
                })}
                </List>
            </Box>
    );
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={() => {togglerSlider(true);}} >
                            <ArrowBack style={{color: "tomato"}} />
                        </IconButton>
                        <Typography variant="h5" style={{color:"tan"}}>
                            Portfolio
                        </Typography>
                        <Drawer anchor="right" open={state.right} onClose={() => {togglerSlider(false);}}>
                            {sideList("right")}
                        </Drawer> 
                    </Toolbar>
                </AppBar>
                
            </Box>
        </>
    )
}

export default NavBar;
