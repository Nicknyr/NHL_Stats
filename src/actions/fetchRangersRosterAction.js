import axios from "axios";

export function fetchRangersRoster() {
    return function(dispatch) {
        dispatch({ type: "FETCH_RANGERS_ROSTER" })

        axios.get('https://statsapi.web.nhl.com/api/v1/teams/3/roster')
            .then((response) => {
                dispatch({
                    type:"FETCH_RANGERS_ROSTER_FULFILLED",
                    payload: response.data
                })

                // Iterates through roster and grabs each player ID and dispatches it to fetchRangersPlayerSeasonStats function
                for(let i = 0; i < response.data.roster.length; i++) {
                  const playerIDArray = [];
                  playerIDArray.push(response.data.roster[i].person.id);
                  console.log('playerIDArray : ',  playerIDArray);
                  dispatch(fetchRangersPlayerSeasonStats([playerIDArray]));
                }

                //const playerID = response.data.roster[14].person.id;
                //console.log("response.data : " + playerID);
                //dispatch(fetchRangersPlayerSeasonStats(playerID));
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_RANGERS_ROSTER_REJECTED",
                    payload: err
                })
            })
    }
}

export function fetchRangersPlayerSeasonStats(playerIDArray) {
    return function(dispatch) {
        dispatch({ type: "FETCH_PLAYER_STATS_BY_YEAR"})

        // Iterates through array of player IDs and makes requests for stats for each player
        for(let i = 0; i < playerIDArray.length; i++) {
          axios.get(`https://statsapi.web.nhl.com/api/v1/people/${playerIDArray[i]}/stats?stats=statsSingleSeason&season=20182019`)
              .then((response) => {
                  dispatch({
                      type: "FETCH_PLAYERS_STATS_BY_YEAR_FULFILLED",
                      payload: response.data
                  })
              })
              .catch((err) => {
                  dispatch({
                      type: "FETCH_PLAYERS_STATS_BY_YEAR_REJECTED",
                      payload: err
                  })
              })
        }

    }
}