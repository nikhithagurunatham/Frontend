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
function ProjectCard(props) {
  return (
    <div className="project-card">
      
      <h2>{props.project.name}</h2>
      <p>Client: {props.project.client}</p>
      <StatusBadge status={props.project.status} />
      <p>Owner: {props.project.owner}</p>
      <p>Hours: {props.project.hours}</p>
      <p>Date: {formatDate(props.project.startDate)} - {formatDate(props.project.endDate)}</p>
      <p>
        Final Cost:{" "}
        {props.project.finalCost > 0
          ? formatCurrency(props.project.finalCost)
          : "Not estimated"}
      </p>
    </div>
  );
}

export default ProjectCard;