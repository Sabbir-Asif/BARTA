import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-green-primary px-2 md:px-20 flex items-center">
            <div className="items-center">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/publications">Publications</NavLink></li>
                        <li><NavLink to="/ongoing-projects">Ongoing Projects</NavLink></li>
                        <li><NavLink to="/team">Meet with the Team</NavLink></li>
                    </ul>
                </div>
                <a className="text-4xl font-ruhi text-base-200 font-bold">BARTA</a>
            </div>
            <div className="hidden navbar-center lg:flex md:flex-grow lg:justify-center ">
                <ul className="menu menu-horizontal space-x-6 text-base-100 font-semibold text-lg font-nunito">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/publications">Publications</NavLink></li>
                    <li><NavLink to="/ongoing-projects">Ongoing Projects</NavLink></li>
                    <li><NavLink to="/team">Our Team</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
