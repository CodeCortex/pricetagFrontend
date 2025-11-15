import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home.jsx"
import Navbar from "../components/layout/Hero.jsx"
import Hero from "../components/layout/Hero.jsx"


export default function AppRoutes(){
return(
    <Router>
        <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/navbar" element={<Navbar/>} />
        </Routes>

    </Router>
)
}

