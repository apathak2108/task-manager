import React from "react";
import "./Table.css";
import Delete from "./icons/delete.png";
import Edit from "./icons/edit.png";

function Table({ data, onDelete, onEdit }) {
  const currDate = new Date().toLocaleDateString("en-IN");

  return (
    <div className="task-table">
      <table border="1">
        <thead className="table-head">
          <th>S. No.</th>
          <th>Date</th>
          <th>Tasks Pending</th>
          <th>Action</th>
        </thead>
        <tbody>
          {data?.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{currDate}</td>
              <td>
                {value?.todos?.map((todo) => (
                  <ul className="ul">
                    <li>{todo.value}</li>
                  </ul>
                ))}
              </td>

              <td>
                <img
                  src={Delete}
                  id="delete-btn"
                  onClick={() => onDelete(index)}
                  alt="Delete"
                />
                <img
                  src={Edit}
                  id="edit-btn"
                  onClick={() => onEdit(index, value)}
                  alt="Edit"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
