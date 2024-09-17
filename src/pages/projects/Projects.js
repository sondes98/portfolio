import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
// import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsHead from "./ProjectsHead";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <ProjectsHead theme={theme} />

        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
