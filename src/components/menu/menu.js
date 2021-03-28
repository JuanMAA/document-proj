import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <AppBar>
        <Toolbar>
          {/*
          <IconButton hidden={true} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          */}
          <Typography variant="h6" className={classes.title}>
            GESTOR DOCUMENTO
          </Typography>
          <Button  style={{ marginRight:5 }} variant="contained" size="small">
            Boton Uno
          </Button>
          <Button variant="contained" size="small">
            Boton Dos 
          </Button>
        </Toolbar>
      </AppBar>
  );
}