import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DucksLogo from '../assets/Anaheim_Ducks.svg';
import CoyotesLogo from '../assets/Arizona_Coyotes.svg';
import BruinsLogo from '../assets/Boston_Bruins.svg';
import SabresLogo from '../assets/Buffalo_Sabres.svg';
import FlamesLogo from '../assets/Calgary_Flames.svg';
import HurricanesLogo from '../assets/Carolina_Hurricanes.svg';
import BlackhawksLogo from '../assets/Chicago_Blackhawks.svg';
import AvalancheLogo from '../assets/Colorado_Avalanche.svg';
import BluejacketsLogo from '../assets/Columbus_Blue_Jackets.svg';
import StarsLogo from '../assets/Dallas_Stars.svg';
import RedwingsLogo from '../assets/Detroit_Red_Wings.svg';
import OilersLogo from '../assets/Edmonton_Oilers.svg';
import PanthersLogo from '../assets/Florida_Panthers.svg';
import KingsLogo from '../assets/Los_Angeles_Kings.svg';
import WildLogo from '../assets/Minnesota_Wild.svg';
import CanadiensLogo from '../assets/Montreal_Canadiens.svg';
import PredatorsLogo from '../assets/Nashville_Predators.svg';
import DevilsLogo from '../assets/New_Jersey_Devils.svg';
import IslandersLogo from '../assets/New_York_Islanders.svg';
import RangersLogo from '../assets/New_York_Rangers.svg';
import SenatorsLogo from '../assets/Ottawa_Senators.svg';
import FlyersLogo from '../assets/Philadelphia_Flyers.svg';
import PenguinsLogo from '../assets/Pittsburgh_Penguins.svg';
import SharksLogo from '../assets/San_Jose_Sharks.svg';
import BluesLogo from '../assets/St._Louis_Blues.svg';
import LightningLogo from '../assets/Tampa_Bay_Lightning.svg';
import MapleleafsLogo from '../assets/Toronto_Maple_Leafs.svg';
import CanucksLogo from '../assets/Vancouver_Canucks.svg';
import GoldenknightsLogo from '../assets/Vegas_Golden_Knights.svg';
import CapitalsLogo from '../assets/Washington_Capitals.svg';
import JetsLogo from '../assets/Winnipeg_Jets.svg';


export const mainListItems = (
  <div>
    {/* Atlantic Division */}
    <ListSubheader inset>Atlantic Division</ListSubheader>
    <ListItem button>
      <img src={BruinsLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={SabresLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={RedwingsLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={PanthersLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={CanadiensLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={SenatorsLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={LightningLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={MapleleafsLogo} height="30"/>
    </ListItem>

    {/* Metropolitan Division */}
    <ListSubheader inset>Metropolitan Division</ListSubheader>
    <ListItem button>
      <img src={HurricanesLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={BluejacketsLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={DevilsLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={IslandersLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={RangersLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={FlyersLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={PenguinsLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={CapitalsLogo} height="30"/>
    </ListItem>

    {/* Central Division */}
    <ListSubheader inset>Central Division</ListSubheader>
    <ListItem button>
      <img src={BlackhawksLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={AvalancheLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={StarsLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={WildLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={PredatorsLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={BluesLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={JetsLogo} height="30"/>
    </ListItem>

    {/* Pacific Division */}
    <ListSubheader inset>Pacific Division</ListSubheader>
    <ListItem button>
      <img src={DucksLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={CoyotesLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={FlamesLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={OilersLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={KingsLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={SharksLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={CanucksLogo} height="30"/>
    </ListItem>
    <ListItem button>
      <img src={GoldenknightsLogo} height="30"/>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Leader Boards</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Points" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Goals" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Assists" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Shutouts" />
    </ListItem>
  </div>
);