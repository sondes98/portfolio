import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
							alt="fullstack"
							src={require("../../assests/images/study.png")}
						></img>
    );
  }
}
