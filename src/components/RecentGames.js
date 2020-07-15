import React, { useState, useEffect} from 'react';
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
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        //background: theme.palette.primary.main,
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
    }
}));

export default function RecentGames() {
    const classes = useStyles();
    const [previousGameDate, setPreviousGameDate] = useState();
    const [previousGameVenue, setPreviousGameVenue] = useState();
    const [previousGameAwayTeam, setPreviousGameAwayTeam] = useState();
    const [previousGameHomeTeam, setPreviousGameHomeTeam] = useState();
    const [previousGameAwayTeamScore, setPreviousGameAwayTeamScore] = useState();
    const [previousGameHomeTeamScore, setPreviousGameHomeTeamScore] = useState();

    // Get URL from team page user is on
    const location = useLocation();
    //  '/islanders'
    const teamWithSlash = location.pathname;
    // Removes /    '/islanders' becomes 'islanders'
    const teamName = teamWithSlash.slice(1, teamWithSlash.length);

    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teams[teamName].id}/?expand=team.schedule.previous`)
            .then(async res => {
                let teams = res.data.teams;
                let previousGameDate = teams[0].previousGameSchedule.dates[0].games[0].gameDate
                let previousGameVenue = teams[0].previousGameSchedule.dates[0].games[0].venue.name
                let previousGameAwayTeam = teams[0].previousGameSchedule.dates[0].games[0].teams.away.team.name
                let previousGameHomeTeam = teams[0].previousGameSchedule.dates[0].games[0].teams.home.team.name
                let previousGameAwayTeamScore = teams[0].previousGameSchedule.dates[0].games[0].teams.away.score
                let previousGameHomeTeamScore = teams[0].previousGameSchedule.dates[0].games[0].teams.home.score

                setPreviousGameDate(previousGameDate);
                setPreviousGameVenue(previousGameVenue);
                setPreviousGameAwayTeam(previousGameAwayTeam);
                setPreviousGameHomeTeam(previousGameHomeTeam);
                setPreviousGameAwayTeamScore(previousGameAwayTeamScore);
                setPreviousGameHomeTeamScore(previousGameHomeTeamScore);

                console.log(previousGameDate);
            })
            .catch((err) => {
                console.log('Error in recent games :' + err);
            })
    }, [teams, teamName]);

    /*
    const dateString = {previousGameDate};
    console.log(dateString);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    console.log(formatDate);
    */


   let date = previousGameDate;
   let previousGameDateConverted = moment(date).format("MMMM Do YYYY");

    return (
        <Grid container className={classes.container}>
            <Grid item xs={6} md={10}>
                <Paper elevation="10" className={classes.paper}>
                    <Box align="center">
                        <Typography variant="h3">Recent Games</Typography>
                        <Grid item xs={12}>
                            <Typography variant="h6">
                                {previousGameDateConverted} - {previousGameVenue}
                            </Typography>
                            <Typography variant="h5">
                                {previousGameAwayTeam} @ {previousGameHomeTeam} 
                            </Typography>
                            <Typography variant="h5">
                                {previousGameAwayTeamScore}  - {previousGameHomeTeamScore} <br/>
                            </Typography>
                        </Grid>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}