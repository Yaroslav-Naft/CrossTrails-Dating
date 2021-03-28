import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,  Link, Toolbar, IconButton,  MenuItem, Menu } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },
  pink: {
    backgroundColor: "#FB8888"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const signOut = () => {
    handleClose()
    props.signOut()
  }


  const profile = () => {
    handleClose()
    props.profile()
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.pink}>
          <Link color="inherit" className={classes.title} component="button" onClick={props.titleClicked} variant="h6" >
              {props.title}
          </Link>
          <div className={classes.grow} />
              {props.user ? 
                <>
                <IconButton
                  aria-label="message"              
                  color="inherit"
                  >
                  <ChatIcon />
                </IconButton>
                </> : <></>}
              {
                props.user ?
                <>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
              <MenuItem onClick={profile}>Profile</MenuItem>
              <MenuItem onClick={signOut}>Sign Out</MenuItem>
              </Menu>
              </>
              :
              <Link
                component="button"
                variant="body2"
                color="inherit"
                onClick={props.login}
              >
                Login
              </Link>
              }
        </Toolbar>
      </AppBar>
    </div>
  );
}