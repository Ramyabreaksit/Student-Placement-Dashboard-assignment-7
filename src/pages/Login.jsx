import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlacement } from "../context/PlacementContext";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = usePlacement();
    const navigate = useNavigate();

    const handleSubmit = (event) => {

        event.preventDefault();

        if (!email || !password) {
            setError("Please enter email and password.");
            return;
        }

        if (!email.includes("@")) {
            setError("Please enter a valid email.");
            return;
        }

        login(email);
        navigate("/dashboard");
    };

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-icon">
                    🎓
                </div>

                <h1>PlaceTrack</h1>

                <p>
                    Student Placement Portal
                </p>

                <form onSubmit={handleSubmit}>

                    <label>Email Address</label>

                    <input
                        type="email"
                        placeholder="student@example.com"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    {error && (
                        <div className="form-error">
                            {error}
                        </div>
                    )}

                    <button className="login-btn">
                        Login
                    </button>

                </form>

                <p className="login-note">
                    Demo frontend login — no backend required.
                </p>

            </div>

        </div>
    );
}

export default Login;