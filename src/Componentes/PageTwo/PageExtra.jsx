import React from "react";
import { makeStyles,Grid, ImageList, Typography,Paper,Box } from "@material-ui/core";
import {LibraryBooks,AccessAlarm,TouchApp} from "@material-ui/icons"
const useStyles = makeStyles ((theme) => ({
    contenedor:{
        height:"100%",
        minHeight:270,
        paddingTop:5,
        paddingBottom:theme.spacing(2),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
    
        [theme.breakpoints.down("xs")]:{
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            gap:20,
            

        },
    },
    box1:{
        [theme.breakpoints.down("xs")]:{
           width:"100%",
            
        },  
    },
    cImg:{
            
            [theme.breakpoints.down("sm")]:{
                justifyContent:"center",
            
            },      
        },

        img:{
            flexGrow:1,
            objectFit:"cover",
            borderRadius:20,
         
        },

    itembox2:{
        borderLeft:"1px solid #111",
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down("xs")]:{
            borderRight:"1px solid #111",
            
            paddingLeft: theme.spacing(2),
        },
       
    },

    textBox2:{
        color:" #415964",
        fontWeight:900,
        marginTop:theme.spacing(1),
        [theme.breakpoints.down("sm")]:{
            fontSize:21,
        },
        [theme.breakpoints.down("xs")]:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            fontSize:23,
        },
    },

    text2Box2:{
        color:" #415964",
        fontWeight:900,
        marginTop:theme.spacing(1),
        [theme.breakpoints.down("sm")]:{
            fontSize:11,
        },
        [theme.breakpoints.down("xs")]:{
            textAlign:"center",
        },
        
    },
    box3:{
        display:"flex",
        flexDirection:"column",
        gap:20,
        width:"100%",
        
        
        
    
    },

    paperBox3:{
        display:"flex",
        gap:10,
        alignItems:"center",
        height:"auto",
        padding:6,
        width:"100%",
        [theme.breakpoints.down("sm")]:{
            height:60,
        },
    },
    tituloTextbody3:{
        fontSize:13,
        fontWeight:900,
    },
    subTextbody3:{
        fontSize:11.5,
    },
    iconoBox3:{
        padding:10,
        color:"#fff",
        borderRadius:5,
    },
   
}));

const PageTwo = () =>{
    
    const classes = useStyles();

    return(
        <Grid container className={classes.contenedor} spacing={2}>
            <Grid item sx={12} sm={6} md={4} className={classes.box1}>
                <ImageList className={classes.cImg}>
                    <img
                    className={classes.img}
                    src="https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=400"
                    />
                </ImageList>
            </Grid>

            <Grid item sx={12} sm={6} md={4} className={classes.box2}>
                <div className={classes.itembox2}>
                    <Typography variant="h5" color="initial" className={classes.textBox2}>Why We Are The</Typography>
                    <Typography variant="h5" color="initial" className={classes.textBox2}>Best E-learning</Typography>
                    <Typography variant="h5" color="initial" className={classes.textBox2}>Platform</Typography>

                    <Typography variant="subtitle2" color="initial" className={classes.text2Box2}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis, qui asperiores, explicabo dolore repellat, ducimus tempora maxime laboriosam
                    </Typography>
                </div>
            </Grid>

            <Grid item sx={12}  md={4} className={classes.box3}>

                <Paper elevation={2} className={classes.paperBox3}>
                    <LibraryBooks size="small"  className={classes.iconoBox3} style={{backgroundColor:"violet"}}/>
                    <Box>
                        <Typography variant="subtitle1" color="initial" className={classes.tituloTextbody3}>Best Curriculum</Typography>
                        <Typography variant="body2" color="initial" className={classes.subTextbody3}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nam!, consectetur adipisicing elit. Enim, nam!
                        </Typography>
                    </Box>
                </Paper>
                <Paper elevation={2} className={classes.paperBox3}>
                <AccessAlarm size="small"  className={classes.iconoBox3} style={{backgroundColor:"orange"}} />
                    <Box>
                    <Typography variant="subtitle1" color="initial" className={classes.tituloTextbody3}>24/7 Support</Typography>
                        <Typography variant="body2" color="initial" className={classes.subTextbody3}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nam!, consectetur adipisicing elit. Enim, nam!
                        </Typography> 
                    </Box>
                </Paper>
                <Paper elevation={2} className={classes.paperBox3}>
                     <TouchApp size="small"  className={classes.iconoBox3} style={{backgroundColor:"lightBlue"}}/>
                     <Box>
                     <Typography variant="subtitle1" color="initial" className={classes.tituloTextbody3}>Login Now</Typography>
                        <Typography variant="body2" color="initial" className={classes.subTextbody3}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nam!, consectetur adipisicing elit. Enim, nam!
                        </Typography>
                    </Box>
                </Paper>
            
            </Grid>


        </Grid>
    );
};

export default PageTwo; 
