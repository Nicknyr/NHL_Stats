import React, { Component, createContext } from 'react';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
        case "RANGERS":
          palette = {
            primary: { main: "#0038a8" },
            secondary: { main: "#ce1126" }
          };
          break;
        case "BRUINS":
          palette = {
            primary: { main: "#fcb514" },
            secondary: { main: "#111" }
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
  