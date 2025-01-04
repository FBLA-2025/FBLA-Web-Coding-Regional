import { useState, useEffect } from "react";
import "../styles/PendingJobs.css";

export default function PendingJobs() {
  const [pendingJobs, setPendingJobs] = useState([]);
  const [isEmployer, setIsEmployer] = useState(false);

  useEffect(() => {
    const employerStatus = localStorage.getItem("isEmployer") === "true";
    setIsEmployer(employerStatus);

    const jobs = [
      {
        id: 1,
        title: "Junior Developer",
        company: "TechCorp",
        location: "Remote",
        submittedDate: "2024-01-10",
      },
      {
        id: 2,
        title: "Marketing Specialist",
        company: "TechCorp",
        location: "New York, NY",
        submittedDate: "2024-01-09",
      },
    ];
    setPendingJobs(jobs);
  }, []);

  if (!isEmployer) {
    return null;
  }

  return (
    <div>
      {isEmployer ? (
        <div className="pending-jobs">
          <h2>Pending Jobs</h2>
          <div className="jobs-list">
            {pendingJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="status">Pending Approval</span>
                </div>
                <div className="job-details">
                  <p className="company">{job.company}</p>
                  <p className="location">{job.location}</p>
                  <p className="date">Submitted: {job.submittedDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
