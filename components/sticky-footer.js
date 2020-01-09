import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import NoSsr from "@material-ui/core/NoSsr";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      {new Date().getFullYear()} {"All rights reserved. "}
      <Link color="inherit" href="/">
        Property Wallet
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: "center",
    width: "100%",
    position: "fixed",
    bottom: 0,
    padding: theme.spacing(3, 2),
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[300]
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <NoSsr>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </NoSsr>
  );
}
