import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: '5%'
  },
  nav: {
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    opacity: 1,
    font: 'normal normal medium 1.3rem Montserrat',
    color: '#6D8187',
    height: '72px',
    
  },
  button: {
    textTransform: 'capitalize',
    fontSize: '1.2rem',
    marginRight: '5%'
  },
  title: {
    flexGrow: 1,
    textTransform: 'capitalize'
  },
}));

export default function ButtonAppBar( props ) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Avatar alt={props.name} src={props.profile} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            { props.name }
          </Typography>
          <Button
            className={classes.button}
            disableRipple
            color="inherit"
            variant="text"
            onClick={props.logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
