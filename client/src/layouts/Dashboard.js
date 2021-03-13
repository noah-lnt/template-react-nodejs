import React from "react";

import AuthContext from "../context/AuthContext"

export default class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static contextType = AuthContext;

  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}