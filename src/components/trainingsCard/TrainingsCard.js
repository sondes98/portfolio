import React, { Component } from "react";
import "./TrainingsCard.css";
import { Fade } from "react-reveal";

class TrainingsCard extends Component {
  render() {
    const trainings = this.props.trainings;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <href target="_blank" rel="noopener noreferrer">
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: trainings.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assests/images/${trainings.logo_path}`)}
                  alt={trainings.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  Trainings
                </h3>
              </div>
            </href>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {trainings.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {trainings.subtitle}
            </h3>
            <h3
              className="cert-body-description"
              style={{ color: theme.secondaryText }}
            >
              {trainings.descriptions}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default TrainingsCard;
