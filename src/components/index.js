import React from 'react'
import NavBar from './NavBar';
import Header from './header';
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/styles';
import Resume from './Resume';


const usestyles = makeStyles((theme) => ({
    particlesCanva : {
        position: "absolute",
        opacity : 0.3
    }
}));

const Home = () => {
    const classes = usestyles();
    return (
        <>
           
            <NavBar />
            <Header />
            <Particles 
                canvasClassName={classes.particlesCanva}
                params={{
                    particles:{
                        number : {
                            value : 45,
                            density : {
                                enable : true,
                                value_area : 900
                            }
                        },
                        shape : {
                            type: "circle",
                            stroke: {
                                width:1,
                                color : "tomato"
                            }
                        },
                        size: {
                            value : 10,
                            random : true,
                            anim: {
                                enable : true,
                                speed : 10,
                                size_min : 0.1,
                                sync: true
                            }
                        },
                        opacity : {
                            value: 1,
                            random : true,
                            animation : {
                                enable : true,
                                speed : 1,
                                opacity_min : 0.1,
                                sync : true
                            }
                        }
                        
                    }
                }}
            />
        </>
    )
}

export default Home
