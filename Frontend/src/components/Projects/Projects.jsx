import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import { IoEyeOutline } from "react-icons/io5";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [displayCount, setDisplayCount] = useState(4);
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

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

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section className="py-12 px-4 bg-cream-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold font-nunito text-center text-gray-700 mb-4 md:mb-8">
                    Our Research Projects
                </h2>

                <div className="overflow-x-auto rounded-md border border-gray-100">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-green-primary text-cream-primary">
                                <th className="font-nunito">Title</th>
                                <th className="font-nunito">Members</th>
                                <th className="font-nunito">Status</th>
                                <th className="font-nunito">Type</th>
                                <th className="font-nunito">Links</th>
                                <th className="font-nunito text-center">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.slice(0, displayCount).map((project, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white hover:bg-gray-100"}>
                                    <td className="font-medium font-nunito max-w-[230px] break-words whitespace-normal">{project.title}</td>
                                    <td className="font-nunito">{project.owner}</td>
                                    <td>
                                        <div className={`badge ${
                                            project.status === "ongoing" 
                                                ? "bg-green-primary/10 text-green-dark border-green-primary" 
                                                : "badge-outline"
                                        } font-nunito`}>
                                            {project.status || "N/A"}
                                        </div>
                                    </td>
                                    <td className="font-nunito">
                                        {project.type ? (
                                            <span className="badge bg-gray-100 text-green-dark border-none">
                                                {project.type}
                                            </span>
                                        ) : "N/A"}
                                    </td>
                                    <td>
                                        <div className="flex gap-2">
                                        <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-xs bg-green-primary text-cream-primary hover:bg-green-dark border-none font-nunito"
                                                >
                                                    Repo
                                                </a>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => openModal(project)}
                                            className="btn btn-xs bg-green-primary text-cream-primary hover:bg-green-dark border-none rounded-full px-3 flex items-center gap-1 mx-auto"
                                        >
                                            <IoEyeOutline size={16} />
                                            <span className="font-nunito">Details</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {projects.length > 4 && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleToggle}
                            className="bg-green-primary text-sm text-white px-6 py-1 rounded-md font-medium flex items-center gap-2 transition hover:bg-green-dark"
                        >
                            {showAll ? (
                                <>
                                    Show Less <HiChevronUp size={20} />
                                </>
                            ) : (
                                <>
                                    Show More <HiChevronDown size={20} />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    isOpen={modalOpen}
                    onClose={closeModal}
                />
            )}
        </section>
    );
};

export default Projects;