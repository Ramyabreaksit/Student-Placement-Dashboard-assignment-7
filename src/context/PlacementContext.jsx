import { createContext, useContext, useState } from "react";

const PlacementContext = createContext();

const initialJobs = [
    {
        id: 1,
        company: "TechNova Solutions",
        role: "Frontend Developer",
        location: "Chennai",
        package: "6.5 LPA",
        type: "Full Time",
        skills: "React, JavaScript, CSS"
    },
    {
        id: 2,
        company: "CloudCore Technologies",
        role: "Software Developer",
        location: "Bangalore",
        package: "8 LPA",
        type: "Full Time",
        skills: "Java, SQL, Spring"
    },
    {
        id: 3,
        company: "DataSphere",
        role: "Data Analyst",
        location: "Chennai",
        package: "5.5 LPA",
        type: "Full Time",
        skills: "Python, Excel, SQL"
    },
    {
        id: 4,
        company: "PixelWorks",
        role: "UI/UX Designer",
        location: "Hyderabad",
        package: "5 LPA",
        type: "Full Time",
        skills: "Figma, UI Design"
    },
    {
        id: 5,
        company: "NextGen Systems",
        role: "React Developer",
        location: "Remote",
        package: "7 LPA",
        type: "Internship",
        skills: "React, JavaScript"
    },
    {
        id: 6,
        company: "FinEdge",
        role: "Backend Developer",
        location: "Mumbai",
        package: "9 LPA",
        type: "Full Time",
        skills: "Node.js, MongoDB"
    }
];

export function PlacementProvider({ children }) {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("placementUser")) || null
    );

    const [applications, setApplications] = useState([
        {
            id: 1,
            company: "TechNova Solutions",
            role: "Frontend Developer",
            status: "Interview",
            date: "02 Oct 2026"
        },
        {
            id: 2,
            company: "DataSphere",
            role: "Data Analyst",
            status: "Applied",
            date: "30 Sep 2026"
        }
    ]);

    const [jobs] = useState(initialJobs);

    const [notifications] = useState([
        {
            id: 1,
            title: "Interview Scheduled",
            message: "Your TechNova interview is scheduled for tomorrow.",
            time: "2 hours ago"
        },
        {
            id: 2,
            title: "New Job Opening",
            message: "CloudCore Technologies posted a new Software Developer role.",
            time: "5 hours ago"
        },
        {
            id: 3,
            title: "Profile Reminder",
            message: "Complete your profile to improve your placement chances.",
            time: "Yesterday"
        }
    ]);

    const login = (email) => {

        const loggedUser = {
            name: "Ramya U",
            email: email,
            branch: "B.Tech Information Technology",
            cgpa: "8.40"
        };

        setUser(loggedUser);

        localStorage.setItem(
            "placementUser",
            JSON.stringify(loggedUser)
        );
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("placementUser");
    };

    const applyForJob = (job) => {

        const alreadyApplied = applications.some(
            (application) => application.company === job.company &&
                application.role === job.role
        );

        if (alreadyApplied) {
            return false;
        }

        setApplications((previous) => [
            ...previous,
            {
                id: Date.now(),
                company: job.company,
                role: job.role,
                status: "Applied",
                date: new Date().toLocaleDateString()
            }
        ]);

        return true;
    };

    return (
        <PlacementContext.Provider
            value={{
                user,
                jobs,
                applications,
                notifications,
                login,
                logout,
                applyForJob
            }}
        >
            {children}
        </PlacementContext.Provider>
    );
}

export function usePlacement() {
    return useContext(PlacementContext);
}