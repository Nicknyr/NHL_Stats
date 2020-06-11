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
import Footer from './Footer';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
import TeamStats from './TeamStats';
import ScrollAnimation from 'react-animate-on-scroll';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    background: '#181818'
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
    background: '#181818',
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
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
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
  teamLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImg: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  rosterContainer: {
    background: theme.palette.secondary.main
  }
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
  //  '/rangers'
  const teamWithSlash = location.pathname;
  // Removes /    '/rangers' becomes 'rangers'
  const team = teamWithSlash.slice(1, teamWithSlash.length);
  const firstLetterOfTeam = team.charAt(0).toUpperCase();
  const restOfTeamLetters = team.slice(1, team.length);
  const teamCapitalized = firstLetterOfTeam + restOfTeamLetters;
  const teamImage = `teams.${team}.logo`;

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
          <Link href="#">
            <HomeIcon color="red" style={{ fontSize: 30 }} />
          </Link>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {teamCapitalized} Team Stats
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
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <Divider />
        <List className={classes.teamLogos}>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Team Logo */}
              <Grid item xs={12} md={4} lg={3}>
                <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                  <Paper className={[fixedHeightPaper, classes.teamLogo]} elevation="10">
                    {location === '/' ? '' : <img src={teams[team].logo} className={classes.logoImg} />} 
                  </Paper>
                </ScrollAnimation>
              </Grid>
            {/* Franchise Info */}
              <Grid item xs={12} md={8} lg={9}>
                <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                  <Paper className={fixedHeightPaper} elevation="10">
                    {location === '/' ? '' : <FranchiseInfo />}  
                  </Paper>
                </ScrollAnimation>
              </Grid>
            {/* Team Stats */}
              <Grid container spacing={3}>
                <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                  <TeamStats />
                </ScrollAnimation>
              </Grid>
            {/* Team Roster */}
              <Grid item xs={12}>
                <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                  <Paper className={[classes.paper, classes.rosterContainer]} elevation="10">
                    {location === '/' ? '' : <Roster />}
                  </Paper>
                </ScrollAnimation>
              </Grid>
          </Grid>
        </Container>
      </main>
    </div>
    <Footer />
    </>
  );
}

