import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import routes from "./routes";

import AuthContext from "./context/AuthContext";

export default class App extends React.Component {
  render() {
    return (
      <AuthContext.Provider value={{}}>
        <BrowserRouter basename={process.env.REACT_APP_BASENAME || ""}>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={<Params route={route} />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    );
  }
}

const Params = (props) => {
  let { folderId } = useParams();

  return (
    <props.route.layout>
      <props.route.component folderId={folderId} />
    </props.route.layout>
  );
};
