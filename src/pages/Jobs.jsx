import { useState } from "react";
import { usePlacement } from "../context/PlacementContext";
import JobCard from "../components/JobCard";

function Jobs() {

    const { jobs } = usePlacement();

    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("All");

    const locations = [
        "All",
        ...new Set(jobs.map((job) => job.location))
    ];

    const filteredJobs = jobs.filter((job) => {

        const matchesSearch =
            job.role.toLowerCase().includes(
                search.toLowerCase()
            ) ||
            job.company.toLowerCase().includes(
                search.toLowerCase()
            );

        const matchesLocation =
            location === "All" ||
            job.location === location;

        return matchesSearch && matchesLocation;
    });

    return (
        <div className="page">

            <div className="page-heading">
                <p className="eyebrow">
                    CAREER OPPORTUNITIES
                </p>

                <h1>Find Your Dream Job</h1>

                <p>
                    Explore the latest opportunities from
                    leading companies.
                </p>
            </div>

            <div className="filters">

                <div className="search-input">
                    🔍

                    <input
                        type="text"
                        placeholder="Search role or company..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />
                </div>

                <select
                    value={location}
                    onChange={(e) =>
                        setLocation(e.target.value)
                    }
                >
                    {locations.map((item) => (
                        <option key={item}>
                            {item}
                        </option>
                    ))}
                </select>

            </div>

            <div className="job-list">

                {filteredJobs.length > 0 ? (

                    filteredJobs.map((job) => (
                        <JobCard
                            key={job.id}
                            job={job}
                        />
                    ))

                ) : (

                    <div className="empty-state">
                        <span>🔎</span>
                        <h2>No jobs found</h2>
                        <p>
                            Try changing your search or filter.
                        </p>
                    </div>

                )}

            </div>

        </div>
    );
}

export default Jobs;