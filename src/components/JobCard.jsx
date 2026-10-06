import { usePlacement } from "../context/PlacementContext";

function JobCard({ job }) {

    const { applications, applyForJob } = usePlacement();

    const applied = applications.some(
        (application) =>
            application.company === job.company &&
            application.role === job.role
    );

    const handleApply = () => {

        const success = applyForJob(job);

        if (success) {
            alert("Application submitted successfully!");
        } else {
            alert("You have already applied for this job.");
        }
    };

    return (
        <div className="job-card">

            <div className="company-logo">
                {job.company.charAt(0)}
            </div>

            <div className="job-main">

                <span className="job-type">
                    {job.type}
                </span>

                <h3>{job.role}</h3>

                <h4>{job.company}</h4>

                <div className="job-details">
                    📍 {job.location}
                    <span>💰 {job.package}</span>
                </div>

                <p className="skills">
                    {job.skills}
                </p>

            </div>

            <button
                className={applied ? "applied-btn" : "apply-btn"}
                onClick={handleApply}
                disabled={applied}
            >
                {applied ? "Applied ✓" : "Apply Now"}
            </button>

        </div>
    );
}

export default JobCard;