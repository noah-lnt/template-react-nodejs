import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes";

import AuthContext from "./context/AuthContext"

export default class App extends React.Component {
  render() {
    return (
      <AuthContext.Provider value={
        {}
      }>
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
          <div>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={(props) => {
                    return (
                      <route.layout {...props} >
                        <route.component {...props} />
                      </route.layout>
                    );
                  }
                  }
                />
              );
            })}
          </div>
        </Router>
      </AuthContext.Provider>
    )
  }
}
