import {AppBar, TextField, Paper, Toolbar, Typography, Button, FormControl} from "@material-ui/core";
import React from 'react';


function Home() {
    return (
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    PkgTrackr - An all in one package tracker application
                </Typography>
            </Toolbar>
        </AppBar>
    <Paper elevation={3}
    style={{
        paddingTop: '10px',

    }}>
        <form noValidate autoComplete="off">
            <FormControl fullWidth>
          <TextField id="standard-basic" label="Tracking Number"  />

            <Button variant="contained" color="primary">
                Search
            </Button>
            </FormControl>
        </form>
    </Paper>
            <Paper elevation={3}>
                data -- temp
            </Paper>
        </div>
)
}

export default Home;
