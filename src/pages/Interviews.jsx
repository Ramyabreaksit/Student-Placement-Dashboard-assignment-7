function Interviews() {

    const interviews = [
        {
            company: "TechNova Solutions",
            role: "Frontend Developer",
            date: "07 October 2026",
            time: "10:30 AM",
            mode: "Online"
        },
        {
            company: "CloudCore Technologies",
            role: "Software Developer",
            date: "12 October 2026",
            time: "02:00 PM",
            mode: "Campus"
        }
    ];

    return (
        <div className="page">

            <div className="page-heading">
                <p className="eyebrow">
                    INTERVIEW SCHEDULE
                </p>

                <h1>Upcoming Interviews</h1>

                <p>
                    Stay prepared for your upcoming placement interviews.
                </p>
            </div>


            <div className="interview-grid">

                {interviews.map((interview, index) => (

                    <div
                        className="interview-card"
                        key={index}
                    >

                        <div className="calendar-icon">
                            📅
                        </div>

                        <div>

                            <span className="job-type">
                                {interview.mode}
                            </span>

                            <h2>
                                {interview.role}
                            </h2>

                            <h3>
                                {interview.company}
                            </h3>

                            <p>
                                📅 {interview.date}
                            </p>

                            <p>
                                ⏰ {interview.time}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Interviews;