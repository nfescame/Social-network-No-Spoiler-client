import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    color: theme.palette.primary.main,
  },
  grow: {
    flexGrow: 1,
  },
  iconGit: {
    color: theme.palette.background.git,
    fontSize: 30,
    marginRight: 15,
  },
  iconLinkedin: {
    color: theme.palette.secondary.main,
    fontSize: 33,
    marginRight: 15,
  },
  title: {
    fontWeight: 900,
    color: theme.palette.background.dark,
  },
}));

export default function Home() {
  const { loggedInUser } = React.useContext(authContext);
  const classes = useStyles();
  const navegate = useNavigate();

  useEffect(() => {
    if (!loggedInUser.token) {
      navegate("/login");
    }
  }, [loggedInUser, navegate]);

  return (
    <>
      <h1 style={{ margin: "5rem" }} className={classes.title}>
        home
      </h1>
    </>
  );
}
