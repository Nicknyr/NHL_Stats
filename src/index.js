import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger';
import reducers from './reducers';
import { BrowserRouter } from "react-router-dom";
import { Router, Route, Switch } from 'react-router-dom';
import Awards from './components/Awards';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from "./components/Theme";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk, logger)
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/awards" component={Awards} />
            <Route exact path="/bruins" component={Dashboard} />
            <Route exact path="/sabres" component={Dashboard} />
            <Route exact path="/redwings" component={Dashboard} />
            <Route exact path="/panthers" component={Dashboard} />
            <Route exact path="/canadiens" component={Dashboard} />
            <Route exact path="/senators" component={Dashboard} />
            <Route exact path="/lightning" component={Dashboard} />
            <Route exact path="/mapleleafs" component={Dashboard} />
            <Route exact path="/hurricanes" component={Dashboard} />
            <Route exact path="/bluejackets" component={Dashboard} />
            <Route exact path="/devils" component={Dashboard} />
            <Route exact path="/islanders" component={Dashboard} />
            <Route exact path="/rangers" component={Dashboard} />
            <Route exact path="/flyers" component={Dashboard} />
            <Route exact path="/penguins" component={Dashboard} />
            <Route exact path="/capitals" component={Dashboard} />
            <Route exact path="/blackhawks" component={Dashboard} />
            <Route exact path="/avalanche" component={Dashboard} />
            <Route exact path="/stars" component={Dashboard} />
            <Route exact path="/wild" component={Dashboard} />
            <Route exact path="/predators" component={Dashboard} />
            <Route exact path="/blues" component={Dashboard} />
            <Route exact path="/jets" component={Dashboard} />
            <Route exact path="/ducks" component={Dashboard} />
            <Route exact path="/coyotes" component={Dashboard} />
            <Route exact path="/flames" component={Dashboard} />
            <Route exact path="/oilers" component={Dashboard} />
            <Route exact path="/kings" component={Dashboard} />
            <Route exact path="/sharks" component={Dashboard} />
            <Route exact path="/canucks" component={Dashboard} />
            <Route exact path="/goldenknights" component={Dashboard} />
            <App />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
