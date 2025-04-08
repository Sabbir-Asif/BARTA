import { useState } from "react";

const ProjectCard = ({ project }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="border border-gray-200 rounded-lg shadow-xs p-6 mb-4 transition-all hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-700 mb-2 font-nunito">
                {project.title}
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-2">
                <span className="font-semibold">Members:</span> {project.owner}
            </p>
            <div className="text-sm text-gray-500 mb-3 italic">
                {project.description && !showFullDescription ? (
                    <p className="text-gray-700">
                        {project.description.slice(0, 150)}...
                    </p>
                ) : (
                    <p className="text-gray-700">{project.description}</p>
                )}
                {project.description && (
                    <button
                        onClick={toggleDescription}
                        className="text-sm text-green-primary font-medium mt-2 hover:text-green-dark"
                    >
                        {showFullDescription ? "Show less" : "Show more"}
                    </button>
                )}
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
                <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 bg-green-primary text-base-100 hover:bg-green-dark rounded-md font-medium flex items-center"
                >
                    View Repo
                </a>
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-3 py-1 bg-gray-50 text-green-primary hover:text-green-dark rounded-md font-medium border-2 border-green-primary"
                    >
                        View Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
