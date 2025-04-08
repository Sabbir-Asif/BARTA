import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [displayCount, setDisplayCount] = useState(4);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch projects");
                return res.json();
            })
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    const handleToggle = () => {
        setShowAll(!showAll);
        setDisplayCount(!showAll ? projects.length : 4);
    };

    return (
        <section className="py-12">
            <div className="">
                <h2 className="text-3xl font-bold font-nunito text-center text-gray-700 mb-6 md:mb-10">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.slice(0, displayCount).map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                {projects.length > 4 && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={handleToggle}
                            className="bg-green-primary text-white px-6 py-1 text-sm rounded-md font-medium flex items-center gap-2 transition hover:bg-green-dark"
                        >
                            {showAll ? (
                                <>
                                    Show Less <IoIosArrowUp size={18} />
                                </>
                            ) : (
                                <>
                                    Show More <IoIosArrowDown size={18} />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
