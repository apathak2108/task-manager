import React, { useState } from "react";
import Header from "../../components/Header";
import Input from "../../components/input/Input";
import Table from "../../components/table/Table";
import Button from "../../components/button";
import Quotes from "../../components/quotes/Quotes";

function Home() {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

  function handleAdd() {
    if (editIndex !== null) {
      const newData = [...data];
      newData[editIndex] = {
        id: newData[editIndex].id,
        date: new Date(),
        todos: inputFields,
      };
      setData(newData);
      setEditIndex(null);
    } else {
      const newData = {
        id: data.length + 1,
        date: new Date(),
        todos: inputFields,
      };
      setData([...data, newData]);
    }
    setInputFields([{ id: 1, value: "" }]);
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
        onClick={handleAdd}
      />
      <Table data={data} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default Home;
