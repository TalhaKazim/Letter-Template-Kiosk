import React from "react";
import { Avatar, Grid, Paper, Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LocalPostOfficeIcon from "@material-ui/icons/LocalPostOffice";
import { Link ,useNavigate } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Sdash() {
  let navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 520,
    margin: "20px auto",
    border: "3px solid black",
  };
  const personStyle = { margin: "-5px auto" };
  const localIcon = { margin: "15px auto", fontSize: "45px", color: "#3b3935" };
  const firstHeading = {
    color: "Green",
    fontSize: "45px",
    margin: "-9px auto",
  };
  const secondHeading = { margin: "-2px", fontSize: "25px" };
  const btn1 = { margin: "30px 0", border: "3px solid brown" };
  const btn2 = { margin: "0px 0", border: "3px solid brown", fontSize: "15px" };

  const onSubmit = (e) => {
    navigate("/Choose", { replace: true });
  };

  const onHistory = (e) => {
    navigate("/History", { replace: true });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <PersonIcon color="secondary" style={{ margin: "-4px" }} /> Username
          </div>
          <Link to='/Login' style={{ textDecoration: 'none', color:'white' }}> <Button
            
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
          >
            {" "}
            Log Out{" "}  
          </Button> </Link>
        </div>
        <Grid align="center">
          <LocalPostOfficeIcon color="primary" style={localIcon} />
          <h1 style={firstHeading}>
            <i>BIIT Letter Template</i>
          </h1>
          <h2 style={secondHeading}>Kiosk</h2>

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btn1}
            onClick={onSubmit}
          >
            Make Request
          </Button>
        </Grid>
        <Grid align="center">
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btn2}
            onClick={onHistory}
          >
            My requests
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Sdash;
