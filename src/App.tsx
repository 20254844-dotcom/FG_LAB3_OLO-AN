import { useState } from 'react'
import './App.css'
import Header from "./Header";
import Student from "./Student";
import Footer from "./Footer";
import Button from "./Button";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Vejee Jon D. Olo-an", course: "BSIT-IDA4" },
    { id: 2, name: "Kendrick Lamar", course: "BSCS-2B" }
  ]);

  const handleSave = () => alert("Saved!");
  const handleCancel = () => alert("Cancelled!");

  const addStudent = () => {
    const newStudent = { 
      id: students.length + 1, 
      name: "New Student", 
      course: "BSIT" 
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="container">
      <Header />
      
      <p>Total Students: {students.length}</p>

      {students.map((stu) => (
        <Student key={stu.id} name={stu.name} course={stu.course} />
      ))}

      <div className="actions">
        <Button label="Add Student" onClick={addStudent} />
        <Button label="Save" onClick={handleSave} />
        <Button label="Cancel" onClick={handleCancel} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
