import React from 'react'
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
  import SearchIcon from '@material-ui/icons/Search';

function TView() {
    let navigate = useNavigate();

    const papStyle = {
        padding: 20,
        height: "90vh",
        width: 520,
        margin: "20px auto",
        border: "3px solid black",
      };

      const onSubmit = (e) => {
        navigate("/Ttags", { replace: true });
      };

  return (
      <Grid>
    <Paper elevation={10} style={papStyle}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <PersonIcon color="secondary" style={{ margin: "-4px" }} /> Teacher
        </div>
        <Link to='/Tdash' style={{ textDecoration: 'none', color:'white' }}> <Button
          
          variant="contained"
          color="primary"
          startIcon={<ExitToAppIcon />}
        >
          {" "}
          Back{" "}  
        </Button> </Link>
      </div>
      <br />
      <TextField
    label="Search"
    InputProps={{endAdornment: <SearchIcon />}}
  />
      <br />
      <br/>
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
          <Button variant="outlined" type="submit" color="primary" onClick={onSubmit}>
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
          <Button variant="outlined" type="submit" color="primary" onClick={onSubmit}>
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
          <Button variant="outlined" type="submit" color="primary" onClick={onSubmit}>
            {" "}
            View Letter
          </Button>
          <Divider />
          
           4{" "}
          <Button variant="text" type="submit" color="primary">
            {" "}
            Teacher{" "}
          </Button>
          <Button variant="text" type="submit" color="primary">
            {" "}
            Fee Status
          </Button>
          <Button variant="outlined" type="submit" color="primary" onClick={onSubmit}>
            {" "}
            View Letter
          </Button>
          <Divider />5{" "}
          <Button variant="text" type="submit" color="primary">
            {" "}
            Teacher{" "}
          </Button>
          <Button variant="text" type="submit" color="primary">
            {" "}
            Fee Status
          </Button>
          <Button variant="outlined" type="submit" color="primary" onClick={onSubmit}>
            {" "}
            View Letter
          </Button>
          <Divider />6{" "}
          <Button variant="text" type="submit" color="primary">
            {" "}
            Teacher{" "}
          </Button>
          <Button variant="text" type="submit" color="primary">
            {" "}
            Fee Status
          </Button>
          <Button variant="outlined" type="submit" color="primary" onClick={onSubmit}>
            {" "}
            View Letter
          </Button>
          <Divider />
        </ListItemText>
      </List>
    </Paper>
  </Grid>
  )
}

export default TView