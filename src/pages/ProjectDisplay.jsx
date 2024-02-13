import React from "react";
// import { useParams } from "react-router-dom";

// import GitHubIcon from "@material-ui/icons/GitHub";
// import "../../../styles/ProjectDisplay.css";
import { projectList } from "../helpers/projectList"

function ProjectDisplay() {
  // const { id } = useParams();
  // const project = projectList[id];
  return (

    <p>
      {projectList.map((project) => (
        <>
        <p>{project.image}</p>
        <img src={project.image} style={{width: "50px"}}/>
        </>
      ))}
    </p>
    // <div className="project">
    //  
    // 
    //   <p>
    //     <b>Skills:</b> {project.skills}
    //   </p>
    //   <GitHubIcon />
    // </div>
  );
}

export default ProjectDisplay;