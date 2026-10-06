import { useState } from "react";
import { usePlacement } from "../context/PlacementContext";

function Profile() {

    const { user } = usePlacement();

    const [saved, setSaved] = useState(false);

    const [form, setForm] = useState({
        name: user?.name || "",
        email: user?.email || "",
        branch: user?.branch || "",
        cgpa: user?.cgpa || "",
        phone: "",
        skills: "React, JavaScript, HTML, CSS"
    });

    const handleChange = (event) => {

        setForm({
            ...form,
            [event.target.name]: event.target.value
        });

        setSaved(false);
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        setSaved(true);
    };

    return (
        <div className="page">

            <div className="page-heading">
                <p className="eyebrow">
                    STUDENT PROFILE
                </p>

                <h1>My Profile</h1>

                <p>
                    Keep your information updated for recruiters.
                </p>
            </div>


            <form
                className="profile-card"
                onSubmit={handleSubmit}
            >

                <div className="profile-avatar">
                    RU
                </div>

                <div className="profile-form">

                    <div className="form-grid">

                        <div>
                            <label>Full Name</label>

                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Email</label>

                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Branch</label>

                            <input
                                name="branch"
                                value={form.branch}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>CGPA</label>

                            <input
                                name="cgpa"
                                value={form.cgpa}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Phone</label>

                            <input
                                name="phone"
                                placeholder="Enter phone number"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Skills</label>

                            <input
                                name="skills"
                                value={form.skills}
                                onChange={handleChange}
                            />
                        </div>

                    </div>


                    <div className="profile-actions">

                        {saved && (
                            <span className="saved">
                                ✓ Profile saved
                            </span>
                        )}

                        <button className="primary-btn">
                            Save Profile
                        </button>

                    </div>

                </div>

            </form>

        </div>
    );
}

export default Profile;