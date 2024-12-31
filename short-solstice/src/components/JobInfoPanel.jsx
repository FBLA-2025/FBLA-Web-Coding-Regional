import React from "react";
import "../styles/JobInfoPanel.css";

const JobInfoPanel = ({ job }) => {
  return (
    <div id="job-info-panel">
      <div id="header">
        <h2>Job Information</h2>
      </div>
      <div id="job-details">
        {job ? (
          <div>
            <h1>{job.jobName}</h1>
            <div className="job-info-section">
              <h2>Company:</h2>
              <p>{job.companyName}</p>
            </div>
            <div className="job-info-section">
              <h2>Job Type:</h2>
              <p>{job.jobType}</p>
            </div>
            <div className="job-info-section">
              <h3>Salary:</h3>
              <p>
                ${job.salaryRange.minSalary.toLocaleString()} - $
                {job.salaryRange.maxSalary.toLocaleString()} a year
              </p>
            </div>
            <div className="job-info-section">
              <h2>Location:</h2>
              <p>{job.location}</p>
            </div>
            <div className="job-info-section">
              <h2>Experience Level:</h2>
              <p>{job.experienceLevel}</p>
            </div>
            <div className="job-info-section">
              <h2>Qualifications:</h2>
              <ul className="a">
                {job.qualifications.map((qual) => (
                  <li>• {qual}</li>
                ))}
              </ul>
            </div>
            <div className="job-info-section">
              <h2>Skills:</h2>
              <ul>
                {job.skills.map((skill) => (
                  <li>• {skill}</li>
                ))}
              </ul>
            </div>
            <div className="job-info-section">
              <h2>Responsibilities:</h2>
              <ul>
                {job.responsibilities.map((res) => (
                  <li>• {res}</li>
                ))}
              </ul>
            </div>
            <div className="job-info-section">
            </div>
          </div>
        ) : (
          <p id="no-job-selected">Select a job to see details</p>
        )}
      </div>
    </div>
  );
};

export default JobInfoPanel;
