import { useState } from "react";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

const students = [
  {
    id: 1,
    name: "Suchana Palai",
    rollNumber: "BCA001",
    department: "Computer Applications",
    semester: "8th Semester",
    cgpa: 9.2,
    photo: "https://i.pravatar.cc/300?img=47"
  },
  {
    id: 2,
    name: "Ananya Das",
    rollNumber: "BCA002",
    department: "Computer Applications",
    semester: "8th Semester",
    cgpa: 8.9,
    photo: "https://i.pravatar.cc/300?img=32"
  },
  {
    id: 3,
    name: "Riya Sen",
    rollNumber: "BCA003",
    department: "Computer Applications",
    semester: "8th Semester",
    cgpa: 8.6,
    photo: "https://i.pravatar.cc/300?img=44"
  },
  {
    id: 4,
    name: "Arjun Roy",
    rollNumber: "BCA004",
    department: "Computer Applications",
    semester: "8th Semester",
    cgpa: 8.4,
    photo: "https://i.pravatar.cc/300?img=12"
  },
  {
    id: 5,
    name: "Sneha Ghosh",
    rollNumber: "BCA005",
    department: "Computer Applications",
    semester: "8th Semester",
    cgpa: 8.8,
    photo: "https://i.pravatar.cc/300?img=49"
  },
  {
    id: 6,
    name: "Rahul Dutta",
    rollNumber: "BCA006",
    department: "Computer Applications",
    semester: "8th Semester",
    cgpa: 8.1,
    photo: "https://i.pravatar.cc/300?img=11"
  }
];

function App() {
  const [sortOrder, setSortOrder] = useState("high");

  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "high") {
      return b.cgpa - a.cgpa;
    } else {
      return a.cgpa - b.cgpa;
    }
  });

  const averageCgpa =
    students.reduce((total, student) => total + student.cgpa, 0) /
    students.length;

  const handleSort = () => {
    setSortOrder(sortOrder === "high" ? "low" : "high");
  };

  return (
    <>
      <Header
        totalStudents={students.length}
        averageCgpa={averageCgpa}
      />

      <main>
        <StudentList
          students={sortedStudents}
          sortOrder={sortOrder}
          onSortChange={handleSort}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;