import { useEffect, useState } from "react";
import PublicationCard from "./PublicationCard";

const Publications = () => {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        fetch("/data/publications.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch publications");
                }
                return res.json();
            })
            .then((data) => {
                const sortedData = [...data].sort((a, b) => {
                    if (a.year && b.year) return b.year - a.year;
                    return b.id - a.id;
                });
                setPublications(sortedData);
            })
            .catch((error) => {
                console.error("Error fetching publications:", error);
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

export default Publications;