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


    return (
        <Grid container>
            <Typography variant="h2">Recent Games Section</Typography>
            {previousGameDate}
            {previousGameVenue}
            {previousGameAwayTeam}
            {previousGameHomeTeam}
            {previousGameAwayTeamScore}  - {previousGameHomeTeamScore}
        </Grid>
    );
}