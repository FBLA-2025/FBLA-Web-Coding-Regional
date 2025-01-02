import "../styles/JobModal.css";
export default function JobModal({ job, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-bg" onClick={onClose} />
        
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-body">
              <div className="modal-title-container">
                <h3 className="modal-title">{job.jobName}</h3>
                
                <div className="modal-details">
                  <div>
                    <h4 className="section-title">Company</h4>
                    <p className="section-text">{job.companyDescription}</p>
                  </div>
                  
                  <div>
                    <h4 className="section-title">Responsibilities</h4>
                    <ul className="list">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="section-title">Qualifications</h4>
                    <ul className="list">
                      {job.qualifications.map((qual, index) => (
                        <li key={index}>{qual}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="section-title">Benefits</h4>
                    <ul className="list">
                      {job.employmentBenefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="modal-footer">
            <a
              href={`/apply/${encodeURIComponent(job.jobName)}`}
              className="apply button"
            >
              Apply Now
            </a>
            <button
              type="button"
              onClick={onClose}
              className="close button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}