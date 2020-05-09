import React, { Component, createContext } from 'react';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Teams from './Teams';
import teams from './Teams';

const DispatchContext = React.createContext(() => {
    throw new Error("Forgot to wrap component in `ThemeProvider`");
  });
  
  DispatchContext.displayName = "ThemeDispatchContext";
  
  const themeInitialOptions = {
    colors: "DEFAULT"
  };
  
  export function ThemeProvider(props) {
    const { children } = props;
  
    const [themeOptions, dispatch] = React.useReducer((state, action) => {
      switch (action.type) {
        case "CHANGE":
          return {
            ...state,
            colors: action.payload.colors || "DEFAULT"
          };
        default:
          throw new Error(`Unrecognized type ${action.type}`);
      }
    }, themeInitialOptions);
  
    const { colors } = themeOptions;
    const theme = React.useMemo(() => {
      let palette;
  
      switch (colors) {
        case "DEVILS":
            palette = {
              primary: { main: teams.devils.primaryColor },
              secondary: { main: teams.devils.secondaryColor }
            };
          break;
        case "ISLANDERS":
          palette = {
            primary: { main: teams.islanders.primaryColor },
            secondary: { main: teams.islanders.secondaryColor }
          };
          break;
        case "RANGERS":
          palette = {
            primary: { main: "#0038a8" },
            secondary: { main: "#ce1126" }
          };
          break;
        case "FLYERS":
          palette = {
            primary: { main: teams.flyers.primaryColor },
            secondary: { main: teams.flyers.secondaryColor }
          };
          break;
        case "PENGUINS":
          palette = {
            primary: { main: teams.penguins.primaryColor },
            secondary: { main: teams.penguins.secondaryColor }
          };
          break;
        case "BRUINS":
          palette = {
            primary: { main: "#fcb514" },
            secondary: { main: "#111" }
          };
          break;
        case "SABRES":
          palette = {
            primary: { main: teams.sabres.primaryColor },
            secondary: { main: teams.sabres.secondaryColor }
          };
          break;
        case "CANADIENS":
          palette = {
            primary: { main: teams.canadiens.primaryColor },
            secondary: { main: teams.canadiens.secondaryColor }
          };
          break;
        case "SENATORS":
          palette = {
            primary: { main: teams.senators.primaryColor },
            secondary: { main: teams.senators.secondaryColor }
          };
          break;
        case "MAPLELEAFS":
          palette = {
            primary: { main: teams.mapleleafs.primaryColor },
            secondary: { main: teams.mapleleafs.secondaryColor }
          };
          break;
        case "HURRICANES":
          palette = {
            primary: { main: teams.hurricanes.primaryColor },
            secondary: { main: teams.hurricanes.secondaryColor }
          };
          break;
        case "PANTHERS":
          palette = {
            primary: { main: teams.panthers.primaryColor },
            secondary: { main: teams.panthers.secondaryColor }
          };
          break;
        case "LIGHTNING":
          palette = {
            primary: { main: teams.lightning.primaryColor },
            secondary: { main: teams.lightning.secondaryColor }
          };
          break;
        case "CAPITALS":
          palette = {
            primary: { main: teams.capitals.primaryColor },
            secondary: { main: teams.capitals.secondaryColor }
          };
          break;
        case "BLACKHAWKS":
          palette = {
            primary: { main: teams.blackhawks.primaryColor },
            secondary: { main: teams.blackhawks.secondaryColor }
          };
          break;
        case "REDWINGS":
          palette = {
            primary: { main: teams.redwings.primaryColor },
            secondary: { main: teams.redwings.secondaryColor }
          };
          break;
        case "PREDATORS":
          palette = {
            primary: { main: teams.predators.primaryColor },
            secondary: { main: teams.predators.secondaryColor }
          };
          break;
        case "BLUES":
          palette = {
            primary: { main: teams.blues.primaryColor },
            secondary: { main: teams.blues.secondaryColor }
          };
          break;
        case "FLAMES":
          palette = {
            primary: { main: teams.flames.primaryColor },
            secondary: { main: teams.flames.secondaryColor }
          };
          break;
        case "AVALANCHE":
          palette = {
            primary: { main: teams.avalanche.primaryColor },
            secondary: { main: teams.avalanche.secondaryColor }
          };
          break;
        case "OILERS":
          palette = {
            primary: { main: teams.oilers.primaryColor },
            secondary: { main: teams.oilers.secondaryColor }
          };
          break;
        case "CANUCKS":
          palette = {
            primary: { main: teams.canucks.primaryColor },
            secondary: { main: teams.canucks.secondaryColor }
          };
          break;
        case "DUCKS":
          palette = {
            primary: { main: teams.ducks.primaryColor },
            secondary: { main: teams.ducks.secondaryColor }
          };
          break;
        case "STARS":
          palette = {
            primary: { main: teams.stars.primaryColor },
            secondary: { main: teams.stars.secondaryColor }
          };
          break;
        case "KINGS":
          palette = {
            primary: { main: teams.kings.primaryColor },
            secondary: { main: teams.kings.secondaryColor }
          };
          break;
        case "SHARKS":
          palette = {
            primary: { main: teams.sharks.primaryColor },
            secondary: { main: teams.sharks.secondaryColor }
          };
          break;
        case "BLUEJACKETS":
          palette = {
            primary: { main: teams.bluejackets.primaryColor },
            secondary: { main: teams.bluejackets.secondaryColor }
          };
          break;
        case "WILD":
          palette = {
            primary: { main: teams.wild.primaryColor },
            secondary: { main: teams.wild.secondaryColor }
          };
          break;
        case "JETS":
          palette = {
            primary: { main: teams.jets.primaryColor },
            secondary: { main: teams.jets.secondaryColor }
          };
          break;
        case "COYOTES":
          palette = {
            primary: { main: teams.coyotes.primaryColor },
            secondary: { main: teams.coyotes.secondaryColor }
          };
          break;
        case "GOLDENKNIGHTS":
          palette = {
            primary: { main: teams.goldenknights.primaryColor },
            secondary: { main: teams.goldenknights.secondaryColor }
          };
          break;
        default:
          palette = {
            primary: { main: "#673ab7" },
            secondary: { main: "#111" }
          };
          break;
      }
  
      const nextTheme = createMuiTheme({ palette });
      return nextTheme;
    }, [colors]);
  
    return (
      <MuiThemeProvider theme={theme}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </MuiThemeProvider>
    );
  }
  
  export function useChangeTheme() {
    const dispatch = React.useContext(DispatchContext);
    return React.useCallback(
      themeOptions => dispatch({ type: "CHANGE", payload: themeOptions }),
      [dispatch]
    );
  }
  