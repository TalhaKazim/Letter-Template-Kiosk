import { Button, Grid, Paper } from "@material-ui/core";
import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EmailIcon from "@material-ui/icons/Email";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import { Link,useNavigate } from "react-router-dom";

function Choose() {
    let navigate = useNavigate();
  const pStyle = {
    padding: 20,
    height: "70vh",
    width: 350,
    margin: "20px auto",
    border: "3px solid black",
  };

  const onSubmit = (e) => {
    navigate("/Request", { replace: true });
  };
  return (
    <Grid>
      <Paper elevation={10} style={pStyle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <PersonIcon color="primary" style={{ margin: "-4px" }} /> Username{" "}
          </div>
          <Link to='/Sdash' style={{ textDecoration: 'none', color:'white' }}> <Button
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
          >
            {" "}
             Back{" "} 
          </Button> </Link>
        </div>
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
            Reference Letter{" "}
          </Button>{" "}
          <br /> <br /> <br />
          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            style={{ backgroundColor: "#32a89b" }}
            onClick={onSubmit}
          >
            {" "}
            English Proficiency{" "}
          </Button>{" "}
          <br /> <br /> <br />
          <Button
            variant="contained"
            size="large"
            startIcon={<SchoolIcon />}
            style={{ backgroundColor: "#32a89b" }}
            onClick={onSubmit}
          >
            {" "}
            Hope Certificate{" "}
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Choose;
