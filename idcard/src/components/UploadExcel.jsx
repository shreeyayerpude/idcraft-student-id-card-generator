// import { useState } from "react";
// import axios from "axios";

// function UploadExcel() {
//   const [file, setFile] = useState(null);

//   const uploadFile = async () => {
//     if (!file) {
//       alert("Please select a file");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/student/upload",
//         formData
//       );
//       alert(res.data.message); // <-- This shows "Excel Uploaded Successfully"
//     } catch (err) {
//       console.log(err);
//       alert("Upload failed. Check backend.");
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={e => setFile(e.target.files[0])} />
//       <button onClick={uploadFile}>Upload Excel</button>
//     </div>
//   );
// }

// export default UploadExcel;
import { useState } from "react";
import axios from "axios";
import "./UploadExcel.css";

function UploadExcel() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an Excel file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/student/upload", formData);
      alert("Excel uploaded successfully");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div className="upload-card">
      <h2 className="upload-title">Student ID Card Generator</h2>
      <p className="upload-subtitle">
        Upload an Excel file containing student details to generate ID cards.
      </p>

      <div className="upload-controls">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={handleUpload}>Upload Excel</button>
      </div>
    </div>
  );
}

export default UploadExcel;