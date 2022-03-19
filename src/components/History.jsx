import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  Button,
  Select,
  MenuItem,
  TextField,
  List, 
  ListItemText,
  Divider,
} from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";
import PersonIcon from "@material-ui/icons/Person";
import { Link , useNavigate } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function History() {
  const papStyle = {
    padding: 20,
    height: "90vh",
    width: 520,
    margin: "20px auto",
    border: "3px solid black",
  };

  return (
    <Grid>
      <Paper elevation={10} style={papStyle}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <PersonIcon color="secondary" style={{ margin: "-4px" }} /> Username
          </div>
          <Link to='/Sdash' style={{ textDecoration: 'none', color:'white' }}> <Button
            
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
          >
            {" "}
            Log Out{" "}  
          </Button> </Link>
        </div>
        <br />
        <h1 style={{ textAlign: "center", color: "green" }}>History</h1> <br />
        <br />
        <h2 style={{ color: "brown" }}>Letter Received</h2>
        <List>
          <ListItemText>
            1{" "}
            <Button variant="text" type="submit" color="primary">
              {" "}
              Teacher{" "}
            </Button>
            <Button variant="text" type="submit" color="primary">
              {" "}
              Fee Status
            </Button>
            <Button variant="outlined" type="submit" color="primary">
              {" "}
              View Letter
            </Button>
            <Divider />2{" "}
            <Button variant="text" type="submit" color="primary">
              {" "}
              Teacher{" "}
            </Button>
            <Button variant="text" type="submit" color="primary">
              {" "}
              Fee Status
            </Button>
            <Button variant="outlined" type="submit" color="primary">
              {" "}
              View Letter
            </Button>
            <Divider />3{" "}
            <Button variant="text" type="submit" color="primary">
              {" "}
              Teacher{" "}
            </Button>
            <Button variant="text" type="submit" color="primary">
              {" "}
              Fee Status
            </Button>
            <Button variant="outlined" type="submit" color="primary">
              {" "}
              View Letter
            </Button>
            <Divider />
            <br />
            <h2 style={{ color: "brown" }}>Letter Pending</h2> <br />1{" "}
            <Button variant="text" type="submit" color="primary">
              {" "}
              Teacher{" "}
            </Button>
            <Button variant="text" type="submit" color="primary">
              {" "}
              Fee Status
            </Button>
            <Button variant="outlined" type="submit" color="primary">
              {" "}
              Cancel Letter
            </Button>
            <Divider />2{" "}
            <Button variant="text" type="submit" color="primary">
              {" "}
              Teacher{" "}
            </Button>
            <Button variant="text" type="submit" color="primary">
              {" "}
              Fee Status
            </Button>
            <Button variant="outlined" type="submit" color="primary">
              {" "}
              Cancel Letter
            </Button>
            <Divider />3{" "}
            <Button variant="text" type="submit" color="primary">
              {" "}
              Teacher{" "}
            </Button>
            <Button variant="text" type="submit" color="primary">
              {" "}
              Fee Status
            </Button>
            <Button variant="outlined" type="submit" color="primary">
              {" "}
              Cancel Letter
            </Button>
            <Divider />
          </ListItemText>
        </List>
      </Paper>
    </Grid>
  );
}
export default History;
