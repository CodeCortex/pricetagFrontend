import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({role, children}) => {
    const token= localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
    const userRole= localStorage.getItem("role");
    
    if(!token) return <Navigate to="/login"/>;

    if(role && role!=userRole) return <Navigate to="/unauthorized"/>;
    return children;
}

export default ProtectedRoute
