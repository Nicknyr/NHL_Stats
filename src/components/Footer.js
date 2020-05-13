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
    height: '60vh',
    background: '#181818',
   //borderTop: `2px solid ${theme.palette.secondary.main}`
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    background: '#1F1F1F',
    color: 'snow',
    height: '20em'
  }
}));

export default function Footer() {
  const classes = useStyles();
  const changeTheme = useChangeTheme();

  const location = useLocation();


  // Applies theme based on
  React.useEffect(() => {
    let path = location && location.pathname.split("/");
    let team = path && path[1];
    changeTheme({ colors: team.toUpperCase() });
  }, [changeTheme, location]);
 
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container xs={12} md={6} className={classes.section} display="flex" justifyContent="center">
          <Grid item md={10}>
            <Paper elevation="10" className={classes.paper} align="center">
              <Box align="center" display="flex" flexDirection="column" width="50%">
                {/*<Typography variant="h2">About</Typography>*/}
                <Typography variant="body">
                  This app is built with the NHL API. Stats are retrieved directly from the NHL database and displayed here.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container xs={12} md={6} className={classes.section} display="flex" justifyContent="center">
          <Grid item md={10}>
              <Paper elevation="10" className={classes.paper} align="center">
                <Box align="center" display="flex" flexDirection="column" width="50%">
                  <Typography variant="h2">About</Typography>
                  <Typography variant="body">
                    This app is built with the NHL API. Stats are retrieved directly from the NHL database and displayed here.
                  </Typography>
                  <Link href="#">
                    <FontAwesomeIcon
                          icon={['fab', 'stack-overflow']}
                          size="2x"
                          color="#D81E5B"
                      />
                  </Link>
                  <Link href="#">
                    <FontAwesomeIcon
                          icon={['fab', 'github']}
                          size="2x"
                          color="#D81E5B"
                      />
                  </Link>
                  <Link href="#">
                    <FontAwesomeIcon
                          icon={['fab', 'linkedin']}
                          size="2x"
                          color="#D81E5B"
                      />
                  </Link>
                </Box>
              </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}






