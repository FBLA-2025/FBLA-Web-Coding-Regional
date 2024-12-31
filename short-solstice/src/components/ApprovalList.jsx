import React, { useState, useEffect } from "react";
import "../styles/ApprovalList.css";
import jobs from "../../dummy-data/jobs.json";

const ApprovalList = ({ onJobSelect }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    console.log("Job clicked:", job);
    setSelectedJob(job);
    if (typeof onJobSelect === "function") {
      console.log("onJobSelect is a function, calling it");
      onJobSelect(job);
    } else {
      console.warn("onJobSelect is not a function:", onJobSelect);
    }
  };

  useEffect(() => {
    console.log("ApprovalList mounted");
  }, []);

  return (
    <div id="approval-list">
      <div id="header">
        <h2>Pending For Approval</h2>
      </div>
      <div id="jobs-list">
        {jobs.map((job) => (
          <div
            className="job-list-item"
            onClick={() => {
              onJobSelect(job);
            }}
            key={job.id}
          >
            {/* <h3> */}
              {/* <span>{job.jobName}</span> */}
            {/* </h3> */}
            {job.jobName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovalList;