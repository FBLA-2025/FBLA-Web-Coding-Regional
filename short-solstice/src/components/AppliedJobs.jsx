import '../styles/AppliedJobs.css';

export default function AppliedJobs() {
  const appliedJobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Innovation Solutions',
      status: 'Under Review',
      appliedDate: '2024-01-02',
      location: 'Remote',
    },
    {
      id: 2,
      title: 'Data Analyst',
      company: 'DataStream Analytics',
      status: 'Interview Scheduled',
      appliedDate: '2024-01-01',
      location: 'San Francisco, CA',
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'Innovation Solutions',
      status: 'Under Review',
      appliedDate: '2024-01-02',
      location: 'Remote',
    },
    {
      id: 4,
      title: 'Software Engineer',
      company: 'Innovation Solutions',
      status: 'Under Review',
      appliedDate: '2024-01-02',
      location: 'Remote',
    },
    {
      id: 5,
      title: 'Software Engineer',
      company: 'Innovation Solutions',
      status: 'Under Review',
      appliedDate: '2024-01-02',
      location: 'Remote',
    },
  ];

  return (
    <div className="applied-jobs">
      <h2>Applied Jobs</h2>
      <div className="jobs-list">
        {appliedJobs.map(job => (
          <div key={job.id} className="job-card">
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
    </div>
  );
}

