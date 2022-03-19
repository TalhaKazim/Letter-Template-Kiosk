import React from "react";
import {
  Button,
  Grid,
  Paper,
  List,
  ListItemText,
  Divider,
  TextField
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EmailIcon from "@material-ui/icons/Email";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import { Link, useNavigate } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function TManage() {
    const pStyle = {
        padding: 20,
        height: "85vh",
        width: 400,
        margin: "20px auto",
        border: "3px solid black",
      };
  return (
    <Grid>
    <Paper elevation={10} style={pStyle}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <PersonIcon color="primary" style={{ margin: "-4px" }} /> Teacher{" "}
        </div>
        <Link to="/Tdash" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          <Button
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
          >
            {" "}
            Back{" "}
          </Button>{" "}
        </Link>
      </div>
      <br />
      <br />
      <Button variant="outlined" style={{backgroundColor:'gray'}} startIcon={<AddIcon />}>
        Create
      </Button>
      <br />
      <br />
      
      <List>
          <ListItemText>
          {" "}
          <TextField
          variant="filled"
        label="Template"
        
      />
          <Button variant="text" type="submit" color="primary" startIcon={<EditIcon />}>
            {" "}
            
          </Button>
          <Button  type="submit" color="primary" startIcon={<DeleteIcon />}>
            {" "}
            
          </Button> <br/> <br/> 
          
          <TextField
          variant="filled"
        label="Template"
        
      />
          <Button variant="text" type="submit" color="primary" startIcon={<EditIcon />}>
            {" "}
            
          </Button>
          <Button  type="submit" color="primary" startIcon={<DeleteIcon />}>
            {" "}
            
          </Button> <br/> <br/> 
          
          <TextField
          variant="filled"
        label="Template"
        
      />
          <Button variant="text" type="submit" color="primary" startIcon={<EditIcon />}>
            {" "}
            
          </Button>
          <Button  type="submit" color="primary" startIcon={<DeleteIcon />}>
            {" "}
            
          </Button> <br/> <br/> 
          
          <TextField
          variant="filled"
        label="Template"
        
      />
          <Button variant="text" type="submit" color="primary" startIcon={<EditIcon />}>
            {" "}
            
          </Button>
          <Button  type="submit" color="primary" startIcon={<DeleteIcon />}>
            {" "}
            
          </Button> <br/> <br/> 
          
          </ListItemText>
      </List>


    </Paper>
  </Grid>
);
}
export default TManage