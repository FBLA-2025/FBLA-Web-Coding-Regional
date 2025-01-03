import { useState, useEffect } from 'react';
import Modal from './ProfileModal';
import '../styles/AppliedJobs.css';

export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isEmployer, setIsEmployer] = useState(false);

  useEffect(() => {
    const employerStatus = localStorage.getItem('isEmployer') === 'true';
    setIsEmployer(employerStatus);

    if (!employerStatus) {
      // Fetch applied jobs data
      const jobs = [
        {
          id: 1,
          title: 'Software Engineer',
          company: 'Innovation Solutions',
          status: 'Under Review',
          appliedDate: '2024-01-02',
          location: 'Remote',
          applicationDetails: {
            resume: 'john_doe_resume.pdf',
            coverLetter: 'I am excited to apply for this position...',
            additionalInfo: 'GitHub: github.com/johndoe'
          }
        },
        {
          id: 2,
          title: 'Data Analyst',
          company: 'DataStream Analytics',
          status: 'Interview Scheduled',
          appliedDate: '2024-01-01',
          location: 'San Francisco, CA',
          applicationDetails: {
            resume: 'john_doe_resume.pdf',
            coverLetter: 'I believe my skills in data analysis...',
            additionalInfo: 'Portfolio: johndoe.com/portfolio'
          }
        }
      ];
      setAppliedJobs(jobs);
    }
  }, []);

  if (isEmployer) {
    return null;
  }

  return (
    <div className="applied-jobs">
      <h2>Applied Jobs</h2>
      <div className="jobs-list">
        {appliedJobs.map(job => (
          <div key={job.id} className="job-card" onClick={() => setSelectedJob(job)}>
            <div className="job-header">
              <h3>{job.title}</h3>
              <span className="status">{job.status}</span>
            </div>
            <div className="job-details">
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <p className="date">Applied: {job.appliedDate}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedJob && (
        <Modal title={`Application Details: ${selectedJob.title}`} onClose={() => setSelectedJob(null)}>
          <div className="application-details">
            <h4>Resume</h4>
            <p>{selectedJob.applicationDetails.resume}</p>
            <h4>Cover Letter</h4>
            <p>{selectedJob.applicationDetails.coverLetter}</p>
            <h4>Additional Information</h4>
            <p>{selectedJob.applicationDetails.additionalInfo}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

