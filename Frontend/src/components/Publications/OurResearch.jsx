import React from 'react';

const OurResearch = () => {
  return (
    <div className="bg-green-primary py-12 h-[400px] lg:h-[550px]">
      <div className="container mx-auto max-w-6xl lg:max-w-7xl">
        <h2 className="text-3xl text-center text-cream-primary font-ruhi font-bold mb-8 lg:mb-16">Our Research Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Community Smell in Software Projects",
            "Software Development Team Formation",
            "Software Auto-Repairing",
            "Sentiment Analysis in Software Engineering",
            "Relationship between Change Couple and Fix-Inducing Changes",
            "Code Clone Lifetime Analysis"
          ].map((item, index) => (
            <div key={index} className="bg-green-dark bg-opacity-40 p-4 rounded-lg shadow-md hover:bg-green-secondary hover:bg-opacity-30 transition-all duration-300">
              <p className="text-cream-primary font-nunito">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurResearch;