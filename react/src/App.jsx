import ProjectCard from "../src/projectCard.jsx";

function App() {
  const project = {
    name: "Website Redesign",
    client: "ABC Technologies",
    status: "In Progress",
    owner: "Rahul",
    hours: 120,
    finalCost: 530332
  };

  return (
    <div>
      <ProjectCard project={project} />
    </div>
  );
}

export default App;