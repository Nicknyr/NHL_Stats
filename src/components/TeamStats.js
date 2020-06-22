import React, { useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useChangeTheme } from "./Theme";
import axios from 'axios';
import teams from './Teams';
import ScrollAnimation from 'react-animate-on-scroll';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    paper: {
        padding: theme.spacing(1),
        display: 'flex',
        overflow: 'auto',
        //flexDirection: 'column',
        background: theme.palette.secondary.main,
        color: 'snow',
        fontWeight: 'bold',
       // marginTop: '1rem',
       // marginBottom: '1rem',
        height: '12rem',
        justifyContent: 'space-around'
    },
    innerContainer: {
        height: '100%'
    },
    header: {
        marginTop: '1rem',
        //marginBottom: '.5rem',
        fontWeight: theme.typography.fontWeightBold
    },
    split: {
        //border: '5px solid red',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    divider: {
        width: '1px',
        background: '#FFF',
        height: '50%'
    },
    middleDivider: {
        width: '100%',
        height: '1px',
        background: '#FFF'
    }
}));

export default function TeamStats() {
    const classes = useStyles();
    const [teamStats, setTeamStats] = useState({});
    const [teamPlaceInLeague, setTeamPlaceInLeague] = useState({});
    const changeTheme = useChangeTheme();

     // Get URL from team page user is on
     const location = useLocation();
     //  '/islanders'
     const teamWithSlash = location.pathname;
     // Removes /    '/islanders' becomes 'islanders'
     const teamName = teamWithSlash.slice(1, teamWithSlash.length);


    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teams[teamName].id}/stats`)
            .then(async res => {
                setTeamStats(res.data.stats[0].splits[0].stat);
                setTeamPlaceInLeague(res.data.stats[1].splits[0].stat);
            })
            .catch(err => {
                console.log('Error retrieving team stats : ' + err);
            })
    }, []);


    /*
   gamesPlayed: 71
   wins: 17
   losses: 49
   ot: 5
   pts: 39
   ptPctg: "27.5"
   goalsPerGame: 2
   goalsAgainstPerGame: 3.732
   evGGARatio: 0.5444
   powerPlayPercentage: "14.9"
   powerPlayGoals: 32
   powerPlayGoalsAgainst: 58
   powerPlayOpportunities: 215
   penaltyKillPercentage: "74.3"
   shotsPerGame: 27.0986
   shotsAllowed: 32.8028
   winScoreFirst: 0.367
   winOppScoreFirst: 0.146
   winLeadFirstPer: 0.474
   winLeadSecondPer: 0.6
   winOutshootOpp: 0.333
   winOutshotByOpp: 0.204
   faceOffsTaken: 3960
   faceOffsWon: 1959
   faceOffsLost: 2001
   faceOffWinPercentage: "49.5"
   shootingPctg: 7.4
   savePctg: 0.886


    wins: "4th"
    losses: "3rd"
    ot: "11th"
    pts: "3rd"
    ptPctg: "3rd"
    goalsPerGame: "4th"
    goalsAgainstPerGame: "6th"
    evGGARatio: "1st"
    powerPlayPercentage: "19th"
    powerPlayGoals: "8th"
    powerPlayGoalsAgainst: "11th"
    powerPlayOpportunities: "1st"
    penaltyKillOpportunities: "16th"
    penaltyKillPercentage: "13th"
    shotsPerGame: "9th"
    shotsAllowed: "17th"
    winScoreFirst: "3rd"
    winOppScoreFirst: "12th"
    winLeadFirstPer: "19th"
    winLeadSecondPer: "18th"
    winOutshootOpp: "9th"
    winOutshotByOpp: "9th"
    faceOffsTaken: "6th"
    faceOffsWon: "12th"
    faceOffsLost: "24th"
    faceOffWinPercentage: "19th"
    savePctRank: "4th"
    shootingPctRank: "5th"
*/
    

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container xs={12} spacing={3}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                        <Paper elevation="10" className={classes.paper}>
                            <Box align="center">
                                <Grid container display="flex" justify="space-around" className={classes.innerContainer}>
                                    <Grid item xs={12} className={classes.header}>
                                        <Typography variant="h5">Goals Per Game</Typography>
                                    </Grid>
                                    <Divider variant="middle" className={classes.middleDivider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h3">{teamStats.goalsPerGame}</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem className={classes.divider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h6">{teamPlaceInLeague.goalsPerGame} in league</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                        <Paper elevation="10" className={classes.paper}>
                            <Box align="center">
                                <Grid container display="flex" justify="space-around" className={classes.innerContainer}>
                                    <Grid item xs={12} className={classes.header}>
                                        <Typography variant="h5">Goals Against Per Game</Typography>
                                    </Grid>
                                    <Divider variant="middle" className={classes.middleDivider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h3">{teamStats.goalsAgainstPerGame}</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem className={classes.divider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h6">{teamPlaceInLeague.goalsAgainstPerGame} in league</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                        <Paper  elevation="10" className={classes.paper}>
                            <Box align="center">
                                <Grid container display="flex" justify="space-around" className={classes.innerContainer}>
                                    <Grid item xs={12} className={classes.header}>
                                        <Typography variant="h5">Point Percentage</Typography>
                                    </Grid>
                                    <Divider variant="middle" className={classes.middleDivider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h3">{teamStats.ptPctg}%</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem className={classes.divider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h6">{teamPlaceInLeague.ptPctg} in league</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                        <Paper  elevation="10" className={classes.paper}>
                            <Box align="center">
                                <Grid container display="flex" justify="space-around" className={classes.innerContainer}>
                                    <Grid item xs={12} className={classes.header}>
                                        <Typography variant="h5">Power Play</Typography>
                                    </Grid>
                                    <Divider variant="middle" className={classes.middleDivider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h3">{teamStats.powerPlayPercentage}%</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem className={classes.divider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h6">{teamPlaceInLeague.powerPlayPercentage} in league</Typography>
                                        {/*
                                        <Typography variant="body1">{teamStats.powerPlayGoals} goals on {teamStats.powerPlayOpportunities} attempts</Typography>
                                        <Typography variant="body1">{teamPlaceInLeague.powerPlayOpportunities} most penalties drawn in league</Typography>
                                        */}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                        <Paper  elevation="10" className={classes.paper}>
                            <Box align="center">
                                <Grid container display="flex" justify="space-around" className={classes.innerContainer}>
                                    <Grid item xs={12} className={classes.header}>
                                        <Typography variant="h5">Penalty Kill</Typography>
                                    </Grid>
                                    <Divider variant="middle" className={classes.middleDivider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h3">{teamStats.penaltyKillPercentage}%</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem className={classes.divider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h6">{teamPlaceInLeague.penaltyKillPercentage} in league</Typography>
                                         {/*
                                        <Typography variant="body1">{teamStats.powerPlayGoalsAgainst} goals against</Typography>
                                        <Typography variant="body1">{teamPlaceInLeague.penaltyKillOpportunities} most penalized team</Typography>
                                        */}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                        <Paper  elevation="10" className={classes.paper}>
                            <Box align="center">
                                <Grid container display="flex" justify="space-around" className={classes.innerContainer}>
                                    <Grid item xs={12} className={classes.header}>
                                        <Typography variant="h5">Face Offs</Typography>
                                    </Grid>
                                    <Divider variant="middle" className={classes.middleDivider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h3">{teamStats.faceOffWinPercentage}%</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem className={classes.divider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h6">{teamPlaceInLeague.faceOffWinPercentage} in league</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                        <Paper  elevation="10" className={classes.paper}>
                            <Box align="center">
                                <Grid container display="flex" justify="space-around" className={classes.innerContainer}>
                                    <Grid item xs={12} className={classes.header}>
                                        <Typography variant="h5">Save Percentage</Typography>
                                    </Grid>
                                    <Divider variant="middle" className={classes.middleDivider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h3">{teamStats.savePctg}%</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem className={classes.divider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h6">{teamPlaceInLeague.savePctRank} in league</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                        <Paper  elevation="10" className={classes.paper}>
                            <Box align="center">
                                <Grid container display="flex" justify="space-around" className={classes.innerContainer}>
                                    <Grid item xs={12} className={classes.header}>
                                        <Typography variant="h5">Shooting Percentage</Typography>
                                    </Grid>
                                    <Divider variant="middle" className={classes.middleDivider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h3">{teamStats.shootingPctg}%</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem className={classes.divider} />
                                    <Grid item xs={5} className={classes.split}>
                                        <Typography variant="h6">{teamPlaceInLeague.shootingPctRank} in league</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </Container>
    );
}