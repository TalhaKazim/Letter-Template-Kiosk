import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import { Link , useNavigate } from "react-router-dom";

function TPreview() {
    const paStyle = {
        padding: 20,
        height: "90vh",
        width: 370,
        margin: "20px auto",
        backgroundColor: "white",
        border: "3px solid black",
      };
  return (
    <Grid>
    <Paper elevation={10} style={paStyle}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <PersonIcon color="primary" style={{ margin: "-4px" }} /> Teacher{" "}
          </div>
          <Link to='/Ttags' style={{ textDecoration: 'none', color:'white' }}> <Button
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
          >
            {" "}
             Back{" "} 
          </Button> </Link>
        </div> <br/> <br/> <br/> 
        <TextField
        
        id="outlined-read-only-input"
          variant="filled"
          value="I have known that <Name> as his course instructor of his degree subject <Subject
Name>. The following information would help to intoduce him.
 During my association with him I have found hard work to be his strong quality.
 <Name> is an energetic, congenial, intelligent and hard working student.
 He is one of the most regular student of out university.
 I am sure if given chance he can use his potential to the optimum level in achieving the set target."
          inputProps={{
      style: {
         fontSize:'20px',
        height: "300px",
        width:'270px'
      }
          }}
        />
        </Paper>
        </Grid>
  )
}

export default TPreview