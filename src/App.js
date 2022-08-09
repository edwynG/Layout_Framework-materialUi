import React from "react";
import {Grid} from '@material-ui/core'
import Encabezado from "./Componentes/pageOne/Appbar/Encabezado"
import Main from "./Componentes/pageOne/main/main"
import Footer from "./Componentes/pageOne/footer/footer"
import PageTwo from "./Componentes/PageTwo/PageExtra";


function App() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Encabezado/>
        </Grid>
        <Grid item xs={12}> 
          <Main/>
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
        <Grid item>
          <PageTwo/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
