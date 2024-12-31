import React, { useEffect } from "react";
import "../styles/JobInfoPanel.css";

const JobInfoPanel = ({ job }) => {
  function approveJob() {
    alert("Job approved");
  }

  function rejectJob() {
    alert("Job rejected");
  }
  return (
    <div id="job-info-panel">
      <div id="header">
        <h2>Job Information</h2>
      </div>
      <div id="job-details">
        {job ? (
          // <div className="avenir-book">
          <div>
            <h1>{job.jobName}</h1>
            <div className="job-info-section">
              <h2>Company:</h2>
              <h3>{job.companyName}</h3>
              <p>{job.companyDescription}</p>
            </div>
            <div className="job-info-section">
              <h2>Company Contact Info:</h2>
              <ul>
                <li>{job.companyEmail}</li>
                <li>{job.companyPhone}</li>
                <li>
                  <a href={job.website}>{job.website}</a>
                </li>
              </ul>
            </div>
            <div className="job-info-section">
              <h2>Job Type:</h2>
              <p>{job.jobType}</p>
            </div>
            <div className="job-info-section">
              <h2>Salary:</h2>
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
              <h2>Work Schedule:</h2>
              <p>{job.workSchedule}</p>
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
              <h2>Benefits:</h2>
              <ul>
                {job.employmentBenefits.map((ben) => (
                  <li>• {ben}</li>
                ))}
              </ul>
            </div>
            <div className="job-info-section">
              <h3>Posted on {job.postedDate}</h3>
              <h3>Deadline to apply is {job.applicationDeadline}</h3>
            </div>
            <div className="job-info-section"></div>
            <div id="button-wrapper">
              <button onClick={approveJob} className="button approve">
                Approve Job Posting
              </button>
              <button onClick={rejectJob} className="button reject">
                Reject Job Posting
              </button>
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
