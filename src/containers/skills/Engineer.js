import React, { Component } from "react";

export default class Engineer extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        alt="saad sitting on table"
        src={require("../../assests/images/study.png")}
      ></img>
    );
  }
}
