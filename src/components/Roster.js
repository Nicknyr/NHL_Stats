import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import teams from './Teams';
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { fade, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { useChangeTheme } from "./Theme";


const useStyles = makeStyles((theme) => ({
    table: {
        width: '100%',
        background: theme.palette.secondary.main
    },
    tableContent: {
        color: 'snow'
    },
    paper: {
        
    }
  }));

export default function Roster() {
    const classes = useStyles();
    const [players, setPlayerData] = useState([]);
    const [playerStats, setPlayerStats] = useState([]);

    // Get URL from team page user is on
    const location = useLocation();
    //  '/islanders'
    const teamWithSlash = location.pathname;
    // Removes /    '/islanders' becomes 'islanders'
    const teamName = teamWithSlash.slice(1, teamWithSlash.length);

    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teams[teamName].id}/roster`)
        // get all ids
        .then(res => Object.values(res.data.roster).map((x) => x.person.id))
        // map through ids and retrieve the data 
        .then(async ids => {
            const people = Promise.all(ids.map(id => axios.get(`https://statsapi.web.nhl.com/api/v1/people/${id}/`)))

            const stats = Promise.all(ids.map(id => axios.get(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason&season=20192020`
            )));
    
            return Promise.all([people, stats]);
        })
        .then(promise => {
            let data = Object.values(promise[0]).map((x, index) => {
                return x.data.people;
            });
            setPlayerData(data);

            let statsData = Object.values(promise[1]).map((x, index) => {
                return x.data.stats;
            });
            setPlayerStats(statsData);
        })
        .catch(err => {
            console.log('Error : ' + err);
        })
    }, []);

   // Theme
   const changeTheme = useChangeTheme();
    // Applies theme
    React.useEffect(() => {
        let path = location && location.pathname.split("/");
        let team = path && path[1];
        changeTheme({ colors: team.toUpperCase() });
    }, [changeTheme, location]);

    let player = players;
    let stats = playerStats;

    //console.log(stats);
    /*
    let infoSection = Object.values(player).map((player, key) => {
        return (
            <>
                <TableCell align="left" className={classes.tableContent}>{player[0].primaryNumber}</TableCell>
                <TableCell component="th" scope="row" align="left" className={classes.tableContent}>{player[0].fullName}</TableCell>
                <TableCell align="left" className={classes.tableContent}>{player[0].primaryPosition.name}</TableCell>
            </>
        );
    });

    let statSection = Object.values(stats).map((x, key) => {
        return (
            <>
                <TableCell align="left" className={classes.tableContent}>{x[0].splits[0].stat.points}</TableCell>
                <TableCell component="th" scope="row" align="left" className={classes.tableContent}>{x[0].splits[0].stat.goals}</TableCell>
                <TableCell align="left" className={classes.tableContent}>{x[0].splits[0].stat.assists}</TableCell>
            </>
        );
    });

    let infoSection2 = Object.values(player).map((player, key) => {
        return (
            <>
                <TableCell align="left" className={classes.tableContent}>{player[0].currentAge}</TableCell>
                <TableCell component="th" scope="row" align="left" className={classes.tableContent}>{player[0].height}</TableCell>
                <TableCell align="left" className={classes.tableContent}>{player[0].primaryPosition.weight}</TableCell>
                <TableCell align="left" className={classes.tableContent}>{player[0].primaryPosition.nationality}</TableCell>
            </>
        );
    });

    */

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left" className={classes.tableContent}>#</TableCell>
                        <TableCell align="left" className={classes.tableContent}>Name</TableCell>
                        <TableCell align="left" className={classes.tableContent}>Position</TableCell>
                        <TableCell align="left" className={classes.tableContent}>Points</TableCell>
                        <TableCell align="left" className={classes.tableContent}>Goals</TableCell>
                        <TableCell align="left" className={classes.tableContent}>Assists</TableCell>
                        <TableCell align="left" className={classes.tableContent}>+/-</TableCell>
                        <TableCell align="left" className={classes.tableContent}>TOI</TableCell>
                        <TableCell align="left" className={classes.tableContent}>PM</TableCell>
                        <TableCell align="left" className={classes.tableContent}>Age</TableCell>
                        <TableCell align="left" className={classes.tableContent}>Height</TableCell>
                        <TableCell align="left" className={classes.tableContent}>Weight</TableCell>
                        <TableCell align="left" className={classes.tableContent}>Nationality</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {Object.values(player).map((player, key) => (
                        <TableRow>
                            <TableCell align="left" className={classes.tableContent}>{player[0].primaryNumber}</TableCell>
                            <TableCell align="left" component="th" scope="row"  className={classes.tableContent}>
                                {player[0].fullName}
                            </TableCell>
                            <TableCell align="left" className={classes.tableContent}>{player[0].primaryPosition.name}</TableCell>
                            <TableCell align="left" className={classes.tableContent}>{player[0].currentAge}</TableCell>
                            <TableCell align="left" className={classes.tableContent}>{player[0].height}</TableCell>
                            <TableCell align="left" className={classes.tableContent}>{player[0].weight}</TableCell>
                            <TableCell align="left" className={classes.tableContent}>{player[0].nationality}</TableCell>
                            <TableCell align="left" className={classes.tableContent}></TableCell>
                            <TableCell align="left" className={classes.tableContent}></TableCell>
                            <TableCell align="left" className={classes.tableContent}></TableCell>
                            <TableCell align="left" className={classes.tableContent}></TableCell>
                            <TableCell align="left" className={classes.tableContent}></TableCell>
                            <TableCell align="left" className={classes.tableContent}></TableCell>
                        </TableRow>
                    ))};
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}


