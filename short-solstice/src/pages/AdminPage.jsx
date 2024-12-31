import React, { useState } from 'react';
import ApprovalList from '../components/ApprovalList';
import JobInfoPanel from '../components/JobInfoPanel';

const AdminPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    console.log(job);
  };

  return (
    <div>
      <nav>
        {/* Add your NavBar component here */}
      </nav>
      <main style={{ display: 'flex', justifyContent: 'space-around', marginTop: '5vw' }}>
        <ApprovalList onJobSelect={handleJobSelect} />
        <JobInfoPanel job={selectedJob} />
      </main>
      <footer>
        {/* Add your Footer component here */}
      </footer>
    </div>
  );
};

export default AdminPage;