import React, { Component } from "react";
import "./Trainings.css";
import { Fade } from "react-reveal";
import { trainings } from "../../portfolio";
import TrainingsCard from "../../components/trainingsCard/TrainingsCard";

class Trainings extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Trainings
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {trainings.trainings.map((cert) => {
            return <TrainingsCard trainings={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Trainings;
