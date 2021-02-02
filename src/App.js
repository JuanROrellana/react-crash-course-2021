import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Grocey",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "On line Buying",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
