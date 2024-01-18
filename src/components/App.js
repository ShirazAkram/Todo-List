import React, { useState } from "react";
import "./../styles/App.css";


function App() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');
	const [editTaskText, setEditTaskText] = useState('');
	const [editMode, setEditMode] = useState(false);
  
	const addTask = () => {
	  if (newTask === '') return;
	  setTasks([...tasks, newTask]);
	  setNewTask('');
	};
  
	const deleteTask = (index) => {
	  const updatedTasks = [...tasks];
	  updatedTasks.splice(index, 1);
	  setTasks(updatedTasks);
	};
  
	const editTask = (index) => {
	  setEditTaskText(tasks[index]);
	  setEditMode(index);
	};
  
	const saveTask = (index) => {
	  if (editTaskText === '') return;
	  const updatedTasks = [...tasks];
	  updatedTasks[index] = editTaskText;
	  setTasks(updatedTasks);
	  setEditMode(false);
	};

	
  
	return (
	    <div id="main" >
			<h1>Todo List</h1>
			<div>
				<textarea
					id="task"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					placeholder="Enter a new task"
				/>
				<br/>
				<button id="btn" onClick={addTask}>Add Task</button>
			</div>
			<ul>
				{tasks.map((task, index) => (
					<div className="list" key={index}>
						{editMode === index ? (
							<ul>
								<textarea
									className="editTask"
									value={editTaskText}
									onChange={(e) => setEditTaskText(e.target.value)}
								/>
								<br/>
								<button
									className="saveTask"
									onClick={() => saveTask(index)}>
									Save
								</button>
							</ul>
						) : (
								<div id="todo-btn-container">
									{task}
									<button className="edit" onClick={() => editTask(index)}>Edit</button>
									<button className="delete" onClick={() => deleteTask(index)}>Delete</button>
								</div>
						    )}
					</div>
				))}
			</ul>
	    </div>
	);
  }
  
export default App;
