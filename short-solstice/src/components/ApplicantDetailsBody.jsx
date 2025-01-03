import { useState, useEffect } from 'react';
import '../styles/ApplicantDetailsBody.css';

export default function ApplicantDetailsBody() {
  const [applicant, setApplicant] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const applicantData = searchParams.get('applicant');
    if (applicantData) {
      setApplicant(JSON.parse(decodeURIComponent(applicantData)));
    }
  }, []);

  const updateStatus = (newStatus) => {
    // Update applicant status (replace with actual API call)
    setApplicant(prev => ({ ...prev, status: newStatus }));
  };

  if (!applicant) return <p>Loading...</p>;

  return (
    <div className="applicant-details">
      <h2>{applicant.name}</h2>
      <p>Email: {applicant.email}</p>
      <p>Phone: {applicant.phone}</p>
      <h3>Resume</h3>
      <p><a href={applicant.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
      <h3>Cover Letter</h3>
      <p>{applicant.coverLetter}</p>
      <h3>Status: {applicant.status}</h3>
      <div className="status-buttons">
        <button onClick={() => updateStatus('Under Review')}>Under Review</button>
        <button onClick={() => updateStatus('Interview Scheduled')}>Schedule Interview</button>
        <button onClick={() => updateStatus('Offer Extended')}>Extend Offer</button>
        <button onClick={() => updateStatus('Rejected')}>Reject</button>
      </div>
    </div>
  );
}

