const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bg-green-primary px-2 md:px-20 flex items-center z-50">
            <div className="container mx-auto flex items-center max-w-7xl">
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
                            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                            <li><button onClick={() => scrollToSection('publications')}>Publications</button></li>
                            <li><button onClick={() => scrollToSection('projects')}>Ongoing Projects</button></li>
                            <li><button onClick={() => scrollToSection('teams')}>Our Team</button></li>
                        </ul>
                    </div>
                    <a className="text-4xl font-ruhi text-base-200 font-bold">BARTA</a>
                </div>
                <div className="hidden navbar-center lg:flex md:flex-grow lg:justify-center">
                    <ul className="menu menu-horizontal space-x-6 text-base-100 font-semibold text-xl font-nunito">
                        <li><button onClick={() => scrollToSection('home')} className="hover:text-gray-200">Home</button></li>
                        <li><button onClick={() => scrollToSection('publications')} className="hover:text-gray-200">Publications</button></li>
                        <li><button onClick={() => scrollToSection('projects')} className="hover:text-gray-200">Ongoing Projects</button></li>
                        <li><button onClick={() => scrollToSection('teams')} className="hover:text-gray-200">Our Team</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;