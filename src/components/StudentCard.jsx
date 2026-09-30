function StudentCard({
  name,
  rollNumber,
  department,
  semester,
  cgpa,
  photo
}) {
  return (
    <article className="student-card">

      <div className="card-top">
        <div className="photo-wrapper">
          <img src={photo} alt={name} />
        </div>

        <div className="cgpa-badge">
          <span>CGPA</span>
          <strong>{cgpa.toFixed(2)}</strong>
        </div>
      </div>

      <div className="student-info">
        <h3>{name}</h3>

        <p className="roll-number">
          Roll No. {rollNumber}
        </p>

        <div className="details">

          <div className="detail-item">
            <span>Department</span>
            <strong>{department}</strong>
          </div>

          <div className="detail-item">
            <span>Semester</span>
            <strong>{semester}</strong>
          </div>

        </div>
      </div>

    </article>
  );
}

export default StudentCard;