import { useState, useEffect } from 'react';
import '../styles/UserInfo.css';

export default function UserInfo() {
  const [user, setUser] = useState(null);
  const [isEmployer, setIsEmployer] = useState(false);

  useEffect(() => {
    const employerStatus = localStorage.getItem('isEmployer');
    setIsEmployer(employerStatus);

    // Fetch user data (replace with actual API call)
    if (employerStatus === "true") {
      setUser({
        name: 'Jane Smith',
        email: 'jane.smith@techcorp.com',
        company: 'TechCorp',
        position: 'HR Manager',
        employeeCount: '500+'
      });
    } else {
      setUser({
        name: 'John Doe',
        email: 'john.doe@example.com',
        school: 'State University',
        graduationYear: '2024',
        major: 'Computer Science'
      });
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-info-card">
      <h2>Personal Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <label>Name</label>
          <p>{user.name}</p>
        </div>
        <div className="info-item">
          <label>Email</label>
          <p>{user.email}</p>
        </div>
        {isEmployer === 'true' ? (
          <>
            <div className="info-item">
              <label>Company</label>
              <p>{user.company}</p>
            </div>
            <div className="info-item">
              <label>Position</label>
              <p>{user.position}</p>
            </div>
            <div className="info-item">
              <label>Employee Count</label>
              <p>{user.employeeCount}</p>
            </div>
          </>
        ) : (
          <>
            <div className="info-item">
              <label>School</label>
              <p>{user.school}</p>
            </div>
            <div className="info-item">
              <label>Graduation Year</label>
              <p>{user.graduationYear}</p>
            </div>
            <div className="info-item">
              <label>Major</label>
              <p>{user.major}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

