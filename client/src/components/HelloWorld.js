import React from "react";

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        <h1 style={{ margin: "auto" }}>Hello World !</h1>
      </div>
    );
  }
}
