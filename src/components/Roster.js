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
    }
  }));

  /*
  const useFetch = (teamID) => {
    const [data, setData] = useState(null);

    useEffect(async () => {
     const response = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}/roster`);
     const data = await response.json();
     const item = data.results;
     setData(item);
    }, []);

    return {data};
}
 */

export default function Roster() {
    const [data, setData] = useState([]);
    const [playerIDNumbers, setPlayerIDNumbers] = useState([]);
    const classes = useStyles();

    // Get URL from team page user is on
    const location = useLocation();
    //  '/islanders'
    const teamWithSlash = location.pathname;
    // Removes /    '/islanders' becomes 'islanders'
    const teamName = teamWithSlash.slice(1, teamWithSlash.length);

    //alert(teamID);
    
    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teams[teamName].id}/roster`)
            .then(res => {
                setData(res.data.roster);
                console.log(res);
            })
            .catch(err => {
                console.log('Error : ' + err);
            })
    }, []); 

    let playerArr = [];

    let playerNames = Object.values(data).map((x) => {
         return x.person.link;
    });


    /*
    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teams[teamName].id}/roster`)
            .then(res => {
                setPlayerIDNumbers(Object.values(res.data.roster).map((x) => {
                    return x.person.id;
                }));
                console.log(res);
            })
            .catch(err => {
                console.log('Error : ' + err);
            })
    }, []);

     useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teams[teamName].id}/roster`)
            .then(res => {
                setPlayerIDNumbers(Object.values(res.data.roster).map((x) => {
                    return x.person.id;
                }));
                // res now contains all the ID numbers
                console.log(res);
            })
            .then(res => {
                playerIDArr.map((playerID) => {
                    axios.get(`https://statsapi.web.nhl.com/api/v1/people/${playerID}/`)
                })
                console.log('Player ID call returned : ' + res);
            })
            .catch(err => {
                console.log('Error : ' + err);
            })
    }, [])
    */

    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teams[teamName].id}/roster`)
        // get all ids
        .then(res => Object.values(res.data.roster).map((x) => x.person.id))
        // map through ids and retrieve the data 
        .then(ids => {
            const people = Promise.all(ids.map(id => axios.get(`https://statsapi.web.nhl.com/api/v1/people/${id}/`)))

            const stats = Promise.all(ids.map(id => axios.get(`https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason&season=20182019`
            )))

            console.log(Promise.all([people, stats]));
    
            return Promise.all([people, stats])
    
        }).catch(err => {
            console.log('Error : ' + err);
        })
    })

    console.log('Player ID numbers : ' + playerIDNumbers);
    
    let playerIDArr = playerIDNumbers.map((x) => {
        return playerIDNumbers.push(x);
    });

    console.log('Player ID array :' + playerIDArr);

    /*
    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/people/8476459`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('Error retrieiving player stats');
            })
    });


    let playerIDs = Object.values(data).map((x) => {
        playerArr.push(x.person.id);
    });
    */

   const changeTheme = useChangeTheme();

    // Applies theme based on
    React.useEffect(() => {
        let path = location && location.pathname.split("/");
        let team = path && path[1];
        changeTheme({ colors: team.toUpperCase() });
    }, [changeTheme, location]);

    let roster = Object.values(data);
      
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
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {roster.map((row, key) => (
                        <TableRow key={row.key}>
                        <TableCell align="left" className={classes.tableContent}>{row.jerseyNumber}</TableCell>
                        <TableCell component="th" scope="row" align="left" className={classes.tableContent}>
                            {row.person.fullName}
                        </TableCell>
                        <TableCell align="left" className={classes.tableContent}>{row.position.name}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}


