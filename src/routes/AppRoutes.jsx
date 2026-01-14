import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home.jsx"

import Hero from "../components/layout/Hero.jsx"
import Login from "../pages/Auth/Login.jsx"
import ForgotPasswod from "../pages/Auth/ForgotPasswod.jsx"
import Register from "../pages/Auth/Register.jsx"
import Unauthorized from "../pages/Error/Unauthorized.jsx"
import ProtectedRoute from "../components/layout/ProtectedRoute.jsx"
import {AdminDashboard} from "../pages/Admin"
import AgentDashboard from "../pages/Agent/AgentDashboard.jsx"


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPasswod />} />
                <Route path="/register" element={<Register />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="/admin/dashboard" element={
                    <ProtectedRoute role="ADMIN">
                        <AdminDashboard/>
                    </ProtectedRoute>
                } />

                 <Route path="/agent/dashboard" element={
                    <ProtectedRoute role="AGENT">
                        <AgentDashboard/>
                    </ProtectedRoute>
                } />






            </Routes>

        </Router>
    )
}

