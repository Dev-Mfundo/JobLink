import { useState } from 'react';

const Employer = () => {
  const [jobData, setJobData] = useState({
    jobTitle: 'Cashier',
    companyName: 'Shoprite',
    jobLocation: 'Pretoria, Gauteng',
    jobType: 'Permanent',
    salary: 'R6500.00',
    jobDescription: '',
    companyLogo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'companyLogo') {
      setJobData({ ...jobData, companyLogo: files[0] });
    } else {
      setJobData({ ...jobData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posted:', jobData);
  };

  return (
    <div className="post-job">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={jobData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={jobData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Job Location</label>
          <input
            type="text"
            name="jobLocation"
            value={jobData.jobLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Job Type</label>
          <select
            name="jobType"
            value={jobData.jobType}
            onChange={handleChange}
          >
            <option value="Permanent">Permanent</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Learnership">Learnership</option>
          </select>
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="text"
            name="salary"
            value={jobData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Job Description</label>
          <textarea
            name="jobDescription"
            value={jobData.jobDescription}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Company Logo</label>
          <input
            type="file"
            name="companyLogo"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">Post Job</button>
      </form>
    </div>
  );
};

export default Employer;
