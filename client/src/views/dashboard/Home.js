import React from "react";

import HelloWorld from "../../components/HelloWorld"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HelloWorld />
  }
}
