import React, { useState } from "react";

export default function ToDoList() {
	const [taskList, setTaskList] = useState([]);
	const [input, setInput] = useState("");

	const handleAddTask = event => {
		if (event.keyCode == 13 && input !== "") {
			setTaskList(taskList.concat(input));
			setInput("");
		}
	};

	const handleDeleteTask = index => {
		taskList.splice(index, 1);
		setTaskList([...taskList]);
	};

	return (
		<div className="container">
			<h3>Lilli's To Do List</h3>
			<div className="list-container">
				<input
					type="text"
					onChange={e => setInput(e.target.value)}
					value={input}
					onKeyUp={handleAddTask}
					placeholder={
						taskList.length == 0
							? "No hay tareas pendientes"
							: "Agrega una tarea"
					}
				/>
				<ul>
					{taskList.map((task, index) => (
						<li key={index}>
							{task}
							<span onClick={() => handleDeleteTask(index)}>
								<i className="fas fa-trash"></i>
							</span>
						</li>
					))}
				</ul>
				<p>
					{taskList.length == 0
						? "¡Felicidades! No tienes tareas pendientes"
						: taskList.length == 1
						? taskList.length + " tarea pendiente"
						: taskList.length + " tareas pendientes"}
				</p>
			</div>
		</div>
	);
}
