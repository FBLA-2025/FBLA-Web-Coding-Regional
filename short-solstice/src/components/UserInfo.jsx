import { useState } from 'react';
import '../styles/UserInfo.css';

export default function UserInfo() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    school: 'State University',
    graduationYear: '2024',
    major: 'Computer Science'
  });

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
      </div>
    </div>
  );
}

