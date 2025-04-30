import { useState } from "react";
import "./project.css";
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import Projects_Data from "../../assets/assets/projects_data.js";
import arrow_icon from "../../assets/assets/arrow_icon.svg";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="projets-container">
        {Projects_Data.map((project, index) => (
          <div key={index} className="projects-format">
            <h3>{project.p_no}</h3>
            <h2>{project.p_name}</h2>
            <p>{project.p_desc}</p>
            <div
              className="projects-readmore"
              onClick={() => setActiveProject(project)}
            >
              <p>Read More</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {activeProject && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2>{activeProject.p_name}</h2>
            <ul>
              <ul>
                {activeProject.p_details
                  .trim()
                  .split("●")
                  .filter(Boolean)
                  .map((point, idx) => {
                    const trimmed = point.trim();
                    const isLink = trimmed.toLowerCase().startsWith("link :");

                    if (isLink) {
                      const url = trimmed.split("Link :")[1].trim();
                      return (
                        <li key={idx}>
                          🔗{" "}
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {url}
                          </a>
                        </li>
                      );
                    }

                    return <li key={idx}>{trimmed}</li>;
                  })}
              </ul>
            </ul>

            <button onClick={() => setActiveProject(null)}>Close</button>
          </div>
        </div>
      )}

      {/* {activeProject && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2>{activeProject.p_name}</h2>
            <ul>
              {activeProject.p_details
                .trim()
                .split("●")
                .filter(Boolean)
                .map((point, idx) => (
                  <li key={idx}>{point.trim()}</li>
                ))}
            </ul>

            {activeProject.p_link && (
              <a
                href={activeProject.p_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >link
              </a>
            )}

            <button onClick={() => setActiveProject(null)}>Close</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Projects;
