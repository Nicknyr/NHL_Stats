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


const teams = {
    devils: {
        name: 'devils',
        id: 1,
        logo: `${DevilsLogo}`,
        primaryColor: '#ce1126',
        secondaryColor: '#111',
        tertiaryColor: '#FFF',
    },
    islanders: {
        name: 'islanders',
        id: 2,
        logo: `${IslandersLogo}`,
        primaryColor: '#00539b',
        secondaryColor: '#f47d30',
        tertiaryColor: '#FFF',
    },
    rangers: {
        name: 'rangers',
        id: 3,
        logo: `${RangersLogo}`,
        primaryColor: '#0038a8',
        secondaryColor: '#ce1126',
        tertiaryColor: '#FFF'
    },
    flyers: {
        name: 'flyers',
        id: 4,
        logo: `${FlyersLogo}`,
        primaryColor: '#f74902',
        secondaryColor: '#111',
        tertiaryColor: '#FFF'
    },
    penguins: {
        name: 'penguins',
        id: 5,
        logo: `${PenguinsLogo}`,
        primaryColor: '#fcb514',
        secondaryColor: '#111',
        tertiaryColor: '#FFF'
    },
    bruins: {
        name: 'bruins',
        id: 6,
        logo: `${BruinsLogo}`,
        primaryColor: '#fcb514',
        secondaryColor: '#111',
        tertiaryColor: '#FFF'
    },
    sabres: {
        name: 'sabres',
        id: 7,
        logo: `${SabresLogo}`,
        primaryColor: '#002654',
        secondaryColor: '#fcb514',
        tertiaryColor: '#FFF'
    },
    canadiens: {
        name: 'canadiens',
        id: 8,
        logo: `${CanadiensLogo}`,
        primaryColor: '#af1e2d',
        secondaryColor: '#192168',
        tertiaryColor: '#FFF'
    },
    senators: {
        name: 'senators',
        id: 9,
        logo: `${SenatorsLogo}`,
        primaryColor: '#ce1126',
        secondaryColor: '#bf910c',
        tertiaryColor: '#FFF'
    },
    mapleleafs: {
        name: 'mapleleafs',
        id: 10,
        logo: `${MapleleafsLogo}`,
        primaryColor: '#FFF',
        secondaryColor: '#00205b',
        tertiaryColor: '#FFF'
    },
    hurricanes: {
        name: 'hurricanes',
        id: 12,
        logo: `${HurricanesLogo}`,
        primaryColor: '#ce1126',
        secondaryColor: '#111',
        tertiaryColor: '#FFF'
    },
    panthers: {
        name: 'panthers',
        id: 13,
        logo: `${PanthersLogo}`,
        primaryColor: '#c8102e',
        secondaryColor: '#b9975b',
        tertiaryColor: '#FFF'
    },
    lightning: {
        name: 'lightning',
        id: 14,
        logo: `${LightningLogo}`,
        primaryColor: '#FFF',
        secondaryColor: '#002868',
        tertiaryColor: '#FFF'
    },
    capitals: {
        name: 'capitals',
        id: 15,
        logo: `${CapitalsLogo}`,
        primaryColor: '#cf0a2c',
        secondaryColor: '#041e41',
        tertiaryColor: '#FFF'
    },
    blackhawks: {
        name: 'blackhawks',
        id: 16,
        logo: `${BlackhawksLogo}`,
        primaryColor: '#CF0A2C',
        secondaryColor: '#111',
        tertiaryColor: '#FFF'
    },
    redwings: {
        name: 'redwings',
        id: 17,
        logo: `${RedwingsLogo}`,
        primaryColor: '#ce1126',
        secondaryColor: '#111',
        tertiaryColor: '#FFF'
    },
    predators: {
        name: 'predators',
        id: 18,
        logo: `${PredatorsLogo}`,
        primaryColor: '#FFB81C',
        secondaryColor: '#041E42',
        tertiaryColor: '#FFF'
    },
    blues: {
        name: 'blues',
        id: 19,
        logo: `${BluesLogo}`,
        primaryColor: '#002f87',
        secondaryColor: '#002654',
        tertiaryColor: '#fcb514'
    },
    flames: {
        name: 'flames',
        id: 20,
        logo: `${FlamesLogo}`,
        primaryColor: '#ce1126',
        secondaryColor: '#f3bc52',
        tertiaryColor: '#FFF'
    },
    avalanche: {
        name: 'avalanche',
        id: 21,
        logo: `${AvalancheLogo}`,
        primaryColor: '#6F263D',
        secondaryColor: '#236192',
        tertiaryColor: '#FFF'
    },
    oilers: {
        name: 'oilers',
        id: 22,
        logo: `${OilersLogo}`,
        primaryColor: '#ff4c00',
        secondaryColor: '#041e41',
        tertiaryColor: '#FFF'
    },
    canucks: {
        name: 'canucks',
        id: 23,
        logo: `${CanucksLogo}`,
        primaryColor: '#003d7d',
        secondaryColor: '#00875B',
        tertiaryColor: '#FFF'
    },
    ducks: {
        name: 'ducks',
        id: 24,
        logo: `${DucksLogo}`,
        primaryColor: '#f95602',
        secondaryColor: '#b5985a',
        tertiaryColor: '#111'
    },
    stars: {
        name: 'stars',
        id: 25,
        logo: `${StarsLogo}`,
        primaryColor: '#006847',
        secondaryColor: '#111',
        tertiaryColor: '#FFF'
    },
    kings: {
        name: 'kings',
        id: 26,
        logo: `${KingsLogo}`,
        primaryColor: '#FFF',
        secondaryColor: '#111',
        tertiaryColor: '#FFF'
    },
    sharks: {
        name: 'sharks',
        id: 28,
        logo: `${SharksLogo}`,
        primaryColor: '#006d75',
        secondaryColor: '#111',
        tertiaryColor: '#FFF'
    },
    bluejackets: {
        name: 'bluejackets',
        id: 29,
        logo: `${BluejacketsLogo}`,
        primaryColor: '#002654',
        secondaryColor: '#ce1126',
        tertiaryColor: '#FFF'
    },
    wild: {
        name: 'wild',
        id: 30,
        logo: `${WildLogo}`,
        primaryColor: '#024930',
        secondaryColor: '#af1e24',
        tertiaryColor: '#FFF'
    },
    jets: {
        name: 'jets',
        id: 52,
        logo: `${JetsLogo}`,
        primaryColor: '#041e41',
        secondaryColor: '#ac162c',
        tertiaryColor: '#FFF'
    },
    coyotes: {
        name: 'coyotes',
        id: 53,
        logo: `${CoyotesLogo}`,
        primaryColor: '#8c2633',
        secondaryColor: '#111',
        tertiaryColor: '#FFF'
    },
    goldenknights: {
        name: 'goldenknights',
        id: 54,
        logo: `${GoldenknightsLogo}`,
        primaryColor: '#b4975a',
        secondaryColor: '#333f42',
        tertiaryColor: '#111'
    },

}

export default teams;





