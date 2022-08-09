import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import Img1 from "./ImgLogos/google.png";
import Img2 from "./ImgLogos/harvard.png";
import Img3 from "./ImgLogos/Skill.png";
import Img4 from "./ImgLogos/slack.png";
import Img5 from "./ImgLogos/udemy.png";
import { padding } from "@mui/system";

const useStyles = makeStyles((theme) => ({
   
    contendor:{
        alignItems:"center",
        Height: 400,
        padding:20,
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        [theme.breakpoints.down("xs")]:{
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            

        },

    },
    cText:{
        fontSize:10,
        [theme.breakpoints.down("sm")]:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        },
    },
    Text:{
        fontWeight:900,
        fontSize:"2.3em",
        color:"#a72d55",
        [theme.breakpoints.down("md")]:{
            fontSize:"1.6em",
        },
        [theme.breakpoints.down("sm")]:{
            fontSize:"2em",
        },
        [theme.breakpoints.down(359)]:{
            fontSize:"1.3em",
        },
    },
   
    cImg:{
        display:"flex",
        justifyContent:"space-between",
        flexWrap:"wrap",
        gap:"40px",
        padding:"10px 0px",
        
    },

    img:{
        maxWidth:90,
        minWidth:60,
       objectFit:"contain",

    },
 
    
}));

const Footer = () =>{
    
    const classes = useStyles();

    return(
       <Grid container className={classes.contendor}>
         <Grid item xs={12} md={3} className={classes.cText}>
            <Typography variant="h5" color="initial" className={classes.Text}>Trusted By Top 100+</Typography>
            <Typography variant="h5" color="initial" className={classes.Text}>Companies & Universities</Typography>

         </Grid>
         <Grid item xs={12} md={9} >
            <Box className={classes.cImg}>
                <img
                className={classes.img}
                src={Img1}
                />
                <img
                src={Img2}
                className={classes.img}

                />
                <img
                src={Img3}
                className={classes.img}

                />
                <img
                src={Img4}
                className={classes.img}

                />
                <img
                src={Img5}
                className={classes.img}

                />
            </Box>
        </Grid>
       </Grid>
    );
};
export default Footer;