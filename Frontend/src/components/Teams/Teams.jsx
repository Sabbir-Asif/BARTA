import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);
    const [activeFilter, setActiveFilter] = useState('Co-Director'); // Changed from 'All' to 'Co-Director'

    useEffect(() => {
        fetch("/data/teams.json")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch teams");
                return res.json();
            })
            .then((data) => {
                setTeams(data);
                // Filter to show only Co-Directors by default
                setFilteredTeams(data.filter(member => member.role === 'Co-Director'));
            })
            .catch((error) => console.error("Error fetching teams:", error));
    }, []);

    const filterRoles = () => {
        const uniqueRoles = ['All', ...new Set(teams.map(member => member.role))];
        return uniqueRoles;
    };

    const handleFilterChange = (role) => {
        setActiveFilter(role);
        if (role === 'All') {
            setFilteredTeams(teams);
        } else {
            setFilteredTeams(teams.filter(member => member.role === role));
        }
    };

    return (
        <section className="bg-cream-primary">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-nunito text-center text-gray-700 mb-8 md:mb-16">
                    Meet Our Team
                </h2>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {teams.length > 0 && filterRoles().map((role, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterChange(role)}
                            className={`px-4 py-2 rounded-full text-md font-medium transition-all duration-300 ${activeFilter === role
                                    ? 'bg-green-primary text-white shadow-md'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                        >
                            {role}
                        </button>
                    ))}
                </div>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredTeams.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teams;