import React from "react";
import {Typography,Toolbar,AppBar, makeStyles, List, Link, Button, Box, IconButton,} from '@material-ui/core'
import {MenuBook} from "@material-ui/icons"
import {Menu} from "@material-ui/icons"
import { height } from "@mui/system";



const useStyles = makeStyles((theme) =>({

    contenedor:{
        paddingTop: theme.spacing(1),
        paddingLeft:  theme.spacing(6),
        paddingRight:  theme.spacing(6),
        boxShadow:"0px 0px 0px",
        backgroundColor:"#fff",
        height:80,
        [theme.breakpoints.down("sm")]:{
                    paddingLeft: theme.spacing(1),
                    paddingRight: theme.spacing(1),
                },
    },

    subContenedor:{
        justifyContent:"space-between",
        alignItems:"center",
    
        },



    nav:{
        display:"flex",
        [theme.breakpoints.down(740)]:{
            display:"none",
        },
    
    },
    clink:{
        marginLeft: theme.spacing(6),
        [theme.breakpoints.down("md")]:{
            marginLeft: theme.spacing(4),
        },
        [theme.breakpoints.down("sm")]:{
            marginLeft: theme.spacing(2),
        },
        [theme.breakpoints.down(625)]:{
            marginLeft: theme.spacing(1),
        },

    },
    link:{
        fontSize:18,
        color:"#111B",
        "&:hover":{
            borderBottom:"1px solid",
            color:"blue",
        },
        [theme.breakpoints.down("sm")]:{
            fontSize:15,
        },
    },
    logo:{
        display:"flex",
        gap:6,
        alignItems:"center",
        fontSize:8,
    
    },
    titulo:{
        fontWeight:900,
        fontSize:"3em",
        [theme.breakpoints.down("sm")]:{
            fontSize:20,
        },

    },
    boton:{
        borderRadius:"200px",
        padding:"13px 42px",
        border:"1px solid",
        boxShadow: "0px 0px 83px -21px rgba(103,103,224,1)",
        [theme.breakpoints.down("sm")]:{
            padding:"8px 23.6px",
        },
       
        [theme.breakpoints.down(740)]:{
            display:"none",
        }
    },
  
    iconoResposivo:{
        display:"none",
        [theme.breakpoints.down(740)]:{
            display:"flex",
        }
            
    },



}));


const Encabezado = () => {

    const classes = useStyles();

    return(
        <AppBar position="fixed" color="default" className={classes.contenedor}>
          <Toolbar className={classes.subContenedor}>
            <Box className={classes.logo}> 
                <MenuBook fontSize="large" color="primary"/>
                <Typography variant="h6" className={classes.titulo}>
                    EduLearn
                </Typography>
            </Box>
           
            <List component="nav" className={classes.nav}>
                <Typography variant="body2" className={classes.clink}>
                    <Link href="#" color="inherit" className={classes.link} style={{textDecoration:"none",}}>
                        Home
                    </Link>
                </Typography>
                <Typography variant="body2" className={classes.clink}>
                    <Link href="#" color="inherit" className={classes.link} style={{textDecoration:"none",}}>
                        Courses
                    </Link>
                </Typography>
                <Typography variant="body2" className={classes.clink}>
                    <Link href="#" color="inherit" className={classes.link} style={{textDecoration:"none",}}>
                        Mentors
                    </Link>
                </Typography>
                <Typography variant="body2" className={classes.clink} >
                    <Link href="#" color="inherit" className={classes.link} style={{textDecoration:"none",}}>
                        Parcing
                    </Link>
                </Typography>
                <Typography variant="body2" className={classes.clink}>
                    <Link href="#" color="inherit" className={classes.link} style={{textDecoration:"none",}}>
                        Blog
                    </Link>
                </Typography>

            </List>
            <Button variant="outlined" color="primary" className={classes.boton} size="mediun">
                <Typography variant="caption" color="inherit" className={classes.textBoton}>
                    Register
                </Typography>
              
            </Button>

            <IconButton className={classes.iconoResposivo}>
                <Menu  fontSize="large"/>
            </IconButton>
            
           
          </Toolbar>
        </AppBar>
    );
};

export default Encabezado;