import ProjectCard from "./projectCard.jsx";
import "./App.css"
function App() {
  const projects = [
    {
      id:1,
      name: "Frontend Development",
      client: "TCS",
      status: "In Progress",
      owner: "Nikhitha",
      startDate: "2026-09-15",
      endDate: "2026-09-25",
      hours: 120,
      finalCost: 530332
    },
    {
      id:2,
      name: "backend Development",
      client: "TTD",
      status: "Completed",
      owner: "Vishwa",
      startDate: "2026-08-01",
      endDate: "2026-08-15",
      hours: 80,
      finalCost: 250000
    },
    {
      id:3,
      name: "E-commerce",
      client: "amazon",
      status: "Pending",
      owner: "Virat",
      startDate: "2026-09-15",
      endDate: "2026-09-30",
      hours: 60,
      finalCost: 0
    }
  ];

  return (
    <div>
    <h1>Project details</h1>
    <div className="project-container">
      {projects.map((project) => (
        <ProjectCard
    key={project.id}
    project={project}
  />
      ))}
    </div>
    </div>
  );
}

export default App;