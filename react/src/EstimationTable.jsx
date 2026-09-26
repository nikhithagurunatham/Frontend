import { useState } from "react";
import "./EstimationTable.css";

const roles = {
  frontend: {
    id: "frontend",
    name: "Frontend Developer",
    rate: 800
  },
  backend: {
    id: "backend",
    name: "Backend Developer",
    rate: 1000
  },
  designer: {
    id: "designer",
    name: "UI/UX Designer",
    rate: 700
  },
  tester: {
    id: "tester",
    name: "Tester",
    rate: 600
  }
};

const DEFAULT_ROLE_ID = "frontend";

function createEmptyTask() {
  return {
    id: crypto.randomUUID(),
    name: "",
    roleId: DEFAULT_ROLE_ID,
    hours: ""
  };
}

function EstimationTable() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    setTasks(prev => [...prev, createEmptyTask()]);
  };

  const handleTaskChange = (taskId, field, value) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? { ...task, [field]: value }
          : task
      )
    );
  };

  const handleDeleteTask = taskId => {
    setTasks(prev =>
      prev.filter(task => task.id !== taskId)
    );
  };

  const totalHours = tasks.reduce(
    (total, task) => total + Number(task.hours || 0),
    0
  );

  const totalCost = tasks.reduce(
    (total, task) =>
      total + Number(task.hours || 0) * roles[task.roleId].rate,
    0
  );

  return (
  <div className="estimation-page">

    {/* TOP BOX */}
  <div className="estimation-header">

  <div className="header-top">
    <h1>Task Estimation</h1>

    <button onClick={handleAddTask}>
      Add Task
    </button>
  </div>

</div>


    {/* MIDDLE BOX */}
    <div className={`task-box ${tasks.length === 0 ? "empty" : ""}`}>
      
  {tasks.length === 0 ? (
    <div className="empty-task-state">
      <p>Click on add task to get started</p>
      <button onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  ) : (
    <>
      <div className="task-header">
        <span>No</span>
        <span>Task Name</span>
        <span>Role</span>
        <span>Hours</span>
        <span>Cost</span>
        <span>Action</span>
      </div>

      {tasks.map((task, index) => (
        <div className="task-row" key={task.id}>

          <span>{index + 1}</span>

          <input
            type="text"
            placeholder="Enter task name"
            value={task.name}
            onChange={e =>
              handleTaskChange(
                task.id,
                "name",
                e.target.value
              )
            }
          />

          <select
            value={task.roleId}
            onChange={e =>
              handleTaskChange(
                task.id,
                "roleId",
                e.target.value
              )
            }
          >
            {Object.values(roles).map(role => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Hours"
            value={task.hours}
            onChange={e =>
              handleTaskChange(
                task.id,
                "hours",
                e.target.value
              )
            }
          />

          <span>
            {task.hours === "" || Number(task.hours) === 0
              ? "-"
              : `₹${Number(task.hours) * roles[task.roleId].rate}`}
          </span>

          <button
            className="delete-btn"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>

        </div>
      ))}
    </>
  )}
</div>


    {/* BOTTOM BOX */}
    <div className="summary-box">

  <div>
    <span>Total Tasks</span>
    <strong>{tasks.length}</strong>
  </div>

  <div>
    <span>Total Hours</span>
    <strong>{totalHours}</strong>
  </div>

  <div>
    <span>Total Cost</span>
    <strong>₹{totalCost}</strong>
  </div>

</div>

  </div>
);
}

export default EstimationTable;