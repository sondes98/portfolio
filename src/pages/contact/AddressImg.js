import React, { Component } from "react";

export default class AddressImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
      alt="message sent"
      src={require("../../assests/images/withherpc.jpg")}
    ></img>
    );
  }
}
