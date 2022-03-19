import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  Button,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { Link , useNavigate } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Request() {
  let navigate = useNavigate();

  const paperStyling = {
    padding: 20,
    height: "90vh",
    width: 520,
    margin: "20px auto",
    border: "3px solid black",
  };
  const personStyling = { margin: "-5px auto" };
  const head1 = { color: "gray", margin: "10px auto" };
  const selectStyle = { margin: "30px auto" };
  const selectStyle2 = { margin: "5px auto" };
  const selectStyle3 = { margin: "30px auto" };
  const btnStyle = { margin: "30px auto" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyling}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <PersonIcon color="secondary" style={{ margin: "-4px" }} /> Username
          </div>
          <Link to='/Choose' style={{ textDecoration: 'none', color:'white' }}> <Button
            
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
          >
            {" "}
            Back{" "}  
          </Button> </Link>
        </div>
        <Grid align="center">
          <h1 style={head1}>Request Letter</h1>
          <Select value="" displayEmpty style={selectStyle}>
            <MenuItem value="" disabled>
              Select your Teacher
            </MenuItem>
            <MenuItem>Abdullah Abid</MenuItem>
            <MenuItem>Dr. Munir</MenuItem>
          </Select>
        </Grid>
        <Grid align="center">
          <Select value="" displayEmpty style={selectStyle2}>
            <MenuItem value="" disabled>
              Select your course
            </MenuItem>
            <MenuItem>Database</MenuItem>
            <MenuItem>Calculas</MenuItem>
            <MenuItem>Islamiat</MenuItem>
          </Select>
        </Grid>
        <Grid align="center">
          <Select value="" displayEmpty style={selectStyle3}>
            <MenuItem value="" disabled>
              Select your language
            </MenuItem>
            <MenuItem>English</MenuItem>
            <MenuItem>Urdu</MenuItem>
          </Select>
        </Grid>
        <Grid>
          <TextField label="Email" placeholder="Enter Email" required />
        </Grid>
        <Grid>
          <TextField
            label="Send on"
            placeholder="Enter org email"
            type="password"
          />
        </Grid>
        <Grid>
          <TextField
            color="primary"
            label="Extra Text"
            placeholder="Enter Text"
          />
        </Grid>{" "}
        <br />
        <Grid align="center">
          <Button type="submit" color="primary" variant="contained">
            Request & view challan
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Request;
