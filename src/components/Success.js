import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appbar: {
    marginBottom: "10px",
    backgroundColor: "#000",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  image: {
    width: "90%",
    marginTop: "20px",
  },
});

function Success() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <MenuIcon />
          <Typography variant="h5" className={classes.title}>
            Success!
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h5" gutterBottom>
        Thank you for your subscription.
      </Typography>
      <Typography variant="caption">You will get an email shortly.</Typography>
      <Card className={classes.image}>
        <img
          src="https://images.unsplash.com/photo-1517957646076-00122c5e7f51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </Card>
    </div>
  );
}

export default Success;
