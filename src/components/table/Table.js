import React from "react";
import "./Table.css";
import Delete from "./icons/delete.png";
import Edit from "./icons/edit.png";

function Table({ data }) {
  const currDate = new Date().toLocaleDateString("en_IN");

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
          {data?.map((v, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{currDate}</td>
              <td>{v}</td>
              <td>
                <img src={Delete} id="delete-btn" />
                <img src={Edit} id="edit-btn" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
