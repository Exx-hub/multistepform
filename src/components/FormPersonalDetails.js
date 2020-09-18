import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
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
  textField: {
    marginTop: "10px",
    width: "50%",
  },
  button: {
    margin: "5px",
    marginTop: "25px",
  },
});

function FormPersonalDetails({ setStep, input, handleChange }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <MenuIcon />
          <Typography variant="h5" className={classes.title}>
            Enter Personal Details
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        label="Occupation"
        name="occupation"
        value={input.occupation}
        className={classes.textField}
        autoComplete="off"
        autoFocus
        onChange={handleChange}
      />
      <TextField
        label="City"
        name="city"
        value={input.city}
        className={classes.textField}
        autoComplete="off"
        onChange={handleChange}
      />
      <TextField
        label="Bio"
        name="bio"
        value={input.bio}
        className={classes.textField}
        autoComplete="off"
        onChange={handleChange}
      />
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
          Continue
        </Button>
      </div>
    </div>
  );
}

export default FormPersonalDetails;
