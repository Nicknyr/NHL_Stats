import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { mainListItems, secondaryListItems } from './ListItems';
import { useLocation } from 'react-router-dom';
import FranchiseInfo from './FranchiseInfo';
import Awards from './Awards';
import AwardsModal from './AwardsModal';
import Footer from './Footer';
import NHLLogo from '../assets/nhl-logo.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import Navbar from './Navbar';
    
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100%',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'inline-flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    fixedHeight: {
      height: 240,
    },
    card: {
        margin: '1rem',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '620px'
    }
  }));
  
  export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [awardData, setAwardData] = useState('');
    
    useEffect(() => {
        axios.get(`https://statsapi.web.nhl.com/api/v1/awards`)
            .then(res => {
                setAwardData(res.data.awards);
            })
            .catch(err => {
                console.log('Error retrieving award data');
            })
    },[]);

    let awards = Object.values(awardData).map((award) => {
        return (
            <Grid item xs={12} sm={6} md={4}>
              <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Award information"
                      height="450"
                      image={award.imageUrl}
                      title={award.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          {award.name}
                      </Typography>
                    </CardContent>
                   </CardActionArea>
                    <CardActions>
                      {/* Pop up modal containing description/history for each award */}
                      <AwardsModal award={award.name} description={award.description} history={award.history} />
                    </CardActions>
                  </Card>
            </ScrollAnimation>
            </Grid>
        );
    })

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  
    const location = useLocation();
    
    return (
      <>
        <Navbar />
        <div className={classes.root}>
          <CssBaseline />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                {/* Awards */}
                <Paper className={classes.paper}>
                  {awards}
                </Paper>
              </Grid>
            </Container>
          </main>
        </div>
      <Footer />
      </>
    );
  }
  
  

