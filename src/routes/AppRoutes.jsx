import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home.jsx"
import { Suspense } from "react"

import Hero from "../components/layout/Hero.jsx"
import Login from "../pages/Auth/Login.jsx"
import ForgotPasswod from "../pages/Auth/ForgotPasswod.jsx"
import Register from "../pages/Auth/Register.jsx"
import Unauthorized from "../pages/Error/Unauthorized.jsx"
import ProtectedRoute from "../components/layout/ProtectedRoute.jsx"
import { AdminDashboard, AdminLayout, AddAgents, AdminProfile } from "../pages/Admin"

import { AgentDashboard, AgentLayout, AgentProfile } from "../pages/Agent"
import AddProperty from "../pages/Property/AddProperty.jsx"


export default function AppRoutes() {
    return (
        <Router>
            <Suspense fallback={<p>Loading ...</p>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPasswod />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/unauthorized" element={<Unauthorized />} />

                    <Route path="/admin/:id" element={
                        <ProtectedRoute allowedRoles={["ADMIN"]}>
                            <AdminLayout />
                        </ProtectedRoute>
                    } >
                        <Route index element={<AdminDashboard />} />
                        <Route path="add-agent" element={<AddAgents />} />
                        <Route path="profile" element={<AdminProfile />} />
                        <Route path="add-property" element={<AddProperty />} />

                    </Route>

                    <Route path="/agent/:id" element={
                        <ProtectedRoute allowedRoles={["AGENT"]}>
                            <AgentLayout />
                        </ProtectedRoute>
                    } >

                        <Route index element={<AgentDashboard />} />
                        <Route path="add-property" element={<AddProperty />} />
                        <Route path="profile" element={<AgentProfile />} />

                    </Route>






                </Routes>
            </Suspense>
        </Router>
    )
}

