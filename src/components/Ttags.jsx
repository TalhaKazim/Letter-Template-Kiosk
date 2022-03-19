import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import { Link , useNavigate } from "react-router-dom";
import InfoIcon from '@material-ui/icons/Info';
 

function Ttags() {
    let navigate = useNavigate();
    const paStyle = {
        padding: 20,
        height: "90vh",
        width: 370,
        margin: "20px auto",
        backgroundColor: "white",
        border: "3px solid black",
      };

      const onSubmit = (e) => {
        navigate("/TPreview", { replace: true });
      };
  return (
    <Grid>
    <Paper elevation={10} style={paStyle}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <PersonIcon color="primary" style={{ margin: "-4px" }} /> Teacher{" "}
          </div>
          <Link to='/TView' style={{ textDecoration: 'none', color:'white' }}> <Button
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
          >
            {" "}
             Back{" "} 
          </Button> </Link>
        </div> <br/>
      <h1 style={{ textAlign: "center", color: "Black" }}>Request</h1>
      <br />
      <Grid align="right">
          <Button startIcon={<InfoIcon style={{width:'70',height:'35px'}}/>}>

          </Button>
      </Grid>
      <Grid>
        <TextField
          id="outlined-read-only-input"
          size="small"
          variant="outlined"
          label="First Name"
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <br />
      <Grid>
        <TextField
          id="outlined-read-only-input"
          size="small"
          variant="outlined"
          label="Last Name"
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <br />
      <Grid>
        <TextField
          id="outlined-read-only-input"
          size="small"
          variant="outlined"
          label="Course"
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <br />
      <Grid>
        <TextField
          id="outlined-read-only-input"
          size="small"
          variant="outlined"
          label="Letter type"
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <br />
      
      <br />
      <Grid align="center">
        <Button variant="contained" color="primary" onClick={onSubmit}>
          {" "}
          Preview{" "}
        </Button>
      </Grid>
    </Paper>
  </Grid>
  )
}

export default Ttags