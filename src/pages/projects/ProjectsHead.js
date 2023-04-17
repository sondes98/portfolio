import React, { Component } from "react";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
export default class projectsHead extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <img
                  src={require(`../../assests/images/setting.png`)}
                  alt="projects"
                />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
    );
  }
}
