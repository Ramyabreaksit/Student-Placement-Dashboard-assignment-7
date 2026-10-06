import { usePlacement } from "../context/PlacementContext";

function Applications() {

    const { applications } = usePlacement();

    return (
        <div className="page">

            <div className="page-heading">
                <p className="eyebrow">
                    MY CAREER JOURNEY
                </p>

                <h1>Applications</h1>

                <p>
                    Track the status of all your job applications.
                </p>
            </div>


            <div className="application-table">

                <div className="table-header">
                    <span>Company</span>
                    <span>Position</span>
                    <span>Date</span>
                    <span>Status</span>
                </div>

                {applications.map((application) => (

                    <div
                        className="table-row"
                        key={application.id}
                    >

                        <strong>
                            {application.company}
                        </strong>

                        <span>
                            {application.role}
                        </span>

                        <span>
                            {application.date}
                        </span>

                        <span
                            className={`status ${application.status.toLowerCase()}`}
                        >
                            {application.status}
                        </span>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Applications;