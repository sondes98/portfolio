import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const { theme, sections } = this.props;

    return (
      <div className="experience-accord">
        <Accordion>
          {sections.map((section, index) => (
            <Panel
              className="accord-panel"
              title={section.title}
              key={`panel-${index}`} // Unique key for each panel
              overrides={{
                Header: {
                  style: () => ({
                    backgroundColor: theme.body,
                    border: "1px solid",
                    borderRadius: "5px",
                    borderColor: theme.headerColor,
                    marginBottom: "3px",
                    fontFamily: "Google Sans Regular",
                    color: theme.text,
                    ":hover": {
                      color: theme.secondaryText,
                    },
                  }),
                },
                Content: {
                  style: () => ({
                    backgroundColor: theme.body,
                  }),
                },
              }}
            >
              {section.experiences.map((experience, expIndex) => (
                <ExperienceCard
                  key={`experience-${expIndex}`} // Unique key for each experience
                  experience={experience}
                  theme={theme}
                />
              ))}
            </Panel>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
