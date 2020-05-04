import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import teams from './Teams';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    table: {
        width: '100%'
    },
  });
 

export default function FranchiseInfo() {
    const [data, setData] = useState([]);
    const [franchiseData, setFranchiseData] = useState('');
    const [venueData, setVenueData] = useState('');
    const [divisionData, setDivisionData] = useState('');
    const [teamRecordData, setTeamRecordData] = useState('');
    const classes = useStyles();

     // Get URL from team page user is on
     const location = useLocation();
     //  '/islanders'
     const teamWithSlash = location.pathname;
     // Removes /    '/islanders' becomes 'islanders'
     const teamNameFromQuery = teamWithSlash.slice(1, teamWithSlash.length);
    

    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teams[teamNameFromQuery].id}`)
            .then(res => {
                setFranchiseData(res.data.teams[0]);
                setVenueData(res.data.teams[0].venue)
                setDivisionData(res.data.teams[0].division);
                //console.log('franchise response : ' + res.teams.name);
            })
            .catch(err => {
                console.log('Error retrieving franchise data');
            })
    }, [])

    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teams[teamNameFromQuery].id}/stats?stats=statsSingleSeason&season=20182019
        `)
            .then(res => {
                setTeamRecordData(res.data.stats[0].splits[0].stat);
                //stats[""0""].splits[""0""].stat
            })
            .catch(err => {
                console.log('Error retrieving team record data');
            })
    }, []);
    
    console.log(teamRecordData);
    //console.log(franchiseData);
    //console.log(venueData);
    {/* From first call */}
    let division = divisionData.name;
    let stadium = venueData.name;
    let city = venueData.city;
    let teamName = franchiseData.teamName;
    let enteredLeague = franchiseData.firstYearOfPlay;
    let abbreviation = franchiseData.abbreviation;
    let shortName = franchiseData.shortName;
    {/* From second call*/}
    let wins = teamRecordData.wins;
    let losses = teamRecordData.losses;
    let ot = teamRecordData.ot;

    return (
        <div>
            <Typography variant="h2">{teamName}</Typography>
            <Typography variant="h5">Record : {wins} - {losses} - {ot}</Typography>
            <Typography variant="h5">Established : {enteredLeague}</Typography>
            <Typography variant="h5">Stadium : {stadium}, {city}</Typography>
            <Typography variant="h5">{division} Division</Typography>
        </div>
    );
}
