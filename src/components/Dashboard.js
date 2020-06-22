import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Roster from './Roster';
import teams from './Teams';
import FranchiseInfo from './FranchiseInfo';
import { useLocation } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import { useChangeTheme } from "./Theme";
import Footer from './Footer';
import TeamStats from './TeamStats';
import ScrollAnimation from 'react-animate-on-scroll';
import Navbar from './Navbar';
import RecentGames from './RecentGames';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    //background: '#181818'
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
    width: '100%'
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
  teamLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.secondary.main,
    height: '300px'
  },
  logoImg: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  rosterContainer: {
    background: theme.palette.secondary.main
  },
  fixedHeight: {
    height: '300px'
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const changeTheme = useChangeTheme();

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
    <Navbar />
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Team Logo */}
              <Grid item xs={12} sm={4} md={4} lg={3}>
                <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                  <Paper className={classes.teamLogo} elevation="10">
                    {location === '/' ? '' : <img src={teams[team].logo} className={classes.logoImg} />} 
                  </Paper>
                </ScrollAnimation>
              </Grid>
            {/* Franchise Info */}
              <Grid item xs={12} sm={8} md={8} lg={9}>
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
              {/* Recent Games */}
              <Grid item xs={12}>
                <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                <Paper className={[classes.paper, classes.rosterContainer]} elevation="10">
                    {location === '/' ? '' : <RecentGames />}
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

