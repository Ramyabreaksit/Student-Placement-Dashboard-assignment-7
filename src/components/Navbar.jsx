import { NavLink, useNavigate } from "react-router-dom";
import { usePlacement } from "../context/PlacementContext";

function Navbar() {

    const { user, logout } = usePlacement();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="navbar">

            <div className="brand">
                <span>🎓</span>
                PlaceTrack
            </div>

            {user && (
                <div className="nav-links">

                    <NavLink to="/dashboard">
                        Dashboard
                    </NavLink>

                    <NavLink to="/jobs">
                        Jobs
                    </NavLink>

                    <NavLink to="/applications">
                        Applications
                    </NavLink>

                    <NavLink to="/interviews">
                        Interviews
                    </NavLink>

                    <NavLink to="/profile">
                        Profile
                    </NavLink>

                    <NavLink to="/notifications">
                        🔔
                    </NavLink>

                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>
            )}

        </nav>
    );
}

export default Navbar;