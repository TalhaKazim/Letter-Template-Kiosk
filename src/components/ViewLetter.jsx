import { Button, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";

function ViewLetter() {
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
            <PersonIcon color="primary" style={{ margin: "-4px" }} /> Username{" "}
          </div>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ExitToAppIcon />}
          >
            {" "}
            Back{" "}
          </Button>
        </div>
        <br />
        <h1 style={{ textAlign: "center", color: "Black" }}>My Letter</h1>
        <br />
        <Grid>
          <TextField
            id="outlined-read-only-input"
            size="small"
            variant="filled"
            label="Letter type"
            placeholder="Reference Letter"
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
            variant="filled"
            label="Course name"
            placeholder="Database"
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
            variant="filled"
            label="Language"
            placeholder="English"
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
            variant="filled"
            label="Send on"
            placeholder="Org Email"
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
            variant="filled"
            label="Requested text"
            placeholder="Anything"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <br />
        <Grid align="center">
          <Button variant="contained" color="primary">
            {" "}
            View Fees Challan{" "}
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default ViewLetter;
