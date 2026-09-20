import StatusBadge from "./StatusBadge";

function formatCurrency(amount) {
  return "Rs " + new Intl.NumberFormat("en-IN").format(amount);
}

function ProjectCard(props) {
  return (
    <div>
      <h2>{props.project.name}</h2>
      <p>Client: {props.project.client}</p>
      <StatusBadge status={props.project.status} />
      <p>Owner: {props.project.owner}</p>
      <p>Hours: {props.project.hours}</p>

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