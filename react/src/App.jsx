// import ProjectCard from "./projectCard.jsx";
// import "./App.css"
// function App() {
//   const projects = [
//   {
//     id: crypto.randomUUID(),
//     name: "CRM Application",
//     client: "ABC Company",
//     status: "In Progress",
//     owner: "Nikhitha",
//     hours: 120,
//     startDate: "2026-09-01",
//     endDate: "2026-10-15",
//     finalCost: 96000
//   },
//   {
//     id: crypto.randomUUID(),
//     name: "E-Commerce Website",
//     client: "XYZ Company",
//     status: "Completed",
//     owner: "Rahul",
//     hours: 200,
//     startDate: "2026-08-01",
//     endDate: "2026-09-10",
//     finalCost: 150000
//   }
// ];

//   return (
//     <div>
//     <h1>Project details</h1>
//     <div className="project-container">
//       {projects.length === 0 && <p>No projects found.</p>}
//       {projects.map((project) => (
//         <ProjectCard
//     key={project.id}
//     project={project}
//   />
//       ))}
//     </div>
//     </div>
//   );
// }

// export default App;



import EstimationTable from "./EstimationTable.jsx";

function App() {
  return (
    <div>
      <EstimationTable />
    </div>
  );
}

export default App;