import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home.jsx"

import Hero from "../components/layout/Hero.jsx"
import Login from "../pages/Auth/Login.jsx"
import ForgotPasswod from "../pages/Auth/ForgotPasswod.jsx"
import Register from "../pages/Auth/Register.jsx"


export default function AppRoutes(){
return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/forgot-password" element={<ForgotPasswod/>}/>
            <Route path="/register" element={<Register/>}/>
            

        </Routes>

    </Router>
)
}

