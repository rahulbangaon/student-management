import React from "react";
import "./style.css";
import TableRow from "../../components/tableRow/TableRow";
import { useEffect, useState } from "react";
import { getAllStudents, deleteStudent } from "../../utils/api";

const Students = () => {
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const response = await getAllStudents();
    setAllStudents(response.data);
  };

  const [del, setDel] = useState([]);

  const handleDelete = async () => {
    try {
      del.map((id) => {
        deleteStudent(id);
      });
      window.location.reload();
    } catch (error) {
      console.log("Error in seleced deleting");
    }
  };

  return (
    <div className="students-container">
      <h3>List of All Students</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>Full Name</th>
              <th>Roll Number</th>
              <th>Course Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Update / Delete</th>
            </tr>
          </thead>
          <tbody>
            {allStudents.map((student) => {
              return <TableRow {...student} del={del} setDel={setDel} />;
            })}
          </tbody>
        </table>
      </div>
      <button className="btn delete-all" onClick={handleDelete}>
        Delete Selected
      </button>
    </div>
  );
};

export default Students;
