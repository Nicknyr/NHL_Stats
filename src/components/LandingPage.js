import React from 'react';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fade, makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './ListItems';
import { useSelector } from 'react-redux';
import teams from './Teams';
import { Switch, Route, Link, useLocation } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { useChangeTheme } from "./Theme";
import Footer from './Footer';
import { flexbox } from '@material-ui/system';
import EasternConference from '../assets/NHL_Eastern_Conference.svg';
import WesternConference from '../assets/NHL_Western_Conference.svg';
import { dom } from '@fortawesome/fontawesome-svg-core';
import HistoryIcon from '@material-ui/icons/History';
import SportsHockeyIcon from '@material-ui/icons/SportsHockey';
import BarChartIcon from '@material-ui/icons/BarChart';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      background: theme.palette.primary.main,
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100%',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      background: theme.palette.primary.main
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      background: theme.palette.secondary.main,
      color: 'snow',
      fontWeight: 'bold'
    },
    fixedHeight: {
      height: 240
    },
  }));


export default function Dashboard() {
  const classes = useStyles();
  const changeTheme = useChangeTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const location = useLocation();

  // Applies theme based on
  React.useEffect(() => {
    let path = location && location.pathname.split("/");
    let team = path && path[1];
    changeTheme({ colors: team.toUpperCase() });
  }, [changeTheme, location]);


  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
           
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Landing Intro */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper} elevation="10" >
                <Box align="center">
                    <Typography variant="h1">NHL Stats</Typography>
                    <SportsHockeyIcon style={{ fontSize: 80 }} />
                    <Typography variant="h5">Up-to-date stats pulled directly from the NHL's database.</Typography>
                    <Typography variant="h5">Search stats by team or view leaderboards or historical stats</Typography>
                </Box>
              </Paper>
            </Grid>
            {/* Best of Conference */}
            <Grid item xs={12} md={6}>
                <Paper className={classes.paper} elevation="10">
                    <Box align="center">
                        <img src={WesternConference} height="100" alt="Western Conference Logo" />
                        <Typography variant="h4">Best in the West</Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper className={classes.paper} elevation="10">
                    <Box align="center">
                        <img src={EasternConference} height="100" alt="Eastern Conference Logo" />
                        <Typography variant="h4">Beast in the East</Typography>
                    </Box>
                </Paper>
            </Grid>
            {/* Stats Categories */}
            <Grid item xs={12} md={4}>
              <Paper className={[classes.paper, classes.rosterContainer]} elevation="10">
                <Box align="center">
                    <Typography variant="h6">Leaderboards</Typography>
                    <EmojiEventsIcon style={{ fontSize: 50 }} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={[classes.paper, classes.rosterContainer]} elevation="10">
                <Box align="center">
                    <Typography variant="h6">Team Stats</Typography>
                    <BarChartIcon style={{ fontSize: 50 }} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={[classes.paper, classes.rosterContainer]} elevation="10">
                <Box align="center">
                    <Typography variant="h5">Historical Stats</Typography>
                    <HistoryIcon color="red" style={{ fontSize: 50 }} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={[classes.paper, classes.rosterContainer]} elevation="10">
                <Box align="center">
                    <Typography variant="h6">Goal Leader</Typography>
                    <FontAwesomeIcon
                          icon="hockey-puck"
                          size="3x"
                      />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={[classes.paper, classes.rosterContainer]} elevation="10">
                <Box align="center">
                    <Typography variant="h6">Points Leader</Typography>
                    <FontAwesomeIcon
                          icon="hockey-puck"
                          size="3x"
                      />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={[classes.paper, classes.rosterContainer]} elevation="10">
                <Box align="center">
                    <Typography variant="h6">Shutouts Leader</Typography>
                    <FontAwesomeIcon
                          icon="times"
                          size="3x"
                      />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
             {/* Footer */}
          </Box>
        </Container>
      </main>
    </div>
    <Footer />
    </>
  );
}