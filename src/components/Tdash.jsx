import { Button, Grid, Paper } from "@material-ui/core";
import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EmailIcon from "@material-ui/icons/Email";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import AddCommentIcon from "@material-ui/icons/AddComment";
import { Link , useNavigate } from "react-router-dom";

function Adash() {
  let navigate = useNavigate();

  const pStyle = {
    padding: 20,
    height: "70vh",
    width: 350,
    margin: "20px auto",
    border: "3px solid black",
  };

  const onSubmit = (e) => {
    navigate("/TManage", { replace: true });
  };

  const onView = (e) => {
    navigate("/TView", { replace: true });
  };
  return (
    <Grid>
      <Paper elevation={10} style={pStyle}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <PersonIcon color="primary" style={{ margin: "-4px" }} /> Teacher{" "}
          </div>
          <Link to='/Login' style={{ textDecoration: 'none', color:'white' }}> <Button
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
          >
            {" "}
             Log out{" "} 
          </Button> </Link>
        </div>
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}>Welcome</h1>
        <br />
        <br />
        <Grid align="center">
          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            style={{ backgroundColor: "#32a89b" }}
            onClick={onSubmit}
          >
            {" "}
            Manage Template{" "}
          </Button>{" "}
          <br /> <br /> <br />
          <Button
            variant="contained"
            size="large"
            startIcon={<AddCommentIcon />}
            style={{ backgroundColor: "#32a89b" }}
            onClick={onView}
          >
            {" "}
            View Requests{" "}
          </Button>
          <br /> <br /> <br />
          
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Adash;
