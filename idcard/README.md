# IDCraft – Student ID Card Generator

IDCraft is a web-based application designed to generate professional student ID cards from uploaded Excel data. The system provides an intuitive interface for managing student records and generating printable and downloadable ID cards with QR code support.

---

## 🚀 Features

- Upload student data using Excel files  
- Automatically generate student ID cards  
- Responsive grid-based ID card layout  
- QR code generation for student verification  
- Download individual ID cards as PDF  
- Print-ready ID card format  
- Search and filter students by name, roll number, and department  
- Light and Dark mode support  
- Clean, professional, and academic-friendly UI  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Custom CSS
- html2canvas
- jsPDF
- qrcode.react

### Backend
- Node.js
- Express.js
- MongoDB
- Multer
- MinIO / Local storage for images

---

## 📂 Project Structure
idcraft-student-id-card-generator/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── IDCard.jsx
│   │   │   ├── StudentList.jsx
│   │   │   ├── UploadExcel.jsx
│   │   │   └── *.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
│       └── college-logo.png
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
---

## ⚙️ How to Run the Project

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/idcraft-student-id-card-generator.git

Frontend:
cd frontend
npm install
npm run dev

Backend:
cd backend
npm install
npm start

📄 Excel File Format

The Excel file should contain the following columns:
	•	Name
	•	Roll Number
	•	Department
	•	Year
	•	Photo (filename or mapped upload)

⸻

🖨️ PDF & Print Support
	•	Each ID card can be downloaded as a PDF
	•	Print functionality is optimized for ID card layout
	•	QR codes remain visible in both PDF and print outputs

⸻

🔐 Security & Validation
	•	File type validation for Excel uploads
	•	Image handling with CORS support for PDF generation
	•	Structured API endpoints for data management
	•	Clean separation of frontend and backend layers

⸻

🎓 Use Cases
	•	College and university ID card generation
	•	Academic and final-year projects
	•	Admin dashboards for student management
	•	Learning full-stack application development

⸻

📌 Future Enhancements
	•	Bulk PDF download
	•	Front and back ID card support
	•	Role-based authentication
	•	Cloud deployment
	•	Admin template customization

⸻

👨‍💻 Author

IDCraft – Student ID Card Generator
Developed as an academic and portfolio project.

⸻

📜 License

This project is developed for educational purposes only.