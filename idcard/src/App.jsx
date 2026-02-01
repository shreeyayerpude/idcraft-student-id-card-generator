// import UploadExcel from "./components/UploadExcel";
// import StudentList from "./components/StudentList";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Student ID Card Generator</h1>
//       <UploadExcel />
//       <hr />
//       <StudentList />
//     </div>
//   );
// }

// export default App;
import UploadExcel from "./components/UploadExcel";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student ID Card Generator</h1>
        <p>Upload student data and generate professional ID cards instantly</p>
      </header>

      <UploadExcel />
      <StudentList />
    </div>
  );
}

export default App;