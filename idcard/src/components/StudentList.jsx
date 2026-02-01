import { useEffect, useState } from "react";
import axios from "axios";
import IDCard from "./IDCard";
import "./StudentList.css";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/student")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ✅ extract unique departments dynamically
  const departments = [
    "All",
    ...new Set(students.map((s) => s.department)),
  ];

  // ✅ filtering logic
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || student.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="student-list-container">
      <h2 className="section-title">Generated Student ID Cards</h2>
      <p className="section-subtitle">
        Search and filter students to quickly locate ID cards.
      </p>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by name or roll number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* CARD GRID */}
      <div className="card-grid">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <IDCard key={student._id} student={student} />
          ))
        ) : (
          <p className="no-results">No students found.</p>
        )}
      </div>
    </div>
  );
}

export default StudentList;