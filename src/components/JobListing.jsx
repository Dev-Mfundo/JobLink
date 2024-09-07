const JobListing = () => {
    return (
        <div>
            <div className="job-listing">
            <div className="job-info">
                <h2 className="job-title">title</h2>
                <p className="company-name">company</p>
                <p className="job-location">location</p>
                <p className="job-description">description</p>
            </div>
            <div className="job-details">
                <p className="job-type">type</p>
                <p className="job-salary">salary</p>
                <a href="#" className="apply-button">Apply</a>
            </div>
        </div>
        </div>
        
    );
};

export default JobListing;