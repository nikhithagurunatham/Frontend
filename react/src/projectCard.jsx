import { Component } from "react";
import StatusBadge from "./StatusBadge";


function formatCurrency(amount) {
  return "Rs " + new Intl.NumberFormat("en-IN").format(amount);
}

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

class ProjectCard extends Component {
  render() {
    const project = this.props.project;

    return (
      <div className="project-card">

        <h2>{project.name}</h2>

        <p>Client: {project.client}</p>

        <StatusBadge status={project.status} />

        <p>Owner: {project.owner}</p>

        <p>Hours: {project.hours}</p>

        <p>
          Date: {formatDate(project.startDate)} -{" "}
          {formatDate(project.endDate)}
        </p>

        <p>
          Final Cost:{" "}
          {project.finalCost === null ||
          project.finalCost === undefined ||
          project.finalCost === 0
            ? "Not estimated"
            : formatCurrency(project.finalCost)}
        </p>

      </div>
    );
  }
}

export default ProjectCard;