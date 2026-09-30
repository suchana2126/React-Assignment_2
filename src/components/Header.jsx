function Header({ totalStudents, averageCgpa }) {
  return (
    <header className="portal-header">
      <div className="header-content">

        <div className="brand">
          <span className="brand-dot"></span>
          STUDENT PORTAL
        </div>

        <h1>
          Student Information <span>Management</span>
        </h1>

        <p>
          A modern and organized portal to view student academic information.
        </p>

        <div className="header-stats">
          <div className="stat-box">
            <strong>{totalStudents}</strong>
            <span>Total Students</span>
          </div>

          <div className="stat-box">
            <strong>{averageCgpa.toFixed(2)}</strong>
            <span>Average CGPA</span>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;