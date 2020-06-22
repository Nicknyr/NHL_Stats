import React, { useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import teams from './Teams';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    list: {
        background: '#181818'
    },
    teamList: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '1rem'
    },
    team: {
        width: 'auto'
    },
    header: {
        paddingLeft: '1rem',
        paddingTop: '1rem',
        color: 'snow'
    },
    navbar: {
        background: '#181818'
    },
    link: {
        color: 'snow',
        //textDecoration: 'none'
    },
    icon: {
        display: 'flex',
        justifyContent: 'center'
    }
  }));


export default function Navbar() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };
   
     const list = (anchor) => (
        <div
            className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography variant="h6" className={classes.header}>Team Stats</Typography>
              <List className={classes.teamList}>
              <>
                {Object.values(teams).map((team) => (
                <ListItem className={classes.team} button key={team.id}>
                    <Link to={`/${team.name}`}>
                        <ListItemIcon className={classes.icon}>
                            <img src={team.logo} height="40" width="40"/>
                        </ListItemIcon>
                    </Link>
                </ListItem>
                ))}
               </>
              </List>
              <Divider />
              <Typography variant="h6" className={classes.header}>League Stats</Typography>
              <List className={classes.teamList}>
                <>
                  <ListItem button>
                    <ListItemIcon>
                        <Link to="/leaderboards" className={classes.link}>Leaderboards</Link>
                    </ListItemIcon>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                        <Link to="/historical" className={classes.link}>Historical Stats</Link>
                    </ListItemIcon>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                        <Link to="/awards" className={classes.link}>NHL Awards</Link>
                    </ListItemIcon>
                  </ListItem>
                </>
              </List>
        </div>
          );
    
    //console.log('teams : ' + Object.values(teams).map((x) => x.logo));

    return (
        <AppBar position="static" className={classes.navbar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                {['top'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                    ))}
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    NHL Stats
                </Typography>
                {/*
                <Link href="#">
                    <Typography variant="h6">Team </Typography>
                </Link>
                */}
            </Toolbar>
        </AppBar>
    );
}