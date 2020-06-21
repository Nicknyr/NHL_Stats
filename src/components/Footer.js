import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './ListItems';
import { useSelector } from 'react-redux';
import Roster from './Roster';
import teams from './Teams';
import FranchiseInfo from './FranchiseInfo';
import Awards from './Awards';
import { Switch, Route, Link, useLocation } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { useChangeTheme } from "./Theme";
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { flexbox } from '@material-ui/system';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    background: '#181818',
    //borderTop: `2px solid ${theme.palette.secondary.main}`
    [theme.breakpoints.up('md')]: {
      height: '60vh'
    },

    [theme.breakpoints.up('xl')]: {
      height: '30vh'
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    background: '#1F1F1F',
    color: 'snow',
    height: '20em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    padding: '.5rem'
  }
}));

export default function Footer() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
     <Container maxWidth="lg" className={classes.container}>
        <Grid container xs={12} md={6} className={classes.section} display="flex" justifyContent="center">
          <Grid item xs={10} sm={8} md={10} >
            <Paper elevation="10" className={classes.paper} align="center">
              <Box align="center" display="flex" flexDirection="column" width="50%">
              <Typography variant="h4" className={classes.header}>The App</Typography>
                <Typography variant="body">
                  This app is built with the NHL API. Stats are retrieved directly from the NHL database and displayed here.
                </Typography>
                <br/>
                <Typography variant="body">
                  More information about the API and the data available can be found
                  <Link to="https://gitlab.com/dword4/nhlapi"> here</Link>.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}






