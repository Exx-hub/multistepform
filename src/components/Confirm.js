import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appbar: {
    marginBottom: "10px",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  button: {
    margin: "5px",
    marginTop: "25px",
  },
});

function Confirm({ setStep, input }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <MenuIcon />
          <Typography variant="h5" className={classes.title}>
            Confirm Info
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h5" style={{ marginTop: "10px" }}>
        First Name:
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {input.firstName}
      </Typography>
      <Typography variant="h5">Last Name:</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {input.lastName}
      </Typography>
      <Typography variant="h5">Email:</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {input.email}
      </Typography>
      <Typography variant="h5">Occupation:</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {input.occupation}
      </Typography>
      <Typography variant="h5">City:</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {input.city}
      </Typography>
      <Typography variant="h5">Bio:</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {input.bio}
      </Typography>

      <div>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => setStep((prevStep) => prevStep - 1)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => setStep((prevStep) => prevStep + 1)}
        >
          Confirm & Continue?
        </Button>
      </div>
    </div>
  );
}

export default Confirm;
