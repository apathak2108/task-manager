import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Input from "./components/input";
import Table from "./components/table/Table";
import Button from "./components/button";

function App() {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

  function handleAdd() {
    const newTask = inputFields.map((field) => field.value.trim()).join("\n○");
    if (newTask.trim() !== "") {
      if (editIndex !== null) {
        const updatedData = [...data];
        updatedData[editIndex] = "○" + newTask;
        setData(updatedData);
        console.log(data);
        setEditIndex(null);
      } else {
        setData([...data, "○" + newTask]);
      }
      setInputFields([{ id: 1, value: "" }]);
    }
  }

  function handleExtendTasks() {
    const newTask = [...inputFields];
    newTask.push({ id: newTask.length + 1, value: "" });
    setInputFields(newTask);
  }

  function handleDelete(index) {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  }

  function handleInputChange(id, value) {
    const newInputField = inputFields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setInputFields(newInputField);
  }

  function handleEdit(index, task) {
    const taskValue = task.slice(1); 
    const tasksArray = taskValue.split("\n"); 
    const updatedInputFields = tasksArray.map((task, idx) => ({
      id: idx + 1,
      value: task.trim()
    }));
    setInputFields(updatedInputFields);
    setEditIndex(index);
  }

  return (
    <div className="App">
      <Header />
      {inputFields.map((field) => (
        <Input
          key={field.id}
          value={field.value}
          onChange={(e) => {
            handleInputChange(field.id, e.target.value);
          }}
        />
      ))}

      <Button
        className="add-input-field-btn"
        label="+"
        onClick={handleExtendTasks}
      />
      <Button
        className="add-task-btn"
        label={editIndex !== null ? "Edit Task" : "Add Task"}
        onClick={handleAdd}
      />
      <Table data={data} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
