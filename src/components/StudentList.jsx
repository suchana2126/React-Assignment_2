import StudentCard from "./StudentCard";

function StudentList({ students, sortOrder, onSortChange }) {
  return (
    <section className="students-section">

      <div className="section-heading">

        <div>
          <p className="section-label">
            ACADEMIC DIRECTORY
          </p>

          <h2>Student Records</h2>

          <p className="section-subtitle">
            Explore student academic information
          </p>
        </div>

        <button
          className="sort-button"
          onClick={onSortChange}
        >
          {sortOrder === "high" ? "↓" : "↑"}

          &nbsp;

          CGPA:{" "}
          {sortOrder === "high"
            ? "Highest First"
            : "Lowest First"}
        </button>

      </div>

      <div className="student-grid">

        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            rollNumber={student.rollNumber}
            department={student.department}
            semester={student.semester}
            cgpa={student.cgpa}
            photo={student.photo}
          />
        ))}

      </div>

    </section>
  );
}

export default StudentList;