import ProjectCard from "./projectCard.jsx";

function App() {
  const projects = [
    {
      id:1,
      name: "Frontend Development",
      client: "TCS",
      status: "In Progress",
      owner: "Nikhitha",
      hours: 120,
      finalCost: 530332
    },
    {
      id:2,
      name: "backend Development",
      client: "ttd",
      status: "Completed",
      owner: "Vishwa",
      hours: 80,
      finalCost: 250000
    },
    {
      id:3,
      name: "E-commerce",
      client: "amazon",
      status: "Pending",
      owner: "Virat",
      hours: 60,
      finalCost: 0
    }
  ];

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
    key={project.id}
    project={project}
  />
      ))}
    </div>
  );
}

export default App;