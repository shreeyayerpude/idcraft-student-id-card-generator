import "./IDCard.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { QRCodeCanvas } from "qrcode.react"; // ✅ FIXED IMPORT

function IDCard({ student }) {
  if (!student) return null;

  const qrData = `Name: ${student.name}
Roll No: ${student.rollNo}
Department: ${student.department}
Year: ${student.year}`;

  const handleDownloadPDF = async () => {
    const card = document.getElementById(`card-${student._id}`);

    const canvas = await html2canvas(card, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 50, 30, 110, 140);
    pdf.save(`${student.name}_ID_Card.pdf`);
  };

  const handlePrint = () => {
    const card = document.getElementById(`card-${student._id}`);
    const printWindow = window.open("", "", "width=800,height=600");

    printWindow.document.write(`
      <html>
        <head>
          <title>Print ID Card</title>
          <style>
            body {
              display:flex;
              justify-content:center;
              align-items:center;
              height:100vh;
            }
          </style>
        </head>
        <body>
          ${card.outerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="id-card-wrapper">
      <div className="id-card" id={`card-${student._id}`}>

        {/* Header */}
        <div className="id-card-header">
          <img
            src="/college-logo.png"
            alt="College Logo"
            className="college-logo"
          />
          <div className="college-name">XYZ Institute of Technology</div>
        </div>

        <div className="divider"></div>

        {/* Student Photo */}
        <img
          src={`http://localhost:5000/uploads/${student.photo}`}
          alt={student.name}
          className="student-photo"
          crossOrigin="anonymous"
        />

        {/* Student Details */}
        <h3 className="student-name">{student.name}</h3>
        <p className="student-info">Roll No: {student.rollNo}</p>
        <p className="student-info">{student.department}</p>
        <p className="student-info">{student.year}</p>

        {/* ✅ QR CODE (WORKING) */}
        <div className="qr-section">
          <QRCodeCanvas value={qrData} size={70} />
        </div>

        <div className="id-footer">Student ID Card</div>
      </div>

      {/* Actions */}
      <div className="card-actions">
        <button onClick={handlePrint}>Print</button>
        <button onClick={handleDownloadPDF}>Download PDF</button>
      </div>
    </div>
  );
}

export default IDCard;