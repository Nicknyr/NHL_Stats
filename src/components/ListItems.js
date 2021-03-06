import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
import Link from '@material-ui/core/Link';

export const mainListItems = (
  <div>
    {/* Atlantic Division */}
    <ListSubheader inset>Atlantic Division</ListSubheader>
    <Link href="/bruins">
      <ListItem button>
        <img src={BruinsLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/sabres">
      <ListItem button>
        <img src={SabresLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/redwings">
      <ListItem button>
        <img src={RedwingsLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/panthers">
      <ListItem button>
        <img src={PanthersLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/canadiens">
      <ListItem button>
        <img src={CanadiensLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/senators">
      <ListItem button>
        <img src={SenatorsLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/lightning">
      <ListItem button>
        <img src={LightningLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/mapleleafs">
      <ListItem button>
        <img src={MapleleafsLogo} height="30"/>
      </ListItem>
    </Link>

    {/* Metropolitan Division */}
    <ListSubheader inset>Metropolitan Division</ListSubheader>
    <Link href="/hurricanes">
      <ListItem button>
        <img src={HurricanesLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/bluejackets">
      <ListItem button>
        <img src={BluejacketsLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/devils">
      <ListItem button>
        <img src={DevilsLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/islanders">
      <ListItem button>
        <img src={IslandersLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/rangers">
      <ListItem button>
        <img src={RangersLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/flyers">
      <ListItem button>
        <img src={FlyersLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/penguins">
      <ListItem button>
        <img src={PenguinsLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/capitals">
      <ListItem button>
        <img src={CapitalsLogo} height="30"/>
      </ListItem>
    </Link>

    {/* Central Division */}
    <ListSubheader inset>Central Division</ListSubheader>
    <Link href="/blackhawks">
      <ListItem button>
        <img src={BlackhawksLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/avalanche">
      <ListItem button>
        <img src={AvalancheLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/stars">
      <ListItem button>
        <img src={StarsLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/wild">
      <ListItem button>
        <img src={WildLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/predators">
      <ListItem button>
        <img src={PredatorsLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/blues">
      <ListItem button>
        <img src={BluesLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/jets">
      <ListItem button>
        <img src={JetsLogo} height="30"/>
      </ListItem>
    </Link>

    {/* Pacific Division */}
    <ListSubheader inset>Pacific Division</ListSubheader>
    <Link href="/ducks">
      <ListItem button>
        <img src={DucksLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/coyotes">
      <ListItem button>
        <img src={CoyotesLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/flames">
      <ListItem button>
        <img src={FlamesLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/oilers">
      <ListItem button>
        <img src={OilersLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/kings">
      <ListItem button>
        <img src={KingsLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/sharks">
      <ListItem button>
        <img src={SharksLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/canucks">
      <ListItem button>
        <img src={CanucksLogo} height="30"/>
      </ListItem>
    </Link>
    <Link href="/goldenknights">
      <ListItem button>
        <img src={GoldenknightsLogo} height="30"/>
      </ListItem>
    </Link>
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
    <ListSubheader inset>Leader Boards</ListSubheader>
    <ListItem button>
      <Link href="/awards">
        <ListItemText primary="NHL Awards" />
      </Link>
    </ListItem>
  </div>
);