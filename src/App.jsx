import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { PlacementProvider, usePlacement } from "./context/PlacementContext";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import Interviews from "./pages/Interviews";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

import "./App.css";


function ProtectedRoute({ children }) {

    const { user } = usePlacement();

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return children;
}


function App() {

    return (
        <BrowserRouter>

            <PlacementProvider>

                <Navbar />

                <Routes>

                    <Route
                        path="/"
                        element={<Login />}
                    />

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/jobs"
                        element={
                            <ProtectedRoute>
                                <Jobs />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/applications"
                        element={
                            <ProtectedRoute>
                                <Applications />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/interviews"
                        element={
                            <ProtectedRoute>
                                <Interviews />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/notifications"
                        element={
                            <ProtectedRoute>
                                <Notifications />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />

                </Routes>

            </PlacementProvider>

        </BrowserRouter>
    );
}

export default App;