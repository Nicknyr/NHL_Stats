import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    title: {
      flexGrow: 1,
    },
    content: {
      flexGrow: 1,
      height: '100%',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      background: theme.palette.primary.main,
      height: '500vh'
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
  const [easternConferenceLeader, setEasternConferenceLeader] = useState();
  const [westernConferenceLeader, setWesternConferenceLeader] = useState();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const location = useLocation();

  // Applies theme based on
  React.useEffect(() => {
    let path = location && location.pathname.split("/");
    let team = path && path[1];
    changeTheme({ colors: team.toUpperCase() });
  }, [changeTheme, location]);

  useEffect(() => {
    async function fetchData() {
      axios.get(`https://statsapi.web.nhl.com/api/v1/standings/byConference`)
      .then(res => {
        // 0th element is Eastern Conference leader, 1th is Western Conference Leader
        let teamEndpoint = Object.values(res.data.records).map((x) => x.teamRecords[0].team.link);
        // Eastern Conference team API endpoint
        let eastern = teamEndpoint[0];
        // Western Conference team API endpoint
        let western = teamEndpoint[1];

        let teamEndpointMap = console.log(teamEndpoint.map((x) => x));
       
        console.log('eastern : ' + eastern);
        console.log('western : ' + western);
        console.log('teamEndpoint[0] : ' + teamEndpoint[0]);
        console.log('teamEndpoint[1] : ' + teamEndpoint[1]);

        // Get Eastern Conference Leader team's name
        axios.get(`https://statsapi.web.nhl.com${eastern}/`)
          .then(res => {
            setEasternConferenceLeader(res.data.teams[0].teamName);
          })
          .catch(err => {
            console.log('Error retrieving Eastern Conference Team data : ' + err);
          });
        // Get Eastern Conference Leader team's name
        axios.get(`https://statsapi.web.nhl.com${western}/`)
        .then(res => {
          setWesternConferenceLeader(res.data.teams[0].teamName);
        })
        .catch(err => {
          console.log('Error retrieving Western Conference Team data : ' + err);
        });
      })
    }
    fetchData();
  }, []);

    let team1 = easternConferenceLeader;
    let team2 = westernConferenceLeader;

  return (    
    <>
    <Navbar />
    <div className={classes.root}>
      <CssBaseline />
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
                    <Typography variant="h5">Leaderboards</Typography>
                    <EmojiEventsIcon style={{ fontSize: 50 }} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={[classes.paper, classes.rosterContainer]} elevation="10">
                <Box align="center">
                    <Typography variant="h5">Team Stats</Typography>
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
                    <Typography variant="h5">Goal Leader</Typography>
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
                    <Typography variant="h5">Points Leader</Typography>
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
                    <Typography variant="h5">Shutouts Leader</Typography>
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