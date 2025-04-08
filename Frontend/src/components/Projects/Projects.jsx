
const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch projects");
                }
                return res.json();
            })
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    }, []);
    
    return (
        <section className="py-12">
            <div className="">
                <h2 className="text-3xl font-bold font-nunito text-center text-gray-700 mb-6 md:mb-10">
                    Publications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {publications.map((publication) => (
                        <PublicationCard key={publication.id} publication={publication} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;