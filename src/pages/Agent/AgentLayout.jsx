import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";


export default function AgentLayout() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    // ACTIVE STYLE FUNCTION
    // const navLinkStyle = ({ isActive }) => ({
    //     backgroundColor: isActive ? "white" : "transparent",
    //     color: isActive ? "#f97316" : "white", // orange

    // });

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate("/login");
    };

    const closeOnMobile=()=>{
        if(window.innerWidth <768){
            setOpen(false);
        }
    }

    return (
        <div className="flex min-h-screen">

            {/* TOGGLE */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden fixed top-3 left-4 z-50 bg-orange text-white p-2 rounded"
            >
                {open ? <X /> : <Menu />}
            </button>

            {/* SIDEBAR */}
            <aside
                className={`
          fixed md:static top-0 left-0 z-40
          bg-orange text-white
          transition-all duration-300 flex flex-col justify-between
          ${open ? "w-64 p-4" : "w-0 overflow-hidden p-0"}
        `}
            >
                <div>

                    <h2 className="text-xl font-bold mb-6">Agent Panel</h2>

                    <nav className="flex flex-col gap-3 text-start">

                        <NavLink
                            to={`/agent/${id}`} end
                            onClick={closeOnMobile}
                            className={({ isActive }) =>
                                `p-3 rounded transition
     ${isActive
                                    ? "bg-white text-orange"
                                    : "text-white hover:bg-orange-700"}`
                            }
                        >
                            Dashboard
                        </NavLink>

                          <NavLink
                            to={`/agent/${id}/add-property`}
                            onClick={closeOnMobile}
                            className={({ isActive }) =>
                                `p-3 rounded transition
     ${isActive
                                    ? "bg-white text-orange"
                                    : "text-white hover:bg-orange-700"}`
                            }
                        >
                            Add Property
                        </NavLink>

                        

                        <NavLink
                            to={`/agent/${id}/profile`}
                            onClick={closeOnMobile}
                            className={({ isActive }) =>
                                `p-3 rounded transition
     ${isActive
                                    ? "bg-white text-orange"
                                    : "text-white hover:bg-orange-700"}`
                            }
                        >
                            Profile
                        </NavLink>

                    </nav>
                </div>

                {/* LOGOUT */}
                <button
                    onClick={logout}
                    className="mt-10 w-full flex items-center gap-2 justify-center
          bg-white text-orange py-2 rounded font-semibold
          hover:bg-gray-100 transition"
                >
                    <LogOut size={18} /> Logout
                </button>
            </aside>

            {/* CONTENT */}
            <main className="flex-1 p-6 bg-gray-100 md:ml-0">
                <Outlet />
            </main>

        </div>
    );
}
