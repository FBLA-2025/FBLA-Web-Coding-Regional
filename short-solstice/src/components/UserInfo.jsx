import { useState, useEffect } from 'react';
import baseURL from '../baseURL';
import '../styles/UserInfo.css';

export default function UserInfo() {
  const [user, setUser] = useState(null);
  const [isEmployer, setIsEmployer] = useState(false);
  // const [userId, setUserId] = useState(null);
  const api = baseURL();

  useEffect(() => {
    const employerStatus = localStorage.getItem('isEmployer');
    const userId = localStorage.getItem('currentUserId');
    // setUserId(userId);
    setIsEmployer(employerStatus);

    const fetchJobs = async () => {
      try {
        const response = await api.get(`/retrieve-user/TalentLinkDB/users/${userId}`);
        if (response.status === 200) {
          setUser(response.data);
        }
        // setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
    // if (employerStatus === "true") {
    //   setUser({
    //     name: 'Jane Smith',
    //     email: 'jane.smith@techcorp.com',
    //     company: 'TechCorp',
    //     position: 'HR Manager',
    //     employeeCount: '500+'
    //   });
    // } else {
    //   setUser({
    //     name: 'John Doe',
    //     email: 'john.doe@example.com',
    //     school: 'State University',
    //     graduationYear: '2024',
    //     major: 'Computer Science'
    //   });
    // }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-info-card">
      <h2>Personal Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <label>Name</label>
          <p>{user.firstName} {user.lastName}</p>
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
              <p>{user.companySize}</p>
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

