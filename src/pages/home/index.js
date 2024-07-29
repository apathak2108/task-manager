import React, { useState } from "react";
import Header from "../../components/header";
import Input from "../../components/input";
import Table from "../../components/table";
import Button from "../../components/button";
import Quotes from "../../components/quotes";

function Home() {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

  function handleAddTasks() {
    const newTask = data.push(inputFields);
    setData(newTask);
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
    const newInputField = inputFields?.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setInputFields(newInputField);
  }

  function handleEdit(index, task) {
    setInputFields(task.todos);
    setEditIndex(index);
  }

  return (
    <div className="App">
      <Header />
      <Quotes />
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
        onClick={handleAddTasks}
      />
      <Table data={data} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default Home;
