import { useState, useEffect } from "react";
import Modal from "./ProfileModal";
import "../styles/PublishedJobs.css";

export default function PublishedJobs() {
  const [publishedJobs, setPublishedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isEmployer, setIsEmployer] = useState(false);

  useEffect(() => {
    const employerStatus = localStorage.getItem("isEmployer") === 'true';
    setIsEmployer(employerStatus);

    if (employerStatus) {
      // Fetch published jobs data
      const jobs = [
        {
          id: 1,
          title: "Senior Software Engineer",
          company: "TechCorp",
          location: "Remote",
          postedDate: "2024-01-05",
          applicants: [
            {
              id: 1,
              name: "John Doe",
              email: "john@example.com",
              status: "Under Review",
              phone: "(123) 456-7890",
              resume: "john_doe_resume.pdf",
              coverLetter: "I am excited to apply for this position...",
            },
            {
              id: 2,
              name: "Jane Smith",
              email: "jane@example.com",
              status: "Interview Scheduled",
              phone: "(234) 567-8901",
              resume: "jane_smith_resume.pdf",
              coverLetter: "I believe my skills align perfectly with...",
            },
          ],
        },
        {
          id: 2,
          title: "Product Manager",
          company: "TechCorp",
          location: "New York, NY",
          postedDate: "2024-01-03",
          applicants: [
            {
              id: 3,
              name: "Bob Johnson",
              email: "bob@example.com",
              status: "Under Review",
              phone: "(345) 678-9012",
              resume: "bob_johnson_resume.pdf",
              coverLetter: "With my experience in product management...",
            },
          ],
        },
      ];
      setPublishedJobs(jobs);
    }
  }, []);

  if (!isEmployer) {
    return null;
  }

  return (
    <div>
      {isEmployer ? (
        <div className="published-jobs">
          <h2>Published Jobs</h2>
          <div className="jobs-list">
            {publishedJobs.map((job) => (
              <div
                key={job.id}
                className="job-card"
                onClick={() => setSelectedJob(job)}
              >
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="applicants-count">
                    {job.applicants.length} applicants
                  </span>
                </div>
                <div className="job-details">
                  <p className="company">{job.company}</p>
                  <p className="location">{job.location}</p>
                  <p className="date">Posted: {job.postedDate}</p>
                </div>
              </div>
            ))}
          </div>
          {selectedJob && (
            <Modal
              title={`Applicants for ${selectedJob.title}`}
              onClose={() => setSelectedJob(null)}
            >
              <div className="applicants-list">
                {selectedJob.applicants.map((applicant) => (
                  <div key={applicant.id} className="applicant-card">
                    <h4>{applicant.name}</h4>
                    <p>{applicant.email}</p>
                    <p>Status: {applicant.status}</p>
                    <a
                      href={`/ApplicantDetails?applicant=${encodeURIComponent(
                        JSON.stringify(applicant)
                      )}`}
                      className="view-details-btn"
                    >
                      View Details
                    </a>
                  </div>
                ))}
              </div>
            </Modal>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}