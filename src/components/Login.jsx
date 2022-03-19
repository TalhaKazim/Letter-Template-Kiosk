import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { Link as LINK, useNavigate } from "react-router-dom";
import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutLined";

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = (e) => {
    if (username === "st" && password === "123") {
      navigate("/Sdash", { replace: true });
    } else if (username === "ta" && password === "123") {
      navigate("/Tdash", { replace: true });
    }
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 320,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const buttonStyle = { margin: "30px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          Sign in
        </Grid>

        <TextField
          label="User name"
          placeholder="Enter username"
          fullWidth
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          style={buttonStyle}
          onClick={onSubmit}
        >
          {" "}
          Sign in{" "}
        </Button>

        <Typography>
          {" "}
          Do you have an account?
          <Link href="#">Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
