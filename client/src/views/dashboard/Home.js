import React from "react";

import HelloWorld from "../../components/HelloWorld";

import { helloWorld } from "../../requests/home";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    helloWorld((result) => console.log(result));
  }

  render() {
    return <HelloWorld />;
  }
}
