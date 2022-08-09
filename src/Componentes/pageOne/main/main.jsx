import React from "react";
import { Avatar, Badge, Box, Grid, makeStyles, Typography, Button, ImageList} from "@material-ui/core"




const useStyles = makeStyles((theme) => ({
    contenedor:{
       height:"85vh",
        minHeight:750,
        paddingTop: theme.spacing(12),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        [theme.breakpoints.down("sm")]:{
            minHeight:620,
            paddingTop: theme.spacing(8),
          
        },
        [theme.breakpoints.down("xs")]:{
            paddingLeft: theme.spacing(1),
            minHeight:500,
            height:"60vh",
           

        },

       
     },

     cBox1:{
        paddingTop: theme.spacing(8),
        [theme.breakpoints.down("md")]:{
    
            paddingTop: theme.spacing(4),
        },
        [theme.breakpoints.down("sm")]:{
    
            paddingTop: theme.spacing(0),
        },
        [theme.breakpoints.down("xs")]:{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
        
                },
    },
    textIncial:{
        fontWeight:600,
        [theme.breakpoints.down(1565)]:{
            fontSize: 77,

        },
        [theme.breakpoints.down(1284)]:{
            fontSize: 54,

        },
        [theme.breakpoints.down("sm")]:{
    
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            
        },
        [theme.breakpoints.down("xs")]:{
            fontSize: 45,

        },
        [theme.breakpoints.down(440)]:{
            fontSize: 30,

        },
        
          
    },

    cTextSegundary:{
        display:"flex",
        flexDirection:"column",
        borderLeft:"2px solid #1115",
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        height:55,
        [theme.breakpoints.down("md")]:{
            fontSize:16,
        },
        [theme.breakpoints.down("sm")]:{
                alignItems:"center",
                borderRight:"2px solid #1115",
                marginTop: theme.spacing(3),
                paddingRight: theme.spacing(1),
        },

        
        

    },

    TextSegundary:{
        [theme.breakpoints.down("md")]:{
            fontSize:16,
        },
        [theme.breakpoints.down("sm")]:{
            fontSize: 11,

        },
        [theme.breakpoints.down(345)]:{
            fontSize: 10,

        },
    },

    cDecajaUltima:{
        marginTop: theme.spacing(8),
        display:"flex",
        gap:10,
        alignItems:"center  ",
        [theme.breakpoints.down("sm")]:{
            justifyContent:"center",
            marginTop: theme.spacing(6),
            flexDirection:"column",

            
        
    },
    

    },
    boton2:{
        borderRadius:200,
        padding:"16px 53px"
    },

    boton2Text:{
        fontWeight:700,
    },

    ctextEnd:{
        display:"flex",
        flexDirection:"column",
    },

    textEnd:{
        fontWeight:900,
    },


    cBox2:{
        display:"flex",
        height:"100%",
        [theme.breakpoints.down("sm")]:{
                display:"none",
        },

        
    
    },


    cImage:{
        overflow: "hidden",
        width: "80%",
        height:"90%",
        borderRadius:"50%",
        backgroundImage: "url(https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&w=600)",
        backgroundPosition:"bottom",
        backgroundSize:"cover",
        [theme.breakpoints.down(1565)]:{
            width:"100%",
            height:"90%",
        },
        [theme.breakpoints.down("md")]:{
            width:"100%",
            height:"90%",
        },
        [theme.breakpoints.down(1220)]:{
            width:"100%",
            height:"70%",
        },
      
    },
       
}));

const Main = () =>{
    
    const classes = useStyles();

    return(
        <Grid container className={classes.contenedor}>
            <Grid item sm={12} md={6} className={classes.cBox1} style={{width:"100%",}}>
                 <Box >
                    <Typography variant="h1" co lor="initial" className={classes.textIncial}>Let's Learn New</Typography>
                    <Typography variant="h1" color="initial" className={classes.textIncial}> Course & Gain</Typography>
                    <Typography variant="h1" color="initial" className={classes.textIncial}> More Skills</Typography>
                 </Box>
                 <Box className={classes.cTextSegundary}>
                    <Typography variant="h6" color="initial" className={classes.TextSegundary}>
                        A learming platform based on practical knowlege with
                    </Typography>
                    <Typography variant="h6" color="initial" className={classes.TextSegundary}>
                        best & world class mentors
                    </Typography>
                 </Box>
                 <Box className={classes.cDecajaUltima}>

                    <Button variant="contained" color="primary"  className={classes.boton2} disableElevation>
                        <Typography variant="body2" color="initial" className={classes.boton2Text} >
                        Enroli Now

                        </Typography>
                    </Button>

                    <div style={{display:"flex", gap:"10px"}}>
                        <Badge color="secondary" overlap="circular" variant="dot" >
                            <Avatar 
                                src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600"
                            />
                        </Badge>
                        <Box className={classes.ctextEnd}>
                            <Typography variant="body2" color="initial" className={classes.textEnd}>Witch out</Typography>
                            <Typography variant="body" color="initial" className={classes.textEnd}>Story</Typography>
                        </Box>
                    </div>
                 </Box>

            </Grid>
            <Grid item xs={12} md={6} className={classes.cBox2}>
                <ImageList className={classes.cImage} >
                    
                </ImageList>
            </Grid>
        </Grid>
    );
};
export default Main;
