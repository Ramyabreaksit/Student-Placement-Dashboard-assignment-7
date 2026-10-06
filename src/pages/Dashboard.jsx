import { Link } from "react-router-dom";
import { usePlacement } from "../context/PlacementContext";

function Dashboard() {

    const {
        user,
        applications,
        jobs,
        notifications
    } = usePlacement();

    const interviews = applications.filter(
        (application) => application.status === "Interview"
    ).length;

    const selected = applications.filter(
        (application) => application.status === "Selected"
    ).length;

    return (
        <div className="page">

            <div className="welcome">

                <div>
                    <p className="eyebrow">
                        STUDENT DASHBOARD
                    </p>

                    <h1>
                        Welcome back, {user?.name}! 👋
                    </h1>

                    <p>
                        Track your placement journey from one place.
                    </p>
                </div>

                <Link
                    to="/jobs"
                    className="primary-btn"
                >
                    Explore Jobs →
                </Link>

            </div>


            <div className="stats-grid">

                <div className="stat-card">
                    <span>💼</span>
                    <div>
                        <p>Applications</p>
                        <h2>{applications.length}</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <span>📅</span>
                    <div>
                        <p>Interviews</p>
                        <h2>{interviews}</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <span>🏆</span>
                    <div>
                        <p>Selected</p>
                        <h2>{selected}</h2>
                    </div>
                </div>

                <div className="stat-card">
                    <span>🔎</span>
                    <div>
                        <p>Open Jobs</p>
                        <h2>{jobs.length}</h2>
                    </div>
                </div>

            </div>


            <div className="dashboard-grid">

                <div className="panel">

                    <div className="panel-heading">
                        <h2>Application Progress</h2>
                        <Link to="/applications">
                            View All
                        </Link>
                    </div>

                    {applications.map((application) => (

                        <div
                            className="application-row"
                            key={application.id}
                        >

                            <div className="company-mini">
                                {application.company.charAt(0)}
                            </div>

                            <div>
                                <strong>
                                    {application.role}
                                </strong>

                                <p>
                                    {application.company}
                                </p>
                            </div>

                            <span
                                className={`status ${application.status.toLowerCase()}`}
                            >
                                {application.status}
                            </span>

                        </div>

                    ))}

                </div>


                <div className="panel">

                    <div className="panel-heading">
                        <h2>Notifications</h2>
                        <Link to="/notifications">
                            See All
                        </Link>
                    </div>

                    {notifications.slice(0, 3).map(
                        (notification) => (

                            <div
                                className="notification-row"
                                key={notification.id}
                            >

                                <div className="notification-icon">
                                    🔔
                                </div>

                                <div>
                                    <strong>
                                        {notification.title}
                                    </strong>

                                    <p>
                                        {notification.message}
                                    </p>

                                    <small>
                                        {notification.time}
                                    </small>
                                </div>

                            </div>
                        )
                    )}

                </div>

            </div>


            <div className="analytics-panel">

                <div>
                    <p className="eyebrow">
                        PLACEMENT ANALYTICS
                    </p>

                    <h2>Your Placement Readiness</h2>

                    <p>
                        Keep your profile complete and apply
                        consistently to improve your opportunities.
                    </p>
                </div>

                <div className="progress-circle">
                    <strong>82%</strong>
                    <span>Ready</span>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;