import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import teams from './Teams';

const useStyles = makeStyles({
    table: {
        width: '100%'
    },
  });

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
 

export default function Roster() {
    const [data, setData] = useState([]);
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

    let roster = Object.values(data);
      
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">#</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Position</TableCell>
                        <TableCell align="left">Points</TableCell>
                        <TableCell align="left">Goals</TableCell>
                        <TableCell align="left">Assists</TableCell>
                        <TableCell align="left">+/-</TableCell>
                        <TableCell align="left">TOI</TableCell>
                        <TableCell align="left">PM</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {roster.map((row, key) => (
                        <TableRow key={row.key}>
                        <TableCell align="left">{row.jerseyNumber}</TableCell>
                        <TableCell component="th" scope="row" align="left">
                            {row.person.fullName}
                        </TableCell>
                        <TableCell align="left">{row.position.name}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
