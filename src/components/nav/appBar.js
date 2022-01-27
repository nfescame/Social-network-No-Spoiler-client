import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { authContext } from "../../context/authContext";
import { ModeContext } from "../../context/modeContext";

const pages = ["Products", "Pricing", "Blog"];

const useStyles = makeStyles((theme) => ({
  toolBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    background: theme.palette.background.dark,
  },
  menuButton: {
    color: theme.palette.background.paper,
  },
  title: {
    fontWeight: 900,
    color: theme.palette.background.paper,
  },
}));

const AppBarComponent = () => {
  const classes = useStyles();
  const { logout, loggedInUser } = React.useContext(authContext);
  const { darkMode, setDarkMode } = React.useContext(ModeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color='inherit' sx={{ boxShadow: "none" }}>
      <Toolbar className={classes.toolBar}>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          className={classes.title}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
          >
            <MenuIcon className={classes.menuButton} />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          className={classes.title}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Typography className={classes.title}>{page}</Typography>
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
          <Switch
            value={darkMode}
            onChange={() => {
              setDarkMode(darkMode ? false : true);
            }}
          />
          {loggedInUser.user.name && (
            <>
              <Typography
                variant='h6'
                noWrap
                component='div'
                className={classes.title}
              >
                Hello {loggedInUser.user.name}
              </Typography>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <Avatar alt='User Photo' src={loggedInUser.user.pictureUrl} />
                </IconButton>
              </Tooltip>
            </>
          )}
          <Menu
            sx={{ mt: "45px" }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem style={{ display: "flex" }} onClick={handleCloseUserMenu}>
              <Typography
                onClick={logout}
                textAlign='start'
                className={classes.title}
              >
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default AppBarComponent;
